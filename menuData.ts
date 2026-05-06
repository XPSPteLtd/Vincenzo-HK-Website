import { MenuItem } from './types';

// Premium "No Image Available" placeholder
// Design: Dark green background (#0d1f10), Gold text (#d4af37), Minimal
export const NO_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22%230d1f10%22/%3E%3Cpath%20d%3D%22M400%20250%20L550%20500%20A200%20200%200%200%201%20250%20500%20Z%22%20fill%3D%22none%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%2212%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22420%22%20r%3D%2215%22%20fill%3D%22%23d4af37%22/%3E%3Ccircle%20cx%3D%22350%22%20cy%3D%22470%22%20r%3D%2210%22%20fill%3D%22%23d4af37%22%20opacity%3D%220.6%22/%3E%3Ccircle%20cx%3D%22450%22%20cy%3D%22470%22%20r%3D%2210%22%20fill%3D%22%23d4af37%22%20opacity%3D%220.6%22/%3E%3Cpath%20d%3D%22M320%20520%20Q400%20580%20480%20520%22%20fill%3D%22none%22%20stroke%3D%22%23d4af37%22%20stroke-width%3D%228%22%20stroke-linecap%3D%22round%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%22650%22%20font-family%3D%22Montserrat,sans-serif%22%20font-size%3D%2222%22%20font-weight%3D%22bold%22%20fill%3D%22%23d4af37%22%20text-anchor%3D%22middle%22%20letter-spacing%3D%223%22%3ESMELLS%20LIKE%20A%3C/text%3E%3Ctext%20x%3D%2250%25%22%20y%3D%22690%22%20font-family%3D%22Montserrat,sans-serif%22%20font-size%3D%2222%22%20font-weight%3D%22bold%22%20fill%3D%22%23d4af37%22%20text-anchor%3D%22middle%22%20letter-spacing%3D%223%22%3EMASTERPIECE%3C/text%3E%3Ctext%20x%3D%2250%25%22%20y%3D%22730%22%20font-family%3D%22Montserrat,sans-serif%22%20font-size%3D%2214%22%20font-weight%3D%22600%22%20fill%3D%22%23d4af37%22%20text-anchor%3D%22middle%22%20letter-spacing%3D%222%22%20opacity%3D%220.5%22%3EIMAGE%20PENDING%3C/text%3E%3C/svg%3E";

export const menuItems: MenuItem[] = [
  // ====================== ALA-CARTE ======================
  // STARTERS & SALADS
  {
    id: "ss-1", name: "BRUSCHETTA", nameZh: "意式烤麵包",
    description: "Toasted french baguette bread, spicy citrus salsa, Parmigiano Reggiano, balsamic glaze, evoo & basil (3pcs)",
    descriptionZh: "香烤法式長棍麵包配香辣柑橘莎莎醬、帕馬森芝士、意大利香醋汁及特級初榨橄欖油羅勒 (3件)",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Bruschetta.jpg",
    dietary: ["Vegetarian", "Spicy"]
  },
  {
    id: "ss-2", name: "BURRATA CLASSICA 125G", nameZh: "傳統布拉塔 125G",
    description: "Burrata cheese 125g, rucola, cherry tomatoes, basil pesto, oil caviar, balsamic",
    descriptionZh: "布拉塔芝士 (125克) 配芝麻菜、車厘茄、羅勒青醬、油魚子及意大利香醋",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Classica%20(300g).jpg",
    popular: true, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ss-4", name: "BURRATA PESCA E ARANCIA 125G", nameZh: "水蜜桃橙香布拉塔 125G",
    description: "Burrata cheese 125g, spicy peach salsa, orange pulp, roasted beetroot, pecan, cayenne honey glaze, oil caviar",
    descriptionZh: "布拉塔芝士 (125克) 配香辣水蜜桃莎莎醬、橙肉、烤紅甜菜、核桃、辣椒蜂蜜及油魚子",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Pesca%20e%20arancia%20(125g).jpg",
    dietary: ["Vegetarian", "Spicy", "Contains Nuts"]
  },
  {
    id: "ss-6", name: "CAESAR SALAD", nameZh: "凱撒沙律",
    description: "Crunchy romaine lettuce, grilled chicken breast, baked croutons, home-made caesar dressing, cherry tomatoes, parmigiano, evoo",
    descriptionZh: "爽脆羅馬生菜、烤雞胸肉、香乾麵包粒、自家製凱撒醬、車厘茄及帕馬森芝士",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Caesar%20salad.webp"
  },
  {
    id: "ss-7", name: "CAVOLO MELONE", nameZh: "羽衣甘藍蜜瓜沙律",
    description: "Green kale, hami melon, spicy ginger tofu dressing, cherry tomatoes, cranberries, feta cheese, shaved almonds",
    descriptionZh: "羽衣甘藍、哈密瓜、香辣薑味豆腐醬、車厘茄、蔓越莓、菲達芝士及杏仁片",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Cavolo%20Melone.jpg",
    dietary: ["Vegetarian", "Spicy", "Contains Nuts"]
  },
  {
    id: "ss-8", name: "FOCACCIA", nameZh: "自家製佛卡夏",
    description: "Home-made thin focaccia bread served w/ basil pesto and capsicum cream",
    descriptionZh: "自家製薄意式香草麵包，配羅勒青醬及甜椒奶油醬",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Focaccia.jpg",
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ss-9", name: "HOLY WINGS", nameZh: "脆炸雞翼",
    description: "Deep-fried chicken wings, served w/ chef's signature spicy sauce (7pcs)",
    descriptionZh: "脆炸雞翼，配主廚招牌香辣醬 (7件)",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Holy%20Wings.jpg",
    dietary: ["Spicy"]
  },
  {
    id: "ss-10", name: "PARMIGIANA DI MELANZANE", nameZh: "焗芝士千層茄子",
    description: "Oven-baked eggplant parmigiana, San Marzano ragu, smoked provola, basil. Alla Nonno Enzo style.",
    descriptionZh: "焗千層茄子、聖馬扎諾番茄肉醬、煙燻普羅伏羅芝士及羅勒 (祖父恩佐風格)",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Parmigiana%20Di%20Melanzane%20ala%20Nonno%20Enzo.jpg",
    dietary: ["Vegetarian"]
  },
  {
    id: "ss-11", name: "PATATINE FRITTE AL TARTUFO", nameZh: "松露薯條",
    description: "Thunder crunch fries infused w/ white truffle oil, parmigiano, served w/ chili and mayo",
    descriptionZh: "白松露油香脆薯條、帕馬森芝士，配辣椒醬及蛋黃醬",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Patatine%20Fritte%20Al%20Tartufo.jpg",
    dietary: ["Vegetarian"]
  },
  {
    id: "ss-12", name: "BARBABIETOLLA ROSSA", nameZh: "香橙紅甜菜沙律",
    description: "Roasted beetroot, feta cheese, lemon dressing, rucola, cherry tomatoes, raisin, balsamic, sesame seeds, pecan",
    descriptionZh: "烤紅甜菜、菲達芝士、檸檬汁、芝麻菜、車厘茄、葡萄乾、意大利香醋、芝麻及核桃",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ss-13", name: "SALUMI", nameZh: "意式火腿拼盤",
    description: "24 month prosciutto di parma, mortadella bologna, salame napoli, stracciatella, rucola, sun dried tomatoes, taggiasca olives, toasted baguette bread",
    descriptionZh: "24個月巴馬火腿、波隆那大紅腸、拿坡里莎樂美腸、絲翠奇亞芝士、芝麻菜、油漬番茄、塔吉斯卡橄欖及烤法式麵包",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Salumi.jpg"
  },
  {
    id: "ss-14", name: "TRIS DI MONTANARE", nameZh: "三款炸薄餅麵糰 (3件)",
    description: "3 pieces of fried neapolitan pizza dough: 1. Courgette cream & chips 2. Ricotta, mortadella & pistachio 3. Burrata heart, anchovies, lemon zest",
    descriptionZh: "三款拿坡里炸薄餅麵糰：1. 翠玉瓜奶油及脆片 2. 瑞可塔芝士、大紅腸及開心果 3. 布拉塔核心、鯷魚及檸檬碎",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Tris%20Di%20Montanare.jpg",
    dietary: ["Contains Nuts"]
  },
  {
    id: "ss-15", name: "WAGYU POLPETTE", nameZh: "和牛肉丸",
    description: "Slow cooked wagyu meatballs, San Marzano sauce, basil, parmigiano",
    descriptionZh: "慢煮和牛肉丸、聖馬扎諾番茄醬、羅勒及帕馬森芝士",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Wagyu%20Polpette%20(Close%20up)%202.jpg"
  },

  // CRUST DIPPER
  {
    id: "cd-1", name: "TRE TUFFI", nameZh: "薄餅邊三色沾醬",
    description: "Trio dips featuring: Basil pesto, truffle burrata & arrabiata sauces",
    descriptionZh: "三款薄餅沾醬：羅勒青醬、松露布拉塔及辣意式茄汁醬",
    mainCategory: "Ala-carte", category: "Crust Dipper", categoryZh: "薄餅沾醬",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Contains Nuts"]
  },

  // THE WORLD CHAMPION
  {
    id: "pwc-1", name: "PROVOLA E PEPE", nameZh: "煙燻芝士黑椒薄餅",
    description: "Smoked provola from the mountains, hand-crushed San Marzano tomatoes, pepper mix, seasoned roasted cherry tomatoes, evoo & basil. ★ ICONIC PIZZA WINNER THE 19TH WORLD CHAMPIONSHIP",
    descriptionZh: "煙燻山區普羅伏羅芝士、手壓聖馬扎諾番茄、混合胡椒、秘製烤車厘茄及羅勒。★ 第19屆世界冠軍賽標誌性獲獎產品",
    mainCategory: "Ala-carte", category: "The World Champion", categoryZh: "世界冠軍薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Provola%20E%20Pepe(1).jpg",
    popular: true, dietary: ["Vegetarian"]
  },

  // THE BEST SELLER
  {
    id: "pbs-1", name: "CENTRO CALABRIA", nameZh: "卡拉布里亞之星",
    description: "(For lovers of Calabrian Nduja) San Marzano sauce, smoked provola, Calabrian Nduja, Neapolitan saussage, evoo & basil",
    descriptionZh: "聖馬扎諾番茄醬、煙燻普羅伏羅芝士、卡拉布里亞辣肉醬(Nduja)、拿坡里香腸及羅勒",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Centro%20Calabria.jpg",
    dietary: ["Spicy"]
  },
  {
    id: "pbs-2", name: "DIAVOLA ALLA NONNO ENZO", nameZh: "祖父恩佐惡魔薄餅",
    description: "San Marzano sauce, fior di latte, spicy spianata according to nonno Enzo tradition, evoo & basil",
    descriptionZh: "聖馬扎諾番茄醬、莫扎瑞拉芝士、依照祖父恩佐傳統製作的香辣薩拉米及羅勒",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Diavola%20Alla%20nonno%20enzo.jpg",
    dietary: ["Spicy"]
  },
  {
    id: "pbs-3", name: "MARGHERITA", nameZh: "瑪格麗特薄餅",
    description: "San Marzano sauce, fior di latte, evoo & basil. Available in version Cartwheel +$24",
    descriptionZh: "聖馬扎諾番茄醬、莫扎瑞拉芝士、特級初榨橄欖油及羅勒。可選大輪盤尺寸 (Cartwheel) +$24",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Margarita%20(Cart%20wheel).jpg",
    popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "pbs-4", name: "MARGHERITA CON BUFALA", nameZh: "水牛芝士瑪格麗特薄餅",
    description: "Hand-crushed San Marzano tomatoes, bufala mozzarella DOP, evoo & basil",
    descriptionZh: "手壓聖馬扎諾番茄、拿坡里 D.O.P. 水牛布拉塔芝士及羅勒",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Margarita%20con%20Bufala.jpg",
    dietary: ["Vegetarian"]
  },
  {
    id: "pbs-5", name: "TETTI ILLUMINATI", nameZh: "燈光屋頂薄餅",
    description: "Base w/ fior di latte, topped w/ IGP mortadella, pistachio cream, pecorino romano flakes, evoo & basil",
    descriptionZh: "莫扎瑞拉芝士底，配上 IGP 認證大紅腸、開心果奶油、羅馬羊奶芝士片及羅勒",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Tetti%20Illuminati.jpg",
    dietary: ["Contains Nuts"]
  },

  // THE TRADITIONAL
  {
    id: "ptr-1", name: "ABBRACCIO E MAMA", nameZh: "媽媽的懷抱薄餅",
    description: "Stuffed crust w/ ricotta, fior di latte, classic meatballs by nonno Enzo, grana padano fondue, evoo & basil",
    descriptionZh: "芝士邊釀入瑞可塔芝士，配莫扎瑞拉芝士、祖父恩佐傳統肉丸、帕達諾乾酪醬及羅勒",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Abbraccio%20e%20mama.jpg"
  },
  {
    id: "ptr-2", name: "BELLARIA", nameZh: "貝拉里亞薄餅",
    description: "Red datterino tomatoes, bufala mozzarella DOP, topped w/ burrata heart, 24 month prosciutto di parma, pesto, evoo & basil",
    descriptionZh: "紅櫻桃番茄、D.O.P. 水牛莫扎瑞拉芝士，配上布拉塔核心、24個月巴馬火腿及青醬",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Bellaria.jpg",
    dietary: ["Contains Nuts"]
  },
  {
    id: "ptr-3", name: "CALZONE AL FORNO", nameZh: "焗卡爾佐涅",
    description: "Filling w/ ricotta cheese, salame napoli, cooked ham, fior di latte, topped w/ hand-crushed San Marzano tomatoes, evoo & basil",
    descriptionZh: "內餡釀入瑞可塔芝士、拿坡里莎樂美腸、熟火腿、莫扎瑞拉芝士，面層配手壓聖馬扎諾番茄",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Calzone%20al%20Forno.jpg"
  },
  {
    id: "ptr-4", name: "COME UNA CAPRICCIOSA", nameZh: "卡布里喬沙薄餅",
    description: "San Marzano sauce, fior di latte, taggiasca olives, button mushrooms, topped w/ artichoke heart, cooked ham, evoo & basil",
    descriptionZh: "聖馬扎諾番茄醬、莫扎瑞拉芝士、塔吉斯卡橄欖、蘑菇，配上朝鮮薊核心及熟火腿",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Come%20una%20Capricciosa.jpg"
  },
  {
    id: "ptr-5", name: "DOMENICHE LONTANO", nameZh: "遙遠的星期日薄餅",
    description: "Base w/ bufala mozzarella DOP, baked potatoes, Neapolitan sausage, evoo & basil",
    descriptionZh: "D.O.P. 水牛莫扎瑞拉芝士底、焗薯仔、拿坡里香腸、特級初榨橄欖油及羅勒",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Domeniche%20Lontano.jpg",
    popular: true
  },
  {
    id: "ptr-6", name: "DON EGIDIO", nameZh: "唐•艾吉迪奧薄餅",
    description: "Base w/ home-made courgette cream, topped w/ zucchini chips, classic meatballs by nonno Enzo, burrata heart, evoo & basil",
    descriptionZh: "自家製翠玉瓜奶油底，配上翠玉瓜脆片、祖父恩佐傳統肉丸及布拉塔核心",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Don%20Egidio.jpg"
  },
  {
    id: "ptr-7", name: "DON VINCENZO", nameZh: "唐•文森佐薄餅",
    description: "Stuffed crust w/ ricotta cheese, yellow cherry tomatoes, bufala mozzarella DOP, pecorino flakes, pepper, crumbled almonds, evoo & basil",
    descriptionZh: "芝士邊釀入瑞可塔芝士，配黃櫻桃番茄、D.O.P. 水牛莫扎瑞拉芝士、羊奶芝士片及杏仁碎",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Don%20Vincenzo.jpg",
    popular: true, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ptr-8", name: "MARINARA CONTEMPORANEA", nameZh: "當代水手薄餅",
    description: "(A great classic revisited in contemporary key) Slow cooked cherry tomatoes, taggiasca olives, anchovies, garlic, oregano, evoo & basil",
    descriptionZh: "以當代手法重演經典：慢煮車厘茄、塔吉斯卡橄欖、鯷魚、大蒜、牛至及羅勒",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Marinara%20Contemporanea.jpg"
  },
  {
    id: "ptr-9", name: "MARITA", nameZh: "半半薄餅",
    description: "\"Best of both\" half margherita & half marinara pizza, enjoy 2 flavours in one",
    descriptionZh: "「一舉兩得」：一半瑪格麗特及一半水手薄餅，一次享受兩種經典口味",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Marita.jpg",
    dietary: ["Vegetarian"]
  },
  {
    id: "ptr-10", name: "MELANZANELLA", nameZh: "茄子薄餅",
    description: "(For lovers of aubergines called a \"fungitiello\") Fior di latte, roasted cherry tomatoes, eggplant, pepper, slow cooked cherry tomato cream, burrata heart, evoo & basil",
    descriptionZh: "茄子愛好者首選：莫扎瑞拉芝士、烤車厘茄、茄子、慢煮車厘茄奶油及布拉塔核心",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Melanzanella.jpg",
    dietary: ["Vegetarian"]
  },
  {
    id: "ptr-11", name: "NAPOLI", nameZh: "拿坡里薄餅",
    description: "Hand-crushed sam marzano tomatoes, fior di latte from the mountains, anchovies, taggiasca olives, evoo oil & basil",
    descriptionZh: "手壓聖馬扎諾番茄、山區莫扎瑞拉芝士、鯷魚、塔吉斯卡橄欖、特級初榨橄欖油及羅勒",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Napoli.jpg"
  },
  {
    id: "ptr-12", name: "NAPOLITUDINE", nameZh: "拿坡里肉丸薄餅",
    description: "Stuffed crust w/ ricotta, San Marzano sauce, smoked provola, topped w/ classic meatballs by nonno Enzo, pepper, evoo & basil",
    descriptionZh: "芝士邊釀入瑞可塔芝士，配聖馬扎諾番茄醬、煙燻普羅伏羅芝士及祖父恩佐傳統肉丸",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Napolitudine.jpg"
  },
  {
    id: "ptr-13", name: "RITORNO A NAPOLI", nameZh: "回到拿坡里薄餅",
    description: "(It takes inspiration from the Neapolitan Gateau) Fior di latte, ground pepper, Neapolitan potato croquette, cooked ham, evoo & basil",
    descriptionZh: "靈感來自拿坡里薯餅 (Gateau)：莫扎瑞拉芝士、黑胡椒、拿坡里薯餅、熟火腿及羅勒",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Ritorno%20a%20Napoli.jpg"
  },
  {
    id: "ptr-14", name: "SOGNO VEGANO", nameZh: "純素之夢薄餅",
    description: "Home-made courgette cream, aubergines, roasted red & yellow datterino tomatoes, vegan cheese, courgette chips, potato chips, evoo & basil",
    descriptionZh: "自家製翠玉瓜奶油、茄子、烤紅黃櫻桃番茄、純素芝士、翠玉瓜脆片及薯片",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Sogno%20Vegano.jpg",
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "ptr-15", name: "TAGLIO ESTIVO", nameZh: "夏日煙燻薄餅",
    description: "Smoked provola, pepper, roasted red & yellow datterino tomatoes, capsicum puree, pecorino, evoo & basil",
    descriptionZh: "煙燻普羅伏羅芝士、胡椒、烤紅黃櫻桃番茄、甜椒泥、羊奶芝士片及羅勒",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Taglio%20Estivo.jpg",
    dietary: ["Vegetarian"]
  },

  // HONG KONG SPECIAL PIZZA
  {
    id: "hk-1", name: "PESTO E BURRATA", nameZh: "香蒜醬布拉塔薄餅",
    description: "Fior di latte, basil pesto, cherry tomatoes, parmigiano, burrata heart, pine nuts",
    descriptionZh: "莫扎瑞拉芝士、羅勒青醬、車厘茄配帕馬森芝士、布拉塔核心及松子仁",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Pesto%20e%20Burrata.jpg",
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "hk-2", name: "QUATTRO FORMAGGI", nameZh: "四款芝士薄餅",
    description: "Base w/ fior di latte, gorgonzola, provola, topped w/ pecorino, served with roasted walnuts and honey",
    descriptionZh: "四款芝士：莫扎瑞拉、哥根蘇拿、普羅伏羅及羊奶芝士底，配烤核桃及蜂蜜",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Quattro%20Formaggi.jpg",
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "hk-3", name: "TARTUFO", nameZh: "松露薄餅",
    description: "Truffle cream, fior di latte, mushrooms, truffle burrata, rucola, parmigiano",
    descriptionZh: "松露奶油、莫扎瑞拉芝士、蘑菇、松露布拉塔芝士、芝麻菜及帕馬森芝士",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Tartufo.jpg",
    dietary: ["Vegetarian"]
  },
  {
    id: "hk-4", name: "ANATRA AFFUMICATA", nameZh: "煙燻鴨胸薄餅",
    description: "Base with San Marzano sauce, fior di latte, smoked duck breast, cayenna honey glaze, rucola, parmigiano",
    descriptionZh: "聖馬扎諾番茄醬底、莫扎瑞拉芝士、煙燻鴨胸、辣椒蜂蜜、芝麻菜及帕馬森芝士",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: NO_IMAGE
  },

  // PASTA
  {
    id: "pas-1", name: "AGLIO E OLIO CON GAMBERI", nameZh: "香辣蒜油大蝦意粉",
    description: "Linguine, black tiger prawns, bir eye chili, sun-dried tomatoes, white wine, evoo",
    descriptionZh: "扁意粉、黑虎蝦、指天椒、油漬番茄、白葡萄酒及特級初榨橄欖油",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Aglio%20e%20Olio.jpg",
    dietary: ["Spicy"]
  },
  {
    id: "pas-2", name: "ARRABIATA", nameZh: "辣味茄汁筆管麵",
    description: "Rigatoni, chef's signature spicy San Marzano sauce, basil",
    descriptionZh: "長通粉配主廚招牌香辣聖馬扎諾番茄醬及羅勒",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Arrabiata.jpg",
    dietary: ["Vegetarian", "Spicy"]
  },
  {
    id: "pas-3", name: "CARBONARA", nameZh: "傳統卡邦尼意粉",
    description: "Fettuccine, guanciale pork cheeks, egg yolk, parmigiano, pepper",
    descriptionZh: "寬條麵、意式風乾豬面頰肉、蛋黃、帕馬森芝士及黑胡椒",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Carbonara.jpg"
  },
  {
    id: "pas-4", name: "GAMBERO ALLA MARINARA", nameZh: "水手黑虎蝦意粉",
    description: "Linguine, black tiger prawns, cherry tomatoes, tomato coulis, lobster bisque sauce, brandy",
    descriptionZh: "扁意粉、黑虎蝦、車厘茄、番茄精華、龍蝦濃湯醬及白蘭地",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Gambero%20Alla%20Marinara.jpg",
    dietary: ["Spicy"]
  },
  {
    id: "pas-5", name: "GNOCCHI", nameZh: "香辣薯糰",
    description: "Potato gnocchi, signature spicy sauce, cherry tomatoes, cream, parmigiano, basil",
    descriptionZh: "馬鈴薯薯糰配招牌香辣醬、車厘茄、奶油、帕馬森芝士及羅勒",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Gnocchi.jpg",
    dietary: ["Vegetarian", "Spicy"]
  },
  {
    id: "pas-6", name: "GUANCIALE DI MANZO", nameZh: "和牛臉頰肉意粉",
    description: "Pappardelle, 12 hours slow cooked wagyu beef cheek ragu, red wine, parmigiano",
    descriptionZh: "闊條麵配12小時慢煮和牛臉頰肉醬、紅酒及帕馬森芝士",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Guanciale%20di%20Manzo.jpg",
    popular: true
  },
  {
    id: "pas-7", name: "RAVIOLI AI PORCINI", nameZh: "牛肝菌松露餃子",
    description: "Home-made ravioli stuffed w/ porcini mushrooms, truffle cream sauce, oil caviar, truffle, carpaccio",
    descriptionZh: "自家製牛肝菌手工餃配松露奶油醬、油魚子及松露片",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Ravioli%20Al%20Porcini.jpg",
    dietary: ["Vegetarian"]
  },

  // MAINS
  {
    id: "mn-1", name: "FILETTO DI MANZO", nameZh: "烤牛柳",
    description: "Grilled & sliced beef tenderloin, roasted baby potatoes, cherry tomatoes, sauteed mushrooms, mustard, rucola, red wine sauce",
    descriptionZh: "香烤切片牛柳配烤小馬鈴薯、車厘茄、炒蘑菇、芥末、芝麻菜及紅酒汁",
    mainCategory: "Ala-carte", category: "Mains", categoryZh: "精選主菜",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Filetto%20di%20Manzo.jpg"
  },
  {
    id: "mn-2", name: "MAIALE IBERICO", nameZh: "慢煮伊比利亞豬頰",
    description: "Slow-cooked Iberico pork jowl, house salad, balsamic onions, red wine sauce, pistachio",
    descriptionZh: "慢煮伊比利亞豬頸肉配田園沙律、香醋洋蔥、紅酒汁及開心果碎",
    mainCategory: "Ala-carte", category: "Mains", categoryZh: "精選主菜",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Maiale%20Iberico.jpg",
    dietary: ["Contains Nuts"]
  },

  // DOLCI
  {
    id: "sw-1", name: "TIRAMISU", nameZh: "杏仁酒提拉米蘇",
    description: "Mascarpone cream, pistachio, savoiardi biscuit, coffee & amaretto",
    descriptionZh: "馬斯卡彭奶酪、開心果、手指餅乾、咖啡及意大利苦杏酒",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Tiramisu.jpg",
    popular: true, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "sw-2", name: "BISCOFF CHEESECAKE", nameZh: "焦糖餅乾芝士蛋糕",
    description: "Lotus biscoff, cream mascarpone, cookie crumble base",
    descriptionZh: "Lotus 焦糖餅乾、馬斯卡彭奶酪及碎脆餅乾底",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },
  {
    id: "sw-3", name: "CREME BRULEE", nameZh: "焦糖燉蛋",
    description: "Custard base, caramelized rapadura, berries",
    descriptionZh: "吉士乳凍底配焦糖脆皮及鮮莓果",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Creme%20Brulee.jpg",
    dietary: ["Vegetarian"]
  },
  {
    id: "sw-4", name: "GRAFFE", nameZh: "拿坡里炸甜圈",
    description: "Lightly fried airy dough from Naples, topped w/ cinnamon sugar",
    descriptionZh: "輕炸拿坡里雲朵甜圈，面層灑上肉桂糖粉",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Graffe.jpg",
    dietary: ["Vegetarian"]
  },

  // ====================== BEVERAGES ======================
  // COCKTAILS
  {
    id: "b-1", name: "Aperol Spritz", nameZh: "艾普羅氣泡酒",
    description: "The quintessential Italian aperitif—bright, bubbly, and perfectly bittersweet.",
    descriptionZh: "經典意大利餐前酒——明亮、充滿氣泡且完美的苦甜平衡。",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["REFRESHING", "BITTERSWEET", "SPARKLING"],
    ingredients: ["APEROL", "PROSECCO", "SODA", "ORANGE SLICE"]
  },
  {
    id: "b-2", name: "Negroni Sbagliato", nameZh: "氣泡尼格羅尼",
    description: "A 'mistaken' classic that swaps gin for prosecco, creating a lighter yet complex experience.",
    descriptionZh: "「美麗的錯誤」經典款：將琴酒換成氣泡酒，營造更輕盈且富有層次的體驗。",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["LIGHT", "COMPLEX", "HERBAL"],
    ingredients: ["CAMPARI", "SWEET VERMOUTH", "PROSECCO", "ORANGE PEEL"]
  },
  {
    id: "b-3", name: "Long Island Tea", nameZh: "長島冰茶",
    description: "A potent and legendary blend that packs a punch with its multi-spirit backbone.",
    descriptionZh: "傳奇且強勁的特調：以多款烈酒為基底，帶來震撼的口感。",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["STRONG", "CITRUSY", "COOL"],
    ingredients: ["VODKA", "GIN", "RUM", "TEQUILA", "TRIPLE SEC", "COLA"]
  },
  {
    id: "b-4", name: "Mojito", nameZh: "莫希托",
    description: "A crisp and vibrant Cuban classic, perfectly balanced with fresh mint and zesty lime.",
    descriptionZh: "清爽活力的古巴經典：新鮮薄荷與酸甜青檸的完美平衡。",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["MINTY", "ZESTY", "CHILL"],
    ingredients: ["WHITE RUM", "FRESH MINT", "LIME JUICE", "CANE SUGAR", "SODA"]
  },
  {
    id: "b-5", name: "Old Fashioned", nameZh: "老式雞尾酒",
    description: "Timeless elegance in a glass—deep, bold, and sophisticated with a hint of citrus.",
    descriptionZh: "杯中的永恆優雅——深邃、大膽且精緻，帶著一絲柑橘香氣。",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["BOLD", "SMOOTH", "AROMATIC"],
    ingredients: ["BOURBON WHISKEY", "ANGOSTURA BITTERS", "SUGAR", "ORANGE TWIST"]
  },
  {
    id: "b-6", name: "Chandon Garden Spritz", nameZh: "詩東花園氣泡酒",
    description: "A sophisticated sparkling blend infused with bitters and orange peels.",
    descriptionZh: "精緻的氣泡調酒，融入了苦酒和橙皮的精華。",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["ELEGANT", "FRUITY", "CLEAN"],
    ingredients: ["CHANDON SPARKLING", "VALENCIA ORANGE EXTRACT", "BITTERS", "HERBS"]
  },

  // WHISKIES
  { id: "b-7", name: "Maker's Mark", nameZh: "美格波本威士忌", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["VANILLA", "CARAMEL", "OAK"], ingredients: ["KENTUCKY STRAIGHT BOURBON"] },
  { id: "b-8", name: "Bulleit Rye", nameZh: "布萊特裸麥威士忌", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["SPICY", "PEPPERY", "CRISP"], ingredients: ["95% RYE MASH"] },
  { id: "b-9", name: "Whyte & Mackay", nameZh: "懷特馬凱威士忌", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["HONEY", "FRUITY", "MALTY"], ingredients: ["BLENDED SCOTCH WHISKY"] },
  { id: "b-10", name: "Monkey Shoulder", nameZh: "三隻猴子威士忌", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["SMOOTHE", "MALTY", "MELLOW"], ingredients: ["MALT SCOTCH WHISKY"] },
  { id: "b-11", name: "Johnnie Walker Gold", nameZh: "約翰走路金牌", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["CREAMY", "LUXURIOUS", "SWEET"], ingredients: ["BLENDED SCOTCH WHISKY"] },
  { id: "b-12", name: "Glenfiddich 12", nameZh: "格蘭菲迪 12年", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["PEAR", "OAK", "FRESH"], ingredients: ["SINGLE MALT SCOTCH"] },
  { id: "b-13", name: "Balvenie 12 Double Wood", nameZh: "百富 12年雙桶", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["NUTTY", "SPICY", "SWEET"], ingredients: ["SINGLE MALT SCOTCH", "SHERRY CASK FINISH"] },
  { id: "b-14", name: "Lagavulin 16", nameZh: "樂加維林 16年", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["PEATY", "SMOKEY", "INTENSE"], ingredients: ["ISLAY SINGLE MALT"] },
  { id: "b-15", name: "Macallan Sherry Oak 12", nameZh: "麥卡倫雪莉桶 12年", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["FRUITY", "SPICY", "RICH"], ingredients: ["HIGHLAND SINGLE MALT"] },

  // GIN, VODKA, RUM, AGAVE, BITTERS
  { id: "b-16", name: "Beefeater", nameZh: "必富達琴酒", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Gin", image: NO_IMAGE, alcohol: true, profiles: ["JUNIPER", "CITRUS", "DRY"], ingredients: ["LONDON DRY GIN"] },
  { id: "b-17", name: "Roku", nameZh: "六琴酒", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Gin", image: NO_IMAGE, alcohol: true, profiles: ["FLORAL", "PEEPERY", "CITRUS"], ingredients: ["JAPANESE CRAFT GIN"] },
  { id: "b-18", name: "Hendrick's", nameZh: "亨利爵士琴酒", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Gin", image: NO_IMAGE, alcohol: true, profiles: ["CUCUMBER", "ROSE", "UNIQUE"], ingredients: ["SMALL BATCH GIN"] },
  { id: "b-19", name: "Zubrowka", nameZh: "野牛草伏特加", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Vodka", image: NO_IMAGE, alcohol: true, profiles: ["GRASSY", "SWEET", "SPICY"], ingredients: ["BISON GRASS VODKA"] },
  { id: "b-20", name: "Belvedere", nameZh: "雪樹伏特加", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Vodka", image: NO_IMAGE, alcohol: true, profiles: ["CREAMY", "VANILLA", "SOFT"], ingredients: ["POLISH RYE VODKA"] },
  { id: "b-21", name: "Barcadi", nameZh: "百加得蘭姆酒", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Rum", image: NO_IMAGE, alcohol: true, profiles: ["LIGHT", "DRY", "CLEAN"], ingredients: ["WHITE RUM"] },
  { id: "b-22", name: "Havana", nameZh: "哈瓦那俱樂部蘭姆酒", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Rum", image: NO_IMAGE, alcohol: true, profiles: ["OAKY", "FRUITY", "SMOOTH"], ingredients: ["AÑEJO 7 AÑOS RUM"] },
  { id: "b-23", name: "Olmeca Altos Blanco", nameZh: "奧美加 Altos 白龍舌蘭", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Agave", image: NO_IMAGE, alcohol: true, profiles: ["CITRUS", "HERBAL", "SWEET"], ingredients: ["100% BLUE AGAVE TEQUILA"] },
  { id: "b-24", name: "Volcan Blanco", nameZh: "輝煌之山白龍舌蘭", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Agave", image: NO_IMAGE, alcohol: true, profiles: ["CRISP", "HERBAL", "SALTY"], ingredients: ["BLANCO TEQUILA"] },
  { id: "b-25", name: "Patron Anejo", nameZh: "培恩 Anejo 龍舌蘭", description: "Glass & Bottle Available", descriptionZh: "提供杯裝及整瓶供應", mainCategory: "Beverages", category: "Agave", image: NO_IMAGE, alcohol: true, profiles: ["WOOD", "HONEY", "VANILLA"], ingredients: ["AGED TEQUILA"] },
  
  // Bitters & Spirits
  { id: "b-26", name: "Limoncello", nameZh: "意大利檸檬甜酒", description: "The authentic taste of the Amalfi Coast—sweet, tangy, and cold.", descriptionZh: "來自阿瑪菲海岸的地道風味——清甜、微酸且冰涼爽口。", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["LEMONY", "SWEET", "CITRUS"], ingredients: ["AMALFI LEMONS", "GRAIN SPIRIT"] },
  { id: "b-27", name: "Aperol", nameZh: "艾普羅苦艾酒", description: "Perfectly balanced herbal notes with a bright orange kick.", descriptionZh: "草本香氣與明亮柑橘風味的完美平衡。", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["BITTERSWEET", "ORANGE", "HERBAL"], ingredients: ["INFUSION OF FRUITS & HERBS"] },
  { id: "b-28", name: "Campari", nameZh: "金巴利苦酒", description: "A dark red, bittersweet, and complex Italian staple.", descriptionZh: "深紅色調，苦中帶甜，是意大利餐桌上不可或缺的經典。", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["BITTER", "INTENSE", "HERBAL"], ingredients: ["INFUSED FRUITS & HERBS"] },
  { id: "b-29", name: "Sambuca", nameZh: "意式大茴香甜酒", description: "A powerful anise-flavored spirit that captures the soul of Italy.", descriptionZh: "強勁的大茴香風味烈酒，捕捉了意大利的靈魂。", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["ANISE", "SWEET", "POWERFUL"], ingredients: ["STAR ANISE", "GRAIN SPIRIT"] },
  { id: "b-30", name: "Fernet Branca", nameZh: "佛奈布蘭卡苦味力嬌酒", description: "A legendary and mysterious medicinal amaro from Milan.", descriptionZh: "來自米蘭，帶有傳奇與神秘色彩的草本苦酒。", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["BITTER", "MENTHOL", "COMPLEX"], ingredients: ["27 HERBS & SPICES"] },

  // BEER
  { id: "b-31", name: "Asahi Super Dry", nameZh: "朝日 Super Dry 啤酒", description: "1/2 Pint | Pint | Bottle Available", descriptionZh: "提供 1/2 品脫 | 品脫 | 樽裝", mainCategory: "Beverages", category: "Beer", image: NO_IMAGE, alcohol: true, profiles: ["CRISP", "DRY", "CLEAN"], ingredients: ["JAPANESE LAGER"] },
  { id: "b-32", name: "Peroni Nastro Azzuro", nameZh: "沛羅尼啤酒", description: "1/2 Pint | Pint | Bottle Available", descriptionZh: "提供 1/2 品脫 | 品脫 | 樽裝", mainCategory: "Beverages", category: "Beer", image: NO_IMAGE, alcohol: true, profiles: ["ITALIAN", "MALTY", "SMOOTH"], ingredients: ["MEDITERRANEAN LAGER"] },

  // NON-ALCOHOLIC
  { id: "b-33", name: "Avec Bloody Maria", nameZh: "無酒精血腥瑪麗", description: "A complex and savory mocktail that doesn't compromise on flavor.", descriptionZh: "層次豐富且充滿鹹鮮風味的無酒精調酒，風味毫不妥協。", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["SAVORY", "SPICY", "BOLD"], ingredients: ["TOMATO", "SPICES", "LEMON"] },
  { id: "b-34", name: "Virgin Madeira Mojito", nameZh: "無酒精莫希托", description: "Fresh and invigorating without the spirit.", descriptionZh: "清新提神，不含酒精。 ", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["MINTY", "FRESH", "SWEET"], ingredients: ["MINT", "LIME", "SODA"] },
  { id: "b-35", name: "Juices & Sodas", nameZh: "果汁及汽水", description: "Refreshing selections from around the world.", descriptionZh: "來自世界各地的清爽選擇。", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["VIBRANT", "SWEET", "COLD"], ingredients: ["FRUIT JUICES", "ITALIAN SODAS"] },
  { id: "b-36", name: "Purezza Water", nameZh: "純淨礦泉水", description: "Eco-friendly premium water, micro-filtered for ultimate purity.", descriptionZh: "環保級優質飲用水，經微濾處理，極致純淨。", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["PURE", "CRISP", "STILL/SPARK"], ingredients: ["MICRO-FILTERED WATER"] },

  // COFFEE & TEA
  { id: "b-37", name: "Classic Italian Coffee", nameZh: "正宗意式咖啡", description: "Authentic Neapolitan roasted blends.", descriptionZh: "地道拿坡里烘焙混紡咖啡。", mainCategory: "Beverages", category: "Coffee", image: NO_IMAGE, alcohol: false, profiles: ["INTENSE", "ROASTY", "RICH"], ingredients: ["NEAPOLITAN BLEND"] },
  { id: "b-38", name: "Standard Coffees", nameZh: "咖啡系列", description: "Long Black, Americano, Flat White, Latte, Cappuccino, Mocha.", descriptionZh: "包括：黑咖啡、美式、鮮奶咖啡、卡布奇諾、摩卡。", mainCategory: "Beverages", category: "Coffee", image: NO_IMAGE, alcohol: false, profiles: ["BALANCED", "CREAMY", "WARM"], ingredients: ["ESPRESSO", "MILK"] },
  { id: "b-39", name: "Tea Selection", nameZh: "精選茶款", description: "Classic and herbal selections for every mood.", descriptionZh: "為不同心情準備的經典及草本選擇。", mainCategory: "Beverages", category: "Tea", image: NO_IMAGE, alcohol: false, profiles: ["CALMING", "AROMATIC", "LIGHT"], ingredients: ["PREMIUM TEA LEAVES"] },

  // WINE
  { id: "b-40", name: "San Martino DOC Treviso Brut 99", nameZh: "聖馬提諾 DOC 特雷維索氣泡酒", description: "Light, dry, and elegant prosecco from Treviso.", descriptionZh: "來自特雷維索，輕盈、乾爽且優雅的氣泡酒。", mainCategory: "Beverages", category: "Wine — Prosecco", image: NO_IMAGE, alcohol: true, profiles: ["BUBBLY", "DRY", "PEAR"], ingredients: ["GLERA GRAPES"] },
  { id: "b-41", name: "Moet Chandon Imperial Brut", nameZh: "酩悅香檳", description: "The iconic champagne with a structured, vibrant palate.", descriptionZh: "經典標誌性香檳，口感結構嚴謹且充滿活力。", mainCategory: "Beverages", category: "Wine — Champagne", image: NO_IMAGE, alcohol: true, profiles: ["CRISP", "FRUITY", "ELEGANT"], ingredients: ["PINOT NOIR", "MEUNIER", "CHARDONNAY"] },
  { id: "b-42", name: "Chateau D'Esclans Whispering Angel", nameZh: "蝶之蘭酒莊天使之音玫瑰紅酒", description: "The world's most popular rosato from Provence.", descriptionZh: "全球最受歡迎的普羅旺斯玫瑰紅酒。", mainCategory: "Beverages", category: "Wine — Rosato", image: NO_IMAGE, alcohol: true, profiles: ["FLORAL", "STONY", "RED FRUIT"], ingredients: ["GRENACHE", "CINSAULT", "VERMENTINO"] },
  { id: "b-43", name: "House White Selections", nameZh: "精選白酒", description: "Pinot Grigio / Sauvignon Blanc / Falanghina", descriptionZh: "可選：灰皮諾 / 長相思 / 法蘭吉娜", mainCategory: "Beverages", category: "Wine — House White", image: NO_IMAGE, alcohol: true, profiles: ["CITRUS", "LIGHT", "CLEAN"], ingredients: ["ITALIAN WHITE GRAPES"] },
  { id: "b-44", name: "House Red Selections", nameZh: "精選紅酒", description: "Cabernet Sauvignon / Pinot Nero / Le Coste Chianti", descriptionZh: "可選：赤霞珠 / 黑皮諾 / 奇安提", mainCategory: "Beverages", category: "Wine — House Red", image: NO_IMAGE, alcohol: true, profiles: ["PLUM", "SPICY", "TANNIC"], ingredients: ["ITALIAN RED GRAPES"] },
  { id: "b-45", name: "White By Bottle", nameZh: "白酒 (整瓶)", description: "Sauvignon Blanc, Gavi, Petit Chablis, Pouilly-Fume.", descriptionZh: "包括：長相思、加維、夏布利、普伊-富美。", mainCategory: "Beverages", category: "Wine — White", image: NO_IMAGE, alcohol: true, profiles: ["VARIED", "PREMIUM", "CRISP"], ingredients: ["CURATED BOTTLES"] },
  { id: "b-46", name: "Red By Bottle", nameZh: "紅酒 (整瓶)", description: "Chianti, Barossa Shiraz, Barolo, Brunello, Amarone.", descriptionZh: "包括：奇安提、巴羅莎設拉子、巴羅洛、布魯奈羅、阿瑪羅尼。", mainCategory: "Beverages", category: "Wine — Red", image: NO_IMAGE, alcohol: true, profiles: ["FULL-BODIED", "COMPLEX", "AGED"], ingredients: ["VINTAGE REDS"] }
];
