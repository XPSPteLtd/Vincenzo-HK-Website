
import React from 'react';
import { MapPin, Clock, Phone, ArrowRight, CalendarDays, Users, ExternalLink, TrainFront } from 'lucide-react';
import { Language, translations } from '../translations';

interface LocationProps {
  onBookClick: () => void;
  lang: Language;
}

export const Location: React.FC<LocationProps> = ({ lang }) => {
  const t = translations[lang].location;

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/YXNiZqsVJb7GVnMaA', '_blank');
  };

  return (
    <section
      id="location"
      className="relative bg-charcoal border-t border-white/5 lg:h-screen lg:min-h-[640px] overflow-hidden"
    >

      {/* ── Full-bleed background image ─────────────────── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=2069&auto=format&fit=crop"
          alt="Pizzeria Atmosphere"
          className="w-full h-full object-cover object-right brightness-[0.55]"
        />

        {/* Diagonal bleed: charcoal floods in from the left at an angle */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(106deg, #050505 36%, rgba(5,5,5,0.92) 50%, rgba(5,5,5,0.55) 65%, rgba(5,5,5,0.15) 80%, transparent 92%)',
          }}
        />

        {/* Bottom vignette — grounds the section */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        {/* Top vignette — blends with navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* ── Decorative gold boundary line ───────────────── */}
      <div
        className="absolute top-0 bottom-0 left-1/2 w-px hidden lg:block z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 5%, rgba(243,205,105,0.12) 25%, rgba(243,205,105,0.22) 50%, rgba(243,205,105,0.12) 75%, transparent 95%)',
        }}
      />

      {/* ── Content grid ────────────────────────────────── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full min-h-[600px]">

        {/* Left Panel — Info */}
        <div className="flex flex-col justify-center p-8 xs:p-10 md:p-16 lg:p-20">

          <span className="text-gold/60 tracking-[0.3em] text-[9px] md:text-xs uppercase font-bold mb-4 block">
            {t.findUs}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 md:mb-8 leading-[1.1]">
            {t.hkCentral}
          </h2>

          <div className="space-y-8 md:space-y-10">

            {/* Location */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3 text-white group-hover:text-gold transition-colors">
                <MapPin size={16} className="shrink-0" />
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase">{t.locationLabel}</h3>
              </div>
              <div className="pl-7 space-y-3">
                <p className="text-gray-400 font-light leading-relaxed text-sm">{t.address}</p>
                <div className="flex items-center gap-3 text-white/50 text-xs font-light">
                  <TrainFront size={12} className="text-gold/70 shrink-0" />
                  <span>MTR Wan Chai Station – Exit D (5 min walk)</span>
                </div>
                <button
                  onClick={openGoogleMaps}
                  className="flex items-center gap-2 bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded-xl px-5 py-2.5 transition-all group/map w-fit"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover/map:text-gold transition-colors">
                    {lang !== 'en' ? '查看地圖' : 'View Map'}
                  </span>
                  <ExternalLink size={11} className="text-gold group-hover/map:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-3 text-white group-hover:text-gold transition-colors">
                <Clock size={16} className="shrink-0" />
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase">{t.hours}</h3>
              </div>
              <div className="pl-7 space-y-1 text-sm font-light text-gray-400">
                <p><span className="text-white/60 font-bold mr-2">{t.lunch}:</span>12:00 — 15:00</p>
                <p><span className="text-white/60 font-bold mr-2">{t.dinner}:</span>18:00 — 23:00</p>
              </div>
            </div>

          </div>

          <a
            href="https://www.sevenrooms.com/reservations/vincenzocapuanohk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 md:mt-14 group flex items-center gap-4 text-white hover:text-gold transition-colors w-fit"
          >
            <span className="font-sans font-bold text-xs md:text-sm tracking-widest uppercase border-b border-white/20 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
              {t.makeReservation}
            </span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        {/* Right Panel — Reservation card floats over the revealed image */}
        <div className="flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-sm lg:max-w-md bg-black/40 backdrop-blur-2xl border border-white/10 p-8 md:p-10 shadow-[0_32px_80px_rgba(0,0,0,0.6)] rounded-2xl">

            <div className="text-center mb-8">
              <CalendarDays size={28} className="text-gold mx-auto mb-5" strokeWidth={1} />
              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                {t.reserveExperience}
              </h3>
              <p className="text-gray-500 text-[10px] tracking-widest uppercase">{t.checkAvailability}</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.sevenrooms.com/reservations/vincenzocapuanohk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-4 border border-white/8 flex items-center justify-between group hover:border-gold/30 hover:bg-white/[0.07] transition-all rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <Users size={16} className="text-gold shrink-0" />
                  <div>
                    <p className="text-[9px] uppercase text-gray-500 font-bold tracking-widest">{t.guests}</p>
                    <p className="text-sm text-white font-mono">2 {t.people}</p>
                  </div>
                </div>
                <ArrowRight size={13} className="text-gray-600 group-hover:text-gold transition-colors" />
              </a>

              <a
                href="https://www.sevenrooms.com/reservations/vincenzocapuanohk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-4 border border-white/8 flex items-center justify-between group hover:border-gold/30 hover:bg-white/[0.07] transition-all rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <Clock size={16} className="text-gold shrink-0" />
                  <div>
                    <p className="text-[9px] uppercase text-gray-500 font-bold tracking-widest">{t.nextAvailable}</p>
                    <p className="text-sm text-white font-mono">{t.today}, 18:30</p>
                  </div>
                </div>
                <ArrowRight size={13} className="text-gray-600 group-hover:text-gold transition-colors" />
              </a>

              <a
                href="https://www.sevenrooms.com/reservations/vincenzocapuanohk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold hover:bg-white text-charcoal py-4 font-bold tracking-widest uppercase text-[10px] transition-all duration-300 shadow-xl shadow-gold/10 rounded-xl active:scale-[0.98] text-center block mt-2"
              >
                {t.checkAll}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
