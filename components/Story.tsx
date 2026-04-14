import React from 'react';
import { ArrowRight, Scissors, Trophy } from 'lucide-react';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';
import { useNavigate } from 'react-router-dom';

interface StoryProps {
  lang: Language;
}

export const Story: React.FC<StoryProps> = ({ lang }) => {
  const t = (translations[lang] as any).story;
  const navigate = useNavigate();

  // Destructure with fallbacks just in case
  const {
    eyebrow = 'FROM NAPLES TO HONG KONG',
    headline = 'Three Generations.\nOne Contemporary Vision.',
    p1 = 'Raised in the rhythm of family ovens in Naples, Vincenzo Capuano brings a contemporary take on Neapolitan pizza to Hong Kong — light, expressive, and deeply rooted in craft. Every dough, every crust, every ingredient reflects a tradition shaped over generations and refined for today.',
    p2 = 'This is not just tradition repeated. It is tradition evolved. A modern Neapolitan legacy crafted for the contemporary palate.',
    pullQuote = '"Pizza is heritage, technique, and joy."',
    author = 'Vincenzo Capuano',
    experienceTitle = 'The Capuano Experience',
    exp1 = 'Contemporary Neapolitan',
    exp2 = 'Signature Pronounced Crust',
    exp3 = 'Iconic Scissor-Cut Ritual',
    exp4 = 'Globally Award-Winning',
    bookCTA = 'Book a Table',
    menuCTA = 'Explore the Menu',
    cardQuote = '"Contemporary pizza is not just a style, it is a philosophy."',
    badgeMain = '081',
    badgeSub = 'Napoli',
    cardLabel = '3rd Generation Master'
  } = t || {};

  return (
    <section className="bg-[#0c1d13] relative py-24 md:py-32 overflow-hidden selection:bg-[#c1272d] selection:text-white border-t border-white/5">

      {/* Redesigned Background Design & Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(17,43,29,0.8)_0%,rgba(12,29,19,1)_100%)]"></div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,238,220,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,238,220,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40"></div>

        {/* Naples Color Essence: Subtle Pomodoro & Gold Glows */}
        <div className="absolute top-[-15%] right-[-10%] w-[60%] h-[60%] bg-[#c1272d]/10 blur-[150px] rounded-full opacity-50"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-[#f3c65f]/5 blur-[150px] rounded-full opacity-50"></div>

        {/* Artistic "081" Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          <h2 className="text-[35vw] font-display font-black italic text-white/[0.012] uppercase tracking-[ -0.05em] leading-none transform -rotate-12 translate-y-10 whitespace-nowrap">
            081 Napoli
          </h2>
        </div>

        {/* Mediterranean Texture Hint */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-8 items-center relative z-10">

        {/* LEFT COLUMN: Storytelling & Conversion */}
        <div className="lg:col-span-6 relative z-10 py-8 md:py-0">

          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <span className="text-[#f5eedc]/60 text-[8px] md:text-xs font-bold uppercase tracking-[0.3em] block mb-3 md:mb-5">
              {eyebrow}
            </span>
            <h2 className="text-[#f5eedc] font-display text-3xl sm:text-5xl md:text-6xl italic leading-[1.1] mb-6 md:mb-8 whitespace-pre-line">
              {headline}
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6 text-[#f5eedc]/80 font-serif text-base md:text-xl font-light leading-relaxed mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <p>{p1}</p>
            <p>{p2}</p>
          </div>

          <blockquote className="border-l-4 border-[#c1272d] pl-5 md:pl-6 mb-10 md:mb-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <p className="text-[#f3c65f] font-serif italic text-xl md:text-3xl font-medium leading-tight">
              {pullQuote}
            </p>
            <footer className="mt-4 md:mt-5 flex items-center gap-3 md:gap-4">
              <span className="w-8 md:w-10 h-[1.5px] bg-[#c1272d]"></span>
              <span className="text-[#f5eedc]/60 text-[9px] uppercase font-bold tracking-[0.2em]">{author}</span>
            </footer>
          </blockquote>

          <div className="mb-10 md:mb-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <h3 className="text-[#f5eedc] uppercase tracking-[0.2em] text-[9px] md:text-[11px] font-bold mb-5 md:mb-6 flex items-center gap-4">
              {experienceTitle} <span className="h-px bg-white/10 flex-1"></span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-6">
              {[
                { text: exp1, bg: 'bg-[#f3c65f]' },
                { text: exp2, bg: 'bg-[#c1272d]' },
                { text: exp3, bg: 'bg-[#f3c65f]' },
                { text: exp4, bg: 'bg-[#c1272d]' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 group">
                  <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${item.bg} mt-2 group-hover:scale-150 transition-transform duration-300`}></div>
                  <span className="text-white/80 font-sans font-light text-[10px] md:text-xs uppercase tracking-[0.15em]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <a
              href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#c1272d] text-white font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs hover:bg-white hover:text-[#c1272d] transition-colors text-center shadow-[0_10px_30px_rgba(193,39,45,0.25)] flex items-center justify-center gap-3 group"
            >
              {bookCTA}
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => { window.scrollTo(0, 0); navigate('/menu'); }}
              className="w-full sm:w-auto px-7 py-3.5 border border-[#f5eedc]/30 text-[#f5eedc] font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs hover:border-[#f5eedc] hover:bg-[#f5eedc]/5 transition-colors text-center"
            >
              {menuCTA}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Collage */}
        <div className="lg:col-span-6 relative mt-8 md:mt-16 lg:mt-0 min-h-[480px] md:min-h-[700px] w-full flex items-center justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-300 p-2 md:p-8">

          {/* Background Shadow Box */}
          <div className="absolute right-[5%] top-[10%] w-[85%] h-[75%] bg-[#08170f] shadow-2xl skew-y-2 origin-bottom-left transform border border-white/5 opacity-80"></div>

          {/* Handrawn Typography Background */}
          <div className="absolute right-0 top-[15%] z-0 pointer-events-none transform rotate-90 origin-right opacity-[0.03] select-none text-[#f5eedc]">
            <h2 className="text-[10rem] md:text-[14rem] font-serif italic font-black leading-none whitespace-nowrap">
              {lang === 'en' ? 'Capuano' : '文森佐'}
            </h2>
          </div>

          {/* Primary Main Image */}
          <div className="relative z-10 w-[85%] lg:w-[80%] h-[75%] lg:h-[80%] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group border border-white/5 overflow-hidden rounded-sm">
            {/* Sepia/gold wash overlay removed on hover */}
            <div className="absolute inset-0 bg-[#f3c65f] mix-blend-color z-20 opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#112b1d]/80 via-transparent to-transparent z-10 pointer-events-none"></div>

            <SafeImage
              src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/Family%20Baker%20Capuano-147.webp"
              alt={lang === 'en' ? 'Vincenzo Capuano and Grandfather' : '文森佐 · 卡普阿諾與他的祖父'}
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
          </div>

          {/* Badge Overlay */}
          <div className="absolute top-[0%] right-[0%] md:-right-[2%] z-30 w-24 h-24 md:w-36 md:h-36 bg-[#c1272d] rounded-full flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform rotate-12 hover:rotate-0 transition-transform duration-700 border-4 md:border-[6px] border-[#112b1d]">
            <span className="text-[#f5eedc] font-serif italic text-2xl md:text-4xl font-black leading-none">081</span>
            <span className="text-[#f5eedc]/80 text-[6px] md:text-[9px] uppercase tracking-[0.3em] font-bold mt-2 leading-none">Napoli</span>
          </div>

          {/* Editorial Card Overlay */}
          <div className="absolute bottom-[2%] left-[0%] md:-left-[5%] z-30 bg-[#f5eedc] p-5 md:p-8 w-[80%] max-w-[220px] md:max-w-[320px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-500 border-l-4 border-[#c1272d]">
            <Scissors size={20} className="text-[#f3c65f] mb-3 md:mb-4 transform -scale-x-100 rotate-45 md:w-6 md:h-6" />
            <p className="text-[#112b1d] font-serif italic text-base md:text-xl leading-snug mb-4 md:mb-5 font-medium">
              {cardQuote}
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-5 md:w-6 h-[1.5px] bg-[#c1272d]"></span>
              <span className="text-[#112b1d] text-[7px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
                {cardLabel}
              </span>
            </div>
          </div>

          {/* World Champion Floating Badge */}
          <div className="absolute top-[35%] -left-[10%] md:-left-[15%] z-40 bg-[#c1272d] text-white p-4 md:p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 hidden md:flex items-center gap-4 border border-white/10">
            <Trophy size={28} className="text-[#f3c65f]" />
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-black leading-none mb-1">Napoli 2022</span>
              <span className="text-sm md:text-base font-display italic leading-none whitespace-nowrap">World Pizza Champion</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
