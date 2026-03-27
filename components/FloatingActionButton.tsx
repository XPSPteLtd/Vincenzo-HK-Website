import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { Language, translations } from '../translations_new';

interface FloatingActionButtonProps {
  onClick: () => void;
  lang: Language;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 z-[110] group rounded-full transition-all duration-700 ease-in-out cursor-pointer flex items-center justify-center w-24 h-24 md:w-32 md:h-32 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Book Table"
    >
      {/* Outer Rotating Text */}
      <div className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path 
            id="fabTextPath" 
            d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" 
            fill="none" 
          />
          <text className="text-[10px] font-bold tracking-[0.15em] uppercase fill-gold">
            <textPath href="#fabTextPath" startOffset="0%">
              BOOK A RESERVATION • BOOK A RESERVATION • 
            </textPath>
          </text>
        </svg>
      </div>
      
      {/* Static Inner Circle */}
      <div className="bg-gold w-[70%] h-[70%] rounded-full flex flex-col items-center justify-center gap-1 shadow-2xl group-hover:bg-white transition-colors duration-500 relative z-10">
        <User size={20} className="text-charcoal md:size-6" strokeWidth={2.5} />
        <span className="text-[8px] md:text-[10px] font-bold tracking-widest text-charcoal uppercase text-center leading-tight px-2">
          {t.hero.bookNow || 'BOOK NOW'}
        </span>
      </div>

      {/* Decorative Pulse Ring */}
      <div className="absolute inset-0 bg-gold/20 rounded-full animate-pulse group-hover:bg-white/10 transition-colors"></div>
    </button>
  );
};
