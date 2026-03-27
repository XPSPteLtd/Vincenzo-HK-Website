
import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, Languages, Clock, Users, Phone } from 'lucide-react';
import { Language, translations } from '../translations_new';
import { Page } from '../App';

interface NavbarProps {
  onBookClick: () => void;
  onDeliveryClick: () => void;
  onEventsClick: () => void;
  onHoursClick: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
  activePage: Page;
  onPageChange: (page: Page) => void;
  isBannerActive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onBookClick, 
  onDeliveryClick, 
  onEventsClick,
  onHoursClick,
  lang, 
  onLangChange,
  activePage,
  onPageChange,
  isBannerActive
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  const navLinks: { name: string; page: Page }[] = [
    { name: t.menu, page: 'menu' },
    { name: t.philosophy, page: 'home' },
    { name: t.location, page: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[120] transition-all duration-700 ${isBannerActive ? 'top-10 md:top-12' : 'top-0'} ${
        isScrolled || activePage !== 'home'
          ? 'bg-charcoal/95 backdrop-blur-md py-3 md:py-4 shadow-2xl border-b border-white/5 lg:min-h-[10.5rem]' 
          : 'bg-transparent py-6 md:py-8 border-b border-transparent lg:min-h-[10.5rem]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex justify-between items-center">
        {/* Brand Logo - Handover effect */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); onPageChange('home'); }}
          className={`flex items-center gap-2 md:gap-3 group transition-all duration-700 ${
            isScrolled || activePage !== 'home' 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
          }`}
        >
          <img 
            src="https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png" 
            alt="Vincenzo Capuano Logo" 
            className="h-12 md:h-16 lg:h-[8.5rem] w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
        </a>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.page === 'home' ? '/' : `/${link.page}`}
                onClick={(e) => handleNavLinkClick(e, link.page)}
                className={`text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors uppercase cursor-pointer ${
                  activePage === link.page ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            {/* 
            <button 
              onClick={onEventsClick}
              className="text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors text-white uppercase flex items-center gap-1.5"
            >
              <Users size={12} className="text-gold/50" />
              {t.events}
            </button>
            */}
            <button 
              onClick={onHoursClick}
              className="text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors text-white uppercase flex items-center gap-1.5"
            >
              <Clock size={12} className="text-gold/50" />
               {t.hours}
            </button>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4 border-l border-white/10 pl-4 lg:pl-6 ml-2 lg:ml-0">
            <a 
              href="tel:+85212345678"
              className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-white/70 hover:text-gold transition-colors uppercase tracking-widest"
            >
              <Phone size={12} className="text-gold/50" />
              +852 1234 5678
            </a>

            <div className="flex items-center gap-2 lg:gap-3 text-[9px] lg:text-[10px] font-bold">
               <button 
                 onClick={() => onLangChange('en')}
                 className={`hover:text-gold transition-colors tracking-widest ${lang === 'en' ? 'text-gold' : 'text-white/40'}`}
               >
                 EN
               </button>
               <span className="text-white/10">|</span>
               <button 
                 onClick={() => onLangChange('hk')}
                 className={`hover:text-gold transition-colors tracking-widest ${lang === 'hk' ? 'text-gold' : 'text-white/40'}`}
               >
                 繁
               </button>
               {/*
               <span className="text-white/10">|</span>
               <button 
                 onClick={() => onLangChange('zh')}
                 className={`hover:text-gold transition-colors tracking-widest ${lang === 'zh' ? 'text-gold' : 'text-white/40'}`}
               >
                 简
               </button>
               */}
            </div>

            {/* 
            <button 
              onClick={onDeliveryClick}
              className="flex items-center gap-1.5 text-[10px] lg:text-xs font-bold tracking-widest hover:text-gold transition-colors text-white uppercase"
            >
              <ShoppingBag size={12} className="text-gold" />
              {t.order}
            </button>
            */}
            
            <button 
              onClick={onBookClick}
              className="px-4 lg:px-8 py-2.5 lg:py-3 bg-gold text-charcoal text-[10px] lg:text-xs font-bold tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-gold/10"
            >
              {t.reservations}
            </button>
          </div>
        </div>

        {/* Mobile Quick Controls */}
        <div className="md:hidden flex items-center gap-1 sm:gap-2">
          <a 
            href="tel:+85212345678"
            className="p-2 text-white/60 active:text-gold transition-colors"
            aria-label="Call Restaurant"
          >
            <Phone size={18} />
          </a>
          <div className="flex items-center gap-1.5 text-[10px] font-bold mr-1">
             <button 
               onClick={() => onLangChange('en')}
               className={`transition-colors ${lang === 'en' ? 'text-gold' : 'text-white/40'}`}
             >
               EN
             </button>
             <span className="text-white/10">|</span>
             <button 
               onClick={() => onLangChange('hk')}
               className={`transition-colors ${lang === 'hk' ? 'text-gold' : 'text-white/40'}`}
             >
               繁
             </button>
             {/*
             <span className="text-white/10">|</span>
             <button 
               onClick={() => onLangChange('zh')}
               className={`transition-colors ${lang === 'zh' ? 'text-gold' : 'text-white/40'}`}
             >
               简
             </button>
             */}
          </div>
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
              href={link.page === 'home' ? '/' : `/${link.page}`}
              onClick={(e) => handleNavLinkClick(e, link.page)}
              className={`text-2xl font-serif capitalize hover:text-gold transition-colors py-3 border-b border-white/5 flex justify-between items-center ${
                activePage === link.page ? 'text-gold' : 'text-white'
              }`}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {link.name}
              <span className="text-gold opacity-20 text-[10px] tracking-widest">0{idx+1}</span>
            </a>
          ))}
          
          {/*
          <button 
            onClick={() => { setIsMobileMenuOpen(false); onEventsClick(); }}
            className="text-2xl font-serif capitalize text-white hover:text-gold transition-colors py-3 border-b border-white/5 flex justify-between items-center"
          >
            {t.events}
            <Users size={16} className="text-gold/20" />
          </button>
          */}

          <button 
            onClick={() => { setIsMobileMenuOpen(false); onHoursClick(); }}
            className="text-2xl font-serif capitalize text-white hover:text-gold transition-colors py-3 border-b border-white/5 flex justify-between items-center"
          >
             {t.hours}
            <Clock size={16} className="text-gold/20" />
          </button>

          <a 
            href="tel:+85212345678"
            className="text-2xl font-serif capitalize text-white hover:text-gold transition-colors py-3 border-b border-white/5 flex justify-between items-center"
          >
             {t.callUs}
            <Phone size={16} className="text-gold/20" />
          </a>
          
          <div className="mt-auto space-y-4 pb-24">
            {/* 
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
            */}
            
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
