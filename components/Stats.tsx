
import React, { useEffect, useState, useRef } from 'react';
import { Users, Pizza, Droplets, Wheat } from 'lucide-react';
import { Language, translations } from '../translations';

interface StatsProps {
  lang: Language;
  embedded?: boolean;
}

export const Stats: React.FC<StatsProps> = ({ lang, embedded = false }) => {
  const t = translations[lang].stats;
  const [totalGuests, setTotalGuests] = useState(0);
  const [totalPizzas, setTotalPizzas] = useState(0);
  const [totalFlour, setTotalFlour] = useState(0);
  const [totalTomatoes, setTotalTomatoes] = useState(0);
  const [isLive, setIsLive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref to track the "Kitchen Queue" for pizzas to simulate oven bottleneck
  const pendingPizzas = useRef(0);
  
  const config = useRef({
    openingDate: new Date('2026-01-01T12:00:00'), 
    baseGuestsPerDay: 420,
    weekendMultiplier: 1.45,
    pizzaToGuestRatio: 0.92,
    // Oven Constraints
    maxOvenCapacity: 5,
    bakeTimeMinutes: 2.5,
    prepTimeMinutes: 1.5, // Before & after oven
    hours: {
      lunch: { open: 12, close: 15 },
      dinner: { open: 18, close: 23 }
    }
  });

  useEffect(() => {
    const calculateStats = () => {
      const now = new Date();
      const currentHour = now.getHours() + now.getMinutes() / 60;
      const dayOfWeek = now.getDay(); 
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6 || (dayOfWeek === 5 && currentHour > 17);

      const isLunchTime = currentHour >= config.current.hours.lunch.open && currentHour < config.current.hours.lunch.close;
      const isDinnerTime = currentHour >= config.current.hours.dinner.open && currentHour < config.current.hours.dinner.close;
      setIsOpen(isLunchTime || isDinnerTime);

      const msSinceOpen = Math.max(0, now.getTime() - config.current.openingDate.getTime());
      const daysSinceOpen = msSinceOpen / (1000 * 60 * 60 * 24);
      
      const fullWeeks = Math.floor(daysSinceOpen / 7);
      const remainingDays = Math.floor(daysSinceOpen % 7);
      const avgWeeklyGuests = (5 * config.current.baseGuestsPerDay) + (2 * config.current.baseGuestsPerDay * config.current.weekendMultiplier);
      let historicalGuests = fullWeeks * avgWeeklyGuests;
      
      for(let i=0; i<remainingDays; i++) {
        historicalGuests += config.current.baseGuestsPerDay; 
      }

      let sessionGuests = 0;
      const getSessionIntensity = (start: number, end: number, current: number) => {
        const mid = (start + end) / 2;
        const halfDur = (end - start) / 2;
        return Math.max(0, 1 - Math.pow((current - mid) / halfDur, 2));
      };

      // Only add session guests if we have actually passed the opening date
      if (msSinceOpen > 0) {
        if (currentHour > config.current.hours.lunch.open) {
          const intensity = getSessionIntensity(config.current.hours.lunch.open, config.current.hours.lunch.close, currentHour);
          const elapsed = Math.min(currentHour, config.current.hours.lunch.close) - config.current.hours.lunch.open;
          if (elapsed > 0) sessionGuests += (elapsed * 60 * intensity * (isWeekend ? 1.2 : 0.8));
        }
        
        if (currentHour > config.current.hours.dinner.open) {
          const intensity = getSessionIntensity(config.current.hours.dinner.open, config.current.hours.dinner.close, currentHour);
          const elapsed = Math.min(currentHour, config.current.hours.dinner.close) - config.current.hours.dinner.open;
          if (elapsed > 0) sessionGuests += (elapsed * 85 * intensity * (isWeekend ? 1.3 : 0.9));
        }
      }

      const totalG = Math.floor(historicalGuests + sessionGuests);
      const totalP = Math.floor(totalG * config.current.pizzaToGuestRatio);

      setTotalGuests(totalG);
      setTotalPizzas(totalP);
      setTotalFlour(Math.floor(totalP * 0.185)); 
      setTotalTomatoes(Math.floor(totalP * 0.115));
    };

    calculateStats();

    const interval = setInterval(() => {
      const now = new Date();
      // Ensure we only simulate activity if the restaurant has launched
      if (now < config.current.openingDate) return;

      const currentHour = now.getHours() + now.getMinutes() / 60;
      const dayOfWeek = now.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      if (isOpen) {
        let intensity = 0;
        if (currentHour >= 12 && currentHour < 15) {
          const mid = 13.5;
          intensity = 1 - Math.abs(currentHour - mid) / 1.5;
        } else if (currentHour >= 18 && currentHour < 23) {
          const mid = 20.5;
          intensity = 1 - Math.abs(currentHour - mid) / 2.5;
        }

        const arrivalChance = 0.3 * intensity * (isWeekend ? 1.5 : 1.0);
        
        if (Math.random() < arrivalChance) {
          const groupSize = Math.floor(Math.random() * 10) + 1;
          setTotalGuests(prev => prev + groupSize);
          const newPizzas = Math.ceil(groupSize * config.current.pizzaToGuestRatio);
          pendingPizzas.current += newPizzas;
        }

        const maxPizzasPerTick = (config.current.maxOvenCapacity / config.current.bakeTimeMinutes) * (4 / 60);
        
        if (pendingPizzas.current > 0) {
          const processed = Math.min(pendingPizzas.current, maxPizzasPerTick + (Math.random() * 0.1));
          if (processed >= 1 || (processed > 0 && Math.random() < processed)) {
            const count = Math.max(1, Math.floor(processed) || (Math.random() < processed ? 1 : 0));
            setTotalPizzas(prev => {
              const next = prev + count;
              setTotalFlour(Math.floor(next * 0.185));
              setTotalTomatoes(Math.floor(next * 0.115));
              return next;
            });
            pendingPizzas.current = Math.max(0, pendingPizzas.current - count);
          }
        }
      }
    }, 4000);

    const blink = setInterval(() => setIsLive(p => !p), 1000);
    return () => {
      clearInterval(interval);
      clearInterval(blink);
    };
  }, [isOpen]);

  const containerClasses = embedded 
    ? "bg-charcoal/40 backdrop-blur-md border-t border-white/10" 
    : "py-24 md:py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden";

  return (
    <section id="stats" className={containerClasses}>
       {!embedded && (
         <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
       )}

       <div className={`max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 ${embedded ? 'py-8 md:py-10' : ''}`}>
           <div className={`flex flex-col md:flex-row justify-between items-end mb-8 gap-6 ${!embedded ? 'border-b border-white/10 pb-8' : ''}`}>
              <div>
                 <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2 h-2 rounded-full ${isOpen ? (isLive ? 'bg-green-500 shadow-[0_0_15px_#22c55e]' : 'bg-green-900') : 'bg-red'} transition-all duration-500`}></span>
                    <span className={`text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] ${isOpen ? 'text-green-500' : 'text-red'}`}>
                        {isOpen ? (lang === 'en' ? "Kitchen Activity: ACTIVE" : "實時廚房狀態：營業中") : (lang === 'en' ? "System Standby: CLOSED" : "系統待命：目前暫停營業")}
                    </span>
                 </div>
                 {!embedded && <h2 className="text-3xl font-display text-white uppercase tracking-mega">{t.performance}</h2>}
              </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <StatCard 
                icon={<Users size={16} />} 
                title={t.guests} 
                value={totalGuests.toLocaleString()} 
                desc={t.guestsDesc} 
                embedded={embedded}
              />
              <StatCard 
                icon={<Pizza size={16} />} 
                title={t.pizzas} 
                value={totalPizzas.toLocaleString()} 
                desc={t.pizzasDesc} 
                embedded={embedded}
              />
              <StatCard 
                icon={<Droplets size={16} />} 
                title={t.tomatoes} 
                value={`${totalTomatoes.toLocaleString()}L`} 
                desc={t.tomatoesDesc} 
                embedded={embedded}
              />
              <StatCard 
                icon={<Wheat size={16} />} 
                title={t.flour} 
                value={`${(totalFlour / 1000).toFixed(1)}T`} 
                desc={t.flourDesc} 
                embedded={embedded}
              />
           </div>
       </div>
    </section>
  );
};

const StatCard: React.FC<{ 
  icon: React.ReactNode, 
  title: string, 
  value: string, 
  desc: string,
  embedded: boolean
}> = ({ icon, title, value, desc, embedded }) => (
  <div className={`${embedded ? 'bg-white/[0.03]' : 'bg-[#111]'} border border-white/5 p-4 xs:p-5 md:p-8 relative group overflow-hidden hover:border-gold/30 transition-all duration-700 rounded-xl`}>
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      {icon}
    </div>
    <div className="relative z-10">
      <span className="text-gold text-[7px] xs:text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold block mb-2 xs:mb-3 md:mb-5">{title}</span>
      <div className="font-mono text-lg xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-1 md:mb-2 tracking-tighter tabular-nums">
          {value}
      </div>
      <p className="text-[7px] xs:text-[8px] md:text-[9px] text-gray-600 uppercase tracking-widest leading-tight">{desc}</p>
    </div>
  </div>
);
