import React from 'react';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionHeading title="Book Your Session" subtitle="Start the journey" />
            <p className="text-gray-400 mb-12 text-lg">
              We operate by appointment only to ensure every client receives our undivided attention. Fill out the form or visit our studio.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-gray rounded-full text-brand-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Visit Us</h4>
                  <p className="text-gray-400">123 Ink Street, Arts District<br/>Los Angeles, CA 90013</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-gray rounded-full text-brand-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Email Us</h4>
                  <p className="text-gray-400">booking@canvastattoo.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-gray rounded-full text-brand-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase mb-1">Hours</h4>
                  <p className="text-gray-400">Tue - Sat: 11am - 8pm<br/>Sun - Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5">
            <h3 className="text-2xl font-serif text-white mb-6">Inquiry Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">Placement & Idea</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-brand-gold focus:outline-none transition-colors"></textarea>
              </div>

              <Button fullWidth type="submit">Send Inquiry</Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};