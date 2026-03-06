"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Projects Completed", value: "320+" },
  { label: "Design Awards", value: "24" },
  { label: "Happy Clients", value: "100%" }
];

const Stats = () => {
  return (
    <section className="py-20 bg-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-4xl md:text-6xl font-serif font-bold mb-2">{stat.value}</p>
              <p className="text-amber-100 text-sm uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;