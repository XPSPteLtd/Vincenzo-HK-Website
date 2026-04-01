
import React from 'react';
import { Language } from '../../translations';
import { BlogLayout, BlogH2, BlogP, BlogHighlight, BlogList } from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

export const WhatIsNeapolitanPizza: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '薄餅知識' : 'Pizza Education'}
      title={isHK ? '什麼是拿坡里薄餅？' : 'What Is Neapolitan Pizza?'}
      readTime={isHK ? '閱讀時間約 4 分鐘' : '4 minute read'}
    >
      {isHK ? (
        <>
          <BlogP>拿坡里薄餅（pizza napoletana）是所有薄餅風格的起源，誕生於意大利南部城市那不勒斯。幾個世紀以來，它從一種簡單的街頭食物演變成受到全球頂級廚師、美食家和 UNESCO 認可的烹飪藝術形式。</BlogP>
          <BlogHighlight>「拿坡里薄餅不是一種產品，它是一種傳統。」</BlogHighlight>
          <BlogH2>拿坡里薄餅的起源</BlogH2>
          <BlogP>18 世紀的那不勒斯，麵包師傅開始在扁平麵糰上加入番茄——當時歐洲許多地方還認為番茄有毒。這種簡單的組合，配上本地食材，逐漸演變成我們今天所認識的薄餅。</BlogP>
          <BlogP>1889 年，廚師 Raffaele Esposito 為紀念意大利王后 Margherita 製作了一款以番茄（紅）、莫扎里拉芝士（白）和羅勒（綠）為配料的薄餅，以呼應意大利國旗的顏色。這就是傳奇的 Margherita 薄餅的誕生。</BlogP>
          <BlogH2>正宗拿坡里薄餅的特徵</BlogH2>
          <BlogList items={[
            '以柔軟、有彈性的麵糰製成，在非常高溫的薪柴烤爐中烘烤',
            '標誌性的突出麵皮邊緣（cornicione），帶有自然焦香斑點',
            '使用 San Marzano 番茄、新鮮水牛莫扎里拉芝士等頂級義大利食材',
            '薄而軟的中心，可以折疊食用（「a libretto」）',
            '整個製作過程講求手工技藝，不使用機器壓製',
          ]} />
          <BlogH2>當代拿坡里薄餅：傳統的進化</BlogH2>
          <BlogP>雖然傳統拿坡里薄餅至今仍受到 AVPN（拿坡里正宗薄餅協會）的嚴格保護，但一些革新派的薄餅師傅——包括 Vincenzo Capuano——開創了「當代拿坡里薄餅」風格。</BlogP>
          <BlogP>當代拿坡里薄餅保留了傳統的精髓，但在麵糰水分、發酵時間和麵皮表現上更進一步。最顯著的特點是那戲劇性突出的 cornicione 麵皮——如同雲朵般輕盈、充滿空氣感，令人一見難忘。</BlogP>
          <BlogH2>在香港體驗正宗拿坡里薄餅</BlogH2>
          <BlogP>Vincenzo Capuano 香港分店位於灣仔利東街，是香港品嚐當代拿坡里薄餅的最佳去處。由 2022 年世界薄餅冠軍 Vincenzo Capuano 親自傳授的配方和技術，每一塊薄餅都是對那不勒斯傳統的致敬。</BlogP>
        </>
      ) : (
        <>
          <BlogP>Neapolitan pizza (pizza napoletana) is the origin of all pizza styles — born in Naples, the southern Italian city, centuries ago. Over time it evolved from a simple street food into a globally recognised culinary tradition, now officially protected by UNESCO as an Intangible Cultural Heritage of Humanity.</BlogP>
          <BlogHighlight>"Neapolitan pizza is not just a product. It is a tradition."</BlogHighlight>
          <BlogH2>The Origins of Neapolitan Pizza</BlogH2>
          <BlogP>In 18th century Naples, bakers began placing tomatoes — considered toxic by much of Europe at the time — on flat bread dough. This simple combination, built on local ingredients and a working-class tradition, evolved into what we now recognise as pizza. Naples is, without question, where pizza as we know it began.</BlogP>
          <BlogP>In 1889, chef Raffaele Esposito created the Margherita pizza in honour of Queen Margherita of Italy — combining tomato (red), mozzarella (white), and basil (green) to mirror the Italian flag. A legend was born.</BlogP>
          <BlogH2>What Defines Authentic Neapolitan Pizza</BlogH2>
          <BlogList items={[
            'Soft, elastic dough baked at extremely high temperatures in a wood-fired oven',
            'A characteristically raised crust edge (cornicione) with natural leopard-spot charring',
            'Premium Italian ingredients: San Marzano tomatoes, fresh buffalo mozzarella',
            'A thin, soft centre — traditionally folded to eat ("a libretto")',
            'Entirely handcrafted — no mechanical pressing',
          ]} />
          <BlogH2>Contemporary Neapolitan Pizza: The Evolution</BlogH2>
          <BlogP>While traditional Neapolitan pizza remains strictly protected by the Associazione Verace Pizza Napoletana (AVPN), a generation of progressive pizza makers — including Vincenzo Capuano — have developed the "contemporary Neapolitan" style.</BlogP>
          <BlogP>Contemporary Neapolitan pizza retains the DNA of the original, but pushes the dough hydration, fermentation time, and crust expression further. The most striking feature is the dramatically pronounced cornicione — as light as a cloud, as airy as you can imagine, and unlike anything a traditional pizza wheel could survive.</BlogP>
          <BlogH2>Where to Get Authentic Neapolitan Pizza in Hong Kong</BlogH2>
          <BlogP>Vincenzo Capuano Hong Kong, located at Lee Tung Avenue in Wan Chai, is the city's leading destination for contemporary Neapolitan pizza. Every pizza is crafted using the techniques of 2022 World Pizza Champion Vincenzo Capuano — a direct lineage to the Naples tradition that created this art form.</BlogP>
          <BlogP>If you want to understand what authentic Neapolitan pizza — in its contemporary form — actually tastes like, this is where you come.</BlogP>
        </>
      )}
    </BlogLayout>
  );
};
