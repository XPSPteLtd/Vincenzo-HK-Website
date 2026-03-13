
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Signature } from './components/Signature';
import { Menu } from './components/Menu';
import { Location } from './components/Location';
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
import { Language } from './translations';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en';
  }, [lang]);

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
      <Loader isLoading={isLoading} />
      
      <Navbar 
        onBookClick={openModal} 
        onDeliveryClick={openDelivery} 
        onEventsClick={openEvents}
        onHoursClick={openHours}
        lang={lang} 
        onLangChange={setLang} 
      />
      
      <Hero 
        onBookClick={openModal} 
        onDeliveryClick={openDelivery} 
        lang={lang} 
      />
      
      <Signature lang={lang} />
      
      <Testimonials lang={lang} />
      
      <Menu 
        onDeliveryClick={openDelivery} 
        lang={lang} 
      />
      
      <InfoHub lang={lang} />
      
      <Social lang={lang} />
      
      <Location 
        onBookClick={openModal} 
        lang={lang} 
      />
      
      <Footer lang={lang} />
      
      <MobileBottomNav 
        onBookClick={openModal} 
        onDeliveryClick={openDelivery} 
        onEventsClick={openEvents}
        onHoursClick={openHours}
        onMenuClick={clearOverlays}
        lang={lang} 
      />
      
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} lang={lang} />
      <DeliveryModal isOpen={isDeliveryOpen} onClose={closeDelivery} lang={lang} />
      <EventsModal isOpen={isEventsOpen} onClose={closeEvents} lang={lang} />
      <QuickHours isOpen={isHoursOpen} onClose={closeHours} lang={lang} />
      
      <Maintenance />
    </main>
  );
};

export default App;
