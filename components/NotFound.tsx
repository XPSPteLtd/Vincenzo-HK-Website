
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, BookOpen, Flame } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Neapolitan color glows — tomato, basil, gold */}
      <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] rounded-full opacity-[0.06] blur-[80px] bg-red pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.07] blur-[60px] bg-[#3A7D44] pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full opacity-[0.05] blur-[50px] bg-gold pointer-events-none" />

      {/* Ghost 404 + Logo */}
      <div className="relative mb-4">
        <h1 className="text-[9rem] md:text-[15rem] font-display italic leading-none select-none text-white/[0.035]">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png"
            alt="Vincenzo Capuano"
            className="h-20 md:h-28"
          />
        </div>
      </div>

      {/* Margherita dots — pomodoro · mozzarella · basilico */}
      <div className="flex items-center gap-2.5 mb-7">
        <span className="w-2.5 h-2.5 rounded-full bg-red" title="Pomodoro" />
        <span className="w-2.5 h-2.5 rounded-full bg-offwhite/70" title="Mozzarella" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A7D44]" title="Basilico" />
      </div>

      {/* Headline */}
      <h2 className="font-display italic text-gold text-3xl md:text-[2.8rem] leading-tight mb-2">
        You took a wrong turn.
      </h2>
      <p className="font-display italic text-white/40 text-xl md:text-2xl mb-5">
        Every great meal starts with one.
      </p>

      <div className="w-10 h-px bg-gold/25 mb-5" />

      <p className="font-sans text-white/45 text-xs md:text-sm max-w-[22rem] leading-relaxed mb-10 tracking-wide">
        The page you're after doesn't exist — but the best pizza in Hong Kong is very real. And it's waiting.
      </p>

      {/* Three destination cards — tomato / gold / basil */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">

        {/* Reserve — Napoli Red */}
        <Link
          to="/reservations"
          className="group flex flex-col items-center gap-3 px-5 py-7 rounded-2xl border border-red/25 hover:border-red/60 hover:bg-red/8 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-red/15 flex items-center justify-center group-hover:bg-red/30 transition-colors duration-300">
            <Scissors size={17} className="text-red" />
          </div>
          <div>
            <p className="font-sans font-semibold text-offwhite text-[10px] tracking-[0.2em] uppercase mb-1">
              Reserve a Table
            </p>
            <p className="font-sans text-white/35 text-[11px]">Secure your seat</p>
          </div>
        </Link>

        {/* Menu — Gold */}
        <Link
          to="/menu"
          className="group flex flex-col items-center gap-3 px-5 py-7 rounded-2xl border border-gold/25 hover:border-gold/60 hover:bg-gold/8 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center group-hover:bg-gold/30 transition-colors duration-300">
            <BookOpen size={17} className="text-gold" />
          </div>
          <div>
            <p className="font-sans font-semibold text-offwhite text-[10px] tracking-[0.2em] uppercase mb-1">
              The Menu
            </p>
            <p className="font-sans text-white/35 text-[11px]">See what's cooking</p>
          </div>
        </Link>

        {/* Our Story — Basil Green */}
        <Link
          to="/our-story"
          className="group flex flex-col items-center gap-3 px-5 py-7 rounded-2xl border border-[#3A7D44]/25 hover:border-[#3A7D44]/60 hover:bg-[#3A7D44]/8 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-[#3A7D44]/15 flex items-center justify-center group-hover:bg-[#3A7D44]/30 transition-colors duration-300">
            <Flame size={17} className="text-[#4A9958]" />
          </div>
          <div>
            <p className="font-sans font-semibold text-offwhite text-[10px] tracking-[0.2em] uppercase mb-1">
              Our Story
            </p>
            <p className="font-sans text-white/35 text-[11px]">Meet Vincenzo</p>
          </div>
        </Link>

      </div>

      {/* Quiet home link */}
      <Link
        to="/"
        className="mt-9 font-sans text-white/25 hover:text-white/55 text-[10px] tracking-[0.25em] uppercase transition-colors duration-300"
      >
        ← Back to Home
      </Link>

    </div>
  );
};
