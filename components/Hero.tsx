import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Tattoo Artist Working" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-brand-gold uppercase tracking-[0.3em] mb-4 text-sm md:text-base animate-fade-in-up">
          Est. 2024
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight animate-fade-in-up delay-100">
          ART IS <br /> PERMANENCE
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed animate-fade-in-up delay-200">
          Transforming your vision into a timeless masterpiece. 
          Experience the intersection of modern luxury and traditional artistry.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-up delay-300">
          <Button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth'})}>
            View Portfolio
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};