
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
      a: <>Neapolitan pizza uses a specific flour, simple San Marzano tomatoes, fresh mozzarella, and is cooked in a wood-fired oven at very high heat for under 90 seconds. The result is a <strong className="text-white font-semibold">soft, chewy crust with a charred, blistered edge</strong> called the cornicione. It is protected by UNESCO as an Intangible Cultural Heritage.</>,
    },
    {
      q: 'What is contemporary Neapolitan pizza?',
      a: <>Contemporary Neapolitan, which is what Vincenzo Capuano specialises in, takes the traditional method and adds higher hydration dough (up to 80% water) and longer fermentation (24 to 36 hours). The result is a <strong className="text-white font-semibold">lighter, airier crust</strong> that is easier to digest and more complex in flavour.</>,
    },
    {
      q: 'Where exactly is Vincenzo Capuano Hong Kong?',
      a: <>Lee Tung Avenue, Wan Chai. The full address is <strong className="text-white font-semibold">Shop G04-05/F01A, 200 Queen's Road East, Wan Chai</strong>. A five-minute walk from Wan Chai MTR exit A3.</>,
    },
    {
      q: 'Do I need to book in advance?',
      a: <>Yes, especially for dinner and weekends. <a href="/reservations" className={lnk}>Book your table here</a>. Walk-ins are taken on availability but waits can be long.</>,
    },
    {
      q: 'What is the best pizza to order at Vincenzo Capuano?',
      a: <>Start with the <strong className="text-white font-semibold">Provola E Peppe</strong> for the signature smoked provolone and peppers combination. Then try Abbraccio E Mamma for the ricotta-stuffed crust experience. Classic Margherita is essential to benchmark the dough. <a href="/menu" className={lnk}>See the full menu here</a>.</>,
    },
    {
      q: 'Why is the pizza cut with scissors?',
      a: 'The high-hydration contemporary Neapolitan crust is full of large air pockets. A rolling cutter would crush them. Scissors cut cleanly without destroying the structure. It is functional first, visually memorable second.',
    },
    {
      q: 'Is it expensive?',
      a: 'Pizzas are roughly HKD 180 to 320. Budget around HKD 300 to 450 per person including a drink and dessert. It is priced as a premium dining experience.',
    },
    {
      q: 'Is there parking nearby?',
      a: "Lee Tung Avenue has access to the Queen's Road East carpark. Public transport is recommended — Wan Chai MTR is a five-minute walk.",
    },
    {
      q: 'Can I visit with children?',
      a: 'Yes. The open kitchen, the pizza oven, and the scissors presentation tend to keep children engaged. The menu also includes approachable options for younger diners.',
    },
  ];

  const faqsHK: FAQItem[] = [
    {
      q: '那不勒斯薄餅與普通薄餅有什麼不同？',
      a: <>那不勒斯薄餅使用特定麵粉、簡單的 San Marzano 番茄、新鮮馬蘇里拉芝士，並在高溫柴燒烤爐中以不到 90 秒的時間烤製。結果是<strong className="text-white font-semibold">柔軟有嚼勁的麵皮，帶有焦黑、起泡的邊緣</strong>，稱為 cornicione。它受到聯合國教科文組織非物質文化遺產保護。</>,
    },
    {
      q: '什麼是當代拿坡里薄餅？',
      a: <>當代拿坡里薄餅是 Vincenzo Capuano 的專長，在傳統方法基礎上加入了更高水分麵糰（高達 80% 水分）和更長發酵時間（24 至 36 小時）。結果是更<strong className="text-white font-semibold">輕盈、更充滿空氣感的麵皮</strong>，更易消化，風味更複雜。</>,
    },
    {
      q: 'Vincenzo Capuano 香港的確切地址在哪裡？',
      a: <>灣仔利東街。完整地址為<strong className="text-white font-semibold">灣仔皇后大道東 200 號 G04-05/F01A 舖</strong>。距灣仔港鐵站 A3 出口步行約五分鐘。</>,
    },
    {
      q: '需要提前訂座嗎？',
      a: <>是的，尤其是晚餐和週末。<a href="/reservations" className={lnk}>在此訂座</a>。即場入座視乎座位供應情況，等待時間可能較長。</>,
    },
    {
      q: '在 Vincenzo Capuano 最好點什麼薄餅？',
      a: <>從<strong className="text-white font-semibold">Provola E Peppe</strong>開始，體驗煙燻波蘿伏洛芝士和甜椒的招牌組合。然後嚐試 Abbraccio E Mamma 的瑞可達填充麵皮體驗。經典 Margherita 是測試麵糰質量的必點之選。<a href="/menu" className={lnk}>在此查看完整菜單</a>。</>,
    },
    {
      q: '為什麼薄餅用剪刀切？',
      a: '高水分當代拿坡里麵皮充滿大型氣孔。滾輪刀會壓碎這些氣孔。剪刀可以乾淨地切割而不破壞結構。功能性第一，視覺效果第二。',
    },
    {
      q: '費用昂貴嗎？',
      a: '薄餅約港幣 180 至 320 元。包括一杯飲料和甜品，每人預算約港幣 300 至 450 元。定位為高端用餐體驗。',
    },
    {
      q: '附近有停車場嗎？',
      a: '利東街可使用皇后大道東停車場。建議乘坐公共交通——灣仔港鐵站步行約五分鐘。',
    },
    {
      q: '可以帶小孩嗎？',
      a: '可以。開放式廚房、薄餅烤爐和剪刀表演通常讓小孩保持興趣。菜單也有適合年幼食客的選擇。',
    },
  ];

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '香港美食指南' : 'Hong Kong Food Guide'}
      title={isHK ? '香港最佳拿坡里薄餅：Vincenzo Capuano 為何正在爆紅' : 'Best Neapolitan Pizza in Hong Kong: Why Vincenzo Capuano Is Going Viral'}
      readTime={isHK ? '閱讀時間約 7 分鐘' : '7 minute read'}
    >
      {isHK ? (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/napoli-pizza-hong-kong.png"
            alt="香港最佳拿坡里薄餅 — 灣仔 Vincenzo Capuano 的雲朵般麵皮當代拿坡里薄餅"
            caption="Vincenzo Capuano 香港 — 皇后大道東 200 號 G04-05/F01A 舖，灣仔利東街"
          />

          <BlogP>好，說真的。如果你這個月在香港刷過 Instagram，你已經看過那個薄餅了。那個麵皮高得不合理的那個。那個被金色大剪刀切開的那個。那個你的三個朋友各自發給你看，彷彿你還沒有看過一樣的那個。那個薄餅是來自<strong className="text-white font-semibold">灣仔 Vincenzo Capuano 香港</strong>，而在我實際去試之後，我明白了為什麼它爆紅了。</BlogP>

          <BlogHighlight>「如果你以為你懂拿坡里薄餅，這個會讓你重新思考。」</BlogHighlight>

          <BlogH2>快速介紹：Vincenzo Capuano 是誰？</BlogH2>
          <BlogP>Vincenzo Capuano 是 2022 年 Caputo Trophy 當代薄餅世界冠軍，職業生涯中獲得超過 40 個獎項。他在那不勒斯長大，在家族廚房裡學習製作麵糰。在國際上建立了聲譽之後，他的集團現在在意大利、迪拜及其他地區運營超過 20 家薄餅店。<strong className="text-white font-semibold">Vincenzo Capuano 香港</strong>於 2026 年 4 月 29 日開業，是品牌在香港的首家分店，也是亞洲少數幾家之一。這不是個人主廚的快閃活動。這是一個在本城市正式落地的完整概念。</BlogP>

          <BlogH2>什麼是當代拿坡里薄餅（以及為何它讓人着迷）</BlogH2>
          <BlogP>傳統那不勒斯薄餅已經很出色了。San Marzano 番茄、新鮮馬蘇里拉、柴燒烤爐、快速烤製。<a href="/what-is-neapolitan-pizza" className={lnk}>了解更多關於拿坡里薄餅傳統的知識</a>。但 Vincenzo Capuano 的方法加入了在過去十年真正改變了薄餅的東西：</BlogP>
          <BlogList items={[
            <><strong className="text-white font-semibold">高水分麵糰</strong>：大約 80% 的水分。普通薄餅麵糰大約是 55-60%。</>,
            <><strong className="text-white font-semibold">長時間發酵</strong>：24 至 36 小時。這讓麩質有時間發展出更複雜的風味。</>,
            <><strong className="text-white font-semibold">Pasquale Fazzone 手工烤爐</strong>：從意大利一磚一瓦運來，在灣仔重建。這台烤爐是整個廚房的心臟。</>,
            <>結果：麵皮充滿大型不規則氣孔，高高的焦黑 cornicione，以及一種傳統拿坡里薄餅根本無法比擬的輕盈感。</>,
          ]} />

          <BlogH2>薄餅在哪裡，確切地說</BlogH2>
          <BlogP>餐廳坐落在灣仔利東街——那條以美食而非購物聞名的步行街。地址是<strong className="text-white font-semibold">皇后大道東 200 號 G04-05/F01A 舖</strong>。兩層樓，80 個座位，從 Wan Chai 港鐵站步行五分鐘。你進入建築物的那一刻就能聞到柴燒香氣。如果你不確定那是否對的地方，你走對了。</BlogP>

          <BlogH2>應該點的三個薄餅</BlogH2>

          <BlogH3>Margherita — 基準測試</BlogH3>
          <BlogP>從這裡開始了解麵糰。San Marzano 番茄醬、fior di latte 馬蘇里拉、羅勒、橄欖油。經典組合，讓你了解麵皮本身的特質。高高的、輕盈的 cornicione，比你預期更多嚼勁，比你以為可能的更易消化。在你評論任何其他薄餅之前先評判這個。</BlogP>

          <BlogH3>Provola E Peppe — 招牌</BlogH3>
          <BlogP>煙燻波蘿伏洛芝士、手壓 San Marzano 番茄、甜椒、烤車厘茄、羅勒、橄欖油。這是讓視頻瘋傳的組合。波蘿伏洛增添煙燻深度。甜椒帶來甜味反差。麵皮承接所有汁水而不會變軟，因為高水分麵糰製造出足夠的結構。<a href="/menu" className={lnk}>在此查看完整菜單</a>。</BlogP>

          <BlogH3>Abbraccio E Mamma — 當你想要一切的時候</BlogH3>
          <BlogP>瑞可達填充麵皮邊、那不勒斯肉丸、格拉納帕達諾、水牛馬蘇里拉。這是 Vincenzo Capuano 真正超越限制的時候。光是填充麵皮邊就是完整的一道菜。這是你與朋友分享的那道菜，然後你們爭論誰能再多吃一片。</BlogP>

          <BlogH2>為什麼它正在爆紅</BlogH2>
          <BlogList items={[
            <><strong className="text-white font-semibold">剪刀時刻</strong>：薄餅整塊送到桌前，然後在桌邊用金色剪刀切開。每個人都在拍攝這個視頻。它既有功能性（保護輕盈麵皮的氣孔），也是完美的內容。</>,
            <><strong className="text-white font-semibold">麵皮本身</strong>：你從未見過這麼高的 cornicione。它像麵包一樣站立，焦黑和充滿空氣的內部。這是完美的薄餅照片素材。</>,
            <><strong className="text-white font-semibold">世界冠軍故事</strong>：人們喜歡吃有故事的東西。2022 年世界冠軍在灣仔開了一家薄餅店，這是一個值得分享的事實。</>,
            <><strong className="text-white font-semibold">香港是對的時機</strong>：城市在過去幾年對薄餅變得認真了。有識別力的觀眾準備好了一個真正的世界級選擇。</>,
          ]} />

          <BlogH2>到訪的實用貼士</BlogH2>
          <BlogList items={[
            <><strong className="text-white font-semibold">提前訂座</strong>。晚餐和週末人氣很旺。<a href="/reservations" className={lnk}>在此訂座</a>。</>,
            <>平日午市到訪，享受更安靜的用餐體驗——非常適合工作午餐或第一次探訪。</>,
            <>如果可以，要求安排在上層以獲得更好的對話空間——地下層在高峰時段會比較嘈雜。</>,
            <>不要太快點太多。麵糰雖然輕盈，但一個薄餅已經足夠作為一人份量，加上前菜是完整的一餐。</>,
            <>留有空間給甜品。提拉米蘇值得你的胃的 10% 空間。</>,
          ]} />

          <BlogH2>它與香港其他拿坡里薄餅的比較</BlogH2>
          <BlogP>香港有出色的傳統那不勒斯薄餅。但 Vincenzo Capuano 做的是<strong className="text-white font-semibold">當代拿坡里薄餅</strong>，這是一個不同的、更近期發展的風格。更高水分的麵糰、更長的發酵時間，以及一個幾十年工藝帶來的技術邊緣，讓任何普通薄餅店都無法輕易複製。<a href="/best-pizza-restaurants-hong-kong" className={lnk}>查看我們的香港薄餅完整指南</a>，了解其他值得訪問的地點。</BlogP>

          <BlogFAQ title="常見問題：香港拿坡里薄餅" items={faqsHK} />
        </>
      ) : (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/napoli-pizza-hong-kong.png"
            alt="Best Neapolitan pizza Hong Kong — cloud crust contemporary Neapolitan pizza at Vincenzo Capuano Wan Chai"
            caption="Vincenzo Capuano Hong Kong — Shop G04-05/F01A, 200 Queen's Road East, Lee Tung Avenue, Wan Chai"
          />

          <BlogP>Okay, real talk. If you have scrolled Instagram in Hong Kong this month, you have already seen that pizza. The one with the impossibly tall crust. The one being cut open with those big golden scissors. The one that three of your friends sent you separately as if you had not already saved it. That pizza is from <strong className="text-white font-semibold">Vincenzo Capuano Hong Kong</strong> in Wan Chai, and after I actually went and tried it, I get why it went viral.</BlogP>

          <BlogHighlight>"If you think you know Neapolitan pizza, this will make you rethink it."</BlogHighlight>

          <BlogH2>A Quick Story: Who Is Vincenzo Capuano?</BlogH2>
          <BlogP>Vincenzo Capuano is the <strong className="text-white font-semibold">Caputo Trophy World Champion for Contemporary Pizza from 2022</strong>, with over 40 industry awards across his career. He grew up in Naples, learned to make dough in his family's kitchen, built an international reputation, and now runs a group of over 20 pizzerias from Italy to Dubai. The Hong Kong outpost opened on 29 April 2026, making it the brand's first stop in the city and one of their few in Asia. This is not a pop-up or a ghost kitchen. This is a full concept that has properly landed in our city.</BlogP>

          <BlogH2>What Contemporary Neapolitan Pizza Actually Is (And Why It Matters)</BlogH2>
          <BlogP>Traditional Neapolitan pizza is already great. San Marzano tomatoes, fresh mozzarella, wood-fired oven, fast cook. <a href="/what-is-neapolitan-pizza" className={lnk}>Learn more about the Neapolitan pizza tradition here</a>. But the <strong className="text-white font-semibold">contemporary Neapolitan approach</strong> Vincenzo Capuano specialises in adds something that has genuinely changed pizza over the last decade:</BlogP>
          <BlogList items={[
            <><strong className="text-white font-semibold">High-hydration dough</strong>: around 80% water. Standard pizza dough is roughly 55–60%.</>,
            <><strong className="text-white font-semibold">Long fermentation</strong>: 24 to 36 hours. This gives the gluten time to relax and develop more complex flavours.</>,
            <><strong className="text-white font-semibold">Pasquale Fazzone hand-built oven</strong>: shipped from Italy brick by brick, reassembled in Wan Chai. This oven is the heart of the whole kitchen.</>,
            <>The result: a crust full of large irregular air pockets, a tall blistered cornicione, and a lightness that traditional Neapolitan simply cannot match.</>,
          ]} />

          <BlogH2>Where the Pizza Lives, Exactly</BlogH2>
          <BlogP>The restaurant sits on Lee Tung Avenue in Wan Chai, the pedestrian street known more for food than for shopping. The address is <strong className="text-white font-semibold">Shop G04-05/F01A, 200 Queen's Road East</strong>. Two floors, 80 seats, a five-minute walk from Wan Chai MTR. You will smell the wood-fired dough before you see the sign. If you are unsure you have the right place, you do.</BlogP>

          <BlogH2>Three Pizzas to Order</BlogH2>

          <BlogH3>Margherita — The Benchmark</BlogH3>
          <BlogP>Start here to understand the dough. San Marzano tomato sauce, fior di latte mozzarella, basil, olive oil. The classic combination so you can taste what the crust is doing on its own. Tall, light cornicione, more chew than you expected, more digestible than you thought possible. Judge this before you judge anything else.</BlogP>

          <BlogH3>Provola E Peppe — The Signature</BlogH3>
          <BlogP>Smoked provolone, hand-crushed San Marzano, sweet peppers, roasted cherry tomatoes, basil, olive oil. This is the combination making videos go viral. The provolone adds smoky depth. The peppers bring sweet contrast. The crust catches all the juice without going soggy because the high-hydration dough creates enough structure. <a href="/menu" className={lnk}>See the full menu here</a> to plan ahead.</BlogP>

          <BlogH3>Abbraccio E Mamma — When You Want Everything</BlogH3>
          <BlogP>Ricotta-stuffed crust, Neapolitan meatballs, Grana Padano, buffalo mozzarella. This is where Vincenzo Capuano pushes past any reasonable restraint. The stuffed crust alone is a full course. This is the one you share with friends and then argue over who gets the last piece.</BlogP>

          <BlogH2>Why It Is Going Viral</BlogH2>
          <BlogList items={[
            <><strong className="text-white font-semibold">The scissors moment</strong>: the pizza arrives whole, then a server cuts it open at the table with large golden scissors. Everyone is filming this. It is functional (it protects the airy crust's air pockets) and it is perfect content.</>,
            <><strong className="text-white font-semibold">The crust itself</strong>: you have never seen a cornicione this tall. It stands up like bread, charred and airy inside. It is made for food photography.</>,
            <><strong className="text-white font-semibold">The world champion angle</strong>: people love eating things with a story. A 2022 world champion opens a pizza place in Wan Chai is a shareable fact.</>,
            <><strong className="text-white font-semibold">Hong Kong was ready</strong>: the city has gotten serious about pizza over the last few years. A discerning audience was primed for a genuinely world-class option.</>,
          ]} />

          <BlogH2>Practical Tips for Your Visit</BlogH2>
          <BlogList items={[
            <><strong className="text-white font-semibold">Book ahead</strong>. Dinner and weekends fill up fast. <a href="/reservations" className={lnk}>Reserve your table here</a>.</>,
            <>Weekday lunches are quieter — great for a work lunch or a first visit without the noise.</>,
            <>Request the upper floor if you want conversation — the ground floor gets loud at peak hours.</>,
            <>Do not rush your ordering. The dough is light but one pizza per person plus a starter is a full meal.</>,
            <>Leave room for dessert. The tiramisu earns the 10% of stomach space you give it.</>,
          ]} />

          <BlogH2>How It Compares to Other Neapolitan Pizza in Hong Kong</BlogH2>
          <BlogP>Hong Kong has solid traditional Neapolitan options. But Vincenzo Capuano is doing <strong className="text-white font-semibold">contemporary Neapolitan pizza</strong>, which is a distinct and more recent evolution. The higher hydration, the longer fermentation, and the technical edge that comes from decades of focused craft is not something a typical pizzeria can easily replicate. <a href="/best-pizza-restaurants-hong-kong" className={lnk}>See our full Hong Kong pizza guide</a> for other places worth visiting.</BlogP>

          <BlogFAQ title="FAQ: Neapolitan Pizza Hong Kong" items={faqsEN} />
        </>
      )}
    </BlogLayout>
  );
};
