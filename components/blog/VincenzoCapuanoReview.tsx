
import React from 'react';
import { Language } from '../../translations';
import {
  BlogLayout, BlogH2, BlogH3, BlogP, BlogHighlight,
  BlogList, BlogImage, BlogFAQ, FAQItem,
} from './BlogLayout';

interface Props { lang: Language; onBookClick: () => void; }

const lnk = 'text-gold hover:text-white transition-colors underline decoration-gold/30 underline-offset-2';

export const VincenzoCapuanoReview: React.FC<Props> = ({ lang, onBookClick }) => {
  const isHK = lang === 'hk';

  const faqsEN: FAQItem[] = [
    {
      q: 'What is the scissors pizza presentation at Vincenzo Capuano Hong Kong?',
      a: 'The pizza arrives on a raised metal stand and is cut at the table using scissors rather than a wheel. The stand keeps the base crisp by allowing air beneath the pizza; the scissors preserve the airy cornicione structure that a rolling blade would compress. It is both practical and theatrical — and entirely deliberate.',
    },
    {
      q: 'Is Vincenzo Capuano Hong Kong worth the price?',
      a: <>Every pizza uses imported Italian ingredients including San Marzano tomatoes and buffalo mozzarella, prepared using the techniques of a <strong className="text-white font-semibold">2022 World Pizza Champion</strong>. The quality justifies the price fully. This is premium pizza made at a world-class standard — not a premium price for a standard product.</>,
    },
    {
      q: 'What are the must-order pizzas at Vincenzo Capuano?',
      a: <>The <strong className="text-white font-semibold">Margherita</strong> is essential on a first visit — it shows ingredient quality and dough precision most clearly. The Diavola is a strong follow-up. <a href="/menu" className={lnk}>View the full menu</a> to plan your visit in advance.</>,
    },
    {
      q: 'Does Vincenzo Capuano Hong Kong take walk-ins?',
      a: <>Walk-ins are welcome when seats are available. However, to guarantee your preferred time — especially on evenings and weekends — <a href="/reservations" className={lnk}>making a reservation in advance</a> is strongly recommended.</>,
    },
    {
      q: 'What time does Vincenzo Capuano open in Hong Kong?',
      a: <>Open <strong className="text-white font-semibold">7 days a week</strong>: Lunch 12:00–15:00 and Dinner 18:00–23:00. See our <a href="/contact" className={lnk}>contact page</a> for full details.</>,
    },
    {
      q: 'Who is Vincenzo Capuano and what makes him a world champion?',
      a: <>Vincenzo Capuano is a third-generation pizza maker from Naples who won the <strong className="text-white font-semibold">2022 World Pizza Championship</strong> — the highest competitive stage in the global pizza world. His techniques and ingredient standards are the foundation of every pizza served in Hong Kong. <a href="/vincenzo-capuano-story" className={lnk}>Read the full story here</a>.</>,
    },
    {
      q: 'Is the food at Vincenzo Capuano Hong Kong authentic Neapolitan?',
      a: <>Yes. The pizza uses imported Italian ingredients, the same fermentation methods developed by Vincenzo Capuano in Naples, and the contemporary Neapolitan technique that earned him the world title. For background on what distinguishes authentic Neapolitan pizza, <a href="/what-is-neapolitan-pizza" className={lnk}>read our guide here</a>.</>,
    },
  ];

  const faqsHK: FAQItem[] = [
    {
      q: 'Vincenzo Capuano 香港的剪刀薄餅呈現方式是什麼？',
      a: '薄餅放在升高的金屬架上，在桌邊用剪刀而非滾輪刀切開。架子讓底部保持酥脆；剪刀保護 cornicione 的空氣結構不被壓扁。這是實用與儀式感的完美結合，完全是有意為之。',
    },
    {
      q: 'Vincenzo Capuano 香港的消費是否物有所值？',
      a: <>每塊薄餅使用進口意大利食材，包括 San Marzano 番茄和水牛莫扎里拉，以<strong className="text-white font-semibold">2022 年世界薄餅冠軍</strong>的技術製作。品質完全值得其價格——這是世界級水準的頂級薄餅，而非普通產品的溢價。</>,
    },
    {
      q: '在 Vincenzo Capuano 必點哪些薄餅？',
      a: <><strong className="text-white font-semibold">Margherita</strong> 是第一次到訪的必選——最清晰地展示食材品質和麵糰精確度。Diavola 是很好的後續選擇。<a href="/menu" className={lnk}>查看完整菜單</a>提前計劃。</>,
    },
    {
      q: 'Vincenzo Capuano 香港接受即場入座嗎？',
      a: <>有空位時歡迎即場入座。但為保證您偏好的時間——尤其是晚上和週末——強烈建議<a href="/reservations" className={lnk}>提前訂座</a>。</>,
    },
    {
      q: 'Vincenzo Capuano 香港的開放時間是什麼？',
      a: <><strong className="text-white font-semibold">每週 7 天</strong>開放：午市 12:00–15:00，晚市 18:00–23:00。詳情請瀏覽我們的<a href="/contact" className={lnk}>聯絡頁面</a>。</>,
    },
    {
      q: 'Vincenzo Capuano 是誰？他的世界冠軍稱號是如何獲得的？',
      a: <>Vincenzo Capuano 是來自那不勒斯的第三代薄餅師傅，赢得了<strong className="text-white font-semibold">2022 年世界薄餅錦標賽</strong>冠軍——全球薄餅界最高競技舞台。他的技術和食材標準是香港每塊薄餅的基礎。<a href="/vincenzo-capuano-story" className={lnk}>在此閱讀完整故事</a>。</>,
    },
    {
      q: 'Vincenzo Capuano 香港的薄餅是否正宗拿坡里風格？',
      a: <>是的。薄餅使用進口意大利食材，採用 Vincenzo Capuano 在那不勒斯開創的相同發酵方法，以及為他贏得世界冠軍稱號的當代拿坡里技術。有關正宗拿坡里薄餅有何獨特之處，<a href="/what-is-neapolitan-pizza" className={lnk}>請閱讀我們的指南</a>。</>,
    },
  ];

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '餐廳評論' : 'Restaurant Review'}
      title={isHK ? 'Vincenzo Capuano 香港評論：每個人都在談論的世界冠軍薄餅' : 'Vincenzo Capuano Hong Kong Review: The World Champion Pizza Everyone Is Talking About'}
      readTime={isHK ? '閱讀時間約 6 分鐘' : '6 minute read'}
    >
      {isHK ? (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/detto-fatto-pizza.png"
            alt="Vincenzo Capuano 香港評論 — 灣仔世界冠軍當代拿坡里薄餅"
            caption="Vincenzo Capuano 香港 — 灣仔利東街世界冠軍薄餅"
          />

          <BlogP>每隔一段時間，香港就會出現一家讓整個城市停下來認真討論的餐廳。不靠名人效應，不靠豪華裝潢，就靠食物本身。<strong className="text-white font-semibold">Vincenzo Capuano 香港</strong>位於灣仔利東街，帶著一個明確的主張而來：由世界冠軍薄餅師傅直接從那不勒斯帶來的當代拿坡里薄餅。它在開業後迅速成為全城最多人討論的餐廳之一，原因不需要複雜解釋——薄餅本身就是答案。</BlogP>

          <BlogHighlight>「這不是薄餅快餐。這是薄餅藝術。」</BlogHighlight>

          <BlogH2>第一印象：空間與氛圍</BlogH2>
          <BlogP><strong className="text-white font-semibold">Vincenzo Capuano 香港</strong>的用餐空間精心設計而不矯揉造作——深色調、乾淨線條，以及讓你看到師傅處理麵糰過程的開放式廚房。這裡不試圖以裝潢分散你的注意力。所有的自信都放在產品本身，整個空間的設計都在讓薄餅成為主角。它感覺像一個認真對待自己所做之事、同時又不過分嚴肅的地方——這種平衡比看起來更難達到。</BlogP>

          <BlogH2>標誌性呈現方式：剪刀與薄餅架</BlogH2>
          <BlogP>這是每次到訪都會被拍照的一幕。薄餅放在一個升高的金屬架上送到桌前，服務員用剪刀在桌邊逐份切開。這在社交媒體上已被分享無數次——但它不只是一個噱頭。每個細節背後都有充分的道理。</BlogP>
          <BlogH3>為何用剪刀而非滾輪刀？</BlogH3>
          <BlogP>金屬架讓底部在上菜過程中持續透氣，防止蒸汽積聚令底部軟化。剪刀避免了滾輪刀切割時施加的壓力——滾輪會壓扁 cornicione 的空氣結構，而這個結構正是整塊薄餅最珍貴的部分。一旦你理解這個系統在保護什麼，你看到的就不只是一個表演動作，而是一個每個環節都服務於薄餅本身的完整思考。</BlogP>
          <BlogList items={[
            '金屬架讓底部持續透氣，保持酥脆不積水',
            '剪刀完整保留 cornicione 的空氣結構，不造成壓扁',
            '均勻份量分配，非常適合多人共享',
            '整個過程本身就是一種精心設計的用餐儀式',
          ]} />

          <BlogH2>我們點了什麼</BlogH2>
          <BlogH3>Margherita：基準測試</BlogH3>
          <BlogP>從 <strong className="text-white font-semibold">Margherita</strong> 開始——始終如一的正確起點。San Marzano 番茄帶著乾淨的甜酸平衡，水牛莫扎里拉有真實的濃郁奶香，新鮮羅勒清爽提香——三種元素在那個誇張的 cornicione 之下找到了完美比例。那塊麵皮本身有著發酵帶來的微酸感、麵粉的自然甜味，以及讓你在思考「這真的是薄餅嗎」的同時把每一口邊角都吃得精光的滿足感。</BlogP>
          <BlogH3>Diavola：個性之選</BlogH3>
          <BlogP><strong className="text-white font-semibold">Diavola</strong> 緊隨其後。辣味薩拉米在烘烤中微微出油，滲入麵糰邊緣，帶來一種豐腴而不膩的辛辣層次感。如果你希望在傳統拿坡里框架內感受個性，這是不二之選。出發前<a href="/menu" className={lnk}>查看我們的完整菜單</a>，探索更多可能。</BlogP>

          <BlogH2>Vincenzo Capuano 是誰？</BlogH2>
          <BlogP>這家餐廳背後的名字，是一位來自那不勒斯的第三代薄餅師傅。<strong className="text-white font-semibold">Vincenzo Capuano</strong> 在 2022 年世界薄餅錦標賽中奪冠——全球薄餅界最高競技舞台，評審標準涵蓋麵糰技術、食材品質和最終產品。這不是名譽頭銜，而是在直接競技中贏得的成就。香港分店的每塊薄餅都按照他的規格和方法製作，沒有任何授權稀釋，也沒有妥協。</BlogP>
          <BlogP>全球前 50 薄餅排名第 13 位，這個數字在香港的餐廳名單中是獨一無二的。想深入了解這位師傅的背景與傳承，<a href="/vincenzo-capuano-story" className={lnk}>在此閱讀 Vincenzo Capuano 的完整故事</a>。</BlogP>

          <BlogH2>服務與整體氛圍</BlogH2>
          <BlogP>服務沉穩而周到，沒有過分熱情，但也絕不疏離。團隊對薄餅有清晰的理解，能夠回答關於麵糰、食材和製作工藝的問題，而不只是複述菜單描述。這種自信本身就是品質的一部分。整體氛圍輕鬆精緻——適合特別場合，但也不排斥一個普通的週二晚上。</BlogP>

          <BlogH2>誰應該來？</BlogH2>
          <BlogP>如果你曾在意大利吃過真正的拿坡里薄餅，並在香港苦苦找不到能與之媲美的——這裡是你的答案。如果你從未嘗過正宗拿坡里薄餅，想要親身體驗到底有何不同——從這裡開始。它同樣完美適合希望給對方留下深刻印象的約會場合、慶生晚宴，或帶著外地朋友感受香港最頂尖的意大利料理。<a href="/reservations" className={lnk}>提前訂座</a>確保最佳體驗。</BlogP>

          <BlogH2>總結評分</BlogH2>
          <BlogList items={[
            <><strong className="text-white font-semibold">薄餅品質</strong> — 頂級，技術精確，食材主導，每塊均達世界冠軍水準</>,
            <><strong className="text-white font-semibold">食材</strong> — 進口意大利頂級食材，無妥協</>,
            <><strong className="text-white font-semibold">體驗</strong> — 剪刀儀式為每次到訪增添場合感</>,
            <><strong className="text-white font-semibold">位置</strong> — 灣仔利東街，港鐵站 D 出口步行 5 分鐘</>,
            <><strong className="text-white font-semibold">性價比</strong> — 頂級定價對應頂級產品，每分錢都有交代</>,
          ]} />
          <BlogP><strong className="text-white font-semibold">Vincenzo Capuano 香港</strong>不是一個潮流故事。它是一家以真實世界級資格到來的餐廳，製作的產品始終如一地達到那些資格所承諾的水準。去試一次，你會明白為何全城都在談論它——然後你會發現自己比計劃更快地回訪。</BlogP>

          <BlogFAQ
            title="常見問題"
            items={faqsHK}
          />
        </>
      ) : (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/detto-fatto-pizza.png"
            alt="Vincenzo Capuano Hong Kong review — world champion contemporary Neapolitan pizza in Wan Chai"
            caption="Vincenzo Capuano Hong Kong — Lee Tung Avenue, Wan Chai"
          />

          <BlogP>Every so often, a restaurant opens in Hong Kong that makes the whole city stop and pay attention — not because of a celebrity endorsement or a lavish fit-out, but because the food is genuinely worth talking about. <strong className="text-white font-semibold">Vincenzo Capuano Hong Kong</strong>, on Lee Tung Avenue in Wan Chai, arrived with a very specific claim: world-champion Neapolitan pizza, brought directly from Naples. It has spent every service since proving that claim true — and it has become one of the most recommended restaurants in the city as a result.</BlogP>

          <BlogHighlight>"This isn't fast pizza. This is pizza as a craft."</BlogHighlight>

          <BlogH2>First Impressions: The Space</BlogH2>
          <BlogP>The dining room at <strong className="text-white font-semibold">Vincenzo Capuano Hong Kong</strong> is composed and deliberate — dark tones, clean lines, and an open kitchen that lets you watch the dough work as part of the experience. There is no attempt to distract you with décor or clever lighting. The confidence here is placed entirely in the product, and the room is designed to let the pizza take centre stage. It feels like a place that takes what it does seriously without taking itself too seriously — and that is a harder balance to strike than it sounds.</BlogP>

          <BlogH2>The Scissors and the Stand — A Ritual with Purpose</BlogH2>
          <BlogP>This is the moment that gets photographed. The pizza arrives on an elevated metal stand, scissors placed alongside it, and a server cuts each portion at the table. It has been shared across Instagram and across dining conversations more times than we can count — but it is not just theatre. Every element of the system serves the pizza.</BlogP>
          <BlogH3>Why Scissors, Not a Wheel?</BlogH3>
          <BlogP>The elevated stand keeps the base crisp throughout service by allowing air to circulate beneath the pizza — something a flat surface prevents. The scissors protect the cornicione from the compression that a rolling blade applies, preserving the airy, hollow structure that makes the crust the talking point of every table. Once you understand what the system is protecting, you stop seeing it as a gimmick and start seeing it as a decision made in complete service of the product.</BlogP>
          <BlogList items={[
            'Elevated stand allows air circulation — base stays crisp, no moisture build-up',
            'Scissors preserve the cornicione structure that a wheel would compress',
            'Even portioning across the whole pizza — every share equal',
            'The ritual adds ceremony to a meal that is worth celebrating',
          ]} />

          <BlogH2>What We Ordered</BlogH2>
          <BlogH3>The Margherita: The Benchmark</BlogH3>
          <BlogP>The <strong className="text-white font-semibold">Margherita</strong> first — always the right starting point. San Marzano tomato with its clean, balanced acidity, buffalo mozzarella with a genuine milky depth, fresh basil, and that cornicione: dramatically raised, hollow inside, with a charred outer shell giving way to a soft, pillowy crumb. The dough carries its own flavour — a faint sourness from the long ferment, a slight natural sweetness, and a chew that makes the crust the best part of the meal rather than something to leave behind.</BlogP>
          <BlogH3>The Diavola: Character and Heat</BlogH3>
          <BlogP>The <strong className="text-white font-semibold">Diavola</strong> followed. Spicy salami rendered just enough during the bake that its oils seeped into the dough at the edges, creating a richness that balanced the heat without overwhelming it. This is a pizza that rewards diners who want personality within the Neapolitan tradition. <a href="/menu" className={lnk}>View the full menu here</a> to plan your order before arriving.</BlogP>

          <BlogH2>The Story Behind the Name</BlogH2>
          <BlogP><strong className="text-white font-semibold">Vincenzo Capuano</strong> is a third-generation pizza maker from Naples who won the 2022 World Pizza Championship — the most prestigious competition in the global pizza world, judged on dough handling, ingredient quality, and final product at the highest level. This is not a ceremonial title. It was earned in direct competition against the world's best. Every pizza served in Hong Kong is made to his specifications, using his methods. No licensing dilution. No compromise. <a href="/vincenzo-capuano-story" className={lnk}>Read the full story of Vincenzo Capuano here</a>.</BlogP>
          <BlogP>Ranked <strong className="text-white font-semibold">#13 globally</strong> in the Top 50 Pizza list, this is a credential that stands alone in Hong Kong's restaurant landscape. It shapes every decision made in the kitchen — ingredient sourcing, fermentation timing, dough hydration — and it shows in the product that arrives at your table.</BlogP>

          <BlogH2>Service and Atmosphere</BlogH2>
          <BlogP>The service is assured and attentive without being intrusive. The team understands the pizza well — able to answer questions about the dough, the ingredients, and the craft rather than simply reciting menu descriptions. That level of knowledge is itself a signal of quality. The overall atmosphere is relaxed and refined — right for a special occasion but equally comfortable for a casual midweek dinner. <a href="/reservations" className={lnk}>Booking in advance</a> is recommended to secure your preferred seating.</BlogP>

          <BlogH2>Who Should Visit</BlogH2>
          <BlogP>If you have eaten pizza in Naples and spent years in Hong Kong unable to find anything close — this is where you have been waiting for. If you have never had authentic Neapolitan pizza and want to understand what sets it apart from everything else, start here. It works for a considered date, a birthday dinner, a group gathering, or showing a visiting friend what Hong Kong's dining scene is genuinely capable of. The pizza at <strong className="text-white font-semibold">Vincenzo Capuano Hong Kong</strong> is the kind that earns repeat visits without needing a special occasion as justification.</BlogP>

          <BlogH2>The Verdict</BlogH2>
          <BlogList items={[
            <><strong className="text-white font-semibold">Pizza quality</strong> — exceptional, technically precise, and ingredient-led throughout</>,
            <><strong className="text-white font-semibold">Ingredients</strong> — imported Italian produce, no shortcuts taken anywhere on the menu</>,
            <><strong className="text-white font-semibold">Experience</strong> — the scissors presentation adds occasion to every single visit</>,
            <><strong className="text-white font-semibold">Location</strong> — Lee Tung Avenue, Wan Chai, 5-minute walk from MTR Exit D</>,
            <><strong className="text-white font-semibold">Value</strong> — premium pricing for a demonstrably premium product, every dollar accounted for</>,
          ]} />
          <BlogP><strong className="text-white font-semibold">Vincenzo Capuano Hong Kong</strong> is not a trend. It is a restaurant that arrived with legitimate world-class credentials, makes a product that consistently lives up to them, and has earned its place as the standout pizza experience in Hong Kong. Visit once. You will understand immediately why everyone is talking about it — and you will find yourself planning a return visit before you have finished the first.</BlogP>

          <BlogFAQ
            title="Frequently Asked Questions"
            items={faqsEN}
          />
        </>
      )}
    </BlogLayout>
  );
};
