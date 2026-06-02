
import React from 'react';
import { Language } from '../../translations';
import {
  BlogLayout, BlogH2, BlogH3, BlogP, BlogHighlight,
  BlogList, BlogImage, BlogFAQ, FAQItem,
} from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

const lnk = 'text-gold hover:text-white transition-colors underline decoration-gold/30 underline-offset-2';

export const BestNeapolitanPizzaHK: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  const faqsEN: FAQItem[] = [
    {
      q: 'What makes Neapolitan pizza different from regular pizza?',
      a: 'Neapolitan pizza follows a protected tradition recognised by UNESCO: 00 flour dough, San Marzano tomatoes, fresh buffalo mozzarella, and a wood-fired oven above 400°C. It bakes in under 90 seconds, producing a soft centre and a characteristically raised, airy crust edge — the cornicione — with natural charring.',
    },
    {
      q: 'Is Vincenzo Capuano the best Neapolitan pizza in Hong Kong?',
      a: <>Vincenzo Capuano is ranked <strong className="text-white font-semibold">#13 globally</strong> in the Top 50 Pizza list and was built on the standards of the 2022 World Pizza Champion. It is consistently named by food critics and regulars as the best Neapolitan pizza in Hong Kong — based on dough quality, ingredient sourcing, and technical precision unmatched elsewhere in the city.</>,
    },
    {
      q: 'Where is Vincenzo Capuano Hong Kong located?',
      a: <>We are at Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai. The nearest MTR is <strong className="text-white font-semibold">Wan Chai Station, Exit D</strong> — approximately a 5-minute walk along Queens Road East.</>,
    },
    {
      q: 'What should I order on my first visit?',
      a: <>Start with the Margherita — it shows dough quality and ingredient balance most clearly. The Diavola is an excellent second choice. <a href="/menu" className={lnk}>View our full menu</a> before you arrive to plan ahead.</>,
    },
    {
      q: 'Do I need a reservation at Vincenzo Capuano Hong Kong?',
      a: <>Reservations are strongly recommended, especially on evenings and weekends. Walk-ins are welcome where seats are available. <a href="/reservations" className={lnk}>Book a table online</a> to secure your preferred time and avoid waiting.</>,
    },
    {
      q: 'What are the opening hours at Vincenzo Capuano Hong Kong?',
      a: <>We are open <strong className="text-white font-semibold">7 days a week</strong> — Lunch 12:00–15:00 and Dinner 18:00–23:00. Visit our <a href="/contact" className={lnk}>contact page</a> for the latest hours and any updates.</>,
    },
    {
      q: 'Who is Vincenzo Capuano?',
      a: <>Vincenzo Capuano is a third-generation pizza maker from Naples, Italy, and the <strong className="text-white font-semibold">2022 World Pizza Champion</strong>. He pioneered the contemporary Neapolitan style now served in Hong Kong. <a href="/vincenzo-capuano-story" className={lnk}>Read his full story here</a>.</>,
    },
  ];

  const faqsHK: FAQItem[] = [
    {
      q: '拿坡里薄餅與普通薄餅有何不同？',
      a: '拿坡里薄餅遵循 UNESCO 認可的受保護傳統：使用 00 麵粉麵糰、San Marzano 番茄、新鮮水牛莫扎里拉芝士，並在超過 400°C 的薪柴烤爐中烘烤不超過 90 秒。這造就了柔軟的中心和標誌性的隆起、充滿空氣感的 cornicione 麵皮邊緣，帶有天然焦斑。',
    },
    {
      q: 'Vincenzo Capuano 是香港最佳拿坡里薄餅嗎？',
      a: <> Vincenzo Capuano 在全球前 50 薄餅榜上排名 <strong className="text-white font-semibold">第 13 位</strong>，由 2022 年世界薄餅冠軍創立並制定標準。它被食評人和常客一致評為香港最佳拿坡里薄餅——基於麵糰品質、食材標準和在香港無可匹敵的技術精確度。</>,
    },
    {
      q: 'Vincenzo Capuano 香港店在哪裡？',
      a: <>我們位於灣仔皇后大道東 200 號利東街地下 01 04 05 號舖。最近的港鐵站是<strong className="text-white font-semibold">灣仔站 D 出口</strong>——沿皇后大道東步行約 5 分鐘。</>,
    },
    {
      q: '第一次去應該點什麼？',
      a: <>從 Margherita 開始——它最清晰地展示麵糰品質和食材平衡。Diavola 是很好的第二選擇。<a href="/menu" className={lnk}>在到訪前查看我們的完整菜單</a>提前計劃。</>,
    },
    {
      q: '需要提前訂座嗎？',
      a: <>強烈建議訂座，尤其是晚上和週末。有空位時歡迎即場入座。<a href="/reservations" className={lnk}>網上訂座</a>以確保您偏好的時間。</>,
    },
    {
      q: 'Vincenzo Capuano 香港的開放時間是什麼？',
      a: <>我們<strong className="text-white font-semibold">每週 7 天</strong>開放——午市 12:00–15:00，晚市 18:00–23:00。請瀏覽我們的<a href="/contact" className={lnk}>聯絡頁面</a>獲取最新時間。</>,
    },
    {
      q: 'Vincenzo Capuano 是誰？',
      a: <>Vincenzo Capuano 是來自那不勒斯的第三代薄餅師傅，<strong className="text-white font-semibold">2022 年世界薄餅冠軍</strong>。他開創了香港現正供應的當代拿坡里薄餅風格。<a href="/vincenzo-capuano-story" className={lnk}>在此閱讀他的完整故事</a>。</>,
    },
  ];

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '香港美食指南' : 'Hong Kong Food Guide'}
      title={isHK ? '香港最佳拿坡里薄餅：Vincenzo Capuano 為何爆紅？' : 'Best Neapolitan Pizza in Hong Kong: Why Vincenzo Capuano Is Going Viral'}
      readTime={isHK ? '閱讀時間約 6 分鐘' : '6 minute read'}
    >
      {isHK ? (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/oven-pizza.jpg"
            alt="香港最佳拿坡里薄餅 — Vincenzo Capuano 灣仔柴燒窯烤薄餅"
            caption="Vincenzo Capuano 灣仔 — 香港最受推崇的拿坡里薄餅"
          />

          <BlogP>對於認真對待飲食的人來說，在香港找到<strong className="text-white font-semibold">香港最佳拿坡里薄餅</strong>一直是一個挑戰。這不是說香港沒有薄餅——薄餅選擇到處都是。但真正意義上的拿坡里薄餅，那種根植於幾個世紀傳統、以正宗工藝製作的薄餅，卻始終是稀缺品。Vincenzo Capuano 在灣仔利東街的開業改變了這個狀況。全球前 50 薄餅榜排名第 13、由 2022 年世界薄餅冠軍親自制定標準，這家餐廳不靠噱頭吸引食客——它靠薄餅本身說話。</BlogP>

          <BlogHighlight>「當你嚐到那塊薄餅，你會明白為何那不勒斯人如此驕傲。」</BlogHighlight>

          <BlogH2>拿坡里薄餅與其他薄餅有何不同？</BlogH2>
          <BlogP>拿坡里薄餅不只是一種薄餅風格——它是一種受保護的烹飪傳統。由<a href="https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722" target="_blank" rel="noopener noreferrer" className={lnk}>聯合國教科文組織認定為人類非物質文化遺產</a>，<strong className="text-white font-semibold">正宗拿坡里薄餅</strong>有嚴格要求：00 麵粉、維蘇威火山山麓的 San Marzano 番茄、坎帕尼亞新鮮水牛莫扎里拉芝士，以及在超過 400°C 的薪柴烤爐中烘烤。整個烘烤過程不超過 90 秒，造就了柔軟可折疊的中心和標誌性的隆起麵皮邊緣——cornicione——帶有天然豹紋焦斑。</BlogP>

          <BlogH3>當代拿坡里：傳統之上的突破</BlogH3>
          <BlogP>在這個傳統框架內，一代革新派薄餅師傅發展出了<strong className="text-white font-semibold">當代拿坡里</strong>風格——進一步提升麵糰水分比例和發酵時間，讓 cornicione 更加誇張地隆起、更輕盈、製作技術要求也更高。Vincenzo Capuano 是這個運動的代表人物之一。想深入了解這個風格如何演進，可<a href="/what-is-neapolitan-pizza" className={lnk}>閱讀我們的拿坡里薄餅完整指南</a>。</BlogP>

          <BlogH2>每塊薄餅背後的世界冠軍</BlogH2>
          <BlogP>2022 年，Vincenzo Capuano 贏得了<a href="https://www.pizzaworld.it/" target="_blank" rel="noopener noreferrer" className={lnk}>世界薄餅錦標賽</a>冠軍——全球薄餅界最高競技舞台。這不是社交媒體榮譽或地區性認可，而是在直接與全球頂尖薄餅師傅競技中，以麵糰技術、食材品質和最終產品奪得的成就。他在那不勒斯建立的配方標準、發酵工藝和食材規格，在香港分店得到完整保留——沒有任何妥協或調整。</BlogP>
          <BlogP>這正是在搜尋<strong className="text-white font-semibold">香港最佳拿坡里薄餅</strong>時 Vincenzo Capuano 脫穎而出的原因。其他餐廳也許使用好食材，部分也許訓練有素——但香港只有一家餐廳的產品建立在世界冠軍標準之上。<a href="/vincenzo-capuano-story" className={lnk}>了解 Vincenzo Capuano 的故事</a>，可以幫助你理解這份傳承的深度。</BlogP>

          <BlogH2>那塊麵皮 — 改變一切的 Cornicione</BlogH2>
          <BlogP>問任何一位 Vincenzo Capuano 的常客，他們記憶最深的是什麼，答案幾乎如出一轍：那塊麵皮。<strong className="text-white font-semibold">Cornicione</strong>——拿坡里薄餅的隆起外緣——是整塊薄餅技術難度最高的部分，也是最能清晰體現品質差異的地方。在 Vincenzo Capuano 香港，這個麵皮是非凡的：誇張地隆起，薄薄的外殼內藏著輕盈、充滿空氣的蜂巢結構，由長時間發酵麵糰而來。這是香港最出色的<strong className="text-white font-semibold">輕盈麵皮薄餅</strong>體驗，也是這家餐廳成為城中最多人討論的薄餅店的核心原因。</BlogP>
          <BlogP>麵糰本身有風味：來自長時間低溫發酵的微酸感、麵粉帶來的自然甜味，以及那種讓你把每一口麵皮邊角都吃個精光的滿足咀嚼感。大多數薄餅會在桌上留下麵皮。這裡的薄餅不會。</BlogP>

          <BlogH2>如何到達及何時到訪</BlogH2>
          <BlogP>Vincenzo Capuano 香港店位於<strong className="text-white font-semibold">灣仔利東街地下 01 04 05 號舖</strong>——香港島上交通最便利的社區之一。使用公共交通的食客，<strong className="text-white font-semibold">灣仔港鐵站 D 出口</strong>步行約 5 分鐘可達。利東街本身是一條行人友好的街道，餐廳位置一目了然。</BlogP>
          <BlogList items={[
            '地址：灣仔皇后大道東 200 號利東街地下 01 04 05 號舖',
            '交通：灣仔港鐵站 D 出口，步行約 5 分鐘',
            '每週 7 天全天開放',
            '午市 12:00–15:00 · 晚市 18:00–23:00',
          ]} />

          <BlogH2>第一次到訪應該點什麼</BlogH2>
          <BlogP>在任何一家<a href="/pizza-wan-chai-hong-kong" className={lnk}>灣仔拿坡里薄餅餐廳</a>，<strong className="text-white font-semibold">Margherita</strong> 永遠是正確的起點。只有三種主要元素——San Marzano 番茄、新鮮水牛莫扎里拉芝士和羅勒——沒有任何東西可以掩蓋麵糰品質和食材選材的優劣。在 Vincenzo Capuano，Margherita 展示了你需要知道的一切。</BlogP>
          <BlogP>之後，<strong className="text-white font-semibold">Diavola</strong> 是推薦的第二選擇——辣味薩拉米在烘烤中微微出油，滲入麵糰邊緣，帶來平衡辛辣的豐腴感。白醬系列則提供截然不同的方向，非常值得在第二次到訪時探索。出發前<a href="/menu" className={lnk}>查看完整菜單</a>以提前計劃你的點選。</BlogP>
          <BlogList items={[
            <><strong className="text-white font-semibold">Margherita</strong> — 評估水準的基準，San Marzano 番茄配水牛莫扎里拉</>,
            <><strong className="text-white font-semibold">Diavola</strong> — 辣味薩拉米，適合尋求個性的食客</>,
            <><strong className="text-white font-semibold">白醬系列</strong> — 季節性食材驅動，第二次到訪的理想選擇</>,
          ]} />

          <BlogH2>剪刀呈現方式背後的用意</BlogH2>
          <BlogP>第一次到訪 Vincenzo Capuano 這家<strong className="text-white font-semibold">灣仔薄餅餐廳</strong>的食客幾乎都會注意到：薄餅被放在一個升高的金屬架上端至桌前，服務員用剪刀而非滾輪刀逐份切開。這引來好奇，有時也有疑問。但背後邏輯清晰——架子讓底部在上菜過程中持續透氣，防止蒸汽讓底部軟化；剪刀避免了滾輪刀施加的壓力，保護 cornicione 的空氣結構一直完好地送達桌面。</BlogP>
          <BlogP>每個細節都服務於薄餅本身。這正是 Vincenzo Capuano 能夠獲得<strong className="text-white font-semibold">香港最佳拿坡里薄餅</strong>這個稱號的最誠實解釋——不只是一次，而是每一次到訪都如此。</BlogP>

          <BlogFAQ
            title="常見問題"
            items={faqsHK}
          />
        </>
      ) : (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/oven-pizza.jpg"
            alt="Best Neapolitan pizza in Hong Kong — Vincenzo Capuano Wan Chai wood-fired pizza"
            caption="Vincenzo Capuano Wan Chai — Hong Kong's most acclaimed Neapolitan pizza restaurant"
          />

          <BlogP>For anyone serious about eating well in this city, finding the <strong className="text-white font-semibold">best Neapolitan pizza in Hong Kong</strong> has always been harder than it should be. Not pizza — Hong Kong has pizza everywhere. But <em>genuine</em> Neapolitan pizza, built on centuries of tradition and made with the craft that gave this dish its world reputation — that is rarer. The arrival of Vincenzo Capuano at Lee Tung Avenue in Wan Chai changed that conversation for good. Ranked <strong className="text-white font-semibold">#13 globally</strong> in the Top 50 Pizza panel and built on the recipes of a 2022 World Pizza Champion, this is the restaurant Hong Kong food lovers had been waiting for.</BlogP>

          <BlogHighlight>"When you taste the pizza, you understand why Neapolitans are so proud of it."</BlogHighlight>

          <BlogH2>What Makes Neapolitan Pizza Different</BlogH2>
          <BlogP>Neapolitan pizza is not simply a style of pizza — it is a protected culinary tradition. Recognised by <a href="https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722" target="_blank" rel="noopener noreferrer" className={lnk}>UNESCO as an Intangible Cultural Heritage of Humanity</a>, <strong className="text-white font-semibold">authentic Neapolitan pizza</strong> requires specific flour, San Marzano tomatoes from the slopes of Mount Vesuvius, fresh buffalo mozzarella from Campania, and a wood-fired oven at over 400°C. The bake takes under 90 seconds — producing a soft, foldable centre and a raised outer crust edge, the <em>cornicione</em>, with the natural leopard-spot charring that signals a correctly made pizza.</BlogP>

          <BlogH3>Contemporary Neapolitan: A Step Further</BlogH3>
          <BlogP>Within this tradition, a generation of forward-thinking pizza makers has developed the <strong className="text-white font-semibold">contemporary Neapolitan</strong> style — pushing dough hydration and fermentation further, producing a cornicione that is even more dramatically raised, lighter, and more technically demanding. Vincenzo Capuano is one of the defining figures of this movement. To understand how this style differs from the traditional version, <a href="/what-is-neapolitan-pizza" className={lnk}>read our full guide to Neapolitan pizza here</a>.</BlogP>

          <BlogH2>A World Champion Behind Every Pizza</BlogH2>
          <BlogP>In 2022, Vincenzo Capuano won the <a href="https://www.pizzaworld.it/" target="_blank" rel="noopener noreferrer" className={lnk}>World Pizza Championship</a> — the highest competitive stage in the global pizza world. This is not a social media recognition or a local award. It is a title earned through direct competition against the world's best pizza makers, judged on dough handling, ingredient quality, and final product at the highest level. The recipe standards, fermentation approach, and ingredient specifications that earned that title are preserved completely at the Hong Kong location. No adaptation. No compromise.</BlogP>
          <BlogP>That is what separates Vincenzo Capuano from the other options when searching for the <strong className="text-white font-semibold">best Neapolitan pizza in Hong Kong</strong>. Other restaurants may use good ingredients. Some may have well-trained teams. But only one restaurant in this city builds its product on a world-championship standard — and that restaurant is in Wan Chai. The <a href="/vincenzo-capuano-story" className={lnk}>story of Vincenzo Capuano</a>, a third-generation pizza maker from Naples, gives you the full depth behind what ends up on your plate.</BlogP>

          <BlogH2>The Cornicione — The Crust That Changes Everything</BlogH2>
          <BlogP>Ask anyone who has eaten at Vincenzo Capuano what they remember most, and the answer is almost always the same: the crust. The <em>cornicione</em> — the raised outer edge of a Neapolitan pizza — is the single most technically demanding element and the clearest indicator of quality. At Vincenzo Capuano Hong Kong, it is genuinely extraordinary: dramatically raised, with a thin outer shell giving way to a hollow, airy interior produced by the extended cold fermentation. This is the finest <strong className="text-white font-semibold">airy crust pizza</strong> experience in Hong Kong, and it is the feature that keeps people coming back.</BlogP>
          <BlogP>The dough carries its own flavour — a subtle sourness from the long ferment, a natural sweetness from the carefully sourced flour, and a chew that makes the crust the best part of the meal rather than an afterthought left on the plate. Most pizza leaves crust behind. This pizza does not.</BlogP>

          <BlogH2>How to Get There and When to Visit</BlogH2>
          <BlogP>Vincenzo Capuano Hong Kong is at <strong className="text-white font-semibold">Lee Tung Avenue, GF Unit 01 04 05</strong>, Wan Chai — one of Hong Kong Island's most accessible and well-connected neighbourhoods. Public transport users will find <strong className="text-white font-semibold">Wan Chai MTR Station, Exit D</strong> is approximately a 5-minute walk. Lee Tung Avenue is a pedestrian-friendly street and the restaurant is straightforward to find once you reach the avenue.</BlogP>
          <BlogList items={[
            'Address: Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai',
            'MTR: Wan Chai Station, Exit D — approximately 5-minute walk',
            'Open 7 days a week, no exceptions',
            'Lunch 12:00–15:00 · Dinner 18:00–23:00',
          ]} />

          <BlogH2>What to Order on Your First Visit</BlogH2>
          <BlogP>At any <a href="/pizza-wan-chai-hong-kong" className={lnk}>Neapolitan pizza restaurant in Wan Chai</a>, the <strong className="text-white font-semibold">Margherita</strong> is always the right starting point. With only three primary components — San Marzano tomato, fresh buffalo mozzarella, and basil — there is nowhere to hide. Every aspect of dough quality and ingredient selection is fully visible. At Vincenzo Capuano, the Margherita tells you everything you need to know.</BlogP>
          <BlogP>After the Margherita, the <strong className="text-white font-semibold">Diavola</strong> is the recommended follow-up — spicy salami that renders slightly during the bake, letting its oils seep into the dough at the edges and creating a richness that balances the heat. The white-sauce selections offer another direction entirely and are worth exploring on a second visit. <a href="/menu" className={lnk}>View the full menu here</a> before you arrive to plan your order.</BlogP>
          <BlogList items={[
            <><strong className="text-white font-semibold">Margherita</strong> — the benchmark: San Marzano tomato and buffalo mozzarella</>,
            <><strong className="text-white font-semibold">Diavola</strong> — spicy salami with fior di latte, for those who want personality</>,
            <><strong className="text-white font-semibold">White-sauce selection</strong> — seasonal and ingredient-led, ideal for a second visit</>,
          ]} />

          <BlogH2>The Scissors Presentation — Why It Matters</BlogH2>
          <BlogP>One element surprises nearly every first-time visitor to this <strong className="text-white font-semibold">pizza restaurant in Wan Chai</strong>: the pizza arrives on a raised metal stand, and a server cuts each portion using scissors rather than a wheel. This draws curiosity — occasionally scepticism. But the logic is clear. The stand keeps the base crisp during service by allowing air to circulate beneath the pizza. The scissors protect the cornicione from the compression that a rolling blade applies — preserving that airy structure all the way from the oven to the table.</BlogP>
          <BlogP>Details like this separate a restaurant that genuinely cares about the product from one that simply makes a pizza and puts it down. Every operational decision at Vincenzo Capuano serves the pizza. That is the most honest explanation for why it consistently earns the title of <strong className="text-white font-semibold">best Neapolitan pizza in Hong Kong</strong> — not just once, but on every single visit.</BlogP>

          <BlogFAQ
            title="Frequently Asked Questions"
            items={faqsEN}
          />
        </>
      )}
    </BlogLayout>
  );
};
