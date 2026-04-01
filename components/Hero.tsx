
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';

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
];

export const Hero: React.FC<HeroProps> = ({ lang, onMenuClick }) => {
  const t = translations[lang].hero;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % backgroundImages.length);
    }, 6000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const loadTimer = setTimeout(() => setIsLoaded(true), 80);

    return () => {
      clearInterval(slideTimer);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loadTimer);
    };
  }, []);

  // Logo: fades out of hero as it fades into navbar (0–150px)
  const heroLogoOpacity = Math.max(0, 1 - scrollY / 150);
  const heroLogoY = -(scrollY * 0.12);

  // Content: fades out later (300–600px)
  const contentOpacity = Math.max(0, 1 - (scrollY - 280) / 280);
  const contentY = Math.min(50, scrollY / 10);

  const scrollToNext = () => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden flex flex-col bg-charcoal">

      {/* ── Background Slider ── */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <SafeImage
              src={img}
              alt={`Vincenzo Capuano Hong Kong ${i + 1}`}
              fallbackPrompt="Cinematic shot of an authentic Neapolitan pizzeria"
              className={`w-full h-full object-cover object-center brightness-[0.55] transition-transform duration-[10000ms] ease-out ${
                i === currentSlide ? 'scale-[1.06]' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Gradient overlays — left-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/30 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/35 z-20" />
      </div>

      {/* ── Slide indicators — right edge ── */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 items-center">
        {backgroundImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className="group focus:outline-none"
          >
            <div className={`w-[2px] rounded-full transition-all duration-700 ${
              i === currentSlide
                ? 'h-10 bg-gold shadow-[0_0_10px_rgba(197,160,89,0.6)]'
                : 'h-3 bg-white/20 group-hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-30 flex-1 flex flex-col justify-end w-full">
        <div className="px-8 md:px-16 lg:px-24 pb-28 md:pb-32 lg:pb-36">

          {/* Eyebrow */}
          <div
            className={`mb-6 md:mb-8 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ opacity: isLoaded ? contentOpacity : 0 }}
          >
            <span className="inline-flex items-center gap-3 text-gold text-[9px] md:text-[10px] font-bold uppercase tracking-[0.35em]">
              <span className="w-5 h-px bg-gold/50" />
              {lang === 'hk' ? '拿坡里 · 2022 世界薄餅冠軍' : 'Napoli · 2022 World Pizza Champion'}
            </span>
          </div>

          {/* Logo — cross-fades with navbar logo */}
          <div
            className={`mb-8 md:mb-10 transition-[opacity] duration-700 delay-200 ${isLoaded ? '' : 'opacity-0'}`}
            style={{
              opacity: isLoaded ? heroLogoOpacity : 0,
              transform: `translateY(${heroLogoY}px)`,
            }}
          >
            <h1 className="sr-only">Vincenzo Capuano | Award-Winning Contemporary Neapolitan Pizza Hong Kong</h1>
            <img
              src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png"
              alt="Vincenzo Capuano"
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Quote */}
          <div
            className={`mb-10 md:mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ opacity: isLoaded ? contentOpacity : 0, transform: `translateY(${contentY}px)` }}
          >
            <div className="flex items-start gap-4 md:gap-5 max-w-xs sm:max-w-sm md:max-w-lg">
              <span className="w-[3px] h-auto self-stretch bg-gold/40 rounded-full shrink-0 mt-1" />
              <p className="text-white/75 font-serif italic text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
                {t.philosophy.replace(/^["「]|["」]$/g, '')}
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ opacity: isLoaded ? contentOpacity : 0, transform: `translateY(${contentY}px)` }}
          >
            <a
              href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-white text-charcoal text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-gold/15 active:scale-[0.97]"
            >
              {t.bookNow}
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={onMenuClick}
              className="inline-flex items-center justify-center gap-2.5 bg-white/8 hover:bg-white/14 backdrop-blur-md border border-white/15 hover:border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.97]"
            >
              {translations[lang].nav.menu}
            </button>
          </div>

        </div>
      </div>

      {/* ── Scroll cue ── */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-all duration-500 delay-[1000ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold">{translations[lang].nav.scroll}</span>
        <ChevronDown size={14} className="animate-bounce" />
      </button>

    </section>
  );
};
