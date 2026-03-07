"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    title: "Serene Living Spaces",
    category: "Interior Design"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    title: "Architectural Exteriors",
    category: "Exterior Design"
  },
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    title: "Modern Minimalist Kitchens",
    category: "Interior Design"
  },
  {
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    title: "Breathtaking Poolside Retreats",
    category: "Exterior Design"
  }
];

const Slideshow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-500 mb-4">Visual Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-white">Design Inspiration</h3>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollPrev}
            className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent w-12 h-12"
          >
            <ChevronLeft size={24} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollNext}
            className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent w-12 h-12"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0 pl-6">
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden group">
                <img 
                  src={slide.url} 
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
                    {slide.category}
                  </span>
                  <h4 className="text-2xl md:text-4xl font-serif">{slide.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "w-8 bg-amber-500" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slideshow;