
import React, { useEffect, useState } from 'react';
import { MapPin, Users, ArrowRight, Calendar, ExternalLink, Train, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface InfoHubProps {
  lang: Language;
  onBookClick?: () => void;
}

export const InfoHub: React.FC<InfoHubProps> = ({ lang, onBookClick }) => {
  const t = translations[lang].location;
  const infoT = translations[lang].infoHub;

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tick = () => setCurrentTime(new Date());
    tick();
    const interval = setInterval(tick, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-HK', { hour: '2-digit', minute: '2-digit', hour12: false });

  type RestaurantStatus = 'closed' | 'warming_up' | 'opening_soon' | 'now_open' | 'kitchen_closing_soon' | 'kitchen_closed' | 'closing_soon';

  const getRestaurantStatus = (date: Date): RestaurantStatus => {
    const hkMin = (date.getUTCHours() * 60 + date.getUTCMinutes() + 8 * 60) % (24 * 60);
    // Overnight, or afternoon break 15:00–17:50
    if (hkMin < 700 || (hkMin >= 900 && hkMin < 1070) || hkMin >= 1380) return 'closed';
    // Lunch warm-up / opening (11:40–12:00)
    if (hkMin < 710) return 'warming_up';
    if (hkMin < 720) return 'opening_soon';
    // Lunch service 12:00–14:15, then last-order window 14:15–14:30, kitchen closed 14:30–15:00
    if (hkMin < 855) return 'now_open';
    if (hkMin < 870) return 'kitchen_closing_soon';
    if (hkMin < 900) return 'kitchen_closed';
    // Dinner opening soon 17:50–18:00
    if (hkMin < 1080) return 'opening_soon';
    // Dinner service 18:00–21:30, last-order window 21:30–21:45, kitchen closed 21:45–22:45
    if (hkMin < 1290) return 'now_open';
    if (hkMin < 1305) return 'kitchen_closing_soon';
    if (hkMin < 1365) return 'kitchen_closed';
    return 'closing_soon';
  };

  const statusKey: Record<RestaurantStatus, keyof typeof t> = {
    closed: 'statusClosed',
    warming_up: 'statusWarmingUp',
    opening_soon: 'statusOpeningSoon',
    now_open: 'statusNowOpen',
    kitchen_closing_soon: 'statusKitchenClosingSoon',
    kitchen_closed: 'statusKitchenClosed',
    closing_soon: 'statusClosingSoon',
  };

  const restaurantStatus = getRestaurantStatus(currentTime);
  const isOpenState = restaurantStatus === 'now_open' || restaurantStatus === 'opening_soon' || restaurantStatus === 'warming_up';
  const isWarningState = restaurantStatus === 'kitchen_closing_soon' || restaurantStatus === 'closing_soon';
  const isClosedState = restaurantStatus === 'closed' || restaurantStatus === 'kitchen_closed';

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

          {/* Status pill */}
          <div className={`flex items-center gap-2.5 self-start sm:self-auto px-4 py-2.5 rounded-full border backdrop-blur-md ${isClosedState ? 'bg-white/[0.04] border-white/15' : isWarningState ? 'bg-amber-500/[0.08] border-amber-400/25' : 'bg-gold/[0.07] border-gold/25'}`}>
            <CheckCircle size={14} className={`shrink-0 ${isClosedState ? 'text-white/40' : isWarningState ? 'text-amber-400' : 'text-gold'}`} />
            <span className={`text-[11px] font-bold uppercase tracking-widest ${isClosedState ? 'text-white/40' : isWarningState ? 'text-amber-400' : 'text-gold'}`}>
              {t[statusKey[restaurantStatus]]}
            </span>
          </div>
        </div>

        {/* ── Main Card ───────────────────────────────────────── */}
        <div className="bg-white/[0.025] backdrop-blur-2xl border border-white/[0.07] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.55)]">

          {/* ── Hours block ──────────────────────────────────── */}
          <div className="relative px-4 sm:px-10 md:px-16 pt-10 md:pt-16 pb-8 md:pb-14 border-b border-white/5">

            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">

              {/* Service hours card */}
              <div className="flex-1 relative rounded-2xl border px-4 sm:px-8 py-6 sm:py-7 bg-white/[0.02] border-white/[0.06]">

                <div className="flex items-center justify-between gap-3 mb-5">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-gold/65 font-bold">
                    {t.plannedHours}
                  </p>
                  <div className="flex items-center gap-1.5 bg-gold/[0.08] border border-gold/20 rounded-lg px-3 py-1 shrink-0">
                    <span className="text-xs uppercase tracking-widest text-gold/70 font-bold">
                      {t.tentative}
                    </span>
                  </div>
                </div>

                {/* Hours display */}
                <div className="space-y-3">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold w-14 shrink-0">{lang !== 'en' ? '午市' : 'Lunch'}</span>
                    <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight">12:00</span>
                    <span className="text-white/30 font-light text-lg sm:text-xl">—</span>
                    <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight">15:00</span>
                  </div>
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold w-14 shrink-0">{lang !== 'en' ? '晚市' : 'Dinner'}</span>
                    <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight">18:00</span>
                    <span className="text-white/30 font-light text-lg sm:text-xl">—</span>
                    <span className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight">23:00</span>
                  </div>
                </div>

                {/* Last order note */}
                <div className="mt-6 pt-5 border-t border-white/[0.05]">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/55 font-bold mb-2">
                    {lang !== 'en' ? '最後點餐' : 'Last Order'}
                  </p>
                  <div className="flex items-baseline gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] text-white/35">{lang !== 'en' ? '午市' : 'Lunch'}</span>
                      <span className="font-display text-xl text-gold/80 font-bold">14:30</span>
                    </div>
                    <span className="text-white/20">·</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[10px] text-white/35">{lang !== 'en' ? '晚市' : 'Dinner'}</span>
                      <span className="font-display text-xl text-gold font-bold">21:45</span>
                    </div>
                    <span className="text-[10px] text-white/35 font-light">
                      {lang !== 'en' ? '· 每週七天' : '· 7 days a week'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right side: clock */}
              <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4 lg:gap-5 shrink-0 lg:pt-1">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.4em] text-white/55 font-bold mb-1">
                    {t.nowInHK}
                  </p>
                  <div className="font-mono text-2xl md:text-3xl text-white font-bold tabular-nums leading-none">
                    {formatTime(currentTime)}
                  </div>
                </div>
                <div className="bg-gold/10 border border-gold/30 px-4 py-2.5 rounded-lg text-center min-w-[80px]">
                  <p className="text-[10px] uppercase tracking-widest text-gold/65 font-bold mb-0.5">
                    {lang !== 'en' ? '每週' : 'Open'}
                  </p>
                  <p className="font-mono text-2xl text-gold font-bold leading-none">
                    7<span className="text-sm font-normal text-gold/60 ml-0.5">{lang !== 'en' ? '天' : 'd'}</span>
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
                  {t.district}
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
                    {t.bookingNotice}
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
              {t.street} · {t.unit}
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
