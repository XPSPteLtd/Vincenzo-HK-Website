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
// import { ReservationModal } from './components/ReservationModal';
import { DeliveryModal } from './components/DeliveryModal';
import { EventsModal } from './components/EventsModal';
import { QuickHours } from './components/QuickHours';
import { Loader } from './components/Loader';
import { Maintenance } from './components/Maintenance';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { FloatingActionButton } from './components/FloatingActionButton';
import { LocationPage } from './components/LocationPage';
import { RestaurantWanchaiPage } from './components/RestaurantWanchaiPage';
import { PizzaNearMePage } from './components/PizzaNearMePage';
import { ReservationsPage } from './components/ReservationsPage';
import { OurStoryPage } from './components/OurStoryPage';
import { FAQPage } from './components/FAQPage';
import { GroupDiningPage } from './components/GroupDiningPage';
import { ContactPage } from './components/ContactPage';
import { WhatIsNeapolitanPizza } from './components/blog/WhatIsNeapolitanPizza';
import { ContemporaryNeapolitanHK } from './components/blog/ContemporaryNeapolitanHK';
import { WhyScissors } from './components/blog/WhyScissors';
import { BestPizzaForSharing } from './components/blog/BestPizzaForSharing';
import { VincenzoStory } from './components/blog/VincenzoStory';
import { Language } from './translations';
import { pageSEO } from './seo-data';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { NotFound } from './components/NotFound';

export type Page = 'home' | 'menu' | 'contact';


const App: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
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
    if (page === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

    // Normalize path to remove trailing slash for SEO matching, but keep original for URL
    const rawPath = location.pathname;
    const path = rawPath.endsWith('/') && rawPath.length > 1 ? rawPath.slice(0, -1) : rawPath;
    const canonicalUrl = window.location.origin + window.location.pathname;

    // Helper for Meta Tags
    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.setAttribute('rel', 'canonical');
      newCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(newCanonical);
    }

    const langs = ['en', 'zh-HK', 'x-default'];
    langs.forEach((langValue) => {
      let alt = document.querySelector(`link[rel="alternate"][hreflang="${langValue}"]`);
      if (!alt) {
        alt = document.createElement('link');
        alt.setAttribute('rel', 'alternate');
        alt.setAttribute('hreflang', langValue);
        document.head.appendChild(alt);
      }
      alt.setAttribute('href', canonicalUrl);
    });

    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'twitter:url', canonicalUrl);

    // 2. ONLY proceed to update explicit title/desc if it exists in our SEO data
    const seo = pageSEO[path];
    if (!seo) return;

    const { title, desc, keywords, image } = lang === 'hk' ? seo.hk : seo.en;

    document.title = title;
    setMeta('name', 'description', desc);
    setMeta('name', 'keywords', keywords);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:site_name', 'Vincenzo Capuano Hong Kong');
    setMeta('property', 'og:type', path.startsWith('/what-is-') || path.startsWith('/contemporary-') || path.startsWith('/why-') || path.startsWith('/best-pizza-for-') || path.startsWith('/vincenzo-') ? 'article' : 'website');
    setMeta('property', 'og:locale', lang === 'hk' ? 'zh_HK' : 'en_HK');
    
    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('property', 'twitter:image', image);
    } else {
      // Default brand image
      const defaultImg = "https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png";
      setMeta('property', 'og:image', defaultImg);
      setMeta('property', 'twitter:image', defaultImg);
    }

    setMeta('property', 'twitter:title', title);
    setMeta('property', 'twitter:description', desc);

    // Inject or remove per-page JSON-LD
    let pageSchema = document.getElementById('page-schema') as HTMLScriptElement | null;
    if (seo.schema) {
      if (!pageSchema) {
        pageSchema = document.createElement('script');
        pageSchema.id = 'page-schema';
        pageSchema.type = 'application/ld+json';
        document.head.appendChild(pageSchema);
      }
      pageSchema.textContent = JSON.stringify(seo.schema, null, 0);
    } else if (pageSchema) {
      pageSchema.remove();
    }
  }, [lang, location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const handleLoad = () => {
      // Small delay to ensure smooth transition after everything is parsed
      setTimeout(() => setIsLoading(false), 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Fallback timer just in case load event fails or takes too long
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const openModal = () => {
    clearOverlays();
    window.open('https://www.sevenrooms.com/explore/vincenzocapuanohk/reservations/create/search/', '_blank', 'noopener,noreferrer');
  };
  
  // const closeModal = () => setIsModalOpen(false);
  

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
    // setIsModalOpen(false);
    setIsEventsOpen(false);
    setIsHoursOpen(false);
  };

  const canonicalUrl = window.location.origin + window.location.pathname;

  return (
    <main className="bg-charcoal min-h-screen text-white selection:bg-gold selection:text-charcoal relative pb-20 md:pb-0">
      <AnnouncementBanner lang={lang} onDismiss={() => setIsBannerActive(false)} isActive={isBannerActive} />
      <Loader isLoading={isLoading} />
      
      <Navbar 
        onBookClick={openModal} 
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
        
        <Route path="/menu/*" element={
          <div className="pt-24 lg:pt-64">
            <Menu 
              lang={lang} 
            />
          </div>
        } />

        <Route path="/contact" element={
          <ContactPage lang={lang} />
        } />

        {/* SEO Landing Pages */}
        <Route path="/pizza-wan-chai-hong-kong" element={
          <LocationPage lang={lang} onBookClick={openModal} />
        } />

        <Route path="/best-restaurant-wan-chai" element={
          <RestaurantWanchaiPage lang={lang} onBookClick={openModal} />
        } />

        <Route path="/pizza-near-me-hong-kong" element={
          <PizzaNearMePage lang={lang} onBookClick={openModal} />
        } />

        <Route path="/reservations" element={
          <ReservationsPage lang={lang} onBookClick={openModal} />
        } />

        <Route path="/our-story" element={
          <OurStoryPage lang={lang} onBookClick={openModal} onMenuClick={() => handlePageChange('menu')} />
        } />

        <Route path="/faq" element={
          <FAQPage lang={lang} onBookClick={openModal} />
        } />

        <Route path="/group-dining" element={
          <GroupDiningPage lang={lang} onBookClick={openModal} />
        } />

        {/* Blog / Editorial */}
        <Route path="/what-is-neapolitan-pizza" element={
          <WhatIsNeapolitanPizza lang={lang} onBookClick={openModal} />
        } />

        <Route path="/contemporary-neapolitan-pizza-hong-kong" element={
          <ContemporaryNeapolitanHK lang={lang} onBookClick={openModal} />
        } />

        <Route path="/why-we-cut-pizza-with-scissors" element={
          <WhyScissors lang={lang} onBookClick={openModal} />
        } />

        <Route path="/best-pizza-for-sharing-hong-kong" element={
          <BestPizzaForSharing lang={lang} onBookClick={openModal} />
        } />

        <Route path="/vincenzo-capuano-story" element={
          <VincenzoStory lang={lang} onBookClick={openModal} />
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer lang={lang} onPageChange={handlePageChange} />
      
      <MobileBottomNav
        onBookClick={openModal}
        onHoursClick={openHours}
        onHomeClick={() => {
          clearOverlays();
          handlePageChange('home');
        }}
        onMenuClick={() => {
          clearOverlays();
          handlePageChange('menu');
        }}
        lang={lang}
      />

      <FloatingActionButton onClick={openModal} lang={lang} />
      
      {/* <ReservationModal isOpen={isModalOpen} onClose={closeModal} lang={lang} /> */}
      <EventsModal isOpen={isEventsOpen} onClose={closeEvents} lang={lang} />
      <QuickHours isOpen={isHoursOpen} onClose={closeHours} lang={lang} />
      
      <Maintenance />
    </main>
  );
};

export default App;
