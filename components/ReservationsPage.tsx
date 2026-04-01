
import React from 'react';
import { ChevronRight, Calendar, Users, Clock, Phone, Star } from 'lucide-react';
import { Language } from '../translations';

interface ReservationsPageProps {
  lang: Language;
  onBookClick: () => void;
}

export const ReservationsPage: React.FC<ReservationsPageProps> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-16 text-center">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '預約訂座' : 'Pizza Reservation Hong Kong'}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-6">
          {isHK
            ? '在 Vincenzo Capuano 訂座'
            : 'Reserve a Table at Vincenzo Capuano Hong Kong'}
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans font-light mb-10">
          {isHK
            ? '為您的約會晚餐、家庭聚餐或團體用餐預留座位。體驗當代拿坡里薄餅的精髓，由世界冠軍主廚 Vincenzo Capuano 親自掌廚。'
            : 'Reserve your table for contemporary Neapolitan pizza in Wan Chai, Hong Kong. Ideal for date nights, family dinners, group dining, and celebrations.'}
        </p>
        <button
          onClick={onBookClick}
          className="inline-flex items-center gap-2 bg-gold text-charcoal text-sm font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white transition-colors"
        >
          {isHK ? '立即訂座' : 'Book a Table Now'}
          <ChevronRight size={16} />
        </button>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-white/[0.07] p-8 text-center">
          <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-5">
            <Calendar size={20} className="text-gold" />
          </div>
          <h3 className="text-white text-sm font-bold font-sans tracking-wide mb-3">
            {isHK ? '線上訂座' : 'Online Booking'}
          </h3>
          <p className="text-white/50 text-xs font-sans font-light leading-relaxed">
            {isHK
              ? '透過我們的線上訂座系統預留座位，簡單快捷。'
              : 'Book your table online via our reservation system — fast, easy, and confirmed instantly.'}
          </p>
        </div>

        <div className="bg-surface border border-white/[0.07] p-8 text-center">
          <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-5">
            <Users size={20} className="text-gold" />
          </div>
          <h3 className="text-white text-sm font-bold font-sans tracking-wide mb-3">
            {isHK ? '即場入座' : 'Walk-Ins Welcome'}
          </h3>
          <p className="text-white/50 text-xs font-sans font-light leading-relaxed">
            {isHK
              ? '我們保留 30% 座位供即場客人使用。建議繁忙時段提前訂座。'
              : 'We reserve 30% of our seating for walk-in guests. We recommend reserving ahead during peak times.'}
          </p>
        </div>

        <div className="bg-surface border border-white/[0.07] p-8 text-center">
          <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-5">
            <Phone size={20} className="text-gold" />
          </div>
          <h3 className="text-white text-sm font-bold font-sans tracking-wide mb-3">
            {isHK ? '電話訂座' : 'Phone Reservation'}
          </h3>
          <p className="text-white/50 text-xs font-sans font-light leading-relaxed mb-3">
            {isHK ? '如需協助，請致電：' : 'Prefer to call? Reach us directly at:'}
          </p>
          <a href="tel:+85294483165" className="text-gold text-sm font-bold hover:text-white transition-colors">
            +852 9448 3165
          </a>
        </div>
      </section>

      {/* Dining at VC */}
      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
              {isHK ? '用餐體驗' : 'Dining at Vincenzo Capuano'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              {isHK ? '完美場合' : 'Perfect for Dinner, Celebrations & Sharing'}
            </h2>
            <div className="space-y-4 text-white/60 text-sm font-sans font-light leading-relaxed">
              <p>
                {isHK
                  ? '無論是浪漫的約會晚餐、家庭聚餐，還是與朋友共享的愉快時光，Vincenzo Capuano 都能提供最美好的用餐體驗。我們的當代拿坡里薄餅以正宗食材和獨特工藝製作，每一口都是對那不勒斯傳統的致敬。'
                  : 'Whether you\'re planning a pizza date night in Hong Kong, a family-friendly Italian dinner, or a group celebration — Vincenzo Capuano is built for sharing. Our contemporary Neapolitan pizza is crafted with premium ingredients and the iconic scissor-cut ritual, making every visit an experience worth remembering.'}
              </p>
              <p>
                {isHK
                  ? '我們同樣接受團體訂座及特別活動安排。如需了解更多，請聯絡我們的團隊。'
                  : 'We also accommodate group dining and special events. Contact our team for group reservations and larger bookings.'}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Star,
                en: 'Pizza Date Night Hong Kong',
                hk: '約會晚餐',
                en_sub: 'Intimate atmosphere, award-winning pizza',
                hk_sub: '精緻氛圍，頂級薄餅',
              },
              {
                icon: Users,
                en: 'Group Dining Pizza Hong Kong',
                hk: '團體用餐',
                en_sub: 'Ideal for groups of 4–12 guests',
                hk_sub: '適合 4–12 人團體',
              },
              {
                icon: Calendar,
                en: 'Birthday & Celebration Dinners',
                hk: '慶生及慶祝活動',
                en_sub: 'Mark special moments over Neapolitan pizza',
                hk_sub: '以拿坡里薄餅慶祝特別時刻',
              },
              {
                icon: Clock,
                en: 'Pizza Lunch Hong Kong',
                hk: '午餐',
                en_sub: 'Open daily from 12:00',
                hk_sub: '每日中午 12:00 開始供應午餐',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-5 p-5 border border-white/[0.07] hover:border-gold/20 transition-colors">
                  <Icon size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-bold font-sans">{isHK ? item.hk : item.en}</p>
                    <p className="text-white/40 text-xs font-sans font-light mt-0.5">{isHK ? item.hk_sub : item.en_sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-surface border border-white/[0.07] p-10 md:p-16 text-center">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '立即預約' : 'Reserve Your Table'}
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            {isHK ? '準備好用餐了嗎？' : 'Book Your Pizza Dinner in Hong Kong'}
          </h2>
          <p className="text-white/50 text-sm font-sans font-light max-w-xl mx-auto mb-8">
            {isHK
              ? '點擊下方按鈕，透過我們的訂座系統預留您的座位。'
              : 'Use our online booking system to reserve your table. Confirmed instantly — no waiting required.'}
          </p>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white transition-colors"
          >
            {isHK ? '立即訂座' : 'Book Now'}
            <ChevronRight size={14} />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-white text-center mb-10">
            {isHK ? '訂座常見問題' : 'Reservation FAQs'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q_en: 'Do I need a reservation?',
                q_hk: '需要預先訂座嗎？',
                a_en: 'Reservations are strongly recommended, especially for evenings and weekends. We reserve 30% of seating for walk-ins, but pre-booking guarantees your table.',
                a_hk: '我們強烈建議提前訂座，尤其是在晚上和週末。雖然我們保留 30% 座位予即場客人，但預先訂座可確保您的座位。',
              },
              {
                q_en: 'Do you accept walk-ins?',
                q_hk: '可以即場入座嗎？',
                a_en: 'Yes. We always reserve 30% of our seating for walk-in guests. However, during busy periods we recommend booking ahead to avoid disappointment.',
                a_hk: '可以。我們始終保留 30% 座位供即場客人使用。但在繁忙時段，建議提前訂座以免向隅。',
              },
              {
                q_en: 'Is this suitable for groups?',
                q_hk: '適合團體用餐嗎？',
                a_en: 'Absolutely. We welcome group dining for 4–12 guests. For larger parties or private events, please contact us directly at +852 9448 3165.',
                a_hk: '非常適合。我們歡迎 4–12 人的團體用餐。如需更大規模或私人活動安排，請直接致電 +852 9448 3165 聯絡我們。',
              },
              {
                q_en: 'Can I book for a celebration?',
                q_hk: '可以訂座慶祝特別活動嗎？',
                a_en: 'Yes — birthdays, anniversaries, and celebrations are always welcome at Vincenzo Capuano Hong Kong. Please let us know when booking so we can prepare accordingly.',
                a_hk: '可以！我們非常歡迎生日、周年紀念及各種慶祝活動。訂座時請告知，我們會為您做好準備。',
              },
              {
                q_en: 'Is there indoor seating?',
                q_hk: '有室內座位嗎？',
                a_en: 'Yes, we offer comfortable indoor seating at our Lee Tung Avenue, Wan Chai location.',
                a_hk: '有的，我們在利東街的灣仔分店設有舒適的室內座位。',
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

    </div>
  );
};
