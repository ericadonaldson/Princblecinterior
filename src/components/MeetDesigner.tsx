"use client";

import React from 'react';
import { Instagram, Mail, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MeetDesigner = () => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3.5rem] overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[500px] lg:h-auto relative group overflow-hidden">
              <img 
                src="/src/assets/blessing.png" 
                alt="Akporuru Blessing - Lead Designer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="p-12 lg:p-24 flex flex-col justify-center bg-white">
              <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs mb-6">The Visionary</span>
              <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-8">Meet Akporuru Blessing</h3>
              <p className="text-stone-600 text-xl leading-relaxed mb-10 italic font-serif">
                "I believe that a well-designed home is the foundation for a well-lived life. My mission is to reveal the soul of every space I touch, creating environments that inspire peace and creativity."
              </p>
              
              <div className="flex items-center gap-4 mb-12">
                <a 
                  href="https://instagram.com/princblecinterior" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300"
                >
                  <Instagram size={22} />
                </a>
                <a 
                  href="https://tiktok.com/@princblecinterior" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300"
                >
                  <Music2 size={22} />
                </a>
                <a 
                  href="mailto:akporurublessing@gmail.com"
                  className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white hover:shadow-lg hover:shadow-amber-600/20 transition-all duration-300"
                >
                  <Mail size={22} />
                </a>
              </div>

              <div className="pt-10 border-t border-stone-100">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Founder & Lead Designer</p>
                <p className="text-stone-900 font-serif text-2xl">Prinblec Interrior Studio</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetDesigner;