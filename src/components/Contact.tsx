"use client";

import React, { useState } from 'react';
import { Mail, Instagram, MapPin, Music2, Facebook, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { showSuccess, showError } from '@/utils/toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name, email, subject, message }]);

    if (error) {
      showError("Something went wrong. Please try again.");
      console.error("Error sending message:", error);
    } else {
      showSuccess("Message sent successfully! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }
    
    setIsSubmitting(false);
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
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Call Us</p>
                  <a href="tel:+2348121241719" className="text-xl hover:text-amber-500 transition-colors">+234 812 124 1719</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Email Us</p>
                  <a href="mailto:akporurublessing@gmail.com" className="text-xl hover:text-amber-500 transition-colors">akporurublessing@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Instagram</p>
                  <a href="https://www.instagram.com/prinblec_interior/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-amber-500 transition-colors">@prinblec_interior</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <Facebook size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Facebook</p>
                  <a href="https://www.facebook.com/share/1AU4rXDuQ7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-amber-500 transition-colors">Gentle Prince</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <Music2 size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">TikTok</p>
                  <a href="https://tiktok.com/@princblecinterior" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-amber-500 transition-colors">@princblecinterior</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 uppercase tracking-widest font-bold">Studio</p>
                  <p className="text-xl">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-stone-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                  <Input name="name" placeholder="Your name" className="bg-stone-50 border-stone-200 py-6" required disabled={isSubmitting} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                  <Input name="email" type="email" placeholder="Your email" className="bg-stone-50 border-stone-200 py-6" required disabled={isSubmitting} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                <Input name="subject" placeholder="How can we help?" className="bg-stone-50 border-stone-200 py-6" required disabled={isSubmitting} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                <Textarea name="message" placeholder="Tell us about your project..." className="bg-stone-50 border-stone-200 min-h-[150px]" required disabled={isSubmitting} />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-8 text-lg rounded-xl font-bold">
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;