"use client";

import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryVideoProps {
  url: string;
  title: string;
  category: string;
}

const GalleryVideo = ({ url, title, category }: GalleryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative group overflow-hidden rounded-3xl break-inside-avoid bg-stone-100 cursor-pointer"
      onClick={togglePlay}
    >
      <video 
        ref={videoRef}
        src={url} 
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        loop
        playsInline
        muted
      />
      
      {/* Play/Pause Button Overlay */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
        isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
      )}>
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl">
          {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} className="ml-1" fill="currentColor" />}
        </div>
      </div>

      {/* Info Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 flex flex-col justify-end p-8 text-white pointer-events-none",
        isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
      )}>
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">{category}</span>
        <h4 className="text-xl font-serif">{title}</h4>
        <span className="text-[10px] mt-2 text-stone-300 uppercase tracking-widest">
          {isPlaying ? "Click to pause" : "Click to play"}
        </span>
      </div>
    </div>
  );
};

export default GalleryVideo;