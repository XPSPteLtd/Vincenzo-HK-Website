import React from 'react';
import { Sparkles, X } from 'lucide-react';
import { Language, translations } from '../translations_new';

interface AnnouncementBannerProps {
  lang: Language;
  onDismiss: () => void;
  isActive: boolean;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ lang, onDismiss, isActive }) => {
  const [internalVisible, setInternalVisible] = React.useState(true);
  
  const handleDismiss = () => {
    setInternalVisible(false);
    onDismiss();
  };
  const t = (translations[lang] as any).banner.launch;

  if (!internalVisible) return null;

  return (
    <div className={`fixed top-0 left-0 w-full z-[200] bg-gold h-10 md:h-12 overflow-hidden flex items-center transition-transform duration-1000 ease-out ${isActive ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex whitespace-nowrap animate-scroll items-center h-full">
        {/* Repeating text for the marquee effect */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 md:gap-8 px-4 md:px-8">
            <Sparkles size={14} className="text-charcoal animate-pulse" />
            <span className="text-charcoal font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-[10px] md:text-[11px] leading-none">
              {t}
            </span>
            <Sparkles size={14} className="text-charcoal animate-pulse" />
          </div>
        ))}
      </div>
      
      {/* Dismiss button */}
      <div className="absolute right-0 h-full flex items-center px-4 bg-gradient-to-l from-gold via-gold to-transparent">
        <button 
          onClick={handleDismiss}
          className="p-1 hover:bg-black/10 rounded-full transition-colors text-charcoal/70 hover:text-charcoal"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
