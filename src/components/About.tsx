"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=1000&auto=format&fit=crop" 
                alt="Designer at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-amber-100 rounded-[3rem] -z-0 hidden md:block" />
            <div className="absolute -top-8 -left-8 w-40 h-40 border-2 border-amber-600/30 rounded-full -z-0 hidden md:block animate-pulse" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-8 leading-tight">
              Designing Spaces That Tell Your Unique Story
            </h3>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                At Princblec Interior, we believe that your home should be a reflection of your journey, your tastes, and your aspirations. We don't just follow trends; we create timeless environments that resonate with the people who live in them.
              </p>
              <p>
                Our approach combines architectural precision with artistic flair. Whether it's a sun-drenched patio or a moody, sophisticated study, we focus on the interplay of light, texture, and form to evoke emotion and ensure comfort.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <p className="text-4xl font-serif font-bold text-stone-900">12+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-amber-600 mt-1">Years Experience</p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <p className="text-4xl font-serif font-bold text-stone-900">250+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-amber-600 mt-1">Projects Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;