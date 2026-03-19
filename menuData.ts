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
    id: "pwc-1", name: "PROVOLA E PEPE", description: "Smoked provola from the mountains, hand-crushed San Marzano tomatoes, pepper mix, seasoned roasted cherry tomatoes, evoo & basil. ★ ICONIC PIZZA WINNER THE 19TH WORLD CHAMPIONSHIP",
    price: "$ 34", mainCategory: "Ala-carte", category: "Pizza — The World Champion", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", popular: true
  },
  
  // THE BESTSELLER
  {
    id: "pbs-1", name: "TETTI ILLUMINATI", description: "Base w/ fior di latte, topped w/ IGP mortadella, pistachio cream, pecorino romano flakes, evoo & basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pbs-2", name: "MARGHERITA", description: "San Marzano sauce, fior di latte, evoo & basil (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    price: "$ 28", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "pbs-3", name: "MARGHERITA CON BUFALA", description: "Hand-crushed San Marzano tomatoes, bufala mozzarella DOP, evoo & basil (+2 Add Garlic Chili Onion & Extra virgin olive oil)",
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", image: "https://images.unsplash.com/photo-1595854341625-f33eeeb2680a?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "pbs-4", name: "CENTRO CALABRIA", description: "For lovers of Calabrian Nduja. San Marzano sauce, smoked provola, Calabrian Nduja, Neapolitan sausage, evoo & basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "Pizza — The Bestseller", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy"]
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
    price: "$ 32", mainCategory: "Ala-carte", category: "Pizza — The Traditional", image: GEN_PIZZA, dietary: ["Vegetarian"]
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
    id: "st-7", name: "PARMIGIANA DI MELANZANE ALLA NONNO ENZO", description: "Over-baked eggplant parmigiana, San Marzano ragu, smoked provola, parmigiano, basil",
    price: "$ 20", mainCategory: "Ala-carte", category: "The Starters", image: "https://images.unsplash.com/photo-1627042633145-b780d842bacb?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },

  // SALADS
  {
    id: "sal-1", name: "BURRATA CLASSICA", description: "125g: 32 / 300g: 58 | Burrata cheese, rucola, cherry tomatoes, basil pesto, oil caviar, balsamic",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Salads", image: "https://images.unsplash.com/photo-1608897013039-887f214b985c?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "sal-2", name: "BURRATA PESCA E ARANCIA", description: "125g: 35 / 300g: 58 | Burrata cheese, spicy peach salsa, orange pulp, roasted beetroot, pecan, cayenne honey glaze, chili caviar",
    price: "$ 35", mainCategory: "Ala-carte", category: "The Salads", image: GEN_SALAD, dietary: ["Spicy", "Vegetarian", "Contains Nuts"]
  },
  {
    id: "sal-3", name: "CAVOLO E MELONE", description: "Green kale, hami melon, spicy ginger tofu dressing, cherry tomatoes, cranberries, feta cheese, shaved almonds",
    price: "$ 26", mainCategory: "Ala-carte", category: "The Salads", image: GEN_SALAD, dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "sal-4", name: "SALUMI", description: "24 month prosciutto di parma, mortadella, bologna, salami milano, stracciatella, rucola, sun dried tomatoes, taggiasca olives, toasted baguette bread",
    price: "$ 26", mainCategory: "Ala-carte", category: "The Salads", image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sal-5", name: "CAESAR SALAD", description: "Baby romaine lettuce, grilled chicken breast, baked croutons, home-made caesar dressing, cherry tomatoes, parmigiano, evoo",
    price: "$ 24", mainCategory: "Ala-carte", category: "The Salads", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sal-6", name: "POSITANO", description: "Rucola, red prawn tartare, heart of burrata, cherry tomatoes, guacamole, amalfi lemon dressing, basil oil",
    price: "$ 30", mainCategory: "Ala-carte", category: "The Salads", image: GEN_SALAD
  },

  // PASTAS & MAINS
  {
    id: "pm-1", name: "GUANCIALE DI MANZO", description: "Pappardelle, 12 hours slow-cooked wagyu beef cheek ragu, red wine, parmigiano",
    price: "$ 36", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=800&auto=format&fit=crop", popular: true
  },
  {
    id: "pm-2", name: "CARBONARA", description: "Fettuccine, guanciale pork cheeks, egg yolk, parmigiano, pepper",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop", popular: true
  },
  {
    id: "pm-3", name: "GAMBERO ALLA MARINARA", description: "Linguine, black tiger prawns, cherry tomatoes, lobster bisque sauce, brandy",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pm-4", name: "ARRABIATA", description: "Rigatoni, chef's signature spicy San Marzano sauce, basil",
    price: "$ 31", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1551183053-ec916c905b18?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy", "Vegetarian"]
  },
  {
    id: "pm-5", name: "GNOCCHI", description: "Potato gnocchi, signature spicy sauce, cherry tomatoes, cream, parmigiano, basil",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1617094049870-7d3122c601ed?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Spicy", "Vegetarian"]
  },
  {
    id: "pm-6", name: "LASAGNA AL FORNO", description: "Oven-baked beef lasagna, bechamel, tomato coulis, fior di latte, San Marzano ragu, parmigiano, basil",
    price: "$ 33", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pm-7", name: "AGLIO E OLIO", description: "Linguine, black tiger prawns, extra spicy eye chili, white wine, evoo",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop", dietary: ["Spicy"]
  },
  {
    id: "pm-8", name: "RAVIOLI AI PORCINI", description: "(SINGAPORE SPECIAL) Home-made ravioli stuffed w/ porcini mushrooms, truffle cream sauce, oil caviar, truffle carpaccio",
    price: "$ 32", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Vegetarian"]
  },
  {
    id: "pm-9", name: "MAIALE IBERICO", description: "Slow-cooked Iberico pork jowl, house salad, balsamic onions, red wine sauce, pistachio",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop", dietary: ["Contains Nuts"]
  },
  {
    id: "pm-10", name: "FILETTO DI MANZO", description: "Grilled & sliced beef tenderloin, roasted baby potatoes, cherry tomatoes, sauteed mushrooms, mustard, rucola, red wine sauce",
    price: "$ 44", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1544025162808-4ea0f6e1f0ba?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pm-11", name: "POLLO AL PARMIGIANO", description: "Baked chicken thigh cutlet, fior di latte, parmigiano, basil, served w/ linguine al pomodoro, evoo & basil",
    price: "$ 34", mainCategory: "Ala-carte", category: "The Pastas & Mains", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop"
  },

  // SWEETS
  {
    id: "sw-1", name: "TIRAMISU", description: "Mascarpone cream, pistachio, savoiardi biscuit, coffee & kahlua",
    price: "$ 14", mainCategory: "Ala-carte", category: "The Sweets", image: "https://images.unsplash.com/photo-1571115177098-24edf646f906?q=80&w=800&auto=format&fit=crop", popular: true, dietary: ["Contains Nuts"]
  },
  {
    id: "sw-2", name: "CRÈME BRULEE", description: "Custard base, caramelized rapadura, berries",
    price: "$ 12", mainCategory: "Ala-carte", category: "The Sweets", image: "https://images.unsplash.com/photo-1472555694391-399e12cdb9b9?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "sw-3", name: "RASPBERRY CHEESECAKE", description: "Baked cheese cake, raspberry coulis, pistachio",
    price: "$ 14", mainCategory: "Ala-carte", category: "The Sweets", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian", "Contains Nuts"]
  },
  {
    id: "sw-4", name: "GRAFFE", description: "Lightly fried airy dough from Naples, topped w/ cinnamon sugar",
    price: "$ 12", mainCategory: "Ala-carte", category: "The Sweets", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian"]
  },
  {
    id: "sw-5", name: "CHOCOLATE TARTLET", description: "Chocolate salted caramel tartlet, almond flakes, icing sugar",
    price: "$ 12", mainCategory: "Ala-carte", category: "The Sweets", image: "https://images.unsplash.com/photo-1517596041696-2be43c3aa426?q=80&w=800&auto=format&fit=crop", dietary: ["Contains Nuts"]
  },
  {
    id: "sw-6", name: "GELATO VANIGLIA", description: "Vanilla gelato, pistachio",
    price: "$ 8", mainCategory: "Ala-carte", category: "The Sweets", image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=800&auto=format&fit=crop", dietary: ["Vegetarian", "Contains Nuts"]
  },

  // ====================== BEVERAGES ======================
  // COCKTAILS
  { id: "b-1", name: "Aperol Spritz", description: "Refreshing classic", price: "$ 18", mainCategory: "Beverages", category: "Cocktails", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop" },
  { id: "b-2", name: "Negroni Sbagliato", description: "Prosecco, Campari, Sweet Vermouth", price: "$ 18", mainCategory: "Beverages", category: "Cocktails", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" },
  { id: "b-3", name: "Long Island Tea", description: "Tequila, Vodka, Light Rum, Triple Sec, Gin", price: "$ 18", mainCategory: "Beverages", category: "Cocktails", image: "https://images.unsplash.com/photo-1536934331407-6cddc48c3f41?q=80&w=800&auto=format&fit=crop" },
  { id: "b-4", name: "Mojito", description: "White Rum, Mint, Lime, Soda", price: "$ 18", mainCategory: "Beverages", category: "Cocktails", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800&auto=format&fit=crop" },
  { id: "b-5", name: "Old Fashioned", description: "Bourbon, Angostura Bitters, Sugar", price: "$ 18", mainCategory: "Beverages", category: "Cocktails", image: "https://images.unsplash.com/photo-1627998687702-861fbb90d2e8?q=80&w=800&auto=format&fit=crop" },
  { id: "b-6", name: "Chandon Garden Spritz", description: "Sparkling wine blended with bitters", price: "$ 18", mainCategory: "Beverages", category: "Cocktails", image: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop" },

  // WHISKIES
  { id: "b-7", name: "Maker's Mark", description: "Glass $15 | Bottle $180", price: "$ 15", mainCategory: "Beverages", category: "Whiskies", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop" },
  { id: "b-8", name: "Bulleit Rye", description: "Glass $15 | Bottle $170", price: "$ 15", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },
  { id: "b-9", name: "Whyte & Mackay", description: "Glass $16 | Bottle $170", price: "$ 16", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },
  { id: "b-10", name: "Monkey Shoulder", description: "Glass $17 | Bottle $180", price: "$ 17", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },
  { id: "b-11", name: "Johnnie Walker Gold", description: "Glass $18 | Bottle $210", price: "$ 18", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },
  { id: "b-12", name: "Glenfiddich 12", description: "Glass $18 | Bottle $220", price: "$ 18", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },
  { id: "b-13", name: "Balvenie 12 Double Wood", description: "Glass $19 | Bottle $250", price: "$ 19", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },
  { id: "b-14", name: "Lagavulin 16", description: "Glass $23 | Bottle $300", price: "$ 23", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },
  { id: "b-15", name: "Macallan Sherry Oak 12", description: "Glass $25 | Bottle $350", price: "$ 25", mainCategory: "Beverages", category: "Whiskies", image: GEN_DRINK },

  // GIN, VODKA, RUM, AGAVE, BITTERS
  { id: "b-16", name: "Beefeater", description: "Glass $16 | Bottle $170", price: "$ 16", mainCategory: "Beverages", category: "Gin", image: GEN_DRINK },
  { id: "b-17", name: "Roku", description: "Glass $17 | Bottle $170", price: "$ 17", mainCategory: "Beverages", category: "Gin", image: GEN_DRINK },
  { id: "b-18", name: "Hendrick's", description: "Glass $18 | Bottle $180", price: "$ 18", mainCategory: "Beverages", category: "Gin", image: GEN_DRINK },
  { id: "b-19", name: "Zubrowka", description: "Glass $16 | Bottle $170", price: "$ 16", mainCategory: "Beverages", category: "Vodka", image: GEN_DRINK },
  { id: "b-20", name: "Belvedere", description: "Glass $18 | Bottle $180", price: "$ 18", mainCategory: "Beverages", category: "Vodka", image: GEN_DRINK },
  { id: "b-21", name: "Barcadi", description: "Glass $16 | Bottle $170", price: "$ 16", mainCategory: "Beverages", category: "Rum", image: GEN_DRINK },
  { id: "b-22", name: "Havana", description: "Glass $18 | Bottle $180", price: "$ 18", mainCategory: "Beverages", category: "Rum", image: GEN_DRINK },
  { id: "b-23", name: "Olmeca Altos Blanco", description: "Glass $16 | Bottle $170", price: "$ 16", mainCategory: "Beverages", category: "Agave", image: GEN_DRINK },
  { id: "b-24", name: "Volcan Blanco", description: "Glass $18 | Bottle $240", price: "$ 18", mainCategory: "Beverages", category: "Agave", image: GEN_DRINK },
  { id: "b-25", name: "Patron Anejo", description: "Glass $17 | Bottle $230", price: "$ 17", mainCategory: "Beverages", category: "Agave", image: GEN_DRINK },
  // Bitters
  { id: "b-26", name: "Limoncello", description: "Digestif", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK },
  { id: "b-27", name: "Aperol", description: "Aperitif", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK },
  { id: "b-28", name: "Campari", description: "Aperitif", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK },
  { id: "b-29", name: "Sambuca", description: "Digestif", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK },
  { id: "b-30", name: "Fernet Branca", description: "Amaro", price: "$ 17", mainCategory: "Beverages", category: "Bitters", image: GEN_DRINK },

  // BEER
  { id: "b-31", name: "Asahi Super Dry", description: "1/2 Pint $13 | Pint $18 | Bottle $80", price: "$ 13", mainCategory: "Beverages", category: "Beer", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop" },
  { id: "b-32", name: "Peroni Nastro Azzuro", description: "1/2 Pint $13 | Pint $18 | Bottle $80", price: "$ 13", mainCategory: "Beverages", category: "Beer", image: "https://images.unsplash.com/photo-1563212036-679944a993ce?q=80&w=800&auto=format&fit=crop" },

  // NON-ALCOHOLIC
  { id: "b-33", name: "Avec Bloody Maria", description: "Mocktail", price: "$ 12", mainCategory: "Beverages", category: "Non-Alcoholic", image: GEN_DRINK },
  { id: "b-34", name: "Virgin Madeira Mojito", description: "Mocktail", price: "$ 12", mainCategory: "Beverages", category: "Non-Alcoholic", image: GEN_DRINK },
  { id: "b-35", name: "Juices & Sodas", description: "Cranberry $8 / Apple $8 / Orange $8 / Arranciata Rossa $7 / Limonata $7 / Tonic $7 / Soda Water $5 / Ginger Ale $7 / Cola/Sprite $7", price: "$ 7", mainCategory: "Beverages", category: "Non-Alcoholic", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=800&auto=format&fit=crop" },
  { id: "b-36", name: "Purezza Water", description: "Still or Sparkling", price: "$ 1", mainCategory: "Beverages", category: "Non-Alcoholic", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=800&auto=format&fit=crop" },

  // COFFEE & TEA
  { id: "b-37", name: "Espresso / Macchiato / Cortado", description: "Coffee ($4-$5)", price: "$ 4", mainCategory: "Beverages", category: "Coffee", image: "https://images.unsplash.com/photo-1514432324607-a12529f4bcd4?q=80&w=800&auto=format&fit=crop" },
  { id: "b-38", name: "Standard Coffees", description: "Long Black, Americano, Flat White, Latte, Cappuccino, Mocha (+1 for Alternative milks/ice)", price: "$ 6", mainCategory: "Beverages", category: "Coffee", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" },
  { id: "b-39", name: "Tea Selection", description: "Classic Earl Grey, English Breakfast, Herbal Chamomile, Peppermint, Lemon Tea", price: "$ 6", mainCategory: "Beverages", category: "Tea", image: "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?q=80&w=800&auto=format&fit=crop" },

  // WINE
  { id: "b-40", name: "San Martino DOC Treviso Brut 99", description: "Prosecco - Glass $18 | Bottle $70", price: "$ 18", mainCategory: "Beverages", category: "Wine — Prosecco", image: GEN_WINE },
  { id: "b-41", name: "Moet Chandon Imperial Brut", description: "Champagne - Glass $25 | Bottle $122 (Veuve Clicquot $170 / Dom Perignon $580)", price: "$ 25", mainCategory: "Beverages", category: "Wine — Champagne", image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop" },
  { id: "b-42", name: "Chateau D'Esclans Whispering Angel 2023", description: "Rosato - Glass $18 | 1/2 BTL $38 | Bottle $72", price: "$ 18", mainCategory: "Beverages", category: "Wine — Rosato", image: GEN_WINE },
  { id: "b-43", name: "House White Selections", description: "Selva Volpina Pinot Grigio / San Martino Sauvignon Blanc / Casa d'Ambra Falanghina", price: "$ 17", mainCategory: "Beverages", category: "Wine — House White", image: GEN_WINE },
  { id: "b-44", name: "House Red Selections", description: "Selva Volpina Cabernet Sauvignon / San Martino Pinot Nero / Le Coste Chianti / Produttori Di Manduria", price: "$ 17", mainCategory: "Beverages", category: "Wine — House Red", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop" },
  { id: "b-45", name: "White By Bottle", description: "Selections from $74 to $230 (Sauvignon Blanc, Gavi, Petit Chablis, Pouilly-Fume, Ornellaia)", price: "$ 74+", mainCategory: "Beverages", category: "Wine — White", image: GEN_WINE },
  { id: "b-46", name: "Red By Bottle", description: "Selections from $70 to $320 (Chianti, Barossa Shiraz, Barolo, Brunello di Montalcino, Amarone)", price: "$ 70+", mainCategory: "Beverages", category: "Wine — Red", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=800&auto=format&fit=crop" }
];
