
import React from 'react';
import { MapPin, Clock, Phone, ChevronRight, Bike, UtensilsCrossed, ShoppingBag } from 'lucide-react';
import { Language } from '../translations';

interface Props {
  lang: Language;
  onBookClick: () => void;
  onDeliveryClick: () => void;
}

export const PizzaNearMePage: React.FC<Props> = ({ lang, onBookClick, onDeliveryClick }) => {
  const isHK = lang === 'hk';

  const orderOptions = [
    {
      icon: <UtensilsCrossed size={22} className="text-gold" />,
      en: 'Dine In',
      hk: '堂食',
      en_sub: 'Reserve a table and enjoy the full Vincenzo Capuano experience in Wan Chai.',
      hk_sub: '預訂座位，在灣仔享受完整的 Vincenzo Capuano 用餐體驗。',
      action_en: 'Reserve a Table',
      action_hk: '立即訂座',
      onClick: onBookClick,
    },
    {
      icon: <ShoppingBag size={22} className="text-gold" />,
      en: 'Collect / Takeaway',
      hk: '外賣自取',
      en_sub: 'Order ahead and collect your pizza at Lee Tung Avenue, Wan Chai. Call us to arrange.',
      hk_sub: '提前致電，在灣仔利東街自取薄餅。電話：+852-2802 2802',
      action_en: 'Call to Order',
      action_hk: '致電訂購',
      isPhone: true,
    },
    {
      icon: <Bike size={22} className="text-gold" />,
      en: 'Pizza Delivery',
      hk: '外賣送餐',
      en_sub: 'We partner with delivery platforms to bring our pizza to your door in Hong Kong.',
      hk_sub: '我們與外賣平台合作，將薄餅送到您的門口。',
      action_en: 'Order Delivery',
      action_hk: '立即外賣',
      onClick: onDeliveryClick,
    },
  ];

  const signaturePizzas = [
    { en: 'Margherita', hk: '瑪格麗特', en_sub: 'San Marzano tomato, fior di latte, fresh basil', hk_sub: 'San Marzano 番茄、鮮奶酪、新鮮羅勒' },
    { en: 'Bufala', hk: '布法拉', en_sub: 'Buffalo mozzarella DOP, tomato, basil', hk_sub: '水牛芝士 DOP、番茄、羅勒' },
    { en: 'Diavola', hk: '魔鬼薄餅', en_sub: 'Spicy Napoli salami, fior di latte, chilli', hk_sub: '辣那不勒斯沙樂美腸、鮮奶酪、辣椒' },
    { en: 'Burrata', hk: '布拉塔', en_sub: 'Fresh burrata, cherry tomato, rocket, EVO', hk_sub: '新鮮布拉塔芝士、車厘茄、芝麻菜、橄欖油' },
  ];

  const faqs = [
    {
      q_en: 'Where can I find pizza near me in Hong Kong?',
      q_hk: '在香港哪裡可以找到附近的薄餅？',
      a_en: 'If you are near Wan Chai, Vincenzo Capuano at Lee Tung Avenue is one of Hong Kong\'s top pizza destinations — ranked World #13 by Top 50 Pizza. We are a 5-minute walk from Wan Chai MTR Station, Exit D.',
      a_hk: '如果您在灣仔附近，利東街的 Vincenzo Capuano 是香港頂級薄餅目的地之一——被 Top 50 Pizza 評為全球第 13 名。距灣仔港鐵站 D 出口步行僅 5 分鐘。',
    },
    {
      q_en: 'Do you do pizza takeaway or delivery in Hong Kong?',
      q_hk: '你們在香港有薄餅外賣或送餐服務嗎？',
      a_en: 'Yes. You can collect your pizza at our Wan Chai restaurant, or order delivery through our delivery partners. Call +852-2802 2802 to arrange a takeaway collection.',
      a_hk: '有的。您可以在我們的灣仔餐廳自取，或通過外賣合作平台訂購送餐。外賣自取請致電 +852-2802 2802 預先安排。',
    },
    {
      q_en: 'What is the phone number for pizza takeaway? (薄餅外賣電話)',
      q_hk: '薄餅外賣電話是多少？',
      a_en: 'For pizza takeaway collection at our Wan Chai location, call us on +852-2802 2802. We will confirm your order and have it ready for collection at Lee Tung Avenue.',
      a_hk: '如需在灣仔自取薄餅，請致電 +852-2802 2802。我們將確認您的訂單，並在利東街為您準備好。',
    },
    {
      q_en: 'Where is your pizza restaurant in Wan Chai?',
      q_hk: '你們的薄餅餐廳在灣仔哪裡？',
      a_en: 'We are at Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai. The nearest MTR is Wan Chai Station, Exit D — approximately 5 minutes on foot.',
      a_hk: '我們位於灣仔皇后大道東 200 號利東街地下 01 04 05 號舖。最近港鐵站為灣仔站 D 出口，步行約 5 分鐘。',
    },
    {
      q_en: 'What are your opening hours for pizza in Wan Chai?',
      q_hk: '你們灣仔薄餅店的營業時間是什麼？',
      a_en: 'We are open 7 days a week from 12:00 to 23:00 (noon to 11pm). Last order is at 22:30. Both dine-in and takeaway are available during all opening hours.',
      a_hk: '我們每週 7 天開放，從中午 12:00 至晚上 23:00，最後落單時間為 22:30。所有營業時間內均提供堂食及外賣服務。',
    },
  ];

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '灣仔 · 香港 · 外賣 & 堂食' : 'Wan Chai · Hong Kong · Dine In & Takeaway'}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-6">
          {isHK
            ? '香港附近最好的薄餅'
            : 'Pizza Near You in Hong Kong'}
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-sans font-light">
          {isHK
            ? '在香港尋找附近的薄餅？Vincenzo Capuano 坐落於灣仔利東街，提供堂食、外賣自取及送餐服務。由世界冠軍主廚主理，榮獲全球第 13 名。薄餅外賣電話：+852-2802 2802。'
            : "Searching for pizza near you in Hong Kong? Vincenzo Capuano in Wan Chai serves world-ranked Neapolitan pizza — available for dine-in, collection, and delivery. Ranked #13 in the world by Top 50 Pizza."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-white transition-colors"
          >
            {isHK ? '預訂座位' : 'Dine In — Reserve Now'}
            <ChevronRight size={14} />
          </button>
          <button
            onClick={onDeliveryClick}
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:border-white/60 hover:text-white transition-colors"
          >
            {isHK ? '薄餅外賣' : 'Order Pizza Delivery'}
          </button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Order Options */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '訂購方式' : 'How to Order'}
        </p>
        <h2 className="font-display text-4xl text-white mb-10">
          {isHK ? '堂食、外賣自取或外送到家' : 'Dine In, Collect, or Get Delivery'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orderOptions.map((opt, i) => (
            <div key={i} className="bg-surface border border-white/[0.07] p-8 flex flex-col">
              <div className="mb-5">{opt.icon}</div>
              <p className="text-white text-base font-bold font-sans mb-2">{isHK ? opt.hk : opt.en}</p>
              <p className="text-white/50 text-sm font-sans font-light leading-relaxed mb-6 flex-1">
                {isHK ? opt.hk_sub : opt.en_sub}
              </p>
              {opt.isPhone ? (
                <a
                  href="tel:+85228022802"
                  className="inline-flex items-center gap-2 border border-gold/40 text-gold text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 hover:border-gold hover:bg-gold hover:text-charcoal transition-colors self-start"
                >
                  <Phone size={12} />
                  +852-2802 2802
                </a>
              ) : (
                <button
                  onClick={opt.onClick}
                  className="inline-flex items-center gap-2 border border-gold/40 text-gold text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 hover:border-gold hover:bg-gold hover:text-charcoal transition-colors self-start"
                >
                  {isHK ? opt.action_hk : opt.action_en}
                  <ChevronRight size={12} />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Signature Pizzas Preview */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4 text-center">
            {isHK ? '必試薄餅' : 'Popular Pizzas'}
          </p>
          <h2 className="font-display text-4xl text-white text-center mb-12">
            {isHK ? '招牌當代拿坡里薄餅' : 'Our Signature Neapolitan Pizzas'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {signaturePizzas.map((pizza, i) => (
              <div key={i} className="border border-white/[0.07] p-6 hover:border-gold/30 transition-colors">
                <p className="text-white text-sm font-bold font-sans mb-2">{isHK ? pizza.hk : pizza.en}</p>
                <p className="text-white/50 text-xs font-sans font-light leading-relaxed">{isHK ? pizza.hk_sub : pizza.en_sub}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/menu"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:border-white/60 hover:text-white transition-colors"
            >
              {isHK ? '查看完整菜單' : 'View Full Menu'}
              <ChevronRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Location & Phone */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <MapPin size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '地址' : 'Location'}
            </p>
          </div>
          <p className="text-white text-sm font-sans font-medium leading-relaxed mb-1">
            {isHK ? '灣仔利東街地下 01 04 05' : 'Lee Tung Avenue, GF Unit 01 04 05'}
          </p>
          <p className="text-white/50 text-sm font-sans font-light mb-1">
            {isHK ? '皇后大道東 200 號，灣仔' : '200 Queens Road East, Wan Chai'}
          </p>
          <p className="text-white/40 text-xs font-sans font-light">
            {isHK ? '港鐵灣仔站 D 出口，步行約 5 分鐘' : 'MTR Wan Chai Exit D, 5 min walk'}
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
              <Phone size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '外賣電話' : 'Order by Phone'}
            </p>
          </div>
          <a href="tel:+85228022802" className="text-white text-xl font-sans font-bold block mb-2 hover:text-gold transition-colors">
            +852-2802 2802
          </a>
          <p className="text-white/50 text-sm font-sans font-light leading-relaxed">
            {isHK
              ? '致電預訂外賣自取，或查詢更多外送詳情。'
              : 'Call to arrange pizza collection or ask about delivery options.'}
          </p>
          <div className="mt-4 pt-4 border-t border-white/[0.07]">
            <p className="text-white/40 text-[11px] font-sans">
              {isHK ? '薄餅外賣 · 外賣自取 · 外送服務' : 'Takeaway · Collection · Delivery'}
            </p>
          </div>
        </div>

        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <Clock size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '開放時間' : 'Opening Hours'}
            </p>
          </div>
          <p className="text-white text-sm font-sans font-medium mb-1">
            {isHK ? '每週 7 天' : '7 Days a Week'}
          </p>
          <p className="text-white/50 text-sm font-sans font-light mb-4">12:00 — 23:00</p>
          <div className="space-y-1.5 text-xs font-sans text-white/55">
            <p>{isHK ? '午餐：12:00 — 15:00' : 'Lunch: 12:00 — 15:00'}</p>
            <p>{isHK ? '晚餐：17:00 — 23:00' : 'Dinner: 17:00 — 23:00'}</p>
            <p>{isHK ? '最後落單：22:30' : 'Last order: 22:30'}</p>
          </div>
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
          {isHK ? '立即點餐' : 'Get Your Pizza Now'}
        </p>
        <h2 className="font-display text-5xl text-white mb-6">
          {isHK ? '灣仔最好的薄餅，等您來' : 'World-Ranked Pizza in Wan Chai'}
        </h2>
        <p className="text-white/50 text-sm font-sans font-light max-w-xl mx-auto mb-10">
          {isHK
            ? '堂食、外賣自取或外送——Vincenzo Capuano 當代拿坡里薄餅，全球第 13 名，近在灣仔。'
            : 'Dine in, collect, or order delivery. World #13 Neapolitan pizza, right here in Wan Chai, Hong Kong.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors"
          >
            {isHK ? '訂座堂食' : 'Reserve a Table'}
            <ChevronRight size={14} />
          </button>
          <button
            onClick={onDeliveryClick}
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 hover:text-white transition-colors"
          >
            {isHK ? '薄餅外賣' : 'Order Delivery'}
          </button>
        </div>
      </section>

    </div>
  );
};
