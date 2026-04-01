
import React, { useEffect, useState } from 'react';
import { MapPin, Users, ArrowRight, Calendar, ExternalLink, Train } from 'lucide-react';
import { Language, translations } from '../translations';

interface InfoHubProps {
  lang: Language;
  onBookClick?: () => void;
}

export const InfoHub: React.FC<InfoHubProps> = ({ lang, onBookClick }) => {
  const t = translations[lang].location;
  const infoT = translations[lang].infoHub;

  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentTime(now);
      const hour = now.getHours() + now.getMinutes() / 60;
      setIsOpen(hour >= 12 && hour < 23);
      setProgressPercent(Math.max(0, Math.min(100, ((hour - 12) / 11) * 100)));
    };
    tick();
    const interval = setInterval(tick, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-HK', { hour: '2-digit', minute: '2-digit', hour12: false });

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/mWac4KcwCQSUUibU9', '_blank');
  };

  return (
    <section id="info-hub" className="py-28 md:py-40 bg-charcoal border-t border-white/5 relative overflow-hidden">

      {/* Ambient radial glow — pulses when kitchen is open */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-[3000ms] ${isOpen ? 'opacity-100' : 'opacity-20'}`}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gold/[0.04] blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <span className="text-gold/50 tracking-[0.3em] text-[10px] uppercase font-bold mb-3 block">
              {translations[lang].common.operations}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]">
              {infoT.title}
            </h2>
          </div>

          {/* Live status pill */}
          <div
            className={`flex items-center gap-2.5 self-start sm:self-auto px-4 py-2.5 rounded-full border backdrop-blur-md transition-colors duration-700 ${
              isOpen
                ? 'bg-green-500/10 border-green-500/25'
                : 'bg-white/[0.03] border-white/10'
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-700 ${
                isOpen
                  ? 'bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.7)]'
                  : 'bg-gray-600'
              }`}
            />
            <span
              className={`text-[9px] font-bold uppercase tracking-widest transition-colors duration-700 ${
                isOpen ? 'text-green-400' : 'text-gray-500'
              }`}
            >
              {isOpen
                ? translations[lang].stats.activeStatus.split(':')[1]?.trim()
                : translations[lang].stats.closedStatus.split(':')[1]?.trim()}
            </span>
          </div>
        </div>

        {/* ── Main Card ───────────────────────────────────────── */}
        <div className="bg-white/[0.025] backdrop-blur-2xl border border-white/[0.07] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.55)]">

          {/* ── Hours block ──────────────────────────────────── */}
          <div className="relative px-8 sm:px-12 md:px-16 pt-12 md:pt-16 pb-10 md:pb-14 border-b border-white/5">

            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

              {/* Single session card */}
              <div className={`flex-1 relative rounded-2xl border px-8 py-7 transition-all duration-700 ${
                isOpen ? 'bg-gold/[0.07] border-gold/30 shadow-[0_0_40px_rgba(197,160,89,0.08)]' : 'bg-white/[0.02] border-white/[0.06]'
              }`}>
                {isOpen && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] uppercase tracking-widest text-green-400 font-bold">
                      {lang !== 'en' ? '現在營業' : 'Open Now'}
                    </span>
                  </div>
                )}
                <p className="text-[9px] uppercase tracking-[0.4em] text-gold/50 font-bold mb-5">
                  {lang !== 'en' ? '每天營業時間' : 'Daily Service Hours'}
                </p>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">12:00</span>
                  <span className="text-white/20 font-light text-2xl">—</span>
                  <span className="font-mono text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">23:00</span>
                </div>
                {/* Progress bar */}
                <div className="mt-6 h-px bg-white/[0.06] rounded-full overflow-visible relative">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/30 via-gold/60 to-gold rounded-full transition-all duration-[1500ms] ease-out"
                    style={{ width: isOpen ? `${progressPercent}%` : '0%' }}
                  />
                  {isOpen && (
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 transition-all duration-[1500ms] ease-out"
                      style={{ left: `${progressPercent}%` }}
                    >
                      <div className="w-full h-full rounded-full bg-gold shadow-[0_0_10px_rgba(197,160,89,0.8)] animate-pulse" />
                    </div>
                  )}
                </div>
                <div className="flex justify-between mt-2.5">
                  <span className="text-[8px] text-white/20 font-mono tracking-widest">12:00</span>
                  <span className="text-[8px] text-white/20 font-mono tracking-widest">23:00</span>
                </div>
              </div>

              {/* Right side: clock + days badge */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:gap-5 shrink-0 lg:pt-1">
                <div className="text-right">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-white/25 font-bold mb-1">
                    {lang !== 'en' ? '香港現在' : 'Now in HK'}
                  </p>
                  <div className="font-mono text-2xl md:text-3xl text-white/50 font-bold tabular-nums leading-none">
                    {formatTime(currentTime)}
                  </div>
                </div>
                <div className="bg-gold/10 border border-gold/30 px-4 py-1.5 rounded-lg">
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-gold font-black whitespace-nowrap">
                    {translations[lang].common.sevenDays}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Info cells ──────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">

            {/* Cell 1 — Walk-in Policy */}
            <div className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500">
              <div className="flex items-center gap-2.5 mb-5">
                <Users size={15} className="text-gold/70 shrink-0" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gold/80 font-bold">
                  {infoT.operations.walkInTitle}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {infoT.operations.walkInDesc}
              </p>
            </div>

            {/* Cell 2 — Location */}
            <div className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500">
              <div className="flex items-center gap-2.5 mb-5">
                <MapPin size={15} className="text-gold/70 shrink-0" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gold/80 font-bold">
                  {t.locationLabel}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-light mb-2">
                {t.address}
              </p>
              <div className="flex items-center gap-2 text-white/30 text-[11px] font-light mb-5">
                <Train size={11} className="text-gold/40 shrink-0" />
                <span>{t.mtrInfo}</span>
              </div>
              <button
                onClick={openGoogleMaps}
                className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gold/50 hover:text-gold font-bold transition-colors group/dir"
              >
                {t.viewMap}
                <ExternalLink size={10} className="group-hover/dir:scale-110 transition-transform" />
              </button>
            </div>

            {/* Cell 3 — Reserve CTA */}
            <div className="p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <Calendar size={15} className="text-gold/70 shrink-0" />
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gold/80 font-bold">
                    {t.hours}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed font-light mb-8">
                  {t.reservationDesc}
                </p>
              </div>
              <a
                href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta flex items-center justify-between w-full bg-gold hover:bg-white text-charcoal py-4 px-6 font-bold text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-gold/10 active:scale-[0.98]"
              >
                {t.makeReservation}
                <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Cinematic Map Strip ─────────────────────────────── */}
        <div className="mt-5 rounded-[2rem] overflow-hidden border border-white/[0.06] relative group/map" style={{ aspectRatio: '21/5' }}>

          <iframe
            title="Vincenzo Capuano HK Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.986!2d114.170!3d22.276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005d0c0c0c0d%3A0x0!2sLee+Tung+Avenue!5e0!3m2!1sen!2shk!4v1711874288000!5m2!1sen!2shk"
            className="w-full h-full grayscale opacity-20 group-hover/map:opacity-60 group-hover/map:grayscale-0 scale-110 group-hover/map:scale-100 transition-all duration-[1200ms] ease-out pointer-events-none group-hover/map:pointer-events-auto"
            loading="lazy"
            allowFullScreen
          />

          {/* Vignette overlays */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/80" />
          </div>

          {/* Bottom-left address tag */}
          <div className="absolute bottom-5 left-7 pointer-events-none">
            <p className="text-[8px] uppercase tracking-[0.45em] text-gold/35 font-bold mb-1">
              Wan Chai · Hong Kong
            </p>
            <p className="text-white/25 text-[10px] sm:text-xs font-light max-w-[200px] leading-snug">
              {translations[lang].common.addressShort}
            </p>
          </div>

          {/* Bottom-right directions button — visible on hover */}
          <div className="absolute bottom-5 right-7 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500">
            <button
              onClick={openGoogleMaps}
              className="flex items-center gap-2 bg-gold text-charcoal px-4 py-2 rounded-xl font-bold text-[9px] uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
            >
              {t.viewMap}
              <ExternalLink size={10} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
