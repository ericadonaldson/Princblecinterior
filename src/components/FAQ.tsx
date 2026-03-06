"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary based on scope. A single room refresh usually takes 2-4 weeks, while a full home interior or exterior project can range from 3 to 6 months."
  },
  {
    question: "Do you handle the actual construction or renovation?",
    answer: "We are design specialists. While we don't do the construction ourselves, we work closely with a network of trusted contractors and can manage the entire project for you in our Premium package."
  },
  {
    question: "Can you work with my existing furniture?",
    answer: "Absolutely! We love incorporating meaningful pieces into new designs. Our goal is to create a cohesive look that feels like home."
  },
  {
    question: "What is your design style?",
    answer: "While we have a signature 'Princblec' look that emphasizes light and natural textures, we pride ourselves on being versatile. We design for your style, not ours."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-amber-600 mb-4">Questions</h2>
          <h3 className="text-4xl font-serif font-medium text-stone-900">Common Inquiries</h3>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl px-6 border-none shadow-sm">
              <AccordionTrigger className="text-left font-bold text-stone-900 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;