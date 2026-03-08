"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Mazi Okeke",
    role: "Founder & CEO of Just10 Homes | Comedian",
    content: "Princblec Interior brought a level of sophistication to Just10 Homes that we hadn't seen before. The attention to detail is simply unmatched and the results speak for themselves.",
    rating: 5
  },
  {
    name: "Desktalker",
    role: "Comedian",
    content: "As a comedian, I appreciate timing and precision. Princblec delivered exactly that with my home renovation. It's now my favorite place to relax and find inspiration.",
    rating: 5
  },
  {
    name: "Mr. Osita",
    role: "Entrepreneur",
    content: "The transformation of my office space has significantly boosted my productivity. An entrepreneur needs a space that inspires, and that's exactly what I got from this team.",
    rating: 5
  },
  {
    name: "Kenny Black",
    role: "Comedian",
    content: "The creativity shown in the design process was mind-blowing. My space now has a rhythm and soul that perfectly matches my personality. Truly exceptional work!",
    rating: 5
  },
  {
    name: "Mr. T",
    role: "Content Creator",
    content: "Creating content requires the perfect backdrop. Princblec designed a studio space for me that looks amazing on camera and feels even better in person. My followers love it!",
    rating: 5
  },
  {
    name: "Mr. Mike",
    role: "Entrepreneur",
    content: "Professionalism at its peak. The project was delivered on time and exceeded all my expectations. Highly recommended for any serious business owner looking to elevate their space.",
    rating: 5
  },
  {
    name: "Mr. Kayode",
    role: "Comedian",
    content: "I'm usually the one making people smile, but seeing the final result of my interior design made me the happiest person in the room. The transformation is just incredible.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-stone-50 border border-stone-100 relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-8 text-stone-200" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-stone-700 text-lg italic mb-8 leading-relaxed flex-grow">"{review.content}"</p>
              <div className="mt-auto">
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