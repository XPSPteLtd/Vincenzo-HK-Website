
import React from 'react';
import { ChevronRight, Users, Star, Phone, Calendar } from 'lucide-react';
import { Language } from '../translations';

interface GroupDiningPageProps {
  lang: Language;
  onBookClick: () => void;
}

export const GroupDiningPage: React.FC<GroupDiningPageProps> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <div className="bg-charcoal min-h-screen pt-24 lg:pt-40 pb-24">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-20">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
          {isHK ? '私人活動 · 團體用餐' : 'Group Dining & Private Events'}
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-none mb-6 max-w-4xl">
          {isHK
            ? '香港團體薄餅晚餐'
            : 'Group Dining & Private Events in Hong Kong'}
        </h1>
        <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed font-sans font-light mb-10">
          {isHK
            ? '慶祝生日、公司活動或朋友聚會？在 Vincenzo Capuano 香港分店，每一次分享都是難忘的體驗。'
            : 'Host birthdays, celebrations, team dinners, and special occasions at Vincenzo Capuano Hong Kong — a contemporary Neapolitan pizza destination built for sharing.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-white transition-colors"
          >
            {isHK ? '查詢活動訂座' : 'Enquire About Group Booking'}
            <ChevronRight size={14} />
          </button>
          <a
            href="tel:+85294483165"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:border-white/60 hover:text-white transition-colors"
          >
            <Phone size={14} />
            +852 9448 3165
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white/[0.08]" />
      </div>

      {/* Occasions */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4 text-center">
          {isHK ? '適合各種場合' : 'Celebrate Over Pizza'}
        </p>
        <h2 className="font-display text-4xl text-white text-center mb-12">
          {isHK ? '每個慶典的完美選擇' : 'Ideal for Groups & Special Occasions'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Star,
              title_en: 'Birthday Dinners',
              title_hk: '生日慶祝晚餐',
              body_en: 'Celebrate birthdays in style with our contemporary Neapolitan pizza at Lee Tung Avenue, Wan Chai. A memorable setting for birthday groups in Hong Kong.',
              body_hk: '在灣仔利東街，以我們的當代拿坡里薄餅慶祝生日。為香港生日慶祝提供難忘的場地。',
            },
            {
              icon: Users,
              title_en: 'Team & Corporate Dinners',
              title_hk: '公司及團隊晚餐',
              body_en: 'A relaxed yet impressive venue for company gatherings and team dinners. Contemporary pizza for group dining in Hong Kong.',
              body_hk: '為公司聚會和團隊晚餐提供輕鬆而令人印象深刻的場地。香港團體用餐的當代薄餅首選。',
            },
            {
              icon: Calendar,
              title_en: 'Celebrations & Anniversaries',
              title_hk: '慶祝活動及週年紀念',
              body_en: 'Mark anniversaries, promotions, and milestones with shared Neapolitan pizza. Naples-style group dining in Hong Kong.',
              body_hk: '以共享拿坡里薄餅慶祝周年紀念、晉升和里程碑。香港那不勒斯風格的團體用餐。',
            },
            {
              icon: Users,
              title_en: 'Friends & Social Gatherings',
              title_hk: '朋友及社交聚會',
              body_en: 'Our sharing-friendly menu and warm atmosphere make Vincenzo Capuano the perfect pizza restaurant for friends in Hong Kong.',
              body_hk: '我們適合分享的菜單和溫馨的氛圍使 Vincenzo Capuano 成為香港朋友聚餐的完美薄餅餐廳。',
            },
            {
              icon: Star,
              title_en: 'Casual Private Dining',
              title_hk: '休閒私人用餐',
              body_en: 'A premium-casual atmosphere that works for both intimate group dinners and larger celebrations.',
              body_hk: '高端休閒的氛圍，適合親密的小型晚餐和較大規模的慶祝活動。',
            },
            {
              icon: Phone,
              title_en: 'Custom Event Enquiries',
              title_hk: '特別活動查詢',
              body_en: 'Have a special requirement? Contact our team directly for bespoke group dining arrangements.',
              body_hk: '有特殊需求？直接聯絡我們的團隊，為您安排專屬的團體用餐。',
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-surface border border-white/[0.07] p-8 hover:border-gold/20 transition-colors">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="text-white text-sm font-bold font-sans mb-3">
                  {isHK ? item.title_hk : item.title_en}
                </h3>
                <p className="text-white/50 text-xs font-sans font-light leading-relaxed">
                  {isHK ? item.body_hk : item.body_en}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Shared Dining Naples Style */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
              {isHK ? '那不勒斯式分享用餐' : 'Shared Dining, Naples Style'}
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              {isHK ? '薄餅本來就是為分享而生' : 'Pizza Is Made for Sharing'}
            </h2>
            <div className="space-y-4 text-white/60 text-sm font-sans font-light leading-relaxed">
              <p>
                {isHK
                  ? '在那不勒斯，薄餅從來都不是一個人吃的食物。它是聚會、慶祝和連結的媒介。在 Vincenzo Capuano，我們保留了這種分享精神，讓每一桌的用餐體驗都充滿歡樂與美食的樂趣。'
                  : 'In Naples, pizza has always been a shared experience. It is the food of gatherings, celebrations, and connection. At Vincenzo Capuano Hong Kong, we honour that tradition — every pizza is cut with golden scissors and passed around the table the way it was meant to be.'}
              </p>
              <p>
                {isHK
                  ? '我們的菜單設計非常適合團體用餐——多款招牌薄餅、開胃小食和甜品，讓您和您的客人可以盡情品嚐和分享。'
                  : 'Our menu is designed for sharing — multiple signature pizzas, starters, and desserts that let your group taste and discover together.'}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { en: 'Groups of 4–12 guests', hk: '4–12 人團體', en_sub: 'Ideal group size for sharing our menu', hk_sub: '分享菜單的理想團體規模' },
              { en: 'Seasonal & signature pizza selection', hk: '時令及招牌薄餅精選', en_sub: 'Explore the full contemporary Neapolitan range', hk_sub: '探索完整的當代拿坡里系列' },
              { en: 'Warm, relaxed atmosphere', hk: '溫馨、輕鬆的氛圍', en_sub: 'Dressed casually — always welcoming', hk_sub: '隨意穿著——永遠熱情款待' },
              { en: 'Reservations recommended for groups', hk: '建議團體提前訂座', en_sub: 'Book ahead to secure your table', hk_sub: '提前預訂以確保您的座位' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-white/[0.07]">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold font-sans">{isHK ? item.hk : item.en}</p>
                  <p className="text-white/40 text-xs font-sans font-light mt-0.5">{isHK ? item.hk_sub : item.en_sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Enquiries */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-surface border border-white/[0.07] p-10 md:p-16 text-center">
          <p className="text-gold text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            {isHK ? '活動查詢' : 'Event Enquiries'}
          </p>
          <h2 className="font-display text-4xl text-white mb-6">
            {isHK ? '為您的下一個特別場合制定計劃' : 'Plan Your Next Group Dining Experience'}
          </h2>
          <p className="text-white/50 text-sm font-sans font-light max-w-lg mx-auto mb-8 leading-relaxed">
            {isHK
              ? '無論是 4 人小聚還是 12 人盛宴，我們都很樂意為您安排。如有特殊需求，請直接致電或使用下方訂座按鈕聯絡我們。'
              : 'Whether you\'re planning an intimate group dinner or a larger celebration, our team is happy to help. For bespoke arrangements or larger parties, please contact us directly.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-colors"
            >
              {isHK ? '訂座查詢' : 'Book a Group Table'}
              <ChevronRight size={14} />
            </button>
            <a
              href="tel:+85294483165"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:border-white/60 hover:text-white transition-colors"
            >
              <Phone size={14} />
              {isHK ? '致電我們' : 'Call +852 9448 3165'}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-white text-center mb-10">
            {isHK ? '常見問題' : 'Group Dining FAQs'}
          </h2>
          <div className="space-y-4">
            {[
              {
                q_en: 'Can I book for a group?',
                q_hk: '可以為團體訂座嗎？',
                a_en: 'Yes. We welcome group dining for 4–12 guests. Simply use our online booking system or call +852 9448 3165 to arrange your group reservation.',
                a_hk: '可以。我們歡迎 4–12 人的團體用餐。只需使用我們的在線訂座系統或致電 +852 9448 3165 安排您的團體訂座。',
              },
              {
                q_en: 'Do you host birthday dinners?',
                q_hk: '你們接待生日晚餐嗎？',
                a_en: 'Yes — birthdays and celebrations are always welcome. Please let us know when booking so we can prepare to make your occasion special.',
                a_hk: '是的——我們非常歡迎生日和慶祝活動。訂座時請告知，我們會為您的特別場合做好準備。',
              },
              {
                q_en: 'Is there a set menu for groups?',
                q_hk: '團體用餐有套餐選擇嗎？',
                a_en: 'We offer our full à la carte menu for group dining, which is ideal for sharing. For customised set menus or larger events, please contact us directly at +852 9448 3165.',
                a_hk: '我們為團體用餐提供完整的單點菜單，非常適合分享。如需定制套餐或更大規模的活動，請直接致電 +852 9448 3165 聯絡我們。',
              },
              {
                q_en: 'What is the maximum group size?',
                q_hk: '最大團體規模是多少？',
                a_en: 'We comfortably accommodate groups of up to 12 guests through our standard booking system. For larger parties, please contact us directly to discuss arrangements.',
                a_hk: '我們的標準訂座系統可輕鬆接待最多 12 人的團體。更大規模的聚會，請直接聯絡我們討論安排。',
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
