
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  onBookClick: () => void;
  onDeliveryClick: () => void;
  onMenuClick: () => void;
  lang: Language;
}

// const backgroundImages = [
//   "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-119.webp",
//   "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-121.webp",
//   "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/hero-section/Family%20Baker%20Capuano-53%20(1).webp",
// ];

const HERO_VIDEO = "/Playing%20on%20TV.mp4";

export const Hero: React.FC<HeroProps> = ({ lang, onMenuClick }) => {
  const t = translations[lang].hero;
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const loadTimer = setTimeout(() => setIsLoaded(true), 80);

    return () => {
      window.removeEventListener('resize', handleResize);
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

  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted for initial autoplay compatibility
    video.muted = true;

    const startVideo = async () => {
      try {
        await video.play();
        if (isDesktop) {
          // Attempt to unmute for desktop
          video.muted = false;
          video.volume = 0.25;
        }
      } catch (err) {
        // Fallback for strict browser policies
        const handleInteraction = () => {
          video.play().then(() => {
            if (isDesktop) {
              video.muted = false;
              video.volume = 0.25;
            }
          });
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('scroll', handleInteraction);
          window.removeEventListener('touchstart', handleInteraction);
        };
        window.addEventListener('click', handleInteraction);
        window.addEventListener('scroll', handleInteraction, { passive: true });
        window.addEventListener('touchstart', handleInteraction);
      }
    };

    startVideo();
  }, [isDesktop]);

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden flex flex-col bg-charcoal">

      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`w-full h-full absolute inset-0 object-cover brightness-[0.7] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsLoaded(true)}
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play();
          }}
        />

        {/* Gradient overlays — refined for better visibility of the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-charcoal/10 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent z-20" />
      </div>

      {/* Slide indicators removed as we use video now */}

      {/* ── Main content ── */}
      <div className="relative z-30 mt-auto w-full">
        <div className="px-6 md:px-16 lg:px-24 pb-16 md:pb-20 max-w-4xl">

          {/* Eyebrow */}
          <div
            className={`mb-3 md:mb-4 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ opacity: isLoaded ? contentOpacity : 0 }}
          >
            <span className="inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-[0.25em]">
              <span className="w-4 h-px bg-gold/50" />
              {lang === 'hk' ? '拿坡里 · 2022 世界薄餅冠軍' : 'Napoli · 2022 World Pizza Champion'}
            </span>
          </div>

          {/* Logo — cross-fades with navbar logo */}
          <div
            className={`mb-5 md:mb-6 transition-[opacity] duration-700 delay-200 ${isLoaded ? '' : 'opacity-0'}`}
            style={{
              opacity: isLoaded ? heroLogoOpacity : 0,
              transform: `translateY(${heroLogoY}px)`,
            }}
          >
            <h1 className="sr-only">Vincenzo Capuano | Award-Winning Contemporary Neapolitan Pizza Hong Kong</h1>
            <img
              src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png"
              alt="Vincenzo Capuano"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Quote */}
          <div
            className={`mb-6 md:mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ opacity: isLoaded ? contentOpacity : 0, transform: `translateY(${contentY}px)` }}
          >
            <div className="flex items-start gap-3 max-w-xs sm:max-w-sm md:max-w-md">
              <span className="w-0.5 h-auto self-stretch bg-gold/30 rounded-full shrink-0 mt-1" />
              <p className="text-white/55 font-sans font-bold text-xs md:text-[13px] uppercase tracking-[0.2em] leading-relaxed">
                {t.philosophy.replace(/^["「]|["」]$/g, '')}
              </p>
            </div>
          </div>

          {/* CTAs + Booking notice */}
          <div
            className={`transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ opacity: isLoaded ? contentOpacity : 0, transform: `translateY(${contentY}px)` }}
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-white text-charcoal text-[11px] font-bold uppercase tracking-[0.15em] px-7 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-gold/10 active:scale-[0.97]"
              >
                {t.bookNow}
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onMenuClick}
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.15em] px-7 py-3 rounded-xl transition-all duration-300 active:scale-[0.97]"
              >
                {translations[lang].nav.menu}
              </button>
            </div>

            {/* Booking notice */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-1 h-1 rounded-full bg-gold animate-pulse shrink-0" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/80">
                {lang !== 'en' ? '立即訂座 · 4月29日起接受預約' : 'Book Now · Reservations 29 April 2026'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll cue ── */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-all duration-500 delay-[1000ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">{translations[lang].nav.scroll}</span>
        <ChevronDown size={14} className="animate-bounce" />
      </button>

    </section>
  );
};
