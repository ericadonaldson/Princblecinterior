"use client";

import React from 'react';

const Footer = () => {
  const logoUrl = "dyad-media://media/crystal-parrot-glow/.dyad/media/d5d3727b20abe80b06b4902e1d0bb240.jpeg";

  return (
    <footer className="py-12 px-6 bg-stone-950 text-stone-500 border-t border-stone-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <img 
            src={logoUrl} 
            alt="Princblec Interior Logo" 
            className="h-10 w-auto brightness-0 invert"
          />
          <div className="text-xl font-serif font-bold tracking-tighter text-white">
            PRINCBLEC<span className="text-amber-600"> INTERIOR</span>
          </div>
        </div>
        
        <div className="flex space-x-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} Princblec Interior. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;