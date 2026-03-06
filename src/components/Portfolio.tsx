"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "modern-minimalist-living",
    title: "Modern Minimalist Living",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mediterranean-terrace",
    title: "Mediterranean Terrace",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "urban-loft-kitchen",
    title: "Urban Loft Kitchen",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "zen-garden-retreat",
    title: "Zen Garden Retreat",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "classic-master-suite",
    title: "Classic Master Suite",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "contemporary-poolside",
    title: "Contemporary Poolside",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Interior", "Exterior"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-8">Curated Spaces</h3>
          
          <div className="flex justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20" 
                    : "bg-white text-stone-500 hover:bg-stone-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer"
              >
                <Link to={`/project/${project.id}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">{project.category}</span>
                    <h4 className="text-2xl font-serif">{project.title}</h4>
                    <p className="text-sm text-stone-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">View Project Details →</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;