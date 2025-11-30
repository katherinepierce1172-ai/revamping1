import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Artists } from './components/Artists';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-gold selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Artists />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-dark/95 backdrop-blur border-t border-white/10 md:hidden z-40">
        <a 
          href="#contact"
          className="flex items-center justify-center w-full bg-brand-gold text-black font-bold uppercase tracking-widest py-4 text-sm"
        >
          <Phone size={18} className="mr-2" /> Book Appointment
        </a>
      </div>
    </div>
  );
}

export default App;