"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Just10 Homes", logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop" },
  { name: "House of Destalker", logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop" },
  { name: "KBB Studio", logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop" },
  { name: "Luxury Hotels", logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop" },
  { name: "Modern Estates", logo: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&auto=format&fit=crop" }
];

const Partners = () => {
  return (
    <section className="py-16 bg-stone-50 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-stone-400 text-xs font-bold uppercase tracking-[0.3em] mb-10">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-8 md:h-10"
            >
              <span className="text-xl font-serif font-bold text-stone-800 tracking-tighter">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;