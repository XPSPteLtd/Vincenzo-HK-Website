
import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Scissors, Loader2 } from 'lucide-react';
import { Language, translations } from '../translations';

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
        <div className="flex justify-between items-center p-4 md:px-8 md:py-6 border-b border-white/10 bg-black/40 z-30 shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-2 border border-gold/20 rounded-full hidden sm:block">
              <Scissors size={14} className="text-gold" />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl text-white uppercase tracking-wider">{t.reservationTitle}</h2>
              <div className="flex items-center gap-2 mt-0.5">
                 <ShieldCheck size={10} className="text-green-500" />
                 <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{t.reservationSecure}</span>
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

<<<<<<< Updated upstream
        {/* Content Area - Seamless SevenRooms Embed */}
        <div className="flex-1 relative bg-white">
          {iframeLoading && (
            <div className="absolute inset-0 z-20 bg-charcoal flex flex-col items-center justify-center text-center p-12">
               <div className="relative mb-8">
                 <div className="absolute inset-0 border border-gold/20 rounded-full animate-ping scale-150 opacity-20"></div>
                 <div className="bg-gold/5 p-6 rounded-full border border-gold/10">
                    <Loader2 size={32} className="text-gold animate-spin" />
                 </div>
               </div>
               <h3 className="font-serif text-2xl text-white italic mb-2">{t.reservationLoading}</h3>
               <p className="text-[10px] text-gray-500 uppercase tracking-mega">{t.reservationChecking}</p>
=======
        {/* Content Area - BistroChat Iframe */}
        <div className="flex-1 relative bg-white flex flex-col items-center justify-center overflow-hidden">
          {iframeLoading && (
            <div className="absolute inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-6 p-8 text-center animate-in fade-in duration-500">
               <div className="relative p-6 border border-gold/20 rounded-2xl bg-black/40 backdrop-blur-sm">
                  <Loader2 size={40} className="text-gold animate-spin" />
               </div>
               <div className="space-y-2">
                 <h3 className="font-display text-xl text-white tracking-widest">{t.reservationSecure}</h3>
                 <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">{t.reservationLoading}</p>
               </div>
>>>>>>> Stashed changes
            </div>
          )}
          
          <iframe 
<<<<<<< Updated upstream
            src="https://www.sevenrooms.com/reservations/vincenzosg"
            className={`w-full h-full border-none transition-opacity duration-1000 ${iframeLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIframeLoading(false)}
            title="SevenRooms Reservation"
            allow="payment; geolocation"
=======
            src="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
            className={`w-full h-full border-none transition-opacity duration-700 ${iframeLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIframeLoading(false)}
            title="Book a table"
            allow="payment"
>>>>>>> Stashed changes
          />
        </div>

        {/* Footer info bar */}
        <div className="bg-black/80 px-8 py-3 border-t border-white/5 flex justify-center md:justify-end shrink-0">
           <p className="text-[9px] text-gray-600 uppercase tracking-widest text-center md:text-right">
             {locationT.address} • {locationT.hkCentral}
           </p>
        </div>
      </div>
    </div>
  );
};
