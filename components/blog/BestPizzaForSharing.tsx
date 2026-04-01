
import React from 'react';
import { Language } from '../../translations';
import { BlogLayout, BlogH2, BlogP, BlogHighlight, BlogList } from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

export const BestPizzaForSharing: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '香港用餐體驗' : 'Dining in Hong Kong'}
      title={isHK ? '為什麼薄餅是香港最適合分享的美食' : 'Why Pizza Is One of the Best Meals for Sharing in Hong Kong'}
      readTime={isHK ? '閱讀時間約 4 分鐘' : '4 minute read'}
    >
      {isHK ? (
        <>
          <BlogP>在香港，分享美食是一種文化，也是一種語言。從茶樓點心到火鍋，香港的飲食文化從來都是以「分享」為核心。而在所有適合分享的美食中，拿坡里薄餅或許是最理想的選擇之一。</BlogP>
          <BlogHighlight>「在那不勒斯，薄餅從來都不是一個人吃的食物。」</BlogHighlight>
          <BlogH2>薄餅為何天生適合分享</BlogH2>
          <BlogP>薄餅的形狀——圓形、易於切割——讓它天然成為分享的理想食物。但當代拿坡里薄餅更進一步：用黃金剪刀切開的薄餅，每一塊都保留著完整的麵皮質感，讓每個人都能享受到最佳的用餐體驗。</BlogP>
          <BlogList items={[
            '可以同時點多款薄餅，探索不同口味',
            '黃金剪刀切割，每塊都保留完整的 cornicione 麵皮',
            '適合 2 人到 12 人的聚餐場合',
            '開胃小食和甜品同樣適合分享',
          ]} />
          <BlogH2>香港約會晚餐的最佳薄餅選擇</BlogH2>
          <BlogP>對於情侶來說，Vincenzo Capuano 提供了完美的約會晚餐環境。溫馨的燈光、精緻的食物，以及那獨特的黃金剪刀儀式，讓每一次約會都充滿儀式感和驚喜。</BlogP>
          <BlogP>我們建議情侶點一款招牌薄餅加一款時令薄餅，以及一份前菜共享。這樣的組合既豐富又不會讓人覺得過量，恰到好處。</BlogP>
          <BlogH2>朋友聚餐的最佳策略</BlogH2>
          <BlogP>一群朋友來訪？這是我們最喜歡的場景。4-6 人的朋友聚餐，我們建議點 3-4 款不同風格的薄餅，從傳統的 Margherita 到我們的招牌時令薄餅，讓大家有機會品嚐更多元化的口味。</BlogP>
          <BlogList items={[
            '傳統款式：Margherita、Bufala——了解拿坡里薄餅的基礎',
            '招牌款式：我們的世界冠軍配方，最具代表性',
            '時令款式：探索當季最新鮮的食材組合',
            '別忘了配上我們的開胃前菜和意式甜品',
          ]} />
          <BlogH2>家庭用餐的完美選擇</BlogH2>
          <BlogP>Vincenzo Capuano 歡迎各年齡層的客人。我們的薄餅適合家庭用餐——口味豐富多元，有適合成人的精緻選擇，也有孩子們喜愛的經典口味。</BlogP>
          <BlogH2>在香港灣仔預訂您的分享薄餅體驗</BlogH2>
          <BlogP>Vincenzo Capuano 香港分店位於灣仔利東街，是香港最適合分享薄餅的場所。無論是約會、朋友聚會還是家庭聚餐，我們都為您準備好了最完美的分享體驗。</BlogP>
        </>
      ) : (
        <>
          <BlogP>Hong Kong has always been a city that eats together. From dim sum at round tables to hotpot shared over broth, the act of sharing food is embedded in the culture. And within that context, contemporary Neapolitan pizza has found a surprisingly natural home.</BlogP>
          <BlogHighlight>"In Naples, pizza was never meant to be eaten alone."</BlogHighlight>
          <BlogH2>Why Neapolitan Pizza Is Built for Sharing</BlogH2>
          <BlogP>The geometry of a pizza — circular, easily divided — already makes it an ideal sharing format. But contemporary Neapolitan pizza goes a step further. Cut with golden scissors rather than a wheel, every piece of our pizza arrives at your side of the table with its full structure intact — the cornicione tall and airy, the toppings undisturbed.</BlogP>
          <BlogList items={[
            'Order multiple pizzas and discover a range of styles across one table',
            'Scissors cutting means every slice has the full crust experience',
            'Works equally well for 2 or 12 — the format scales',
            'Starters, salads, and desserts designed to complement the sharing format',
          ]} />
          <BlogH2>Pizza Date Night in Hong Kong</BlogH2>
          <BlogP>Vincenzo Capuano is, consistently, one of the most recommended spots for a pizza date night in Hong Kong. The atmosphere is warm, the food is striking enough to prompt conversation, and the golden scissors ritual gives every visit a moment of theatre that makes it feel special.</BlogP>
          <BlogP>For a couple, we recommend one signature pizza alongside a seasonal choice — plus a starter to share before. That combination is generous without being overwhelming, and gives you a proper taste of the Capuano range.</BlogP>
          <BlogH2>The Best Strategy for Group Pizza in Hong Kong</BlogH2>
          <BlogP>For a group of 4–6, the approach changes. Three or four pizzas across the table — a classic, a signature, and something seasonal — lets everyone taste more, discuss more, and enjoy the breadth of what a contemporary Neapolitan menu can offer.</BlogP>
          <BlogList items={[
            'Classics (Margherita, Bufala) — understand the foundation',
            'Signature pizzas — the world champion recipes that define the brand',
            'Seasonal specials — explore what\'s freshest right now',
            'A starter plate or two to bridge the courses',
          ]} />
          <BlogH2>Family Pizza Dining in Hong Kong</BlogH2>
          <BlogP>Vincenzo Capuano welcomes families. The menu spans a range of flavour profiles from straightforward classics to more complex contemporary combinations. It is genuinely family-friendly in both atmosphere and menu design — accessible to all ages without being generic.</BlogP>
          <BlogH2>Best Pizza for Sharing in Wan Chai, Hong Kong</BlogH2>
          <BlogP>Whether you're planning a group pizza dinner in Hong Kong, a date night in Wan Chai, or a casual family outing — Lee Tung Avenue is where you'll find the sharing pizza experience done properly. No other format rewards the group dining dynamic quite like contemporary Neapolitan pizza, cut table-side with golden scissors.</BlogP>
        </>
      )}
    </BlogLayout>
  );
};
