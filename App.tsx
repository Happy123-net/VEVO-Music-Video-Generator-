
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FileUpload } from './components/FileUpload';
import { VideoPlayer } from './components/VideoPlayer';
import { PublishModal } from './components/PublishModal';
import { GenerationStatus } from './types';
import { LOADING_MESSAGES } from './constants';
import { generateMusicVideo } from './services/geminiService';
import { GithubIcon, VevoIcon } from './components/icons';

const App: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [error, setError] = useState<string | null>(null);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  
  const [loadingMessage, setLoadingMessage] = useState<string>(LOADING_MESSAGES[0]);
  const [progress, setProgress] = useState<string | null>(null);
  const [showPublishModal, setShowPublishModal] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (status === GenerationStatus.GENERATING) {
      const interval = setInterval(() => {
        setLoadingMessage(prev => {
          const currentIndex = LOADING_MESSAGES.indexOf(prev);
          const nextIndex = (currentIndex + 1) % LOADING_MESSAGES.length;
          return LOADING_MESSAGES[nextIndex];
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [status]);
  
  const handleFileChange = (file: File | null) => {
    setAudioFile(file);
    if(file){
        setAudioUrl(URL.createObjectURL(file));
    } else {
        setAudioUrl(null);
    }
  };

  const handleGenerate = async () => {
    if (!audioFile || !prompt) {
      setError("Please upload an audio file and provide a prompt.");
      return;
    }

    setStatus(GenerationStatus.GENERATING);
    setError(null);
    setGeneratedVideoUrl(null);
    setProgress('Initializing generation...');

    try {
      const videoBlobUrl = await generateMusicVideo(prompt, (update) => setProgress(update));
      setGeneratedVideoUrl(videoBlobUrl);
      setStatus(GenerationStatus.SUCCESS);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred during video generation.";
      setError(errorMessage);
      setStatus(GenerationStatus.ERROR);
    } finally {
        setProgress(null);
    }
  };

  const isGenerating = status === GenerationStatus.GENERATING;
  const canGenerate = !!audioFile && prompt.trim().length > 0 && !isGenerating;

  const resetState = () => {
      setAudioFile(null);
      setPrompt('');
      setStatus(GenerationStatus.IDLE);
      setError(null);
      setGeneratedVideoUrl(null);
      setAudioUrl(null);
      setShowPublishModal(false);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <VevoIcon className="h-10 w-10 text-brand-pink"/>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Audio to Music Video</h1>
            <p className="text-sm text-gray-400">Powered by Gemini AI</p>
          </div>
        </div>
        <a href="https://github.com/google/genai-js" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon className="h-7 w-7"/>
        </a>
      </header>

      <main className="flex-grow w-full max-w-6xl mx-auto flex items-center justify-center">
        <div className="w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700">
          
          {status === GenerationStatus.IDLE && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">1. Upload Your Audio</h2>
                    <p className="text-gray-400 text-sm mb-4">Upload your track in MP3, WAV, or any standard audio format.</p>
                    <FileUpload onFileChange={handleFileChange} />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-white">2. Describe Your Vision</h2>
                    <p className="text-gray-400 text-sm mb-4">Enter a prompt describing the music video you want to create.</p>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., A neon hologram of a cat driving a sports car at top speed through a futuristic city."
                        className="w-full h-32 p-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-brand-purple transition"
                        disabled={isGenerating}
                    />
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={!canGenerate}
                  className="w-full bg-brand-pink hover:bg-opacity-90 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-brand-pink"
                >
                  Generate Music Video
                </button>
              </div>
              <div className="hidden md:flex flex-col items-center justify-center bg-gray-900/50 rounded-lg p-8 border border-dashed border-gray-700">
                <VevoIcon className="h-24 w-24 text-gray-600 mb-4" />
                <p className="text-gray-500 text-center">Your generated video will appear here.</p>
                <p className="text-xs text-gray-600 mt-2">The fastest VEVO music video generator for artists.</p>
              </div>
            </div>
          )}

          {isGenerating && (
            <div className="flex flex-col items-center justify-center h-96">
                <div className="w-16 h-16 border-4 border-brand-pink border-t-transparent rounded-full animate-spin mb-6"></div>
                <p className="text-lg font-semibold animate-pulse-fast">{loadingMessage}</p>
                {progress && <p className="text-gray-400 mt-2">{progress}</p>}
            </div>
          )}

          {status === GenerationStatus.SUCCESS && generatedVideoUrl && audioUrl && (
            <div className="flex flex-col items-center">
              <VideoPlayer 
                videoSrc={generatedVideoUrl} 
                audioSrc={audioUrl}
                videoRef={videoRef}
                audioRef={audioRef}
              />
              <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md">
                <button onClick={() => setShowPublishModal(true)} className="flex-1 bg-brand-pink hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105">
                  Download & Publish
                </button>
                <button onClick={resetState} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105">
                  Create New Video
                </button>
              </div>
            </div>
          )}

          {(status === GenerationStatus.ERROR) && (
             <div className="flex flex-col items-center justify-center h-96 text-center">
                 <p className="text-red-500 text-lg mb-4">Something went wrong!</p>
                 <p className="text-gray-300 max-w-md mb-6">{error}</p>
                 <button onClick={resetState} className="bg-brand-purple hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded-lg transition">
                     Try Again
                 </button>
             </div>
          )}
        </div>
      </main>

      <PublishModal 
        isOpen={showPublishModal} 
        onClose={() => setShowPublishModal(false)} 
        videoUrl={generatedVideoUrl}
      />
    </div>
  );
};

export default App;
