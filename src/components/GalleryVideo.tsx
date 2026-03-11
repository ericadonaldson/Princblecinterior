"use client";

import React, { useRef, useEffect } from 'react';

interface GalleryVideoProps {
  url: string;
  title: string;
  category: string;
}

const GalleryVideo = ({ url, title, category }: GalleryVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(error => {
                // Autoplay might be blocked by browser if not muted or no user interaction
                console.log("Autoplay prevented:", error);
              });
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative group overflow-hidden rounded-3xl break-inside-avoid bg-stone-100">
      <video 
        ref={videoRef}
        src={url} 
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white pointer-events-none">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">{category}</span>
        <h4 className="text-xl font-serif">{title}</h4>
        <span className="text-[10px] mt-2 text-stone-300 uppercase tracking-widest">Auto-playing on scroll</span>
      </div>
    </div>
  );
};

export default GalleryVideo;