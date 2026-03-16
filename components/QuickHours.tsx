import React, { useEffect, useState } from 'react';
import { X, Clock, Phone, MapPin, ChevronRight, Scissors, Calendar, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';

interface QuickHoursProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const QuickHours: React.FC<QuickHoursProps> = ({ isOpen, onClose, lang }) => {
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const locationT = translations[lang].location;

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours() + now.getMinutes() / 60;
      const isLunch = hour >= 12 && hour < 15;
      const isDinner = hour >= 18 && hour < 23;
      setIsLiveOpen(isLunch || isDinner);
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
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
          <div className="mb-8 flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className={`w-3 h-3 rounded-full ${isLiveOpen ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'} animate-pulse`}></div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">Kitchen Status</p>
              <p className={`text-sm font-bold uppercase tracking-widest ${isLiveOpen ? 'text-green-500' : 'text-red-500'}`}>
                {isLiveOpen ? (lang === 'zh' ? '營業中' : 'Active • Open Now') : (lang === 'zh' ? '目前休息' : 'Standby • Closed')}
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gold/50" />
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">{locationT.lunch}</span>
              </div>
              <span className="font-mono text-white">12:00 — 15:00</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gold/50" />
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">{locationT.dinner}</span>
              </div>
              <span className="font-mono text-white">18:00 — 23:00</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="tel:+85212345678"
              className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-gold/10 hover:border-gold/30 transition-all group"
            >
              <Phone size={20} className="text-gold mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">{lang === 'zh' ? '立即致電' : 'Call Now'}</span>
            </a>
            <button 
              onClick={openGoogleMaps}
              className="flex flex-col items-center justify-center p-4 bg-gold/5 border border-gold/20 rounded-2xl hover:bg-gold/10 hover:border-gold/30 transition-all group"
            >
              <div className="relative mb-2">
                <MapPin size={20} className="text-gold group-hover:scale-110 transition-transform" />
                <ExternalLink size={10} className="absolute -top-1 -right-3 text-gold/50" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{lang === 'zh' ? '開啟導航' : 'Navigate'}</span>
            </button>
          </div>

          <button 
            onClick={scrollToLocation}
            className="w-full mt-4 py-3 text-[9px] text-gray-500 uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            {lang === 'zh' ? '查看分店詳情' : 'View Branch Details'}
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
            {lang === 'zh' ? '灣仔皇后大道東200號地下' : "G/F, 200 Queen's Road East, Wan Chai"}
          </p>
        </div>
      </div>
    </div>
  );
};