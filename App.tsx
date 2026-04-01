
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
import { LocationPage } from './components/LocationPage';
import { ReservationsPage } from './components/ReservationsPage';
import { OurStoryPage } from './components/OurStoryPage';
import { FAQPage } from './components/FAQPage';
import { GroupDiningPage } from './components/GroupDiningPage';
import { WhatIsNeapolitanPizza } from './components/blog/WhatIsNeapolitanPizza';
import { ContemporaryNeapolitanHK } from './components/blog/ContemporaryNeapolitanHK';
import { WhyScissors } from './components/blog/WhyScissors';
import { BestPizzaForSharing } from './components/blog/BestPizzaForSharing';
import { VincenzoStory } from './components/blog/VincenzoStory';
import { Language } from './translations';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { NotFound } from './components/NotFound';

export type Page = 'home' | 'menu' | 'contact';

// SEO metadata per route
const pageMeta: Record<string, { en: { title: string; desc: string }; hk: { title: string; desc: string } }> = {
  '/': {
    en: { title: 'Vincenzo Capuano Hong Kong | Contemporary Neapolitan Pizzeria', desc: "Discover contemporary Neapolitan pizza in Hong Kong by Vincenzo Capuano — rooted in Naples, crafted with heritage, technique, and premium ingredients." },
    hk: { title: 'Vincenzo Capuano | 香港當代拿坡里薄餅冠軍', desc: '在香港灣仔利東街體驗由世界冠軍 Vincenzo Capuano 帶來的當代拿坡里薄餅。' },
  },
  '/menu': {
    en: { title: 'Pizza Menu Hong Kong | Contemporary Neapolitan Pizza | Vincenzo Capuano', desc: 'Explore our contemporary Neapolitan pizza menu in Hong Kong — crafted with premium ingredients, signature crust, and modern Naples-inspired flavour.' },
    hk: { title: '精選菜單 | Vincenzo Capuano 香港', desc: '查看我們的當代拿坡里薄餅精選菜單，包括招牌薄餅、前菜及甜品。' },
  },
  '/contact': {
    en: { title: 'Location & Hours | Vincenzo Capuano Hong Kong', desc: 'Visit us at Lee Tung Avenue, Wan Chai. Check our opening hours, MTR directions, and book your table online.' },
    hk: { title: '位置與營業時間 | Vincenzo Capuano 香港', desc: '前往灣仔利東街門店，查看營業時間及交通資訊。' },
  },
  '/pizza-wan-chai-hong-kong': {
    en: { title: 'Neapolitan Pizza in Wan Chai | Vincenzo Capuano Hong Kong', desc: 'Looking for authentic Neapolitan pizza in Wan Chai, Hong Kong? Discover Vincenzo Capuano — a contemporary pizzeria rooted in Naples and crafted for modern dining.' },
    hk: { title: '灣仔拿坡里薄餅 | Vincenzo Capuano 香港', desc: '在灣仔尋找正宗拿坡里薄餅？探索 Vincenzo Capuano——源自那不勒斯的當代薄餅店。' },
  },
  '/reservations': {
    en: { title: 'Book a Table | Pizza Reservation Hong Kong | Vincenzo Capuano', desc: 'Reserve your table at Vincenzo Capuano Hong Kong for contemporary Neapolitan pizza, date nights, group dining, and authentic Italian hospitality.' },
    hk: { title: '訂座 | 香港薄餅預訂 | Vincenzo Capuano', desc: '在 Vincenzo Capuano 香港預訂餐桌，享用當代拿坡里薄餅、約會晚餐及正宗意式款待。' },
  },
  '/our-story': {
    en: { title: 'Our Story | Vincenzo Capuano Hong Kong | Pizza Chef from Naples', desc: 'Discover the story behind Vincenzo Capuano — a contemporary Neapolitan pizza experience rooted in family tradition, Naples heritage, and modern craftsmanship.' },
    hk: { title: '我們的故事 | Vincenzo Capuano 香港 | 來自那不勒斯的薄餅師傅', desc: '探索 Vincenzo Capuano 背後的故事——植根於家族傳統、那不勒斯遺產和現代工藝的當代拿坡里薄餅體驗。' },
  },
  '/faq': {
    en: { title: 'FAQ | Neapolitan Pizza Hong Kong | Vincenzo Capuano', desc: 'Answers to common questions about our contemporary Neapolitan pizza, reservations, menu, and dining experience in Hong Kong.' },
    hk: { title: '常見問題 | 香港拿坡里薄餅 | Vincenzo Capuano', desc: '關於我們的當代拿坡里薄餅、訂座、菜單及香港用餐體驗的常見問題解答。' },
  },
  '/group-dining': {
    en: { title: 'Group Dining & Private Events | Vincenzo Capuano Hong Kong', desc: 'Host birthdays, celebrations, and group dinners at Vincenzo Capuano Hong Kong — a contemporary Neapolitan pizza destination built for sharing.' },
    hk: { title: '團體用餐及私人活動 | Vincenzo Capuano 香港', desc: '在 Vincenzo Capuano 香港舉辦生日宴、慶祝活動及團體晚餐——專為分享而設的當代拿坡里薄餅目的地。' },
  },
  '/what-is-neapolitan-pizza': {
    en: { title: 'What Is Neapolitan Pizza? | Vincenzo Capuano Hong Kong', desc: 'Learn what makes Neapolitan pizza unique — from its Naples origins to the contemporary evolution pioneered by Vincenzo Capuano.' },
    hk: { title: '什麼是拿坡里薄餅？| Vincenzo Capuano 香港', desc: '了解拿坡里薄餅的獨特之處——從其那不勒斯起源到 Vincenzo Capuano 引領的當代演進。' },
  },
  '/contemporary-neapolitan-pizza-hong-kong': {
    en: { title: 'Contemporary Neapolitan Pizza in Hong Kong | Vincenzo Capuano', desc: 'Why contemporary Neapolitan pizza is finding a place in Hong Kong — and how Vincenzo Capuano is leading that movement in Wan Chai.' },
    hk: { title: '香港當代拿坡里薄餅 | Vincenzo Capuano', desc: '為什麼當代拿坡里薄餅在香港興起——以及 Vincenzo Capuano 如何在灣仔引領這一潮流。' },
  },
  '/why-we-cut-pizza-with-scissors': {
    en: { title: 'Why We Cut Pizza with Scissors | Vincenzo Capuano Hong Kong', desc: 'The golden scissors ritual explained — why cutting Neapolitan pizza with scissors preserves the cloud-like cornicione crust.' },
    hk: { title: '為什麼我們用剪刀切薄餅 | Vincenzo Capuano 香港', desc: '黃金剪刀儀式解析——為什麼用剪刀切拿坡里薄餅能保護如雲朵般的 cornicione 麵皮。' },
  },
  '/best-pizza-for-sharing-hong-kong': {
    en: { title: 'Best Pizza for Sharing in Hong Kong | Vincenzo Capuano', desc: 'Why pizza is one of the best meals for sharing in Hong Kong — and how to make the most of your group dining experience at Vincenzo Capuano Wan Chai.' },
    hk: { title: '香港最佳分享薄餅 | Vincenzo Capuano', desc: '為什麼薄餅是香港最適合分享的美食之一——以及如何在 Vincenzo Capuano 灣仔充分享受團體用餐體驗。' },
  },
  '/vincenzo-capuano-story': {
    en: { title: 'The Vincenzo Capuano Story | Pizza Chef from Naples', desc: 'The story of a third-generation pizza chef from Naples and 2022 World Pizza Champion who brought contemporary Neapolitan pizza to Hong Kong.' },
    hk: { title: 'Vincenzo Capuano 的故事 | 來自那不勒斯的薄餅師傅', desc: 'Vincenzo Capuano 背後的故事——來自那不勒斯的第三代薄餅師傅及 2022 年世界薄餅冠軍，將當代拿坡里薄餅帶到香港。' },
  },
};

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

    const path = location.pathname;
    const meta = pageMeta[path];
    if (meta) {
      const { title, desc } = lang === 'hk' ? meta.hk : meta.en;
      document.title = title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', desc);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', desc);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', `https://vincenzocapuano.hk${path}`);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', `https://vincenzocapuano.hk${path}`);
    }

  }, [lang, location.pathname]);

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
        
        <Route path="/menu/*" element={
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

        {/* SEO Landing Pages */}
        <Route path="/pizza-wan-chai-hong-kong" element={
          <LocationPage lang={lang} onBookClick={openModal} />
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
        onDeliveryClick={openDelivery}
        onEventsClick={openEvents}
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
