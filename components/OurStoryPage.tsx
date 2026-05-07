
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Language } from '../translations';

interface OurStoryPageProps {
  lang: Language;
  onBookClick: () => void;
  onMenuClick: () => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({ lang, onBookClick, onMenuClick }) => {
  const isHK = lang === 'hk';

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-20">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '由拿坡里到香港' : 'From Naples to Hong Kong'}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-6 max-w-4xl">
          {isHK
            ? 'Vincenzo Capuano 的故事'
            : 'The Vincenzo Capuano Story'}
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed font-sans font-light">
          {isHK
            ? '從那不勒斯的家族烤爐到香港灣仔，Vincenzo Capuano 帶來的不僅是一款薄餅，更是三代傳承的技藝與熱情。'
            : 'A pizza chef from Naples, a third-generation legacy, and a contemporary vision that has changed how the world eats Neapolitan pizza. This is the story behind Vincenzo Capuano Hong Kong.'}
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 mb-0">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Third Generation Legacy */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
              {isHK ? '三代傳承' : 'A Third-Generation Pizza Legacy'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              {isHK ? '傳統，重新演繹' : 'Tradition, Reimagined'}
            </h2>
            <div className="space-y-4 text-white/60 text-sm font-sans font-light leading-relaxed">
              <p>
                {isHK
                  ? 'Vincenzo Capuano 在那不勒斯的家族烤爐旁長大，從小耳濡目染，吸收了三代傳承的薄餅製作智慧。他不僅繼承了這份傳統，更以當代的視角將其昇華，創造出獨一無二的當代拿坡里薄餅風格。'
                  : 'Raised in the rhythm of family ovens in Naples, Vincenzo Capuano absorbed three generations of pizza-making knowledge before developing his own contemporary vision. He didn\'t just inherit a tradition — he elevated it, giving rise to a new chapter in Neapolitan pizza history.'}
              </p>
              <p>
                {isHK
                  ? '他的薄餅以高水分麵糰、30 小時以上發酵工藝著稱，製作出那標誌性的雲朵般輕盈麵皮（cornicione）。這不是簡單的複製傳統，而是傳統的進化。'
                  : 'His hallmark is the high-hydration dough fermented for 30+ hours, producing the signature Nuvola crust — a cornicione so light, airy, and digestible that it changed what people expect from Neapolitan pizza. This is not tradition repeated. It is tradition evolved.'}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface border border-white/[0.07] p-6 text-center">
              <p className="font-display text-5xl text-gold mb-2">3rd</p>
              <p className="text-white/50 text-xs font-sans font-light tracking-wide uppercase">
                {isHK ? '代傳承' : 'Generation'}
              </p>
            </div>
            <div className="bg-surface border border-white/[0.07] p-6 text-center">
              <p className="font-display text-5xl text-gold mb-2">2022</p>
              <p className="text-white/50 text-xs font-sans font-light tracking-wide uppercase">
                {isHK ? '世界薄餅冠軍' : 'World Champion'}
              </p>
            </div>
            <div className="bg-surface border border-white/[0.07] p-6 text-center col-span-2">
              <p className="font-display text-3xl text-gold mb-2">081 Napoli</p>
              <p className="text-white/50 text-xs font-sans font-light tracking-wide uppercase">
                {isHK ? '那不勒斯傳統' : 'Naples Heritage'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contemporary Neapolitan */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '當代拿坡里薄餅' : 'Contemporary Neapolitan Pizza'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-8">
            {isHK ? '薄餅不只是一種風格，更是一種哲學' : '"Contemporary Pizza Is Not Just a Style, It Is a Philosophy."'}
          </h2>
          <p className="text-white/60 text-sm font-sans font-light leading-relaxed">
            {isHK
              ? '當代拿坡里薄餅有別於傳統薄餅，其特點在於明顯突出的麵皮（cornicione）和高水分麵糰工藝。每一塊薄餅都是對那不勒斯傳統的致敬，同時融入現代的精緻與創新。'
              : 'Contemporary Neapolitan pizza differs from traditional Neapolitan in its visually pronounced crust and advanced dough technique. It is defined by its airy structure, complex fermentation, and premium ingredient philosophy. Vincenzo Capuano is one of the defining figures of this movement globally.'}
          </p>
        </div>
      </section>

      {/* The Craft */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4 text-center">
            {isHK ? '工藝特色' : 'What Makes It Different'}
          </p>
          <h2 className="font-display text-4xl text-white text-center mb-12">
            {isHK ? '我們的工藝' : 'The Capuano Craft'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title_en: 'Nuvola Super Flour',
                title_hk: 'Nuvola Super 麵粉',
                body_en: 'A specialised flour blend fermented for 30+ hours. The result is a dough structure that is incredibly soft, airy, and light on the stomach.',
                body_hk: '專屬麵粉配方，經過 30 小時以上發酵。造就出令人難以置信的柔軟、充滿空氣感且易於消化的麵糰結構。',
              },
              {
                title_en: 'The Golden Scissors',
                title_hk: '黃金剪刀',
                body_en: 'Cutting with a wheel crushes the alveoli. We use golden scissors to gently slice each pizza, preserving the cloud-like cornicione texture.',
                body_hk: '輪刀切割會壓碎氣泡孔洞。我們使用黃金剪刀輕柔切開每片薄餅，保留如雲朵般的麵皮質感。',
              },
              {
                title_en: 'Premium Italian Ingredients',
                title_hk: '頂級意大利食材',
                body_en: 'San Marzano tomatoes, fresh buffalo mozzarella, Caputo flour, and premium toppings. Every ingredient is chosen for flavour authenticity.',
                body_hk: 'San Marzano 番茄、新鮮水牛芝士、Caputo 麵粉及頂級配料。每種食材均以味道正宗為首要標準精心挑選。',
              },
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-white/[0.07] p-8">
                <div className="w-1.5 h-8 bg-gold mb-6" />
                <h3 className="text-white text-base font-bold font-sans mb-3">{isHK ? item.title_hk : item.title_en}</h3>
                <p className="text-white/50 text-sm font-sans font-light leading-relaxed">{isHK ? item.body_hk : item.body_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Naples to Hong Kong */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-surface border border-white/[0.07] p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
            <p className="font-display text-3xl text-white italic mb-6">
              {isHK
                ? '「Pizza 是傳承、技藝與喜悅的結合。」'
                : '"Pizza is heritage, technique, and joy."'}
            </p>
            <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Vincenzo Capuano</p>
            <p className="text-white/40 text-xs font-sans font-light mt-1 tracking-wide uppercase">
              {isHK ? '世界薄餅冠軍 2022' : '2022 World Pizza Champion'}
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '由拿坡里到香港' : 'From Naples to Hong Kong'}
          </p>
          <h2 className="font-display text-4xl text-white leading-tight mb-6">
            {isHK ? '傳奇來到香港' : 'Bringing Naples to Wan Chai'}
          </h2>
          <div className="space-y-4 text-white/60 text-sm font-sans font-light leading-relaxed">
            <p>
              {isHK
                ? '在世界各地建立了多家備受讚譽的薄餅店後，Vincenzo Capuano 選擇香港作為其亞洲首站。Vincenzo Capuano 香港分店坐落於灣仔利東街，是香港最具代表性的當代拿坡里薄餅體驗。'
                : 'After establishing acclaimed pizzerias across Europe and beyond, Vincenzo Capuano chose Hong Kong as his Asian home. Located at Lee Tung Avenue in Wan Chai, Vincenzo Capuano Hong Kong brings the full contemporary Neapolitan experience to Asia.'}
            </p>
            <p>
              {isHK
                ? '每一塊薄餅都承載著那不勒斯的靈魂，以現代的方式重新詮釋。這不只是一家餐廳，更是一段連接過去與未來的薄餅旅程。'
                : 'Every pizza carries the soul of Naples and the ambition of a contemporary vision. This is authentic Italian pizza experience in Hong Kong — rooted in heritage, crafted for today.'}
            </p>
          </div>
        </div>
      </section>

      {/* Accolades */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-10">
            {isHK ? '榮譽與認可' : 'Recognition & Awards'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { en: '2022 World Pizza Champion', hk: '2022 年世界薄餅冠軍', en_sub: 'Naples, Italy', hk_sub: '意大利那不勒斯' },
              { en: 'Gambero Rosso Recognised', hk: 'Gambero Rosso 認可', en_sub: 'Italian culinary authority', hk_sub: '意大利美食權威機構' },
              { en: 'Caputo Partner', hk: 'Caputo 合作夥伴', en_sub: 'Premium flour certification', hk_sub: '頂級麵粉認證合作夥伴' },
            ].map((item, i) => (
              <div key={i} className="border border-gold/20 p-6">
                <p className="text-white text-sm font-bold font-sans mb-1">{isHK ? item.hk : item.en}</p>
                <p className="text-white/40 text-xs font-sans font-light">{isHK ? item.hk_sub : item.en_sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-4xl text-white text-center mb-10">
          {isHK ? '關於我們的問題' : 'About Vincenzo Capuano'}
        </h2>
        <div className="space-y-4">
          {[
            {
              q_en: 'Who is Vincenzo Capuano?',
              q_hk: 'Vincenzo Capuano 是誰？',
              a_en: 'Vincenzo Capuano is the 2022 World Pizza Champion and a third-generation pizza maker from Naples, Italy. He is one of the leading figures of the contemporary Neapolitan pizza movement, known for his high-hydration dough, iconic cornicione crust, and the ritual of cutting pizza with golden scissors.',
              a_hk: 'Vincenzo Capuano 是 2022 年世界薄餅冠軍，來自意大利那不勒斯的第三代薄餅製作師。他是當代拿坡里薄餅運動的代表人物之一，以高水分麵糰、標誌性的 cornicione 麵皮以及用黃金剪刀切薄餅的儀式聞名於世。',
            },
            {
              q_en: 'What makes Vincenzo Capuano different from other pizzerias?',
              q_hk: 'Vincenzo Capuano 與其他薄餅店有何不同？',
              a_en: 'Our pizzas are defined by the contemporary Neapolitan style — a pronounced, airy cornicione crust produced from high-hydration dough fermented for 30+ hours. We use the signature golden scissors for cutting and source only premium Italian ingredients including Caputo flour and San Marzano tomatoes.',
              a_hk: '我們的薄餅以當代拿坡里風格為特色——明顯突出的 cornicione 麵皮由高水分麵糰經 30 小時以上發酵製成。我們使用標誌性的黃金剪刀切薄餅，並只使用頂級意大利食材，包括 Caputo 麵粉和 San Marzano 番茄。',
            },
            {
              q_en: 'Why is your pizza style called contemporary Neapolitan?',
              q_hk: '為什麼你們的薄餅風格被稱為當代拿坡里薄餅？',
              a_en: 'Contemporary Neapolitan pizza refers to a modern evolution of traditional Neapolitan pizza. It is distinguished by its visually pronounced crust (cornicione), advanced dough fermentation technique, and a focus on premium ingredients. It retains the DNA of classic Neapolitan pizza while pushing its quality and expression further.',
              a_hk: '當代拿坡里薄餅是傳統拿坡里薄餅的現代演進版本。其特點在於視覺上明顯突出的麵皮（cornicione）、先進的麵糰發酵技術以及對頂級食材的高度重視。它保留了傳統拿坡里薄餅的精髓，同時將其品質和表現力推向更高水準。',
            },
          ].map((faq, i) => (
            <div key={i} className="border border-white/[0.07] p-6">
              <p className="text-white text-sm font-bold font-sans mb-2">{isHK ? faq.q_hk : faq.q_en}</p>
              <p className="text-white/50 text-sm font-sans font-light leading-relaxed">{isHK ? faq.a_hk : faq.a_en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">
        <h2 className="font-display text-4xl text-white mb-6">
          {isHK ? '親身感受這個故事' : 'Experience the Story in Person'}
        </h2>
        <p className="text-white/50 text-sm font-sans font-light max-w-xl mx-auto mb-10">
          {isHK
            ? '前往灣仔利東街，親身品嚐 Vincenzo Capuano 的當代拿坡里薄餅。'
            : 'Visit us at Lee Tung Avenue, Wan Chai, and taste the story of contemporary Neapolitan pizza in Hong Kong.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors"
          >
            {isHK ? '立即訂座' : 'Reserve a Table'}
            <ChevronRight size={14} />
          </button>
          <button
            onClick={onMenuClick}
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 hover:text-white transition-colors"
          >
            {isHK ? '探索菜單' : 'Explore Our Menu'}
          </button>
        </div>
      </section>

    </div>
  );
};
