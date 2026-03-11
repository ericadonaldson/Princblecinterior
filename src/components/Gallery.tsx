"use client";

import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { type: 'image', url: "/gallery/project-1.jpg", title: "Elegant Living Room", category: "Interior" },
  { type: 'video', url: "/gallery/video-1.mp4", title: "Interior Showcase", category: "Interior" },
  { type: 'image', url: "/gallery/project-2.jpg", title: "Modern Media Wall", category: "Interior" },
  { type: 'video', url: "/gallery/video-2.mp4", title: "Bedroom Transformation", category: "Interior" },
  { type: 'image', url: "/gallery/project-3.jpg", title: "Sleek TV Unit", category: "Interior" },
  { type: 'video', url: "/gallery/video-3.mp4", title: "Bunk Bed Design", category: "Furniture" },
  { type: 'image', url: "/gallery/project-4.jpg", title: "Bespoke Entertainment Center", category: "Interior" },
  { type: 'video', url: "/gallery/video-4.mp4", title: "Storage Solutions", category: "Furniture" },
  { type: 'image', url: "/gallery/project-5.jpg", title: "Contemporary Kitchen", category: "Interior" },
  { type: 'video', url: "/gallery/video-5.mp4", title: "Floating Bed Design", category: "Interior" },
  { type: 'image', url: "/gallery/project-6.jpg", title: "Luxury Feature Wall", category: "Interior" },
  { type: 'video', url: "/gallery/video-6.mp4", title: "Full Room Furnishing", category: "Interior" },
  { type: 'image', url: "/gallery/project-7.jpg", title: "Sophisticated Dining Area", category: "Interior" },
  { type: 'video', url: "/gallery/video-7.mp4", title: "Home Decor Details", category: "Interior" },
  { type: 'image', url: "/gallery/project-8.jpg", title: "Minimalist Dining Space", category: "Interior" },
  { type: 'video', url: "/gallery/video-8.mp4", title: "Living Room Concept", category: "Interior" },
  { type: 'image', url: "/gallery/project-9.jpg", title: "Custom Shelving Design", category: "Interior" },
  { type: 'video', url: "/gallery/video-9.mp4", title: "Modern Living Space", category: "Interior" },
  { type: 'image', url: "/gallery/project-10.jpg", title: "Handcrafted Furniture", category: "Interior" },
  { type: 'video', url: "/gallery/video-10.mp4", title: "Luxury Bed Design", category: "Furniture" },
  { type: 'image', url: "/gallery/project-11.jpg", title: "High-Gloss Media Console", category: "Interior" },
  { type: 'video', url: "/gallery/video-11.mp4", title: "Sofa & Bedframe Set", category: "Furniture" },
  { type: 'video', url: "/gallery/video-12.mp4", title: "Ongoing Project", category: "Interior" },
  { type: 'video', url: "/gallery/video-13.mp4", title: "Project Highlights", category: "Interior" },
  { type: 'video', url: "/gallery/video-14.mp4", title: "TV Console Design", category: "Furniture" },
  { type: 'video', url: "/gallery/video-15.mp4", title: "X Console Design", category: "Furniture" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Visual Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Our Design Gallery</h3>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto">A collection of our favorite transformations, showcasing our commitment to excellence and detail through photos and videos.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-3xl break-inside-avoid bg-stone-100"
            >
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <video 
                  src={item.url} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
                />
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white pointer-events-none">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">{item.category}</span>
                <h4 className="text-xl font-serif">{item.title}</h4>
                {item.type === 'video' && (
                  <span className="text-[10px] mt-2 text-stone-300 uppercase tracking-widest">Hover to play video</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;