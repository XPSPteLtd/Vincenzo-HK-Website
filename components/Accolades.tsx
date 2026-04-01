
import React from 'react';
import { Language, translations } from '../translations';
import { Trophy } from 'lucide-react';

interface AccoladesProps {
  lang: Language;
}

export const Accolades: React.FC<AccoladesProps> = ({ lang }) => {
  const t = (translations[lang] as any).accolades;
  if (!t) return null;

  const items = [
    {
      logo: <img src="/caputo.webp" alt="Caputo 1924" className="h-8 w-auto object-contain opacity-80" />,
      title: t.impastoTitle,
      desc: t.impastoDesc,
      accent: 'text-gold',
    },
    {
      logo: (
        <div className="flex flex-col items-center leading-none">
          <span className="text-white font-sans font-black text-2xl leading-none">#13</span>
          <span className="text-white/30 text-[8px] uppercase tracking-widest font-bold mt-0.5">World</span>
        </div>
      ),
      title: t.rankingTitle,
      desc: t.rankingDesc,
      accent: 'text-red',
    },
    {
      logo: <img src="/gambero_rosso.webp" alt="Gambero Rosso" className="h-8 w-auto object-contain opacity-80" />,
      title: t.gamberoTitle,
      desc: t.gamberoDesc,
      accent: 'text-gold',
    },
  ];

  return (
    <section className="bg-charcoal border-y border-white/[0.06] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-14 md:mb-20">
          <div className="flex items-center gap-3 shrink-0">
            <Trophy size={14} className="text-gold" />
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.35em] text-gold/70">
              {lang === 'hk' ? '世界冠軍殊榮' : 'Awards & Recognition'}
            </span>
          </div>
          <div className="h-px bg-white/[0.06] flex-1 hidden sm:block" />
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-white leading-none capitalize whitespace-nowrap">
            {t.worldChampion}
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:px-10 py-8 md:py-0 gap-5 group first:md:pl-0 last:md:pr-0">

              {/* Logo / badge */}
              <div className="h-10 flex items-center">
                {item.logo}
              </div>

              {/* Title */}
              <div>
                <h3 className={`font-sans font-bold text-base md:text-lg uppercase tracking-[0.15em] ${item.accent} mb-3 leading-snug`}>
                  {item.title}
                </h3>
                <div className="h-px w-8 bg-white/10 mb-4 group-hover:w-full transition-all duration-700" />
                <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-14 md:mt-20 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-x-8 gap-y-2">
          {['Napoli 2022', 'Champion of Champions', '#12 World Chain 2024', '#13 World Chain 2025', '2 Spicchi Gambero Rosso'].map((badge, i) => (
            <span key={i} className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/20">
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
