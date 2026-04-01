import React, { useEffect, useState } from 'react';
import { X, Clock, MapPin, ChevronRight, Calendar, ExternalLink, Scissors } from 'lucide-react';
import { Language } from '../translations';

interface QuickHoursProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const TENTATIVE_OPENING = new Date('2026-04-29T00:00:00+08:00');

export const QuickHours: React.FC<QuickHoursProps> = ({ isOpen, onClose, lang }) => {
  const [daysUntilOpening, setDaysUntilOpening] = useState(0);
  useEffect(() => {
    const tick = () => {
      const diff = Math.ceil((TENTATIVE_OPENING.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      setDaysUntilOpening(Math.max(0, diff));
    };
    tick();
    const timer = setInterval(tick, 60000);
    return () => clearInterval(timer);
  }, []);

  const openGoogleMaps = () => {
    const url = `https://maps.app.goo.gl/mWac4KcwCQSUUibU9`;
    window.open(url, '_blank');
  };

  const scrollToLocation = () => {
    onClose();
    const element = document.getElementById('location');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[170] md:z-[180] flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-charcoal w-full md:max-w-md animate-fade-in-up md:rounded-3xl border-t md:border border-gold/20 shadow-2xl overflow-hidden pb-safe-area">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-gold" />
              <h3 className="font-display text-xl text-white uppercase tracking-widest">Operating Hours</h3>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Status Badge */}
          <div className="mb-8 flex items-center gap-4 bg-gold/[0.05] p-4 rounded-2xl border border-gold/20">
            <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_rgba(243,205,105,0.5)] animate-pulse shrink-0"></div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">
                {lang !== 'en' ? '開幕狀態' : 'Kitchen Status'}
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-gold">
                {lang !== 'en' ? '即將開幕' : 'Opening Soon'}
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gold/50" />
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
                  {lang !== 'en' ? '計劃營業時間' : 'Planned Hours'}
                </span>
              </div>
              <span className="font-mono text-white/50">12:00 — 23:00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gold/50" />
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
                  {lang !== 'en' ? '暫定開幕' : 'Tentative Opening'}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-gold text-sm">
                  {lang !== 'en' ? '4月29日' : '29 Apr'}
                </span>
                <span className="text-[9px] text-white/25 block">
                  {daysUntilOpening}d {lang !== 'en' ? '後' : 'away'}
                </span>
              </div>
            </div>
          </div>

          {/* Booking notice */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/[0.06] border border-gold/20 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold/80">
              {lang !== 'en' ? '立即訂座 · 5月1日起接受預約' : 'Book Now · Reservations available from 1 May 2026'}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gold/5 border border-gold/20 rounded-2xl hover:bg-gold/10 hover:border-gold/30 transition-all group"
            >
              <Clock size={20} className="text-gold mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Book Now</span>
            </a>
            <button 
              onClick={openGoogleMaps}
              className="flex flex-col items-center justify-center p-4 bg-gold/5 border border-gold/20 rounded-2xl hover:bg-gold/10 hover:border-gold/30 transition-all group"
            >
              <div className="relative mb-2">
                <MapPin size={20} className="text-gold group-hover:scale-110 transition-transform" />
                <ExternalLink size={10} className="absolute -top-1 -right-3 text-gold/50" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{lang !== 'en' ? '開啟導航' : 'Navigate'}</span>
            </button>
          </div>

          <button 
            onClick={scrollToLocation}
            className="w-full mt-4 py-3 text-[9px] text-gray-500 uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            {lang !== 'en' ? '查看分店詳情' : 'View Branch Details'}
            <ChevronRight size={10} />
          </button>
        </div>

        {/* Footer */}
        <div className="bg-black/50 px-6 py-4 flex items-center justify-between border-t border-white/5 shrink-0">
          <div className="flex items-center gap-2">
            <Scissors size={12} className="text-gold" />
            <span className="text-[8px] uppercase tracking-mega text-gray-500">Vincenzo Capuano HK</span>
          </div>
          <p className="text-[8px] text-gray-600 uppercase tracking-widest">
            {lang !== 'en' ? '灣仔皇后大道東200號地下' : "G/F, 200 Queen's Road East, Wan Chai"}
          </p>
        </div>
      </div>
    </div>
  );
};
