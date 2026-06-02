
import React from 'react';
import { Language } from '../../translations';
import {
  BlogLayout, BlogH2, BlogH3, BlogP, BlogHighlight,
  BlogList, BlogImage, BlogFAQ, FAQItem,
} from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

const lnk = 'text-gold hover:text-white transition-colors underline decoration-gold/30 underline-offset-2';

export const BestPizzaRestaurantsHK: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  const faqsEN: FAQItem[] = [
    {
      q: 'What is the best pizza restaurant in Hong Kong?',
      a: <>Vincenzo Capuano Hong Kong is widely regarded as the <strong className="text-white font-semibold">best pizza restaurant in Hong Kong</strong> for authentic Neapolitan pizza — ranked #13 globally in the Top 50 Pizza list and built on the standards of the 2022 World Pizza Champion. For other styles, the city has strong options across NY-style, Italian dining, and casual pizza.</>,
    },
    {
      q: 'Where can I get authentic Neapolitan pizza in Hong Kong?',
      a: <>The clearest destination for <strong className="text-white font-semibold">authentic Neapolitan pizza in Hong Kong</strong> is Vincenzo Capuano at Lee Tung Avenue, Wan Chai — a world-champion contemporary Neapolitan restaurant ranked among the top 15 globally. <a href="/pizza-wan-chai-hong-kong" className={lnk}>See full location details here</a>.</>,
    },
    {
      q: 'Is Vincenzo Capuano the best pizza in Hong Kong overall?',
      a: <>For <strong className="text-white font-semibold">Neapolitan and contemporary Neapolitan pizza</strong>, the answer is an unambiguous yes. Vincenzo Capuano holds the #13 global ranking and the 2022 World Pizza Championship. No other pizza restaurant in Hong Kong holds credentials at this level. <a href="/vincenzo-capuano-hong-kong-review" className={lnk}>Read the full review here</a>.</>,
    },
    {
      q: 'What is the difference between Neapolitan and New York-style pizza?',
      a: 'Neapolitan pizza has a soft, foldable centre, a raised airy cornicione, and bakes in under 90 seconds at over 400°C. NY-style pizza is larger, with a thinner, crispier base that can be folded lengthwise — designed for the slice format. Both are excellent in different contexts; they represent distinct pizza philosophies rather than quality differences.',
    },
    {
      q: 'Are there good pizza places near MTR stations in Hong Kong?',
      a: <>Yes. Vincenzo Capuano is a <strong className="text-white font-semibold">5-minute walk from Wan Chai MTR Station</strong>, Exit D. Several other restaurants on this list are also within short walking distance of major MTR stations across Hong Kong Island and Kowloon.</>,
    },
    {
      q: 'Which Hong Kong pizza restaurants are good for large groups?',
      a: <>For group dining, Vincenzo Capuano Hong Kong accommodates shared pizza dining well — the scissors presentation and sharing format suits group tables naturally. For private events and larger groups, <a href="/group-dining" className={lnk}>see our group dining page</a> for details.</>,
    },
    {
      q: 'How much does pizza cost at Vincenzo Capuano Hong Kong?',
      a: <>Pizzas at Vincenzo Capuano use imported Italian ingredients and are priced at a premium level commensurate with the quality. For specific pricing, <a href="/menu" className={lnk}>view the full menu here</a>. Walk-ins and reservations are both available.</>,
    },
    {
      q: 'Which pizza restaurant in Hong Kong has the best atmosphere for a date?',
      a: <>Vincenzo Capuano offers a refined, intimate atmosphere with an open kitchen and the memorable scissors presentation — making it one of the best choices for a date in Wan Chai. The combination of world-class pizza and considered dining experience sets the right tone for a special evening. <a href="/reservations" className={lnk}>Book your table here</a>.</>,
    },
  ];

  const faqsHK: FAQItem[] = [
    {
      q: '香港最佳薄餅餐廳是哪家？',
      a: <>就正宗拿坡里薄餅而言，Vincenzo Capuano 香港被廣泛認為是<strong className="text-white font-semibold">香港最佳薄餅餐廳</strong>——全球前 50 薄餅榜排名第 13，由 2022 年世界薄餅冠軍制定標準。其他風格方面，香港在紐約風格、意式餐廳薄餅和休閒薄餅各有強項。</>,
    },
    {
      q: '在香港哪裡可以找到正宗拿坡里薄餅？',
      a: <>香港最清晰的<strong className="text-white font-semibold">正宗拿坡里薄餅</strong>目的地是位於灣仔利東街的 Vincenzo Capuano——世界冠軍當代拿坡里薄餅餐廳，全球排名前 15。<a href="/pizza-wan-chai-hong-kong" className={lnk}>在此查看完整位置詳情</a>。</>,
    },
    {
      q: 'Vincenzo Capuano 是否是香港整體最佳薄餅？',
      a: <>就<strong className="text-white font-semibold">拿坡里及當代拿坡里薄餅</strong>而言，答案毫無疑問是肯定的。Vincenzo Capuano 持有全球第 13 位排名和 2022 年世界薄餅冠軍頭銜。香港沒有其他薄餅餐廳擁有這個水準的資格。<a href="/vincenzo-capuano-hong-kong-review" className={lnk}>在此閱讀完整評論</a>。</>,
    },
    {
      q: '拿坡里薄餅和紐約風格薄餅有什麼區別？',
      a: '拿坡里薄餅有柔軟可折疊的中心、隆起的輕盈 cornicione，在超過 400°C 的烤爐中 90 秒內烤製完成。紐約風格薄餅更大，底部更薄更酥脆，可以對折食用——專為切件格式設計。兩者各有所長，代表不同的薄餅哲學而非品質高低之分。',
    },
    {
      q: '香港有哪些靠近港鐵站的好薄餅餐廳？',
      a: <>有。Vincenzo Capuano 距離<strong className="text-white font-semibold">灣仔港鐵站 D 出口步行約 5 分鐘</strong>。本指南中的多家餐廳也位於港鐵站附近。</>,
    },
    {
      q: '香港哪些薄餅餐廳適合大型聚餐？',
      a: <>Vincenzo Capuano 香港非常適合共享用餐——剪刀呈現和分享格式天然適合多人桌。如需私人活動和大型聚餐，<a href="/group-dining" className={lnk}>請查看我們的團體用餐頁面</a>了解詳情。</>,
    },
    {
      q: 'Vincenzo Capuano 香港的薄餅價格如何？',
      a: <>Vincenzo Capuano 的薄餅使用進口意大利食材，定價屬高端水準，與品質相符。具體定價請<a href="/menu" className={lnk}>在此查看完整菜單</a>。即場入座和預訂均可。</>,
    },
    {
      q: '香港哪家薄餅餐廳最適合約會？',
      a: <>Vincenzo Capuano 提供精緻、親密的用餐環境，開放式廚房和令人印象深刻的剪刀呈現方式，是灣仔最佳約會選擇之一。世界級薄餅與精心設計的用餐體驗相結合，為特別夜晚定下完美基調。<a href="/reservations" className={lnk}>在此訂座</a>。</>,
    },
  ];

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '2026 年香港薄餅指南' : '2026 Hong Kong Pizza Guide'}
      title={isHK ? '香港十大最佳薄餅餐廳（2026 年指南）' : 'Top 10 Best Pizza Restaurants in Hong Kong (2026 Guide)'}
      readTime={isHK ? '閱讀時間約 7 分鐘' : '7 minute read'}
    >
      {isHK ? (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/detto-fatto-pizza.png"
            alt="香港最佳薄餅餐廳 2026 — Vincenzo Capuano 當代拿坡里薄餅"
            caption="2026 年香港最佳薄餅餐廳指南"
          />

          <BlogP>香港是全球美食最密集的城市之一，而薄餅文化在過去十年間發生了根本性的轉變。曾幾何時，香港的薄餅選擇主要局限於國際連鎖和將薄餅當作配角的意大利餐廳。今天，<strong className="text-white font-semibold">香港最佳薄餅餐廳</strong>的名單已截然不同——更認真對待食材、更有技術深度，食客對正宗口味的要求也遠高於以往。這份 2026 年指南涵蓋了不同風格、不同場合、不同預算的最佳薄餅目的地，幫你在不走冤枉路的情況下找到最適合自己的那一家。</BlogP>

          <BlogHighlight>「香港的薄餅文化已經成熟。這座城市現在值得一份真正認真的薄餅指南。」</BlogHighlight>

          <BlogH2>1. Vincenzo Capuano 香港 — 最佳正宗拿坡里薄餅</BlogH2>
          <BlogP>作為這份指南的主辦方，我們坦然將自己排在首位——但數字和口碑支持這個排名。<strong className="text-white font-semibold">Vincenzo Capuano</strong> 是全球前 50 薄餅排名<strong className="text-white font-semibold">第 13 位</strong>的餐廳，由 2022 年世界薄餅錦標賽冠軍 Vincenzo Capuano 親自建立食譜和標準。香港分店位於<strong className="text-white font-semibold">灣仔利東街</strong>，是目前城中最接近那不勒斯本地薄餅體驗的地方。</BlogP>
          <BlogH3>為何排第一？</BlogH3>
          <BlogP>答案在三個方面：麵糰、食材和技術深度。那個標誌性的 cornicione 麵皮輕盈如雲，由長時間冷藏發酵而來，一口下去滿是發酵的微酸和麵粉的自然甜味。剪刀切薄餅的呈現方式已成為城中最多人討論的用餐儀式。使用從意大利精選進口的頂級食材——San Marzano 番茄、水牛莫扎里拉——沒有任何妥協。如需更詳細評論，<a href="/vincenzo-capuano-hong-kong-review" className={lnk}>閱讀我們的完整評論</a>，或直接<a href="/reservations" className={lnk}>訂座體驗</a>。</BlogP>
          <BlogList items={[
            '地址：灣仔皇后大道東 200 號利東街地下 01 04 05 號舖',
            '最適合：正宗拿坡里薄餅、精緻意式用餐、約會及特別場合',
            '必試：Margherita（了解真正的拿坡里水準）、Diavola（個性之選）',
            '交通：灣仔港鐵站 D 出口步行約 5 分鐘',
            '評級：全球第 13 位 / 2022 年世界薄餅冠軍',
          ]} />

          <BlogH2>2. Motorino — 另一個可靠拿坡里選項</BlogH2>
          <BlogP>Motorino 在全球多個城市設有分店，以其直接、誠實的拿坡里風格薄餅著稱。對於希望在灣仔以外地區尋找拿坡里薄餅的食客，這是一個值得了解的選項。食材紮實，風格清晰，適合日常薄餅需求。與 Vincenzo Capuano 相比，整體技術深度和食材精度有所不同，但在自己的定位上做得誠實。</BlogP>

          <BlogH2>3. Homeslice — 最佳紐約風格薄餅</BlogH2>
          <BlogP>如果你更偏向美式薄餅文化，Homeslice 是香港最受歡迎的<strong className="text-white font-semibold">紐約風格薄餅</strong>目的地之一。大件、薄底、配料豐富的 NY-style 薄餅，適合輕鬆的午餐或非正式聚會。這是完全不同的薄餅哲學，在自己的類別裡執行得很好。想了解兩種風格的根本差異，<a href="/what-is-neapolitan-pizza" className={lnk}>閱讀我們的拿坡里薄餅指南</a>。</BlogP>

          <BlogH2>4. CIAK — In The Kitchen — 最佳意式餐廳薄餅體驗</BlogH2>
          <BlogP>CIAK 是香港最受尊重的意大利餐廳之一，薄餅在整個菜單中佔有重要地位。柴燒烤爐帶來的焦香、嚴選意大利食材，讓這裡的薄餅有別於一般連鎖選項。適合希望在完整意式用餐體驗中同時享用薄餅的食客——薄餅是菜單的重要組成部分而非點綴。</BlogP>

          <BlogH2>5. 8½ Otto e Mezzo Bombana — 最佳奢華場合</BlogH2>
          <BlogP>對於希望在最精緻框架下體驗薄餅的食客，8½ Otto e Mezzo Bombana 提供了香港最頂尖的意大利餐廳體驗之一。這裡的<strong className="text-white font-semibold">木烤薄餅</strong>不是菜單主角，但在米芝蓮星級的整體水準下，每一個細節都反映出最高的食材標準和廚師技藝。適合真正特別的場合。</BlogP>

          <BlogH2>6. Grissini（君悅酒店）— 最佳酒店意大利薄餅</BlogH2>
          <BlogP>灣仔君悅酒店的 Grissini 是香港歷史最悠久的高端意大利餐廳之一，以其柴燒窯烤薄餅和精選意大利食材著稱。對於正在灣仔一帶下榻或希望在酒店環境中享用精緻意大利料理的旅客，Grissini 是穩妥而出色的選擇。</BlogP>

          <BlogH2>7. Isola Bar & Grill — 最佳景觀薄餅體驗</BlogH2>
          <BlogP>位於中環 IFC 商場的 Isola，以維多利亞港的壯闊景色著稱。薄餅在這裡是意大利式休閒用餐的一部分，食材講究，環境開闊。如果你希望在用餐時同時欣賞香港最令人嘆為觀止的天際線，這裡提供了一個難以複製的背景。</BlogP>

          <BlogH2>8. Posto Pubblico — 最佳社區意大利氛圍</BlogH2>
          <BlogP>Posto Pubblico 位於中環蘇豪區，以輕鬆的社區意大利餐廳氛圍著稱，深受本地居民喜愛。薄餅是菜單核心之一，選用新鮮食材，風格直接。適合一個不需要儀式感但希望好好吃一塊薄餅的夜晚。</BlogP>

          <BlogH2>9. Pizza Express — 最可靠的連鎖選項</BlogH2>
          <BlogP>Pizza Express 在香港擁有多個分店，以其穩定的品質和親民的價格長期獲得家庭食客的青睞。薄底、食材紮實，不會讓你驚喜，但也不會讓你失望。適合預算有限或需要快速可靠選擇的日常薄餅需求。</BlogP>

          <BlogH2>10. Al Molo（W 香港酒店）— 最佳海港景色意大利料理</BlogH2>
          <BlogP>位於九龍 W 酒店的 Al Molo，提供面向維多利亞港的開闊海景意大利用餐體驗。薄餅是整個意式菜單的一部分，環境和景色為用餐增添難忘氛圍。適合特別場合或希望在九龍側享用意大利料理的食客。</BlogP>

          <BlogH2>如何做出最適合你的選擇</BlogH2>
          <BlogP>這份名單涵蓋了不同風格、不同場合和不同預算的薄餅選擇，因為並非每個薄餅夜晚都需要同樣的東西。但如果問題只是「<strong className="text-white font-semibold">香港最佳薄餅餐廳</strong>是哪家」，大多數認真對待飲食的人都會給出同一個答案。Vincenzo Capuano 帶來了一種其他選項無法複製的東西：由世界冠軍親自建立的當代拿坡里薄餅哲學，在香港的土地上完整呈現。其餘九個選項各有所長——而第一名，有它不可撼動的理由。直接<a href="/reservations" className={lnk}>訂座親身體驗</a>，或先<a href="/menu" className={lnk}>查看菜單</a>了解更多。</BlogP>

          <BlogFAQ
            title="常見問題"
            items={faqsHK}
          />
        </>
      ) : (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/detto-fatto-pizza.png"
            alt="Best pizza restaurants in Hong Kong 2026 — Vincenzo Capuano contemporary Neapolitan pizza"
            caption="The definitive 2026 guide to the best pizza restaurants in Hong Kong"
          />

          <BlogP>Hong Kong is one of the world's great food cities, and the question of the <strong className="text-white font-semibold">best pizza restaurants in Hong Kong</strong> now has genuinely compelling answers. A decade ago, the options were limited to international chains and Italian restaurants where pizza was an afterthought. Today, the city has a real pizza scene — driven by better ingredients, more serious technique, and a dining public that knows the difference between a good pizza and a great one. This 2026 guide covers the top 10 destinations across every style, occasion, and budget, so you can stop searching and start eating.</BlogP>

          <BlogHighlight>"Hong Kong's pizza culture has grown up. This city now deserves a guide that takes it seriously."</BlogHighlight>

          <BlogH2>1. Vincenzo Capuano Hong Kong — Best for Authentic Neapolitan Pizza</BlogH2>
          <BlogP>As the author of this guide, we'll acknowledge the obvious — and the numbers back it up without apology. <strong className="text-white font-semibold">Vincenzo Capuano</strong> is ranked <strong className="text-white font-semibold">#13 globally</strong> in the Top 50 Pizza panel, founded on the recipes and standards of 2022 World Pizza Champion Vincenzo Capuano. The Hong Kong location at <strong className="text-white font-semibold">Lee Tung Avenue, Wan Chai</strong> is the most credentialed pizza restaurant this city has ever had — and the pizza justifies every credential it holds.</BlogP>
          <BlogH3>Why It Takes the Top Spot</BlogH3>
          <BlogP>Three things separate it: dough, ingredients, and technical depth. The signature cornicione is airy and dramatically raised, produced by an extended cold fermentation that builds flavour alongside structure. The scissors-and-stand presentation has become one of Hong Kong's most talked-about dining rituals. Ingredients are imported Italian — San Marzano tomatoes, buffalo mozzarella — sourced to the same specifications as the Naples originals. For the full picture, <a href="/vincenzo-capuano-hong-kong-review" className={lnk}>read our complete review here</a>, or <a href="/reservations" className={lnk}>book your table directly</a>.</BlogP>
          <BlogList items={[
            'Address: Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai',
            'Best for: authentic Neapolitan pizza, refined Italian dining, date nights, special occasions',
            'Must-order: Margherita (the benchmark) and Diavola (for personality)',
            'Getting there: Wan Chai MTR Exit D, 5-minute walk',
            'Ranking: #13 globally / 2022 World Pizza Champion',
          ]} />

          <BlogH2>2. Motorino — A Solid Neapolitan Alternative</BlogH2>
          <BlogP>Motorino operates across multiple cities and has built a following in Hong Kong for its direct, honest approach to <strong className="text-white font-semibold">Neapolitan-style pizza</strong>. It is a reliable choice for those searching for a Neapolitan option outside of Wan Chai, with a straightforward menu and consistent quality. The ingredient depth and technical precision sit at a different level to Vincenzo Capuano, but for a good-quality pizza night without the wait, it serves the purpose well.</BlogP>

          <BlogH2>3. Homeslice — Best for New York-Style Pizza</BlogH2>
          <BlogP>For diners drawn to the American pizza tradition, Homeslice has established itself as one of Hong Kong's go-to destinations for <strong className="text-white font-semibold">NY-style pizza</strong> — large, thin-based, generously loaded, and built for the fold. It is an entirely different philosophy to Neapolitan, and one that Homeslice executes well within its category. A great option for casual lunches and relaxed group dinners. To understand how the two styles differ fundamentally, <a href="/what-is-neapolitan-pizza" className={lnk}>read our guide to Neapolitan pizza</a>.</BlogP>

          <BlogH2>4. CIAK — In The Kitchen — Best Italian Restaurant Pizza</BlogH2>
          <BlogP>CIAK is one of Hong Kong's most respected Italian restaurants, and the pizza earns its place on a menu that takes Italian cooking seriously. <strong className="text-white font-semibold">Wood-fired oven</strong> charring, carefully sourced Italian ingredients, and a dining environment that elevates the occasion — this is the right choice when you want pizza as part of a complete Italian meal rather than as the evening's sole focus. The service and atmosphere are polished throughout.</BlogP>

          <BlogH2>5. 8½ Otto e Mezzo Bombana — Best for a Luxury Occasion</BlogH2>
          <BlogP>For those treating dinner as a genuine event, <strong className="text-white font-semibold">8½ Otto e Mezzo Bombana</strong> offers Hong Kong's most refined Italian dining experience — and the pizza, while not the centrepiece of the menu, reflects the Michelin-starred attention to detail that runs through everything here. This is the choice when the occasion calls for the city's very finest Italian cooking in a setting that matches it. Book well in advance.</BlogP>

          <BlogH2>6. Grissini (Grand Hyatt) — Best Hotel Italian Pizza</BlogH2>
          <BlogP>One of Hong Kong's longest-standing fine Italian restaurants, <strong className="text-white font-semibold">Grissini</strong> at the Grand Hyatt is known for its wood-fired oven pizzas and carefully curated Italian pantry. A polished, consistent choice for hotel guests and diners seeking a premium Italian experience in Wan Chai. The service standard is high, the room is comfortable, and the pizza is reliably well-made throughout.</BlogP>

          <BlogH2>7. Isola Bar & Grill — Best Views with Your Pizza</BlogH2>
          <BlogP>Perched above Central at IFC Mall, <strong className="text-white font-semibold">Isola</strong> is as well known for its Victoria Harbour panorama as for its Italian menu. Pizza here sits within a relaxed Italian dining context, backed by quality ingredients and an ambiance that makes the meal feel effortlessly special. If you want your pizza alongside one of Hong Kong's most extraordinary views, there is no better backdrop in the city.</BlogP>

          <BlogH2>8. Posto Pubblico — Best Neighbourhood Italian Atmosphere</BlogH2>
          <BlogP>Tucked into SoHo, <strong className="text-white font-semibold">Posto Pubblico</strong> has long been a fixture for locals looking for an unfussy, neighbourhood Italian with solid pizza at its core. No ceremony, no complicated menu — just fresh ingredients, a relaxed setting, and a pizza that delivers without overreaching. The kind of place you return to on a Tuesday without needing a reason.</BlogP>

          <BlogH2>9. Pizza Express — Most Reliable Chain Option</BlogH2>
          <BlogP>With multiple locations across Hong Kong, <strong className="text-white font-semibold">Pizza Express</strong> remains the city's most consistent pizza chain — thin-based, well-portioned, and accessible enough for families and anyone who wants a reliable meal without the fuss of a reservation. It won't surprise you, but it also won't disappoint. For everyday pizza needs on a straightforward budget, it is the most dependable chain option available.</BlogP>

          <BlogH2>10. Al Molo (W Hong Kong) — Best Harbour-View Italian</BlogH2>
          <BlogP>Located in the W Hong Kong hotel in Kowloon, <strong className="text-white font-semibold">Al Molo</strong> offers an Italian dining experience with sweeping Victoria Harbour views that make every meal feel like an event. Pizza is part of a broader Italian menu, and the waterfront setting adds an atmosphere that is hard to replicate. Worth visiting for special occasions or when hosting guests who want the full Hong Kong skyline as their backdrop.</BlogP>

          <BlogH2>How to Choose the Right One for You</BlogH2>
          <BlogP>This list covers different styles, occasions, and price points — because not every pizza night calls for the same thing. But if the question is simply which of these is the <strong className="text-white font-semibold">best pizza restaurant in Hong Kong</strong>, one answer returns consistently. Vincenzo Capuano brings something the other entries on this list cannot replicate: a world-champion contemporary Neapolitan philosophy, fully intact, in the heart of Wan Chai. The rest of this list each has its own strengths — and that #1 spot has reasons that hold up on every visit. <a href="/reservations" className={lnk}>Reserve a table here</a> to find out for yourself, or <a href="/menu" className={lnk}>explore the menu first</a>.</BlogP>

          <BlogFAQ
            title="Frequently Asked Questions"
            items={faqsEN}
          />
        </>
      )}
    </BlogLayout>
  );
};
