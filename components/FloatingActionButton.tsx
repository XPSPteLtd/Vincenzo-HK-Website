import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Language, translations } from '../translations';

interface FloatingActionButtonProps {
  onClick: () => void;
  lang: Language;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, lang }) => {
  const [show, setShow] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-[110] group rounded-full transition-all duration-700 ease-in-out cursor-pointer hidden md:flex items-center justify-center w-24 h-24 md:w-32 md:h-32 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      aria-label={t.reservations}
    >
      {/* Spinning Outer Text */}
      <div className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path id="fabTextPath" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
          <text className="text-[10px] font-bold tracking-[0.15em] uppercase fill-gold">
            <textPath href="#fabTextPath" startOffset="0%">
              • BOOK NOW • BOOK NOW • BOOK NOW • BOOK NOW
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner Solid Circle */}
      <div className="bg-gold w-[70%] h-[70%] rounded-full flex flex-col items-center justify-center gap-1 shadow-2xl group-hover:bg-white transition-colors duration-500 relative z-10">
        <Calendar size={20} className="text-charcoal md:w-6 md:h-6" strokeWidth={2.5} />
        <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-charcoal uppercase text-center leading-tight px-2">
          {t.reservations}
        </span>
      </div>

      {/* Pulsing Aura Overlay */}
      <div className="absolute inset-0 bg-gold/20 rounded-full animate-pulse group-hover:bg-white/10 transition-colors pointer-events-none" />
    </button>
  );
};
