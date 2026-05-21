import React, { useEffect, useState } from 'react';
import { X, Clock, MapPin, ChevronRight, Calendar, ExternalLink, Scissors } from 'lucide-react';
import { Language, translations } from '../translations';

interface QuickHoursProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

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

export const QuickHours: React.FC<QuickHoursProps> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang].location;
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tick = () => setCurrentTime(new Date());
    tick();
    const interval = setInterval(tick, 60000);
    return () => clearInterval(interval);
  }, []);

  const restaurantStatus = getRestaurantStatus(currentTime);
  const isClosedState = restaurantStatus === 'closed' || restaurantStatus === 'kitchen_closed';
  const isWarningState = restaurantStatus === 'kitchen_closing_soon' || restaurantStatus === 'closing_soon';

  const statusKey: Record<RestaurantStatus, keyof typeof t> = {
    closed: 'statusClosed',
    warming_up: 'statusWarmingUp',
    opening_soon: 'statusOpeningSoon',
    now_open: 'statusNowOpen',
    kitchen_closing_soon: 'statusKitchenClosingSoon',
    kitchen_closed: 'statusKitchenClosed',
    closing_soon: 'statusClosingSoon',
  };

  const openGoogleMaps = () => {
    const url = `https://maps.app.goo.gl/YXNiZqsVJb7GVnMaA`;
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
              <h3 className="font-display text-xl text-white uppercase tracking-widest">Opening Hours</h3>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Status Badge */}
          <div className={`mb-8 flex items-center gap-4 p-4 rounded-2xl border ${isClosedState ? 'bg-white/[0.03] border-white/10' : isWarningState ? 'bg-amber-500/[0.06] border-amber-400/20' : 'bg-gold/[0.05] border-gold/20'}`}>
            <div className={`w-3 h-3 rounded-full shrink-0 animate-pulse ${isClosedState ? 'bg-white/30' : isWarningState ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 'bg-gold shadow-[0_0_10px_rgba(243,205,105,0.5)]'}`}></div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">
                {lang !== 'en' ? '廚房狀態' : 'Kitchen Status'}
              </p>
              <p className={`text-sm font-bold uppercase tracking-widest ${isClosedState ? 'text-white/40' : isWarningState ? 'text-amber-400' : 'text-gold'}`}>
                {t[statusKey[restaurantStatus]]}
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-6 mb-10">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gold/50" />
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
                  {lang !== 'en' ? '午市' : 'Lunch'}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-white">12:00 — 15:00</span>
                <p className="text-[10px] text-white/40 mt-0.5">{lang !== 'en' ? '最後點餐 14:30' : 'Last order 14:30'}</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gold/50" />
                <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
                  {lang !== 'en' ? '晚市' : 'Dinner'}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-white">18:00 — 23:00</span>
                <p className="text-[10px] text-white/40 mt-0.5">{lang !== 'en' ? '最後點餐 21:45' : 'Last order 21:45'}</p>
              </div>
            </div>
          </div>

          {/* Booking notice */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/[0.06] border border-gold/20 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold/80">
              {lang !== 'en' ? '立即訂座 · 即時確認' : 'Now Taking Reservations'}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.sevenrooms.com/reservations/vincenzocapuanohk"
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
