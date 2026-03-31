
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Trophy } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations_new';

interface HeroProps {
  onBookClick: () => void;
  onDeliveryClick: () => void;
  onMenuClick: () => void;
  lang: Language;
}

const backgroundImages = [
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-119.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-121.webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-53%20(1).webp",
  "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-121.webp"
];

export const Hero: React.FC<HeroProps> = ({ lang, onMenuClick }) => {
  const t = translations[lang].hero;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Small delay so CSS transitions fire visibly
    const loadTimer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  // Logo cross-fades with the navbar logo: hero fades out as nav fades in (0–150px)
  const heroLogoOpacity = Math.max(0, 1 - scrollY / 150);
  const heroLogoTranslateY = -(scrollY * 0.15);

  // Rest of hero content fades later (300–600px)
  const contentOpacity = Math.max(0, 1 - (scrollY - 300) / 300);
  const contentTranslate = Math.min(60, scrollY / 8);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col bg-charcoal">

      {/* ── Background Slider ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <SafeImage
              src={img}
              alt={`Vincenzo Capuano Hong Kong ${index + 1}`}
              fallbackPrompt="Professional cinematic shot of an authentic high-end Neapolitan pizzeria"
              className={`w-full h-full object-cover object-center brightness-[0.65] transform transition-transform duration-[12000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/20 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-transparent z-20" />
      </div>

      {/* ── Slide Indicators — right side, vertically centered ── */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 items-center">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`w-[2px] rounded-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'h-10 bg-gold shadow-[0_0_12px_rgba(243,205,105,0.5)]'
                : 'h-3 bg-white/20 group-hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>

      {/* ── Main Content — always within viewport ─────────── */}
      <div className="relative z-30 flex-1 flex flex-col justify-end w-full">
        <div className="px-8 md:px-16 lg:px-24 pb-24 md:pb-28 lg:pb-32 flex flex-col items-center md:items-start">

          {/* Champion & Philosophy Unit - Combined and Compact for Mobile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div
              className={`transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0' : 'translate-y-4'}`}
              style={{ opacity: isLoaded ? contentOpacity : 0, transform: `translateY(${contentTranslate}px)` }}
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-3 md:mb-8">
                <span className="flex items-center gap-2 text-gold text-[9px] md:text-xs uppercase tracking-[0.3em] font-bold">
                  <Trophy size={10} className="md:w-3 md:h-3 text-gold/60" />
                  {t.worldChampionBadge}
                </span>
                <span className="hidden md:block w-8 h-[1px] bg-gold/30" />
                <span className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold md:hidden">
                  {t.champion} • {t.evolution}
                </span>
              </div>
            </div>

            {/* Logo — cross-fades with navbar logo (0–150px scroll) */}
            <div
              className={`mb-4 md:mb-8 transition-[transform,opacity] duration-700 delay-[350ms] ${isLoaded ? 'translate-y-0' : 'translate-y-6'}`}
              style={{ opacity: isLoaded ? heroLogoOpacity : 0, transform: `translateY(${heroLogoTranslateY}px)` }}
            >
              <h1 className="sr-only">Vincenzo Capuano | Award-Winning Contemporary Neapolitan Pizza Hong Kong</h1>
              <img
                src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png"
                alt="Vincenzo Capuano"
                className="h-32 sm:h-44 md:h-48 lg:h-56 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Philosophy quote — fades with rest of content */}
            <div
              className={`transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-6'}`}
              style={{ opacity: isLoaded ? contentOpacity : 0, transform: `translateY(${contentTranslate}px)` }}
            >
              <p className="text-white/80 text-[11px] sm:text-xs md:text-base font-sans italic tracking-wide leading-relaxed max-w-[280px] sm:max-w-sm md:max-w-md text-center md:text-left md:border-l-2 border-gold/30 md:pl-5 mb-6 md:mb-10">
                "{t.philosophy.replace(/"/g, '')}"
              </p>
            </div>
          </div>

          {/* CTA — direct link to booking platform */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-6'}`}
            style={{ opacity: isLoaded ? contentOpacity : 0, transform: `translateY(${contentTranslate}px)` }}
          >
            {/* Book Now - External */}
            <a
              href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gold hover:bg-white text-charcoal font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-8 md:px-10 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-gold/10 active:scale-[0.97] w-full sm:w-auto justify-center"
            >
              {t.bookNow}
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* View Menu - Internal */}
            <button
              onClick={(e) => {
                e.preventDefault();
                onMenuClick();
              }}
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-widest px-8 md:px-10 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.97] w-full sm:w-auto justify-center"
            >
              {translations[lang].nav.menu}
            </button>
          </div>

        </div>
      </div>

      {/* ── Scroll cue — bottom center ─────────────────────── */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-all duration-700 delay-[900ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold">{translations[lang].nav.scroll}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>

    </section>
  );
};
