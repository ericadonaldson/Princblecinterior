"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    content: "Lumina Decor completely transformed our living room. Their eye for detail and ability to mix modern pieces with our family heirlooms was incredible.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Real Estate Developer",
    content: "The exterior design for our latest project was a game-changer. The curb appeal increased significantly, and the outdoor living space is now the main selling point.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Restaurateur",
    content: "Professional, creative, and timely. They understood our brand vision perfectly and delivered a space that our customers absolutely love.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-stone-50 border border-stone-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-stone-200" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-stone-700 text-lg italic mb-8 leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-bold text-stone-900">{review.name}</p>
                <p className="text-sm text-stone-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;