
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
      logo: <img src="https://www.capvin.com/wp-content/uploads/2023/11/logo-caputo@2x.png" alt="Caputo 1924" className="h-14 md:h-16 w-auto object-contain opacity-100" />,
      title: t.impastoTitle,
      desc: t.impastoDesc,
      accent: 'text-gold',
    },
    {
      logo: <img src="https://www.capvin.com/wp-content/uploads/2026/01/top-50-capuano.png" alt="50 Top Pizza" className="h-14 md:h-16 w-auto object-contain opacity-100" />,
      title: t.rankingTitle,
      desc: t.rankingDesc,
      accent: 'text-red',
    },
    {
      logo: (
        <div className="bg-white px-4 py-2 rounded-xl flex items-center justify-center shadow-lg">
          <img 
            src="https://www.capvin.com/wp-content/uploads/2026/01/254AD26A-3572-4DBC-995C-1390FFB9A480.png" 
            alt="Gambero Rosso" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </div>
      ),
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
              <div className="h-16 md:h-20 flex items-center">
                {item.logo}
              </div>

              {/* Title */}
              <div>
                <h3 className={`font-sans font-bold text-base md:text-lg uppercase tracking-[0.15em] ${item.accent} mb-3 leading-snug`}>
                  {item.title}
                </h3>
                <div className="h-px w-8 bg-white/10 mb-4 group-hover:w-full transition-all duration-700" />
                <p className="text-white/65 text-sm md:text-base leading-relaxed font-light whitespace-pre-line">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-14 md:mt-20 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-x-8 gap-y-2">
          {['Napoli 2022', 'Champion of Champions', '#12 World Chain 2024', '#13 World Chain 2025', '2 Spicchi Gambero Rosso'].map((badge, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
