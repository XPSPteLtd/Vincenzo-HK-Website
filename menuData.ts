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
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Spicy"]
  },
  {
    id: "ss-2", name: "BURRATA CLASSICA 125G", nameZh: "傳統布拉塔 125G",
    description: "Burrata cheese 125g, rucola, cherry tomatoes, basil pesto, oil caviar, balsamic",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/BURRATA%20CLASSICA.webp",
    popular: true, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ss-3", name: "BURRATA CLASSICA 300G", nameZh: "傳統布拉塔 300G",
    description: "Burrata cheese 300g, rucola, cherry tomatoes, basil pesto, oil caviar, balsamic",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/BURRATA%20CLASSICA.webp",
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ss-4", name: "BURRATA PESCA E ARANCIA 125G", nameZh: "水蜜桃橙香布拉塔 125G",
    description: "Burrata cheese 125g, spicy peach salsa, orange pulp, roasted beetroot, pecan, cayenne honey glaze, oil caviar",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Spicy", "Contains Nuts"]
  },
  {
    id: "ss-5", name: "BURRATA PESCA E ARANCIA 300G", nameZh: "水蜜桃橙香布拉塔 300G",
    description: "Burrata cheese 300g, spicy peach salsa, orange pulp, roasted beetroot, pecan, cayenne honey glaze, oil caviar",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Spicy", "Contains Nuts"]
  },
  {
    id: "ss-6", name: "CAESAR SALAD", nameZh: "凱撒沙律",
    description: "Crunchy romaine lettuce, grilled chicken breast, baked croutons, home-made caesar dressing, cherry tomatoes, parmigiano, evoo",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Caesar%20salad.webp"
  },
  {
    id: "ss-7", name: "CAVOLO MELONE", nameZh: "羽衣甘藍蜜瓜沙律",
    description: "Green kale, hami melon, spicy ginger tofu dressing, cherry tomatoes, cranberries, feta cheese, shaved almonds",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Spicy", "Contains Nuts"]
  },
  {
    id: "ss-8", name: "FOCACCIA", nameZh: "自家製佛卡夏",
    description: "Home-made thin focaccia bread served w/ basil pesto and capsicum cream",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ss-9", name: "HOLY WINGS", nameZh: "脆炸雞翼",
    description: "Deep-fried chicken wings, served w/ chef's signature spicy sauce (7pcs)",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Spicy"]
  },
  {
    id: "ss-10", name: "PARMIGIANA DI MELANZANE", nameZh: "焗芝士千層茄子",
    description: "Oven-baked eggplant parmigiana, San Marzano ragu, smoked provola, basil. Alla Nonno Enzo style.",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },
  {
    id: "ss-11", name: "PATATINE FRITTE AL TARTUFO", nameZh: "松露薯條",
    description: "Thunder crunch fries infused w/ white truffle oil, parmigiano, served w/ chili and mayo",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Patatine%20fritte%20al%20tartufo.webp",
    dietary: ["Vegetarian"]
  },
  {
    id: "ss-12", name: "BARBABIETOLLA ROSSA", nameZh: "香橙紅甜菜沙律",
    description: "Roasted beetroot, feta cheese, lemon dressing, rucola, cherry tomatoes, raisin, balsamic, sesame seeds, pecan",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ss-13", name: "SALUMI", nameZh: "意式火腿拼盤",
    description: "24 month prosciutto di parma, mortadella bologna, salame napoli, stracciatella, rucola, sun dried tomatoes, taggiasca olives, toasted baguette bread",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE
  },
  {
    id: "ss-14", name: "TRIS DI MONTANARE", nameZh: "三款炸薄餅麵糰 (3件)",
    description: "3 pieces of fried neapolitan pizza dough: 1. Courgette cream & chips 2. Ricotta, mortadella & pistachio 3. Burrata heart, anchovies, lemon zest",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: NO_IMAGE,
    dietary: ["Contains Nuts"]
  },
  {
    id: "ss-15", name: "WAGYU POLPETTE", nameZh: "和牛肉丸",
    description: "Slow cooked wagyu meatballs, San Marzano sauce, basil, parmigiano",
    mainCategory: "Ala-carte", category: "Starters & Salads", categoryZh: "精選前菜及沙律",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Wagyu%20polpette.webp"
  },

  // CRUST DIPPER
  {
    id: "cd-1", name: "TRE TUFFI", nameZh: "薄餅邊三色沾醬",
    description: "Trio dips featuring: Basil pesto, truffle burrata & arrabiata sauces",
    mainCategory: "Ala-carte", category: "Crust Dipper", categoryZh: "薄餅沾醬",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Contains Nuts"]
  },

  // THE WORLD CHAMPION
  {
    id: "pwc-1", name: "PROVOLA E PEPE", nameZh: "煙燻芝士黑椒薄餅",
    description: "Smoked provola from the mountains, hand-crushed San Marzano tomatoes, pepper mix, seasoned roasted cherry tomatoes, evoo & basil. ★ ICONIC PIZZA WINNER THE 19TH WORLD CHAMPIONSHIP",
    mainCategory: "Ala-carte", category: "The World Champion", categoryZh: "世界冠軍薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/PROVOLA%20E%20PEPE.webp",
    popular: true, dietary: ["Vegetarian"]
  },

  // THE BEST SELLER
  {
    id: "pbs-1", name: "CENTRO CALABRIA", nameZh: "卡拉布里亞之星",
    description: "(For lovers of Calabrian Nduja) San Marzano sauce, smoked provola, Calabrian Nduja, Neapolitan saussage, evoo & basil",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Centro%20calabria.webp",
    dietary: ["Spicy"]
  },
  {
    id: "pbs-2", name: "DIAVOLA ALLA NONNO ENZO", nameZh: "祖父恩佐惡魔薄餅",
    description: "San Marzano sauce, fior di latte, spicy spianata according to nonno Enzo tradition, evoo & basil",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Diavola.webp",
    dietary: ["Spicy"]
  },
  {
    id: "pbs-3", name: "MARGHERITA", nameZh: "瑪格麗特薄餅",
    description: "San Marzano sauce, fior di latte, evoo & basil. Available in version Cartwheel +$24",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Margarita.webp",
    popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "pbs-4", name: "MARGHERITA CON BUFALA", nameZh: "水牛芝士瑪格麗特薄餅",
    description: "Hand-crushed San Marzano tomatoes, bufala mozzarella DOP, evoo & basil",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Margarita%20con%20buffala.webp",
    dietary: ["Vegetarian"]
  },
  {
    id: "pbs-5", name: "TETTI ILLUMINATI", nameZh: "燈光屋頂薄餅",
    description: "Base w/ fior di latte, topped w/ IGP mortadella, pistachio cream, pecorino romano flakes, evoo & basil",
    mainCategory: "Ala-carte", category: "The Best Seller", categoryZh: "暢銷薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/TETTI%20ILLUMINATI.webp",
    dietary: ["Contains Nuts"]
  },

  // THE TRADITIONAL
  {
    id: "ptr-1", name: "ABBRACCIO E MAMA", nameZh: "媽媽的懷抱薄餅",
    description: "Stuffed crust w/ ricotta, fior di latte, classic meatballs by nonno Enzo, grana padano fondue, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Abbraccio%20e%20mamma%20(closeup).webp"
  },
  {
    id: "ptr-2", name: "BELLARIA", nameZh: "貝拉里亞薄餅",
    description: "Red datterino tomatoes, bufala mozzarella DOP, topped w/ burrata heart, 24 month prosciutto di parma, pesto, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Bellaria.webp",
    dietary: ["Contains Nuts"]
  },
  {
    id: "ptr-3", name: "CALZONE AL FORNO", nameZh: "焗卡爾佐涅",
    description: "Filling w/ ricotta cheese, salame napoli, cooked ham, fior di latte, topped w/ hand-crushed San Marzano tomatoes, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE
  },
  {
    id: "ptr-4", name: "COME UNA CAPRICCIOSA", nameZh: "卡布里喬沙薄餅",
    description: "San Marzano sauce, fior di latte, taggiasca olives, button mushrooms, topped w/ artichoke heart, cooked ham, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/COME%20UNA%20CAPRICCIOSA.webp"
  },
  {
    id: "ptr-5", name: "DOMENICHE LONTANO", nameZh: "遙遠的星期日薄餅",
    description: "Base w/ bufala mozzarella DOP, baked potatoes, Neapolitan sausage, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/DOMENICHE%20LONTANO.webp",
    popular: true
  },
  {
    id: "ptr-6", name: "DON EGIDIO", nameZh: "唐•艾吉迪奧薄餅",
    description: "Base w/ home-made courgette cream, topped w/ zucchini chips, classic meatballs by nonno Enzo, burrata heart, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Don%20egidio.webp"
  },
  {
    id: "ptr-7", name: "DON VINCENZO", nameZh: "唐•文森佐薄餅",
    description: "Stuffed crust w/ ricotta cheese, yellow cherry tomatoes, bufala mozzarella DOP, pecorino flakes, pepper, crumbled almonds, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Don%20Vincenzo.webp",
    popular: true, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "ptr-8", name: "MARINARA CONTEMPORANEA", nameZh: "當代水手薄餅",
    description: "(A great classic revisited in contemporary key) Slow cooked cherry tomatoes, taggiasca olives, anchovies, garlic, oregano, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE
  },
  {
    id: "ptr-9", name: "MARITA", nameZh: "半半薄餅",
    description: "\"Best of both\" half margherita & half marinara pizza, enjoy 2 flavours in one",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },
  {
    id: "ptr-10", name: "MELANZANELLA", nameZh: "茄子薄餅",
    description: "(For lovers of aubergines called a \"fungitiello\") Fior di latte, roasted cherry tomatoes, eggplant, pepper, slow cooked cherry tomato cream, burrata heart, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },
  {
    id: "ptr-11", name: "NAPOLI", nameZh: "拿坡里薄餅",
    description: "Hand-crushed sam marzano tomatoes, fior di latte from the mountains, anchovies, taggiasca olives, evoo oil & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/NAPOLI.webp"
  },
  {
    id: "ptr-12", name: "NAPOLITUDINE", nameZh: "拿坡里肉丸薄餅",
    description: "Stuffed crust w/ ricotta, San Marzano sauce, smoked provola, topped w/ classic meatballs by nonno Enzo, pepper, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE
  },
  {
    id: "ptr-13", name: "RITORNO A NAPOLI", nameZh: "回到拿坡里薄餅",
    description: "(It takes inspiration from the Neapolitan Gateau) Fior di latte, ground pepper, Neapolitan potato croquette, cooked ham, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE
  },
  {
    id: "ptr-14", name: "SOGNO VEGANO", nameZh: "純素之夢薄餅",
    description: "Home-made courgette cream, aubergines, roasted red & yellow datterino tomatoes, vegan cheese, courgette chips, potato chips, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "ptr-15", name: "TAGLIO ESTIVO", nameZh: "夏日煙燻薄餅",
    description: "Smoked provola, pepper, roasted red & yellow datterino tomatoes, capsicum puree, pecorino, evoo & basil",
    mainCategory: "Ala-carte", category: "The Traditional", categoryZh: "傳統薄餅",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },

  // HONG KONG SPECIAL PIZZA
  {
    id: "hk-1", name: "PESTO E BURRATA", nameZh: "香蒜醬布拉塔薄餅",
    description: "Fior di latte, basil pesto, cherry tomatoes, parmigiano, burrata heart, pine nuts",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "hk-2", name: "QUATTRO FORMAGGI", nameZh: "四款芝士薄餅",
    description: "Base w/ fior di latte, gorgonzola, provola, topped w/ pecorino, served with roasted walnuts and honey",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "hk-3", name: "TARTUFO", nameZh: "松露薄餅",
    description: "Truffle cream, fior di latte, mushrooms, truffle burrata, rucola, parmigiano",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },
  {
    id: "hk-4", name: "ANATRA AFFUMICATA", nameZh: "煙燻鴨胸薄餅",
    description: "Base with San Marzano sauce, fior di latte, smoked duck breast, cayenna honey glaze, rucola, parmigiano",
    mainCategory: "Ala-carte", category: "Hong Kong Special Pizza", categoryZh: "香港特式薄餅",
    image: NO_IMAGE
  },

  // PASTA
  {
    id: "pas-1", name: "AGLIO E OLIO CON GAMBERI", nameZh: "香辣蒜油大蝦意粉",
    description: "Linguine, black tiger prawns, bir eye chili, sun-dried tomatoes, white wine, evoo",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Aglio%20e%20olio.webp",
    dietary: ["Spicy"]
  },
  {
    id: "pas-2", name: "ARRABIATA", nameZh: "辣味茄汁筆管麵",
    description: "Rigatoni, chef's signature spicy San Marzano sauce, basil",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Spicy"]
  },
  {
    id: "pas-3", name: "CARBONARA", nameZh: "傳統卡邦尼意粉",
    description: "Fettuccine, guanciale pork cheeks, egg yolk, parmigiano, pepper",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Carbonara.webp"
  },
  {
    id: "pas-4", name: "GAMBERO ALLA MARINARA", nameZh: "水手黑虎蝦意粉",
    description: "Linguine, black tiger prawns, cherry tomatoes, tomato coulis, lobster bisque sauce, brandy",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: NO_IMAGE,
    dietary: ["Spicy"]
  },
  {
    id: "pas-5", name: "GNOCCHI", nameZh: "香辣薯糰",
    description: "Potato gnocchi, signature spicy sauce, cherry tomatoes, cream, parmigiano, basil",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: NO_IMAGE,
    dietary: ["Vegetarian", "Spicy"]
  },
  {
    id: "pas-6", name: "GUANCIALE DI MANZO", nameZh: "和牛臉頰肉意粉",
    description: "Pappardelle, 12 hours slow cooked wagyu beef cheek ragu, red wine, parmigiano",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/Guanciale%20di%20manzo.webp",
    popular: true
  },
  {
    id: "pas-7", name: "RAVIOLI AI PORCINI", nameZh: "牛肝菌松露餃子",
    description: "Home-made ravioli stuffed w/ porcini mushrooms, truffle cream sauce, oil caviar, truffle, carpaccio",
    mainCategory: "Ala-carte", category: "Pasta", categoryZh: "手製意粉",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },

  // MAINS
  {
    id: "mn-1", name: "FILETTO DI MANZO", nameZh: "烤牛柳",
    description: "Grilled & sliced beef tenderloin, roasted baby potatoes, cherry tomatoes, sauteed mushrooms, mustard, rucola, red wine sauce",
    mainCategory: "Ala-carte", category: "Mains", categoryZh: "精選主菜",
    image: NO_IMAGE
  },
  {
    id: "mn-2", name: "MAIALE IBERICO", nameZh: "慢煮伊比利亞豬頰",
    description: "Slow-cooked Iberico pork jowl, house salad, balsamic onions, red wine sauce, pistachio",
    mainCategory: "Ala-carte", category: "Mains", categoryZh: "精選主菜",
    image: NO_IMAGE,
    dietary: ["Contains Nuts"]
  },

  // DOLCI
  {
    id: "sw-1", name: "TIRAMISU", nameZh: "杏仁酒提拉米蘇",
    description: "Mascarpone cream, pistachio, savoiardi biscuit, coffee & amaretto",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/menu%20images/TIRAMISU.webp",
    popular: true, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "sw-2", name: "BISCOFF CHEESECAKE", nameZh: "焦糖餅乾芝士蛋糕",
    description: "Lotus biscoff, cream mascarpone, cookie crumble base",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },
  {
    id: "sw-3", name: "CREME BRULEE", nameZh: "焦糖燉蛋",
    description: "Custard base, caramelized rapadura, berries",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },
  {
    id: "sw-4", name: "GRAFFE", nameZh: "拿坡里炸甜圈",
    description: "Lightly fried airy dough from Naples, topped w/ cinnamon sugar",
    mainCategory: "Ala-carte", category: "Dolci", categoryZh: "甜品",
    image: NO_IMAGE,
    dietary: ["Vegetarian"]
  },

  // ====================== BEVERAGES ======================
  // COCKTAILS
  {
    id: "b-1", name: "Aperol Spritz", nameZh: "艾普羅氣泡酒",
    description: "The quintessential Italian aperitif—bright, bubbly, and perfectly bittersweet.",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["REFRESHING", "BITTERSWEET", "SPARKLING"],
    ingredients: ["APEROL", "PROSECCO", "SODA", "ORANGE SLICE"]
  },
  {
    id: "b-2", name: "Negroni Sbagliato", nameZh: "氣泡尼格羅尼",
    description: "A 'mistaken' classic that swaps gin for prosecco, creating a lighter yet complex experience.",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["LIGHT", "COMPLEX", "HERBAL"],
    ingredients: ["CAMPARI", "SWEET VERMOUTH", "PROSECCO", "ORANGE PEEL"]
  },
  {
    id: "b-3", name: "Long Island Tea", nameZh: "長島冰茶",
    description: "A potent and legendary blend that packs a punch with its multi-spirit backbone.",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["STRONG", "CITRUSY", "COOL"],
    ingredients: ["VODKA", "GIN", "RUM", "TEQUILA", "TRIPLE SEC", "COLA"]
  },
  {
    id: "b-4", name: "Mojito", nameZh: "莫希托",
    description: "A crisp and vibrant Cuban classic, perfectly balanced with fresh mint and zesty lime.",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["MINTY", "ZESTY", "CHILL"],
    ingredients: ["WHITE RUM", "FRESH MINT", "LIME JUICE", "CANE SUGAR", "SODA"]
  },
  {
    id: "b-5", name: "Old Fashioned", nameZh: "老式雞尾酒",
    description: "Timeless elegance in a glass—deep, bold, and sophisticated with a hint of citrus.",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["BOLD", "SMOOTH", "AROMATIC"],
    ingredients: ["BOURBON WHISKEY", "ANGOSTURA BITTERS", "SUGAR", "ORANGE TWIST"]
  },
  {
    id: "b-6", name: "Chandon Garden Spritz", nameZh: "詩東花園氣泡酒",
    description: "A sophisticated sparkling blend infused with bitters and orange peels.",
    mainCategory: "Beverages", category: "Cocktails",
    image: NO_IMAGE,
    alcohol: true, profiles: ["ELEGANT", "FRUITY", "CLEAN"],
    ingredients: ["CHANDON SPARKLING", "VALENCIA ORANGE EXTRACT", "BITTERS", "HERBS"]
  },

  // WHISKIES
  { id: "b-7", name: "Maker's Mark", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["VANILLA", "CARAMEL", "OAK"], ingredients: ["KENTUCKY STRAIGHT BOURBON"] },
  { id: "b-8", name: "Bulleit Rye", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["SPICY", "PEPPERY", "CRISP"], ingredients: ["95% RYE MASH"] },
  { id: "b-9", name: "Whyte & Mackay", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["HONEY", "FRUITY", "MALTY"], ingredients: ["BLENDED SCOTCH WHISKY"] },
  { id: "b-10", name: "Monkey Shoulder", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["SMOOTHE", "MALTY", "MELLOW"], ingredients: ["MALT SCOTCH WHISKY"] },
  { id: "b-11", name: "Johnnie Walker Gold", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["CREAMY", "LUXURIOUS", "SWEET"], ingredients: ["BLENDED SCOTCH WHISKY"] },
  { id: "b-12", name: "Glenfiddich 12", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["PEAR", "OAK", "FRESH"], ingredients: ["SINGLE MALT SCOTCH"] },
  { id: "b-13", name: "Balvenie 12 Double Wood", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["NUTTY", "SPICY", "SWEET"], ingredients: ["SINGLE MALT SCOTCH", "SHERRY CASK FINISH"] },
  { id: "b-14", name: "Lagavulin 16", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["PEATY", "SMOKEY", "INTENSE"], ingredients: ["ISLAY SINGLE MALT"] },
  { id: "b-15", name: "Macallan Sherry Oak 12", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Whiskies", image: NO_IMAGE, alcohol: true, profiles: ["FRUITY", "SPICY", "RICH"], ingredients: ["HIGHLAND SINGLE MALT"] },

  // GIN, VODKA, RUM, AGAVE, BITTERS
  { id: "b-16", name: "Beefeater", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Gin", image: NO_IMAGE, alcohol: true, profiles: ["JUNIPER", "CITRUS", "DRY"], ingredients: ["LONDON DRY GIN"] },
  { id: "b-17", name: "Roku", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Gin", image: NO_IMAGE, alcohol: true, profiles: ["FLORAL", "PEEPERY", "CITRUS"], ingredients: ["JAPANESE CRAFT GIN"] },
  { id: "b-18", name: "Hendrick's", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Gin", image: NO_IMAGE, alcohol: true, profiles: ["CUCUMBER", "ROSE", "UNIQUE"], ingredients: ["SMALL BATCH GIN"] },
  { id: "b-19", name: "Zubrowka", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Vodka", image: NO_IMAGE, alcohol: true, profiles: ["GRASSY", "SWEET", "SPICY"], ingredients: ["BISON GRASS VODKA"] },
  { id: "b-20", name: "Belvedere", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Vodka", image: NO_IMAGE, alcohol: true, profiles: ["CREAMY", "VANILLA", "SOFT"], ingredients: ["POLISH RYE VODKA"] },
  { id: "b-21", name: "Barcadi", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Rum", image: NO_IMAGE, alcohol: true, profiles: ["LIGHT", "DRY", "CLEAN"], ingredients: ["WHITE RUM"] },
  { id: "b-22", name: "Havana", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Rum", image: NO_IMAGE, alcohol: true, profiles: ["OAKY", "FRUITY", "SMOOTH"], ingredients: ["AÑEJO 7 AÑOS RUM"] },
  { id: "b-23", name: "Olmeca Altos Blanco", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Agave", image: NO_IMAGE, alcohol: true, profiles: ["CITRUS", "HERBAL", "SWEET"], ingredients: ["100% BLUE AGAVE TEQUILA"] },
  { id: "b-24", name: "Volcan Blanco", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Agave", image: NO_IMAGE, alcohol: true, profiles: ["CRISP", "HERBAL", "SALTY"], ingredients: ["BLANCO TEQUILA"] },
  { id: "b-25", name: "Patron Anejo", description: "Glass & Bottle Available", mainCategory: "Beverages", category: "Agave", image: NO_IMAGE, alcohol: true, profiles: ["WOOD", "HONEY", "VANILLA"], ingredients: ["AGED TEQUILA"] },
  
  // Bitters & Spirits
  { id: "b-26", name: "Limoncello", description: "The authentic taste of the Amalfi Coast—sweet, tangy, and cold.", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["LEMONY", "SWEET", "CITRUS"], ingredients: ["AMALFI LEMONS", "GRAIN SPIRIT"] },
  { id: "b-27", name: "Aperol", description: "Perfectly balanced herbal notes with a bright orange kick.", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["BITTERSWEET", "ORANGE", "HERBAL"], ingredients: ["INFUSION OF FRUITS & HERBS"] },
  { id: "b-28", name: "Campari", description: "A dark red, bittersweet, and complex Italian staple.", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["BITTER", "INTENSE", "HERBAL"], ingredients: ["INFUSED FRUITS & HERBS"] },
  { id: "b-29", name: "Sambuca", description: "A powerful anise-flavored spirit that captures the soul of Italy.", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["ANISE", "SWEET", "POWERFUL"], ingredients: ["STAR ANISE", "GRAIN SPIRIT"] },
  { id: "b-30", name: "Fernet Branca", description: "A legendary and mysterious medicinal amaro from Milan.", mainCategory: "Beverages", category: "Bitters", image: NO_IMAGE, alcohol: true, profiles: ["BITTER", "MENTHOL", "COMPLEX"], ingredients: ["27 HERBS & SPICES"] },

  // BEER
  { id: "b-31", name: "Asahi Super Dry", description: "1/2 Pint | Pint | Bottle Available", mainCategory: "Beverages", category: "Beer", image: NO_IMAGE, alcohol: true, profiles: ["CRISP", "DRY", "CLEAN"], ingredients: ["JAPANESE LAGER"] },
  { id: "b-32", name: "Peroni Nastro Azzuro", description: "1/2 Pint | Pint | Bottle Available", mainCategory: "Beverages", category: "Beer", image: NO_IMAGE, alcohol: true, profiles: ["ITALIAN", "MALTY", "SMOOTH"], ingredients: ["MEDITERRANEAN LAGER"] },

  // NON-ALCOHOLIC
  { id: "b-33", name: "Avec Bloody Maria", nameZh: "無酒精血腥瑪麗", description: "A complex and savory mocktail that doesn't compromise on flavor.", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["SAVORY", "SPICY", "BOLD"], ingredients: ["TOMATO", "SPICES", "LEMON"] },
  { id: "b-34", name: "Virgin Madeira Mojito", nameZh: "無酒精莫希托", description: "Fresh and invigorating without the spirit.", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["MINTY", "FRESH", "SWEET"], ingredients: ["MINT", "LIME", "SODA"] },
  { id: "b-35", name: "Juices & Sodas", nameZh: "果汁及汽水", description: "Refreshing selections from around the world.", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["VIBRANT", "SWEET", "COLD"], ingredients: ["FRUIT JUICES", "ITALIAN SODAS"] },
  { id: "b-36", name: "Purezza Water", nameZh: "純淨礦泉水", description: "Eco-friendly premium water, micro-filtered for ultimate purity.", mainCategory: "Beverages", category: "Non-Alcoholic", image: NO_IMAGE, alcohol: false, profiles: ["PURE", "CRISP", "STILL/SPARK"], ingredients: ["MICRO-FILTERED WATER"] },

  // COFFEE & TEA
  { id: "b-37", name: "Classic Italian Coffee", nameZh: "正宗意式咖啡", description: "Authentic Neapolitan roasted blends.", mainCategory: "Beverages", category: "Coffee", image: NO_IMAGE, alcohol: false, profiles: ["INTENSE", "ROASTY", "RICH"], ingredients: ["NEAPOLITAN BLEND"] },
  { id: "b-38", name: "Standard Coffees", nameZh: "咖啡系列", description: "Long Black, Americano, Flat White, Latte, Cappuccino, Mocha.", mainCategory: "Beverages", category: "Coffee", image: NO_IMAGE, alcohol: false, profiles: ["BALANCED", "CREAMY", "WARM"], ingredients: ["ESPRESSO", "MILK"] },
  { id: "b-39", name: "Tea Selection", nameZh: "精選茶款", description: "Classic and herbal selections for every mood.", mainCategory: "Beverages", category: "Tea", image: NO_IMAGE, alcohol: false, profiles: ["CALMING", "AROMATIC", "LIGHT"], ingredients: ["PREMIUM TEA LEAVES"] },

  // WINE
  { id: "b-40", name: "San Martino DOC Treviso Brut 99", description: "Light, dry, and elegant prosecco from Treviso.", mainCategory: "Beverages", category: "Wine — Prosecco", image: NO_IMAGE, alcohol: true, profiles: ["BUBBLY", "DRY", "PEAR"], ingredients: ["GLERA GRAPES"] },
  { id: "b-41", name: "Moet Chandon Imperial Brut", description: "The iconic champagne with a structured, vibrant palate.", mainCategory: "Beverages", category: "Wine — Champagne", image: NO_IMAGE, alcohol: true, profiles: ["CRISP", "FRUITY", "ELEGANT"], ingredients: ["PINOT NOIR", "MEUNIER", "CHARDONNAY"] },
  { id: "b-42", name: "Chateau D'Esclans Whispering Angel", description: "The world's most popular rosato from Provence.", mainCategory: "Beverages", category: "Wine — Rosato", image: NO_IMAGE, alcohol: true, profiles: ["FLORAL", "STONY", "RED FRUIT"], ingredients: ["GRENACHE", "CINSAULT", "VERMENTINO"] },
  { id: "b-43", name: "House White Selections", nameZh: "精選白酒", description: "Pinot Grigio / Sauvignon Blanc / Falanghina", mainCategory: "Beverages", category: "Wine — House White", image: NO_IMAGE, alcohol: true, profiles: ["CITRUS", "LIGHT", "CLEAN"], ingredients: ["ITALIAN WHITE GRAPES"] },
  { id: "b-44", name: "House Red Selections", nameZh: "精選紅酒", description: "Cabernet Sauvignon / Pinot Nero / Le Coste Chianti", mainCategory: "Beverages", category: "Wine — House Red", image: NO_IMAGE, alcohol: true, profiles: ["PLUM", "SPICY", "TANNIC"], ingredients: ["ITALIAN RED GRAPES"] },
  { id: "b-45", name: "White By Bottle", nameZh: "白酒 (整瓶)", description: "Sauvignon Blanc, Gavi, Petit Chablis, Pouilly-Fume.", mainCategory: "Beverages", category: "Wine — White", image: NO_IMAGE, alcohol: true, profiles: ["VARIED", "PREMIUM", "CRISP"], ingredients: ["CURATED BOTTLES"] },
  { id: "b-46", name: "Red By Bottle", nameZh: "紅酒 (整瓶)", description: "Chianti, Barossa Shiraz, Barolo, Brunello, Amarone.", mainCategory: "Beverages", category: "Wine — Red", image: NO_IMAGE, alcohol: true, profiles: ["FULL-BODIED", "COMPLEX", "AGED"], ingredients: ["VINTAGE REDS"] }
];
