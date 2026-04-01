
import React, { useMemo, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { menuItems } from '../menuData';
import { Leaf, Flame, Star, ChevronLeft, ChevronRight, SearchX, ShoppingBag, Scissors, Info } from 'lucide-react';
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
  if (lowerTag.includes('alcohol')) return <Flame size={14} className="text-blue-400" />;
  return null;
};

const getDietaryDescription = (tag: string, lang: Language) => {
  const t = translations[lang].dietary as any;
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('veg')) return t.vegetarian || tag;
  if (lowerTag.includes('spicy')) return t.spicy || tag;
  if (lowerTag.includes('nut')) return t.containsNuts || tag;
  if (lowerTag === 'alcoholic') return t.alcoholic || tag;
  if (lowerTag === 'non-alcoholic') return t.nonAlcoholic || tag;
  if (tag === 'Refreshing') return t.refreshing || tag;
  if (tag === 'Strong') return t.strong || tag;
  return tag;
};

const formatTitle = (name: string) => {
  if (!name) return "";
  return name.toUpperCase();
};

const getChefNote = (item: MenuItem, lang: Language) => {
  if (lang !== 'en' && (item.chefNoteZh || item.chefNote)) return item.chefNoteZh || item.chefNote;
  if (lang === 'en' && item.chefNote) return item.chefNote;

  const notes: Record<string, string> = {
    "Beverages": "Expertly curated to pair perfectly with our specialized dough and robust flavors."
  };

  const uniqueNotes = [
    "Vivere di pizza è meraviglioso. This is my life, my passion, in one bite.",
    "Contemporary pizza is an emotion. We don't just cook; we create feelings.",
    "Observe the cornicione—it's like a cloud. Light, airy, and full of Neapolitan soul.",
    "I cut this with my golden scissors specifically to protect these air pockets.",
    "A tribute to my roots in Naples. This is the flavor of my childhood.",
    "We broke the tradition to achieve a new level of excellence. This is the future.",
    "Simplicity is the ultimate complexity. Three ingredients, a thousand stories.",
    "My dough is a living thing. It needs 36 hours of love before it reaches your plate.",
    "Born in the shadow of Vesuvius, perfected for the heart of Hong Kong.",
    "Every ingredient is hand-picked. If it's not the best of Italy, it's not on my pizza.",
    "This dish is a hug from Naples. Warm, authentic, and unforgettable.",
    "081—the code of my city, the rhythm of my heart. Taste the tradition.",
    "We use Nuvola Super flour because my pizza should feel like it's defying gravity.",
    "Don't just eat. Experience the ritual. The scissors, the scrocchia, the joy.",
    "A bridge between generations. My grandfather's hands, my contemporary vision.",
    "The perfect hydration is a secret, but the perfect taste is for everyone.",
    "Contemporary Neapolitan at its finest—the evolution of the craft.",
    "If you are normal, people forget. If you move people with emotion, you are eternal.",
    "Naples is not a place, it's a feeling. I put that feeling inside this crust.",
    "Crispy on the outside, a cloud on the inside. The Capuano signature."
  ];

  if (item.mainCategory === 'Beverages') return notes.Beverages;

  // Generate a distinct index based on item.id characters to ensure it's always the same for the item
  let hash = 0;
  for (let i = 0; i < item.id.length; i++) {
    hash = item.id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % uniqueNotes.length;
  
  return uniqueNotes[index];
};

const MenuItemCard: React.FC<{
  item: MenuItem;
  lang: Language;
  onDeliveryClick?: () => void;
}> = ({ item, lang, onDeliveryClick }) => {
  const t = translations[lang].menu;
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  const resolvedNote = getChefNote(item, lang);
  const chefNote = lang !== 'en' ? item.chefNoteZh || resolvedNote : resolvedNote;
  const itemName = lang !== 'en' ? item.nameZh || item.name : item.name;
  const itemDesc = lang !== 'en' ? item.descriptionZh || item.description : item.description;

  return (
    <div className="group flex flex-col h-full bg-white/[0.02] border border-white/[0.06] rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04] gap-3 md:gap-0">

      {/* Image */}
      <div className="w-full aspect-square overflow-hidden relative bg-[#111] rounded-lg md:rounded-xl shrink-0">
        <SafeImage
          src={item.image}
          alt={itemName}
          fallbackPrompt={`${item.category}: ${item.name}. Detailed high-end food close-up.`}
          aspectRatio="1:1"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {item.popular && (
          <div className="absolute top-0 left-0 bg-gold text-charcoal text-[7px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-4 py-1 md:py-2 flex items-center gap-1 z-20">
            <Star size={8} className="fill-charcoal md:w-2.5 md:h-2.5" />
            {t.signature}
          </div>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onDeliveryClick?.(); }}
          className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-white/10 backdrop-blur-md hover:bg-gold p-1.5 md:p-2.5 rounded-full border border-white/20 transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100 md:translate-y-1 group-hover:translate-y-0"
        >
          <ShoppingBag size={11} className="text-white group-hover:text-charcoal md:w-3.5 md:h-3.5" />
        </button>
      </div>

      {/* Text content */}
      <div className="flex-1 flex flex-col md:mt-5">

        {/* Name + divider */}
        <h3 className="font-sans uppercase text-[13px] sm:text-[15px] md:text-xl font-bold text-white group-hover:text-gold transition-colors leading-tight mb-1.5 md:mb-3">
          {itemName}
        </h3>
        <div className="h-px w-6 bg-gold/30 group-hover:w-full transition-all duration-700 mb-2 md:mb-3" />

        {/* Description */}
        <p className="text-white/60 text-xs sm:text-sm md:text-[15px] leading-relaxed font-light line-clamp-2 md:line-clamp-none mb-3 md:mb-5">
          {itemDesc}
        </p>

        {/* ── Chef's Note ─────────────────────────────── */}
        {chefNote && (
          <>
            {/* MOBILE — collapsible */}
            <div className="md:hidden mt-auto">
              <button
                onClick={(e: React.MouseEvent) => { e.stopPropagation(); setIsNoteOpen((o: boolean) => !o); }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-[#2a4a2e]/60 hover:border-[#3d6b42]/80 hover:bg-[#1a2e1c]/40 transition-all duration-300"
              >
                <span className="flex items-center gap-2 text-[8px] uppercase font-bold tracking-widest text-[#6aab6e]">
                  <Scissors className="w-2.5 h-2.5 rotate-90" />
                  {t.chefNote}
                </span>
                <span className={`text-[#6aab6e]/60 text-sm leading-none transition-transform duration-300 ${isNoteOpen ? 'rotate-45' : ''}`}>+</span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isNoteOpen ? 'max-h-64 mt-1.5' : 'max-h-0'}`}>
                <div className="bg-[#0f1f11] border border-[#2a4a2e]/60 rounded-b-lg px-3 pt-3 pb-3.5 relative overflow-hidden">
                  <Scissors className="absolute -right-1 -bottom-1 w-7 h-7 text-[#2a4a2e]/40 rotate-90" />
                  <p className="text-[#a8d4ab] text-[10px] font-sans leading-relaxed">
                    "{chefNote}"
                  </p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="h-px w-4 bg-[#3d6b42]/50" />
                    <span className="text-[7px] uppercase tracking-[0.3em] font-bold text-[#6aab6e]/50">Vincenzo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DESKTOP — always visible */}
            <div className="hidden md:block mt-auto">
              <div className="relative bg-[#0d1f10] border border-[#253d28]/70 rounded-xl overflow-hidden group-hover:border-[#3d6b42]/60 transition-colors duration-500">

                {/* Subtle ruled lines */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 22px, rgba(106,171,110,0.04) 22px, rgba(106,171,110,0.04) 23px)', backgroundPositionY: '38px' }}
                />

                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-[#3d6b42]/60 via-[#6aab6e]/30 to-transparent" />

                <div className="relative z-10 p-4 pl-5">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <Scissors className="w-3 h-3 text-[#6aab6e]/70 rotate-90 shrink-0" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#6aab6e]/70">
                      {lang === 'hk' ? '主廚筆記' : "Chef's Note"}
                    </span>
                  </div>

                  {/* Note text */}
                  <p className="text-[#a8d4ab] text-[11px] leading-[1.8] font-sans">
                    "{chefNote}"
                  </p>

                  {/* Signature */}
                  <div className="mt-3 flex items-center gap-2.5">
                    <span className="h-px w-5 bg-[#3d6b42]/50" />
                    <span className="font-display italic text-[#6aab6e]/60 text-[12px] leading-none">
                      Vincenzo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const BeverageCard: React.FC<{
  item: MenuItem;
  lang: Language;
}> = ({ item, lang }) => {
  const itemName = lang !== 'en' ? item.nameZh || item.name : item.name;
  const itemDesc = lang !== 'en' ? item.descriptionZh || item.description : item.description;

  return (
    <div className="group flex flex-col h-full bg-white/[0.02] border border-white/[0.06] rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04]">

      {/* Text content */}
      <div className="flex-1 flex flex-col">

        {/* Name + divider */}
        <h3 className="font-sans uppercase text-[13px] sm:text-[15px] md:text-xl font-bold text-white group-hover:text-gold transition-colors leading-tight mb-1.5 md:mb-3">
          {itemName}
        </h3>
        <div className="h-px w-6 bg-gold/30 group-hover:w-full transition-all duration-700 mb-2 md:mb-3" />

        {/* Alcohol / profile tags */}
        <div className="flex flex-wrap gap-1.5 mb-2 md:mb-3">
          {item.alcohol !== undefined && (
            <span className={`px-2 py-0.5 border text-[7px] md:text-[9px] font-bold uppercase tracking-widest rounded ${item.alcohol ? 'border-red/40 text-red/80 bg-red/[0.06]' : 'border-green-500/30 text-green-400/80 bg-green-500/[0.05]'}`}>
              {item.alcohol ? (lang !== 'en' ? '含酒精' : 'Alcoholic') : (lang !== 'en' ? '無酒精' : 'Non-Alcoholic')}
            </span>
          )}
          {item.profiles?.map((profile: string, idx: number) => {
            const profileColors = [
              'border-gold/30 text-gold/70 bg-gold/[0.05]',
              'border-blue-400/30 text-blue-300/70 bg-blue-400/[0.05]',
              'border-purple-400/30 text-purple-300/70 bg-purple-400/[0.05]',
              'border-amber-400/30 text-amber-300/70 bg-amber-400/[0.05]',
              'border-cyan-400/30 text-cyan-300/70 bg-cyan-400/[0.05]',
            ];
            return (
              <span key={idx} className={`px-2 py-0.5 border text-[7px] md:text-[9px] font-bold uppercase tracking-widest rounded ${profileColors[idx % profileColors.length]}`}>
                {profile}
              </span>
            );
          })}
        </div>

        {/* Description */}
        <p className="text-white/60 text-xs sm:text-sm md:text-[15px] leading-relaxed font-light line-clamp-2 md:line-clamp-none mb-3 md:mb-5">
          {itemDesc.replace(/Glass \$/g, 'G $').replace(/Bottle \$/g, 'B $')}
        </p>

        {/* Ingredients */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="mt-auto pt-3 md:pt-4 border-t border-white/[0.06]">
            <p className="text-[9px] md:text-[10px] font-bold tracking-widest text-white/25 uppercase">
              {item.ingredients.join(' · ')}
            </p>
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
    return Array.from(new Set(items.map(item => item.mainCategory || 'Ala-carte')));
  }, [items]);

  const getCategoryLabel = (cat: string) => {
    if (lang === 'hk') {
      if (cat === 'Ala-carte') return '單點菜單';
      if (cat === 'Beverages') return '飲品';
    }
    return cat;
  };

  const getDietaryLabel = (tag: string) => {
    if (lang === 'hk') {
      const map: Record<string, string> = {
        'Vegetarian': '素食', 'Vegan': '純素', 'Spicy': '辛辣', 'Contains Nuts': '含堅果',
        'Alcoholic': '含酒精', 'Non-Alcoholic': '無酒精', 'Refreshing': '清新', 'Strong': '濃郁',
      };
      return map[tag] || tag;
    }
    return tag;
  };

  const getBeverageCategoryLabel = (cat: string) => {
    if (lang === 'hk') {
      const map: Record<string, string> = {
        'Cocktails': '雞尾酒', 'Whiskies': '威士忌', 'Gin': '琴酒', 'Vodka': '伏特加',
        'Rum': '冧酒', 'Agave': '龍舌蘭', 'Bitters': '苦酒', 'Beer': '啤酒',
        'Non-Alcoholic': '無酒精飲品', 'Coffee': '咖啡', 'Tea': '茶',
        'Wine — Prosecco': '氣泡酒', 'Wine — Champagne': '香檳',
        'Wine — Rosato': '玫瑰紅酒', 'Wine — House White': '精選白酒',
        'Wine — House Red': '精選紅酒', 'Wine — White': '白酒', 'Wine — Red': '紅酒',
      };
      return map[cat] || cat;
    }
    return cat;
  };

  const dietaryTags = useMemo(() => {
    const tags = new Set<string>();
    items.forEach(item => {
      item.dietary?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [items]);

  const beverageTags = ['Alcoholic', 'Non-Alcoholic', 'Refreshing', 'Strong'];

  const navigate = useNavigate();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState<string>(() => {
    const p = location.pathname.toLowerCase();
    if (p.includes('alacarte') || p.includes('ala-carte')) return 'Ala-carte';
    if (p.includes('beverage')) return 'Beverages';
    return 'Ala-carte';
  });

  const [activeDietary, setActiveDietary] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>('all');
  const [showPopular, setShowPopular] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const SECTIONS = [
    { label: lang === 'en' ? 'All' : '全部', value: 'all' },
    { label: lang === 'en' ? 'Pizzas' : '薄餅', value: 'pizza' },
    { label: lang === 'en' ? 'Starters' : '前菜', value: 'starters' },
    { label: lang === 'en' ? 'Salads' : '沙律', value: 'salads' },
    { label: lang === 'en' ? 'Mains' : '主菜', value: 'mains' },
    { label: lang === 'en' ? 'Sweets' : '甜品', value: 'sweets' },
  ];

  useEffect(() => {
    const p = location.pathname.toLowerCase();
    if (p.includes('alacarte') || p.includes('ala-carte')) setActiveCategory('Ala-carte');
    else if (p.includes('beverage')) setActiveCategory('Beverages');
    else setActiveCategory('Ala-carte');
    setActiveSection('all');
  }, [lang, location.pathname]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveSection('all');
    setActiveDietary([]);
    setCurrentPage(1);
    if (category === 'Beverages') navigate('/menu/beverages');
    else navigate('/menu/alacarte');
  };

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const itemMainCat = item.mainCategory || 'Ala-carte';
      const matchesCategory = itemMainCat === activeCategory;
      
      let matchesDietary = true;
      if (activeDietary.length > 0) {
        if (itemMainCat === 'Beverages') {
          const alcoholTags = activeDietary.filter(t => t === 'Alcoholic' || t === 'Non-Alcoholic');
          const profileTags = activeDietary.filter(t => t !== 'Alcoholic' && t !== 'Non-Alcoholic');
          
          const alcoholMatch = alcoholTags.length === 0 || alcoholTags.some(tag => {
            if (tag === 'Alcoholic') return item.alcohol === true;
            if (tag === 'Non-Alcoholic') return item.alcohol === false;
            return false;
          });
          
          const profileMatch = profileTags.length === 0 || profileTags.every(tag => 
            item.profiles?.some(p => p.toLowerCase() === tag.toLowerCase())
          );
          
          matchesDietary = alcoholMatch && profileMatch;
        } else {
          matchesDietary = activeDietary.every(tag => item.dietary?.includes(tag));
        }
      }

      const matchesPopular = showPopular ? item.popular === true : true;
      const lowerCat = item.category.toLowerCase();
      const matchesSection = activeSection === 'all' ||
        (activeSection === 'pizza' && lowerCat.includes('pizza')) ||
        (activeSection === 'starters' && lowerCat.includes('starter')) ||
        (activeSection === 'salads' && lowerCat.includes('salad')) ||
        (activeSection === 'mains' && lowerCat.includes('main')) ||
        (activeSection === 'sweets' && (lowerCat.includes('sweet') || lowerCat.includes('dessert')));
      return matchesCategory && matchesDietary && matchesPopular && matchesSection;
    });
  }, [activeCategory, activeDietary, activeSection, showPopular, items, lang]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeSection, activeDietary, showPopular]);

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
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight md:leading-none">{t.selectedWorks}</h2>
          </div>
          
          {/* Horizontal Scroll Categories for Mobile */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0">
            <div className="flex flex-nowrap md:flex-wrap gap-x-6 md:gap-x-10 gap-y-4 min-w-max md:min-w-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-all pb-3 border-b-2 font-bold whitespace-nowrap ${
                    activeCategory === category ? 'text-white border-gold' : 'text-gray-600 border-transparent hover:text-gray-400'
                  }`}
                >
                  {getCategoryLabel(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section Filter — only shown for non-Beverages views */}
        {activeCategory !== 'Beverages' && (
          <div className="overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0 mb-8 md:mb-10">
            <div className="flex flex-nowrap gap-2 min-w-max">
              {SECTIONS.map((section) => (
                <button
                  key={section.value}
                  onClick={() => { setActiveSection(section.value); setCurrentPage(1); }}
                  className={`px-5 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all duration-300 border whitespace-nowrap ${
                    activeSection === section.value
                      ? 'bg-gold text-charcoal border-gold'
                      : 'border-white/10 text-gray-500 hover:border-gold/40 hover:text-gray-300'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Horizontal Scroll Filter Bar for Mobile */}
        <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16 overflow-x-auto scrollbar-hide -mx-5 px-5 md:mx-0 md:px-0" id="menu-grid-top">
          <span className="text-gray-500 text-[10px] uppercase tracking-widest self-center mr-2 shrink-0 font-bold hidden sm:inline">{lang === 'hk' ? '篩選：' : 'Filter:'}</span>
          
          <div className="flex flex-nowrap items-center gap-3 min-w-max">
            <button
              onClick={() => setShowPopular(!showPopular)}
              className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-[9px] md:text-[10px] uppercase tracking-wider transition-all font-bold ${
                showPopular ? 'border-gold bg-gold text-charcoal' : 'border-gold/30 text-gold hover:bg-gold/10'
              }`}
            >
              <Star size={12} className={showPopular ? "fill-charcoal" : "fill-gold"} />
              {t.popular}
            </button>

            {(activeCategory === 'Beverages' ? beverageTags : dietaryTags).map((tag) => (
              <div key={tag} className="relative group/diet">
                <button
                  onClick={() => setActiveDietary(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
                  className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full border text-[9px] md:text-[10px] uppercase tracking-wider transition-all font-bold ${
                    activeDietary.includes(tag) ? 'border-white bg-white text-charcoal' : 'border-white/10 text-gray-500 hover:text-white'
                  }`}
                >
                  {getDietaryIcon(tag)}
                  {getDietaryLabel(tag)}
                </button>
                
                {/* Tooltip - Hide on very small screens to prevent layout issues, or use focused tap for info */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-5 py-3.5 bg-charcoal/95 backdrop-blur-md border border-gold/30 text-white text-[10px] whitespace-nowrap opacity-0 group-hover/diet:opacity-100 pointer-events-none transition-all duration-300 z-50 rounded-xl shadow-2xl flex flex-col items-center min-w-[220px] text-center hidden md:flex">
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
          {activeCategory === 'Beverages' ? (
            <div className="space-y-20">
              {Object.entries(
                filteredItems.reduce((acc, item) => {
                  const cat = item.category.replace('Wine — ', '').replace('Pizza — ', '');
                  if (!acc[cat]) acc[cat] = [];
                  acc[cat].push(item);
                  return acc;
                }, {} as Record<string, MenuItem[]>)
              ).map(([category, catItems]: [string, MenuItem[]]) => (
                <div key={category} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                  <div className="flex items-center gap-6 mb-12">
                    <h3 className="text-gold font-sans font-bold text-2xl md:text-3xl uppercase tracking-wider whitespace-nowrap">
                      {getBeverageCategoryLabel(category)}
                    </h3>
                    <div className="h-[2px] w-full bg-gradient-to-r from-gold/40 to-transparent"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-10">
                    {catItems.map((item) => (
                      <div key={item.id} className="h-full">
                        <BeverageCard 
                          item={item} 
                          lang={lang} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-4 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-16 flex-1">
              {displayedItems.length > 0 ? (
                displayedItems.map((item) => (
                  <div key={item.id} className="h-full">
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
                    <h3 className="text-white font-sans font-bold capitalize text-2xl md:text-3xl mb-4 italic">{t.noItems}</h3>
                    <button
                      onClick={() => {
                        setActiveCategory('Ala-carte');
                        setActiveDietary([]);
                        setActiveSection('all');
                        setShowPopular(false);
                      }}
                      className="text-gold text-[10px] font-bold uppercase tracking-mega hover:text-white transition-colors"
                    >
                      {lang === 'hk' ? '清除篩選' : 'Clear All Filters'}
                    </button>
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && activeCategory !== 'Beverages' && (
            <div className="mt-16 md:mt-20 flex justify-center items-center gap-3 md:gap-4 border-t border-white/5 pt-12 md:pt-16 flex-wrap">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-3 md:p-4 rounded-full border border-white/10 text-white disabled:opacity-10 hover:border-gold hover:text-gold transition-all duration-300 shrink-0"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full text-[11px] md:text-xs font-bold transition-all duration-300 border ${
                      currentPage === page
                        ? 'bg-gold text-charcoal border-gold'
                        : 'border-white/10 text-gray-500 hover:border-gold/40 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-3 md:p-4 rounded-full border border-white/10 text-white disabled:opacity-10 hover:border-gold hover:text-gold transition-all duration-300 shrink-0"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
