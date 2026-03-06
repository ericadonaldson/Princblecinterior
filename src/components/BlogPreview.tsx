"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: "The Art of Mixing Textures in Modern Living Rooms",
    excerpt: "Discover how to balance velvet, wood, and metal to create a space that feels both cozy and sophisticated.",
    date: "Oct 12, 2023",
    author: "Elena Vance",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    category: "Interior Tips"
  },
  {
    title: "5 Sustainable Materials for Your Next Renovation",
    excerpt: "Eco-friendly design doesn't mean sacrificing style. Here are our top picks for sustainable luxury.",
    date: "Sep 28, 2023",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    category: "Sustainability"
  },
  {
    title: "Maximizing Small Outdoor Spaces: A Guide",
    excerpt: "Even the smallest balcony can become a sanctuary with the right layout and plant selection.",
    date: "Sep 15, 2023",
    author: "Elena Vance",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    category: "Exterior Design"
  }
];

const BlogPreview = () => {
  return (
    <section id="journal" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Journal</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Design Inspiration</h3>
          </div>
          <Button variant="ghost" className="text-amber-600 hover:text-amber-700 font-bold group">
            View All Articles
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-600">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-stone-400 text-xs mb-3">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-amber-600 transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;