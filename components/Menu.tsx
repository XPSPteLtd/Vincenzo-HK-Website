
import React, { useMemo, useEffect, useState } from 'react';
import { menuItems } from '../menuData';
import { Leaf, Flame, Star, ChevronLeft, ChevronRight, SearchX, ShoppingBag, Scissors, Info, Quote } from 'lucide-react';
import { MenuItem } from '../types';
import { SafeImage } from './ui/SafeImage';
import { Language, translations } from '../translations';

interface MenuProps {
  onDeliveryClick?: () => void;
  lang: Language;
}

const getDietaryIcon = (tag: string) => {
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('veg')) return <Leaf size={14} className="text-green-500" />;
  if (lowerTag.includes('spicy')) return <Flame size={14} className="text-red" />;
  return null;
};

const getDietaryDescription = (tag: string, lang: Language) => {
  const t = translations[lang].dietary;
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('veg')) return t.vegetarian;
  if (lowerTag.includes('spicy')) return t.spicy;
  if (lowerTag.includes('nut')) return t.containsNuts;
  return tag;
};

const MenuItemCard: React.FC<{ 
  item: MenuItem; 
  lang: Language; 
  onDeliveryClick?: () => void;
}> = ({ item, lang, onDeliveryClick }) => {
  const t = translations[lang].menu;
  
  const chefNote = lang === 'zh' ? item.chefNoteZh || item.chefNote : item.chefNote;
  const itemName = lang === 'zh' ? item.nameZh || item.name : item.name;
  const itemDesc = lang === 'zh' ? item.descriptionZh || item.description : item.description;

  return (
    <div className="group cursor-pointer flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-4 md:p-5 transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04]">
      {/* Image Container */}
      <div className="aspect-[1/1] overflow-hidden relative mb-5 md:mb-6 bg-[#111] w-full rounded-xl shrink-0">
        <SafeImage 
          src={item.image} 
          alt={itemName} 
          fallbackPrompt={`${item.category}: ${item.name}. Detailed high-end food close-up.`}
          aspectRatio="1:1"
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-700"
        />
        {item.popular && (
          <div className="absolute top-0 left-0 bg-gold text-charcoal text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-2 z-20 shadow-xl">
            <Star size={10} className="fill-charcoal" />
            {t.signature}
          </div>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDeliveryClick?.();
          }}
          className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-white/10 backdrop-blur-md hover:bg-gold p-2.5 md:p-3 rounded-full border border-white/20 transition-all duration-300 md:opacity-0 group-hover:opacity-100 transform md:translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingBag size={16} className="text-white group-hover:text-charcoal" />
        </button>
      </div>
      
      {/* Content Area */}
      <div className="space-y-3 md:space-y-4 flex-1 flex flex-col">
        <span className="text-gold/80 text-[10px] uppercase tracking-widest font-bold block -mb-1">
          {lang === 'zh' ? (item.categoryZh || item.category) : item.category}
        </span>
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-xl md:text-2xl text-white group-hover:text-gold transition-colors leading-tight">
            {itemName}
          </h3>
          <span className="text-gold font-display text-lg md:text-xl whitespace-nowrap ml-4">{item.price}</span>
        </div>
        
        <div className="h-px w-8 md:w-10 bg-gold/30 group-hover:w-full transition-all duration-700"></div>
        
        <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed font-light">
          {itemDesc}
        </p>

        {/* Chef's Note */}
        {chefNote && (
          <div className="mt-auto pt-4 md:pt-6">
            <div className="bg-charcoal/50 border border-gold/10 rounded-xl p-4 md:p-5 relative overflow-hidden group-hover:border-gold/30 transition-colors">
              <div className="absolute -right-2 -bottom-2 opacity-[0.03] md:opacity-[0.05] text-gold pointer-events-none">
                {/* Fixed: Use responsive CSS classes for size as md:size prop is not supported */}
                <Quote className="w-12 h-12 md:w-14 md:h-14 rotate-180" />
              </div>
              
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                {/* Fixed: Use responsive CSS classes for size as md:size prop is not supported */}
                <Scissors className="w-2.5 h-2.5 md:w-3 md:h-3 text-gold rotate-90" />
                <span className="text-[9px] md:text-[10px] text-gold uppercase font-bold tracking-[0.2em]">
                  {t.chefNote}
                </span>
              </div>
              
              <p className="text-gray-300 text-xs md:text-sm italic font-serif leading-relaxed relative z-10">
                "{chefNote}"
              </p>
              
              <div className="mt-3 md:mt-4 flex items-center gap-2 opacity-30">
                <div className="h-px w-3 md:w-4 bg-white/20"></div>
                <span className="text-[7px] md:text-[8px] uppercase tracking-widest font-bold text-white">Vincenzo C.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Menu: React.FC<MenuProps> = ({ onDeliveryClick, lang }) => {
  const t = translations[lang].menu;
  const items = menuItems;
  const ITEMS_PER_PAGE = 6;
  
  const categories = useMemo(() => {
    return [lang === 'en' ? 'All' : '全部', 'Ala-carte', 'Beverages'];
  }, [lang]);

  const dietaryTags = useMemo(() => {
    const tags = new Set<string>();
    items.forEach(item => {
      item.dietary?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [items]);

  const [activeCategory, setActiveCategory] = useState<string>(lang === 'en' ? 'All' : '全部');
  const [activeDietary, setActiveDietary] = useState<string[]>([]);
  const [showPopular, setShowPopular] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setActiveCategory(lang === 'en' ? 'All' : '全部');
  }, [lang]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const itemCat = item.mainCategory;
      const matchesCategory = activeCategory === 'All' || activeCategory === '全部' || itemCat === activeCategory;
      const matchesDietary = activeDietary.length === 0 || activeDietary.every(tag => item.dietary?.includes(tag));
      const matchesPopular = showPopular ? item.popular === true : true;
      return matchesCategory && matchesDietary && matchesPopular;
    });
  }, [activeCategory, activeDietary, showPopular, items, lang]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeDietary, showPopular]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const displayedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const element = document.getElementById('menu-grid-top');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-surface relative">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Responsive Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-8">
          <div className="w-full md:w-auto">
            <span className="text-gold tracking-[0.2em] md:tracking-mega text-[10px] md:text-xs uppercase font-bold block mb-3 md:mb-4">{t.tasteOfNapoli}</span>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase leading-tight md:leading-none">{t.selectedWorks}</h2>
          </div>
          
          {/* Horizontal Scroll Categories for Mobile */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex flex-nowrap md:flex-wrap gap-x-6 md:gap-x-10 gap-y-4 min-w-max md:min-w-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-all pb-3 border-b-2 font-bold whitespace-nowrap ${
                    activeCategory === category ? 'text-white border-gold' : 'text-gray-600 border-transparent hover:text-gray-400'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Filter Bar for Mobile */}
        <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16 overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0" id="menu-grid-top">
          <span className="text-gray-500 text-[10px] uppercase tracking-widest self-center mr-2 shrink-0 font-bold hidden lg:inline">Filter:</span>
          
          <div className="flex flex-nowrap items-center gap-3 min-w-max py-2">
            <button
              onClick={() => setShowPopular(!showPopular)}
              className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-[9px] md:text-[10px] uppercase tracking-wider transition-all font-bold ${
                showPopular ? 'border-gold bg-gold text-charcoal' : 'border-gold/30 text-gold hover:bg-gold/10'
              }`}
            >
              <Star size={12} className={showPopular ? "fill-charcoal" : "fill-gold"} />
              {t.popular}
            </button>

            {dietaryTags.map((tag) => (
              <div key={tag} className="relative group/diet">
                <button
                  onClick={() => setActiveDietary(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
                  className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-[9px] md:text-[10px] uppercase tracking-wider transition-all font-bold ${
                    activeDietary.includes(tag) ? 'border-white bg-white text-charcoal' : 'border-white/10 text-gray-500 hover:text-white'
                  }`}
                >
                  {getDietaryIcon(tag)}
                  {tag}
                </button>
                
                {/* Tooltip - Hide on smaller screens to prevent layout issues */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3.5 bg-charcoal/95 backdrop-blur-md border border-gold/30 text-white text-[10px] whitespace-nowrap opacity-0 group-hover/diet:opacity-100 pointer-events-none transition-all duration-300 z-50 rounded-xl shadow-2xl flex flex-col items-center min-w-[220px] text-center hidden lg:flex">
                  <span className="text-gold font-bold mb-2 flex items-center gap-2 tracking-widest">
                    <Info size={12} /> {translations[lang].dietary.info}
                  </span>
                  <span className="font-light italic whitespace-normal leading-relaxed">
                    {getDietaryDescription(tag, lang)}
                  </span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-charcoal border-b border-r border-gold/30 rotate-45 -mt-1.5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <div className="min-h-[600px] flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-16 flex-1">
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <div key={item.id}>
                  <MenuItemCard 
                    item={item} 
                    lang={lang} 
                    onDeliveryClick={onDeliveryClick} 
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full py-24 md:py-32 text-center">
                  <SearchX className="w-12 h-12 md:w-16 md:h-16 text-gray-700 mx-auto mb-6 md:mb-8" strokeWidth={1} />
                  <h3 className="text-white font-serif text-2xl md:text-3xl mb-4 italic">{t.noItems}</h3>
                  <button 
                    onClick={() => {
                      setActiveCategory(lang === 'en' ? 'All' : '全部');
                      setActiveDietary([]);
                      setShowPopular(false);
                    }}
                    className="text-gold text-[10px] font-bold uppercase tracking-mega hover:text-white transition-colors"
                  >
                    Clear All Filters
                  </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 md:mt-20 flex justify-center items-center gap-8 md:gap-10 border-t border-white/5 pt-12 md:pt-16">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-4 md:p-5 rounded-full border border-white/10 text-white disabled:opacity-10 hover:border-gold hover:text-gold transition-all duration-300"
              >
                {/* Fixed: Use responsive CSS classes for size as md:size prop is not supported */}
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="flex flex-col items-center">
                <span className="text-gold font-display text-xl md:text-2xl tracking-widest">{currentPage} / {totalPages}</span>
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-4 md:p-5 rounded-full border border-white/10 text-white disabled:opacity-10 hover:border-gold hover:text-gold transition-all duration-300"
              >
                {/* Fixed: Use responsive CSS classes for size as md:size prop is not supported */}
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
