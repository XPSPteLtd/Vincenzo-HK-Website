
import React from 'react';
import { MapPin, Clock, Phone, Star, ChevronRight, Award, Users, Utensils } from 'lucide-react';
import { Language } from '../translations';

interface Props {
  lang: Language;
  onBookClick: () => void;
}

export const RestaurantWanchaiPage: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  const occasions = [
    {
      en: 'Date Night',
      hk: '浪漫約會',
      en_sub: 'Intimate, atmospheric dining in Wan Chai',
      hk_sub: '灣仔浪漫私密晚餐',
    },
    {
      en: 'Dinner with Friends',
      hk: '朋友聚餐',
      en_sub: 'Pizza built for sharing and conversation',
      hk_sub: '專為分享而設的薄餅體驗',
    },
    {
      en: 'Business Lunch',
      hk: '商務午餐',
      en_sub: 'Refined yet relaxed — every weekday',
      hk_sub: '精緻輕鬆，每個工作日開放',
    },
    {
      en: 'Family Dining',
      hk: '家庭聚餐',
      en_sub: 'A welcoming space for all ages',
      hk_sub: '適合各年齡層的用餐環境',
    },
    {
      en: 'Birthday Celebrations',
      hk: '生日慶祝',
      en_sub: 'Make your occasion memorable',
      hk_sub: '讓您的生日更加難忘',
    },
    {
      en: 'Group Dinners',
      hk: '團體晚餐',
      en_sub: 'Pizza is the perfect group meal',
      hk_sub: '薄餅是最佳團體美食',
    },
  ];

  const awards = [
    {
      en: 'World #13 Pizzeria',
      hk: '世界第 13 名薄餅店',
      en_sub: "Top 50 Pizza — the world's most respected pizza ranking",
      hk_sub: 'Top 50 Pizza — 全球最具公信力薄餅評選',
    },
    {
      en: '2022 World Pizza Champion',
      hk: '2022 年世界薄餅冠軍',
      en_sub: 'Our founder, Vincenzo Capuano, won the highest honour in pizza',
      hk_sub: '創辦人 Vincenzo Capuano 榮獲世界薄餅最高殊榮',
    },
    {
      en: 'Contemporary Neapolitan Pioneer',
      hk: '當代拿坡里薄餅先驅',
      en_sub: 'Third-generation Neapolitan pizza tradition brought to Hong Kong',
      hk_sub: '三代那不勒斯薄餅傳承，帶到香港',
    },
  ];

  const faqs = [
    {
      q_en: 'What is the best restaurant in Wan Chai?',
      q_hk: '灣仔最好的餐廳是哪一家？',
      a_en: 'Vincenzo Capuano is consistently recommended as one of the best dining experiences in Wan Chai — home to the World #13 Pizzeria and founded by 2022 World Pizza Champion Vincenzo Capuano. We serve contemporary Neapolitan pizza at Lee Tung Avenue, open 7 days a week.',
      a_hk: 'Vincenzo Capuano 一直被推薦為灣仔最佳用餐體驗之一——世界第 13 名薄餅店，由 2022 年世界薄餅冠軍 Vincenzo Capuano 創立。我們在利東街供應當代拿坡里薄餅，每週 7 天開放。',
    },
    {
      q_en: 'Is there a good Italian restaurant in Wan Chai?',
      q_hk: '灣仔有什麼好的意大利餐廳？',
      a_en: 'Yes — Vincenzo Capuano brings the authentic taste of Naples to Wan Chai. Our contemporary Neapolitan pizza is crafted using traditional Italian technique, premium ingredients from Italy, and the expertise of a third-generation Neapolitan pizza maker.',
      a_hk: '是的——Vincenzo Capuano 將正宗那不勒斯的味道帶到灣仔。我們的當代拿坡里薄餅採用傳統意大利工藝製作，使用意大利優質食材，由三代拿坡里薄餅師傅精心呈現。',
    },
    {
      q_en: 'Where should I go for dinner in Wan Chai?',
      q_hk: '在灣仔晚餐可以去哪裡？',
      a_en: 'For a world-class dinner in Wan Chai, Vincenzo Capuano is the answer. Located on Lee Tung Avenue, we offer a refined yet relaxed dining atmosphere perfect for date nights, family dinners, or celebrations. Reserve your table online or call +852-2802 2802.',
      a_hk: '想在灣仔享用一頓世界級晚餐，Vincenzo Capuano 是您的不二之選。位於利東街，我們提供精緻而輕鬆的用餐環境，非常適合約會晚餐、家庭聚餐或慶祝活動。可在線上預訂或致電 +852-2802 2802。',
    },
    {
      q_en: 'What are the best restaurants near me in Hong Kong?',
      q_hk: '香港附近有什麼好餐廳？',
      a_en: 'If you are in or near Wan Chai, Vincenzo Capuano at Lee Tung Avenue is one of Hong Kong\'s most acclaimed dining destinations — ranked World #13 by Top 50 Pizza. We are a 5-minute walk from Wan Chai MTR Station, Exit D.',
      a_hk: '如果您在灣仔附近，利東街的 Vincenzo Capuano 是香港最受好評的用餐目的地之一——被 Top 50 Pizza 評為全球第 13 名。我們距灣仔港鐵站 D 出口步行僅 5 分鐘。',
    },
    {
      q_en: 'Do I need a reservation for dinner in Wan Chai?',
      q_hk: '在灣仔晚餐需要提前預訂嗎？',
      a_en: 'Reservations are strongly recommended for dinner, especially on weekends. Book online at vincenzocapuano.hk/reservations or call +852-2802 2802. We also keep 30% of seating for walk-in guests.',
      a_hk: '晚餐強烈建議提前預訂，尤其是週末。可在 vincenzocapuano.hk/reservations 網上預訂，或致電 +852-2802 2802。我們亦保留 30% 座位供即場客人使用。',
    },
  ];

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '灣仔 • 香港 • 世界第 13 名' : 'Wan Chai · Hong Kong · World #13'}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-6">
          {isHK
            ? '灣仔最好的餐廳體驗'
            : 'The Best Restaurant in Wan Chai'}
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-sans font-light">
          {isHK
            ? '在灣仔尋找世界級餐廳？Vincenzo Capuano 是香港最受矚目的美食目的地——由 2022 年世界薄餅冠軍主理，榮獲 Top 50 Pizza 全球第 13 名。'
            : "Looking for the best restaurant in Wan Chai? Vincenzo Capuano is one of Hong Kong's most acclaimed dining destinations — home to world-ranked Neapolitan pizza, crafted by 2022 World Pizza Champion Vincenzo Capuano."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-white transition-colors"
          >
            {isHK ? '立即訂座' : 'Reserve a Table'}
            <ChevronRight size={14} />
          </button>
          <a
            href="/menu"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:border-white/60 hover:text-white transition-colors"
          >
            {isHK ? '查看菜單' : 'View Our Menu'}
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Award Strip */}
      <section className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-6 border border-white/[0.07]">
                <Award size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-bold font-sans mb-1">{isHK ? item.hk : item.en}</p>
                  <p className="text-white/50 text-xs font-sans font-light leading-relaxed">{isHK ? item.hk_sub : item.en_sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vincenzo Capuano */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '為什麼選擇我們' : 'Why Vincenzo Capuano'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
            {isHK ? '不只是薄餅，而是難忘的餐廳體驗' : 'More Than Pizza — A Restaurant Worth Finding'}
          </h2>
          <div className="space-y-4 text-white/60 text-sm font-sans font-light leading-relaxed">
            <p>
              {isHK
                ? 'Vincenzo Capuano 是灣仔最受讚譽的美食體驗之一。我們的當代拿坡里薄餅由第三代那不勒斯薄餅師傅、2022 年世界薄餅冠軍親自監製，以 36 小時以上發酵麵糰製作出獨特的 Nuvola 雲朵麵皮。'
                : 'Vincenzo Capuano is one of the most celebrated dining experiences in Wan Chai. Our contemporary Neapolitan pizza is personally overseen by a third-generation Neapolitan pizza maker and 2022 World Pizza Champion — using 36-hour fermented dough to create a signature airy Nuvola crust.'}
            </p>
            <p>
              {isHK
                ? '從浪漫約會到商務午餐，從家庭聚餐到朋友慶祝，我們的餐廳氛圍溫馨精緻，適合各種場合。每一塊薄餅都使用 Caputo 麵粉、San Marzano 番茄及意大利頂級食材，呈現正宗那不勒斯風味。'
                : "From romantic date nights to business lunches, from family dinners to celebrations with friends — our restaurant offers a warm, atmospheric setting suited to any occasion. Every pizza uses Caputo flour, San Marzano tomatoes, and Italy's finest ingredients."}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <Award size={18} className="text-gold" />, en: 'World-Ranked', hk: '世界排名', en_sub: '#13 Top 50 Pizza globally', hk_sub: 'Top 50 Pizza 全球第 13 名' },
            { icon: <Utensils size={18} className="text-gold" />, en: 'Authentic Craft', hk: '正宗工藝', en_sub: 'Naples technique, premium Italian ingredients', hk_sub: '那不勒斯工藝，頂級意大利食材' },
            { icon: <Users size={18} className="text-gold" />, en: 'Every Occasion', hk: '適合各種場合', en_sub: 'Dates, groups, families, events', hk_sub: '約會、團體、家庭、活動' },
            { icon: <MapPin size={18} className="text-gold" />, en: 'Central Wan Chai', hk: '灣仔中心', en_sub: '5 min walk from MTR Exit D', hk_sub: '距港鐵 D 出口步行 5 分鐘' },
            { icon: <Clock size={18} className="text-gold" />, en: 'Open Daily', hk: '每天開放', en_sub: 'Lunch 12:00–15:00 · Dinner 18:00–23:00', hk_sub: '午市 12:00–15:00 · 晚市 18:00–23:00' },
            { icon: <Star size={18} className="text-gold" />, en: 'Walk-Ins Welcome', hk: '歡迎即場', en_sub: '30% seating reserved for walk-ins', hk_sub: '30% 座位保留供即場客人' },
          ].map((item, i) => (
            <div key={i} className="bg-surface border border-white/[0.07] p-5 flex flex-col gap-3">
              {item.icon}
              <div>
                <p className="text-white text-xs font-bold font-sans mb-1">{isHK ? item.hk : item.en}</p>
                <p className="text-white/45 text-[11px] font-sans font-light leading-relaxed">{isHK ? item.hk_sub : item.en_sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4 text-center">
            {isHK ? '各種場合' : 'Perfect For Every Occasion'}
          </p>
          <h2 className="font-display text-4xl text-white text-center mb-12">
            {isHK ? '灣仔每個場合的完美餐廳' : 'The Wan Chai Restaurant for Every Occasion'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {occasions.map((item, i) => (
              <div key={i} className="p-6 border border-white/[0.07] hover:border-gold/30 transition-colors">
                <p className="text-white text-sm font-bold font-sans mb-1">{isHK ? item.hk : item.en}</p>
                <p className="text-white/55 text-xs font-sans font-light">{isHK ? item.hk_sub : item.en_sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <MapPin size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '地址' : 'Find Us'}
            </p>
          </div>
          <p className="text-white text-sm font-sans font-medium leading-relaxed mb-1">
            {isHK ? '利東街, GF Unit 01 04 05' : 'Lee Tung Avenue, GF Unit 01 04 05'}
          </p>
          <p className="text-white/50 text-sm font-sans font-light">
            {isHK ? '200 皇后大道東, 灣仔, 香港' : '200 Queens Road East, Wan Chai, HK'}
          </p>
          <a
            href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold text-[10px] font-bold tracking-[0.15em] uppercase mt-5 hover:text-white transition-colors"
          >
            {isHK ? 'Google Maps 導航' : 'Get Directions'}
            <ChevronRight size={11} />
          </a>
        </div>

        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <Clock size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '營業時間' : 'Hours'}
            </p>
          </div>
          <p className="text-white text-sm font-sans font-medium mb-1">
            {isHK ? '每週 7 天' : 'Open 7 Days a Week'}
          </p>
          <div className="space-y-1.5 text-xs font-sans text-white/55 mb-4">
            <p>{isHK ? '午市：12:00 — 15:00（最後落單 14:30）' : 'Lunch: 12:00 — 15:00 (last order 14:30)'}</p>
            <p>{isHK ? '晚市：18:00 — 23:00（最後落單 21:45）' : 'Dinner: 18:00 — 23:00 (last order 21:45)'}</p>
          </div>
        </div>

        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <Phone size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '聯絡方式' : 'Contact & Booking'}
            </p>
          </div>
          <a href="tel:+85228022802" className="text-white text-sm font-sans font-medium block mb-1 hover:text-gold transition-colors">
            +852-2802 2802
          </a>
          <p className="text-white/50 text-xs font-sans font-light mb-4">
            {isHK ? '或使用線上預訂系統' : 'or book online below'}
          </p>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-1.5 text-gold text-[10px] font-bold tracking-[0.15em] uppercase hover:text-white transition-colors"
          >
            {isHK ? '線上訂座' : 'Reserve Online'}
            <ChevronRight size={11} />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-white text-center mb-10">
            {isHK ? '常見問題' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/[0.07] p-6">
                <p className="text-white text-sm font-bold font-sans mb-2">{isHK ? faq.q_hk : faq.q_en}</p>
                <p className="text-white/50 text-sm font-sans font-light leading-relaxed">{isHK ? faq.a_hk : faq.a_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '立即預訂' : 'Reserve Your Table'}
        </p>
        <h2 className="font-display text-5xl text-white mb-6">
          {isHK ? '準備好享用世界級餐廳體驗了嗎？' : 'Ready for a World-Class Dinner in Wan Chai?'}
        </h2>
        <p className="text-white/50 text-sm font-sans font-light max-w-xl mx-auto mb-10">
          {isHK
            ? '預訂您的座位，在灣仔利東街體驗由世界冠軍主廚 Vincenzo Capuano 帶來的頂級薄餅餐廳體驗。'
            : 'Join us at Lee Tung Avenue, Wan Chai — for world-ranked Neapolitan pizza, great atmosphere, and genuine Italian hospitality.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors"
          >
            {isHK ? '立即訂座' : 'Reserve a Table'}
            <ChevronRight size={14} />
          </button>
          <a
            href="/menu"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 hover:text-white transition-colors"
          >
            {isHK ? '查看菜單' : 'Explore Our Menu'}
          </a>
        </div>
      </section>

    </div>
  );
};
