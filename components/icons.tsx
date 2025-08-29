
import React from 'react';

type IconProps = {
  className?: string;
};

export const UploadIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

export const VevoIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path d="M 52.8,256 H 0 L 79,0 h 42.5 z m 124.6,-1 L 115.6,0 h 42.4 l 62,255 z"/>
    </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
    </svg>
);

export const TikTokIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.98-1.5-1.9-2.2-4.41-1.8-6.83.12-.71.3-1.4.53-2.07.03-.1.08-.19.12-.28.1-.15.18-.32.29-.47.03-.04.03-.09.07-.13.01-.02.01-.04.02-.06.04-.07.07-.15.11-.22.09-.15.19-.3.28-.45.03-.05.05-.09.08-.14.02-.05.04-.1.05-.14l.05-.09.04-.08.04-.07.02-.04.03-.05.02-.03.01-.02.02-.03.01-.02.01-.01c.02-.04.05-.08.07-.12s.04-.09.07-.13c.03-.06.07-.11.1-.17.02-.04.03-.07.05-.11.01-.02.02-.04.03-.07.01-.02.02-.04.03-.06.01-.03.03-.06.04-.09.01-.03.02-.05.03-.08.01-.03.03-.06.04-.08.02-.04.03-.08.05-.12.01-.02.02-.05.02-.07.01-.03.02-.05.03-.08.01-.03.02-.06.03-.09.01-.04.02-.08.03-.12.01-.04.02-.07.02-.11.01-.03.02-.06.03-.1.02-.07.03-.14.05-.2.03-.1.06-.2.09-.29.03-.1.07-.19.1-.28.03-.09.06-.18.09-.26.04-.1.08-.2.12-.3.01-.03.02-.05.03-.08.04-.1.08-.19.12-.29.04-.1.09-.2.13-.3.02-.05.04-.1.06-.15.02-.06.05-.12.07-.17.03-.07.06-.15.09-.22.03-.07.07-.14.1-.21.02-.05.04-.1.06-.15.03-.08.06-.17.09-.25.03-.08.07-.16.1-.24.03-.08.06-.16.09-.24.03-.08.07-.15.1-.23.03-.08.06-.15.09-.23.01-.02.02-.05.03-.07.03-.09.07-.17.1-.26.03-.09.07-.17.1-.26.04-.1.08-.2.12-.29.04-.1.09-.2.13-.29.04-.1.08-.2.12-.3.04-.1.09-.2.13-.29.04-.1.08-.2.12-.3.01-.01.01-.02.02-.03s.02-.04.03-.05.02-.04.04-.06.02-.03.03-.05.02-.04.03-.06.02-.03.04-.05.02-.04.03-.06.02-.03.03-.05.01-.02.02-.03.02-.03.03-.05.01-.02.02-.03.02-.04.03-.06.01-.02.02-.03.02-.03.03-.05.01-.02.02-.03.02-.03.03-.05.01-.02.02-.03c1.53-2.15 3.7-3.48 6.07-3.51z"/>
    </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const PauseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

export const MuteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
    </svg>
);

export const UnmuteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
    </svg>
);

export const XIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);
