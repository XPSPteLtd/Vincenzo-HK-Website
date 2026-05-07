
import React from 'react';
import { Language } from '../../translations';
import { BlogLayout, BlogH2, BlogP, BlogHighlight, BlogList } from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

export const VincenzoStory: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '我們的故事' : 'Our Story'}
      title={isHK ? 'Vincenzo Capuano 背後的故事' : 'The Story Behind Vincenzo Capuano'}
      readTime={isHK ? '閱讀時間約 5 分鐘' : '5 minute read'}
    >
      {isHK ? (
        <>
          <BlogP>每一塊 Vincenzo Capuano 的薄餅背後，都有一個跨越三代人的故事。這不只是一個廚師的成功故事，更是一個家族對薄餅藝術執著追求的見證。</BlogP>
          <BlogHighlight>「Pizza 是傳承、技藝與喜悅的結合。」— Vincenzo Capuano</BlogHighlight>
          <BlogH2>那不勒斯的家族傳承</BlogH2>
          <BlogP>Vincenzo Capuano 在那不勒斯長大，從小在家族的薄餅烤爐旁學習。他的祖父和父親都是薄餅師傅，家族的薄餅智慧就這樣代代相傳。對 Vincenzo 來說，製作薄餅從來就不只是一份工作——它是家族的語言，是連接過去與未來的紐帶。</BlogP>
          <BlogP>在那不勒斯，薄餅文化深入每個家庭的日常生活。每個街區都有自己的薄餅店，每家薄餅店都有自己的故事。Vincenzo 在這樣的環境中成長，吸收了那不勒斯薄餅文化最純粹的精髓。</BlogP>
          <BlogH2>突破傳統：當代拿坡里薄餅的誕生</BlogH2>
          <BlogP>Vincenzo 並不滿足於簡單地重複傳統。他深入研究麵糰發酵的科學、麵粉的特性和烘焙技術，最終開發出自己獨特的當代拿坡里薄餅風格。</BlogP>
          <BlogList items={[
            '高水分麵糰配方——突破傳統拿坡里薄餅的水分比例',
            '30 小時以上的長時間低溫發酵——創造出獨特的麵皮結構',
            'Nuvola Super 麵粉——專為當代拿坡里薄餅研發的特殊麵粉',
            '黃金剪刀切割技術——保護 cornicione 麵皮的完整性',
          ]} />
          <BlogH2>2022 年：世界薄餅冠軍</BlogH2>
          <BlogP>2022 年，Vincenzo Capuano 在世界薄餅大賽中奪得冠軍，這是對他數十年鑽研的最高肯定。這個獎項不僅是個人的榮耀，更是對整個當代拿坡里薄餅風格的認可。</BlogP>
          <BlogP>然而，對 Vincenzo 來說，冠軍頭銜只是一個里程碑，而不是終點。他繼續推進自己對薄餅的理解，不斷嘗試和改進，把這份熱情帶到世界各地。</BlogP>
          <BlogH2>081 Napoli：一個電話區號背後的驕傲</BlogH2>
          <BlogP>「081」是那不勒斯的電話區號，也是 Vincenzo Capuano 品牌的核心符號之一。它代表著對那不勒斯故鄉的驕傲和認同，也提醒著每一位食客：這份薄餅的靈魂，始終源自那不勒斯。</BlogP>
          <BlogH2>從那不勒斯到香港：跨越世界的薄餅夢想</BlogH2>
          <BlogP>在歐洲各地建立了多家備受讚譽的薄餅店後，Vincenzo Capuano 選擇香港作為其亞洲首站。灣仔利東街的 Vincenzo Capuano 香港分店，是這個薄餅故事在亞洲的全新篇章。</BlogP>
          <BlogP>每一塊在香港製作的薄餅，都承載著那不勒斯的靈魂、三代人的智慧，以及一位世界冠軍對完美的不懈追求。這不只是一家薄餅店，更是一段連接那不勒斯與香港的美食之旅。</BlogP>
        </>
      ) : (
        <>
          <BlogP>Behind every pizza at Vincenzo Capuano is a story that spans three generations, one city, and a lifetime of craft. This is not a restaurant that arrived with a concept. It arrived with a history.</BlogP>
          <BlogHighlight>"Pizza is heritage, technique, and joy." — Vincenzo Capuano</BlogHighlight>
          <BlogH2>A Third-Generation Naples Pizza Legacy</BlogH2>
          <BlogP>Vincenzo Capuano grew up in Naples — specifically in the 081 area code, the district of Naples where pizza is not a product but a way of life. His grandfather made pizza. His father made pizza. By the time Vincenzo was learning the craft, he was absorbing three generations of accumulated knowledge alongside the daily rhythms of a Naples neighbourhood that lived and breathed the pizza tradition.</BlogP>
          <BlogP>That foundation is everything. In Naples, pizza culture is intensely local — every street has its shop, every shop has its story, and every pizzaiolo carries the weight of a tradition that goes back centuries. Vincenzo entered this world not as an outsider, but as a continuation of it.</BlogP>
          <BlogH2>Breaking New Ground: The Contemporary Neapolitan Vision</BlogH2>
          <BlogP>What set Vincenzo apart was an unwillingness to simply repeat tradition. He studied dough fermentation as a science. He interrogated flour properties, hydration ratios, and oven dynamics. He experimented relentlessly — and in doing so, developed a style of Neapolitan pizza that was simultaneously deeply rooted in Naples and entirely forward-looking.</BlogP>
          <BlogList items={[
            'High-hydration dough pushing beyond traditional Neapolitan ratios',
            '30+ hour cold fermentation for a complex, airy, digestible structure',
            'Nuvola Super flour developed specifically for this contemporary style',
            'Golden scissors as a technical and aesthetic statement',
          ]} />
          <BlogH2>2022: World Pizza Champion</BlogH2>
          <BlogP>In 2022, Vincenzo Capuano was crowned World Pizza Champion — the highest competitive recognition in the global pizza world. For a third-generation pizzaiolo from Naples, it was both a personal validation and a statement about the legitimacy of the contemporary Neapolitan movement he had spent years building.</BlogP>
          <BlogP>But the championship was a milestone, not a destination. Vincenzo has continued to refine, expand, and push his understanding of what pizza can be — taking that vision to restaurants around the world and now to Hong Kong.</BlogP>
          <BlogH2>081 Napoli: The Pride Behind the Badge</BlogH2>
          <BlogP>The "081" badge that appears across the Vincenzo Capuano brand refers to the Naples telephone area code — a hyperlocal marker of identity and pride. It signals that regardless of where the restaurant stands, the soul of the pizza originates in a specific place, a specific tradition, and a specific community of pizza makers.</BlogP>
          <BlogH2>From Naples to Hong Kong</BlogH2>
          <BlogP>After building a network of acclaimed pizzerias across Europe, Vincenzo Capuano chose Hong Kong as his Asian debut — a city whose food culture and appetite for authentic culinary experiences made it the right choice.</BlogP>
          <BlogP>At Lee Tung Avenue, Wan Chai, every pizza carries the full weight of that story. Three generations of Naples heritage, the precision of a world champion, and a contemporary vision that continues to evolve. This is what authentic Italian pizza experience looks like in Hong Kong.</BlogP>
        </>
      )}
    </BlogLayout>
  );
};
