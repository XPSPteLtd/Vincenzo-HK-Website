
import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Scissors, ShoppingBag, Languages, Clock, Users } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  onBookClick: () => void;
  onDeliveryClick: () => void;
  onEventsClick: () => void;
  onHoursClick: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onBookClick, 
  onDeliveryClick, 
  onEventsClick,
  onHoursClick,
  lang, 
  onLangChange 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.menu, href: '#menu' },
    { name: t.philosophy, href: '#concept' },
    { name: t.location, href: '#location' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[120] transition-all duration-500 ${
        isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-md py-3 md:py-4 shadow-2xl border-b border-white/5' 
          : 'bg-transparent py-5 md:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative shrink-0">
             <Scissors className="w-4 h-4 md:w-5 md:h-5 text-gold transform -rotate-90 group-hover:rotate-0 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-sm md:text-base lg:text-xl tracking-[0.1em] md:tracking-[0.12em] lg:tracking-[0.15em] text-white leading-none uppercase">VINCENZO CAPUANO</span>
            <span className="text-[7px] md:text-[8px] lg:text-[9px] text-gold tracking-[0.3em] md:tracking-[0.35em] lg:tracking-[0.4em] uppercase mt-0.5">Hong Kong</span>
          </div>
        </a>

        {/* Desktop Navigation - Enhanced for Tablet */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors text-white uppercase cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onEventsClick}
              className="text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors text-white uppercase flex items-center gap-1.5"
            >
              <Users size={12} className="text-gold/50" />
              {t.events}
            </button>
            <button 
              onClick={onHoursClick}
              className="text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors text-white uppercase flex items-center gap-1.5"
            >
              <Clock size={12} className="text-gold/50" />
              {lang === 'zh' ? '時間' : 'Hours'}
            </button>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4 border-l border-white/10 pl-4 lg:pl-6 ml-2 lg:ml-0">
            <button 
              onClick={() => onLangChange(lang === 'en' ? 'zh' : 'en')}
              className="text-[9px] lg:text-[10px] font-bold text-white/50 hover:text-gold transition-colors flex items-center gap-1"
            >
              <Languages size={12} className="text-gold/50" />
              <span className="hidden lg:inline">{lang === 'en' ? '繁體中文' : 'ENGLISH'}</span>
              <span className="lg:hidden">{lang === 'en' ? 'ZH' : 'EN'}</span>
            </button>

            <button 
              onClick={onDeliveryClick}
              className="flex items-center gap-1.5 text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors text-white uppercase"
            >
              <ShoppingBag size={12} className="text-gold" />
              {t.order}
            </button>
            
            <button 
              onClick={onBookClick}
              className="px-4 lg:px-8 py-2.5 lg:py-3 bg-gold text-charcoal text-[10px] lg:text-xs font-bold tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-gold/10"
            >
              {t.reservations}
            </button>
          </div>
        </div>

        {/* Mobile Quick Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => onLangChange(lang === 'en' ? 'zh' : 'en')}
            className="p-2 text-white/40 active:text-gold transition-colors"
          >
            <Languages size={18} />
          </button>
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-[57px] bg-charcoal/98 backdrop-blur-xl z-[60] transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 gap-4 h-full overflow-y-auto">
          {navLinks.map((link, idx) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="text-2xl font-serif text-white hover:text-gold transition-colors py-3 border-b border-white/5 flex justify-between items-center"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {link.name}
              <span className="text-gold opacity-20 text-[10px] tracking-widest">0{idx+1}</span>
            </a>
          ))}
          
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onEventsClick(); }}
            className="text-2xl font-serif text-white hover:text-gold transition-colors py-3 border-b border-white/5 flex justify-between items-center"
          >
            {t.events}
            <Users size={16} className="text-gold/20" />
          </button>

          <button 
            onClick={() => { setIsMobileMenuOpen(false); onHoursClick(); }}
            className="text-2xl font-serif text-white hover:text-gold transition-colors py-3 border-b border-white/5 flex justify-between items-center"
          >
            {lang === 'zh' ? '營業時間' : 'Hours'}
            <Clock size={16} className="text-gold/20" />
          </button>
          
          <div className="mt-auto space-y-4 pb-24">
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onDeliveryClick();
              }}
              className="w-full py-4 border border-white/10 rounded-xl text-white font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-3"
            >
              <ShoppingBag size={16} className="text-gold" />
              {t.order}
            </button>
            
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-4 bg-gold text-charcoal rounded-xl font-bold tracking-widest uppercase text-[10px]"
            >
              {t.reservations}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
