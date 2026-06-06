
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
      q: 'Where is Vincenzo Capuano located in Hong Kong?',
      a: <>Lee Tung Avenue, Wan Chai. The address is <strong className="text-white font-semibold">Shop G04-05 on the ground floor and F01A on the first floor, 200 Queen's Road East</strong>. It is a five-minute walk from Wan Chai MTR.</>,
    },
    {
      q: 'Is the world champion pizza title legit?',
      a: <>Yes. <strong className="text-white font-semibold">Vincenzo Capuano won the Caputo Trophy World Championship for Contemporary Pizza in 2022</strong>. He has over 40 industry awards across his career.</>,
    },
    {
      q: 'What is the pizza scissors presentation about?',
      a: 'The pizzas arrive whole and are cut at the table with large golden scissors. It protects the airy contemporary crust from being crushed by a wheel, and it makes for a memorable, social moment. It is both functional and a nice show.',
    },
    {
      q: 'Is it worth the hype?',
      a: 'Yes. The dough quality, the toppings, and the overall experience justify the buzz. The price is higher than average, but you are paying for a championship-level product.',
    },
    {
      q: 'How is the pizza different from regular Neapolitan?',
      a: <>It uses <strong className="text-white font-semibold">contemporary Neapolitan pizza techniques</strong>: higher hydration dough, around 80 percent water, and 24 to 36 hour fermentation. The crust comes out lighter, airier, and easier to digest than traditional Naples style.</>,
    },
    {
      q: 'Do they take reservations?',
      a: <>Yes, and strongly recommended, especially for dinner and weekends. <a href="/reservations" className={lnk}>Book your table here</a>.</>,
    },
    {
      q: 'What should I order on my first visit?',
      a: <>Margherita, <strong className="text-white font-semibold">Provola E Peppe</strong>, and tiramisu. Add an Aperol Spritz to start. That is a clean introduction without over-ordering. <a href="/menu" className={lnk}>See the full menu here</a>.</>,
    },
    {
      q: 'Is this the best Italian food Hong Kong has right now?',
      a: <>For pizza specifically, it is at the top of the conversation. <a href="/best-pizza-restaurants-hong-kong" className={lnk}>See our full Hong Kong pizza guide</a> for the wider picture.</>,
    },
    {
      q: 'Can I get takeaway?',
      a: 'Yes, but not recommended. The airy contemporary crust loses its texture quickly in a box. Eat in if you can.',
    },
    {
      q: 'How much does it cost?',
      a: 'Pizzas are roughly HKD 180 to 320. Most diners spend HKD 300 to 450 per person including a drink and dessert.',
    },
  ];

  const faqsHK: FAQItem[] = [
    {
      q: 'Vincenzo Capuano 香港店在哪裡？',
      a: <>灣仔利東街。地址為<strong className="text-white font-semibold">皇后大道東 200 號地下 G04-05 號舖及一樓 F01A</strong>。距灣仔港鐵站步行約五分鐘。</>,
    },
    {
      q: '世界冠軍薄餅稱號是否真實？',
      a: <>是的。<strong className="text-white font-semibold">Vincenzo Capuano 於 2022 年贏得 Caputo Trophy 當代薄餅世界冠軍</strong>，職業生涯中獲得超過 40 個行業獎項。</>,
    },
    {
      q: '薄餅剪刀呈現方式是什麼？',
      a: '薄餅整塊送到桌前，用大型金色剪刀在桌邊切開。這保護了輕盈的當代麵皮不被滾輪壓扁，同時製造出難忘的社交時刻。既實用，又是一場精彩表演。',
    },
    {
      q: '值得這樣的炒作嗎？',
      a: '值得。麵糰品質、配料和整體體驗都印證了這份聲譽。價格高於平均，但你付出的是世界冠軍級別的產品。',
    },
    {
      q: '這裡的薄餅與普通拿坡里薄餅有何不同？',
      a: <>採用<strong className="text-white font-semibold">當代拿坡里薄餅技術</strong>：更高水分麵糰（約 80% 水分）及 24 至 36 小時發酵。麵皮比傳統那不勒斯風格更輕盈、更充滿空氣感、更易消化。</>,
    },
    {
      q: '可以訂座嗎？',
      a: <>可以，強烈建議，尤其是晚餐和週末。<a href="/reservations" className={lnk}>在此預訂</a>。</>,
    },
    {
      q: '第一次到訪應該點什麼？',
      a: <>Margherita、<strong className="text-white font-semibold">Provola E Peppe</strong> 和提拉米蘇。加一杯 Aperol Spritz 開始。這是不過量點餐的完美入門組合。<a href="/menu" className={lnk}>在此查看完整菜單</a>。</>,
    },
    {
      q: '這是香港目前最好的意大利食物嗎？',
      a: <>就薄餅而言，它絕對是話題頂端。<a href="/best-pizza-restaurants-hong-kong" className={lnk}>查看我們的香港薄餅完整指南</a>了解更廣泛的全局。</>,
    },
    {
      q: '可以外賣嗎？',
      a: '可以，但不建議。輕盈的當代麵皮在盒子裡很快失去質感。盡量堂食。',
    },
    {
      q: '費用大概是多少？',
      a: '薄餅約港幣 180 至 320 元。包括一杯飲料和甜品，大多數食客每人消費約港幣 300 至 450 元。',
    },
  ];

  return (
    <BlogLayout
      lang={lang}
      onBookClick={onBookClick}
      eyebrow={isHK ? '餐廳評論' : 'Restaurant Review'}
      title={isHK ? 'Vincenzo Capuano 香港評論：每個人都在談論的世界冠軍薄餅' : 'Vincenzo Capuano Hong Kong Review: The World Champion Pizza Everyone Is Talking About'}
      readTime={isHK ? '閱讀時間約 8 分鐘' : '8 minute read'}
    >
      {isHK ? (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/detto-fatto-pizza.png"
            alt="Vincenzo Capuano 香港評論 — 灣仔世界冠軍當代拿坡里薄餅"
            caption="Vincenzo Capuano 香港 — 皇后大道東 200 號利東街"
          />

          <BlogP>我在香港吃薄餅已經多年了。深夜的 Pepperoni、上環的新拿坡里風格、從那不勒斯紅眼班機回來時的機場切片。所以當灣仔 <strong className="text-white font-semibold">Vincenzo Capuano 香港</strong> 開業的消息開始流傳時，我有點不以為然。又一個世界冠軍薄餅開業？好吧。然後我去了。然後我閉嘴了。然後我又去了。這篇香港薄餅評論會很誠實，但劇透一下——這波炒作大部分是有根據的。</BlogP>

          <BlogHighlight>「剪刀是個小玩笑。麵皮才是真正的故事。去嚐嚐吧。」</BlogHighlight>

          <BlogH2>你應該先了解的背景故事</BlogH2>
          <BlogP>Vincenzo Capuano 不是什麼隨機的 Instagram 廚師。他是 2022 年 Caputo Trophy 當代薄餅世界冠軍，在那不勒斯長大，從祖父和父親那裡學習製作麵糰，花了十多年時間完善高水分麵糰的可能性。他的集團現在在意大利至迪拜運營超過 20 家薄餅店。<strong className="text-white font-semibold">灣仔利東街的香港分店</strong>於 2026 年 4 月 29 日開業，是品牌在香港的首家分店，也是亞洲少數幾家之一。所以當你看到那些<strong className="text-white font-semibold">香港爆款薄餅視頻</strong>在網絡上流傳，這就是那個地方。</BlogP>

          <BlogH2>第一印象：走進餐廳</BlogH2>
          <BlogP>我在一個週三下午 6 點 45 分走進去。空間已經熱鬧起來。溫暖的木材、赤陶色調、柔和燈光，以及在進門前就撲面而來的柴燒麵糰香氣。開放式廚房驕傲地佇立在中央。你可以看到那台手工建造的 Pasquale Fazzone 烤爐——那台從意大利一磚一瓦運來的烤爐。那台烤爐是整個空間的中心，理所當然。</BlogP>
          <BlogP>氛圍比一家那不勒斯後街小店更精緻，但不僵硬。它感覺像一家<strong className="text-white font-semibold">奢華薄餅餐廳</strong>，卻仍然希望你用手吃飯。兩層樓，80 個座位，門口的主人能量友善。作為香港意大利餐廳的格局，它完美平衡了休閒與特殊場合。</BlogP>

          <BlogH2>薄餅剪刀呈現方式</BlogH2>
          <BlogP>讓我先處理這個話題。是的，他們真的整塊把薄餅端到桌前，然後服務員用這些巨大的金色剪刀把它切開。一些美食評論家稱之為噱頭。我不同意。以下是它重要的原因：<strong className="text-white font-semibold">當代拿坡里薄餅的麵皮在結構上非常脆弱</strong>，充滿了大型不規則氣孔。標準的滾輪刀會壓碎這些氣孔。剪刀讓輕盈的麵皮保持完整。這是一個功能性選擇，碰巧也很上鏡。是的，它能拍出很棒的視頻。它也讓你的薄餅吃起來更好。</BlogP>

          <BlogH2>食物：我點了什麼</BlogH2>

          <BlogH3>Margherita</BlogH3>
          <BlogP>我總是從這裡開始。麵糰是主角：高高的、帶有焦斑的 cornicione，柔軟的內部有真實的嚼勁。San Marzano 醬汁明亮而有酸度。fior di latte 融化成一個個奶池而不是讓切片變油。一個乾淨、自信的經典。這個 Margherita 勝過很多所謂的<strong className="text-white font-semibold">香港最佳意大利食物</strong>競爭者。</BlogP>

          <BlogH3>Provola E Peppe</BlogH3>
          <BlogP>招牌薄餅。煙燻波蘿伏洛芝士、手壓 San Marzano 番茄、甜椒、烤車厘茄、羅勒、橄欖油。波蘿伏洛增添深度而不喧賓奪主。甜椒帶來甜味。麵皮承接所有汁水而不會變軟。這是我<strong className="text-white font-semibold">在約會時會點的薄餅</strong>。<a href="/menu" className={lnk}>在此查看完整菜單</a>探索更多選擇。</BlogP>

          <BlogH3>Abbraccio E Mamma</BlogH3>
          <BlogP>填充了瑞可達芝士的麵皮邊、那不勒斯肉丸、格拉納帕達諾芝士、水牛莫扎里拉。這是薄餅形式的縱欲。光是填充麵皮就是一頓飯。我和兩位朋友分享，還是吃得很飽。為了體驗點一次，然後在以後的到訪中與較輕盈的選擇交替。</BlogP>

          <BlogH3>提拉米蘇</BlogH3>
          <BlogP>是的，要點甜品。放在玻璃杯裡，適當浸泡，咖啡與馬斯卡彭的比例恰到好處。不太甜。是真正的提拉米蘇。</BlogP>

          <BlogH2>服務與節奏</BlogH2>
          <BlogP>服務周到而不令人窒息。薄餅師傅團隊工作迅速，所以即使在繁忙的夜晚，課程之間的等待也是合理的。服務員可以帶你了解菜單，這一點很重要，因為對香港食客來說，菜名並不都是一目了然的。酒吧節目小但紮實。Negroni 苦得恰到好處，Aperol Spritz 真的是冰的。葡萄酒偏意大利風格，這說得通。</BlogP>

          <BlogH2>與其他香港薄餅的比較</BlogH2>
          <BlogP>香港在過去五年對薄餅變得認真了。傳統拿坡里選項很容易找到。羅馬風格和紐約風格也有各自的支持者。那麼 Vincenzo Capuano 在哪個位置？對我來說，這是目前城中最強的<strong className="text-white font-semibold">當代拿坡里薄餅</strong>。其他地方提供出色的傳統那不勒斯薄餅。Vincenzo 的優勢在於更高水分、更長發酵的麵糰，產生出城中其他任何地方都無法匹敵的麵皮。如果你曾經覺得拿坡里薄餅讓你的胃很重，這個版本解決了這個問題。它的定價也像一個<strong className="text-white font-semibold">奢華薄餅</strong>產品——薄餅約港幣 180 至 320 元，包括一杯飲料和甜品，每人約港幣 300 至 450 元。</BlogP>

          <BlogH2>我不太喜歡的地方</BlogH2>
          <BlogP>我不會假裝它完美無瑕。地下層在高峰時段會很嘈雜。如果你想安靜地聊天，請要求安排在上層。如果你與一個不是所有人都想吃薄餅的大型聚餐，菜單有點窄。有前菜和幾款意麵，但薄餅顯然是主角。週末即場入座的等待時間是真實的。提前訂座，或在非高峰時間到來。這些只是小問題，不會改變結論。</BlogP>

          <BlogH2>這家餐廳適合哪些人</BlogH2>
          <BlogList items={[
            '尋找下一個大事物的美食愛好者——顯然，是的',
            '想要給人留下深刻印象但不太正式的約會夜——剪刀時刻是內建的話題引子',
            '帶孩子的家庭聚餐——開放式廚房和薄餅表演讓小孩保持興奮',
            '厭倦了普通 Margherita 的意大利食物愛好者——這是一個升級',
            '想嚐嚐香港正在做的不同之處的訪客——這在名單上',
          ]} />

          <BlogFAQ title="常見問題：Vincenzo Capuano 香港" items={faqsHK} />

          <BlogH2>最終評語</BlogH2>
          <BlogP><strong className="text-white font-semibold">Vincenzo Capuano 香港</strong>名副其實。麵糰真的特別。配料誠實。用餐空間有趣。價格對於盤子裡的東西而言是公平的。如果你在香港，即使只是週末到訪，這也是值得安排行程的美食體驗之一。剪刀是個玩笑，麵皮才是真正的故事。去嚐嚐吧。<a href="/reservations" className={lnk}>在此訂座</a>。</BlogP>
        </>
      ) : (
        <>
          <BlogImage
            src="https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/detto-fatto-pizza.png"
            alt="Vincenzo Capuano Hong Kong review — world champion contemporary Neapolitan pizza in Wan Chai"
            caption="Vincenzo Capuano Hong Kong — 200 Queen's Road East, Lee Tung Avenue, Wan Chai"
          />

          <BlogP>I have been eating pizza in Hong Kong for years. Pepperoni at midnight, neo-Neapolitan in Sheung Wan, sad airport slices on red eyes back from Naples. So when the buzz started about <strong className="text-white font-semibold">Vincenzo Capuano Hong Kong</strong> opening in Wan Chai, I rolled my eyes a little. Another world champion pizza opening? Sure. Then I went. Then I shut up. Then I went back. This Hong Kong pizza review is going to be honest, but spoiler — the hype is mostly earned.</BlogP>

          <BlogHighlight>"The scissors are a wink. The crust is the real story. Go taste it."</BlogHighlight>

          <BlogH2>The Backstory You Should Know First</BlogH2>
          <BlogP>Vincenzo Capuano is not some random Instagram chef. He is a <strong className="text-white font-semibold">Caputo Trophy World Champion from 2022 for Contemporary Pizza</strong>. He grew up in Naples, learned from his grandfather and dad, and has spent more than a decade refining what high-hydration dough can do. His group now runs over 20 pizzerias from Italy to Dubai. The Hong Kong outpost at Lee Tung Avenue opened on 29 April 2026, making it the brand's first stop in Hong Kong and one of their few in Asia. So when you see <strong className="text-white font-semibold">viral pizza Hong Kong</strong> videos floating around, this is the place.</BlogP>

          <BlogH2>First Impression: Walking In</BlogH2>
          <BlogP>I walked in around 6.45pm on a Wednesday. The space was already buzzing. Warm wood, terracotta accents, soft lighting, the smell of wood-fired dough hitting the door before you do. The open kitchen sits proud in the middle. You can see the hand-built <strong className="text-white font-semibold">Pasquale Fazzone oven</strong>, the one they shipped from Italy brick by brick. That oven is the centrepiece, and rightly so.</BlogP>
          <BlogP>The vibe is more polished than a back-street Naples joint, but not stiff. It feels like a <strong className="text-white font-semibold">luxury pizza Hong Kong</strong> restaurant that still wants you to use your hands. Two floors, 80 seats, friendly host energy at the door. As an <strong className="text-white font-semibold">Italian restaurant Hong Kong</strong> setting goes, it nails the balance between casual and special-occasion.</BlogP>

          <BlogH2>The Pizza Scissors Presentation</BlogH2>
          <BlogP>Let me address the elephant in the room. Yes, they really do bring the pizza to your table whole, then a server slices it open with these massive golden scissors. Some food snobs are calling this gimmicky. I disagree. Here is why it matters: the crust on a contemporary Neapolitan pizza is structurally fragile. It is full of large irregular air pockets. A standard pizza cutter crushes those pockets. <strong className="text-white font-semibold">Scissors leave the airy crust intact</strong>. It is a functional choice that happens to be photogenic. Yes, it makes for a great video. It also keeps your pizza tasting better.</BlogP>

          <BlogH2>The Food: What I Ordered</BlogH2>

          <BlogH3>Margherita</BlogH3>
          <BlogP>I always start here. The dough is the star. Tall, blistered cornicione, a soft interior with real chew. The San Marzano sauce is bright and acidic. The fior di latte melts in pools rather than greasing the slice. A clean, confident classic. This Margherita beats a lot of so-called <strong className="text-white font-semibold">best Italian food HK</strong> contenders.</BlogP>

          <BlogH3>Provola E Peppe</BlogH3>
          <BlogP>The signature. Smoked provolone, hand-crushed San Marzano, sweet peppers, roasted cherry tomatoes, basil, olive oil. The provola adds depth without overwhelming. The peppers bring sweetness. The crust catches all the juice without going soggy. This is the one I would order on a date. <a href="/menu" className={lnk}>See the full menu here</a> to plan your visit.</BlogP>

          <BlogH3>Abbraccio E Mamma</BlogH3>
          <BlogP>Ricotta-stuffed crust, Neapolitan meatballs, Grana Padano, buffalo mozzarella. This is gluttony in pizza form. The stuffed crust alone is a meal. I shared this with two friends and we still left full. Order it once for the experience, then alternate with something lighter on future visits.</BlogP>

          <BlogH3>Tiramisu</BlogH3>
          <BlogP>Yes, get dessert. It comes in a glass, properly soaked, with the right ratio of coffee to mascarpone. Not too sweet. A real one.</BlogP>

          <BlogH2>Service and Pace</BlogH2>
          <BlogP>Service was attentive without hovering. The pizzaiolo team works fast, so even on a busy night the wait between courses was reasonable. Servers can talk you through the menu, which matters because the names are not all immediately obvious to a Hong Kong diner. The bar program is small but tight. The Negroni was properly bitter. The Aperol Spritz was actually cold. Wines lean Italian, which makes sense.</BlogP>

          <BlogH2>How It Stacks Up Against Other Hong Kong Pizza</BlogH2>
          <BlogP>Hong Kong has gotten serious about pizza in the last five years. Traditional Neapolitan options are easy to find. Roman style and New York style have their fans. So where does <strong className="text-white font-semibold">Vincenzo Capuano</strong> sit? For me, this is the strongest <strong className="text-white font-semibold">contemporary Neapolitan pizza</strong> in the city right now. Other spots do excellent traditional Naples-style pies. Vincenzo's edge is the higher-hydration, longer-fermented dough that produces a crust nobody else in town is quite matching yet. If you have ever felt that Neapolitan pizza sits heavy in your stomach, this version solves that. It is also priced like a <strong className="text-white font-semibold">luxury pizza Hong Kong</strong> product — pizzas land at roughly HKD 180 to 320, with HKD 300 to 450 per person for a drink and dessert. See where it ranks in our <a href="/best-pizza-restaurants-hong-kong" className={lnk}>full Hong Kong pizza guide</a>.</BlogP>

          <BlogH2>What I Did Not Love</BlogH2>
          <BlogP>I will not pretend it was flawless. The ground floor gets loud at peak hours — if you want a quieter conversation, request the upper level. The menu is a little narrow if you are dining with a group that does not all want pizza; there are antipasti and a few pastas, but the pizza is clearly the headline. Wait times for walk-ins on weekends are real. Book ahead, or come at off-peak. These are quibbles. They do not change the conclusion.</BlogP>

          <BlogH2>Who This Restaurant Is For</BlogH2>
          <BlogList items={[
            'Foodies hunting the next big thing — yes, obviously',
            'Date nights where you want to impress without being too formal — the pizza-scissors moment is a built-in conversation starter',
            'Family dinners with kids — the open kitchen and pizza show keeps small humans entertained',
            'Italian food lovers tired of average Margheritas — this is a step up',
            'Visitors who want to taste something Hong Kong is doing differently right now — this is on the list',
          ]} />

          <BlogFAQ title="FAQ: Vincenzo Capuano Hong Kong" items={faqsEN} />

          <BlogH2>Final Verdict</BlogH2>
          <BlogP><strong className="text-white font-semibold">Vincenzo Capuano Hong Kong</strong> earns the hype. The dough is genuinely special. The toppings are honest. The room is fun. The price is fair for what is on the plate. If you are in Hong Kong, even just visiting for a weekend, this is one of those food experiences worth planning your day around. The scissors are a wink. The crust is the real story. Go taste it. <a href="/reservations" className={lnk}>Book your table here</a>.</BlogP>
        </>
      )}
    </BlogLayout>
  );
};
