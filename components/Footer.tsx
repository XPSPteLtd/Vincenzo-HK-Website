import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { Language, translations } from '../translations_new';
import { Page } from '../App';

interface FooterProps {
  lang: Language;
  onPageChange: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onPageChange }) => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-8">
              <img 
                src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                alt="Vincenzo Capuano Logo" 
                className="h-20 md:h-28 w-auto object-contain transition-transform duration-500 hover:scale-105" 
              />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-widest capitalize">Vincenzo Capuano</h3>
            <p className="text-[10px] text-gray-500 tracking-[0.4em] uppercase mb-8">Hong Kong</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-gold shrink-0 mt-1" />
                <p className="text-gray-400 text-sm md:text-base italic font-serif capitalize leading-relaxed">
                  200 Queen's Rd E,<br />
                  Wan Chai, Hong Kong
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <a 
                href="https://www.instagram.com/vincenzocapuano.sg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors group"
              >
                <Instagram size={14} className="group-hover:text-gold transition-colors" />
                <span>Instagram</span>
              </a>
              
              <button 
                onClick={() => onPageChange('home')}
                className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
              >
                {translations[lang].nav.philosophy}
              </button>
              
              <button 
                onClick={() => onPageChange('menu')}
                className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors"
              >
                {translations[lang].nav.menu}
              </button>
            </div>
          </div>
          
          {/* Map Widget */}
          <div className="flex flex-col h-[300px] md:h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 pointer-events-none border border-white/5 z-10 rounded-2xl"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6888636450257!2d114.16853511116631!3d22.290885143391854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040061e8884de7%3A0xcda6b2aeb2885994!2s200%20Queen&#39;s%20Rd%20E%2C%20Wan%20Chai%2C%20Hong%20Kong!5e0!3m2!1sen!2sus!4v1714088998141!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.5] contrast-125 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-700 text-[10px] tracking-wider">
            © {new Date().getFullYear()} Vincenzo Capuano Hong Kong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
