
import React from 'react';
import { Scissors, Instagram } from 'lucide-react';
import { Language } from '../translations';

interface FooterProps {
  lang: Language;
}

// Fixed the FC type to accept lang prop as required by App.tsx
export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="mb-8 p-4 border border-white/10 rounded-full">
            <Scissors className="text-gold w-6 h-6" />
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-widest uppercase">Vincenzo Capuano</h3>
        <p className="text-[10px] text-gray-500 tracking-[0.4em] uppercase mb-12">Hong Kong</p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 items-center">
          <a 
            href="https://www.instagram.com/vincenzocapuano.sg" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors group"
          >
            <Instagram size={14} className="group-hover:text-gold transition-colors" />
            <span>Instagram</span>
          </a>
          
          {['Facebook', 'Concept', 'Privacy'].map((item) => (
            <a key={item} href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">
                {item}
            </a>
<<<<<<< Updated upstream
          ))}
        </div>
        
        <p className="text-gray-700 text-[10px] tracking-wider">
          © {new Date().getFullYear()} Vincenzo Capuano Hong Kong. All rights reserved.
        </p>
=======
            <a 
              href="https://www.instagram.com/vincenzocapuano.hk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-gold text-xs uppercase tracking-widest font-bold transition-all border-b border-transparent hover:border-gold pb-1"
            >
              <Instagram size={14} />
              Instagram
            </a>
            <a 
              href="https://www.facebook.com/vincenzocapuano.hk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-blue-500 text-xs uppercase tracking-widest font-bold transition-all border-b border-transparent hover:border-blue-500 pb-1"
            >
              <Facebook size={14} />
              Facebook
            </a>
          </div>

          {/* Branch Details */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-gray-400 mb-20 text-[11px] md:text-xs">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gold" />
              <a 
                href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-light tracking-wide hover:text-gold transition-colors"
              >
                Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05, Wan Chai, Hong Kong
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <p className="font-light tracking-wide uppercase">Open 7 Days • 12:00 — 23:00</p>
            </div>
          </div>
        </div>
        
        {/* Copyright & Credit */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-800 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} HK Capvin Limited
          </p>
          
          <a 
            href="https://pulsenpixels.com/?utm_source=vincenzocapuano&utm_medium=footer&utm_campaign=design_credit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-gold text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center gap-2 group"
          >
            <span className="opacity-60">Designed by</span>
            <span className="border-b border-gray-800 group-hover:border-gold pb-0.5">Pulse n Pixels</span>
          </a>
        </div>
>>>>>>> Stashed changes
      </div>
    </footer>
  );
};
