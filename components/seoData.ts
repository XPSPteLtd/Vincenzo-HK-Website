export type SEOBlock = 
  | { type: 'heading'; level: number; content: string }
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[]; ordered: boolean };

export interface SEOArticle {
  id: string;
  title: string;
  blocks: SEOBlock[];
}

export const seoArticles: SEOArticle[] = [
  {
    "id": "vincenzocapuano.sg",
    "title": "Authentic Italian Pizza Restaurant",
    "blocks": [
      {
        "type": "heading",
        "level": 4,
        "content": "TASTE THE CONTEMPORARY PIZZA"
      },
      {
        "type": "heading",
        "level": 4,
        "content": "VINCENZO CAPUANO"
      },
      {
        "type": "heading",
        "level": 4,
        "content": "Who We Are?"
      },
      {
        "type": "text",
        "content": "Meet Vincenzo Capuano — Naples-born, fourth-generation pizzaiolo, and the man redefining Italy’s most iconic dish. Raised in a family where pizza was a way of life, Vincenzo turned heritage into innovation, blending tradition with bold creativity. Crowned “World Pizza Champion” and revered for his revolutionary ‘Cloud Pizza’ made with Caputo Nuvola flour, his pizzas are lighter, airier, and unforgettable. With accolades across Europe and fans from Tokyo to New York, he now brings his award-winning craft to Hong Kong. This isn’t just pizza — it’s the soul of Naples, elevated. One bite, and you’ll taste a legacy generations in the making"
      },
      {
        "type": "heading",
        "level": 4,
        "content": "Our Dough"
      },
      {
        "type": "text",
        "content": "Our pizza has a soft and light dough, made with the excellence of Caputo flour. Tasty, fragrant, irresistible & that’s what makes it unforgettable…"
      },
      {
        "type": "heading",
        "level": 4,
        "content": "Traditional Products"
      },
      {
        "type": "text",
        "content": "Our roots are deeply linked to tradition. Each dish is prepared following recipes handed down from generation to generation"
      },
      {
        "type": "heading",
        "level": 4,
        "content": "100% Neapolitan"
      },
      {
        "type": "text",
        "content": "Naples is the cradle of pizza, and we are proud to bring its tradition to the world. Every pizza is a journey into the heart of the Neapolitan city."
      },
      {
        "type": "heading",
        "level": 4,
        "content": "Waiting to Welcome You"
      },
      {
        "type": "heading",
        "level": 4,
        "content": "Timing"
      },
      {
        "type": "text",
        "content": "Lunch: 12:00 – 15:00\nLast Order for Lunch: 14:30\nLast Order for Drinks: 14:30"
      },
      {
        "type": "text",
        "content": "Dinner: 18:00 – 23:00\nLast Order for Dinner: 22:00\nLast Order for Drinks: 22:30"
      },
      {
        "type": "heading",
        "level": 4,
        "content": "Location"
      },
      {
        "type": "text",
        "content": "80 Mohamed Sultan Rd,\n #01-12 The Pier at Robertson, \nHong Kong 239013"
      }
    ]
  },
  {
    "id": "best-pizzeria-singapore",
    "title": "Best Pizzeria in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Discover Best Pizzeria in Hong Kong | Vincenzo Capuano"
      },
      {
        "type": "text",
        "content": "Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you."
      }
    ]
  },
  {
    "id": "contemporary-pizza",
    "title": "Contemporary Pizza in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Discover Contemporary Pizza in Hong Kong | Vincenzo Capuano"
      },
      {
        "type": "text",
        "content": "Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you."
      }
    ]
  },
  {
    "id": "menu",
    "title": "Menu | Vincenzo Capuano Hong Kong",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Discover Menu | Vincenzo Capuano Hong Kong"
      },
      {
        "type": "text",
        "content": "Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you."
      }
    ]
  },
  {
    "id": "napoli-pizza",
    "title": "Authentic Napoli Pizza in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Discover Authentic Napoli Pizza in Hong Kong | Vincenzo Capuano"
      },
      {
        "type": "text",
        "content": "Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you."
      }
    ]
  },
  {
    "id": "top-italian-pizzeria",
    "title": "Top Italian Pizzeria in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Discover Top Italian Pizzeria in Hong Kong | Vincenzo Capuano"
      },
      {
        "type": "text",
        "content": "Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you."
      }
    ]
  },
  {
    "id": "featured-in-media",
    "title": "Featured in Media | Vincenzo Capuano Hong Kong",
    "blocks": [
      {
        "type": "heading",
        "level": 4,
        "content": "Featured on:"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Discover Featured in Media | Vincenzo Capuano Hong Kong"
      },
      {
        "type": "text",
        "content": "Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you."
      }
    ]
  },
  {
    "id": "worlds-top-pizzeria-in-singapore",
    "title": "World’s Top Pizzeria in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "World’s top pizzeria in Hong Kong"
      },
      {
        "type": "text",
        "content": "Meet Vincenzo Capuano — Naples-born, fourth-generation pizzaiolo, and the man redefining Italy’s most iconic dish. Raised in a family where pizza was a way of life, Vincenzo turned heritage into innovation, blending tradition with bold creativity. Crowned “World Pizza Champion” and revered for his revolutionary ‘Cloud Pizza’ made with Caputo Nuvola flour, his pizzas are lighter, airier, and unforgettable. With accolades across Europe and fans from Tokyo to New York, he now brings his award-winning craft to Hong Kong. This isn’t just pizza — it’s the soul of Naples, elevated. One bite, and you’ll taste a legacy generations in the making"
      }
    ]
  },
  {
    "id": "best-italian-pizza-in-singapore",
    "title": "Best Italian Pizza in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Best Italian pizza in Hong Kong"
      },
      {
        "type": "text",
        "content": "Meet Vincenzo Capuano — Naples-born, fourth-generation pizzaiolo, and the man redefining Italy’s most iconic dish. Raised in a family where pizza was a way of life, Vincenzo turned heritage into innovation, blending tradition with bold creativity. Crowned “World Pizza Champion” and revered for his revolutionary ‘Cloud Pizza’ made with Caputo Nuvola flour, his pizzas are lighter, airier, and unforgettable. With accolades across Europe and fans from Tokyo to New York, he now brings his award-winning craft to Hong Kong. This isn’t just pizza — it’s the soul of Naples, elevated. One bite, and you’ll taste a legacy generations in the making"
      }
    ]
  },
  {
    "id": "celebrity-chef-pizza-in-singapore",
    "title": "Celebrity Chef Pizza in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Celebrity Chef Pizza in Hong Kong"
      },
      {
        "type": "text",
        "content": "Meet Vincenzo Capuano — Naples-born, fourth-generation pizzaiolo, and the man redefining Italy’s most iconic dish. Raised in a family where pizza was a way of life, Vincenzo turned heritage into innovation, blending tradition with bold creativity. Crowned “World Pizza Champion” and revered for his revolutionary ‘Cloud Pizza’ made with Caputo Nuvola flour, his pizzas are lighter, airier, and unforgettable. With accolades across Europe and fans from Tokyo to New York, he now brings his award-winning craft to Hong Kong. This isn’t just pizza — it’s the soul of Naples, elevated. One bite, and you’ll taste a legacy generations in the making"
      }
    ]
  },
  {
    "id": "best-singapore-pizza-place",
    "title": "Best Pizza Place in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Best Hong Kong Pizza place"
      },
      {
        "type": "text",
        "content": "Meet Vincenzo Capuano — Naples-born, fourth-generation pizzaiolo, and the man redefining Italy’s most iconic dish. Raised in a family where pizza was a way of life, Vincenzo turned heritage into innovation, blending tradition with bold creativity. Crowned “World Pizza Champion” and revered for his revolutionary ‘Cloud Pizza’ made with Caputo Nuvola flour, his pizzas are lighter, airier, and unforgettable. With accolades across Europe and fans from Tokyo to New York, he now brings his award-winning craft to Hong Kong. This isn’t just pizza — it’s the soul of Naples, elevated. One bite, and you’ll taste a legacy generations in the making"
      }
    ]
  },
  {
    "id": "10523-2",
    "title": "| Vincenzo Capuano | Hong KongVincenzo Capuano – Pizzeria",
    "blocks": [
      {
        "type": "heading",
        "level": 1,
        "content": "Vincenzo Capuano"
      },
      {
        "type": "text",
        "content": "where di pizza è meraviglioso"
      },
      {
        "type": "text",
        "content": "Making a living from pizza is wonderful."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "House Red Wine"
      },
      {
        "type": "text",
        "content": "Pinot Grigio IGP – 1/2 BTL, BTL"
      },
      {
        "type": "text",
        "content": "Pinot Nero Grillo Venesia DOC – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "text",
        "content": "Chianti Rufina DOCG – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "text",
        "content": "Primitivo IGP – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "House White Wine"
      },
      {
        "type": "text",
        "content": "Pinot Grigio IGP – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "text",
        "content": "Sauvignon Blanc – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "text",
        "content": "Chardonnay – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "text",
        "content": "Pinot Grigio Campania IGT – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Beer"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Tipples"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "Aperitivo"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "Spirits & Digestifs"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "Champagne"
      },
      {
        "type": "text",
        "content": "Rosé – GLS, 1/2 BTL, BTL"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "Non-Alcoholic"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "Sparkling Drinks & Water"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "🏆 The World Champion"
      },
      {
        "type": "text",
        "content": "Celebrating tradition and innovation in every bite. Our award-winning pizzas have been recognized globally for excellence in craftsmanship and taste."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "The Bestseller"
      },
      {
        "type": "text",
        "content": "A journey through taste and comfort, for those who love to be indulged from their very first bite."
      },
      {
        "type": "text",
        "content": "San Marzano sauce, fior di latte, evo & basil"
      },
      {
        "type": "text",
        "content": "San Marzano sauce, fior di latte, bufala mozzarella DOP, evo & basil"
      },
      {
        "type": "text",
        "content": "For lovers of Calabrian fiesta, smoked mozzarella DOP, Calabrian Nduja, Neapolitan sausage"
      },
      {
        "type": "text",
        "content": "San Marzano sauce, fior di latte, spicy Nduja, classic salami, according to nonno Enzo tradition, evo & basil"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "The Traditional"
      },
      {
        "type": "text",
        "content": "Smoked provola from the mountains, handcrafted San Marzano tomatoes, pepper mix, stracciatella, evo & basil"
      },
      {
        "type": "text",
        "content": "Handcrafted San Marzano tomatoes, fior di latte from the mountains, anchovies, capers, olives, evo & basil"
      },
      {
        "type": "text",
        "content": "San Marzano tomatoes, fresh mozzarella, artichoke hearts, roasted ham, evo & basil"
      },
      {
        "type": "text",
        "content": "Smoked Buffalo mozzarella, yellow cherry tomatoes, fior di latte, buffalo mozzarella DOP, pesto, evo & basil"
      },
      {
        "type": "text",
        "content": "Filled w/ ricotta cheese, nodule salami, cooked ham, al latte, homemade evo & basil pesto, evo & basil"
      },
      {
        "type": "text",
        "content": "Fresh mozzarella, extra virgin olive oil & fresh parmesan, lightly spiced"
      },
      {
        "type": "text",
        "content": "Smoked red delicious tomatoes, buffalo mozzarella DOP, topped w/ burrata heart, 24 month prosciutto di parma, pesto, evo & basil"
      },
      {
        "type": "text",
        "content": "Sfumicised cherry tomatoes, burrata olives, anchovies, garlic, oregano, evo & basil"
      },
      {
        "type": "text",
        "content": "Smoked mozzarella, fior di latte, black truffle, classic meatballs by nonno Enzo, pesto, evo & basil"
      },
      {
        "type": "text",
        "content": "Smoked provola, pepper roasted, yellow datterino tomatoes, Dattelino corn, piccino, evo & basil"
      },
      {
        "type": "text",
        "content": "Fior di latte, eggplant, roasted cherry tomatoes, pepper, pan-cooked cherry tomatoes, roasted cherry tomatoes, evo & basil"
      },
      {
        "type": "text",
        "content": "San Marzano sauce, tomatoes, topped w/ classic meatballs by nonno Enzo, pesto, evo & basil"
      },
      {
        "type": "text",
        "content": "8 takes inspiration from the Risperato di Gateau, fior di latte, smoked mozzarella, pan-cooked potato croquette, baked ham, evo & basil"
      },
      {
        "type": "text",
        "content": "Fresh w/ buffalo mozzarella DOP, baked tomatoes and neapolitan sausage, evo & basil topped w/ buffalo DOP chunks"
      },
      {
        "type": "text",
        "content": "Homemade courgette cream, aubergine, roasted red & white cheese, courgette, evo & basil"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Thin Crust Pizza"
      },
      {
        "type": "text",
        "content": "Butter roasted homemade coleslaw, cream, topped w/ gucchen chips, classic meatballs"
      },
      {
        "type": "text",
        "content": "Truffle cream on fior di latte, mushroom, truffle burrata, nodele, parmigiano"
      },
      {
        "type": "text",
        "content": "Fior di latte, basil pesto, cherry tomatoes, goccia burrata heart, gus nuts"
      },
      {
        "type": "text",
        "content": "Base w/ fior di latte, gorgonzola, provole, topped w/ gorgonzola, served with honey"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "The Starters"
      },
      {
        "type": "text",
        "content": "Truffle dusted fries, sautéed served w/ aioli and mayo"
      },
      {
        "type": "text",
        "content": "Pan-cooked wasyu meatballs, San Marzano, spicy herb tomato sauce"
      },
      {
        "type": "text",
        "content": "6 pieces fried buffalo wings with spicy sauce"
      },
      {
        "type": "text",
        "content": "3 pieces of fried neapolitan pizza dough – Croqueta cream & chis"
      },
      {
        "type": "text",
        "content": "Toasted french baguette bread with chili, tomatoes, parmesan & truffle"
      },
      {
        "type": "text",
        "content": "Homemade thin focaccia bread, served w/ basil pesto & anchovies"
      },
      {
        "type": "text",
        "content": "Cheeseclated eggplant, béchamel, fior di latte, parmigiano, basil"
      },
      {
        "type": "text",
        "content": "125g Burrata / 250g Burrata"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "The Pastas & Mains"
      },
      {
        "type": "text",
        "content": "Braised beef jowl, red wine, parmigiano"
      },
      {
        "type": "text",
        "content": "Spaghetti with guanciale, egg, cheese, parmigiano, pepper"
      },
      {
        "type": "text",
        "content": "Spaghetti with shrimp, garlic, cherry tomatoes, lobster bisque sauce, brandy"
      },
      {
        "type": "text",
        "content": "Signature spicy San Marzano sauce, basil"
      },
      {
        "type": "text",
        "content": "Potato gnocchi, signature spicy sauce, cherry tomatoes, cream, parmigiano, basil"
      },
      {
        "type": "text",
        "content": "Handmade porcini mushroom ravioli, truffle cream, sauce, oil, carrot"
      },
      {
        "type": "text",
        "content": "Linguine black garlic, white wine, evo"
      },
      {
        "type": "text",
        "content": "Slow-roasted Iberico pork ribs, house pickled, balsamic onions, red wine sauce, polenta"
      },
      {
        "type": "text",
        "content": "Grilled skewered beef tenderloin, roasted vegetables, cherry tomatoes, sauteed mushrooms, mustard, herbs, red wine sauce"
      },
      {
        "type": "text",
        "content": "Breaded chicken breast, topped with San Marzano ragù, parmesan, served w/ linguine al parmigiano, evo & basil"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "The Salads"
      },
      {
        "type": "text",
        "content": "Cherry tomatoes, baby spinach, rocket – 125g / 250g"
      },
      {
        "type": "text",
        "content": "Green kale, fresh mint, spicy walnuts, cherry tomatoes, croutons, feta cheese, shaved almonds"
      },
      {
        "type": "text",
        "content": "Baby romaine lettuce, grilled chicken breast, baked croutons, parmesan shaver almonds"
      },
      {
        "type": "text",
        "content": "Rocket, sun-dried tomato, burrata di Parma, mod panini, burrata shear almonds"
      },
      {
        "type": "text",
        "content": "Rocket, sun-dried tomato, parma prosciutto, mod panini, burrata shear almonds"
      },
      {
        "type": "text",
        "content": "Green kale, fresh mint, spicy tomatoes, croutons, feta cheese, shaved almonds"
      },
      {
        "type": "text",
        "content": "Burrata – Salad €26 / Burrata 125g €32 / Burrata 250g €52"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "The Sweets"
      },
      {
        "type": "text",
        "content": "Delecious creamed marsala, coffee & karuba"
      },
      {
        "type": "text",
        "content": "Creamy whipped creamed raspberry berries"
      },
      {
        "type": "text",
        "content": "Dense cheesecake topped with raspberry"
      },
      {
        "type": "text",
        "content": "Fried dough from Naples, topped w/ cinnamon sugar"
      },
      {
        "type": "text",
        "content": "Chocolate filled pastry filled, almond flour, topped with cinnamon sugar"
      },
      {
        "type": "text",
        "content": "Our dishes may contain allergens. Please inform our staff of any dietary restrictions or allergies."
      }
    ]
  },
  {
    "id": "10528-2",
    "title": "| Vincenzo Capuano | Hong KongVincenzo Capuano – Beverages & Wines",
    "blocks": [
      {
        "type": "heading",
        "level": 1,
        "content": "Vincenzo Capuano"
      },
      {
        "type": "text",
        "content": "Premium Beverages & Wine Selection"
      },
      {
        "type": "text",
        "content": "Curated spirits, wines, and exclusive cocktails crafted to elevate your experience"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Signature Cocktails"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Premium Beer"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Fine Spirits"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🥃Whiskeys"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🍋Gin"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "❄️Vodka"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🏝️Rum"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🌵Agave & Tequila"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🍯Bitters & Digestifs"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Specialty Coffee"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Premium Tea"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Premium Wine Collection"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "✨Prosecco"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🥂Champagne"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🌾House White Wines"
      },
      {
        "type": "text",
        "content": "Pinot Grigio Umbria IGT"
      },
      {
        "type": "text",
        "content": "Chardonnay Umbria IGT"
      },
      {
        "type": "text",
        "content": "Falanghina Campania IGT"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🍇House Red Wines"
      },
      {
        "type": "text",
        "content": "Pinot Nero delle Venezie DOC"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🌸Rosé Wines"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "⭐Premium White Wines"
      },
      {
        "type": "text",
        "content": "Giuseppe E Luigi – Sauvignon Blanc"
      },
      {
        "type": "text",
        "content": "Malborough Sauvignon Blanc"
      },
      {
        "type": "text",
        "content": "“Santa Gemma” Chardonnay"
      },
      {
        "type": "text",
        "content": "Zingari Bianco Toscana IGT"
      },
      {
        "type": "text",
        "content": "Pouilly-Fume Mademoiselle de T"
      },
      {
        "type": "heading",
        "level": 3,
        "content": "🏆Premium Red Wines"
      },
      {
        "type": "text",
        "content": "Quattro Venti Salice Salentino DOP"
      },
      {
        "type": "text",
        "content": "Cotes de Bourg Rouge Tradition"
      },
      {
        "type": "text",
        "content": "Montepulciano d’Abruzzo DOC"
      },
      {
        "type": "text",
        "content": "“Altimi” di Barbera DOC"
      },
      {
        "type": "text",
        "content": "Perricone Nero d’Avola"
      },
      {
        "type": "text",
        "content": "Rosso del Veronese IGT"
      },
      {
        "type": "text",
        "content": "Cotes du Rhone Villages Sablet"
      },
      {
        "type": "text",
        "content": "Chianti Classico DOCG"
      },
      {
        "type": "text",
        "content": "Chianti Rufina Riserva DOCG Villa Bossi"
      },
      {
        "type": "text",
        "content": "Saint-Emilion Grand Cru"
      },
      {
        "type": "text",
        "content": "Brunello di Montalcino DOCG"
      },
      {
        "type": "text",
        "content": "Ser Amerigo Toscana IGT"
      },
      {
        "type": "text",
        "content": "Amarone della Valpolicella “Paerno” DOCG"
      },
      {
        "type": "text",
        "content": "Pommard ‘Les Vaumuriens Hauts’"
      },
      {
        "type": "text",
        "content": "Nuits-Saint-Georges VV"
      },
      {
        "type": "text",
        "content": "Barolo Rocche dell’Annunziata DOCG"
      },
      {
        "type": "text",
        "content": "Amarone della Valpolicella Classico Riserva DOCG"
      },
      {
        "type": "text",
        "content": "Amarone della Valpolicella Riserva"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Refreshing Beverages"
      },
      {
        "type": "text",
        "content": "Still / Sparkling – Free Flow"
      },
      {
        "type": "text",
        "content": "where di pizza è meraviglioso"
      },
      {
        "type": "text",
        "content": "📍 Hong Kong | 🌐 vincenzocapuano.sg"
      },
      {
        "type": "text",
        "content": "All prices are in Hong Kong Dollars and subject to 10% service charge & prevailing GST"
      },
      {
        "type": "text",
        "content": "Follow us: 📱 Instagram • 🎵 TikTok • 👍 Facebook"
      },
      {
        "type": "text",
        "content": "Premium Cocktails • Fine Wines • Specialty Coffee • Curated Selection"
      }
    ]
  },
  {
    "id": "best-pizza-restaurant-in-singapore",
    "title": "Best Pizza Restaurant in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Experience Pizzeria Vincenzo Capuano"
      },
      {
        "type": "text",
        "content": "Hong Kong’s pizza scene just got a major upgrade with the arrival of Vincenzo Capuano, the world-renowned pizza master now serving up ultra-thin, contemporary Neapolitan pizzas at Robertson Quay. This isn’t just any pizza place, it’s the first Asian outpost of a global artisan pizza brand ranked No. 12 in the 50 Top World Artisan Pizza Chains."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Meet the Chef Behind the Magic"
      },
      {
        "type": "text",
        "content": "Vincenzo Capuano is a Naples-born, fourth-generation pizzaiolo celebrated worldwide for reinventing classic pizza. From being crowned World Champion of Contemporary Pizza to building a legion of fans across social media, Vincenzo brings passion, innovation, and authenticity to every pie. His signature approach combines family-rooted tradition with bold culinary creativity."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "What Makes This Pizza Stand Out"
      },
      {
        "type": "text",
        "content": "At this Hong Kong pizzeria, pizza isn’t just food it’s an experience:"
      },
      {
        "type": "list",
        "items": [
          "Cloud-like dough: Long-leavened and highly hydrated using specially crafted “Nuvola Super” flour, the crust is airy, soft, and beautifully textured.",
          "The Golden Scissors: Delivered to your table, these shiny scissors are a signature touch the crust is so delicate and light you cut the pizza instead of tearing it.",
          "Thin but flavourful: These pizzas are ultra-thin yet packed with character a distinctly contemporary take on Italian tradition."
        ],
        "ordered": false
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Signature Pizzas You Must Try"
      },
      {
        "type": "text",
        "content": "Here are some of the crowd favourites that keep diners coming back:"
      },
      {
        "type": "list",
        "items": [
          "Provola e Pepe – The award-winning signature pizza topped with smoked provola, roasted tomatoes, pepper and basil."
        ],
        "ordered": false
      },
      {
        "type": "list",
        "items": [
          "Tetti Illuminati – A standout choice with fior di latte, pecorino romano, pistachio, cream, basil and mortadella rich yet balanced."
        ],
        "ordered": false
      },
      {
        "type": "list",
        "items": [
          "Don Vincenzo & Napolitudine – Other creative flavours that showcase chef Vincenzo’s flair and inventiveness."
        ],
        "ordered": false
      },
      {
        "type": "text",
        "content": "Pair your pizza with starters like burrata, seasonal salads, house-made pasta or Italian desserts for a complete meal."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Ambience & Dining Experience"
      },
      {
        "type": "text",
        "content": "Located at 80 Mohamed Sultan Road, #01-12, The Pier at Robertson, this pizzeria offers a relaxed yet stylish setting for lunch or dinner with friends, family, or colleagues. Whether you’re a local foodie or a traveller chasing iconic eats, this is one pizza stop that truly delivers on both taste and story."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "What Diners Are Saying"
      },
      {
        "type": "text",
        "content": "Reviews highlight the airy, well-fermented crust and richly flavoured toppings. Many appreciate the playful tradition of the golden scissors and the approachable vibe, though occasional comments mention that pizzas can be thin and light compared to traditional Neapolitan styles."
      },
      {
        "type": "text",
        "content": "If you’re exploring the best pizza in Hong Kong, Vincenzo Capuano is a must-visit. It’s where artisan craftsmanship meets Italian heritage, a place where every pizza tells a story of passion, innovation, and the soul of Naples."
      }
    ]
  },
  {
    "id": "best-pizza-in-singapore",
    "title": "Best Pizza in Hong Kong, Pet Friendly Restaurant | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Best Pizza in Hong Kong – Why Vincenzo Capuano Tops the List"
      },
      {
        "type": "text",
        "content": "If you’re searching for the best pizza in Hong Kong, look no further. At Vincenzo Capuano, authentic Italian pizza isn’t just a meal — it’s an experience. Born from the pizza capital of the world, this award-winning pizzeria brings the soul of Naples straight to Robertson Quay."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "A Pizza Legend from Naples"
      },
      {
        "type": "text",
        "content": "World-champion pizzaiolo Vincenzo Capuano reimagines the classic Neapolitan pie with lighter, cloud-like dough and bold, flavour-forward toppings. With numerous global accolades and a reputation that stretches from Europe to Asia, this pizzeria quickly became one of Hong Kong’s most talked-about pizza destinations."
      },
      {
        "type": "text",
        "content": "Every pizza here reflects tradition, craftsmanship, and innovation — from the famous Golden Scissors Pizza to creative modern interpretations of classic favourites."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "What Makes Our Pizza the Best"
      },
      {
        "type": "text",
        "content": "Here’s why Vincenzo Capuano stands out in Hong Kong’s competitive pizza scene:"
      },
      {
        "type": "text",
        "content": "1. Authentic Neapolitan Craftsmanship: Using long-leavened, highly hydrated dough, pizzas are airy, chewy, and beautifully blistered — a true Neapolitan signature."
      },
      {
        "type": "text",
        "content": "2. Award-Winning Heritage: Ranked among the world’s top artisan pizza chains and led by a world champion, the pizzas here aren’t just food, they’re internationally recognised excellence."
      },
      {
        "type": "text",
        "content": "3. Elevated Dining Experience: From classic Margherita to signature creations with smoked cheeses and premium toppings, every pizza tells a story of flavour, balance, and passion."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Pet-Friendly Pizza Outings (Perfect for Fur Parents!)"
      },
      {
        "type": "text",
        "content": "Hong Kong’s dining scene is increasingly welcoming pets, especially in outdoor and alfresco areas and pizza culture is no exception. While specific pet policies vary by venue, many pizza spots in the city now offer outdoor seating where you can dine comfortably with your furry companion making pizza nights fun for the whole family."
      },
      {
        "type": "text",
        "content": "Enjoy crisp slices, wood-fired goodness, and local flavours with your pet by your side in nearby pet-friendly spots after your Vincenzo Capuano visit a perfect way to combine great food with quality time outdoors."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "A Riverside Favourite"
      },
      {
        "type": "text",
        "content": "Located along the scenic Robertson Quay, Vincenzo Capuano is the perfect blend of authentic Italian pizza and stylish Hong Kongan dining. Whether you’re after a casual lunch, dinner with friends, or a weekend pizza date, this is one of the city’s most talked-about pizza destinations."
      },
      {
        "type": "text",
        "content": "Food lovers praise the airy crust, delicious tomato sauce, and inviting atmosphere, calling it one of the must-try pizza experiences in Hong Kong."
      },
      {
        "type": "text",
        "content": "If pizza is your passion, this is a slice of Italy you won’t want to miss. From classic Neapolitan flavours to inventive favourites, Vincenzo Capuano delivers some of the best pizza in Hong Kong with every pie."
      },
      {
        "type": "text",
        "content": "Tip for pet parents: Pair your visit with a walk or picnic in a nearby pet-friendly outdoor café Hong Kong has plenty of great options where your furry friend can join you."
      }
    ]
  },
  {
    "id": "pet-friendly-dining-in-singapore",
    "title": "Pet",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Pet-Friendly Dining in Hong Kong"
      },
      {
        "type": "text",
        "content": "Dining out is even better when your four-legged companion can join you. At our restaurant, we believe great food and warm hospitality should be shared with everyone — including your pets. That’s why we welcome guests to enjoy a relaxed, pet-friendly dining experience while savoring authentic Neapolitan pizza crafted by world-renowned pizzaiolo Vincenzo Capuano."
      },
      {
        "type": "text",
        "content": "Meet Vincenzo Capuano — Naples-born, fourth-generation pizzaiolo, and the man redefining Italy’s most iconic dish. Raised in a family where pizza was a way of life, Vincenzo turned heritage into innovation, blending centuries-old tradition with bold creativity. Crowned World Pizza Champion, he is celebrated for his revolutionary Cloud Pizza, made with Caputo Nuvola flour, creating a crust that is lighter, airier, and incredibly flavorful."
      },
      {
        "type": "text",
        "content": "With accolades across Europe and devoted fans from Tokyo to New York, Vincenzo now brings his award-winning craft to Hong Kong — creating pizzas that honor the soul of Naples while embracing modern culinary artistry."
      },
      {
        "type": "text",
        "content": "Whether you’re meeting friends, enjoying a relaxed evening, or stopping by after a walk with your dog, our pet-friendly outdoor seating offers the perfect place to unwind. Here, great pizza, good company, and wagging tails are always welcome."
      },
      {
        "type": "text",
        "content": "This isn’t just pizza — it’s the soul of Naples, elevated.And now, it’s an experience you can share with your best companion."
      }
    ]
  },
  {
    "id": "order-pizza-online-in-singapore",
    "title": "Order Pizza Online in Hong Kong | Vincenzo Capuano",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "content": "Order Authentic Neapolitan Pizza Online in Hong Kong"
      },
      {
        "type": "text",
        "content": "Freshly wood-fired. Made with premium Italian ingredients. Delivered hot to your doorstep."
      },
      {
        "type": "list",
        "items": [
          "Fast delivery across Hong Kong",
          "Secure online payment",
          "Hand-stretched dough prepared daily"
        ],
        "ordered": false
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Experience Naples at Home"
      },
      {
        "type": "text",
        "content": "At Vincenzo Capuano Hong Kong, every pizza is crafted the traditional Neapolitan way, soft, airy crust, San Marzano tomatoes, creamy mozzarella, and baked in a blazing wood-fired oven."
      },
      {
        "type": "text",
        "content": "Now you can enjoy the same award-winning flavours without leaving your home."
      },
      {
        "type": "text",
        "content": "Whether it’s a quiet dinner, a family gathering, or a late-night craving authentic Italian pizza is just a few clicks away."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Customer Favourites"
      },
      {
        "type": "text",
        "content": "Margherita \nSan Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil.\nSimple. Classic. Perfect."
      },
      {
        "type": "text",
        "content": "Diavola\nSpicy Italian salami, mozzarella, tomato base, finished with olive oil.\nBold flavour with a gentle kick."
      },
      {
        "type": "text",
        "content": "Truffle Pizza\nCreamy base, mozzarella, mushrooms, black truffle drizzle.\nRich, indulgent, unforgettable."
      },
      {
        "type": "text",
        "content": "Burrata Special\nWood-fired base topped with fresh burrata and premium ingredients.\nCreamy luxury in every bite."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Delivered Fresh Across Hong Kong"
      },
      {
        "type": "text",
        "content": "We prepare your pizza only after you order."
      },
      {
        "type": "text",
        "content": "Estimated delivery time: 30–45 minutes\nCarefully packed to preserve heat and texture\nDelivery available across major Hong Kong districts"
      },
      {
        "type": "text",
        "content": "Fresh dough. Premium toppings. No shortcuts."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "How It Works"
      },
      {
        "type": "list",
        "items": [
          "Choose your favourite pizzas and sides",
          "Add to cart and complete secure payment",
          "Sit back while we prepare and deliver it hot"
        ],
        "ordered": true
      },
      {
        "type": "text",
        "content": "Ordering authentic Neapolitan pizza has never been easier."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Why Order From Us"
      },
      {
        "type": "list",
        "items": [
          "Traditional Neapolitan recipe",
          "Imported Italian ingredients",
          "Wood-fired at high temperature",
          "Handcrafted by skilled pizzaiolos",
          "Consistently rated among the best pizzas in Hong Kong",
          "This is not fast food, This is tradition, craftsmanship, and flavour"
        ],
        "ordered": false
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Perfect for Every Occasion"
      },
      {
        "type": "list",
        "items": [
          "Family dinners",
          "Date nights",
          "Office lunches",
          "Weekend gatherings",
          "Game nights"
        ],
        "ordered": false
      },
      {
        "type": "text",
        "content": "Make every moment better with authentic Italian pizza."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Secure & Easy Checkout"
      },
      {
        "type": "list",
        "items": [
          "Multiple payment options available]",
          "Safe and encrypted transactions",
          "Real-time order confirmation"
        ],
        "ordered": false
      },
      {
        "type": "text",
        "content": "Your food is prepared fresh and delivered with care."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Ready to Order?"
      },
      {
        "type": "text",
        "content": "Craving authentic Neapolitan pizza in Hong Kong?"
      },
      {
        "type": "text",
        "content": "Order online now and enjoy wood-fired perfection at home."
      }
    ]
  }
];
