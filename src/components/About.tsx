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
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1581570732182-2d12f9f74627?q=80&w=800&auto=format&fit=crop" 
                alt="Designer at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-100 rounded-3xl -z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-amber-600 rounded-full -z-0 hidden md:block" />
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
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <p className="text-3xl font-serif font-bold text-stone-900">12+</p>
                  <p className="text-sm uppercase tracking-wider font-bold text-stone-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-stone-900">250+</p>
                  <p className="text-sm uppercase tracking-wider font-bold text-stone-400">Projects Completed</p>
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