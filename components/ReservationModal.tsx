
import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Loader2 } from 'lucide-react';
import { Language, translations } from '../translations_new';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose, lang }) => {
  const [iframeLoading, setIframeLoading] = useState(true);
  const t = translations[lang].modals;
  const locationT = translations[lang].location;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      setIframeLoading(true);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-0 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Container - Constrained between fixed nav bars on mobile */}
      <div className="relative bg-charcoal border-y md:border border-gold/20 w-full max-w-5xl h-full md:h-[85vh] shadow-2xl animate-fade-in-up flex flex-col overflow-hidden mt-[57px] mb-[64px] md:mt-0 md:mb-0">
        
        {/* Header */}
        <div className="flex justify-between items-center p-3 xs:p-4 md:px-8 md:py-6 border-b border-white/10 bg-black/40 z-30 shrink-0">
          <div className="flex items-center gap-3 xs:gap-4">
            <div className="p-1.5 xs:p-2 border border-gold/20 rounded-full hidden sm:block">
              <img 
                src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                alt="Logo" 
                className="h-3.5 w-auto object-contain" 
              />
            </div>
            <div>
              <h2 className="font-display text-lg xs:text-xl md:text-2xl text-white capitalize tracking-wider">{t.reservationTitle}</h2>
              <div className="flex items-center gap-2 mt-0.5">
                 <ShieldCheck size={10} className="text-green-500" />
                 <span className="text-[8px] xs:text-[9px] text-gray-500 uppercase tracking-widest font-bold">{t.reservationSecure}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area - Coming Soon UI */}
        <div className="flex-1 relative bg-charcoal flex flex-col items-center justify-center p-6 md:p-12 text-center overflow-y-auto">
          <div className="max-w-md w-full space-y-8 animate-fade-in">
            {/* Animated Decoration */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full scale-150"></div>
              <div className="relative p-6 border border-gold/20 rounded-2xl bg-black/40 backdrop-blur-sm">
                <Loader2 size={48} className="text-gold animate-[spin_3s_linear_infinite]" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-3xl md:text-5xl text-white capitalize tracking-[0.2em]">
                {t.comingSoonTitle}
              </h3>
              <div className="h-px w-12 bg-gold/50 mx-auto"></div>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                {t.instagramPrompt}
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://www.instagram.com/vincenzocapuano.hk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-charcoal font-bold tracking-widest uppercase text-xs hover:bg-white transition-all duration-300 group shadow-xl shadow-gold/5"
              >
                <img 
                  src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                  alt="" 
                  className="h-4 w-auto invert grayscale" 
                />
                {t.followUs}
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4 opacity-50 grayscale">
               {[1,2,3].map(i => (
                 <div key={i} className="aspect-square bg-white/5 rounded-lg border border-white/5 animate-pulse"></div>
               ))}
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="bg-black/80 px-8 py-3 border-t border-white/5 flex justify-center md:justify-end shrink-0">
           <p className="text-[9px] text-gray-600 uppercase tracking-widest text-center md:text-right">
             {locationT.address} • {locationT.lunch} 12:00-15:00 / {locationT.dinner} 18:00-23:00
           </p>
        </div>
      </div>
    </div>
  );
};
