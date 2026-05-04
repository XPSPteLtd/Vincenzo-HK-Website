
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Language, translations } from '../translations';
import { Page } from '../App';

interface FooterProps {
  lang: Language;
  onPageChange: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];
  const hk = lang === 'hk';

  const quote = hk
    ? '「當代薄餅不只是一個流派，更是一套哲學。」'
    : '"CONTEMPORARY PIZZA IS NOT JUST A STYLE, IT IS A PHILOSOPHY."';

  const linkClass = "text-white/60 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors py-2 px-1";

  return (
    <footer className="relative bg-black overflow-hidden pb-safe-area">

      {/* Ghost watermark text */}
      <div className="absolute inset-0 flex items-end pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-display font-black italic text-white/[0.025] leading-none whitespace-nowrap tracking-tight -mb-4 -ml-4">
          VINCENZO CAPUANO
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center pt-20 pb-12">

        {/* Logo */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png"
            alt="Vincenzo Capuano"
            className="h-28 md:h-36 w-auto object-contain drop-shadow-2xl"
          />
          <p className="text-xs text-white/55 tracking-[0.35em] uppercase font-light mt-3 font-sans">
            vivere di pizza è meraviglioso
          </p>
        </div>

        {/* Philosophy quote */}
        <p className="text-white/55 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-center leading-relaxed mb-12 max-w-xl">
          {quote}
        </p>

        {/* Nav row */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-12">
          <Link to="/" className={linkClass}>{t.nav.home}</Link>
          <Link to="/menu" className={linkClass}>{t.nav.menu}</Link>
          <Link to="/our-story" className={linkClass}>{hk ? '我們的故事' : 'Our Story'}</Link>
          <Link to="/group-dining" className={linkClass}>{hk ? '團體用餐' : 'Group Dining'}</Link>
          <Link to="/contact" className={linkClass}>{hk ? '位置' : 'Location'}</Link>
          <Link to="/faq" className={linkClass}>{hk ? '常見問題' : 'FAQ'}</Link>
          <a
            href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-xs font-bold tracking-[0.2em] uppercase border-b border-gold pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            {t.nav.reservations}
          </a>
          <a
            href="https://www.instagram.com/vincenzocapuano.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
          <a
            href="https://www.facebook.com/vincenzocapuano.hk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook
          </a>
        </nav>

        {/* Location + hours row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-16">
          <a
            href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/55 hover:text-white/80 transition-colors group"
          >
            <MapPin size={13} className="text-white/30 group-hover:text-gold transition-colors shrink-0" />
            <span className="text-xs font-light tracking-wide">
              {hk ? '利東街, GF Unit 01 04 05, 灣仔, 香港' : 'Lee Tung Avenue, GF Unit 01 04 05, Wan Chai, HK'}
            </span>
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/50">
            {hk ? '每週 7 天 · 午市 12:00–15:00 · 晚市 18:00–23:00' : 'OPEN 7 DAYS · LUNCH 12:00–15:00 · DINNER 18:00–23:00'}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="w-full border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50 uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} HK Capvin Limited
          </p>
          <a
            href="https://pulsenpixels.com?utm_source=vincenzo-capuano-hk&utm_medium=website&utm_campaign=footer-credit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-white/15 hover:text-white/40 tracking-[0.2em] font-bold transition-colors"
          >
            Design by Pulse n Pixels
          </a>
        </div>

      </div>
    </footer>
  );
};
