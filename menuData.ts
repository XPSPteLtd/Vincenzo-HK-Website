
import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  {
    id: "pwc-1", name: "PROVOLA E PEPE", nameZh: "煙燻芝士黑椒薄餅", 
    description: "Smoked provola from the mountains, hand-crushed San Marzano tomatoes, pepper mix, seasoned roasted cherry tomatoes, evoo & basil. ★ ICONIC PIZZA WINNER THE 19TH WORLD CHAMPIONSHIP",
    descriptionZh: "2019 世界冠軍作品。煙燻芝士、手壓番茄、特調胡椒及烤小番茄。",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — The World Champion", categoryZh: "世界冠軍薄餅",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", 
    popular: true, 
    chefNote: "This is where my story as a champion began. Simplicity is the most complex thing to achieve, but when you balance smoked provola with the right pepper, it's pure emotion.",
    chefNoteZh: "這是我的冠軍之路起點。簡約是最難實現的複雜，但當你將煙燻芝士與對的胡椒完美平衡時，那就是純粹的情感。"
  },
  
  // THE BESTSELLER
  {
    id: "pbs-1", name: "TETTI ILLUMINATI", description: "Base w/ fior di latte, topped w/ IGP mortadella, pistachio cream, pecorino romano flakes, evoo & basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    chefNote: "Inspired by the illuminated rooftops of Naples at night. A vertical journey of flavor with pistachio cream and Mortadella.",
    chefNoteZh: "靈感來自拿坡里夜晚閃耀的屋頂。開心果醬與莫塔德拉火腿帶來一場味覺的垂直旅程。"
  },
  {
    id: "pbs-2", name: "MARGHERITA", nameZh: "瑪格麗特薄餅",
    description: "San Marzano sauce, fior di latte, evoo & basil (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    descriptionZh: "手壓番茄、高山莫札瑞拉芝士、初榨橄欖油及羅勒。",
    price: "$ 28", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", categoryZh: "暢銷薄餅",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", 
    popular: true, dietary: ["Vegetarian"], 
    chefNote: "The Queen of Pizzas. If you want to judge a pizzaiolo, start here. San Marzano and Fior di Latte—the colors of Italy.",
    chefNoteZh: "薄餅之后。如果你想評判一位薄餅師，就從這裡開始。San Marzano 番茄和 Fior di Latte 芝士——這是意大利的色彩。"
  },
  {
    id: "pbs-3", name: "MARGHERITA CON BUFALA", description: "Hand-crushed San Marzano tomatoes, bufala mozzarella DOP, evoo & basil (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", image: "https://images.unsplash.com/photo-1595854341625-f33eeeb2680a?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "pbs-4", name: "CENTRO CALABRIA", nameZh: "卡拉布里亞之星",
    description: "For lovers of Calabrian Nduja. San Marzano sauce, smoked provola, Calabrian Nduja, Neapolitan sausage, evoo & basil",
    descriptionZh: "San Marzano 番茄醬、煙燻芝士、卡拉布里亞辣肉醬、拿坡里肉腸、橄欖油及羅勒。",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", categoryZh: "暢銷薄餅",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop", 
    dietary: ["Spicy"], 
    chefNote: "Bold and rebellious, just like my spirit. The Nduja melts into the sauce like liquid gold from Calabria.",
    chefNoteZh: "大膽而叛逆，就像我的精神。卡拉布里亞辣肉醬融化在醬汁中，如同來自當地的液態黃金。"
  },
  {
    id: "pbs-5", name: "DIAVOLA ALLA NONNO ENZO", description: "San Marzano sauce, fior di latte, spicy Napoli salami according to nonno Enzo tradition, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy"]
  },

  // THE TRADITIONAL
  {
    id: "ptr-1", name: "COME UNA CAPRICCIOSA", description: "San Marzano sauce, fior di latte, taggiasca olives, button mushrooms, topped w/ artichoke heart, cooked ham, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ptr-2", name: "NAPOLI", description: "Hand-crushed San Marzano tomatoes, fior di latte from the mountains, anchovies, taggiasca olives, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA
  },
  {
    id: "ptr-3", name: "DON VINCENZO", description: "Stuffed crust w/ ricotta cheese, yellow cherry tomatoes, bufala mozzarella DOP, Piennolo DOP cherry tomatoes, evoo & basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA, dietary: ["Vegetarian"],
    chefNote: "My childhood in a crust. The stuffed ricotta edge was my grandfather's secret to making every bite a joy.",
    chefNoteZh: "藏在餅皮裡的童年。芝士夾心餅皮是我祖父的秘密，讓每一口都充滿喜悅。"
  },
  {
    id: "ptr-4", name: "MARINARA CONTEMPORANEA", description: "A great classic revisited in a contemporary key. Slow-cooked cherry tomatoes, taggiasca olives, anchovies, garlic, oregano, evoo & basil",
    price: "$ 28", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA
  },
  {
    id: "ptr-5", name: "TAGLIO ESTIVO", description: "Smoked provola, pepper, roasted red & yellow datterino tomatoes, capsicum pure, pecorino, evoo & basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA, dietary: ["Vegetarian"]
  },
  {
    id: "ptr-6", name: "SOGNO VEGANO", description: "Home-made courgette cream, aubergines, roasted red & yellow datterino tomatoes, vegan cheese, courgette chips, potato chips, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA, dietary: ["Vegetarian", "Vegan"]
  },
  {
    id: "ptr-7", name: "CALZONE AL FORNO", description: "Filling w/ ricotta cheese, Napoli salami, cooked ham, fior di latte, topped w/ hand-crushed San Marzano tomatoes, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: "https://images.unsplash.com/photo-1605478239089-1cb468694af1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ptr-8", name: "MARITA", description: "'Best of both' half margherita & half marinara pizza, enjoy 2 flavours in one (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    price: "$ 29", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA
  },
  {
    id: "ptr-9", name: "BELLARIA", description: "Seasoned red datterino tomatoes, bufala mozzarella DOP, topped w/ burrata heart, 24 month prosciutto di parma, pesto, evoo & basil",
    price: "$ 36", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA
  },
  {
    id: "ptr-10", name: "ABBRACCIO E MAMMA", description: "Stuffed crust w/ ricotta, fior di latte, classic meatballs by nonno Enzo, grana padano fondue, bufala mozzarella, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA
  },
  {
    id: "ptr-11", name: "MELANZANELLA", description: "For lovers of aubergines called 'Melanzella'. Smoked provola, roasted cherry tomatoes, pepper, slow-cooked cherry tomato cream, pecorino romano, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "ptr-12", name: "NAPOLITIDINE", description: "San Marzano sauce, smoked provola, topped w/ classic meatballs by nonno Enzo, ricotta, pepper, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA
  },
  {
    id: "ptr-13", name: "RITORNO A NAPOLI", description: "It takes inspiration from the Neapolitan Gateau. Fior di latte, sand ground pepper, Neapolitan potato croquette, baked ham, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA
  },
  {
    id: "ptr-14", name: "DOMENICHE LONTANO", description: "Base w/ bufala mozzarella DOP, baked potatoes, Neapolitan sausage, evoo & basil topped w/ bufala mozzarella DOP chunks",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA, popular: true
  },

  // THIN CRUST PIZZA
  {
    id: "ptc-1", name: "MARGHERITA (CARTWHEEL)", description: "San Marzano sauce, fior di latte, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Thin Crust Pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "ptc-2", name: "DON EGIDIO", description: "Base w/ home-made courgette cream, topped w/ zucchini chips, classic meatballs by nonno Enzo, burrata heart, evoo & basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "Pizza — Thin Crust Pizza", image: GEN_PIZZA
  },

  // SINGAPORE SPECIAL PIZZA
  {
    id: "pss-1", name: "TARTUFO", description: "Truffle cream, fior di latte, mushrooms, truffle burrata, rucola, parmigiano",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Singapore Special Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "pss-2", name: "PESTO E BURRATA", description: "Fior di latte, basil pesto, cherry tomatoes, parmigiano, burrata heart, pine nuts",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Singapore Special Pizza", image: GEN_PIZZA, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "pss-3", name: "QUATTRO FORMAGGI", description: "Base w/ fior di latte, gorgonzola, provola, topped w/ pecorino, served w/ roasted walnuts and honey",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — Singapore Special Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian", "Contains Nuts"]
  },

  // STARTERS
  {
    id: "st-1", name: "PATATINE FRITTE AL TARTUFO", description: "Thunder crunch fries infused w/ white truffle oil, parmigiano, served w/ chili and mayo",
    price: "$ 17", mainCategory: "Ala-carte", category: "The Starters", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "st-2", name: "HOLY WINGS", description: "Deep-fried chicken wings, served w/ chef's signature spicy sauce (7pcs)",
    price: "$ 20", mainCategory: "Ala-carte", category: "The Starters", image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy"]
  },
  {
    id: "st-3", name: "WAGYU POLPETTE", description: "Slow-cooked wagyu meatballs, San Marzano sauce, basil, parmigiano",
    price: "$ 22", mainCategory: "Ala-carte", category: "The Starters", image: "https://images.unsplash.com/photo-1529042419816-ce8b159c146d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "st-4", name: "TRIS DI MONTANARE 3PCS", description: "3 pieces of fried neapolitan pizza dough: Courgette cream & chips / Ricotta, mortadella & pistachio / Burrata heart, anchovies, lemon zest",
    price: "$ 23", mainCategory: "Ala-carte", category: "The Starters", image: GEN_STARTER
  },
  {
    id: "st-5", name: "BRUSCHETTA", description: "Toasted french baguette bread, spicy citrus salsa, Parmigiano Reggiano, balsamic glaze, evoo & basil",
    price: "$ 18", mainCategory: "Ala-carte", category: "The Starters", image: "https://images.unsplash.com/photo-1572695157366-5e585e5055b8?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "st-6", name: "FOCACCIA", description: "Home-made thin focaccia bread, served w/ basil pesto and capsicum cream",
    price: "$ 15", mainCategory: "Ala-carte", category: "The Starters", image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "st-7", name: "PARMIGIANA DI MELANZANE ALLA NONNO ENZO", nameZh: "焗芝士千層茄子",
    description: "Over-baked eggplant parmigiana, San Marzano ragu, smoked provola, parmigiano, basil",
    descriptionZh: "番茄、炸茄子、帕馬森芝士及羅勒。遵循 Enzo 祖父的傳統食譜。",
    price: "HK$ 148",
    category: "Starters",
    categoryZh: "精選前菜",
    image: "https://images.unsplash.com/photo-1533777324545-af006500da4a?q=80&w=2000&auto=format&fit=crop",
    dietary: ["Vegetarian"],
    chefNote: "My grandfather Enzo's recipe. The key is in how thinly you slice the aubergines.",
    chefNoteZh: "來自祖父 Enzo 的家傳食譜。關鍵在於將茄子切得極薄。"
  },
  {
    id: "cp-1",
    name: "Provola E Pepe",
    nameZh: "煙燻芝士黑椒薄餅",
    description: "World Champion 2019. Smoked provola, hand-crushed tomatoes, pepper mix, roasted cherry tomatoes.",
    descriptionZh: "2019 世界冠軍作品。煙燻芝士、手壓番茄、特調胡椒及烤小番茄。",
    price: "HK$ 228",
    category: "Contemporary Pizza",
    categoryZh: "當代薄餅",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop",
    popular: true,
    dietary: ["Vegetarian"],
    chefNote: "The World Champion pizza. The balance of smoked cheese and fresh pepper is what won the judges' hearts.",
    chefNoteZh: "2019年世界冠軍作品。煙燻芝士與新鮮胡椒的平衡完美征服了評委。"
  },
  {
    id: "cp-3",
    name: "Centro Calabria",
    nameZh: "卡拉布里亞之星",
    description: "San Marzano sauce, smoked provola, calabrian nduja, neapolitan sausage, evoo & basil.",
    descriptionZh: "San Marzano 番茄醬、煙燻芝士、卡拉布里亞辣肉醬、拿坡里肉腸、橄欖油及羅勒。",
    price: "HK$ 248",
    category: "Contemporary Pizza",
    categoryZh: "當代薄餅",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=2000&auto=format&fit=crop",
    popular: true,
    dietary: ["Spicy"],
    chefNote: "Spicy, bold, and unapologetic. The 'Nduja melts into the sauce creating liquid gold.",
    chefNoteZh: "香辣、大膽。卡拉布里亞辣肉醬融化在醬汁中，如同液態黃金。"
  },
  {
    id: "tp-2",
    name: "Margherita",
    nameZh: "瑪格麗特薄餅",
    description: "Hand-crushed tomato, fior di latte from the mountains, evoo & basil.",
    descriptionZh: "手壓番茄、高山莫札瑞拉芝士、初榨橄欖油及羅勒。",
    price: "HK$ 208",
    category: "Traditional Pizza",
    categoryZh: "傳統薄餅",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2000&auto=format&fit=crop",
    dietary: ["Vegetarian"],
    chefNote: "The queen of pizzas. San Marzano tomatoes and Fior di Latte are the flag of Italy.",
    chefNoteZh: "薄餅之後。San Marzano 番茄和 Fior di Latte 芝士象徵著意大利的色彩。"
  },
  {
    id: "pst-3",
    name: "Carbonara",
    nameZh: "傳統卡邦尼意粉",
    description: "Home-made fettuccine, slow cooked iberico pork jowl, egg yolk, parmigiano.",
    descriptionZh: "自家製闊麵、慢煮伊比利亞豬頰肉、蛋黃及帕馬森芝士。",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", categoryZh: "手製意粉及主菜",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop", 
    popular: true, 
    chefNote: "No cream, ever! Just the perfect emulsification of egg yolk and Pecorino. A true tribute to Roman tradition.",
    chefNoteZh: "絕不加忌廉！純粹以蛋黃和羊奶芝士完美乳化而成。向羅馬傳統致敬。"
  },
  {
    id: "dst-1",
    name: "Tiramisu All'Amaretto",
    nameZh: "杏仁酒提拉米蘇",
    description: "Mascarpone lombardo, savoiardi biscuit, crushed pistachio, amaretto, physalis.",
    descriptionZh: "倫巴第馬斯卡彭芝士、手指餅乾、開心果碎、杏仁酒及燈籠果。",
    price: "HK$ 138",
    category: "Dessert",
    categoryZh: "甜品",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=2000&auto=format&fit=crop",
    dietary: ["Contains Nuts"],
    chefNote: "The amaretto adds a nutty warmth to the coffee soak.",
    chefNoteZh: "杏仁酒為咖啡浸透的手指餅乾增添了一抹溫緩的果仁香氣。"
  }
];
