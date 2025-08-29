
import { GoogleGenAI } from "@google/genai";

const checkApiKey = () => {
  if (!process.env.API_KEY) {
    throw new Error(
      "API_KEY environment variable not set. Please refer to the project's README for setup instructions."
    );
  }
};

const pollOperation = async <T,>(
  ai: GoogleGenAI, 
  operation: any, 
  onProgress: (update: string) => void
): Promise<any> => {
  onProgress('Waiting for operation to complete...');
  let currentOperation = operation;
  while (!currentOperation.done) {
    await new Promise(resolve => setTimeout(resolve, 10000)); // Poll every 10 seconds
    onProgress('Checking video generation status...');
    currentOperation = await ai.operations.getVideosOperation({ operation: currentOperation });
  }
  onProgress('Operation finished.');
  return currentOperation;
};

export const generateMusicVideo = async (
  prompt: string,
  onProgress: (update: string) => void
): Promise<string> => {
  checkApiKey();
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  onProgress("Starting video generation with Gemini...");
  let operation = await ai.models.generateVideos({
    model: 'veo-2.0-generate-001',
    prompt: prompt,
    config: {
      numberOfVideos: 1,
    }
  });

  const finalOperation = await pollOperation(ai, operation, onProgress);

  const downloadLink = finalOperation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) {
    throw new Error("Video generation succeeded but no download link was found.");
  }

  onProgress("Downloading generated video...");
  
  // The API Key needs to be appended to the download URL
  const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  if (!response.ok) {
    throw new Error(`Failed to download video: ${response.statusText}`);
  }

  const videoBlob = await response.blob();
  onProgress("Video downloaded successfully!");

  return URL.createObjectURL(videoBlob);
};
