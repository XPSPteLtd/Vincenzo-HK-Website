
import React from 'react';
import { MapPin, Clock, Phone, Train, ChevronRight } from 'lucide-react';
import { Language } from '../translations';

interface LocationPageProps {
  lang: Language;
  onBookClick: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '灣仔 • 香港' : 'Wan Chai • Hong Kong'}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-6">
          {isHK
            ? '香港灣仔拿坡里薄餅'
            : 'Neapolitan Pizza in Wan Chai, Hong Kong'}
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-sans font-light">
          {isHK
            ? 'Vincenzo Capuano 座落於灣仔利東街，為香港帶來正宗的當代拿坡里薄餅體驗。由世界冠軍主廚，以傳統拿坡里手法精心製作每一塊薄餅。'
            : 'Vincenzo Capuano Wan Chai is your destination for contemporary Neapolitan pizza in Hong Kong. Rooted in Naples, crafted with award-winning technique, and served in the heart of Wan Chai.'}
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
            href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:border-white/60 hover:text-white transition-colors"
          >
            <MapPin size={14} />
            {isHK ? '查看地圖' : 'Get Directions'}
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Location Details Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Address */}
        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <MapPin size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '地址' : 'Address'}
            </p>
          </div>
          <p className="text-white text-sm font-sans font-medium leading-relaxed mb-2">
            {isHK
              ? '利東街, GF Unit 01 04 05'
              : 'Lee Tung Avenue, GF Unit 01 04 05'}
          </p>
          <p className="text-white/50 text-sm font-sans font-light">
            {isHK ? '200 皇后大道東, 灣仔, 香港' : '200 Queens Road East, Wan Chai, Hong Kong'}
          </p>
          <a
            href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold text-[10px] font-bold tracking-[0.15em] uppercase mt-5 hover:text-white transition-colors"
          >
            {isHK ? '在 Google Maps 查看' : 'View on Google Maps'}
            <ChevronRight size={11} />
          </a>
        </div>

        {/* Hours */}
        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <Clock size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '營業時間' : 'Opening Hours'}
            </p>
          </div>
          <p className="text-white text-sm font-sans font-medium mb-1">
            {isHK ? '每週 7 天' : 'Open 7 Days a Week'}
          </p>
          <p className="text-white/50 text-sm font-sans font-light mb-4">12:00 — 23:00</p>
          <div className="space-y-1.5 text-xs font-sans text-white/55">
            <p>{isHK ? '午餐：12:00 — 15:00' : 'Lunch: 12:00 — 15:00'}</p>
            <p>{isHK ? '晚餐：17:00 — 23:00' : 'Dinner: 17:00 — 23:00'}</p>
            <p>{isHK ? '最後落單：21:45' : 'Last order: 21:45'}</p>
          </div>
        </div>

        {/* Getting Here */}
        <div className="bg-surface border border-white/[0.07] p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 bg-gold/10 flex items-center justify-center">
              <Train size={16} className="text-gold" />
            </div>
            <p className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
              {isHK ? '交通資訊' : 'Getting Here'}
            </p>
          </div>
          <div className="space-y-3 text-sm font-sans">
            <div>
              <p className="text-white font-medium">{isHK ? '港鐵' : 'MTR'}</p>
              <p className="text-white/50 font-light text-xs mt-0.5">
                {isHK ? '灣仔站 D 出口（步行約 5 分鐘）' : 'Wan Chai Station Exit D (5 min walk)'}
              </p>
            </div>
            <div>
              <p className="text-white font-medium">{isHK ? '巴士' : 'Bus'}</p>
              <p className="text-white/50 font-light text-xs mt-0.5">
                {isHK ? '多條路線停靠皇后大道東' : 'Multiple routes along Queens Road East'}
              </p>
            </div>
          </div>
          <a
            href="tel:+85228022802"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[11px] font-bold tracking-[0.1em] mt-5 transition-colors"
          >
            <Phone size={12} />
            +852-2802 2802
          </a>
        </div>
      </section>

      {/* About This Location */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '為何選擇灣仔' : 'A Pizza Destination in Wan Chai'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
            {isHK ? '位於灣仔中心地帶' : 'Located in the Heart of Wan Chai'}
          </h2>
          <div className="space-y-4 text-white/60 text-sm font-sans font-light leading-relaxed">
            <p>
              {isHK
                ? '我們坐落於充滿活力的灣仔利東街，這裡集合了香港最精彩的餐飲文化。無論是午餐休閒小聚、浪漫晚餐約會，還是家庭聚餐，Vincenzo Capuano 都是您在香港品嚐當代拿坡里薄餅的不二之選。'
                : 'Situated on vibrant Lee Tung Avenue in Wan Chai, we are perfectly placed for both casual lunch visits and leisurely dinners. Whether you\'re nearby for work, exploring the neighbourhood, or making a special trip for authentic Neapolitan pizza in Hong Kong — we are easy to find and worth the visit.'}
            </p>
            <p>
              {isHK
                ? '我們的薄餅以意大利那不勒斯傳統工藝製作，使用 Caputo 麵粉、San Marzano 番茄及優質配料，呈現出輕盈、充滿空氣感的麵皮（cornicione）。'
                : 'Every pizza is crafted using time-honoured Naples technique — Caputo flour, San Marzano tomatoes, and premium ingredients that produce a signature airy, cloud-like crust (cornicione).'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              label: isHK ? '步行可達' : 'Easy to Reach',
              detail: isHK ? '灣仔地鐵站 D 出口，步行約 5 分鐘' : 'Wan Chai MTR Exit D, 5 minute walk',
            },
            {
              label: isHK ? '適合各種場合' : 'Great for Every Occasion',
              detail: isHK ? '約會晚餐、家庭聚餐、商務午餐皆宜' : 'Date nights, family dinners, group dining & celebrations',
            },
            {
              label: isHK ? '預留 30% 即場座位' : 'Walk-Ins Welcome',
              detail: isHK ? '我們保留 30% 座位予即場客人' : 'We reserve 30% of seating for walk-in guests',
            },
            {
              label: isHK ? '薄餅外賣服務' : 'Delivery Available',
              detail: isHK ? '提供外賣送餐服務' : 'Order pizza delivery to your door',
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-surface border border-white/[0.07]">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
              <div>
                <p className="text-white text-sm font-bold font-sans tracking-wide">{item.label}</p>
                <p className="text-white/55 text-xs font-sans font-light mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4 text-center">
            {isHK ? '各種場合' : 'Ideal For'}
          </p>
          <h2 className="font-display text-4xl text-white text-center mb-12">
            {isHK ? '每個場合的完美選擇' : 'Pizza for Every Occasion in Hong Kong'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { en: 'Date Night Pizza', hk: '約會晚餐', en_sub: 'Romantic & intimate', hk_sub: '浪漫二人晚餐' },
              { en: 'Family Dining', hk: '家庭聚餐', en_sub: 'Family-friendly atmosphere', hk_sub: '適合全家大小' },
              { en: 'Group Dinner', hk: '朋友聚會', en_sub: 'Perfect for sharing', hk_sub: '最適合分享' },
              { en: 'Business Lunch', hk: '商務午餐', en_sub: 'Casual yet refined', hk_sub: '輕鬆而精緻' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 border border-white/[0.07] hover:border-gold/30 transition-colors">
                <p className="text-white text-sm font-bold font-sans mb-1">{isHK ? item.hk : item.en}</p>
                <p className="text-white/55 text-xs font-sans font-light">{isHK ? item.hk_sub : item.en_sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Embed Area */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-4xl text-white mb-6">
              {isHK ? '如何找到我們' : 'How to Find Us'}
            </h2>
            <div className="space-y-5 text-sm font-sans">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">{isHK ? '地址' : 'Address'}</p>
                  <p className="text-white/50 font-light mt-0.5">
                    {isHK
                      ? 'Lee Tung Avenue, GF Unit 01 04 05, 200 皇后大道東, 灣仔, 香港'
                      : 'Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai, Hong Kong'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Train size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">{isHK ? '最近港鐵站' : 'Nearest MTR'}</p>
                  <p className="text-white/50 font-light mt-0.5">
                    {isHK ? '灣仔站 D 出口，沿皇后大道東步行約 5 分鐘' : 'Wan Chai Station Exit D — 5 minute walk along Queens Road East'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">{isHK ? '聯絡電話' : 'Phone'}</p>
                  <a href="tel:+85228022802" className="text-white/50 hover:text-gold transition-colors font-light mt-0.5 block">
                    +852-2802 2802
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/mWac4KcwCQSUUibU9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-6 py-3 hover:bg-white transition-colors"
            >
              {isHK ? '在 Google Maps 開啟' : 'Open in Google Maps'}
              <ChevronRight size={13} />
            </a>
          </div>

          <div className="bg-surface border border-white/[0.07] overflow-hidden aspect-[4/3] relative">
            <iframe
              title={isHK ? 'Vincenzo Capuano 灣仔位置' : 'Vincenzo Capuano Wan Chai Location'}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.996!2d114.170!3d22.276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE2JzMzLjYiTiAxMTTCsDEwJzEyLjAiRQ!5e0!3m2!1sen!2shk!4v1"
              className="w-full h-full grayscale opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
            {[
              {
                q_en: 'Where are you located in Hong Kong?',
                q_hk: '你們在香港哪裡？',
                a_en: 'We are located at Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai, Hong Kong. The nearest MTR is Wan Chai Station, Exit D — approximately a 5 minute walk.',
                a_hk: '我們位於香港灣仔皇后大道東 200 號利東街地下 01 04 05 號舖。最近地鐵站為灣仔站 D 出口，步行約 5 分鐘。',
              },
              {
                q_en: 'Are you near Wan Chai MTR Station?',
                q_hk: '你們靠近灣仔港鐵站嗎？',
                a_en: 'Yes — we are approximately a 5 minute walk from Wan Chai MTR Station Exit D, along Queens Road East.',
                a_hk: '是的，從灣仔港鐵站 D 出口沿皇后大道東步行約 5 分鐘即可到達。',
              },
              {
                q_en: 'Do you accept walk-ins?',
                q_hk: '可以即場入座嗎？',
                a_en: 'Yes. We reserve 30% of our seating for walk-in guests. We recommend arriving early, especially on weekends and public holidays.',
                a_hk: '可以。我們保留 30% 座位供即場客人使用。建議您早點到達，尤其是週末及公眾假期。',
              },
              {
                q_en: 'Is this a good spot for dinner in Wan Chai?',
                q_hk: '在灣仔用晚餐有什麼推薦嗎？',
                a_en: 'Absolutely. Vincenzo Capuano is ideal for pizza date nights, casual family dinners, group meals, and celebrations in Wan Chai. We serve contemporary Neapolitan pizza in a warm, atmospheric setting.',
                a_hk: '非常適合！無論是浪漫約會、家庭聚餐、朋友聚會還是慶祝活動，Vincenzo Capuano 都是灣仔用餐的絕佳選擇。',
              },
            ].map((faq, i) => (
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
          {isHK ? '立即訂座' : 'Visit Us in Wan Chai'}
        </p>
        <h2 className="font-display text-5xl text-white mb-6">
          {isHK ? '準備好用餐了嗎？' : 'Ready for Neapolitan Pizza in Hong Kong?'}
        </h2>
        <p className="text-white/50 text-sm font-sans font-light max-w-xl mx-auto mb-10">
          {isHK
            ? '預訂您的座位，體驗由世界冠軍主廚 Vincenzo Capuano 帶來的當代拿坡里薄餅。'
            : 'Reserve your table for contemporary Neapolitan pizza in Wan Chai. A destination for pizza lovers in Hong Kong.'}
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
