import { MenuItem } from './types';

// Generic fallbacks
const GEN_PIZZA = "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop";
const GEN_STARTER = "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=800&auto=format&fit=crop";
const GEN_SALAD = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop";
const GEN_PASTA = "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop";
const GEN_SWEET = "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop";
const GEN_DRINK = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop";
const GEN_WINE = "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop";
const GEN_COFFEE = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop";

export const menuItems: MenuItem[] = [
  // ====================== ALA-CARTE ======================
  // THE WORLD CHAMPION
  {
    id: "pwc-1", name: "PROVOLA E PEPE", nameZh: "煙燻芝士黑椒薄餅", 
    description: "Smoked provola from the mountains, hand-crushed San Marzano tomatoes, pepper mix, seasoned roasted cherry tomatoes, evoo & basil. ★ ICONIC PIZZA WINNER THE 19TH WORLD CHAMPIONSHIP",
    descriptionZh: "2019 世界冠軍作品。煙燻芝士、手壓番茄、特調胡椒及烤小番茄。",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — The World Champion", categoryZh: "世界冠軍薄餅",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", 
    popular: true, chefNoteZh: "2019年世界冠軍作品。煙燻芝士與新鮮胡椒的平衡完美征服了評委。"
  },
  
  // THE BESTSELLER
  {
    id: "pbs-1", name: "TETTI ILLUMINATI", nameZh: "燈光屋頂薄餅",
    description: "Base w/ fior di latte, topped w/ IGP mortadella, pistachio cream, pecorino romano flakes, evoo & basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", categoryZh: "暢銷薄餅", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pbs-2", name: "MARGHERITA", nameZh: "瑪格麗特薄餅",
    description: "San Marzano sauce, fior di latte, evoo & basil (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    descriptionZh: "手壓番茄、高山莫札瑞拉芝士、初榨橄欖油及羅勒。",
    price: "$ 28", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", categoryZh: "暢銷薄餅",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", 
    popular: true, dietary: ["Vegetarian"], chefNoteZh: "薄餅之後。San Marzano 番茄和 Fior di Latte 芝士象徵著意大利的色彩。"
  },
  {
    id: "pbs-3", name: "MARGHERITA CON BUFALA", nameZh: "水牛芝士瑪格麗特薄餅",
    description: "Hand-crushed San Marzano tomatoes, bufala mozzarella DOP, evoo & basil (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", categoryZh: "暢銷薄餅", image: "https://images.unsplash.com/photo-1595854341625-f33eeeb2680a?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "pbs-4", name: "CENTRO CALABRIA", nameZh: "卡拉布里亞之星",
    description: "For lovers of Calabrian Nduja. San Marzano sauce, smoked provola, Calabrian Nduja, Neapolitan sausage, evoo & basil",
    descriptionZh: "San Marzano 番茄醬、煙燻芝士、卡拉布里亞辣肉醬、拿坡里肉腸、橄欖油及羅勒。",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", categoryZh: "暢銷薄餅",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop", 
    dietary: ["Spicy"], chefNoteZh: "香辣、大膽。卡拉布里亞辣肉醬融化在醬汁中，如同液態黃金。"
  },
  {
    id: "pbs-5", name: "DIAVOLA ALLA NONNO ENZO", nameZh: "祖父恩佐惡魔薄餅",
    description: "San Marzano sauce, fior di latte, spicy Napoli salami according to nonno Enzo tradition, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", categoryZh: "暢銷薄餅", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy"]
  },

  // THE TRADITIONAL
  {
    id: "ptr-1", name: "COME UNA CAPRICCIOSA", nameZh: "卡布里喬沙薄餅",
    description: "San Marzano sauce, fior di latte, taggiasca olives, button mushrooms, topped w/ artichoke heart, cooked ham, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ptr-2", name: "NAPOLI", nameZh: "拿坡里薄餅",
    description: "Hand-crushed San Marzano tomatoes, fior di latte from the mountains, anchovies, taggiasca olives, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA
  },
  {
    id: "ptr-3", name: "DON VINCENZO", nameZh: "唐•文森佐薄餅",
    description: "Stuffed crust w/ ricotta cheese, yellow cherry tomatoes, bufala mozzarella DOP, Piennolo DOP cherry tomatoes, evoo & basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA, dietary: ["Vegetarian"]
  },
  {
    id: "ptr-4", name: "MARINARA CONTEMPORANEA", nameZh: "當代水手薄餅",
    description: "A great classic revisited in a contemporary key. Slow-cooked cherry tomatoes, taggiasca olives, anchovies, garlic, oregano, evoo & basil",
    price: "$ 28", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA
  },
  {
    id: "ptr-5", name: "TAGLIO ESTIVO", nameZh: "夏日煙燻薄餅",
    description: "Smoked provola, pepper, roasted red & yellow datterino tomatoes, capsicum pure, pecorino, evoo & basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA, dietary: ["Vegetarian"]
  },
  {
    id: "ptr-6", name: "SOGNO VEGANO", nameZh: "純素之夢薄餅",
    description: "Home-made courgette cream, aubergines, roasted red & yellow datterino tomatoes, vegan cheese, courgette chips, potato chips, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA, dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "ptr-7", name: "CALZONE AL FORNO", nameZh: "焗卡爾佐涅",
    description: "Filling w/ ricotta cheese, Napoli salami, cooked ham, fior di latte, topped w/ hand-crushed San Marzano tomatoes, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: "https://images.unsplash.com/photo-1605478239089-1cb468694af1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ptr-8", name: "MARITA", nameZh: "半半薄餅",
    description: "'Best of both' half margherita & half marinara pizza, enjoy 2 flavours in one (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    price: "$ 29", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA
  },
  {
    id: "ptr-9", name: "BELLARIA", nameZh: "貝拉里亞薄餅",
    description: "Seasoned red datterino tomatoes, bufala mozzarella DOP, topped w/ burrata heart, 24 month prosciutto di parma, pesto, evoo & basil",
    price: "$ 36", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA
  },
  {
    id: "ptr-10", name: "ABBRACCIO E MAMMA", nameZh: "媽媽的懷抱薄餅",
    description: "Stuffed crust w/ ricotta, fior di latte, classic meatballs by nonno Enzo, grana padano fondue, bufala mozzarella, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA
  },
  {
    id: "ptr-11", name: "MELANZANELLA", nameZh: "茄子薄餅",
    description: "For lovers of aubergines called 'Melanzella'. Smoked provola, roasted cherry tomatoes, pepper, slow-cooked cherry tomato cream, pecorino romano, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "ptr-12", name: "NAPOLITIDINE", nameZh: "拿坡里肉丸薄餅",
    description: "San Marzano sauce, smoked provola, topped w/ classic meatballs by nonno Enzo, ricotta, pepper, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA
  },
  {
    id: "ptr-13", name: "RITORNO A NAPOLI", nameZh: "回到拿坡里薄餅",
    description: "It takes inspiration from the Neapolitan Gateau. Fior di latte, sand ground pepper, Neapolitan potato croquette, baked ham, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA
  },
  {
    id: "ptr-14", name: "DOMENICHE LONTANO", nameZh: "遙遠的星期日薄餅",
    description: "Base w/ bufala mozzarella DOP, baked potatoes, Neapolitan sausage, evoo & basil topped w/ bufala mozzarella DOP chunks",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", categoryZh: "傳統薄餅", image: GEN_PIZZA, popular: true
  },

  // THIN CRUST PIZZA
  {
    id: "ptc-1", name: "MARGHERITA (CARTWHEEL)", nameZh: "薄身瑪格麗特薄餅",
    description: "San Marzano sauce, fior di latte, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Thin Crust Pizza", categoryZh: "薄底薄餅", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "ptc-2", name: "DON EGIDIO", nameZh: "唐•艾吉迪奧薄餅",
    description: "Base w/ home-made courgette cream, topped w/ zucchini chips, classic meatballs by nonno Enzo, burrata heart, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — Thin Crust Pizza", categoryZh: "薄底薄餅", image: GEN_PIZZA
  },

  // SINGAPORE SPECIAL PIZZA
  {
    id: "pss-1", name: "TARTUFO", nameZh: "松露薄餅",
    description: "Truffle cream, fior di latte, mushrooms, truffle burrata, rucola, parmigiano",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Singapore Special Pizza", categoryZh: "特式薄餅", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "pss-2", name: "PESTO E BURRATA", nameZh: "香蒜醬布拉塔薄餅",
    description: "Fior di latte, basil pesto, cherry tomatoes, parmigiano, burrata heart, pine nuts",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Singapore Special Pizza", categoryZh: "特式薄餅", image: GEN_PIZZA, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "pss-3", name: "QUATTRO FORMAGGI", nameZh: "四款芝士薄餅",
    description: "Base w/ fior di latte, gorgonzola, provola, topped w/ pecorino, served w/ roasted walnuts and honey",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Singapore Special Pizza", categoryZh: "特式薄餅", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian", "Contains Nuts"]
  },

  // STARTERS
  {
    id: "st-1", name: "PATATINE FRITTE AL TARTUFO", nameZh: "松露薯條",
    description: "Thunder crunch fries infused w/ white truffle oil, parmigiano, served w/ chili and mayo",
    price: "$ 17", mainCategory: "Ala-carte", category: "The Starters", categoryZh: "精選前菜", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "st-2", name: "HOLY WINGS", nameZh: "脆炸雞翼",
    description: "Deep-fried chicken wings, served w/ chef's signature spicy sauce (7pcs)",
    price: "$ 20", mainCategory: "Ala-carte", category: "The Starters", categoryZh: "精選前菜", image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy"]
  },
  {
    id: "st-3", name: "WAGYU POLPETTE", nameZh: "和牛肉丸",
    description: "Slow-cooked wagyu meatballs, San Marzano sauce, basil, parmigiano",
    price: "$ 22", mainCategory: "Ala-carte", category: "The Starters", categoryZh: "精選前菜", image: "https://images.unsplash.com/photo-1529042419816-ce8b159c146d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "st-4", name: "TRIS DI MONTANARE 3PCS", nameZh: "三款炸薄餅麵糰 (3件)",
    description: "3 pieces of fried neapolitan pizza dough: Courgette cream & chips / Ricotta, mortadella & pistachio / Burrata heart, anchovies, lemon zest",
    price: "$ 23", mainCategory: "Ala-carte", category: "The Starters", categoryZh: "精選前菜", image: GEN_STARTER
  },
  {
    id: "st-5", name: "BRUSCHETTA", nameZh: "意式烤麵包",
    description: "Toasted french baguette bread, spicy citrus salsa, Parmigiano Reggiano, balsamic glaze, evoo & basil",
    price: "$ 18", mainCategory: "Ala-carte", category: "The Starters", categoryZh: "精選前菜", image: "https://images.unsplash.com/photo-1572695157366-5e585e5055b8?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "st-6", name: "FOCACCIA", nameZh: "自家製佛卡夏",
    description: "Home-made thin focaccia bread, served w/ basil pesto and capsicum cream",
    price: "$ 15", mainCategory: "Ala-carte", category: "The Starters", categoryZh: "精選前菜", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "st-7", name: "PARMIGIANA DI MELANZANE ALLA NONNO ENZO", nameZh: "焗芝士千層茄子",
    description: "Over-baked eggplant parmigiana, San Marzano ragu, smoked provola, parmigiano, basil",
    descriptionZh: "番茄、炸茄子、帕馬森芝士及羅勒。遵循 Enzo 祖父的傳統食譜。",
    price: "$ 20", mainCategory: "Ala-carte", category: "The Starters", categoryZh: "精選前菜",
    image: "https://images.unsplash.com/photo-1627042633145-b780d842bacb?q=80&w=800&auto=format&fit=crop", 
    dietary: ["Vegetarian"], chefNoteZh: "來自祖父 Enzo 的家傳食譜。關鍵在於將茄子切得極薄。"
  },

  // SALADS
  {
    id: "sal-1", name: "BURRATA CLASSICA", nameZh: "傳統布拉塔",
    description: "125g: 32 / 300g: 58 | Burrata cheese, rucola, cherry tomatoes, basil pesto, oil caviar, balsamic",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Salads", categoryZh: "精選沙律", image: "https://images.unsplash.com/photo-1608897013039-887f214b985c?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "sal-2", name: "BURRATA PESCA E ARANCIA", nameZh: "水蜜桃橙香布拉塔",
    description: "125g: 35 / 300g: 58 | Burrata cheese, spicy peach salsa, orange pulp, roasted beetroot, pecan, cayenne honey glaze, chili caviar",
    price: "$ 35", mainCategory: "Ala-carte", category: "The Salads", categoryZh: "精選沙律", image: GEN_SALAD, dietary: ["Spicy", "Vegetarian", "Contains Nuts"]
  },
  {
    id: "sal-3", name: "CAVOLO E MELONE", nameZh: "羽衣甘藍蜜瓜沙律",
    description: "Green kale, hami melon, spicy ginger tofu dressing, cherry tomatoes, cranberries, feta cheese, shaved almonds",
    price: "$ 26", mainCategory: "Ala-carte", category: "The Salads", categoryZh: "精選沙律", image: GEN_SALAD, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "sal-4", name: "SALUMI", nameZh: "意式火腿拼盤",
    description: "24 month prosciutto di parma, mortadella, bologna, salami milano, stracciatella, rucola, sun dried tomatoes, taggiasca olives, toasted baguette bread",
    price: "$ 26", mainCategory: "Ala-carte", category: "The Salads", categoryZh: "精選沙律", image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sal-5", name: "CAESAR SALAD", nameZh: "凱撒沙律",
    description: "Baby romaine lettuce, grilled chicken breast, baked croutons, home-made caesar dressing, cherry tomatoes, parmigiano, evoo",
    price: "$ 24", mainCategory: "Ala-carte", category: "The Salads", categoryZh: "精選沙律", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sal-6", name: "POSITANO", nameZh: "波西塔諾海鮮沙律",
    description: "Rucola, red prawn tartare, heart of burrata, cherry tomatoes, guacamole, amalfi lemon dressing, basil oil",
    price: "$ 30", mainCategory: "Ala-carte", category: "The Salads", categoryZh: "精選沙律", image: GEN_SALAD
  },

  // PASTAS & MAINS
  {
    id: "pm-1", name: "GUANCIALE DI MANZO", nameZh: "和牛臉頰肉意粉",
    description: "Pappardelle, 12 hours slow-cooked wagyu beef cheek ragu, red wine, parmigiano",
    price: "$ 36", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=800&auto=format&fit=crop", popular: true
  },
  {
    id: "pm-2", name: "CARBONARA", nameZh: "傳統卡邦尼意粉",
    description: "Fettuccine, guanciale pork cheeks, egg yolk, parmigiano, pepper",
    descriptionZh: "自家製闊麵、慢煮伊比利亞豬頰肉、蛋黃及帕馬森芝士。",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop", 
    popular: true, chefNoteZh: "絕不加忌廉！純粹以蛋黃、羊奶芝士和胡椒乳化而成。向羅馬傳統致敬。"
  },
  {
    id: "pm-3", name: "GAMBERO ALLA MARINARA", nameZh: "水手黑虎蝦意粉",
    description: "Linguine, black tiger prawns, cherry tomatoes, lobster bisque sauce, brandy",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pm-4", name: "ARRABIATA", nameZh: "辣味茄汁筆管麵",
    description: "Rigatoni, chef's signature spicy San Marzano sauce, basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1551183053-ec916c905b18?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy", "Vegetarian"]
  },
  {
    id: "pm-5", name: "GNOCCHI", nameZh: "香辣薯糰",
    description: "Potato gnocchi, signature spicy sauce, cherry tomatoes, cream, parmigiano, basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1617094049870-7d3122c601ed?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Spicy", "Vegetarian"]
  },
  {
    id: "pm-6", name: "LASAGNA AL FORNO", nameZh: "焗牛肉千層麵",
    description: "Oven-baked beef lasagna, bechamel, tomato coulis, fior di latte, San Marzano ragu, parmigiano, basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pm-7", name: "AGLIO E OLIO", nameZh: "香辣蒜油大蝦意粉",
    description: "Linguine, black tiger prawns, extra spicy eye chili, white wine, evoo",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy"]
  },
  {
    id: "pm-8", name: "RAVIOLI AI PORCINI", nameZh: "牛肝菌松露餃子",
    description: "(SINGAPORE SPECIAL) Home-made ravioli stuffed w/ porcini mushrooms, truffle cream sauce, oil caviar, truffle carpaccio",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "pm-9", name: "MAIALE IBERICO", nameZh: "慢煮伊比利亞豬頰",
    description: "Slow-cooked Iberico pork jowl, house salad, balsamic onions, red wine sauce, pistachio",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop", dietary: ["Contains Nuts"]
  },
  {
    id: "pm-10", name: "FILETTO DI MANZO", nameZh: "烤牛柳",
    description: "Grilled & sliced beef tenderloin, roasted baby potatoes, cherry tomatoes, sauteed mushrooms, mustard, rucola, red wine sauce",
    price: "$ 44", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1544025162808-4ea0f6e1f0ba?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pm-11", name: "POLLO AL PARMIGIANO", nameZh: "帕馬森芝士烤雞",
    description: "Baked chicken thigh cutlet, fior di latte, parmigiano, basil, served w/ linguine al pomodoro, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop"
  },

  // SWEETS
  {
    id: "sw-1", name: "TIRAMISU", nameZh: "杏仁酒提拉米蘇",
    description: "Mascarpone cream, pistachio, savoiardi biscuit, coffee & kahlua",
    descriptionZh: "倫巴第馬斯卡彭芝士、手指餅乾、開心果碎、杏仁酒及燈籠果。",
    price: "$ 14", mainCategory: "Ala-carte", category: "The Sweets", categoryZh: "甜品",
    image: "https://images.unsplash.com/photo-1571115177098-24edf646f906?q=80&w=800&auto=format&fit=crop", 
    popular: true, dietary: ["Contains Nuts"], chefNoteZh: "杏仁酒為咖啡浸透的手指餅乾增添了一抹溫暖的果仁香氣。"
  },
  {
    id: "sw-2", name: "CRÈME BRULEE", nameZh: "焦糖燉蛋",
    description: "Custard base, caramelized rapadura, berries",
    price: "$ 12", mainCategory: "Ala-carte", category: "The Sweets", categoryZh: "甜品", image: "https://images.unsplash.com/photo-1472555694391-399e12cdb9b9?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "sw-3", name: "RASPBERRY CHEESECAKE", nameZh: "覆盆子芝士蛋糕",
    description: "Baked cheese cake, raspberry coulis, pistachio",
    price: "$ 14", mainCategory: "Ala-carte", category: "The Sweets", categoryZh: "甜品", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "sw-4", name: "GRAFFE", nameZh: "拿坡里炸甜圈",
    description: "Lightly fried airy dough from Naples, topped w/ cinnamon sugar",
    price: "$ 12", mainCategory: "Ala-carte", category: "The Sweets", categoryZh: "甜品", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "sw-5", name: "CHOCOLATE TARTLET", nameZh: "朱古力鹹焦糖撻",
    description: "Chocolate salted caramel tartlet, almond flakes, icing sugar",
    price: "$ 12", mainCategory: "Ala-carte", category: "The Sweets", categoryZh: "甜品", image: "https://images.unsplash.com/photo-1517596041696-2be43c3aa426?q=80&w=800&auto=format&fit=crop", dietary: ["Contains Nuts"]
  },
  {
    id: "sw-6", name: "GELATO VANIGLIA", nameZh: "雲尼拿雪糕",
    description: "Vanilla gelato, pistachio",
    price: "$ 8", mainCategory: "Ala-carte", category: "The Sweets", categoryZh: "甜品", image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian", "Contains Nuts"]
  },

  // ====================== BEVERAGES ======================
  // COCKTAILS
  {
    id: "b-1", name: "Aperol Spritz", nameZh: "艾普羅氣泡酒",
    description: "The quintessential Italian aperitif—bright, bubbly, and perfectly bittersweet.",
    price: "$ 18", mainCategory: "Beverages", category: "Cocktails",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop",
    alcohol: true, profiles: ["REFRESHING", "BITTERSWEET", "SPARKLING"],
    ingredients: ["APEROL", "PROSECCO", "SODA", "ORANGE SLICE"]
  },
  {
    id: "b-2", name: "Negroni Sbagliato", nameZh: "氣泡尼格羅尼",
    description: "A 'mistaken' classic that swaps gin for prosecco, creating a lighter yet complex experience.",
    price: "$ 18", mainCategory: "Beverages", category: "Cocktails",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    alcohol: true, profiles: ["LIGHT", "COMPLEX", "HERBAL"],
    ingredients: ["CAMPARI", "SWEET VERMOUTH", "PROSECCO", "ORANGE PEEL"]
  },
  {
    id: "b-3", name: "Long Island Tea", nameZh: "長島冰茶",
    description: "A potent and legendary blend that packs a punch with its multi-spirit backbone.",
    price: "$ 18", mainCategory: "Beverages", category: "Cocktails",
    image: "https://images.unsplash.com/photo-1536934331407-6cddc48c3f41?q=80&w=800&auto=format&fit=crop",
    alcohol: true, profiles: ["STRONG", "CITRUSY", "COOL"],
    ingredients: ["VODKA", "GIN", "RUM", "TEQUILA", "TRIPLE SEC", "COLA"]
  },
  {
    id: "b-4", name: "Mojito", nameZh: "莫希托",
    description: "A crisp and vibrant Cuban classic, perfectly balanced with fresh mint and zesty lime.",
    price: "$ 18", mainCategory: "Beverages", category: "Cocktails",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800&auto=format&fit=crop",
    alcohol: true, profiles: ["MINTY", "ZESTY", "CHILL"],
    ingredients: ["WHITE RUM", "FRESH MINT", "LIME JUICE", "CANE SUGAR", "SODA"]
  },
  {
    id: "b-5", name: "Old Fashioned", nameZh: "老式雞尾酒",
    description: "Timeless elegance in a glass—deep, bold, and sophisticated with a hint of citrus.",
    price: "$ 18", mainCategory: "Beverages", category: "Cocktails",
    image: "https://images.unsplash.com/photo-1627998687702-861fbb90d2e8?q=80&w=800&auto=format&fit=crop",
    alcohol: true, profiles: ["BOLD", "SMOOTH", "AROMATIC"],
    ingredients: ["BOURBON WHISKEY", "ANGOSTURA BITTERS", "SUGAR", "ORANGE TWIST"]
  },
  {
    id: "b-6", name: "Chandon Garden Spritz", nameZh: "詩東花園氣泡酒",
    description: "A sophisticated sparkling blend infused with bitters and orange peels.",
    price: "$ 18", mainCategory: "Beverages", category: "Cocktails",
    image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop",
    alcohol: true, profiles: ["ELEGANT", "FRUITY", "CLEAN"],
    ingredients: ["CHANDON SPARKLING", "VALENCIA ORANGE EXTRACT", "BITTERS", "HERBS"]
  },

  // WHISKIES
  { id: "b-7", name: "Maker's Mark", description: "Glass & Bottle Available", price: "$ 15", mainCategory: "Beverages", category: "Whiskies", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop", alcohol: true, profiles: ["VANILLA", "CARAMEL", "OAK"], ingredients: ["KENTUCKY STRAIGHT BOURBON"] },
  { id: "b-8", name: "Bulleit Rye", description: "Glass & Bottle Available", price: "$ 15", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["SPICY", "PEPPERY", "CRISP"], ingredients: ["95% RYE MASH"] },
  { id: "b-9", name: "Whyte & Mackay", description: "Glass & Bottle Available", price: "$ 16", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["HONEY", "FRUITY", "MALTY"], ingredients: ["BLENDED SCOTCH WHISKY"] },
  { id: "b-10", name: "Monkey Shoulder", description: "Glass & Bottle Available", price: "$ 17", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["SMOOTHE", "MALTY", "MELLOW"], ingredients: ["MALT SCOTCH WHISKY"] },
  { id: "b-11", name: "Johnnie Walker Gold", description: "Glass & Bottle Available", price: "$ 18", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["CREAMY", "LUXURIOUS", "SWEET"], ingredients: ["BLENDED SCOTCH WHISKY"] },
  { id: "b-12", name: "Glenfiddich 12", description: "Glass & Bottle Available", price: "$ 18", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["PEAR", "OAK", "FRESH"], ingredients: ["SINGLE MALT SCOTCH"] },
  { id: "b-13", name: "Balvenie 12 Double Wood", description: "Glass & Bottle Available", price: "$ 19", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["NUTTY", "SPICY", "SWEET"], ingredients: ["SINGLE MALT SCOTCH", "SHERRY CASK FINISH"] },
  { id: "b-14", name: "Lagavulin 16", description: "Glass & Bottle Available", price: "$ 23", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["PEATY", "SMOKEY", "INTENSE"], ingredients: ["ISLAY SINGLE MALT"] },
  { id: "b-15", name: "Macallan Sherry Oak 12", description: "Glass & Bottle Available", price: "$ 25", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK, alcohol: true, profiles: ["FRUITY", "SPICY", "RICH"], ingredients: ["HIGHLAND SINGLE MALT"] },

  // GIN, VODKA, RUM, AGAVE, BITTERS
  { id: "b-16", name: "Beefeater", description: "Glass & Bottle Available", price: "$ 16", mainCategory: "Beverages", category: "Gin", image: GEN_DRINK, alcohol: true, profiles: ["JUNIPER", "CITRUS", "DRY"], ingredients: ["LONDON DRY GIN"] },
  { id: "b-17", name: "Roku", description: "Glass & Bottle Available", price: "$ 17", mainCategory: "Beverages", category: "Gin", image: GEN_DRINK, alcohol: true, profiles: ["FLORAL", "PEEPERY", "CITRUS"], ingredients: ["JAPANESE CRAFT GIN"] },
  { id: "b-18", name: "Hendrick's", description: "Glass & Bottle Available", price: "$ 18", mainCategory: "Beverages", category: "Gin", image: GEN_DRINK, alcohol: true, profiles: ["CUCUMBER", "ROSE", "UNIQUE"], ingredients: ["SMALL BATCH GIN"] },
  { id: "b-19", name: "Zubrowka", description: "Glass & Bottle Available", price: "$ 16", mainCategory: "Beverages", category: "Vodka", image: GEN_DRINK, alcohol: true, profiles: ["GRASSY", "SWEET", "SPICY"], ingredients: ["BISON GRASS VODKA"] },
  { id: "b-20", name: "Belvedere", description: "Glass & Bottle Available", price: "$ 18", mainCategory: "Beverages", category: "Vodka", image: GEN_DRINK, alcohol: true, profiles: ["CREAMY", "VANILLA", "SOFT"], ingredients: ["POLISH RYE VODKA"] },
  { id: "b-21", name: "Barcadi", description: "Glass & Bottle Available", price: "$ 16", mainCategory: "Beverages", category: "Rum", image: GEN_DRINK, alcohol: true, profiles: ["LIGHT", "DRY", "CLEAN"], ingredients: ["WHITE RUM"] },
  { id: "b-22", name: "Havana", description: "Glass & Bottle Available", price: "$ 18", mainCategory: "Beverages", category: "Rum", image: GEN_DRINK, alcohol: true, profiles: ["OAKY", "FRUITY", "SMOOTH"], ingredients: ["AÑEJO 7 AÑOS RUM"] },
  { id: "b-23", name: "Olmeca Altos Blanco", description: "Glass & Bottle Available", price: "$ 16", mainCategory: "Beverages", category: "Agave", image: GEN_DRINK, alcohol: true, profiles: ["CITRUS", "HERBAL", "SWEET"], ingredients: ["100% BLUE AGAVE TEQUILA"] },
  { id: "b-24", name: "Volcan Blanco", description: "Glass & Bottle Available", price: "$ 18", mainCategory: "Beverages", category: "Agave", image: GEN_DRINK, alcohol: true, profiles: ["CRISP", "HERBAL", "SALTY"], ingredients: ["BLANCO TEQUILA"] },
  { id: "b-25", name: "Patron Anejo", description: "Glass & Bottle Available", price: "$ 17", mainCategory: "Beverages", category: "Agave", image: GEN_DRINK, alcohol: true, profiles: ["WOOD", "HONEY", "VANILLA"], ingredients: ["AGED TEQUILA"] },
  
  // Bitters & Spirits
  { id: "b-26", name: "Limoncello", description: "The authentic taste of the Amalfi Coast—sweet, tangy, and cold.", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK, alcohol: true, profiles: ["LEMONY", "SWEET", "CITRUS"], ingredients: ["AMALFI LEMONS", "GRAIN SPIRIT"] },
  { id: "b-27", name: "Aperol", description: "Perfectly balanced herbal notes with a bright orange kick.", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK, alcohol: true, profiles: ["BITTERSWEET", "ORANGE", "HERBAL"], ingredients: ["INFUSION OF FRUITS & HERBS"] },
  { id: "b-28", name: "Campari", description: "A dark red, bittersweet, and complex Italian staple.", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK, alcohol: true, profiles: ["BITTER", "INTENSE", "HERBAL"], ingredients: ["INFUSED FRUITS & HERBS"] },
  { id: "b-29", name: "Sambuca", description: "A powerful anise-flavored spirit that captures the soul of Italy.", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK, alcohol: true, profiles: ["ANISE", "SWEET", "POWERFUL"], ingredients: ["STAR ANISE", "GRAIN SPIRIT"] },
  { id: "b-30", name: "Fernet Branca", description: "A legendary and mysterious medicinal amaro from Milan.", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK, alcohol: true, profiles: ["BITTER", "MENTHOL", "COMPLEX"], ingredients: ["27 HERBS & SPICES"] },

  // BEER
  { id: "b-31", name: "Asahi Super Dry", description: "1/2 Pint | Pint | Bottle Available", price: "$ 13", mainCategory: "Beverages", category: "Beer", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop", alcohol: true, profiles: ["CRISP", "DRY", "CLEAN"], ingredients: ["JAPANESE LAGER"] },
  { id: "b-32", name: "Peroni Nastro Azzuro", description: "1/2 Pint | Pint | Bottle Available", price: "$ 13", mainCategory: "Beverages", category: "Beer", image: "https://images.unsplash.com/photo-1563212036-679944a993ce?q=80&w=800&auto=format&fit=crop", alcohol: true, profiles: ["ITALIAN", "MALTY", "SMOOTH"], ingredients: ["MEDITERRANEAN LAGER"] },

  // NON-ALCOHOLIC
  { id: "b-33", name: "Avec Bloody Maria", nameZh: "無酒精血腥瑪麗", description: "A complex and savory mocktail that doesn't compromise on flavor.", price: "$ 12", mainCategory: "Beverages", category: "Non-Alcoholic", image: GEN_DRINK, alcohol: false, profiles: ["SAVORY", "SPICY", "BOLD"], ingredients: ["TOMATO", "SPICES", "LEMON"] },
  { id: "b-34", name: "Virgin Madeira Mojito", nameZh: "無酒精莫希托", description: "Fresh and invigorating without the spirit.", price: "$ 12", mainCategory: "Beverages", category: "Non-Alcoholic", image: GEN_DRINK, alcohol: false, profiles: ["MINTY", "FRESH", "SWEET"], ingredients: ["MINT", "LIME", "SODA"] },
  { id: "b-35", name: "Juices & Sodas", nameZh: "果汁及汽水", description: "Refreshing selections from around the world.", price: "$ 7", mainCategory: "Beverages", category: "Non-Alcoholic", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=800&auto=format&fit=crop", alcohol: false, profiles: ["VIBRANT", "SWEET", "COLD"], ingredients: ["FRUIT JUICES", "ITALIAN SODAS"] },
  { id: "b-36", name: "Purezza Water", nameZh: "純淨礦泉水", description: "Eco-friendly premium water, micro-filtered for ultimate purity.", price: "$ 1", mainCategory: "Beverages", category: "Non-Alcoholic", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=800&auto=format&fit=crop", alcohol: false, profiles: ["PURE", "CRISP", "STILL/SPARK"], ingredients: ["MICRO-FILTERED WATER"] },

  // COFFEE & TEA
  { id: "b-37", name: "Classic Italian Coffee", nameZh: "正宗意式咖啡", description: "Authentic Neapolitan roasted blends.", price: "$ 4", mainCategory: "Beverages", category: "Coffee", image: "https://images.unsplash.com/photo-1514432324607-a12529f4bcd4?q=80&w=800&auto=format&fit=crop", alcohol: false, profiles: ["INTENSE", "ROASTY", "RICH"], ingredients: ["NEAPOLITAN BLEND"] },
  { id: "b-38", name: "Standard Coffees", nameZh: "咖啡系列", description: "Long Black, Americano, Flat White, Latte, Cappuccino, Mocha.", price: "$ 6", mainCategory: "Beverages", category: "Coffee", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", alcohol: false, profiles: ["BALANCED", "CREAMY", "WARM"], ingredients: ["ESPRESSO", "MILK"] },
  { id: "b-39", name: "Tea Selection", nameZh: "精選茶款", description: "Classic and herbal selections for every mood.", price: "$ 6", mainCategory: "Beverages", category: "Tea", image: "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?q=80&w=800&auto=format&fit=crop", alcohol: false, profiles: ["CALMING", "AROMATIC", "LIGHT"], ingredients: ["PREMIUM TEA LEAVES"] },

  // WINE
  { id: "b-40", name: "San Martino DOC Treviso Brut 99", description: "Light, dry, and elegant prosecco from Treviso.", price: "$ 18", mainCategory: "Beverages", category: "Wine — Prosecco", image: GEN_WINE, alcohol: true, profiles: ["BUBBLY", "DRY", "PEAR"], ingredients: ["GLERA GRAPES"] },
  { id: "b-41", name: "Moet Chandon Imperial Brut", description: "The iconic champagne with a structured, vibrant palate.", price: "$ 25", mainCategory: "Beverages", category: "Wine — Champagne", image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop", alcohol: true, profiles: ["CRISP", "FRUITY", "ELEGANT"], ingredients: ["PINOT NOIR", "MEUNIER", "CHARDONNAY"] },
  { id: "b-42", name: "Chateau D'Esclans Whispering Angel", description: "The world's most popular rosato from Provence.", price: "$ 18", mainCategory: "Beverages", category: "Wine — Rosato", image: GEN_WINE, alcohol: true, profiles: ["FLORAL", "STONY", "RED FRUIT"], ingredients: ["GRENACHE", "CINSAULT", "VERMENTINO"] },
  { id: "b-43", name: "House White Selections", nameZh: "精選白酒", description: "Pinot Grigio / Sauvignon Blanc / Falanghina", price: "$ 17", mainCategory: "Beverages", category: "Wine — House White", image: GEN_WINE, alcohol: true, profiles: ["CITRUS", "LIGHT", "CLEAN"], ingredients: ["ITALIAN WHITE GRAPES"] },
  { id: "b-44", name: "House Red Selections", nameZh: "精選紅酒", description: "Cabernet Sauvignon / Pinot Nero / Le Coste Chianti", price: "$ 17", mainCategory: "Beverages", category: "Wine — House Red", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop", alcohol: true, profiles: ["PLUM", "SPICY", "TANNIC"], ingredients: ["ITALIAN RED GRAPES"] },
  { id: "b-45", name: "White By Bottle", nameZh: "白酒 (整瓶)", description: "Sauvignon Blanc, Gavi, Petit Chablis, Pouilly-Fume.", price: "$ 74+", mainCategory: "Beverages", category: "Wine — White", image: GEN_WINE, alcohol: true, profiles: ["VARIED", "PREMIUM", "CRISP"], ingredients: ["CURATED BOTTLES"] },
  { id: "b-46", name: "Red By Bottle", nameZh: "紅酒 (整瓶)", description: "Chianti, Barossa Shiraz, Barolo, Brunello, Amarone.", price: "$ 70+", mainCategory: "Beverages", category: "Wine — Red", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=800&auto=format&fit=crop", alcohol: true, profiles: ["FULL-BODIED", "COMPLEX", "AGED"], ingredients: ["VINTAGE REDS"] }
];
