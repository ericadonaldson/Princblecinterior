"use client";

import React from 'react';
import { Mail, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { showSuccess } from '@/utils/toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! We'll get back to you shortly.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-amber-500 mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium mb-8">Let's Create Something Beautiful</h3>
            <p className="text-stone-400 text-lg mb-12 leading-relaxed">
              Ready to transform your space? Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Email Us</p>
                  <a href="mailto:hello@princblec.com" className="text-xl hover:text-amber-500 transition-colors">hello@princblec.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Follow Us</p>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xl hover:text-amber-500 transition-colors">@princblec_interior</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Studio</p>
                  <p className="text-xl">123 Design District, NY 10012</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-stone-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                  <Input placeholder="Your name" className="bg-stone-50 border-stone-200 py-6" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                  <Input type="email" placeholder="Your email" className="bg-stone-50 border-stone-200 py-6" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                <Input placeholder="How can we help?" className="bg-stone-50 border-stone-200 py-6" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-stone-50 border-stone-200 min-h-[150px]" required />
              </div>
              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-8 text-lg rounded-xl font-bold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;