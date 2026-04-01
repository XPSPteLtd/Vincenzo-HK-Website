
import React from 'react';
import { MapPin, Utensils, CalendarDays, Clock, Phone } from 'lucide-react';
import { Language, translations } from '../translations';

interface MobileBottomNavProps {
  onBookClick: () => void;
  onHoursClick?: () => void;
  onMenuClick?: () => void;
  lang: Language;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onBookClick,
  onHoursClick,
  onMenuClick,
  lang
}) => {
  const t = translations[lang].nav;
  const tc = translations[lang].common;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[160] bg-charcoal/90 backdrop-blur-xl border-t border-white/10 px-1 pb-safe-area shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {/* Navigate */}
        <a
          href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <MapPin size={18} className="text-gray-400" />
          <span className="text-[9px] uppercase tracking-widest font-bold text-gray-500">{tc.navigate}</span>
        </a>

        {/* Menu */}
        <button
          onClick={onMenuClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <Utensils size={18} className="text-gray-400" />
          <span className="text-[9px] uppercase tracking-widest font-bold text-gray-500">{t.menu}</span>
        </button>

        {/* Book (Floating Centerpiece) */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <div className="bg-gold p-2.5 rounded-full -mt-8 shadow-xl shadow-gold/20 border-4 border-charcoal">
            <CalendarDays size={18} className="text-charcoal" />
          </div>
          <span className="text-[9px] uppercase tracking-widest font-bold text-gold">{t.book}</span>
        </button>

        {/* Hours */}
        <button
          onClick={onHoursClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <Clock size={18} className="text-gray-400" />
          <span className="text-[9px] uppercase tracking-widest font-bold text-gray-500">{t.hours}</span>
        </button>

        {/* Call */}
        <a
          href="tel:+85294483165"
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <Phone size={18} className="text-gray-400" />
          <span className="text-[9px] uppercase tracking-widest font-bold text-gray-500">{t.callUs}</span>
        </a>
      </div>
    </div>
  );
};
