"use client";

import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Modern Minimalist Living",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    title: "Mediterranean Terrace",
    category: "Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    title: "Serene Bedroom",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    title: "Architectural Exterior",
    category: "Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    title: "Contemporary Kitchen",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=800&auto=format&fit=crop",
    title: "Zen Garden",
    category: "Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    title: "Urban Loft",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
    title: "Luxury Poolside",
    category: "Exterior"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Visual Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Our Design Gallery</h3>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto">A collection of our favorite transformations, from intimate interiors to grand outdoor spaces.</p>
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