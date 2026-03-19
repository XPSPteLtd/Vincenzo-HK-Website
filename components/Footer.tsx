
import React from 'react';
import { Instagram } from 'lucide-react';
import { Language } from '../translations';

interface FooterProps {
  lang: Language;
}

// Fixed the FC type to accept lang prop as required by App.tsx
export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="mb-8 p-4">
            <img 
              src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
              alt="Vincenzo Capuano Logo" 
              className="h-24 md:h-32 w-auto object-contain transition-transform duration-500 hover:scale-105" 
            />
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
          ))}
        </div>
        
        <p className="text-gray-700 text-[10px] tracking-wider">
          © {new Date().getFullYear()} Vincenzo Capuano Hong Kong. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
