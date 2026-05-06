
import React from 'react';
import { Scissors, Wheat, Cloud, Quote } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';

interface SignatureProps {
  lang: Language;
}

export const Signature: React.FC<SignatureProps> = ({ lang }) => {
  const t = translations[lang].signature;

  return (
    <section
      id="concept"
      className="relative bg-charcoal overflow-hidden flex flex-col border-t border-white/5"
    >
      {/* Ghost "081" background numeral */}
      <div className="absolute top-0 left-0 text-[12rem] md:text-[18rem] lg:text-[22rem] font-serif text-white/[0.04] leading-none select-none pointer-events-none translate-y-[-10%]">
        081
      </div>

      {/* Full-height flex row */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-0">

        {/* ── Left: Content ─────────────────────────────── */}
        <div className="w-full lg:w-[42%] flex items-center justify-end px-6 sm:px-10 md:px-12 lg:pl-0 lg:pr-12 xl:pr-20 py-12 md:py-28 lg:py-24 relative z-10">
          <div className="max-w-md w-full space-y-6 md:space-y-10">

            {/* Header */}
            <div>
              <span className="text-gold/50 font-bold tracking-[0.3em] text-[8px] md:text-[10px] uppercase mb-2 md:mb-3 block">
                {t.thePhilosophy}
              </span>
              <h2 className="font-display italic capitalize text-4xl sm:text-5xl md:text-6xl text-white mb-4 md:mb-5 leading-[0.9]">
                {t.contemporary}<br />
                <span className="text-gray-500">{t.neapolitan}</span>
              </h2>
              <p className="text-gray-400 font-sans font-light leading-relaxed text-xs md:text-sm">
                {t.description}
              </p>
            </div>

            {/* Feature cards */}
            <div className="space-y-5 md:space-y-7 border-l border-white/10 pl-5 md:pl-6">

              <div className="group cursor-default">
                <h3 className="text-xs md:text-sm font-sans uppercase font-bold text-white mb-1 md:mb-2 flex items-center gap-3 group-hover:text-gold transition-colors">
                  <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm group-hover:scale-110 transition-transform shrink-0">
                    <Cloud className="text-gold/20 w-4 h-4 md:w-6 md:h-6 absolute" strokeWidth={1} />
                    <Wheat className="text-gold w-3 h-3 md:w-3.5 md:h-3.5 relative z-10" />
                  </div>
                  {t.nuvolaTitle}
                </h3>
                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed pl-[44px] md:pl-[52px]">
                  {t.nuvolaDesc}
                </p>
              </div>

              <div className="group cursor-default">
                <h3 className="text-xs md:text-sm font-sans uppercase font-bold text-white mb-1 md:mb-2 flex items-center gap-3 group-hover:text-gold transition-colors">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform border border-gold/20 backdrop-blur-sm shrink-0">
                    <Scissors size={13} className="text-gold md:w-[15px]" />
                  </div>
                  {t.scissorsTitle}
                </h3>
                <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed pl-[44px] md:pl-[52px]">
                  {t.scissorsDesc}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── Right: Image ──────────────────────────────── */}
        <div className="w-full lg:w-[58%] relative min-h-[420px] md:min-h-[500px] lg:min-h-0 order-first lg:order-last">

          {/* Image fills the entire right column */}
          <div className="absolute inset-0 overflow-hidden lg:rounded-l-3xl shadow-[0_0_60px_rgba(0,0,0,0.6)] group">
            <SafeImage
              src="https://vincenzocapuano.sg/philosophy-pizza.webp"
              alt="Vincenzo Capuano Signature Pizza Experience"
              fallbackPrompt="Professional lifestyle shot of someone enjoying an authentic Neapolitan pizza, contemporary setting, warm lighting"
              aspectRatio="auto"
              className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
            />
            {/* Left edge gradient so content bleeds into image on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/20 to-transparent lg:hidden" />
            {/* Subtle bottom darkening on all sizes */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
          </div>

          {/* Quote seal */}
          <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 bg-charcoal/90 backdrop-blur-md w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center p-5 md:p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 border border-gold/20 pointer-events-none">
            <Quote className="text-gold/10 w-7 h-7 md:w-10 md:h-10 absolute top-4 md:top-5 opacity-30" />
            <p className="text-gold font-serif text-[10px] md:text-[12px] leading-snug relative z-10 px-2 italic">
              "{t.quote.replace(/"/g, '')}"
            </p>
            <div className="mt-2 md:mt-3 text-[6px] uppercase tracking-[0.3em] font-bold text-gold/40 border-t border-gold/10 pt-2">
              Vincenzo Capuano
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
