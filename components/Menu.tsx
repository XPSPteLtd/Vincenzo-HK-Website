
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

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
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
    <div className="group cursor-pointer flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-5 transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04] gap-3 md:gap-0">
      
      {/* Square image for all sizes now that we have 2 columns */}
      <div className="w-full aspect-square overflow-hidden relative bg-[#111] rounded-lg md:rounded-xl shrink-0">
        <SafeImage 
          src={item.image} 
          alt={itemName} 
          fallbackPrompt={`${item.category}: ${item.name}. Detailed high-end food close-up.`}
          aspectRatio="1:1"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {item.popular && (
          <div className="absolute top-0 left-0 bg-gold text-charcoal text-[7px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-4 py-1 md:py-2 flex items-center gap-1 z-20 shadow-xl">
            <Star size={8} className="fill-charcoal md:w-2.5 md:h-2.5" />
            <span className="md:inline">{t.signature}</span>
          </div>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDeliveryClick?.();
          }}
          className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white/10 backdrop-blur-md hover:bg-gold p-1.5 md:p-3 rounded-full border border-white/20 transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100 transform md:translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingBag size={12} className="text-white group-hover:text-charcoal md:w-4 md:h-4" />
        </button>
      </div>
      
      {/* Content Area */}
<<<<<<< Updated upstream
      <div className="space-y-3 md:space-y-4 flex-1 flex flex-col">
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
=======
      <div className="flex-1 flex flex-col justify-center md:mt-6">
        <div className="mb-1 md:mb-4">
          <div className="flex justify-between items-start mb-0.5 md:mb-4">
            <h3 className="font-sans uppercase text-[13px] sm:text-[15px] md:text-2xl font-bold text-white group-hover:text-gold transition-colors leading-tight">
              {itemName}
            </h3>
          </div>
          <div className="h-px w-6 md:w-10 bg-gold/30 group-hover:w-full transition-all duration-700 mb-1.5 md:mb-4"></div>
        </div>
        
        <div className="flex-1">
          <p className="text-gray-400 text-[10px] sm:text-xs md:text-[15px] leading-relaxed font-light line-clamp-2 md:line-clamp-none">
            {itemDesc}
          </p>
        </div>
>>>>>>> Stashed changes

        {/* Collapsible Chef's Note - Mobile Focus */}
        {chefNote && (
<<<<<<< Updated upstream
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
=======
          <div className="mt-2.5 md:mt-6">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsNoteOpen(!isNoteOpen); }}
              className="md:hidden w-full py-1 text-[7px] uppercase font-bold tracking-widest text-gold/60 border border-gold/10 rounded-md flex items-center justify-between px-2 hover:bg-gold/5"
            >
              <span className="flex items-center gap-1.5">
                <Scissors className="w-2.5 h-2.5 text-gold/40 rotate-90" />
                {t.chefNote}
              </span>
              <span className="text-[10px] font-light">{isNoteOpen ? '−' : '+'}</span>
            </button>
            
            <div className={`transition-all duration-500 overflow-hidden ${isNoteOpen ? 'max-h-[500px] mt-2 opacity-100' : 'max-h-0 md:max-h-none opacity-0 md:opacity-100'}`}>
              <div className="bg-white/[0.03] border border-gold/20 rounded-xl md:rounded-2xl p-3.5 md:p-6 relative overflow-hidden group-hover:border-gold/40 transition-colors shadow-inner">
                <div className="absolute -right-2 -bottom-2 opacity-[0.05] text-gold pointer-events-none">
                  <Quote className="w-10 h-10 md:w-20 md:h-20 rotate-180" />
                </div>
                
                <div className="hidden md:flex items-center gap-3 mb-4">
                  <div className="p-1.5 bg-gold/10 rounded-lg">
                    <Scissors className="w-4 h-4 text-gold rotate-90" />
                  </div>
                  <span className="text-[10px] text-gold uppercase font-bold tracking-[0.2em]">
                    {t.chefNote}
                  </span>
                </div>
                
                <p className="text-white text-[10px] sm:text-[11px] md:text-sm italic font-sans capitalize leading-relaxed relative z-10 drop-shadow-sm">
                  "{chefNote}"
                </p>
                
                <div className="mt-3 md:mt-5 flex items-center gap-2 md:gap-3">
                  <div className="h-px w-4 md:w-6 bg-gold/30"></div>
                  <span className="text-[7px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-gold/60">Vincenzo Capuano</span>
                </div>
>>>>>>> Stashed changes
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

<<<<<<< Updated upstream
=======
   const BeverageCard: React.FC<{ 
    item: MenuItem; 
    lang: Language; 
  }> = ({ item, lang }) => {
    const itemName = lang !== 'en' ? item.nameZh || item.name : item.name;
    const itemDesc = lang !== 'en' ? item.descriptionZh || item.description : item.description;

  return (
    <div className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-8 transition-all duration-500 hover:border-gold/20 hover:bg-white/[0.04] hover:shadow-2xl overflow-hidden min-h-[320px] md:min-h-[400px]">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="font-sans uppercase text-2xl md:text-4xl font-bold text-white group-hover:text-gold transition-colors leading-tight mb-3 md:mb-4 drop-shadow-md">
          {itemName}
        </h3>

        {/* Alcohol Tag */}
        {item.alcohol !== undefined && (
          <div className="mb-4 md:mb-6">
            <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 border border-blue-500/30 text-blue-400 text-[8px] md:text-xs font-bold uppercase tracking-widest rounded bg-blue-500/5">
              {item.alcohol ? (lang !== 'en' ? '含有酒精' : 'CONTAINS ALCOHOL') : (lang !== 'en' ? '不含酒精' : 'NON-ALCOHOLIC')}
            </span>
          </div>
        )}

        {/* Flavor Profiles */}
        {item.profiles && item.profiles.length > 0 && (
          <div className="flex flex-wrap gap-x-2 md:gap-x-3 gap-y-1.5 md:gap-y-2 mb-4 md:mb-6">
            {item.profiles.map((profile, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[8px] md:text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                  {profile}
                </span>
                {idx < item.profiles.length - 1 && <span className="text-gray-700 font-bold">•</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-lg italic font-sans capitalize leading-relaxed mb-6 md:mb-8 drop-shadow-sm line-clamp-3">
          "{itemDesc.replace(/Glass \$/g, 'G $').replace(/Bottle \$/g, 'B $')}"
        </p>

        {/* Ingredients */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="mt-auto pt-4 md:pt-6 border-l-2 border-gold/40 pl-4 md:pl-5">
            <p className="text-[8px] md:text-xs font-bold tracking-widest text-gold/80 uppercase flex flex-wrap gap-1.5 md:gap-2 leading-loose">
              {item.ingredients.join(' | ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

>>>>>>> Stashed changes
export const Menu: React.FC<MenuProps> = ({ onDeliveryClick, lang }) => {
  const t = translations[lang].menu;
  const items = menuItems;
  const ITEMS_PER_PAGE = 6;
  
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(items.map(item => lang === 'zh' ? item.categoryZh || item.category : item.category)));
    return [lang === 'en' ? 'All' : '全部', ...uniqueCats];
  }, [items, lang]);

  const dietaryTags = useMemo(() => {
    const tags = new Set<string>();
    items.forEach(item => {
      item.dietary?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [items]);

<<<<<<< Updated upstream
  const [activeCategory, setActiveCategory] = useState<string>(lang === 'en' ? 'All' : '全部');
=======
  const beverageTags = ['Alcoholic', 'Non-Alcoholic', 'Refreshing', 'Strong'];

  const navigate = useNavigate();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState<string>(() => {
    const p = location.pathname.toLowerCase();
    if (p.includes('alacarte') || p.includes('ala-carte')) return 'Ala-carte';
    if (p.includes('beverage')) return 'Beverages';
    return lang === 'en' ? 'All' : (lang === 'hk' ? '全部' : '全部');
  });

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    setActiveCategory(lang === 'en' ? 'All' : '全部');
  }, [lang]);
=======
    const p = location.pathname.toLowerCase();
    if (p.includes('alacarte') || p.includes('ala-carte')) setActiveCategory('Ala-carte');
    else if (p.includes('beverage')) setActiveCategory('Beverages');
    else setActiveCategory(lang === 'en' ? 'All' : '全部');
    setActiveSection('all');
  }, [lang, location.pathname]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setActiveSection('all');
    setActiveDietary([]);
    setCurrentPage(1);
    if (category === 'Ala-carte') navigate('/menu/alacarte');
    else if (category === 'Beverages') navigate('/menu/beverages');
    else navigate('/menu');
  };
>>>>>>> Stashed changes

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const itemCat = lang === 'zh' ? item.categoryZh || item.category : item.category;
      const matchesCategory = activeCategory === 'All' || activeCategory === '全部' || itemCat === activeCategory;
      
      let matchesDietary = true;
      if (activeDietary.length > 0) {
        if (itemCat === 'Beverages') {
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
      const matchesSection = activeSection === 'all' ||
        (activeSection === 'pizza' && item.category.toLowerCase().startsWith('pizza')) ||
        (activeSection === 'starters' && item.category === 'The Starters') ||
        (activeSection === 'salads' && item.category === 'The Salads') ||
        (activeSection === 'mains' && item.category === 'The Pastas & Mains') ||
        (activeSection === 'sweets' && item.category === 'The Sweets');
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
          <span className="text-gray-500 text-[10px] uppercase tracking-widest self-center mr-2 shrink-0 font-bold hidden sm:inline">Filter:</span>
          
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
                  {tag}
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
<<<<<<< Updated upstream
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
=======
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
                      {category}
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
                        setActiveCategory(lang === 'en' ? 'All' : '全部');
                        setActiveDietary([]);
                        setActiveSection('all');
                        setShowPopular(false);
                      }}
                      className="text-gold text-[10px] font-bold uppercase tracking-mega hover:text-white transition-colors"
                    >
                      Clear All Filters
                    </button>
                </div>
              )}
            </div>
          )}
>>>>>>> Stashed changes

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
