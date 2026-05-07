
import React from 'react';
import { Language } from '../../translations';
import { BlogLayout, BlogH2, BlogP, BlogHighlight, BlogList } from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

export const WhyScissors: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '薄餅工藝' : 'Pizza Craft'}
      title={isHK ? '為什麼我們用剪刀切薄餅' : 'Why We Cut Pizza with Scissors'}
      readTime={isHK ? '閱讀時間約 3 分鐘' : '3 minute read'}
    >
      {isHK ? (
        <>
          <BlogP>如果您曾到訪 Vincenzo Capuano，您一定注意到了那對閃閃發光的黃金剪刀。這不是噱頭，也不是表演——這是維護薄餅品質不可或缺的工具，背後有著充分的科學依據。</BlogP>
          <BlogHighlight>「切割方式決定了最終呈現在您面前的薄餅質感。」</BlogHighlight>
          <BlogH2>輪刀為何不適合拿坡里薄餅</BlogH2>
          <BlogP>傳統的薄餅輪刀在切割時，會以旋轉滾動的方式對麵糰施加壓力。對於一般薄餅來說，這沒有問題。但對於當代拿坡里薄餅來說，這是一種破壞。</BlogP>
          <BlogP>Vincenzo Capuano 的 Nuvola 薄餅麵皮，經過 30 小時以上的發酵，內部充滿了數以百計的細小氣泡孔洞（alveoli）。正是這些氣泡，造就了那如雲朵般輕盈、充滿空氣感的麵皮質感。</BlogP>
          <BlogP>當輪刀滾過這些氣泡時，壓力會立即將它們壓扁，破壞麵皮的結構，讓那精心培育的空氣感瞬間消失。薄餅師傅花費數十年完善的工藝，在最後一刀中被毀於一旦。</BlogP>
          <BlogH2>剪刀如何保護薄餅的靈魂</BlogH2>
          <BlogP>黃金剪刀的切割方式完全不同。剪刀以「咬合」的方式切割，而非「滾壓」——它只在精確的切割點施力，不對周圍的麵糰施加任何壓力。</BlogP>
          <BlogList items={[
            '精確切割，不壓迫氣泡孔洞',
            '保留麵皮完整的輕盈、充氣結構',
            '切割後，cornicione 依然挺立如雲',
            '每一塊都保持著薄餅師傅想要呈現的完美質感',
          ]} />
          <BlogH2>這也是一種儀式</BlogH2>
          <BlogP>除了功能性的考量，黃金剪刀也是 Vincenzo Capuano 品牌最具辨識度的符號之一。當剪刀輕盈地切過薄餅的那一刻，既是技術的展示，也是對那不勒斯傳統的致敬。</BlogP>
          <BlogP>這個儀式提醒每一位食客：您即將品嚐的，不只是一塊薄餅，而是幾十年工藝的結晶。</BlogP>
          <BlogH2>在香港親眼見證這個儀式</BlogH2>
          <BlogP>下次到訪 Vincenzo Capuano 灣仔分店時，留意那對黃金剪刀——它不只是一個工具，它是我們對薄餅品質承諾的最直觀體現。</BlogP>
        </>
      ) : (
        <>
          <BlogP>If you've visited Vincenzo Capuano, you'll have noticed the golden scissors. They're not a gimmick, and they're not theatre. They are a precise technical decision — one that protects the integrity of every pizza we serve.</BlogP>
          <BlogHighlight>"The way you cut the pizza determines the quality on the plate."</BlogHighlight>
          <BlogH2>Why a Pizza Wheel Doesn't Work Here</BlogH2>
          <BlogP>A standard pizza wheel cuts by rolling with continuous pressure across the dough. For a regular pizza, this works fine. For a contemporary Neapolitan pizza — especially the Nuvola crust — it is destructive.</BlogP>
          <BlogP>Our Nuvola dough is fermented for 30+ hours and contains hundreds of carefully developed alveoli — tiny air pockets distributed throughout the dough structure. These alveoli are responsible for the cloud-like, dramatically airy texture that defines our crust.</BlogP>
          <BlogP>When a pizza wheel rolls over those alveoli, the pressure collapses them. Instantly. The result is a flattened, dense section of crust — and the destruction of the very thing the dough spent 30 hours creating.</BlogP>
          <BlogH2>How the Scissors Preserve the Pizza</BlogH2>
          <BlogP>The scissors operate on an entirely different principle. Rather than rolling pressure, scissors apply a precise, contained shear force — only at the exact point of the cut, with no crushing pressure on the surrounding dough.</BlogP>
          <BlogList items={[
            'No rolling pressure — the alveoli remain intact throughout the cut',
            'The cornicione stays tall and airy right up to the slice',
            'Each piece arrives at the table with the full cloud-like texture preserved',
            'Clean, efficient cuts without dragging toppings',
          ]} />
          <BlogH2>It's Also a Ritual</BlogH2>
          <BlogP>Beyond the technical case, the golden scissors have become one of the most recognisable symbols of the Vincenzo Capuano experience. The moment the scissors open and the pizza is cut is both a performance of craft and a statement of intent.</BlogP>
          <BlogP>It tells you: what you are about to eat is worth protecting. Every detail matters here.</BlogP>
          <BlogH2>The Neapolitan Pizza Scissors Tradition</BlogH2>
          <BlogP>Cutting pizza with scissors is not a new invention — it has roots in the broader Italian food tradition, particularly in certain regional pizza styles. Vincenzo Capuano elevated it into a signature ritual and technical standard that is now one of the defining characteristics of contemporary Neapolitan pizza globally.</BlogP>
          <BlogP>Next time you visit us in Wan Chai, watch the scissors. It's the moment where the technique becomes visible.</BlogP>
        </>
      )}
    </BlogLayout>
  );
};
