
import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';
import { Stats } from './Stats';

interface HeroProps {
  onBookClick: () => void;
  onDeliveryClick: () => void;
  lang: Language;
}

const backgroundImages = [
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero/Family%20Baker%20Capuano-53.jpg",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero/Family%20Baker%20Capuano-55.jpg",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero/Family%20Baker%20Capuano-76.jpg",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero/Family%20Baker%20Capuano-77.jpg",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero/Family%20Baker%20Capuano-82.jpg",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero/Family%20Baker%20Capuano-96.jpg"
];

export const Hero: React.FC<HeroProps> = ({ onBookClick, onDeliveryClick, lang }) => {
  const t = translations[lang].hero;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setIsLoaded(true);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoOpacity = Math.max(0, 1 - scrollY / 150);
  const logoTranslate = scrollY / 3;

  return (
    <section className="relative h-auto lg:h-[120vh] min-h-[900px] w-full overflow-hidden flex flex-col bg-charcoal">
      {/* Background Layer Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <SafeImage 
              src={img}
              alt={`Authentic Pizzeria Atmosphere ${index + 1}`}
              fallbackPrompt="Professional cinematic shot of an authentic high-end Neapolitan pizzeria"
              aspectRatio="16:9"
              className={`w-full h-full brightness-[0.7] md:brightness-[0.75] transform transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/10 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent/5 to-transparent z-20"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-40 right-12 z-40 flex flex-col gap-4 items-center hidden md:flex">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`w-[2px] rounded-full transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'h-12 bg-gold shadow-[0_0_15px_rgba(197,160,89,0.6)]' 
                  : 'h-4 bg-white/20 group-hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Container - Bottom-Left Aligned (Centered on Mobile) */}
      <div className={`relative z-30 flex-1 flex flex-col items-center md:items-start justify-center md:justify-end w-full px-8 md:px-16 lg:px-24 pb-20 md:pb-32 lg:pb-0 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>




        
        {/* Logo Section with side decorations */}
        <div 
          className="mb-6 md:mb-1 transition-all duration-300 relative group"
          style={{ 
            opacity: logoOpacity,
            transform: `translateY(${-logoTranslate}px)`
          }}
        >
          {/* Decorative Sidelines similar to reference (Hidden on mobile for better centering) */}
          <div className="absolute left-0 -translate-x-full pr-4 md:pr-6 top-1/2 -translate-y-1/2 hidden lg:block opacity-30 group-hover:opacity-100 transition-opacity">
            <div className="h-[1px] w-12 md:w-16 bg-gold animate-glow shadow-[0_0_10px_rgba(243,205,105,0.4)]"></div>
          </div>
          <div className="absolute right-0 translate-x-full pl-4 md:pl-6 top-1/2 -translate-y-1/2 hidden lg:block opacity-30 group-hover:opacity-100 transition-opacity">
            <div className="h-[1px] w-12 md:w-16 bg-gold animate-glow shadow-[0_0_10px_rgba(243,205,105,0.4)]"></div>
          </div>

          <img 
            src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
            alt="Vincenzo Capuano Logo" 
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-2xl" 
          />
        </div>

        {/* Small subtext/tagline - Responsive alignment */}
        <div className="mb-4 md:mb-5 text-center md:text-left">
            <span className="text-gold tracking-[0.2em] md:tracking-mega text-[10px] md:text-xs uppercase font-bold drop-shadow-sm block mb-4 opacity-80">
              {t.tasteOfNapoli}
            </span>
            <p className="text-white text-sm md:text-base lg:text-lg font-serif italic tracking-wide drop-shadow-md leading-relaxed md:border-l-2 border-gold/40 md:pl-6 max-w-lg">
              {t.philosophy}
            </p>
        </div>
        
        {/* CTA Buttons - Centered on Mobile, Bottom Left on Desktop */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center md:justify-start items-center w-full max-w-[320px] sm:max-w-none">
          <button 
            onClick={onDeliveryClick}
            className="w-full sm:w-auto px-10 md:px-14 py-3.5 md:py-4 bg-transparent border border-white/30 text-white font-bold text-[10px] md:text-xs tracking-mega uppercase hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            {t.orderDelivery}
          </button>

          <button 
            onClick={onBookClick}
            className="w-full sm:w-auto px-10 md:px-14 py-3.5 md:py-4 bg-gold text-charcoal font-bold text-[10px] md:text-xs tracking-mega uppercase hover:bg-white transition-all duration-300 shadow-2xl"
          >
            {t.bookNow}
          </button>
        </div>

      </div>

      {/* Floating vertical Scroll Indicator */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-20 z-40 opacity-30 hidden md:flex text-white">
        <span className="text-[10px] mt-4 uppercase tracking-[0.5em] font-bold [writing-mode:vertical-lr] animate-pulse">
          S c r o l l
        </span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-gold animate-scroll-line"></div>
        </div>
      </div>

      {/* Stats - Final bar at bottom */}
      <div className="relative z-40 w-full mt-auto">
        <Stats lang={lang} embedded={true} />
      </div>
    </section>
  );
};
