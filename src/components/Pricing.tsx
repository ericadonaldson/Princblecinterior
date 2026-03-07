"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const packages = [
  {
    name: "BASIC",
    price: "Negotiable",
    description: "Perfect for single room refreshes and styling advice.",
    features: [
      "1 Room Consultation",
      "Mood Board & Color Palette",
      "Furniture Layout Plan",
      "Shopping List (Curated)",
      "1 Revision Round"
    ],
    popular: false
  },
  {
    name: "STANDARD",
    price: "Negotiable",
    description: "Comprehensive design for multiple rooms or small exteriors.",
    features: [
      "Up to 3 Rooms / Full Exterior",
      "3D Visualizations",
      "Material & Finish Selection",
      "Contractor Coordination",
      "3 Revision Rounds",
      "On-site Styling Session"
    ],
    popular: true
  },
  {
    name: "PREMIUM",
    price: "Negotiable",
    description: "Full-service luxury transformation for your entire property.",
    features: [
      "Full Home Interior & Exterior",
      "Photorealistic 3D Renders",
      "Custom Furniture Design",
      "Project Management",
      "Unlimited Revisions",
      "White Glove Installation"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="packages" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">Design Packages</h3>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto">Choose the level of service that best fits your vision and project scope.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div 
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${pkg.popular ? 'border-amber-600 shadow-xl ring-1 ring-amber-600' : 'border-stone-200'} flex flex-col`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold tracking-widest mb-2">{pkg.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif font-bold">{pkg.price}</span>
                </div>
                <p className="mt-4 text-stone-600 text-sm leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-stone-700">
                    <Check className="text-amber-600 mt-0.5 shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 rounded-xl font-bold ${pkg.popular ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'bg-stone-900 hover:bg-stone-800 text-white'}`}
              >
                Inquire Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;