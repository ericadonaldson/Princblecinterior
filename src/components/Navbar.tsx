"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/src/logo.png" 
            alt="Prinblec Interior Logo" 
            className={cn(
              "h-10 md:h-14 w-auto transition-all duration-500 drop-shadow-md",
              isScrolled ? "mix-blend-multiply" : "brightness-0 invert opacity-90"
            )}
          />
          <div className={cn(
            "text-lg md:text-xl font-serif font-bold tracking-tighter transition-colors duration-500",
            isScrolled ? "text-stone-900" : "text-stone-200"
          )}>
            PRINBLEC<span className="text-amber-600"> INTERIOR</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-500 hover:text-amber-600",
                isScrolled ? "text-stone-600" : "text-stone-300"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className={cn(
            "flex items-center space-x-4 border-l pl-8 transition-colors duration-500",
            isScrolled ? "border-stone-200" : "border-white/20"
          )}>
            <a 
              href="https://www.instagram.com/prinblec_interior/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "transition-colors duration-500 hover:text-amber-600",
                isScrolled ? "text-stone-600" : "text-stone-300"
              )}
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/share/1AU4rXDuQ7/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "transition-colors duration-500 hover:text-amber-600",
                isScrolled ? "text-stone-600" : "text-stone-300"
              )}
            >
              <Facebook size={18} />
            </a>
            <a 
              href="mailto:akporurublessing@gmail.com" 
              className={cn(
                "transition-colors duration-500 hover:text-amber-600",
                isScrolled ? "text-stone-600" : "text-stone-300"
              )}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden transition-colors duration-500",
            isScrolled ? "text-stone-900" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col space-y-4 md:hidden animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-stone-900"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-stone-100">
            <a href="https://www.instagram.com/prinblec_interior/" target="_blank" rel="noopener noreferrer" className="text-stone-600"><Instagram /></a>
            <a href="https://www.facebook.com/share/1AU4rXDuQ7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-stone-600"><Facebook /></a>
            <a href="mailto:akporurublessing@gmail.com" className="text-stone-600"><Mail /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;