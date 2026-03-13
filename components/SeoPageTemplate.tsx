import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ReservationModal } from './ReservationModal';
import { DeliveryModal } from './DeliveryModal';
import { EventsModal } from './EventsModal';
import { QuickHours } from './QuickHours';
import { MobileBottomNav } from './MobileBottomNav';
import { Language } from '../translations';
import { SEOArticle } from './seoData';

interface Props {
  article: SEOArticle;
}

export const SeoPageTemplate: React.FC<Props> = ({ article }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved as Language) || 'en';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en';
  }, [lang]);

  const clearOverlays = () => {
    setIsModalOpen(false);
    setIsDeliveryOpen(false);
    setIsEventsOpen(false);
    setIsHoursOpen(false);
  };

  return (
    <main className="bg-charcoal min-h-screen text-white selection:bg-gold selection:text-charcoal relative pb-20 md:pb-0 font-sans">
      <Navbar 
        onBookClick={() => { clearOverlays(); setIsModalOpen(true); }} 
        onDeliveryClick={() => { clearOverlays(); setIsDeliveryOpen(true); }} 
        onEventsClick={() => { clearOverlays(); setIsEventsOpen(true); }}
        onHoursClick={() => { clearOverlays(); setIsHoursOpen(true); }}
        lang={lang} 
        onLangChange={setLang} 
      />
      
      <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wider text-white mb-12 border-b border-white/10 pb-8">
          {article.title}
        </h1>
        
        <div className="space-y-10">
          {article.blocks.map((block, index) => {
            if (block.type === 'heading') {
              const fontSize = block.level === 1 ? 'text-3xl md:text-4xl' : 
                               block.level === 2 ? 'text-2xl md:text-3xl' : 
                               'text-xl md:text-2xl';
              
              const className = `${fontSize} font-display uppercase text-gold mt-12 mb-6 tracking-wide`;

              if (block.level === 1) return <h2 key={index} className={className}>{block.content}</h2>;
              if (block.level === 2) return <h3 key={index} className={className}>{block.content}</h3>;
              if (block.level === 3) return <h4 key={index} className={className}>{block.content}</h4>;
              return <h5 key={index} className={className}>{block.content}</h5>;
            }
            
            switch (block.type) {
              case 'text':
                return (
                  <p key={index} className="text-gray-400 font-light text-lg leading-relaxed md:text-xl">
                    {block.content}
                  </p>
                );
              case 'image':
                return (
                  <div key={index} className="my-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img 
                      src={block.src} 
                      alt={block.alt} 
                      className="w-full h-auto object-cover max-h-[600px]"
                      loading="lazy"
                    />
                    {block.alt && block.alt !== article.title && (
                      <div className="p-4 bg-surface/50 text-gray-500 text-sm italic">
                        {block.alt}
                      </div>
                    )}
                  </div>
                );
              case 'list':
                const ListTag = block.ordered ? 'ol' : 'ul';
                return (
                  <ListTag key={index} className={`space-y-4 text-gray-400 font-light text-lg md:text-xl ${block.ordered ? 'list-decimal ml-6' : 'list-disc ml-6'}`}>
                    {block.items.map((item, i) => (
                      <li key={i} className="pl-2">{item}</li>
                    ))}
                  </ListTag>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>

      <Footer lang={lang} />
      
      <MobileBottomNav 
        onBookClick={() => { clearOverlays(); setIsModalOpen(true); }} 
        onDeliveryClick={() => { clearOverlays(); setIsDeliveryOpen(true); }} 
        onEventsClick={() => { clearOverlays(); setIsEventsOpen(true); }}
        onHoursClick={() => { clearOverlays(); setIsHoursOpen(true); }}
        onMenuClick={clearOverlays}
        lang={lang} 
      />
      
      <ReservationModal isOpen={isModalOpen} onClose={clearOverlays} lang={lang} />
      <DeliveryModal isOpen={isDeliveryOpen} onClose={clearOverlays} lang={lang} />
      <EventsModal isOpen={isEventsOpen} onClose={clearOverlays} lang={lang} />
      <QuickHours isOpen={isHoursOpen} onClose={clearOverlays} lang={lang} />
    </main>
  );
};
