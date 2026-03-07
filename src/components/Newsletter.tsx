"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { showSuccess, showLoading, dismissToast } from '@/utils/toast';
import { Loader2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const toastId = showLoading("Joining our journal...");

    // Simulate a network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    dismissToast(toastId);
    showSuccess("Welcome to the journal! Check your inbox for your first design guide.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-amber-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h3 className="text-3xl md:text-5xl font-serif font-medium mb-6">Join Our Design Journal</h3>
          <p className="text-amber-100 text-lg mb-10 max-w-2xl mx-auto">
            Get exclusive interior tips, seasonal decor trends, and early access to our new project reveals.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-amber-100/50 py-7 px-6 rounded-2xl focus-visible:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-white text-amber-600 hover:bg-stone-100 py-7 px-8 rounded-2xl font-bold text-lg min-w-[140px]"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : "Subscribe"}
            </Button>
          </form>
          <p className="mt-6 text-amber-100/60 text-sm">We respect your privacy. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;