
import React from 'react';
import { MapPin, ShoppingBag, Users, Phone } from 'lucide-react';
import { Language, translations } from '../translations';

interface MobileBottomNavProps {
  onDeliveryClick: () => void;
  onEventsClick: () => void;
  lang: Language;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onDeliveryClick,
  onEventsClick,
  lang,
}) => {
  const t = translations[lang].nav;
  const tc = translations[lang].common;
  const hk = lang === 'hk';

  const itemClass =
    'flex flex-col items-center justify-center flex-1 gap-1.5 py-2 transition-all active:scale-95 group';
  const iconClass = 'text-white/40 group-active:text-white transition-colors';
  const labelClass =
    'text-[9px] uppercase tracking-[0.15em] font-bold text-white/35 group-active:text-white/70 transition-colors';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[160] bg-black/80 backdrop-blur-2xl border-t border-white/[0.07] pb-safe-area">
      <div className="flex items-stretch h-[60px] max-w-lg mx-auto divide-x divide-white/[0.06]">

        {/* Navigate */}
        <a
          href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9"
          target="_blank"
          rel="noopener noreferrer"
          className={itemClass}
        >
          <MapPin size={17} className={iconClass} />
          <span className={labelClass}>{tc.navigate}</span>
        </a>

        {/* Order */}
        <button onClick={onDeliveryClick} className={itemClass}>
          <ShoppingBag size={17} className={iconClass} />
          <span className={labelClass}>{hk ? '外賣' : t.order}</span>
        </button>

        {/* Events */}
        <button onClick={onEventsClick} className={itemClass}>
          <Users size={17} className={iconClass} />
          <span className={labelClass}>{t.events_short}</span>
        </button>

        {/* Call */}
        <a href="tel:+85294483165" className={itemClass}>
          <Phone size={17} className={iconClass} />
          <span className={labelClass}>{hk ? '電話' : 'Call'}</span>
        </a>

      </div>
    </div>
  );
};
