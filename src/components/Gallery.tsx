"use client";

import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { url: "/gallery/project-1.jpg", title: "Elegant Living Room", category: "Interior" },
  { url: "/gallery/project-2.jpg", title: "Modern Media Wall", category: "Interior" },
  { url: "/gallery/project-3.jpg", title: "Sleek TV Unit", category: "Interior" },
  { url: "/gallery/project-4.jpg", title: "Bespoke Entertainment Center", category: "Interior" },
  { url: "/gallery/project-5.jpg", title: "Contemporary Kitchen", category: "Interior" },
  { url: "/gallery/project-6.jpg", title: "Luxury Feature Wall", category: "Interior" },
  { url: "/gallery/project-7.jpg", title: "Sophisticated Dining Area", category: "Interior" },
  { url: "/gallery/project-8.jpg", title: "Minimalist Dining Space", category: "Interior" },
  { url: "/gallery/project-9.jpg", title: "Custom Shelving Design", category: "Interior" },
  { url: "/gallery/project-10.jpg", title: "Handcrafted Furniture", category: "Interior" },
  { url: "/gallery/project-11.jpg", title: "High-Gloss Media Console", category: "Interior" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Visual Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Our Design Gallery</h3>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto">A collection of our favorite transformations, showcasing our commitment to excellence and detail.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl break-inside-avoid"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">{image.category}</span>
                <h4 className="text-xl font-serif">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;