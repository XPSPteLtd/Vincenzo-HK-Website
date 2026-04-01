
import React, { useEffect, useState } from 'react';
import { MapPin, Users, ArrowRight, Calendar, ExternalLink, Train } from 'lucide-react';
import { Language, translations } from '../translations';

interface InfoHubProps {
  lang: Language;
  onBookClick?: () => void;
}

const TENTATIVE_OPENING = new Date('2026-04-29T00:00:00+08:00');

export const InfoHub: React.FC<InfoHubProps> = ({ lang, onBookClick }) => {
  const t = translations[lang].location;
  const infoT = translations[lang].infoHub;

  const [currentTime, setCurrentTime] = useState(new Date());
  const [daysUntilOpening, setDaysUntilOpening] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setCurrentTime(now);
      const diff = Math.ceil((TENTATIVE_OPENING.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      setDaysUntilOpening(Math.max(0, diff));
    };
    tick();
    const interval = setInterval(tick, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-HK', { hour: '2-digit', minute: '2-digit', hour12: false });

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/mWac4KcwCQSUUibU9', '_blank');
  };

  return (
    <section id="info-hub" className="py-28 md:py-40 bg-charcoal border-t border-white/5 relative overflow-hidden">

      {/* Ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gold/[0.04] blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 md:mb-20">
          <div>
            <span className="text-gold/60 tracking-[0.3em] text-[11px] uppercase font-bold mb-3 block">
              {translations[lang].common.operations}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]">
              {infoT.title}
            </h2>
          </div>

          {/* Opening Soon pill */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto px-4 py-2.5 rounded-full border backdrop-blur-md bg-gold/[0.07] border-gold/25">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(243,205,105,0.6)] shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold">
              {lang !== 'en' ? '即將開幕' : 'Opening Soon'}
            </span>
          </div>
        </div>

        {/* ── Main Card ───────────────────────────────────────── */}
        <div className="bg-white/[0.025] backdrop-blur-2xl border border-white/[0.07] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.55)]">

          {/* ── Hours block ──────────────────────────────────── */}
          <div className="relative px-4 sm:px-10 md:px-16 pt-10 md:pt-16 pb-8 md:pb-14 border-b border-white/5">

            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

              {/* Planned hours card */}
              <div className="flex-1 relative rounded-2xl border px-4 sm:px-8 py-6 sm:py-7 bg-white/[0.02] border-white/[0.06]">

                <div className="flex items-center justify-between gap-3 mb-5">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-gold/65 font-bold">
                    {lang !== 'en' ? '計劃營業時間' : 'Planned Service Hours'}
                  </p>
                  <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-1 shrink-0">
                    <span className="text-xs uppercase tracking-widest text-white/55 font-bold">
                      {lang !== 'en' ? '暫定' : 'Tentative'}
                    </span>
                  </div>
                </div>

                {/* Hours display — dimmed to signal not-yet-active */}
                <div className="flex items-baseline gap-2 sm:gap-4">
                  <span className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/50 font-bold tracking-tight">12:00</span>
                  <span className="text-white/15 font-light text-xl sm:text-2xl">—</span>
                  <span className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/50 font-bold tracking-tight">23:00</span>
                </div>

                {/* Tentative opening date */}
                <div className="mt-6 pt-5 border-t border-white/[0.05]">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/55 font-bold mb-2">
                    {lang !== 'en' ? '暫定開幕日期' : 'Tentative Opening Date'}
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-gold font-bold">
                      {lang !== 'en' ? '2026年4月29日' : '29 April 2026'}
                    </span>
                    <span className="text-[10px] text-white/35 font-light">
                      {lang !== 'en' ? '· 日期或有更改' : '· subject to change'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side: clock + countdown */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:gap-5 shrink-0 lg:pt-1">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/55 font-bold mb-1">
                    {lang !== 'en' ? '香港現在' : 'Now in HK'}
                  </p>
                  <div className="font-mono text-2xl md:text-3xl text-white/50 font-bold tabular-nums leading-none">
                    {formatTime(currentTime)}
                  </div>
                </div>
                <div className="bg-gold/10 border border-gold/30 px-4 py-2.5 rounded-lg text-center min-w-[80px]">
                  <p className="text-[10px] uppercase tracking-widest text-gold/65 font-bold mb-0.5">
                    {lang !== 'en' ? '倒數' : 'Opens in'}
                  </p>
                  <p className="font-mono text-2xl text-gold font-bold leading-none">
                    {daysUntilOpening}<span className="text-sm font-normal text-gold/60 ml-0.5">d</span>
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
              <p className="text-white/70 text-sm leading-relaxed font-light">
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
              <div className="mb-2">
                <p className="text-white/70 text-sm font-light leading-snug">
                  {lang === 'hk' ? '利東街' : 'Lee Tung Avenue'}
                </p>
                <p className="text-white/70 text-sm font-light leading-snug">
                  {lang === 'hk' ? '地下 G01, 04, 05 號舖' : 'GF Unit 01 04 05'}
                </p>
                <p className="text-white/50 text-xs font-light leading-snug mt-1">
                  {lang === 'hk' ? '皇后大道東200號 · 灣仔, 香港' : '200 Queens Road East · Wan Chai, HK'}
                </p>
              </div>
              <div className="flex items-center gap-2 text-white/45 text-xs font-light mb-5">
                <Train size={11} className="text-gold/50 shrink-0" />
                <span>{t.mtrInfo}</span>
              </div>
              <button
                onClick={openGoogleMaps}
                className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gold/60 hover:text-gold font-bold transition-colors group/dir"
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
                <p className="text-white/65 text-sm leading-relaxed font-light mb-4">
                  {t.reservationDesc}
                </p>
                <div className="flex items-center gap-2 mb-8 px-3 py-2.5 rounded-lg bg-gold/[0.06] border border-gold/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold/90">
                    {lang !== 'en' ? '立即訂座 · 5月1日起接受預約' : 'Book Now · Reservations available from 1 May 2026'}
                  </p>
                </div>
              </div>
              <a
                href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta flex items-center justify-between w-full bg-gold hover:bg-white text-charcoal py-4 px-6 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-gold/10 active:scale-[0.98]"
              >
                {t.makeReservation}
                <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Cinematic Map Strip ─────────────────────────────── */}
        <div className="mt-5 rounded-[2rem] overflow-hidden border border-white/[0.06] relative group/map aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/5]">

          <iframe
            title="Vincenzo Capuano HK Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.986!2d114.170!3d22.276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005d0c0c0c0d%3A0x0!2sLee+Tung+Avenue!5e0!3m2!1sen!2shk!4v1711874288000!5m2!1sen!2shk"
            className="absolute inset-0 w-full h-full grayscale opacity-20 group-hover/map:opacity-60 group-hover/map:grayscale-0 scale-110 group-hover/map:scale-100 transition-all duration-[1200ms] ease-out pointer-events-none group-hover/map:pointer-events-auto"
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
            <p className="text-[10px] uppercase tracking-[0.45em] text-gold/50 font-bold mb-1">
              Wan Chai · Hong Kong
            </p>
            <p className="text-white/55 text-xs font-light leading-snug">
              {lang === 'hk' ? '利東街 · 地下 G01, 04, 05' : 'Lee Tung Avenue · GF Unit 01 04 05'}
            </p>
          </div>

          {/* Bottom-right directions button — visible on hover */}
          <div className="absolute bottom-5 right-7 opacity-0 group-hover/map:opacity-100 transition-opacity duration-500">
            <button
              onClick={openGoogleMaps}
              className="flex items-center gap-2 bg-gold text-charcoal px-4 py-2 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-white transition-colors shadow-xl"
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
