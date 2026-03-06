"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import MeetDesigner from '@/components/MeetDesigner';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <MeetDesigner />
      <Pricing />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default Index;