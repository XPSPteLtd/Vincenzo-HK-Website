
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Accolades } from './components/Accolades';
import { Legacy } from './components/Legacy';
import { Menu } from './components/Menu';
import { InfoHub } from './components/InfoHub';
import { Social } from './components/Social';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { DeliveryModal } from './components/DeliveryModal';
import { EventsModal } from './components/EventsModal';
import { QuickHours } from './components/QuickHours';
import { Loader } from './components/Loader';
import { Maintenance } from './components/Maintenance';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { FloatingActionButton } from './components/FloatingActionButton';
import { Language } from './translations';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { NotFound } from './components/NotFound';

export type Page = 'home' | 'menu' | 'contact';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isBannerActive, setIsBannerActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setIsBannerActive(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const activePage: Page = location.pathname.startsWith('/menu')
    ? 'menu'
    : location.pathname.startsWith('/contact')
      ? 'contact'
      : 'home';

  const handlePageChange = (page: Page) => {
    if (page === 'home') navigate('/');
    else if (page === 'menu') navigate('/menu');
    else if (page === 'contact') navigate('/contact');
  };

  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    if (saved === 'en' || saved === 'hk') return saved as Language;
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang === 'hk' ? 'zh-HK' : 'en';

    // Dynamic Metadata Management
    const baseTitle = 'Vincenzo Capuano';
    let pageTitle = '';
    let pageDesc = '';

    if (lang === 'en') {
      if (activePage === 'home') {
        pageTitle = `${baseTitle} | Award-Winning Contemporary Neapolitan Pizza HK`;
        pageDesc = 'The world\'s best contemporary Neapolitan pizza arrives in Wan Chai, Hong Kong. Experience the cloud-like crust (cornicione) by Champion Vincenzo Capuano.';
      } else if (activePage === 'menu') {
        pageTitle = `Menu | ${baseTitle} Hong Kong`;
        pageDesc = 'Explore our menu of authentic contemporary Neapolitan pizzas, starters, and signature desserts. Award-winning 081 Napoli tradition.';
      } else if (activePage === 'contact') {
        pageTitle = `Location & Hours | ${baseTitle} Hong Kong`;
        pageDesc = 'Visit us at Lee Tung Avenue, Wan Chai. Check our opening hours, MTR directions, and book your table online.';
      }
    } else {
      if (activePage === 'home') {
        pageTitle = 'Vincenzo Capuano | 香港當代拿坡里薄餅冠軍';
        pageDesc = '在香港灣仔利東街體驗由世界冠軍 Vincenzo Capuano 帶來的當代拿坡里薄餅。';
      } else if (activePage === 'menu') {
        pageTitle = `精選菜單 | ${baseTitle}`;
        pageDesc = '查看我們的當代拿坡里薄餅精選菜單，包括招牌薄餅、前菜及甜品。';
      } else {
        pageTitle = `位置與營業時間 | ${baseTitle}`;
        pageDesc = '前往灣仔利東街門店，查看營業時間及交通資訊。';
      }
    }

    if (pageTitle) document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && pageDesc) metaDesc.setAttribute('content', pageDesc);

  }, [lang, activePage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    clearOverlays();
    setIsModalOpen(true);
  };
  
  const closeModal = () => setIsModalOpen(false);
  
  const openDelivery = () => {
    clearOverlays();
    setIsDeliveryOpen(true);
  };
  
  const closeDelivery = () => setIsDeliveryOpen(false);

  const openEvents = () => {
    clearOverlays();
    setIsEventsOpen(true);
  };

  const closeEvents = () => setIsEventsOpen(false);

  const openHours = () => {
    clearOverlays();
    setIsHoursOpen(true);
  };

  const closeHours = () => setIsHoursOpen(false);

  // Helper to clear all overlays when navigating to a section or switching tasks
  const clearOverlays = () => {
    setIsModalOpen(false);
    setIsDeliveryOpen(false);
    setIsEventsOpen(false);
    setIsHoursOpen(false);
  };

  return (
    <main className="bg-charcoal min-h-screen text-white selection:bg-gold selection:text-charcoal relative pb-20 md:pb-0">
      <AnnouncementBanner lang={lang} onDismiss={() => setIsBannerActive(false)} isActive={isBannerActive} />
      <Loader isLoading={isLoading} />
      
      <Navbar 
        onBookClick={openModal} 
        onDeliveryClick={openDelivery} 
        onEventsClick={openEvents}
        onHoursClick={openHours}
        lang={lang} 
        onLangChange={setLang}
        activePage={activePage}
        onPageChange={handlePageChange}
        isBannerActive={isBannerActive}
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero 
              onBookClick={openModal} 
              onDeliveryClick={openDelivery} 
              onMenuClick={() => handlePageChange('menu')}
              lang={lang} 
            />
            <Accolades lang={lang} />
            <Legacy lang={lang} />
            {/* <Testimonials lang={lang} /> */}
            <InfoHub lang={lang} onBookClick={openModal} />
            <Social lang={lang} />
          </>
        } />
        
        <Route path="/menu" element={
          <div className="pt-24 lg:pt-64">
            <Menu 
              onDeliveryClick={openDelivery} 
              lang={lang} 
            />
          </div>
        } />

        <Route path="/contact" element={
          <div className="pt-24 lg:pt-64">
            <InfoHub 
              onBookClick={openModal} 
              lang={lang} 
            />
            <Social lang={lang} />
          </div>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer lang={lang} onPageChange={handlePageChange} />
      
      <MobileBottomNav 
        onBookClick={openModal} 
        onDeliveryClick={openDelivery} 
        onEventsClick={openEvents}
        onHoursClick={openHours}
        onMenuClick={() => {
          clearOverlays();
          handlePageChange('menu');
        }}
        lang={lang} 
      />

      <FloatingActionButton onClick={openModal} lang={lang} />
      
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} lang={lang} />
      <DeliveryModal isOpen={isDeliveryOpen} onClose={closeDelivery} lang={lang} />
      <EventsModal isOpen={isEventsOpen} onClose={closeEvents} lang={lang} />
      <QuickHours isOpen={isHoursOpen} onClose={closeHours} lang={lang} />
      
      <Maintenance />
    </main>
  );
};

export default App;
