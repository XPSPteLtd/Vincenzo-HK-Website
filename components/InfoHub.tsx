
import React, { useEffect, useState } from 'react';
import { MapPin, Users, ArrowRight, Calendar, ExternalLink, Train } from 'lucide-react';
import { Language, translations } from '../translations_new';

interface InfoHubProps {
  lang: Language;
}

export const InfoHub: React.FC<InfoHubProps> = ({ lang }) => {
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
      const progress = Math.max(0, Math.min(100, ((hour - 12) / 11) * 100));
      setProgressPercent(progress);
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <span className="text-gold/50 tracking-[0.3em] text-[10px] uppercase font-bold mb-3 block">
              {translations[lang].common.operations}
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white italic leading-none">
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
              {isOpen ? translations[lang].stats.activeStatus.split(':')[1]?.trim() : translations[lang].stats.closedStatus.split(':')[1]?.trim()}
            </span>
          </div>
        </div>

        {/* ── Hero Time Block ─────────────────────────────────── */}
        <div className="bg-white/[0.025] backdrop-blur-2xl border border-white/[0.07] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.55)]">

          {/* Giant ghost numerals behind — purely decorative depth */}
          <div
            className="relative px-8 sm:px-12 md:px-16 pt-12 md:pt-16 pb-10 md:pb-14 border-b border-white/5 overflow-hidden"
            aria-hidden="false"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <span className="text-[28vw] font-sans font-black text-white/[0.018] tracking-tighter whitespace-nowrap leading-none">
                12—23
              </span>
            </div>

            {/* Times row */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8">

              <div className="flex items-end gap-3 md:gap-8 flex-wrap">
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold/60 font-black mb-2 md:mb-4 tabular-nums">
                    Opens
                  </p>
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-sans font-black text-white tracking-tighter leading-none">
                    12:00
                  </div>
                </div>
                <div className="text-3xl md:text-6xl font-display text-gold/25 italic mb-1 md:mb-5 leading-none">
                  —
                </div>
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold/60 font-black mb-2 md:mb-4 tabular-nums">
                    Last Entry
                  </p>
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-sans font-black text-white tracking-tighter leading-none">
                    23:00
                  </div>
                </div>
              </div>

              {/* Live clock + meta */}
              <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
                <div className="text-right">
                  <p className="text-[8px] uppercase tracking-[0.4em] text-white/25 font-bold mb-1">
                    Now in HK
                  </p>
                  <div className="font-mono text-3xl md:text-4xl text-white/50 font-bold tabular-nums leading-none">
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

            {/* ── Service Day Progress Bar ──────────────────── */}
            <div className="relative mt-10 md:mt-12">
              <div className="relative h-px bg-white/[0.06] w-full rounded-full overflow-visible">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/30 via-gold/60 to-gold rounded-full transition-all duration-[1500ms] ease-out"
                  style={{ width: isOpen ? `${progressPercent}%` : '0%' }}
                />
              </div>

              {/* Glowing dot at current position */}
              {isOpen && (
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 transition-all duration-[1500ms] ease-out"
                  style={{ left: `${progressPercent}%` }}
                >
                  <div className="w-full h-full rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.9)] animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gold/30 scale-[2.5] animate-ping" />
                </div>
              )}

              <div className="flex justify-between mt-3">
                <span className="text-[8px] text-white/20 font-mono tracking-widest">12:00</span>
                {isOpen && (
                  <span
                    className="text-[8px] text-gold/50 font-mono tracking-widest transition-all duration-[1500ms] ease-out"
                    style={{ marginLeft: `calc(${progressPercent}% - 1.5rem)` }}
                  >
                    now
                  </span>
                )}
                <span className="text-[8px] text-white/20 font-mono tracking-widest">23:00</span>
              </div>
            </div>
          </div>

          {/* ── Three Info Cells ───────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">

            {/* Cell 1 — Walk-in Policy */}
            <div className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500">
              <div className="flex items-center gap-2.5 mb-5">
                <Users size={14} className="text-gold/50 shrink-0" />
                <span className="text-[8px] uppercase tracking-[0.4em] text-gold/50 font-bold">
                  {infoT.operations.walkInTitle}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {infoT.operations.walkInDesc}
              </p>
            </div>
          )}

            {/* Cell 2 — Location */}
            <div className="p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500">
              <div className="flex items-center gap-2.5 mb-5">
                <MapPin size={14} className="text-gold/50 shrink-0" />
                <span className="text-[8px] uppercase tracking-[0.4em] text-gold/50 font-bold">
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
                  <Calendar size={14} className="text-gold/50 shrink-0" />
                  <span className="text-[8px] uppercase tracking-[0.4em] text-gold/50 font-bold">
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

              <div className="bg-surface border border-white/10 p-6 md:p-10 lg:p-12 rounded-3xl flex flex-col h-full shadow-2xl">
                <div className="mb-8 md:mb-10">
                  <h3 className="text-2xl md:text-3xl font-display text-white uppercase mb-3 md:mb-4 leading-none tracking-tight">Host Your<br/><span className="text-gold">Masterpiece</span></h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md">
                    From corporate galas to intimate celebrations, Vincenzo Capuano provides a high-energy, sophisticated atmosphere for Neapolitan excellence in Hong Kong.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6 flex-1">
                  <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-gold/30 transition-all">
                    <div className="flex items-center gap-4 md:gap-5 mb-2 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Direct Inquiries</p>
                        <a href="mailto:events@vincenzocapuano.hk" className="text-sm md:text-lg text-white font-mono hover:text-gold transition-colors block truncate">events@vincenzocapuano.hk</a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-gold/30 transition-all">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
                        <Download className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Event Planning</p>
                        <p className="text-sm md:text-lg text-white font-serif italic">Event Brochure PDF</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <button 
                    onClick={() => setShowEventDeepDive(true)}
                    className="w-full py-4 md:py-5 bg-gold text-charcoal text-[10px] font-bold uppercase tracking-mega hover:bg-white transition-all shadow-xl shadow-gold/5 active:scale-[0.98]"
                  >
                    View Packages
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seasonal' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-surface border border-red/20 p-6 md:p-8 rounded-3xl flex flex-col group hover:border-red transition-colors">
                <div className="flex justify-between items-start mb-5 md:mb-6">
                   <div className="bg-red/10 text-red px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Dec 1st</div>
                   <Gift className="text-red animate-bounce w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">Natale a Napoli</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 md:mb-6 italic">The Christmas Menu</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">A 5-course feast featuring fried cod, stuffed escarole pizza, and traditional Neapolitan Struffoli.</p>
                <button className="mt-auto flex items-center gap-2 text-[10px] text-gold font-bold uppercase tracking-widest hover:text-white transition-colors">
                  Preview <ChevronRight size={14} />
                </button>
              </div>

              <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col group hover:border-gold transition-colors">
                <div className="flex justify-between items-start mb-5 md:mb-6">
                   <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Oct 24</div>
                   <Award className="text-gold w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">Masterclass</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 md:mb-6 italic">12 Seats Remaining</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">Learn the secrets of the Nuvola Super dough directly from the World Champion himself.</p>
                <div className="mt-auto flex items-center justify-between">
                   <span className="text-red text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Sold Out</span>
                   <button className="text-[9px] text-gray-500 underline uppercase tracking-widest hover:text-white transition-colors">Waitlist</button>
                </div>
              </div>

              <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-3xl flex flex-col group hover:border-white transition-colors">
                <div className="flex justify-between items-start mb-5 md:mb-6">
                   <div className="bg-white/10 text-white px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Latest News</div>
                   <Newspaper className="text-white/50 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">Asia-Pacific Shortlist</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8">Vincenzo Capuano HK has been shortlisted for the 2025 Top 50 Pizza Awards in the region.</p>
                <div className="mt-auto border-t border-white/10 pt-4 md:pt-6">
                  <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase tracking-widest">
                    <MapPin size={10} />
                    <span>Hong Kong Central</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'heritage' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-10">
                <div className="text-center md:text-left">
                   <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white italic mb-4 md:mb-6">The Legacy of 081</h3>
                   <p className="text-gray-400 leading-relaxed text-xs md:text-base lg:text-lg">
                     Vincenzo Capuano represents the third generation of pizzaioli. The number "081" is the telephone area code for Naples, a symbol he carries as a badge of honor.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-6 md:gap-10 border-l border-gold/30 pl-6 md:pl-10">
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">1922</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">Family Tradition</p>
                   </div>
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">2019</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">World Champion</p>
                   </div>
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">2022</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">Icon Status</p>
                   </div>
                   <div>
                      <h4 className="text-gold text-xl md:text-3xl font-display uppercase leading-none">2025</h4>
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest mt-1 md:mt-2">Hong Kong</p>
                   </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-3xl aspect-square max-w-sm mx-auto w-full md:max-w-none shadow-2xl">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2070" 
                  alt="Vincenzo Heritage" 
                  fallbackPrompt="Professional portrait of an Italian chef in a modern kitchen, cinematic lighting, black and white"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-all"></div>
              </div>
            </div>
          )}
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

      {/* Deep Dive Sub-page Overlay - Refined for Tablet */}
      {showEventDeepDive && (
        <div className="fixed inset-0 z-[180] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-charcoal/98 backdrop-blur-2xl" onClick={() => setShowEventDeepDive(false)}></div>
          <div className="relative bg-surface w-full max-w-5xl h-full md:h-auto md:max-h-[85vh] shadow-2xl flex flex-col md:flex-row overflow-hidden md:rounded-3xl border border-white/10">
            
            {/* Mobile/Tablet Header Bar */}
            <div className="md:hidden flex justify-between items-center px-6 py-4 bg-charcoal border-b border-white/10 shrink-0">
               <span className="text-gold text-[10px] font-bold uppercase tracking-widest">Event Packages</span>
               <button onClick={() => setShowEventDeepDive(false)} className="p-1"><X size={24} className="text-white" /></button>
            </div>

            <div className="flex-1 flex flex-col p-8 md:p-12 lg:p-16 overflow-y-auto relative">
              <button 
                onClick={() => setShowEventDeepDive(false)} 
                className="hidden md:block absolute top-8 right-8 p-3 bg-white/5 hover:bg-gold hover:text-charcoal rounded-full transition-all"
              >
                <X size={20} />
              </button>

              <div className="max-w-2xl mx-auto md:mx-0">
                <h2 className="text-3xl md:text-5xl font-display text-white uppercase mb-8 md:mb-12">Hosting Details</h2>

                <div className="space-y-10 md:space-y-16">
                  <div>
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                       <h3 className="text-lg md:text-xl font-serif text-white italic">Package "Gold Scissors"</h3>
                       <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm lg:text-base mb-6 md:mb-8 leading-relaxed">
                      Our signature sharing experience. Includes 3 types of montanare starters, unlimited selection of contemporary pizzas, and our Amaretto Tiramisu.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {['3-Course Menu', 'Wine/Beer Pairings', 'Custom Printed Menus', 'Event Host', 'Private Chef', 'AV Support'].map(feat => (
                        <li key={feat} className="flex items-center gap-2 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                          <ChevronRight size={10} className="text-gold" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gold/5 border border-gold/20 p-6 md:p-10 rounded-2xl text-center md:text-left">
                    <h4 className="text-white font-serif text-lg md:text-xl mb-4 italic">Tailored for your excellence</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                       <a href="mailto:events@vincenzocapuano.hk" className="flex-1 bg-gold text-charcoal px-6 py-4 font-bold text-[10px] uppercase tracking-mega text-center hover:bg-white transition-all">Request Proposal</a>
                       <button className="flex-1 border border-white/20 text-white px-6 py-4 font-bold text-[10px] uppercase tracking-mega hover:bg-white/5 transition-all">Download Brochure</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
