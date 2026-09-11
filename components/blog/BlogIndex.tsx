
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';
import { Language } from '../../translations';

interface Props { lang: Language; onBookClick: () => void; }

interface BlogEntry {
  path: string;
  category: string;
  categoryHK: string;
  title: string;
  titleHK: string;
  desc: string;
  descHK: string;
  image: string;
  readTime: string;
  readTimeHK: string;
}

const BASE_IMG = "https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/";

const BLOGS: BlogEntry[] = [
  {
    path: '/best-neapolitan-pizza-hong-kong',
    category: 'Food Guide',
    categoryHK: '美食指南',
    title: 'Best Neapolitan Pizza in Hong Kong: Why Vincenzo Capuano Is Going Viral',
    titleHK: '香港最佳拿坡里薄餅：Vincenzo Capuano 為何正在爆紅',
    desc: "That pizza with the impossibly tall crust going viral on Instagram? Here's the full story on why it's the best contemporary Neapolitan pizza in Hong Kong right now.",
    descHK: '那個在 Instagram 上爆紅的高麵皮薄餅？這裡是關於為什麼它是目前香港最佳當代拿坡里薄餅的完整故事。',
    image: BASE_IMG + 'detto-fatto-pizza.png',
    readTime: '7 min',
    readTimeHK: '7 分鐘',
  },
  {
    path: '/vincenzo-capuano-hong-kong-review',
    category: 'Review',
    categoryHK: '餐廳評論',
    title: 'Vincenzo Capuano Hong Kong Review: The World Champion Pizza Everyone Is Talking About',
    titleHK: 'Vincenzo Capuano 香港評論：每個人都在談論的世界冠軍薄餅',
    desc: "An honest first-person review after two visits. The dough is genuinely special. What to order, what to skip, and whether the hype is earned.",
    descHK: '兩次到訪後的誠實第一人稱評論。麵糰真的很特別。應點什麼、跳過什麼，以及炒作是否值得。',
    image: BASE_IMG + 'detto-fatto-pizza.png',
    readTime: '8 min',
    readTimeHK: '8 分鐘',
  },
  {
    path: '/best-pizza-restaurants-hong-kong',
    category: 'Top 10',
    categoryHK: '十大名單',
    title: 'Top 10 Best Pizza Restaurants in Hong Kong (2026)',
    titleHK: '2026 香港十大最佳薄餅餐廳',
    desc: "From world champion Neapolitan to Roman-style slices and Japanese fusion pies — the definitive guide to Hong Kong's best pizza right now.",
    descHK: '從世界冠軍拿坡里薄餅到羅馬風格片和日式融合薄餅——目前香港最佳薄餅的權威指南。',
    image: BASE_IMG + 'egg-yolk.png',
    readTime: '9 min',
    readTimeHK: '9 分鐘',
  },
];

export const BlogIndex: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  const T = (en: string, hk: string) => isHK ? hk : en;
  const title = (b: BlogEntry) => isHK ? b.titleHK : b.title;
  const desc  = (b: BlogEntry) => isHK ? b.descHK  : b.desc;
  const cat   = (b: BlogEntry) => isHK ? b.categoryHK : b.category;
  const time  = (b: BlogEntry) => isHK ? b.readTimeHK : b.readTime;

  const [featured, ...rest] = BLOGS;

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="max-w-5xl mx-auto px-6 pt-10 pb-16">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {T('From the Kitchen', '廚房故事')}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-5">
          {T('Stories, Guides & Reviews', '故事、指南與評論')}
        </h1>
        <p className="text-white/50 text-sm font-sans font-light max-w-lg leading-relaxed">
          {T(
            'Everything you need to know about contemporary Neapolitan pizza, Vincenzo Capuano, and dining in Hong Kong.',
            '關於當代拿坡里薄餅、Vincenzo Capuano 及在香港用餐所需了解的一切。'
          )}
        </p>
      </header>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-white/[0.08] mb-16" />
      </div>

      {/* ── Featured Card ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <Link
          to={featured.path}
          className="group flex flex-col md:flex-row bg-surface border border-white/[0.07] overflow-hidden hover:border-white/[0.15] transition-all duration-300"
        >
          {/* Image */}
          <div className="md:w-[55%] aspect-[16/9] md:aspect-auto overflow-hidden" style={{ minHeight: '260px' }}>
            <img
              src={featured.image}
              alt={title(featured)}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
          </div>
          {/* Content */}
          <div className="md:w-[45%] p-8 md:p-12 flex flex-col justify-center">
            <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-5">
              {cat(featured)} · {T('Featured', '精選')}
            </p>
            <h2 className="font-display text-2xl md:text-[1.75rem] text-white leading-snug mb-5">
              {title(featured)}
            </h2>
            <p className="text-white/55 text-sm font-sans font-light leading-relaxed mb-8">
              {desc(featured)}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase flex items-center gap-1.5">
                <Clock size={11} />
                {time(featured)} {T('read', '閱讀')}
              </span>
              <span className="text-gold text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                {T('READ GUIDE', '閱讀指南')} <ChevronRight size={11} />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ── All Stories Grid ────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6">
        <p className="text-white/30 text-[10px] font-bold tracking-[0.35em] uppercase mb-8">
          {T('All Stories', '所有文章')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((blog) => (
            <Link
              key={blog.path}
              to={blog.path}
              className="group bg-surface border border-white/[0.07] overflow-hidden hover:border-white/[0.14] transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={blog.image}
                  alt={title(blog)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
              </div>
              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gold text-[9px] font-bold tracking-[0.35em] uppercase mb-3">
                  {cat(blog)}
                </p>
                <h3 className="font-display text-lg text-white leading-snug mb-3 line-clamp-2">
                  {title(blog)}
                </h3>
                <p className="text-white/45 text-xs font-sans font-light leading-relaxed line-clamp-2 mb-auto">
                  {desc(blog)}
                </p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
                  <span className="text-white/25 text-[10px] tracking-widest uppercase flex items-center gap-1.5 font-sans">
                    <Clock size={10} />
                    {time(blog)}
                  </span>
                  <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-1 group-hover:gap-2.5 transition-all">
                    {T('READ', '閱讀')} <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-20">
        <div className="border-t border-white/[0.08] mb-16" />
        <div className="bg-surface border border-white/[0.07] p-10 text-center">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {T('Experience It in Person', '親身體驗')}
          </p>
          <h2 className="font-display text-3xl text-white mb-4">
            {T('Book Your Table in Wan Chai', '立即在灣仔訂座')}
          </h2>
          <p className="text-white/50 text-sm font-sans font-light mb-8">
            {T(
              'Lee Tung Avenue, GF Unit 01 04 05, Wan Chai · Lunch 12:00–15:00 · Dinner 18:00–23:00',
              'Lee Tung Avenue, GF Unit 01 04 05, 灣仔 · 午市 12:00–15:00 · 晚市 18:00–23:00'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors"
            >
              {T('Reserve a Table', '立即訂座')}
              <ChevronRight size={14} />
            </button>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 hover:text-white transition-colors"
            >
              {T('Explore the Menu', '查看菜單')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
