
import React from 'react';
import { Language, translations } from '../translations_new';
import { Trophy, Star, ShieldCheck } from 'lucide-react';

interface AccoladesProps {
  lang: Language;
}

export const Accolades: React.FC<AccoladesProps> = ({ lang }) => {
  const t = (translations[lang] as any).accolades;
  if (!t) return null;

  return (
    <section className="relative py-12 md:py-32 overflow-hidden border-y border-white/5 bg-[radial-gradient(circle_at_center,rgba(17,43,29,0.8)_0%,rgba(10,26,17,1)_100%)]">
      
      {/* Redesigned Background Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(193,39,45,0.05)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(243,198,95,0.05)_0%,transparent_50%)]"></div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Faint Artistic Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[15vw] md:text-[20vw] font-display font-black italic text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter">
             World Champion
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* World Champion Header - Premium Alignment */}
        <div className="flex flex-col items-center mb-6 md:mb-24 text-center">
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                <div className="h-[1px] w-6 md:w-16 bg-[#c1272d]/40"></div>
                <div className="w-6 h-6 md:w-12 md:h-12 rounded-full border border-[#c1272d]/30 flex items-center justify-center bg-[#c1272d]/5">
                  <Trophy size={12} className="text-[#c1272d] md:w-5 md:h-5 animate-pulse" />
                </div>
                <div className="h-[1px] w-6 md:w-16 bg-[#c1272d]/40"></div>
            </div>
            
            <h2 className="font-display italic text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f3c65f] capitalize tracking-tighter leading-none mb-2 md:mb-4">
                {t.worldChampion}
            </h2>
            <p className="text-white/40 font-sans uppercase tracking-[0.25em] text-[7px] md:text-xs font-bold max-w-[240px] md:max-w-none line-clamp-2 md:line-clamp-none">
              Napoli 2022 • Champion of Champions • 2024 & 2025 Top World Chain
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 lg:gap-20">
          
          {/* Caputo Block - Refined Editorial Style */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-4 md:mb-8 relative flex items-center justify-center md:justify-start w-full">
              <div className="w-14 h-14 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-[#f3c65f]/40 group-hover:bg-white/[0.05] transition-all duration-700 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <img 
                  src="/caputo.webp" 
                  alt="Caputo 1924" 
                  className="w-8 md:w-16 h-auto object-contain relative z-10"
                />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-[#f3c65f] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
              </div>
            </div>
            <h3 className="font-display italic text-lg md:text-3xl text-white mb-2 md:mb-4 group-hover:text-[#f3c65f] transition-colors">
              {t.impastoTitle}
            </h3>
            <p className="text-white/60 font-serif text-xs md:text-lg leading-relaxed font-light">
              {t.impastoDesc}
            </p>
          </div>

          {/* 50 Top Pizza Block - Refined Editorial Style */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            <div className="mb-4 md:mb-8 relative flex items-center justify-center md:justify-start w-full">
              <div className="w-14 h-14 md:w-24 md:h-24 flex flex-col items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-[#c1272d]/40 group-hover:bg-white/[0.05] transition-all duration-700 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <span className="text-white font-sans font-black text-lg md:text-3xl leading-none">13°</span>
                <span className="text-white/40 text-[5px] md:text-[7px] uppercase tracking-widest font-black mt-1">ranking</span>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-[#c1272d] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
              </div>
            </div>
            <h3 className="font-display italic text-lg md:text-3xl text-white mb-2 md:mb-4 group-hover:text-[#c1272d] transition-colors">
              {t.rankingTitle}
            </h3>
            <p className="text-white/60 font-serif text-xs md:text-lg leading-relaxed font-light">
              {t.rankingDesc}
            </p>
          </div>

          {/* Gambero Rosso Block - Refined Editorial Style */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="mb-4 md:mb-8 relative flex items-center justify-center md:justify-start w-full">
              <div className="w-14 h-14 md:w-24 md:h-24 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-[#f3c65f]/40 group-hover:bg-white/[0.05] transition-all duration-700 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <img 
                  src="/gambero_rosso.webp" 
                  alt="Gambero Rosso" 
                  className="w-10 md:w-16 h-auto relative z-10"
                />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-[#f3c65f] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right"></div>
              </div>
            </div>
            <h3 className="font-display italic text-lg md:text-3xl text-white mb-2 md:mb-4 group-hover:text-[#f3c65f] transition-colors">
              {t.gamberoTitle}
            </h3>
            <p className="text-white/60 font-serif text-xs md:text-lg leading-relaxed font-light">
              {t.gamberoDesc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
