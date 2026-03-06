"use client";

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Maximize2, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const projects = {
  "modern-minimalist-living": {
    title: "Modern Minimalist Living",
    category: "Interior",
    location: "Manhattan, NY",
    date: "August 2023",
    description: "A complete overhaul of a 2,500 sq ft loft, focusing on clean lines, natural light, and a neutral palette to create a serene urban sanctuary.",
    challenge: "The main challenge was to maintain a minimalist aesthetic while ensuring the space felt warm and lived-in for a young family.",
    solution: "We utilized a mix of textures—raw oak, brushed linen, and polished concrete—to add depth without visual clutter.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop"
    ],
    features: ["Custom Cabinetry", "Smart Lighting System", "Sustainable Materials", "Open Concept Layout"]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects] || projects["modern-minimalist-living"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/#portfolio" className="inline-flex items-center text-amber-600 font-bold text-sm mb-12 hover:gap-2 transition-all">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            <div className="lg:col-span-2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-serif font-medium text-stone-900 mb-8"
              >
                {project.title}
              </motion.h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-10">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-lg font-bold mb-4">The Challenge</h3>
                  <p className="text-stone-500 leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">The Solution</h3>
                  <p className="text-stone-500 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-3xl p-8 h-fit border border-stone-100">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Location</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Completed</p>
                    <p className="font-medium">{project.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-sm">
                    <Maximize2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-stone-200">
                <h4 className="font-bold mb-6">Key Features</h4>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-stone-600">
                      <CheckCircle2 size={16} className="text-amber-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {project.images.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden"
              >
                <img src={img} alt={`${project.title} detail ${index + 1}`} className="w-full h-auto object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center bg-stone-900 rounded-[3rem] p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Inspired by this project?</h2>
            <p className="text-stone-400 mb-10 max-w-xl mx-auto">Let's discuss how we can bring a similar level of detail and sophistication to your own space.</p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 rounded-2xl text-lg font-bold">
              Start Your Project
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;