import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { SectionHeading } from './SectionHeading';
import { X, ZoomIn } from 'lucide-react';

const portfolioItems: PortfolioItem[] = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  image: `https://picsum.photos/600/${[800, 600, 900][i % 3]}?random=${i + 10}`,
  category: ['Blackwork', 'Color', 'Realism'][i % 3]
}));

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6">
        <SectionHeading title="Selected Works" subtitle="Ink on skin" center />

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="relative break-inside-avoid group cursor-zoom-in overflow-hidden rounded-sm"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.image} 
                alt={item.category} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 animate-fade-in">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-brand-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl max-h-[90vh] relative">
            <img 
              src={selectedImage.image} 
              alt="Full size" 
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            />
            <p className="text-center text-white/50 mt-4 font-sans tracking-widest text-sm uppercase">
              {selectedImage.category}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};