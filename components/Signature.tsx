
import React from 'react';
import { Scissors, Wheat } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';

interface SignatureProps {
  lang: Language;
}

export const Signature: React.FC<SignatureProps> = ({ lang }) => {
  const t = translations[lang].signature;

  return (
    <section id="concept" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute top-20 left-0 text-[15rem] md:text-[20rem] font-serif text-white/[0.02] leading-none select-none pointer-events-none">081</div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-10 md:space-y-12 order-2 md:order-1">
            <div>
              <span className="text-gold font-bold tracking-mega text-[10px] md:text-xs uppercase mb-4 block">{t.thePhilosophy}</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 leading-none uppercase">
                {t.contemporary} <br/>
                <span className="text-gray-500">{t.neapolitan}</span>
              </h2>
              <p className="text-gray-400 font-light leading-loose text-sm md:text-base max-w-md">
                {t.description}
              </p>
            </div>

            <div className="space-y-8 md:space-y-10 border-l border-white/10 pl-6 md:pl-8">
              <div className="relative">
                <h3 className="text-lg md:text-xl font-serif text-white mb-3 flex items-center gap-3">
                    <Wheat className="text-gold w-5 h-5" /> {t.nuvolaTitle}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-sm">
                   {t.nuvolaDesc}
                </p>
              </div>

              <div className="relative">
                <h3 className="text-lg md:text-xl font-serif text-white mb-3 flex items-center gap-3">
                    <Scissors className="text-gold w-5 h-5" /> {t.scissorsTitle}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-sm">
                   {t.scissorsDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <SafeImage 
                  src="https://vincenzocapuano.sg/wp-content/uploads/2025/04/Untitled-design-188.png" 
                  alt="Authentic Neapolitan Pizza and Copper Pots" 
                  fallbackPrompt="Close up of high-hydration pizza dough preparation, bubbles in the dough, flour dusting, professional kitchen lighting"
                  aspectRatio="4:3"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gold p-6 md:p-8 max-w-[240px] md:max-w-xs">
                    <p className="text-charcoal font-serif italic text-base md:text-lg leading-tight">
                        "{t.quote}"
                    </p>
                </div>
            </div>
            <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-full h-full border border-white/10 z-0 hidden md:block rounded-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
