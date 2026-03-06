"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const MeetDesigner = () => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-stone-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[400px] lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Lead Designer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4">The Visionary</span>
              <h3 className="text-4xl font-serif font-medium text-stone-900 mb-6">Meet Elena Vance</h3>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                "I believe that a well-designed home is the foundation for a well-lived life. My mission is to strip away the clutter and reveal the soul of every space I touch, creating environments that inspire peace and creativity."
              </p>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer">
                  <Mail size={20} />
                </div>
              </div>

              <div className="pt-8 border-t border-stone-100">
                <p className="text-stone-400 text-sm uppercase tracking-widest font-bold mb-2">Founder & Lead Designer</p>
                <p className="text-stone-900 font-serif text-xl italic">Lumina Decor Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDesigner;