"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sun, Paintbrush, Layout, Sofa, TreePine } from 'lucide-react';

const serviceList = [
  {
    icon: <Home size={28} />,
    title: "Residential Interior",
    description: "Complete home transformations tailored to your lifestyle and aesthetic preferences."
  },
  {
    icon: <Sun size={28} />,
    title: "Outdoor Living",
    description: "Designing breathtaking patios, terraces, and garden retreats for year-round enjoyment."
  },
  {
    icon: <Paintbrush size={28} />,
    title: "Color Consultation",
    description: "Expert guidance on palettes that evoke the right mood and enhance your space's lighting."
  },
  {
    icon: <Layout size={28} />,
    title: "Space Planning",
    description: "Optimizing your floor plan for better flow, functionality, and a sense of openness."
  },
  {
    icon: <Sofa size={28} />,
    title: "Furniture Sourcing",
    description: "Curating unique, high-quality pieces that fit your style and budget perfectly."
  },
  {
    icon: <TreePine size={28} />,
    title: "Landscape Design",
    description: "Integrating natural elements and structural design to create harmonious exteriors."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Tailored Solutions for Every Space</h3>
          </div>
          <p className="text-stone-500 max-w-sm">
            From the initial sketch to the final finishing touch, we provide comprehensive design services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {serviceList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-stone-900">{service.title}</h4>
              <p className="text-stone-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;