
import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, ShoppingBag, Languages, Clock, Users, Phone, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';
import { Page } from '../App';

interface NavbarProps {
  onBookClick: () => void;
  onEventsClick: () => void;
  onHoursClick: () => void;
  lang: Language;
  onLangChange: (lang: Language) => void;
  activePage: Page;
  onPageChange: (page: Page) => void;
  isBannerActive: boolean;
}

const REGIONS = [
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', icon: 'https://flagcdn.com/w160/sg.png', url: 'https://vincenzocapuano.sg/' },
  { name: 'Hong Kong', code: 'HK', flag: '🇭🇰', icon: 'https://flagcdn.com/w160/hk.png', url: 'https://vincenzocapuano.hk/' },
  { name: 'India', code: 'IN', flag: '🇮🇳', icon: 'https://flagcdn.com/w160/in.png', url: 'https://vincenzocapuano.in/' },
];

export const Navbar: React.FC<NavbarProps> = ({ 
  onBookClick, 
  onEventsClick,
  onHoursClick,
  lang, 
  onLangChange,
  activePage,
  onPageChange,
  isBannerActive
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const t = translations[lang].nav;

  // Auto-detect region
  const currentHostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const activeRegion = REGIONS.find(r => currentHostname.includes(r.url.split('//')[1].split('/')[0])) || REGIONS[1];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setIsScrolled(y > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLogoOpacity = activePage !== 'home' ? 1 : Math.min(1, scrollY / 150);
  const navLogoTranslateY = activePage !== 'home' ? 0 : Math.max(0, 10 * (1 - scrollY / 150));

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  const navLinks: { name: string; page: Page }[] = [
    { name: t.home, page: 'home' },
    { name: t.menu, page: 'menu' },
    { name: t.contact, page: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[120] transition-all duration-700 ${isBannerActive && !isScrolled ? 'top-10 md:top-12' : 'top-0'} ${
        isScrolled || activePage !== 'home'
          ? 'bg-charcoal/95 backdrop-blur-md py-3 md:py-4 shadow-2xl border-b border-white/5 lg:min-h-[10.5rem]' 
          : 'bg-transparent py-6 md:py-8 border-b border-transparent lg:min-h-[10.5rem]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex justify-between items-center h-full">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); onPageChange('home'); }}
          className="flex items-center gap-2 md:gap-3 group"
          style={{
            opacity: navLogoOpacity,
            transform: `translateY(${navLogoTranslateY}px)`,
            pointerEvents: navLogoOpacity < 0.05 ? 'none' : 'auto',
          }}
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
                className={`text-[11px] lg:text-[13px] font-semibold tracking-[0.15em] hover:text-gold transition-colors uppercase cursor-pointer ${
                  activePage === link.page ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onHoursClick}
              className="text-[11px] lg:text-[13px] font-semibold tracking-[0.15em] hover:text-gold transition-colors text-white uppercase flex items-center gap-1.5"
            >
              <Clock size={16} className="text-gold/50" />
            </button>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4 border-l border-white/10 pl-4 lg:pl-6 ml-2 lg:ml-0">
            <button
              onClick={() => onLangChange(lang === 'en' ? 'hk' : 'en')}
              className="text-[10px] lg:text-xs font-bold text-white/60 hover:text-gold transition-colors flex items-center gap-1.5"
            >
              <Languages size={14} className="text-gold/50" />
              <span className="hidden lg:inline uppercase">{lang === 'en' ? '繁體中文' : 'ENGLISH'}</span>
              <span className="lg:hidden">{lang === 'en' ? '繁' : 'EN'}</span>
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 lg:px-7 py-2.5 lg:py-3 bg-gold hover:bg-white text-charcoal text-xs lg:text-sm font-bold tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-gold/10 active:scale-[0.97] text-center uppercase block"
              >
                {t.reservations}
              </a>

              {/* Integrated Region Switcher */}
              <div className="relative flex items-center group/region">
                <button
                  onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                  className={`flex items-center gap-3 px-3 py-1.5 rounded-xl border-2 transition-all duration-300 bg-charcoal shadow-lg hover:scale-105 active:scale-95 ${isRegionDropdownOpen ? 'border-gold shadow-gold/20' : 'border-gold/30 hover:border-gold/60'}`}
                >
                  <div className="w-8 h-5 overflow-hidden rounded-sm border border-white/10 shrink-0 shadow-sm">
                    <img src={activeRegion.icon} alt={activeRegion.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-widest">{activeRegion.code}</span>
                  <ChevronDown size={14} className={`text-gold transition-transform duration-500 ${isRegionDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Integrated Dropdown Menu */}
                <div className={`absolute top-full right-0 mt-4 w-72 bg-white/[0.08] backdrop-blur-3xl border border-white/20 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-500 origin-top-right z-[150] ${isRegionDropdownOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
                  <div className="p-3 space-y-1.5">
                    {REGIONS.map((region) => (
                      <a
                        key={region.name}
                        href={region.url}
                        className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 group/item ${activeRegion.name === region.name ? 'bg-gold/15 border border-gold/30 shadow-[inset_0_0_20px_rgba(197,160,89,0.1)]' : 'hover:bg-white/10'}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-7 rounded-sm border border-white/10 overflow-hidden shrink-0 shadow-sm bg-black/5">
                            <img src={region.icon} alt={region.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col">
                            <span className={`text-[12px] font-bold uppercase tracking-[0.15em] ${activeRegion.name === region.name ? 'text-gold' : 'text-white/90'}`}>
                              {region.name}
                            </span>
                            <span className="text-[9px] text-white/40 uppercase tracking-widest group-hover/item:text-gold/60 transition-colors">
                              {activeRegion.name === region.name ? 'Current Store' : `Switch to ${region.code}`}
                            </span>
                          </div>
                        </div>
                        {activeRegion.name === region.name && (
                          <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_15px_rgba(197,160,89,0.8)]" />
                        )}
                      </a>
                    ))}
                  </div>
                  <div className="px-6 py-4 border-t border-white/10 bg-white/[0.03] rounded-b-2xl">
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] text-center font-medium italic leading-tight">
                      “Please select your country to continue.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Region Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border-2 transition-all duration-300 bg-charcoal shadow-lg ${isRegionDropdownOpen ? 'border-gold' : 'border-gold/30'}`}
            >
              <div className="w-7 h-4 overflow-hidden rounded-sm border border-white/10 shrink-0">
                <img src={activeRegion.icon} alt={activeRegion.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{activeRegion.code}</span>
            </button>

            {isRegionDropdownOpen && (
              <div className="fixed inset-0 z-[200] bg-charcoal/90 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setIsRegionDropdownOpen(false)}>
                <div className="w-full max-w-xs bg-charcoal border border-white/10 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
                  <div className="text-center py-6 border-b border-white/5 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">Choose Region</span>
                  </div>
                  <div className="space-y-2">
                    {REGIONS.map((region) => (
                      <a
                        key={region.name}
                        href={region.url}
                        className={`flex items-center justify-between px-6 py-5 rounded-2xl transition-all ${activeRegion.name === region.name ? 'bg-gold/10 border border-gold/30 shadow-[inset_0_0_20px_rgba(197,160,89,0.05)]' : 'active:bg-white/5 border border-transparent'}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-6 rounded-sm border border-gold/20 overflow-hidden shrink-0 shadow-md">
                            <img src={region.icon} alt={region.name} className="w-full h-full object-cover" />
                          </div>
                          <span className={`text-sm font-bold uppercase tracking-wider ${activeRegion.name === region.name ? 'text-gold' : 'text-white'}`}>
                            {region.name}
                          </span>
                        </div>
                        {activeRegion.name === region.name && <div className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(197,160,89,0.6)]" />}
                      </a>
                    ))}
                  </div>
                  <button onClick={() => setIsRegionDropdownOpen(false)} className="w-full py-4 mt-4 text-[10px] font-bold uppercase tracking-widest text-white/40">Close</button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => onLangChange(lang === 'en' ? 'hk' : 'en')}
            className="p-2 text-white/40 flex items-center gap-1"
          >
            <Languages size={18} />
            <span className="text-[11px] font-bold uppercase">{lang === 'en' ? '繁' : 'EN'}</span>
          </button>
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-[57px] bg-charcoal/98 backdrop-blur-xl z-[60] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-8 gap-4 h-full">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.page === 'home' ? '/' : `/${link.page}`}
              onClick={(e) => handleNavLinkClick(e, link.page)}
              className="text-2xl font-serif text-white hover:text-gold transition-colors py-3 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); onHoursClick(); }} className="text-2xl font-serif text-white hover:text-gold py-4 border-b border-white/5 text-left">
            {lang !== 'en' ? '營業時間' : 'Hours'}
          </button>
          <div className="mt-auto pb-24">
            <a href="https://book.bistrochat.com/vincenzo-capuano-wanchai-hk" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-gold text-charcoal text-xs font-bold tracking-widest rounded-xl text-center block uppercase">
              {t.reservations}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
