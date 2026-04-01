
import React from 'react';
import { Language } from '../../translations';
import { BlogLayout, BlogH2, BlogP, BlogHighlight, BlogList } from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

export const ContemporaryNeapolitanHK: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '香港薄餅文化' : 'Pizza in Hong Kong'}
      title={isHK ? '當代拿坡里薄餅為何在香港興起' : 'Why Contemporary Neapolitan Pizza Is Finding a Place in Hong Kong'}
      readTime={isHK ? '閱讀時間約 5 分鐘' : '5 minute read'}
    >
      {isHK ? (
        <>
          <BlogP>香港是亞洲最多元化的美食城市之一。從米其林星級餐廳到街邊大排檔，這座城市的食客對品質和真實性有著極高的要求。近年來，當代拿坡里薄餅在香港快速崛起，成為高端休閒餐飲的新代名詞。</BlogP>
          <BlogHighlight>「當代薄餅不只是一個流派，更是一套哲學。」— Vincenzo Capuano</BlogHighlight>
          <BlogH2>香港食客為何愛上當代拿坡里薄餅</BlogH2>
          <BlogP>香港的美食文化深受全球影響，食客們既精通廣東飲食傳統，也對世界各地的精緻料理充滿好奇。當代拿坡里薄餅以其完美的品質與工藝，恰好滿足了這群對食物有高度要求的食客。</BlogP>
          <BlogList items={[
            '輕盈、易消化的麵皮——適合香港的飲食偏好',
            '視覺上極具衝擊力的 cornicione 麵皮，符合「食不僅飽」的追求',
            '頂級意大利食材，呼應香港對優質食材的重視',
            '獨特的黃金剪刀切割儀式，創造難忘的用餐體驗',
          ]} />
          <BlogH2>為什麼 Vincenzo Capuano 選擇香港</BlogH2>
          <BlogP>對於 Vincenzo Capuano 來說，香港是亞洲最理想的城市，將當代拿坡里薄餅文化帶入亞洲。這座城市對美食的熱情、對真實性的重視，以及對創新的開放態度，與當代拿坡里薄餅的精神完美契合。</BlogP>
          <BlogP>灣仔利東街的選址也大有深意。這裡是香港最充滿活力的餐飲區之一，吸引著來自本地和世界各地的食客，是展示當代拿坡里薄餅最理想的舞台。</BlogP>
          <BlogH2>香港薄餅市場的獨特性</BlogH2>
          <BlogP>香港的薄餅市場競爭激烈，但懂得欣賞正宗拿坡里工藝的食客仍然是少數。Vincenzo Capuano 填補了這一空缺——不是簡單地提供「好吃的薄餅」，而是提供一種完整的那不勒斯薄餅體驗：從麵糰發酵到黃金剪刀的儀式，每一個環節都充滿故事。</BlogP>
          <BlogH2>體驗香港最佳當代拿坡里薄餅</BlogH2>
          <BlogP>位於灣仔利東街的 Vincenzo Capuano 香港分店，是香港唯一一家由世界薄餅冠軍傳授技藝的正宗當代拿坡里薄餅店。無論您是薄餅愛好者還是首次嘗試拿坡里薄餅，這裡都是您在香港探索薄餅文化的最佳起點。</BlogP>
        </>
      ) : (
        <>
          <BlogP>Hong Kong is one of Asia's most sophisticated food cities. Its dining culture is shaped by generations of Cantonese culinary tradition, a deeply cosmopolitan outlook, and a population of food-literate diners who have spent decades eating exceptionally well. That context matters — because contemporary Neapolitan pizza has found a particularly strong footing here.</BlogP>
          <BlogHighlight>"Contemporary pizza is not just a style, it is a philosophy." — Vincenzo Capuano</BlogHighlight>
          <BlogH2>Why Hong Kong Diners Have Embraced It</BlogH2>
          <BlogP>Hong Kong diners have long valued two things above all: quality and authenticity. Contemporary Neapolitan pizza — as practised by Vincenzo Capuano — delivers both, with an added layer of craft and storytelling that resonates with Hong Kong's dining culture.</BlogP>
          <BlogList items={[
            "Light, airy, digestible crust — a texture closer to Hong Kong's bread tradition than heavy Western pizza",
            'Visually dramatic cornicione that feels premium without being inaccessible',
            "Premium Italian ingredients that match Hong Kong's appetite for quality produce",
            'The golden scissors ritual — memorable, different, and shareable',
          ]} />
          <BlogH2>Why Vincenzo Capuano Chose Hong Kong</BlogH2>
          <BlogP>Hong Kong was the natural choice for Vincenzo Capuano's Asian debut — a city with the culinary sophistication to appreciate what contemporary Neapolitan pizza actually is, rather than just treating it as "fancy pizza."</BlogP>
          <BlogP>The Wan Chai location at Lee Tung Avenue places Vincenzo Capuano at the heart of one of Hong Kong's most dynamic dining corridors — accessible, vibrant, and surrounded by a community of food-serious diners.</BlogP>
          <BlogH2>Italian Pizza in Hong Kong: What to Look For</BlogH2>
          <BlogP>Not all Neapolitan pizza is the same. The defining markers of genuine contemporary Neapolitan pizza in Hong Kong are a dramatically airy cornicione (the crust edge), a dough made with high-hydration technique and extended fermentation, and a commitment to premium ingredients — San Marzano tomatoes, buffalo mozzarella, Caputo flour.</BlogP>
          <BlogP>At Vincenzo Capuano Wan Chai, all of this is present by design — not as a marketing claim, but as the direct inheritance of a third-generation Naples pizza tradition refined by a 2022 World Champion.</BlogP>
          <BlogH2>The Best Contemporary Neapolitan Pizza in Hong Kong</BlogH2>
          <BlogP>If you're looking for authentic pizza in Hong Kong that goes beyond the standard Italian restaurant offering, Vincenzo Capuano at Lee Tung Avenue, Wan Chai is where the standard is set. This is what contemporary Neapolitan pizza in Hong Kong looks like when done properly.</BlogP>
        </>
      )}
    </BlogLayout>
  );
};
