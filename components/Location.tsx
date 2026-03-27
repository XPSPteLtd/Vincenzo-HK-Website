import React from 'react';
import { MapPin, Clock, Phone, ArrowRight, CalendarDays, Users, ExternalLink, Train } from 'lucide-react';
import { Language, translations } from '../translations_new';

interface LocationProps {
  onBookClick: () => void;
  lang: Language;
}

export const Location: React.FC<LocationProps> = ({ onBookClick, lang }) => {
  const t = translations[lang].location;

  const openGoogleMaps = () => {
    // Using the specific shared link for exact pinning
    const url = `https://maps.app.goo.gl/mWac4KcwCQSUUibU9`;
    window.open(url, '_blank');
  };

  return (
    <section id="location" className="bg-charcoal border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-[600px]">
        
        <div className="flex flex-col justify-center p-6 xs:p-8 md:p-12 lg:p-24 border-b md:border-b-0 md:border-r border-white/5">
          <span className="text-gold tracking-mega text-[9px] xs:text-[10px] md:text-xs uppercase font-bold mb-4 xs:mb-6 block">{t.findUs}</span>
          <h2 className="font-display text-3xl xs:text-4xl md:text-5xl text-white mb-8 md:mb-12 capitalize leading-none">{t.hkCentral}</h2>
          
          <div className="space-y-8 md:space-y-12">
            <div className="group">
              <div className="flex items-center gap-4 mb-2 text-white group-hover:text-gold transition-colors">
                 <MapPin size={18} className="md:size-5" />
                 <h3 className="text-xs font-bold tracking-widest uppercase">{t.locationLabel}</h3>
              </div>
              <div className="pl-8 md:pl-9 space-y-4">
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {t.address}
                </p>
                <button 
                  onClick={openGoogleMaps}
                  className="flex items-center gap-2 bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded-xl px-5 py-2.5 transition-all group/map w-fit shadow-lg shadow-black/20"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover/map:text-gold transition-colors">
                    {t.viewMap}
                  </span>
                  <ExternalLink size={12} className="text-gold group-hover/map:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="group">
               <div className="flex items-center gap-4 mb-2 text-white group-hover:text-gold transition-colors">
                 <Clock size={18} className="md:size-5" />
                 <h3 className="text-xs font-bold tracking-widest uppercase">{t.hours}</h3>
              </div>
              <div className="text-gray-400 font-light pl-8 md:pl-9 leading-relaxed space-y-2 text-sm">
                <p>
                  <span className="text-white/60 font-bold mr-2">{t.lunch}:</span> 12:00 – 23:00
                </p>
                <p>
                  <span className="text-white/60 font-bold mr-2 uppercase tracking-widest text-[10px]">{t.dinner}</span>
                </p>
              </div>
            </div>

            <div className="group">
               <div className="flex items-center gap-4 mb-2 text-white group-hover:text-gold transition-colors">
                 <Train size={18} className="md:size-5" />
                 <h3 className="text-xs font-bold tracking-widest uppercase">{t.transit || 'Transit'}</h3>
              </div>
              <p className="text-gray-400 font-light pl-8 md:pl-9 leading-relaxed text-sm">
                MTR Wan Chai Station – Exit D<br />
                <span className="text-white/50 text-[10px] uppercase">5 Minutes Walk</span>
              </p>
            </div>

            <div className="group">
               <div className="flex items-center gap-4 mb-2 text-white group-hover:text-gold transition-colors">
                 <Phone size={18} className="md:size-5" />
                 <h3 className="text-xs font-bold tracking-widest uppercase">{t.contact}</h3>
              </div>
              <p className="text-gray-400 font-light pl-8 md:pl-9 leading-relaxed text-sm">
                <a href="tel:+85212345678" className="hover:text-gold transition-colors">+852 1234 5678</a>
              </p>
            </div>
          </div>

          <button 
            onClick={onBookClick}
            className="mt-12 md:mt-16 group flex items-center gap-4 text-white hover:text-gold transition-colors w-fit"
          >
            <span className="font-display text-base md:text-lg tracking-widest capitalize border-b border-white/20 pb-1 group-hover:border-gold">{t.makeReservation}</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        <div className="relative min-h-[500px] md:h-auto flex items-center justify-center p-6 md:p-8 lg:p-12 overflow-hidden shadow-inner">
             <div className="absolute inset-0 z-0">
               <iframe 
                 src="https://maps.google.com/maps?q=Vincenzo%20Capuano%20Hong%20Kong,%20Lee%20Tung%20Avenue&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                 className="w-full h-full border-0 grayscale-[0.3] contrast-125 hover:grayscale-0 transition-all duration-1000"
                 allowFullScreen
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Vincenzo Capuano Hong Kong Location"
               ></iframe>
             </div>
             
             <div className="relative z-10 w-full max-w-sm lg:max-w-md bg-charcoal/90 backdrop-blur-xl border border-white/10 p-8 md:p-10 lg:p-12 shadow-2xl rounded-2xl">
                <div className="text-center mb-8 md:mb-10">
                  <CalendarDays size={32} className="text-gold mx-auto mb-6 md:size-10" strokeWidth={1} />
                  <h3 className="font-serif capitalize text-2xl lg:text-3xl text-white mb-2 italic">{t.reserveExperience}</h3>
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-2">{t.checkAvailability}</p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="bg-white/5 p-4 md:p-5 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-gold/30 transition-all rounded-xl" onClick={onBookClick}>
                    <div className="flex items-center gap-4">
                      <Users size={18} className="text-gold" />
                      <div>
                        <p className="text-[9px] md:text-[10px] uppercase text-gray-500 font-bold tracking-widest">{t.guests}</p>
                        <p className="text-sm text-white font-mono">2 {t.people}</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-gold transition-colors" />
                  </div>

                  <div className="bg-white/5 p-4 md:p-5 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-gold/30 transition-all rounded-xl" onClick={onBookClick}>
                    <div className="flex items-center gap-4">
                      <Clock size={18} className="text-gold" />
                      <div>
                        <p className="text-[9px] md:text-[10px] uppercase text-gray-500 font-bold tracking-widest">{t.nextAvailable}</p>
                        <p className="text-sm text-white font-mono">{t.today}, 18:30</p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-gold transition-colors" />
                  </div>

                  <button 
                    onClick={onBookClick}
                    className="w-full bg-gold text-charcoal py-4 md:py-5 font-bold tracking-mega uppercase text-[10px] md:text-xs hover:bg-white transition-all shadow-xl shadow-gold/5 rounded-lg active:scale-[0.98]"
                  >
                    {t.checkAll}
                  </button>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};
