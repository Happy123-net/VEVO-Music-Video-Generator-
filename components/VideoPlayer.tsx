
import React, { useState } from 'react';
import { PlayIcon, PauseIcon, MuteIcon, UnmuteIcon } from './icons';

interface VideoPlayerProps {
  videoSrc: string;
  audioSrc: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, audioSrc, videoRef, audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (video && audio) {
      if (isPlaying) {
        video.pause();
        audio.pause();
      } else {
        video.play();
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
      const audio = audioRef.current;
      if (audio) {
          audio.muted = !isMuted;
          setIsMuted(!isMuted);
      }
  }
  
  const handlePlaybackEnd = () => {
      setIsPlaying(false);
      // Optionally reset to beginning
      if (videoRef.current) videoRef.current.currentTime = 0;
      if (audioRef.current) audioRef.current.currentTime = 0;
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black border border-gray-700">
      <div className="relative group">
        <video 
            ref={videoRef} 
            src={videoSrc} 
            className="w-full h-full" 
            muted 
            loop
            playsInline
            onEnded={handlePlaybackEnd}
        />
        <audio ref={audioRef} src={audioSrc} onEnded={handlePlaybackEnd}></audio>
        
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded-sm">
            <p className="text-white text-xl font-extrabold tracking-wider">VEVO</p>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-4">
                <button onClick={togglePlayPause} className="text-white p-4 bg-black/50 rounded-full hover:bg-brand-pink transition-colors">
                    {isPlaying ? <PauseIcon className="w-8 h-8"/> : <PlayIcon className="w-8 h-8"/>}
                </button>
                 <button onClick={toggleMute} className="text-white p-3 bg-black/50 rounded-full hover:bg-brand-pink transition-colors">
                    {isMuted ? <MuteIcon className="w-5 h-5"/> : <UnmuteIcon className="w-5 h-5"/>}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
