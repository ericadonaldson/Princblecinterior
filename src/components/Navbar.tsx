"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-bold tracking-tighter text-primary">
          LUMINA<span className="text-amber-600">DECOR</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-amber-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 border-l pl-8 border-gray-200">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-600 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="mailto:hello@luminadecor.com" className="hover:text-amber-600 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t">
            <Instagram />
            <Facebook />
            <Mail />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;