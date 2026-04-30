
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Language } from '../translations';

interface FAQPageProps {
  lang: Language;
  onBookClick: () => void;
}

interface FAQItem {
  q_en: string;
  q_hk: string;
  a_en: string;
  a_hk: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Pizza / Product
  {
    category: 'pizza',
    q_en: 'What is Neapolitan pizza?',
    q_hk: '什麼是拿坡里薄餅？',
    a_en: 'Neapolitan pizza (pizza napoletana) originated in Naples, Italy, and is characterised by its soft, pillowy dough, simple high-quality ingredients, and a distinct charred cornicione (crust). It is the original pizza style and is protected by the Associazione Verace Pizza Napoletana (AVPN).',
    a_hk: '拿坡里薄餅（pizza napoletana）起源於意大利那不勒斯，以其柔軟、有彈性的麵糰、簡單的高品質食材和獨特的焦香 cornicione（麵皮）為特色。它是最原始的薄餅風格，受到拿坡里正宗薄餅協會（AVPN）的保護和認證。',
  },
  {
    category: 'pizza',
    q_en: 'What makes contemporary Neapolitan pizza different?',
    q_hk: '當代拿坡里薄餅與傳統拿坡里薄餅有何不同？',
    a_en: 'Contemporary Neapolitan pizza is an evolution of the traditional style. It features a more pronounced, visually striking cornicione (crust edge), achieved through high-hydration dough and extended fermentation of 36+ hours. The result is a crust that is dramatically more airy, light, and digestible than traditional styles.',
    a_hk: '當代拿坡里薄餅是傳統風格的進化版本。它以更明顯、視覺上更突出的 cornicione（麵皮邊緣）為特色，這是通過高水分麵糰和 36 小時以上的長時間發酵實現的。結果是麵皮比傳統風格更加充滿空氣感、輕盈且易於消化。',
  },
  {
    category: 'pizza',
    q_en: 'What makes your crust different?',
    q_hk: '你們的薄餅麵皮有什麼特別之處？',
    a_en: 'Our signature crust — the Nuvola (meaning "cloud" in Italian) — is produced from a specialised flour blend fermented for 36+ hours. The extended fermentation creates a highly aerated, incredibly soft dough that bakes into a dramatically tall, light cornicione. It is the defining characteristic of the Vincenzo Capuano style.',
    a_hk: '我們的招牌麵皮——Nuvola（意大利語意為「雲朵」）——由特殊麵粉配方經 36 小時以上發酵製成。長時間發酵產生出高度充氣、極為柔軟的麵糰，烤出極高、輕盈的 cornicione 麵皮。這是 Vincenzo Capuano 風格的標誌性特色。',
  },
  {
    category: 'pizza',
    q_en: 'Do you have vegetarian pizza?',
    q_hk: '你們有素食薄餅嗎？',
    a_en: 'Yes, we offer several vegetarian pizza options on our menu, including Margherita, Bufala, and other vegetable-based creations. All dietary information is clearly marked on our menu.',
    a_hk: '有的，我們的菜單上提供多款素食薄餅選擇，包括 Margherita、Bufala 和其他以蔬菜為基礎的創意薄餅。所有飲食資訊均在菜單上清楚標示。',
  },
  // Visit / Location
  {
    category: 'visit',
    q_en: 'Where can I get Neapolitan pizza in Hong Kong?',
    q_hk: '在香港哪裡可以吃到拿坡里薄餅？',
    a_en: 'Vincenzo Capuano is widely regarded as the leading destination for contemporary Neapolitan pizza in Hong Kong. We are located at Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai, Hong Kong — a 5 minute walk from Wan Chai MTR Station Exit D.',
    a_hk: 'Vincenzo Capuano 被公認為香港當代拿坡里薄餅的首選目的地。我們位於香港灣仔皇后大道東 200 號利東街地下 01 04 05 號舖，距離灣仔港鐵站 D 出口步行約 5 分鐘。',
  },
  {
    category: 'visit',
    q_en: 'Do you have a pizza restaurant in Wan Chai?',
    q_hk: '你們在灣仔有薄餅餐廳嗎？',
    a_en: 'Yes. Vincenzo Capuano Hong Kong is located at Lee Tung Avenue, Wan Chai — one of Hong Kong\'s most vibrant dining destinations. We serve contemporary Neapolitan pizza lunch and dinner, 7 days a week.',
    a_hk: '是的。Vincenzo Capuano 香港分店位於灣仔利東街——香港最具活力的餐飲目的地之一。我們每週 7 天提供當代拿坡里薄餅午餐和晚餐。',
  },
  {
    category: 'visit',
    q_en: 'What are your opening hours?',
    q_hk: '你們的營業時間是什麼？',
    a_en: 'We are open 7 days a week from 12:00 to 23:00 (last order 21:45). Lunch service runs from 12:00 to 15:00, and dinner from 17:00 to 23:00.',
    a_hk: '我們每週 7 天，中午 12:00 至晚上 23:00 營業（最後落單時間 21:45）。午餐服務時間為 12:00 至 15:00，晚餐時間為 17:00 至 23:00。',
  },
  // Booking
  {
    category: 'booking',
    q_en: 'Do you take reservations?',
    q_hk: '你們接受訂座嗎？',
    a_en: 'Yes. We strongly recommend making a reservation, especially for evenings and weekends. You can book online via our reservations page or call us at +852-2802 2802.',
    a_hk: '是的。我們強烈建議提前訂座，尤其是在晚上和週末。您可以通過我們的訂座頁面在線預訂，或致電 +852-2802 2802。',
  },
  {
    category: 'booking',
    q_en: 'Do you accept walk-ins?',
    q_hk: '可以即場入座嗎？',
    a_en: 'Yes — we always reserve 30% of our seating capacity for walk-in guests. However, to guarantee your table — especially on weekends and public holidays — we recommend booking ahead.',
    a_hk: '可以——我們始終保留 30% 的座位容量供即場客人使用。但是，為了確保您的座位，尤其是在週末和公眾假期，我們建議提前訂座。',
  },
  {
    category: 'booking',
    q_en: 'Are you family-friendly?',
    q_hk: '你們適合家庭用餐嗎？',
    a_en: 'Absolutely. Vincenzo Capuano Hong Kong welcomes families and provides a warm, relaxed atmosphere that is suitable for all ages. We are ideal for family pizza dinners in Wan Chai.',
    a_hk: '當然。Vincenzo Capuano 香港分店歡迎家庭用餐，提供溫馨、輕鬆的環境，適合各個年齡段的客人。我們是灣仔家庭薄餅晚餐的理想選擇。',
  },
  {
    category: 'booking',
    q_en: 'Is this good for groups?',
    q_hk: '適合團體用餐嗎？',
    a_en: 'Yes, we welcome group dining. For groups of 4–12 guests, please book via our reservations page. For larger parties or private events, please contact us directly at +852-2802 2802.',
    a_hk: '是的，我們歡迎團體用餐。4–12 人的團體請通過我們的訂座頁面預訂。更大規模的聚會或私人活動，請直接致電 +852-2802 2802 與我們聯絡。',
  },
  // Brand / Experience
  {
    category: 'brand',
    q_en: 'Why do you cut pizza with scissors?',
    q_hk: '為什麼你們用剪刀切薄餅？',
    a_en: 'Cutting pizza with a wheel or knife crushes the delicate alveoli (air pockets) in the dough, destroying the airy texture we work so hard to achieve. We use our signature golden scissors to gently slice each pizza, preserving the Nuvola crust\'s cloud-like texture right to your plate.',
    a_hk: '用輪刀或普通刀具切薄餅會壓碎麵糰中精緻的氣泡孔洞（alveoli），破壞我們費盡心思打造的充氣質感。我們使用標誌性的黃金剪刀輕柔切開每片薄餅，將 Nuvola 麵皮如雲朵般的質感完整保留到您的餐碟上。',
  },
  {
    category: 'brand',
    q_en: 'What makes Vincenzo Capuano different from other Hong Kong pizzerias?',
    q_hk: 'Vincenzo Capuano 與香港其他薄餅店有何不同？',
    a_en: 'Vincenzo Capuano is Hong Kong\'s only authentic contemporary Neapolitan pizzeria with direct lineage to the World Pizza Champion himself. The combination of 36-hour fermented dough, Nuvola Super flour, premium Italian ingredients, and the golden scissors ritual creates a pizza experience unlike any other in Hong Kong.',
    a_hk: 'Vincenzo Capuano 是香港唯一一家由世界薄餅冠軍親自傳授的正宗當代拿坡里薄餅店。36 小時發酵麵糰、Nuvola Super 麵粉、頂級意大利食材以及黃金剪刀儀式的結合，創造出香港獨一無二的薄餅體驗。',
  },
];

const categories = [
  { id: 'all', en: 'All', hk: '全部' },
  { id: 'pizza', en: 'About Pizza', hk: '關於薄餅' },
  { id: 'visit', en: 'Visiting Us', hk: '到訪我們' },
  { id: 'booking', en: 'Reservations', hk: '訂座' },
  { id: 'brand', en: 'Our Experience', hk: '我們的體驗' },
];

export const FAQPage: React.FC<FAQPageProps> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'all' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-16 text-center">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '常見問題' : 'FAQ'}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-white leading-none mb-6">
          {isHK ? '常見問題解答' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-sans font-light">
          {isHK
            ? '關於我們的當代拿坡里薄餅、訂座、菜單及灣仔用餐體驗的常見問題解答。'
            : 'Answers to common questions about our contemporary Neapolitan pizza, reservations, menu, and dining experience in Hong Kong.'}
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Category Filter */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
              className={`text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2 border transition-colors ${
                activeCategory === cat.id
                  ? 'bg-gold text-charcoal border-gold'
                  : 'border-white/20 text-white/50 hover:border-white/50 hover:text-white'
              }`}
            >
              {isHK ? cat.hk : cat.en}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-3">
          {filtered.map((faq, i) => (
            <div
              key={i}
              className="border border-white/[0.07] hover:border-white/20 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-white text-sm font-bold font-sans leading-snug">
                  {isHK ? faq.q_hk : faq.q_en}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gold shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <div className="border-t border-white/[0.06] pt-5">
                    <p className="text-white/60 text-sm font-sans font-light leading-relaxed">
                      {isHK ? faq.a_hk : faq.a_en}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '還有疑問？' : 'Still Have Questions?'}
          </p>
          <h2 className="font-display text-4xl text-white mb-6">
            {isHK ? '我們很樂意協助' : "We're Here to Help"}
          </h2>
          <p className="text-white/50 text-sm font-sans font-light max-w-md mx-auto mb-8">
            {isHK
              ? '如有任何疑問，歡迎致電或直接前來灣仔利東街的門店。'
              : 'Call us at +852-2802 2802 or visit us at Lee Tung Avenue, Wan Chai. We\'d love to see you.'}
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
              href="tel:+85228022802"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 hover:text-white transition-colors"
            >
              {isHK ? '致電我們' : 'Call Us'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
