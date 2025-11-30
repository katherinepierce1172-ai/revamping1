import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael R.",
    role: "Collector",
    content: "The attention to detail at Canvas is unmatched. Alex took my vague idea and turned it into a masterpiece. The studio vibe is impeccable.",
    rating: 5
  },
  {
    id: 2,
    name: "Jessica T.",
    role: "First Timer",
    content: "I was nervous for my first tattoo, but Sarah made me feel so comfortable. The fine line work is incredibly precise. Highly recommend.",
    rating: 5
  },
  {
    id: 3,
    name: "David K.",
    role: "Returning Client",
    content: "My third session here and I won't go anywhere else. Professional, clean, and truly artistic environment. Worth every penny.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5">
        <Quote size={200} className="text-white" />
      </div>
      
      <div className="container mx-auto px-6">
        <SectionHeading title="Client Stories" />

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5 relative">
            
            <div className="flex mb-6 text-brand-gold">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-white font-serif italic mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold font-sans uppercase tracking-wider">
                  {testimonials[currentIndex].name}
                </h4>
                <span className="text-gray-500 text-sm">
                  {testimonials[currentIndex].role}
                </span>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={prev}
                  className="p-2 border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-all rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={next}
                  className="p-2 border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold transition-all rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};