"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <Hero />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
      <MadeWithDyad />
    </main>
  );
};

export default Index;