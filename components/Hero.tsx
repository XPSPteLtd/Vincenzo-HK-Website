
import React, { useState, useEffect } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';
import { Stats } from './Stats';

interface HeroProps {
  onBookClick: () => void;
  onDeliveryClick: () => void;
  lang: Language;
}

const backgroundImages = [
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-102.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-103.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-104.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-115.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-121.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-125.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano.webp"
];

export const Hero: React.FC<HeroProps> = ({ onBookClick, onDeliveryClick, lang }) => {
  const t = translations[lang].hero;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-charcoal">
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
              className={`w-full h-full brightness-[0.4] md:brightness-[0.5] transform transition-transform duration-[10000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent/30 to-charcoal/60 z-20"></div>
        <div className="absolute inset-0 bg-black/40 z-20 md:hidden"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-32 md:bottom-44 left-1/2 -translate-x-1/2 z-30 flex gap-3 md:gap-4 items-center">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group py-4 px-2 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-[2px] rounded-full transition-all duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'w-10 md:w-16 bg-gold shadow-[0_0_15px_rgba(197,160,89,0.6)]' 
                  : 'w-4 md:w-6 bg-white/20 group-hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-6 pt-24 md:pt-32 lg:pt-40 animate-fade-in-up">
        <div className="mb-6 md:mb-8 flex flex-col items-center gap-3 md:gap-4">
            <span className="h-10 md:h-16 w-[1px] bg-gold/50 shadow-[0_0_10px_rgba(197,160,89,0.3)]"></span>
            <span className="text-gold tracking-[0.25em] md:tracking-mega text-[9px] md:text-[10px] uppercase font-bold drop-shadow-sm">{t.champion}</span>
        </div>

        <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-medium text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1.0] tracking-tighter uppercase drop-shadow-2xl">
          Vincenzo<br className="hidden xs:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400"> Capuano</span>
        </h1>
        
        <p className="text-gray-200 text-sm md:text-base lg:text-lg font-serif italic mb-10 md:mb-14 max-w-2xl mx-auto tracking-wide drop-shadow-md px-4 leading-relaxed">
          {t.philosophy}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-[320px] sm:max-w-none mx-auto mb-16 md:mb-24">
          <button 
            onClick={onBookClick}
            className="w-full sm:w-auto px-10 md:px-12 lg:px-14 py-4 md:py-5 bg-gold text-charcoal font-bold text-[10px] md:text-xs tracking-mega uppercase hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.2)] active:scale-95"
          >
            {t.bookNow}
          </button>
          
          <button 
            onClick={onDeliveryClick}
            className="w-full sm:w-auto px-10 md:px-12 lg:px-14 py-4 md:py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] md:text-xs tracking-mega uppercase hover:bg-gold hover:text-charcoal transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            <ShoppingBag size={14} className="group-hover:scale-110 transition-transform" />
            {t.orderDelivery}
          </button>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="animate-bounce text-gold/80 mb-10 hidden md:block opacity-50">
          <ChevronDown size={28} strokeWidth={1} />
        </div>
      </div>

      {/* Stats - Tablet-optimized embedded stats */}
      <div className="relative z-30 w-full mt-auto">
        <Stats lang={lang} embedded={true} />
      </div>
    </section>
  );
};
