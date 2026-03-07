"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-stone-950 text-stone-500 border-t border-stone-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <img 
            src="/src/assets/logo.png" 
            alt="Princblec Interior Logo" 
            className="h-14 w-auto brightness-0 invert"
          />
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