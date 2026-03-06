"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Layers, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} />,
    title: "Discovery",
    description: "We start with a deep dive into your lifestyle, preferences, and the functional needs of your space."
  },
  {
    icon: <PenTool size={32} />,
    title: "Concept Design",
    description: "Our team develops mood boards, color palettes, and initial layouts for your review and feedback."
  },
  {
    icon: <Layers size={32} />,
    title: "Refinement",
    description: "We finalize materials, furniture selections, and 3D visualizations to bring the vision to life."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Execution",
    description: "From procurement to final styling, we manage every detail to ensure a flawless transformation."
  }
];

const Process = () => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">How We Work</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative text-center group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-stone-200 -z-0" />
              )}
              <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-sm border border-stone-100 flex items-center justify-center mx-auto mb-8 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-stone-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;