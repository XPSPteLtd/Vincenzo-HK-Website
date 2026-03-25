
import React from 'react';
import { Utensils, CalendarDays, ShoppingBag, Clock, Users } from 'lucide-react';
import { Language, translations } from '../translations_new';

interface MobileBottomNavProps {
  onBookClick: () => void;
  onDeliveryClick: () => void;
  onEventsClick?: () => void;
  onHoursClick?: () => void;
  onMenuClick?: () => void;
  lang: Language;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  onBookClick, 
  onDeliveryClick, 
  onEventsClick,
  onHoursClick,
  onMenuClick, 
  lang 
}) => {
  const t = translations[lang].nav;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[160] bg-charcoal/90 backdrop-blur-xl border-t border-white/10 px-1 pb-safe-area shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {/* Menu */}
        <button 
          onClick={onMenuClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <Utensils size={18} className="text-gray-400" />
          <span className="text-[7px] uppercase tracking-widest font-bold text-gray-500">{t.menu}</span>
        </button>

        {/* Order - Hidden for launch phase */}
        {/* 
        <button 
          onClick={onDeliveryClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <ShoppingBag size={18} className="text-gray-400" />
          <span className="text-[7px] uppercase tracking-widest font-bold text-gray-500">{t.order}</span>
        </button>
        */}

        {/* Book (Floating Centerpiece) */}
        <button 
          onClick={onBookClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <div className="bg-gold p-2.5 rounded-full -mt-8 shadow-xl shadow-gold/20 border-4 border-charcoal">
            <CalendarDays size={18} className="text-charcoal" />
          </div>
          <span className="text-[7px] uppercase tracking-widest font-bold text-gold">{t.book}</span>
        </button>

        {/* Events */}
        <button 
          onClick={onEventsClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <Users size={18} className="text-gray-400" />
          <span className="text-[7px] uppercase tracking-widest font-bold text-gray-500">{t.events_short}</span>
        </button>

        {/* Hours */}
        <button 
          onClick={onHoursClick}
          className="flex flex-col items-center justify-center flex-1 gap-1 transition-all active:scale-95"
        >
          <Clock size={18} className="text-gray-400" />
          <span className="text-[7px] uppercase tracking-widest font-bold text-gray-500">{t.hours}</span>
        </button>
      </div>
    </div>
  );
};
