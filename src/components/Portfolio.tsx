"use client";

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Modern Minimalist Living",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Mediterranean Terrace",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Urban Loft Kitchen",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Zen Garden Retreat",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Classic Master Suite",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Contemporary Poolside",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Curated Spaces</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">{project.category}</span>
                <h4 className="text-2xl font-serif">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;