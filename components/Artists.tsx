import React from 'react';
import { Artist } from '../types';
import { SectionHeading } from './SectionHeading';
import { Instagram } from 'lucide-react';

const artists: Artist[] = [
  {
    id: 1,
    name: "Alex 'Ink' Rivera",
    specialty: "Realism & Portraiture",
    image: "https://picsum.photos/400/600?random=1",
    bio: "Specializing in hyper-realistic black and grey portraits with over 10 years of experience."
  },
  {
    id: 2,
    name: "Sarah Chen",
    specialty: "Fine Line & Geometric",
    image: "https://picsum.photos/400/600?random=2",
    bio: "Master of delicate lines and complex geometric patterns. Creating symmetry in chaos."
  },
  {
    id: 3,
    name: "Marcus Thorne",
    specialty: "Neo-Traditional",
    image: "https://picsum.photos/400/600?random=3",
    bio: "Bold lines and vibrant colors define Marcus's modern take on traditional themes."
  }
];

export const Artists: React.FC = () => {
  return (
    <section id="artists" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="The Artists" subtitle="Meet the masters" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif text-white mb-1">{artist.name}</h3>
                <p className="text-brand-gold text-sm tracking-widest uppercase mb-4">{artist.specialty}</p>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {artist.bio}
                  </p>
                  <a href="#" className="inline-flex items-center text-white hover:text-brand-gold transition-colors text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <Instagram className="w-4 h-4 mr-2" /> View Portfolio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};