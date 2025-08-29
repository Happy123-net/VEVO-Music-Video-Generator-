
import React from 'react';
import { DownloadIcon, TikTokIcon, YouTubeIcon, XIcon } from './icons';

interface PublishModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | null;
}

export const PublishModal: React.FC<PublishModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    if (videoUrl) {
      const a = document.createElement('a');
      a.href = videoUrl;
      a.download = 'vevo-music-video.mp4';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg p-8 border border-gray-700 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
            <XIcon className="w-6 h-6"/>
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">Export & Publish Your Video</h2>
        <p className="text-gray-400 mb-6">Your VEVO music video is ready! Follow these steps to share it with the world.</p>

        <div className="space-y-4 text-gray-300">
            <div className="p-4 bg-gray-900/50 rounded-lg">
                <h3 className="font-semibold text-white mb-1">Important Note:</h3>
                <p className="text-sm">This generates a silent video file. You'll need to use a video editor (like CapCut, iMovie, or Adobe Premiere) to combine your original audio track with this video before uploading.</p>
            </div>
            <div>
              <span className="font-bold text-brand-pink mr-2">Step 1:</span> Download the silent video file.
            </div>
            <div>
              <span className="font-bold text-brand-pink mr-2">Step 2:</span> Open a video editor and add this video and your original audio file.
            </div>
            <div>
              <span className="font-bold text-brand-pink mr-2">Step 3:</span> Make sure they are aligned, then export the final music video.
            </div>
            <div>
              <span className="font-bold text-brand-pink mr-2">Step 4:</span> Publish to your platform of choice. You'll need a channel first!
            </div>
        </div>
        
        <div className="mt-8">
            <button onClick={handleDownload} className="w-full bg-brand-pink hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-transform transform hover:scale-105">
                <DownloadIcon className="w-5 h-5"/>
                <span>Download Silent Video (.mp4)</span>
            </button>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://youtube.com/upload" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <YouTubeIcon className="w-6 h-6"/>
                <span>Publish on YouTube</span>
              </a>
              <a href="https://tiktok.com/upload" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <TikTokIcon className="w-5 h-5"/>
                <span>Publish on TikTok</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};
