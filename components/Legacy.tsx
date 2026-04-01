
import React from 'react';
import { ArrowRight, Scissors, Trophy, Cloud, Wheat } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';
import { useNavigate } from 'react-router-dom';

interface LegacyProps {
  lang: Language;
}

export const Legacy: React.FC<LegacyProps> = ({ lang }) => {
  const story = (translations[lang] as any).story;
  const sig = translations[lang].signature;
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#0b1c12] overflow-hidden border-t border-white/[0.05]">

      {/* ── Ambient background ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(17,43,29,0.9)_0%,rgba(11,28,18,1)_70%)]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,238,220,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(245,238,220,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* Colour glows */}
        <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-[#c1272d]/8 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#f3c65f]/5 blur-[160px] rounded-full" />
        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none">
          <span className="text-[22vw] font-display font-black italic text-white/[0.018] tracking-tighter leading-none -rotate-6 whitespace-nowrap">
            081 Napoli
          </span>
        </div>
      </div>

      {/* ── Content grid ─────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 py-24 md:py-32 lg:py-36">

        {/* ── LEFT: narrative ─────────────────────────────── */}
        <div className="flex flex-col justify-center lg:pr-16 xl:pr-24">

          {/* Eyebrow */}
          <span className="inline-flex items-center gap-3 text-[#f5eedc]/60 text-[11px] md:text-xs font-bold uppercase tracking-[0.35em] mb-5 md:mb-7">
            <span className="w-6 h-px bg-[#f5eedc]/20" />
            {story.eyebrow}
          </span>

          {/* Headline — merges story + philosophy ideas */}
          <h2 className="font-display italic text-[#f5eedc] text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] mb-8 md:mb-10 whitespace-pre-line">
            {story.headline}
          </h2>

          {/* Story paragraphs */}
          <div className="space-y-4 text-[#f5eedc]/75 font-sans font-light text-sm md:text-base leading-relaxed mb-8 md:mb-10">
            <p>{story.p1}</p>
            <p>{story.p2}</p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-[3px] border-[#c1272d] pl-5 mb-10 md:mb-12">
            <p className="text-[#f3c65f] font-serif italic text-lg md:text-2xl font-medium leading-snug">
              {story.pullQuote}
            </p>
            <footer className="mt-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#c1272d]" />
              <span className="text-[#f5eedc]/50 text-[10px] uppercase font-bold tracking-[0.2em]">{story.author}</span>
            </footer>
          </blockquote>

          {/* Philosophy callouts — compact inline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                <Wheat size={13} className="text-gold" />
              </div>
              <div>
                <p className="text-[#f5eedc] text-[11px] font-bold uppercase tracking-[0.15em] mb-1">{sig.nuvolaTitle}</p>
                <p className="text-[#f5eedc]/55 text-xs leading-relaxed font-light">{sig.nuvolaDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                <Scissors size={13} className="text-gold" />
              </div>
              <div>
                <p className="text-[#f5eedc] text-[11px] font-bold uppercase tracking-[0.15em] mb-1">{sig.scissorsTitle}</p>
                <p className="text-[#f5eedc]/55 text-xs leading-relaxed font-light">{sig.scissorsDesc}</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-[#c1272d] hover:bg-white text-white hover:text-[#c1272d] text-xs font-bold uppercase tracking-[0.2em] px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_8px_24px_rgba(193,39,45,0.25)] active:scale-[0.97]"
            >
              {story.bookCTA}
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => { window.scrollTo(0, 0); navigate('/menu'); }}
              className="inline-flex items-center justify-center gap-2.5 border border-[#f5eedc]/20 text-[#f5eedc]/70 hover:border-[#f5eedc]/50 hover:text-[#f5eedc] text-xs font-bold uppercase tracking-[0.2em] px-7 py-3.5 rounded-xl transition-all duration-300 active:scale-[0.97]"
            >
              {story.menuCTA}
            </button>
          </div>
        </div>

        {/* ── RIGHT: editorial collage ─────────────────────── */}
        <div className="relative min-h-[520px] md:min-h-[680px] lg:min-h-0 flex items-center justify-center lg:justify-end">

          {/* Skewed shadow box behind */}
          <div className="absolute right-[4%] top-[8%] w-[82%] h-[76%] bg-[#071210] rounded-2xl skew-y-1 origin-bottom-left border border-white/[0.04]" />

          {/* Primary image */}
          <div className="relative z-10 w-[84%] lg:w-[90%] h-[78%] lg:h-[82%] rounded-xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)] group border border-white/[0.04]">
            {/* Sepia gold wash, removed on hover */}
            <div className="absolute inset-0 bg-[#f3c65f] mix-blend-color z-20 opacity-15 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c12]/80 via-transparent to-transparent z-10 pointer-events-none" />
            <SafeImage
              src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/Family%20Baker%20Capuano-147.webp"
              alt="Vincenzo Capuano — Three Generations of Craft"
              fallbackPrompt="Cinematic portrait of an Italian pizzaiolo in a wood-fired kitchen, warm golden tones"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[2000ms] ease-out"
            />
          </div>

          {/* Secondary floating image — philosophy pizza */}
          <div className="absolute bottom-[4%] left-[0%] md:-left-[4%] z-20 w-[38%] max-w-[200px] aspect-square rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] border border-white/[0.06] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c12]/60 to-transparent z-10 pointer-events-none" />
            <SafeImage
              src="/philosophy-pizza.webp"
              alt="Vincenzo Capuano Contemporary Pizza"
              fallbackPrompt="Close-up of a perfectly baked contemporary Neapolitan pizza with airy crust, dramatic lighting"
              className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[2000ms] ease-out"
            />
          </div>

          {/* 081 badge */}
          <div className="absolute top-[2%] right-[2%] md:-right-[2%] z-30 w-20 h-20 md:w-28 md:h-28 bg-[#c1272d] rounded-full flex flex-col items-center justify-center shadow-[0_16px_40px_rgba(0,0,0,0.4)] rotate-12 hover:rotate-0 transition-transform duration-700 border-[5px] border-[#0b1c12]">
            <span className="text-[#f5eedc] font-display italic text-xl md:text-3xl font-black leading-none">081</span>
            <span className="text-[#f5eedc]/70 text-[6px] md:text-[8px] uppercase tracking-[0.3em] font-bold mt-1 leading-none">Napoli</span>
          </div>

          {/* World Champion badge */}
          <div className="absolute top-[38%] -left-[8%] md:-left-[12%] z-30 bg-[#c1272d] text-white px-4 py-3 md:px-5 md:py-4 shadow-2xl -rotate-6 hover:rotate-0 transition-all duration-500 hidden sm:flex items-center gap-3 rounded border border-white/10">
            <Trophy size={18} className="text-[#f3c65f] shrink-0 md:w-6 md:h-6" />
            <div className="flex flex-col">
              <span className="text-[9px] md:text-[11px] uppercase tracking-widest font-black leading-none mb-0.5">Napoli 2022</span>
              <span className="text-xs md:text-sm font-display italic leading-none whitespace-nowrap">World Pizza Champion</span>
            </div>
          </div>

          {/* Quote seal — philosophy quote */}
          <div className="absolute bottom-[26%] right-[1%] md:-right-[2%] z-30 bg-[#0b1c12]/95 backdrop-blur-md w-28 h-28 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center p-4 text-center shadow-[0_16px_40px_rgba(0,0,0,0.5)] border border-gold/20 pointer-events-none">
            <p className="text-gold font-serif text-[8px] md:text-[10px] leading-snug italic relative z-10 px-1">
              "{sig.quote.replace(/"/g, '').split('(')[0].trim()}"
            </p>
            <div className="mt-2 text-[5px] md:text-[6px] uppercase tracking-[0.25em] font-bold text-gold/40 border-t border-gold/10 pt-1.5 w-full text-center">
              Vincenzo Capuano
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
