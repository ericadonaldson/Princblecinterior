"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Mail, Music2, Facebook } from 'lucide-react';

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
            src="/src/images/logo.png" 
            alt="Prinblec Interior Logo" 
            className="h-12 w-auto brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
          />
          <div className="text-xl font-serif font-bold tracking-tighter text-white">
            PRINBLEC<span className="text-amber-600"> INTERIOR</span>
          </div>
        </Link>
        
        <div className="flex items-center space-x-6">
          <a href="https://www.instagram.com/prinblec_interior/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/share/1AU4rXDuQ7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
          <a href="https://tiktok.com/@princblecinterior" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Music2 size={20} />
          </a>
          <a href="mailto:akporurublessing@gmail.com" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} Prinblec Interior. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;