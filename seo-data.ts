const BASE = 'https://vincenzocapuano.hk';

export interface PageSEO {
  en: { title: string; desc: string; keywords: string; image?: string; };
  hk: { title: string; desc: string; keywords: string; image?: string; };
  schema: Record<string, unknown> | null;
}

export const pageSEO: Record<string, PageSEO> = {
  '/': {
    en: {
      title: 'Best Pizza in Hong Kong | Vincenzo Capuano Pizza HK',
      desc: 'Looking for great pizza in Hong Kong? Enjoy authentic Neapolitan pizza at Vincenzo Capuano, one of the best pizza restaurants in the city. Visit today for an unforgettable taste!',
      keywords: 'pizzeria hong kong, neapolitan pizza hong kong, pizza restaurant hong kong, italian pizza hong kong, authentic pizza hong kong, contemporary neapolitan pizza hong kong, pizza in hong kong, artisan pizza hong kong, naples style pizza hong kong, premium pizza hong kong, best pizzeria in hong kong, best neapolitan pizza hong kong, pizza chef from naples, authentic neapolitan pizzeria, world top 50 pizza, world #13 pizza, world pizza champion restaurant hong kong, best restaurants hong kong, best restaurant wan chai, italian restaurant wan chai, dinner wan chai, restaurants hong kong, dinner near me hong kong',
    },
    hk: {
      title: 'Vincenzo Capuano | 香港當代拿坡里薄餅冠軍 | 全球第 13 名',
      desc: '在香港灣仔利東街體驗由世界冠軍 Vincenzo Capuano 帶來的當代拿坡里薄餅——全球第 13 名薄餅店，2022 年世界薄餅冠軍。',
      keywords: '香港薄餅店, 香港拿坡里薄餅, 香港披薩餐廳, 香港意大利餐廳 薄餅, 灣仔薄餅, 香港正宗拿坡里披薩, 當代拿坡里薄餅, 香港最佳薄餅店, 香港最佳拿坡里薄餅, 世界薄餅冠軍, 那不勒斯薄餅師傅, 全球第13名薄餅, 灣仔最好餐廳, 香港最佳餐廳, 灣仔意大利餐廳',
    },
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${BASE}/#organization`,
          name: 'Vincenzo Capuano',
          url: BASE,
          logo: {
            '@type': 'ImageObject',
            url: 'https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png',
            width: 512,
            height: 512
          },
          sameAs: [
            'https://www.instagram.com/vincenzocapuano.hk',
            'https://www.facebook.com/vincenzocapuano.hk'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${BASE}/#website`,
          url: BASE,
          name: 'Vincenzo Capuano Hong Kong',
          publisher: { '@id': `${BASE}/#organization` },
          potentialAction: {
            '@type': 'SearchAction',
            target: `${BASE}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'Restaurant',
          '@id': `${BASE}/#restaurant`,
          name: 'Vincenzo Capuano Hong Kong',
          url: BASE,
          telephone: '+852 9448 3165',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
            addressLocality: 'Wan Chai',
            addressRegion: 'Hong Kong',
            addressCountry: 'HK'
          }
        }
      ]
    },
  },

  '/menu': {
    en: {
      title: 'Vincenzo Capuano Menu Hong Kong | Authentic Pizza Menu HK',
      desc: 'Explore the Vincenzo Capuano restaurant menu in Hong Kong. Discover authentic Neapolitan pizza, Italian dishes, and a true Italian dining experience.',
      keywords: 'italian pizza hong kong, pizza menu hong kong, neapolitan pizza hong kong, wood fired pizza hong kong, authentic pizza hong kong, pizza restaurant hong kong, margherita pizza hong kong, bufala pizza hong kong, burrata pizza hong kong, diavola pizza hong kong, truffle pizza hong kong, vegetarian pizza hong kong, spicy salami pizza hong kong, napoli pizza hong kong, fresh mozzarella pizza hong kong',
    },
    hk: {
      title: '精選菜單 | Vincenzo Capuano 香港',
      desc: '查看我們的當代拿坡里薄餅精選菜單，包括瑪格麗特、布拉塔、Diavola 招牌薄餅及前菜甜品。',
      keywords: '香港薄餅菜單, 香港意大利薄餅, 香港拿坡里薄餅, 香港木烤薄餅, 瑪格麗特薄餅香港, 布拉塔薄餅香港, 素食薄餅香港, 松露薄餅香港, 那不勒斯薄餅菜單',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Menu',
      '@id': `${BASE}/menu#menu`,
      name: 'Vincenzo Capuano Hong Kong Menu',
      description: 'Contemporary Neapolitan pizza menu featuring signature pizzas, classics from Naples, and starters.',
      url: `${BASE}/menu`,
      hasMenuSection: [
        { '@type': 'MenuSection', name: 'Signature Pizzas', description: 'Our signature contemporary Neapolitan pizzas crafted with premium ingredients.' },
        { '@type': 'MenuSection', name: 'Classics from Naples', description: 'Timeless Neapolitan pizza classics rooted in Naples tradition.' },
        { '@type': 'MenuSection', name: 'Starters & Sharing', description: 'Starters and sharing plates to complement your pizza experience.' },
      ],
      inLanguage: 'en',
    },
  },

  '/contact': {
    en: {
      title: 'Contact Us | Vincenzo Capuano Pizza Hong Kong | Best Pizza HK',
      desc: 'Get in touch with Vincenzo Capuano Hong Kong. Contact us for general enquiries, group dining, birthday celebrations, and private events at our Wan Chai pizzeria.',
      keywords: 'contact vincenzo capuano hong kong, pizza wan chai, group dining wan chai, private events wan chai, birthday celebration wan chai, neapolitan pizza wan chai, italian restaurant wan chai, contact pizza restaurant hong kong, wanchai dining contact',
    },
    hk: {
      title: '聯絡我們 | Vincenzo Capuano 香港 | 灣仔當代拿坡里薄餅',
      desc: '聯絡 Vincenzo Capuano 香港分店。如有一般查詢、團體聚餐、生日慶祝或私人活動需求，歡迎與我們位於灣仔利東街的團隊聯絡。',
      keywords: '聯絡文森佐香港, 灣仔薄餅, 灣仔團體聚餐, 灣仔私人活動, 灣仔生日慶祝, 拿坡里薄餅灣仔, 灣仔意大利餐廳, 香港薄餅店聯絡, 灣仔餐廳查詢',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': `${BASE}/#restaurant`,
      name: 'Vincenzo Capuano Hong Kong',
      url: BASE,
      telephone: '+852-2802 2802',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
        addressLocality: 'Wan Chai',
        addressRegion: 'Hong Kong',
        addressCountry: 'HK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 22.276, longitude: 114.170 },
      hasMap: 'https://maps.app.goo.gl/YXNiZqsVJb7GVnMaA',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '23:00',
      },
      servesCuisine: ['Neapolitan Pizza', 'Contemporary Neapolitan', 'Italian'],
      priceRange: '$$',
    },
  },

  '/pizza-wan-chai-hong-kong': {
    en: {
      title: 'Best Neapolitan Pizza in Wan Chai | Vincenzo Capuano Hong Kong',
      desc: 'Looking for authentic Neapolitan pizza in Wan Chai, Hong Kong? Discover Vincenzo Capuano — a contemporary pizzeria rooted in Naples and crafted for modern dining.',
      keywords: 'pizza wan chai hong kong, neapolitan pizza wan chai, italian restaurant wan chai hong kong, pizza near lee tung avenue, wan chai pizzeria, pizza near wan chai mtr, authentic pizza wan chai, best pizza in wan chai, pizza dinner wan chai, date night pizza wan chai, family pizza restaurant hong kong, pizza restaurant hong kong, pizza wanchai, pizza hk, pizza bar wan chai, napoli pizza hong kong, pizza hong kong',
    },
    hk: {
      title: '灣仔拿坡里薄餅 | Vincenzo Capuano 香港',
      desc: '在灣仔尋找正宗拿坡里薄餅？探索 Vincenzo Capuano——源自那不勒斯的當代薄餅店，位於利東街。',
      keywords: '灣仔薄餅, 灣仔意大利餐廳, 灣仔拿坡里薄餅, 利東街薄餅店, 灣仔站薄餅, 灣仔最佳薄餅, 灣仔薄餅晚餐, 灣仔約會薄餅, 灣仔薄餅外賣, 香港薄餅店灣仔',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': `${BASE}/pizza-wan-chai-hong-kong#restaurant`,
      name: 'Vincenzo Capuano — Neapolitan Pizza in Wan Chai, Hong Kong',
      url: `${BASE}/pizza-wan-chai-hong-kong`,
      telephone: '+852-2802 2802',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
        addressLocality: 'Wan Chai',
        addressRegion: 'Hong Kong',
        addressCountry: 'HK',
      },
      servesCuisine: ['Neapolitan Pizza', 'Contemporary Neapolitan', 'Italian'],
      hasMap: 'https://maps.app.goo.gl/YXNiZqsVJb7GVnMaA',
    },
  },

  '/reservations': {
    en: {
      title: 'Book a Table | Pizza Reservation Hong Kong | Vincenzo Capuano',
      desc: 'Reserve your table at Vincenzo Capuano Hong Kong for contemporary Neapolitan pizza, date nights, group dining, and authentic Italian hospitality.',
      keywords: 'pizza reservation hong kong, book pizza restaurant hong kong, italian restaurant reservation hong kong, pizza dinner hong kong, pizza date night hong kong, group dining pizza hong kong, reserve italian restaurant hong kong, casual italian dining hong kong, family pizza restaurant hong kong, pizza lunch hong kong',
    },
    hk: {
      title: '訂座 | 香港薄餅預訂 | Vincenzo Capuano',
      desc: '在灣仔 Vincenzo Capuano 預訂餐桌，享用當代拿坡里薄餅、約會晚餐、團體聚餐及正宗意式款待。',
      keywords: '香港薄餅訂座, 預訂薄餅餐廳香港, 香港意大利餐廳預訂, 灣仔薄餅訂座, 香港薄餅約會晚餐, 香港團體薄餅訂座',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FoodEstablishment',
      '@id': `${BASE}/reservations#foodestablishment`,
      name: 'Vincenzo Capuano Hong Kong',
      url: `${BASE}/reservations`,
      reservationUrl: 'https://www.sevenrooms.com/reservations/vincenzocapuanohk',
      telephone: '+852-2802 2802',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
        addressLocality: 'Wan Chai',
        addressRegion: 'Hong Kong',
        addressCountry: 'HK',
      },
      servesCuisine: ['Neapolitan Pizza', 'Contemporary Neapolitan', 'Italian'],
    },
  },

  '/our-story': {
    en: {
      title: 'Our Story | Vincenzo Capuano Hong Kong | Pizza Chef from Naples',
      desc: 'Discover the story behind Vincenzo Capuano — a contemporary Neapolitan pizza experience rooted in family tradition, Naples heritage, and modern craftsmanship.',
      keywords: 'pizza chef from naples, authentic neapolitan pizzeria, contemporary neapolitan pizza, third generation pizza chef, pizza heritage naples, italian pizza chef hong kong, naples pizza experience, vincenzo capuano story, best neapolitan pizza hong kong, artisan pizza hong kong',
    },
    hk: {
      title: '我們的故事 | Vincenzo Capuano 香港 | 來自那不勒斯的薄餅師傅',
      desc: '探索 Vincenzo Capuano 背後的故事——植根於家族傳統、那不勒斯遺產和現代工藝的當代拿坡里薄餅體驗。',
      keywords: '拿坡里薄餅師傅, 那不勒斯薄餅傳承, 當代拿坡里薄餅, 意大利薄餅大廚香港, 世界薄餅冠軍, 第三代薄餅師傅, 香港薄餅師傅',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      '@id': `${BASE}/our-story#aboutpage`,
      url: `${BASE}/our-story`,
      name: 'Our Story | Vincenzo Capuano Hong Kong',
      about: {
        '@type': 'Person',
        name: 'Vincenzo Capuano',
        jobTitle: '2022 World Pizza Champion & Head Chef',
        description: 'Third-generation Neapolitan pizza maker from Naples, Italy, and 2022 World Pizza Champion. Pioneer of the contemporary Neapolitan pizza movement.',
        birthPlace: { '@type': 'Place', name: 'Naples, Italy' },
        worksFor: { '@type': 'Restaurant', name: 'Vincenzo Capuano Hong Kong', url: BASE },
      },
    },
  },

  '/faq': {
    en: {
      title: 'FAQ | Neapolitan Pizza Hong Kong | Vincenzo Capuano',
      desc: 'Common questions about Neapolitan pizza, reservations, the menu, and dining at Vincenzo Capuano — contemporary Neapolitan pizzeria in Wan Chai, Hong Kong.',
      keywords: 'neapolitan pizza hong kong, what is neapolitan pizza, authentic pizza hong kong, pizza reservation hong kong, vegetarian pizza hong kong, italian restaurant hong kong, pizza restaurant hong kong, group dining pizza hong kong, best neapolitan pizza hong kong, where to eat neapolitan pizza in hong kong',
    },
    hk: {
      title: '常見問題 | 香港拿坡里薄餅 | Vincenzo Capuano',
      desc: '關於當代拿坡里薄餅、訂座、菜單及在灣仔 Vincenzo Capuano 用餐體驗的常見問題解答。',
      keywords: '香港拿坡里薄餅, 什麼是拿坡里薄餅, 香港薄餅訂座, 素食薄餅香港, 香港意大利餐廳, 香港薄餅店, 灣仔薄餅訂座',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is contemporary Neapolitan pizza?',
          acceptedAnswer: { '@type': 'Answer', text: 'Contemporary Neapolitan pizza is an evolution of traditional Neapolitan pizza pioneered by chefs like Vincenzo Capuano. It uses high-hydration dough fermented for 36+ hours, creating a dramatically airy, cloud-like cornicione crust while staying true to the Naples tradition of simple, premium ingredients.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need a reservation at Vincenzo Capuano Hong Kong?',
          acceptedAnswer: { '@type': 'Answer', text: 'Reservations are strongly recommended, especially on weekends. You can book online at vincenzocapuano.hk/reservations or call +852-2802 2802. We also reserve 30% of seating for walk-in guests.' },
        },
        {
          '@type': 'Question',
          name: 'Is Vincenzo Capuano Hong Kong good for group dining?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our space is well-suited for group dining, birthday dinners, and celebrations. Pizza is naturally designed for sharing, and we can accommodate groups of various sizes. Contact us in advance for larger group bookings.' },
        },
        {
          '@type': 'Question',
          name: 'Do you serve vegetarian pizza?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer several vegetarian pizza options including Margherita and Bufala. All dietary information is clearly indicated on our menu.' },
        },
        {
          '@type': 'Question',
          name: 'Where is Vincenzo Capuano located in Wan Chai?',
          acceptedAnswer: { '@type': 'Answer', text: 'We are located at Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East, Wan Chai, Hong Kong. The nearest MTR station is Wan Chai Station, Exit D — approximately a 5-minute walk.' },
        },
        {
          '@type': 'Question',
          name: 'What are your opening hours?',
          acceptedAnswer: { '@type': 'Answer', text: 'We are open 7 days a week from 12:00 to 23:00 (noon to 11pm).' },
        },
      ],
    },
  },

  '/group-dining': {
    en: {
      title: 'Pizza Dining Hong Kong | Best Group Dining Pizza',
      desc: 'Enjoy the best pizza dining experience in Hong Kong. Perfect for groups, parties, and events at a top pizza restaurant near you. Book now!',
      keywords: 'group dining pizza hong kong, private dining italian restaurant hong kong, pizza party venue hong kong, birthday dinner pizza hong kong, casual private dining hong kong, pizza restaurant for groups hong kong, celebration dining hong kong, best pizza for sharing hong kong, family pizza restaurant hong kong, pizza dinner hong kong',
    },
    hk: {
      title: '團體用餐及私人活動 | Vincenzo Capuano 香港',
      desc: '在灣仔 Vincenzo Capuano 舉辦生日宴、慶祝活動及團體晚餐——專為分享而設的當代拿坡里薄餅目的地。',
      keywords: '香港團體薄餅用餐, 香港私人意大利餐廳, 香港薄餅派對場地, 香港生日薄餅晚餐, 香港分享薄餅, 香港薄餅晚餐, 灣仔團體用餐',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FoodEstablishment',
      '@id': `${BASE}/group-dining#foodestablishment`,
      name: 'Vincenzo Capuano Hong Kong — Group Dining & Private Events',
      url: `${BASE}/group-dining`,
      telephone: '+852-2802 2802',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
        addressLocality: 'Wan Chai',
        addressRegion: 'Hong Kong',
        addressCountry: 'HK',
      },
      servesCuisine: ['Neapolitan Pizza', 'Contemporary Neapolitan', 'Italian'],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Group Dining', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Private Events', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Birthday Celebrations', value: true },
      ],
    },
  },

  '/what-is-neapolitan-pizza': {
    en: {
      title: 'What Is Neapolitan Pizza? | Vincenzo Capuano Hong Kong',
      desc: 'Learn what makes Neapolitan pizza unique — from its Naples origins to the contemporary evolution pioneered by Vincenzo Capuano.',
      keywords: 'what is neapolitan pizza, authentic neapolitan pizza, contemporary neapolitan pizza, pizza from naples, neapolitan crust, cornicione pizza, neapolitan pizza hong kong, pizza napoletana, authentic pizza hong kong, pizza heritage naples',
    },
    hk: {
      title: '什麼是拿坡里薄餅？| Vincenzo Capuano 香港',
      desc: '了解拿坡里薄餅的獨特之處——從其那不勒斯起源到 Vincenzo Capuano 引領的當代演進。',
      keywords: '什麼是拿坡里薄餅, 正宗拿坡里薄餅, 當代拿坡里薄餅, 那不勒斯薄餅, 薄餅麵皮, 香港拿坡里薄餅, 拿坡里薄餅特色',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${BASE}/what-is-neapolitan-pizza#article`,
      headline: 'What Is Neapolitan Pizza?',
      description: 'Learn what makes Neapolitan pizza unique — from its Naples origins to the contemporary evolution pioneered by Vincenzo Capuano.',
      url: `${BASE}/what-is-neapolitan-pizza`,
      datePublished: '2026-04-01T12:00:00+08:00',
      dateModified: '2026-04-01T12:00:00+08:00',
      image: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png`,
      author: { '@type': 'Person', name: 'Vincenzo Capuano', url: `${BASE}/our-story` },
      publisher: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE, logo: { '@type': 'ImageObject', url: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png` } },
      inLanguage: 'en',
    },
  },

  '/contemporary-neapolitan-pizza-hong-kong': {
    en: {
      title: 'Contemporary Neapolitan Pizza in Hong Kong | Vincenzo Capuano',
      desc: 'Why contemporary Neapolitan pizza is finding a place in Hong Kong — and how Vincenzo Capuano is leading that movement in Wan Chai.',
      keywords: 'contemporary neapolitan pizza hong kong, authentic pizza hong kong, neapolitan pizza hong kong, modern pizza naples, best neapolitan pizza hong kong, artisan pizza hong kong, pizza wan chai, pizza in hong kong, pizza restaurant hong kong',
    },
    hk: {
      title: '香港當代拿坡里薄餅 | Vincenzo Capuano',
      desc: '為什麼當代拿坡里薄餅在香港興起——以及 Vincenzo Capuano 如何在灣仔引領這一潮流。',
      keywords: '香港當代拿坡里薄餅, 香港正宗薄餅, 香港拿坡里薄餅, 現代拿坡里薄餅, 灣仔當代薄餅, 香港薄餅餐廳',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${BASE}/contemporary-neapolitan-pizza-hong-kong#article`,
      headline: 'Why Contemporary Neapolitan Pizza Is Finding a Place in Hong Kong',
      description: 'Why contemporary Neapolitan pizza is finding a place in Hong Kong — and how Vincenzo Capuano is leading that movement in Wan Chai.',
      url: `${BASE}/contemporary-neapolitan-pizza-hong-kong`,
      datePublished: '2026-04-01T12:00:00+08:00',
      dateModified: '2026-04-01T12:00:00+08:00',
      image: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png`,
      author: { '@type': 'Person', name: 'Vincenzo Capuano', url: `${BASE}/our-story` },
      publisher: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE, logo: { '@type': 'ImageObject', url: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png` } },
      inLanguage: 'en',
    },
  },

  '/why-we-cut-pizza-with-scissors': {
    en: {
      title: 'Why We Cut Pizza with Scissors | Vincenzo Capuano Hong Kong',
      desc: 'The golden scissors ritual explained — why cutting Neapolitan pizza with scissors preserves the cloud-like cornicione crust.',
      keywords: 'why cut pizza with scissors, pizza scissors tradition, neapolitan pizza ritual, cornicione pizza, golden scissors pizza, pizza cutting technique naples, nuvola crust pizza, neapolitan pizza hong kong, contemporary neapolitan pizza, authentic neapolitan pizza',
    },
    hk: {
      title: '為什麼我們用剪刀切薄餅 | Vincenzo Capuano 香港',
      desc: '黃金剪刀儀式解析——為什麼用剪刀切拿坡里薄餅能保護如雲朵般的 cornicione 麵皮。',
      keywords: '剪刀切薄餅, 拿坡里薄餅傳統, 薄餅切割技巧, 黃金剪刀薄餅, 拿坡里薄餅文化, 香港薄餅師傅, 當代拿坡里薄餅',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${BASE}/why-we-cut-pizza-with-scissors#article`,
      headline: 'Why We Cut Pizza with Scissors',
      description: 'The golden scissors ritual explained — why cutting Neapolitan pizza with scissors preserves the cloud-like cornicione crust.',
      url: `${BASE}/why-we-cut-pizza-with-scissors`,
      datePublished: '2026-04-01T12:00:00+08:00',
      dateModified: '2026-04-01T12:00:00+08:00',
      image: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png`,
      author: { '@type': 'Person', name: 'Vincenzo Capuano', url: `${BASE}/our-story` },
      publisher: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE, logo: { '@type': 'ImageObject', url: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png` } },
      inLanguage: 'en',
    },
  },

  '/best-pizza-for-sharing-hong-kong': {
    en: {
      title: 'Best Pizza for Sharing in Hong Kong | Vincenzo Capuano',
      desc: 'Why pizza is one of the best meals for sharing in Hong Kong — and how to make the most of your group dining experience at Vincenzo Capuano Wan Chai.',
      keywords: 'best pizza for sharing hong kong, pizza dinner hong kong, group dining pizza hong kong, date night pizza hong kong, sharing pizza hong kong, family pizza restaurant hong kong, pizza lunch hong kong, pizza in hong kong, authentic pizza hong kong, contemporary neapolitan pizza hong kong',
    },
    hk: {
      title: '香港最佳分享薄餅 | Vincenzo Capuano',
      desc: '為什麼薄餅是香港最適合分享的美食之一——以及如何在 Vincenzo Capuano 灣仔充分享受團體用餐體驗。',
      keywords: '香港分享薄餅, 香港薄餅晚餐, 香港團體薄餅用餐, 香港約會薄餅, 香港薄餅店, 當代拿坡里薄餅, 灣仔分享薄餅',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${BASE}/best-pizza-for-sharing-hong-kong#article`,
      headline: 'Why Pizza Is One of the Best Meals for Sharing in Hong Kong',
      description: 'Why pizza is one of the best meals for sharing in Hong Kong — and how to make the most of your group dining experience at Vincenzo Capuano Wan Chai.',
      url: `${BASE}/best-pizza-for-sharing-hong-kong`,
      datePublished: '2026-04-01T12:00:00+08:00',
      dateModified: '2026-04-01T12:00:00+08:00',
      image: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png`,
      author: { '@type': 'Person', name: 'Vincenzo Capuano', url: `${BASE}/our-story` },
      publisher: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE, logo: { '@type': 'ImageObject', url: `https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png` } },
      inLanguage: 'en',
    },
  },

  '/best-restaurant-wan-chai': {
    en: {
      title: 'Best Restaurant in Wan Chai | Award-Winning Italian Dining | Vincenzo Capuano',
      desc: 'Looking for the best restaurant in Wan Chai? Vincenzo Capuano — World #13 Pizzeria, founded by 2022 World Pizza Champion — is Wan Chai\'s most acclaimed dining destination.',
      keywords: 'best restaurant wan chai, best restaurants hong kong, restaurants wan chai, italian restaurant wan chai, dinner wan chai, restaurants near me hong kong, best restaurants in hong kong, dinner near me hong kong, award-winning restaurant hong kong, wan chai dining, wan chai restaurant, italian dining hong kong, where to eat wan chai, best italian restaurant hong kong, wan chai dinner, top restaurant wan chai, world top 50 pizza hong kong, world pizza champion restaurant, neapolitan pizza restaurant hong kong',
    },
    hk: {
      title: '灣仔最好的餐廳 | 獲獎意大利餐廳 | Vincenzo Capuano',
      desc: '尋找灣仔最好的餐廳？Vincenzo Capuano——全球第 13 名薄餅店，由 2022 年世界薄餅冠軍創立——是灣仔最受好評的美食目的地。',
      keywords: '灣仔最好餐廳, 香港最佳餐廳, 灣仔餐廳, 灣仔意大利餐廳, 灣仔晚餐, 香港附近餐廳, 香港最佳餐廳, 灣仔美食, 世界冠軍薄餅店香港, 灣仔意大利餐飲, 灣仔用餐, 香港最好意大利餐廳, 香港獲獎餐廳',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': `${BASE}/best-restaurant-wan-chai#restaurant`,
      name: 'Vincenzo Capuano — Best Restaurant in Wan Chai',
      description: 'World #13 Pizzeria. Award-winning contemporary Neapolitan pizza restaurant in Wan Chai, Hong Kong, founded by 2022 World Pizza Champion Vincenzo Capuano.',
      url: `${BASE}/best-restaurant-wan-chai`,
      telephone: '+852-2802 2802',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
        addressLocality: 'Wan Chai',
        addressRegion: 'Hong Kong',
        addressCountry: 'HK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 22.276, longitude: 114.170 },
      hasMap: 'https://maps.app.goo.gl/YXNiZqsVJb7GVnMaA',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '23:00',
      },
      servesCuisine: ['Neapolitan Pizza', 'Contemporary Neapolitan', 'Italian'],
      priceRange: '$$',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '120' },
      award: 'World #13 Pizzeria — Top 50 Pizza',
    },
  },

  '/pizza-near-me-hong-kong': {
    en: {
      title: 'Pizza Near Me in Hong Kong | Order Pizza Wan Chai | Vincenzo Capuano',
      desc: 'Looking for pizza near you in Hong Kong? Vincenzo Capuano in Wan Chai serves world-ranked Neapolitan pizza for dine-in, collection, and delivery. Call +852-2802 2802.',
      keywords: 'pizza near me hong kong, pizza hong kong, pizza wan chai, pizza wanchai, pizzeria hong kong, pizza hk, pizza bar hong kong, pizza delivery hong kong, pizza takeaway hong kong, pizza 外賣 hong kong, pizza 外賣 電話 hong kong, pizza near wan chai mtr, neapolitan pizza near me, best pizza near me hong kong, pizza restaurant near me, order pizza hong kong, pizza collection wan chai, napoli pizza near me',
    },
    hk: {
      title: '香港附近薄餅 | 灣仔薄餅外賣 & 堂食 | Vincenzo Capuano',
      desc: '在香港尋找附近薄餅？灣仔 Vincenzo Capuano 提供世界第 13 名當代拿坡里薄餅——堂食、外賣自取及外送。薄餅外賣電話：+852-2802 2802。',
      keywords: '香港附近薄餅, 灣仔薄餅, 薄餅外賣香港, 薄餅外賣 電話, 香港薄餅外賣, 灣仔薄餅外賣, 香港薄餅店, 薄餅外送香港, 香港薄餅自取, 灣仔外賣薄餅, 香港披薩外賣, 拿坡里薄餅外賣香港',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': `${BASE}/pizza-near-me-hong-kong#restaurant`,
      name: 'Vincenzo Capuano — Pizza Near You in Wan Chai, Hong Kong',
      description: 'World #13 Neapolitan pizza restaurant in Wan Chai offering dine-in, pizza collection, and delivery in Hong Kong.',
      url: `${BASE}/pizza-near-me-hong-kong`,
      telephone: '+852-2802 2802',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
        addressLocality: 'Wan Chai',
        addressRegion: 'Hong Kong',
        addressCountry: 'HK',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 22.276, longitude: 114.170 },
      hasMap: 'https://maps.app.goo.gl/YXNiZqsVJb7GVnMaA',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '23:00',
      },
      servesCuisine: ['Neapolitan Pizza', 'Contemporary Neapolitan', 'Italian'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pizza Ordering Options',
        itemListElement: [
          { '@type': 'Offer', name: 'Dine In', url: `${BASE}/reservations` },
          { '@type': 'Offer', name: 'Pizza Collection / Takeaway', description: 'Call +852-2802 2802 to arrange collection' },
          { '@type': 'Offer', name: 'Pizza Delivery', description: 'Available via delivery partners in Hong Kong' },
        ],
      },
    },
  },

  '/best-neapolitan-pizza-hong-kong': {
    en: {
      title: 'Best Neapolitan Pizza Hong Kong | Vincenzo Capuano',
      desc: 'Vincenzo Capuano is Hong Kong\'s best Neapolitan pizza — world champion credentials, airy cornicione crust, and authentic Naples flavour in Wan Chai.',
      keywords: 'best neapolitan pizza hong kong, authentic italian pizza hong kong, world champion pizza hk, airy crust pizza hong kong, vincenzo capuano hong kong, pizza restaurant wan chai, best pizza in hong kong, naples style pizza hk, contemporary neapolitan pizza hong kong',
    },
    hk: {
      title: '香港最佳拿坡里薄餅 | Vincenzo Capuano 灣仔',
      desc: 'Vincenzo Capuano 是香港最佳拿坡里薄餅——世界冠軍認可、輕盈 cornicione 麵皮、正宗那不勒斯風味，盡在灣仔。',
      keywords: '香港最佳拿坡里薄餅, 香港正宗意大利薄餅, 香港世界冠軍薄餅, 香港輕盈麵皮薄餅, 灣仔薄餅餐廳, 香港最佳薄餅, 那不勒斯風格薄餅',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${BASE}/best-neapolitan-pizza-hong-kong#article`,
      url: `${BASE}/best-neapolitan-pizza-hong-kong`,
      headline: 'Best Neapolitan Pizza in Hong Kong: Why Vincenzo Capuano Is Going Viral',
      description: 'Discover why Vincenzo Capuano is widely regarded as the best Neapolitan pizza in Hong Kong — airy crust, world champion credentials, and authentic Naples flavour in Wan Chai.',
      datePublished: '2026-06-02T12:00:00+08:00',
      dateModified: '2026-06-02T12:00:00+08:00',
      author: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE },
      publisher: {
        '@type': 'Organization',
        name: 'Vincenzo Capuano Hong Kong',
        url: BASE,
        logo: { '@type': 'ImageObject', url: 'https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/best-neapolitan-pizza-hong-kong` },
      about: { '@type': 'Restaurant', name: 'Vincenzo Capuano Hong Kong', url: BASE },
      keywords: 'best neapolitan pizza hong kong, world champion pizza, airy crust pizza, authentic neapolitan, contemporary neapolitan pizza hong kong',
    },
  },

  '/vincenzo-capuano-hong-kong-review': {
    en: {
      title: 'Vincenzo Capuano Hong Kong Review | World Champion',
      desc: 'Vincenzo Capuano Hong Kong review: world champion pizza, airy Neapolitan crust, and the famous scissors presentation — what to expect in Wan Chai.',
      keywords: 'vincenzo capuano hong kong, hong kong pizza review, viral pizza hong kong, italian restaurant hong kong, luxury pizza hong kong, contemporary neapolitan pizza, best italian food hk, pizza scissors presentation, vincenzo capuano review',
    },
    hk: {
      title: 'Vincenzo Capuano 香港評論 | 世界冠軍薄餅',
      desc: 'Vincenzo Capuano 香港評論：世界冠軍薄餅、輕盈拿坡里麵皮、標誌性剪刀呈現——帶你了解灣仔這家必到餐廳的一切。',
      keywords: '灣仔薄餅評論, 香港病毒式薄餅, 香港意大利餐廳評論, 香港奢華薄餅, 當代拿坡里薄餅評論, 香港最佳意大利美食, 薄餅剪刀呈現',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      '@id': `${BASE}/vincenzo-capuano-hong-kong-review#review`,
      url: `${BASE}/vincenzo-capuano-hong-kong-review`,
      name: 'Vincenzo Capuano Hong Kong Review',
      reviewBody: 'An editorial review of Vincenzo Capuano Hong Kong, covering the pizza quality, the scissors-and-stand presentation, the world champion story, and what to order on your first visit.',
      datePublished: '2026-06-02T12:00:00+08:00',
      author: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE },
      publisher: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE },
      itemReviewed: {
        '@type': 'Restaurant',
        name: 'Vincenzo Capuano Hong Kong',
        url: BASE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Lee Tung Avenue, GF Unit 01 04 05, 200 Queens Road East',
          addressLocality: 'Wan Chai',
          addressRegion: 'Hong Kong',
          addressCountry: 'HK',
        },
        servesCuisine: ['Contemporary Neapolitan Pizza', 'Italian'],
      },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
    },
  },

  '/best-pizza-restaurants-hong-kong': {
    en: {
      title: 'Top 10 Best Pizza Restaurants in Hong Kong (2026)',
      desc: 'The best pizza restaurants in Hong Kong for 2026 — from world-class Neapolitan at Vincenzo Capuano to NY-style slices, ranked for every pizza lover.',
      keywords: 'best pizza restaurants hong kong, best pizza hong kong, authentic neapolitan pizza, artisan pizza restaurant, italian wood fired pizza, world champion pizza, viral italian pizza, luxury italian restaurant hong kong, pizza guide hong kong 2026',
    },
    hk: {
      title: '香港十大最佳薄餅餐廳 2026 年指南',
      desc: '2026 年香港最佳薄餅餐廳指南——從 Vincenzo Capuano 的世界級拿坡里薄餅到紐約風格，為每位薄餅愛好者排名推薦。',
      keywords: '香港最佳薄餅餐廳, 香港最佳薄餅, 正宗拿坡里薄餅, 手工薄餅餐廳, 意大利柴燒薄餅, 世界冠軍薄餅, 香港奢華意大利餐廳, 香港薄餅指南 2026',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${BASE}/best-pizza-restaurants-hong-kong#article`,
      url: `${BASE}/best-pizza-restaurants-hong-kong`,
      headline: 'Top 10 Best Pizza Restaurants in Hong Kong (2026 Guide)',
      description: 'A complete guide to the best pizza restaurants in Hong Kong in 2026, covering every style and occasion.',
      datePublished: '2026-06-02T12:00:00+08:00',
      dateModified: '2026-06-02T12:00:00+08:00',
      author: { '@type': 'Organization', name: 'Vincenzo Capuano Hong Kong', url: BASE },
      publisher: {
        '@type': 'Organization',
        name: 'Vincenzo Capuano Hong Kong',
        url: BASE,
        logo: { '@type': 'ImageObject', url: 'https://storage.googleapis.com/xps-assets/gotti%27s%20assets%20/BRAND%20ASSETS/vincenzo/LOGO-CAPUANO-white.png' },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/best-pizza-restaurants-hong-kong` },
      about: {
        '@type': 'ItemList',
        name: 'Best Pizza Restaurants in Hong Kong',
        numberOfItems: 10,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Vincenzo Capuano Hong Kong', url: BASE },
        ],
      },
      keywords: 'best pizza restaurants hong kong, neapolitan pizza, artisan pizza, italian pizza hong kong, pizza guide 2026',
    },
  },

  '/vincenzo-capuano-story': {
    en: {
      title: 'The Vincenzo Capuano Story | Pizza Chef from Naples',
      desc: 'The story of a third-generation pizza chef from Naples and 2022 World Pizza Champion who brought contemporary Neapolitan pizza to Hong Kong.',
      keywords: 'pizza chef from naples, third generation pizza chef, pizza heritage naples, authentic neapolitan pizzeria, vincenzo capuano story, world pizza champion, naples pizza tradition, contemporary neapolitan pizza, artisan pizza hong kong, italian pizza chef hong kong',
    },
    hk: {
      title: 'Vincenzo Capuano 的故事 | 來自那不勒斯的薄餅師傅',
      desc: 'Vincenzo Capuano 背後的故事——來自那不勒斯的第三代薄餅師傅及 2022 年世界薄餅冠軍，將當代拿坡里薄餅帶到香港。',
      keywords: '那不勒斯薄餅師傅, 第三代薄餅師傅, 薄餅傳承, 世界薄餅冠軍, Vincenzo Capuano 故事, 香港薄餅師傅, 拿坡里薄餅香港',
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${BASE}/vincenzo-capuano-story#profilepage`,
      url: `${BASE}/vincenzo-capuano-story`,
      name: 'The Vincenzo Capuano Story',
      datePublished: '2026-04-01T12:00:00+08:00',
      dateModified: '2026-04-01T12:00:00+08:00',
      mainEntity: {
        '@type': 'Person',
        name: 'Vincenzo Capuano',
        jobTitle: 'Head Chef & 2022 World Pizza Champion',
        description: 'Third-generation Neapolitan pizza maker from Naples, Italy. 2022 World Pizza Champion and pioneer of the contemporary Neapolitan pizza movement.',
        birthPlace: { '@type': 'Place', name: 'Naples, Italy' },
        award: '2022 World Pizza Championship',
        worksFor: { '@type': 'Restaurant', name: 'Vincenzo Capuano Hong Kong', url: BASE },
        url: `${BASE}/vincenzo-capuano-story`,
      },
    },
  },
};
