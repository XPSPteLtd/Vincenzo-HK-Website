
import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MapPin, Star, Clock, ChevronRight, CheckCircle2, Package, Bike, ArrowRight, Truck, PhoneCall } from 'lucide-react';
import { Language, translations } from '../translations_new';

type Platform = 'deliveroo' | 'foodpanda' | 'grab' | null;

interface PlatformConfig {
  name: string;
  color: string;
  promoCode: string;
  logo: string;
  deepLink: string;
}

const PLATFORMS: Record<string, PlatformConfig> = {
  deliveroo: {
    name: 'Deliveroo',
    color: '#00CCBC',
    promoCode: 'VCROO20',
    logo: 'https://images.unsplash.com/photo-1610415664559-0f0e0e0e0e0e?q=80&w=100&h=100&auto=format&fit=crop',
    deepLink: 'https://deliveroo.hk'
  },
  foodpanda: {
    name: 'Foodpanda',
    color: '#D70F64',
    promoCode: 'VCPANDA15',
    logo: 'https://images.unsplash.com/photo-1610415664559-0f0e0e0e0e0e?q=80&w=100&h=100&auto=format&fit=crop',
    deepLink: 'https://foodpanda.hk'
  },
  grab: {
    name: 'GrabFood',
    color: '#00B14F',
    promoCode: 'VCGRAB20',
    logo: 'https://images.unsplash.com/photo-1610415664559-0f0e0e0e0e0e?q=80&w=100&h=100&auto=format&fit=crop',
    deepLink: 'https://food.grab.com'
  }
};

interface DeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DeliveryModal: React.FC<DeliveryModalProps> = ({ isOpen, onClose, lang }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(null);
  const [view, setView] = useState<'landing' | 'tracking'>('landing');
  const [step, setStep] = useState(0);
  const t = translations[lang].modals;

  useEffect(() => {
    if (view === 'tracking') {
      const timer = setInterval(() => {
        setStep(prev => (prev < 3 ? prev + 1 : prev));
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [view]);

  useEffect(() => {
    if (isOpen) {
      setSelectedPlatform(null);
      setView('landing');
      setStep(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPlatform = selectedPlatform ? PLATFORMS[selectedPlatform] : null;

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center p-0 md:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-[#F7F7F7] w-full max-w-md h-full md:h-[85vh] md:max-h-[750px] shadow-2xl animate-fade-in-up flex flex-col overflow-hidden text-charcoal md:rounded-3xl mt-[57px] mb-[64px] md:mt-0 md:mb-0">
        
        {/* Header - Conditional Branding */}
        <div className={`px-6 py-4 flex justify-between items-center shadow-sm shrink-0 transition-colors duration-500 ${selectedPlatform ? 'bg-white' : 'bg-charcoal text-white'}`}>
          <div className="flex items-center gap-2">
            {selectedPlatform ? (
              <>
                <div 
                  className="p-1.5 rounded-lg transition-colors duration-500"
                  style={{ backgroundColor: currentPlatform?.color }}
                >
                  <ShoppingBag size={18} className="text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">Order via {currentPlatform?.name}</span>
              </>
            ) : (
              <>
                <img 
                  src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                  alt="Logo" 
                  className="h-4 w-auto object-contain" 
                />
                <span className="font-display capitalize tracking-widest text-lg">{t.deliveryTitle}</span>
              </>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
            <X size={20} className={selectedPlatform ? "text-gray-400" : "text-white/50 group-hover:text-white"} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col">
          {!selectedPlatform ? (
            /* PLATFORM SELECTION VIEW */
            <div className="p-6 xs:p-8 flex flex-col h-full animate-fade-in">
              <div className="mb-6 xs:mb-8 text-center px-4">
                <h3 className="font-serif capitalize text-2xl xs:text-3xl mb-2 italic">{t.deliveryAnywhere}</h3>
                <p className="text-[10px] xs:text-xs text-gray-500 uppercase tracking-mega">{t.deliverySelect}</p>
              </div>

              <div className="space-y-3 xs:space-y-4">
                {(Object.keys(PLATFORMS) as Array<keyof typeof PLATFORMS>).map((key) => {
                  const p = PLATFORMS[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedPlatform(key as Platform)}
                      className="w-full group bg-white p-4 xs:p-6 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3 xs:gap-4">
                        <div 
                          className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl flex items-center justify-center text-white"
                          style={{ backgroundColor: p.color }}
                        >
                          <ShoppingBag size={20} className="xs:size-6" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-base xs:text-lg">{p.name}</h4>
                          <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-widest leading-none">Available Now • 25-35 mins</p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-gray-300 group-hover:text-gold transition-colors" />
                    </button>
                  );
                })}

                <div className="pt-4 xs:pt-6 border-t border-gray-200">
                  <button className="w-full p-4 xs:p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-gold/30 hover:bg-white transition-all flex items-center gap-3 xs:gap-4 group">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 group-hover:text-gold group-hover:bg-gold/5 transition-colors">
                      <PhoneCall size={20} className="xs:size-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-base xs:text-lg">{t.cateringTitle}</h4>
                      <p className="text-[8px] xs:text-[10px] text-gray-400 uppercase tracking-widest">{t.cateringDesc}</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="mt-auto pt-8 text-center">
                <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em]">{translations[lang].signature.neapolitan} {translations[lang].signature.contemporary}</p>
              </div>
            </div>
          ) : (
            <div className="p-6 space-y-6 animate-fade-in">
              <div 
                className="rounded-2xl p-6 text-white relative overflow-hidden transition-colors duration-500"
                style={{ backgroundColor: currentPlatform?.color }}
              >
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-1">{t.discountMsg}</h3>
                  <p className="text-xs opacity-90">{t.promoCodeLabel} {currentPlatform?.promoCode}</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-20">
                   <ShoppingBag size={100} />
                </div>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setView('tracking')}
                  className="w-full text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all brightness-110 hover:brightness-100"
                  style={{ backgroundColor: currentPlatform?.color }}
                >
                  <ArrowRight size={18} />
                  {t.simulatedOrder}
                </button>
                <button 
                  onClick={() => setSelectedPlatform(null)}
                  className="w-full py-2 text-[10px] text-gray-400 uppercase tracking-widest hover:text-charcoal transition-colors"
                >
                  {t.changePlatform}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Brand Footer */}
        <div className="bg-charcoal px-6 py-4 flex items-center justify-between text-white shrink-0">
           <div className="flex items-center gap-2">
              <img 
                src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
                alt="Logo" 
                className="h-3.5 w-auto object-contain" 
              />
              <span className="text-[9px] uppercase tracking-mega">Vincenzo Capuano HK</span>
           </div>
           <span className="text-[9px] text-gray-600 uppercase tracking-widest font-bold">{t.managementLabel}</span>
        </div>
      </div>
    </div>
  );
};
