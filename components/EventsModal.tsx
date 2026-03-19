
import React, { useEffect } from 'react';
import { X, Users, Mail, Download, ChevronRight, Star, Award, MapPin, ExternalLink } from 'lucide-react';
import { Language, translations } from '../translations';
import { SafeImage } from './ui/SafeImage';

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const EventsModal: React.FC<EventsModalProps> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang].nav;
  const locationT = translations[lang].location;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const scrollToLocation = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById('location');
      if (element) {
        const offset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 300);
  };

  const openGoogleMaps = () => {
    const url = `https://maps.app.goo.gl/mWac4KcwCQSUUibU9`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-surface w-full max-w-5xl h-full md:h-[85vh] shadow-2xl animate-fade-in-up flex flex-col overflow-hidden mt-[57px] mb-[64px] md:mt-0 md:mb-0 border-y md:border border-gold/20">
        
        {/* Header */}
        <div className="px-6 py-4 flex justify-between items-center bg-charcoal border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <Users size={18} className="text-gold" />
            <span className="font-display uppercase tracking-widest text-lg text-white">{t.events}</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <X size={24} className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-charcoal scrollbar-hide">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Visual Side */}
            <div className="relative h-[250px] lg:h-full min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/10">
              <SafeImage 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974" 
                alt="Event Space" 
                fallbackPrompt="Luxury restaurant event space for private parties, elegant long table setting"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                 <div className="bg-gold/90 text-charcoal px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
                   Capacity: 60 Guests
                 </div>
                 <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">Host Your<br/>Masterpiece</h2>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 space-y-10">
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  From corporate galas to intimate celebrations, Vincenzo Capuano provides a high-energy, sophisticated atmosphere for Neapolitan excellence in Hong Kong.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <Star size={16} className="text-gold mb-2" />
                    <h4 className="text-white text-[10px] font-bold uppercase mb-1">Custom Menus</h4>
                    <p className="text-[8px] text-gray-500 uppercase tracking-widest">Tailored to You</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <Award size={16} className="text-gold mb-2" />
                    <h4 className="text-white text-[10px] font-bold uppercase mb-1">Buyouts</h4>
                    <p className="text-[8px] text-gray-500 uppercase tracking-widest">Full Exclusivity</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gold/5 border border-gold/20 rounded-2xl group transition-all hover:bg-gold/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[8px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Direct Inquiries</p>
                      <a href="mailto:events@vincenzocapuano.hk" className="text-lg text-white font-mono hover:text-gold transition-colors block">events@vincenzocapuano.hk</a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group cursor-pointer hover:border-gold/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gray-400 group-hover:text-gold transition-colors">
                      <Download size={20} />
                    </div>
                    <div>
                      <p className="text-[8px] text-gray-500 uppercase font-bold tracking-widest leading-none mb-1">Download Guide</p>
                      <p className="text-lg text-white font-serif italic">Event Brochure PDF</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-600 group-hover:text-gold transition-colors" />
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
                 <button className="w-full bg-gold text-charcoal py-4 font-bold tracking-mega uppercase text-xs hover:bg-white transition-all shadow-xl shadow-gold/10">
                   Request a Proposal
                 </button>
                 <button className="w-full border border-white/20 text-white py-4 font-bold tracking-mega uppercase text-xs hover:bg-white/10 transition-all">
                   Book a Virtual Tour
                 </button>
              </div>

              {/* Location/Map Section */}
              <div className="pt-10 mt-6 border-t border-white/5">
                <div className="bg-black/20 rounded-3xl p-6 border border-white/5">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gold/10 rounded-2xl">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-display uppercase tracking-widest text-sm mb-1">{lang === 'zh' ? '旗艦店位置' : 'Flagship Location'}</h4>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        {lang === 'zh' ? '坐落於灣仔核心地帶，交通便利。' : 'Located in the heart of Wan Chai, Hong Kong.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={openGoogleMaps}
                      className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-all group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">{lang === 'zh' ? '查看地圖' : 'View Map'}</span>
                      <ExternalLink size={12} className="text-gold group-hover:scale-110 transition-transform" />
                    </button>
                    <button 
                      onClick={scrollToLocation}
                      className="flex-1 bg-gold/5 hover:bg-gold/10 border border-gold/20 rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-all group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gold">{lang === 'zh' ? '營業資訊' : 'Our Location'}</span>
                      <ChevronRight size={12} className="text-gold group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="bg-black/80 px-8 py-3 border-t border-white/5 flex items-center justify-between shrink-0">
           <div className="flex items-center gap-2">
              <img 
                src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                alt="Logo" 
                className="h-3.5 w-auto object-contain" 
              />
              <span className="text-[9px] uppercase tracking-mega text-gray-400">Vincenzo Capuano HK</span>
           </div>
           <p className="text-[9px] text-gray-600 uppercase tracking-widest">
             Private Events • Masterclasses • Corporate Hosting
           </p>
        </div>
      </div>
    </div>
  );
};
