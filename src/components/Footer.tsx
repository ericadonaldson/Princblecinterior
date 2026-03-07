"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 bg-stone-950 text-stone-500 border-t border-stone-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-4 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/src/assets/logo.png" 
            alt="Princblec Interior Logo" 
            className="h-12 w-auto brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
          />
          <div className="text-xl font-serif font-bold tracking-tighter text-white">
            PRINCBLEC<span className="text-amber-600"> INTERIOR</span>
          </div>
        </Link>
        
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