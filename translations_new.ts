export type Language = 'en' | 'hk' | 'zh';

export const translations = {
  en: {
    nav: {
      philosophy: 'Philosophy',
      reviews: 'Reviews',
      menu: 'Menu',
      location: 'Location',
      order: 'Order',
      reservations: 'BOOKING',
      callUs: 'Call Us',
      book: 'Book',
      events_short: 'Events'
    },
    hero: {
      champion: 'Napoli • 2022 Champion',
      philosophy: '"Contemporary Pizza is not just a style, it is a philosophy."',
      bookNow: 'Book Now',
      orderDelivery: 'Order Delivery'
    },
    banner: {
      launch: 'Vincenzo Capuano Hong Kong: Launching April 1st at Lee Tung Avenue!'
    },
    signature: {
      thePhilosophy: 'The Philosophy',
      contemporary: 'Contemporary',
      neapolitan: 'Neapolitan',
      description: "We don't just make pizza; we define an era. Contemporary pizza differs from the traditional for its visually pronounced crust (cornicione) and high hydration dough.",
      nuvolaTitle: 'Nuvola Super',
      nuvolaDesc: 'A specialized flour blend fermented for 36+ hours. The result is a structure that is incredibly soft, airy, and light on the stomach.',
      scissorsTitle: 'The Golden Scissors',
      scissorsDesc: 'Cutting with a wheel crushes the alveoli. We use golden scissors to gently slice the pizza, preserving the cloud-like texture.',
      quote: "Vivere di pizza è meraviglioso"
    },
    stats: {
      performance: 'Performance Data',
      guests: 'Masterpiece Recipients',
      guestsDesc: 'Total Guests Since Launch',
      pizzas: 'Cloud Creations',
      pizzasDesc: 'Authentic Hand-Sliced Pizzas',
      tomatoes: 'San Marzano Gold',
      tomatoesDesc: 'Liters of Squeezed Napoli Sun',
      flour: 'Nuvola Super Purity',
      flourDesc: 'Metric Tons of Specialized Flour',
      activeStatus: 'Kitchen Activity: ACTIVE',
      closedStatus: 'System Standby: CLOSED'
    },
    menu: {
      tasteOfNapoli: 'A Taste of Napoli',
      selectedWorks: 'Selected Works',
      popular: 'Popular',
      signature: 'Signature',
      noItems: 'No items found',
      chefNote: "Chef's Note",
      readNote: "Read Chef's Note",
      hideNote: "Hide Note",
      aboutDrinks: 'About Our Drinks Service',
      drinksDesc: 'Our premium spirits and curated wine selections are available by both the Glass and Bottle, offering ultimate flexibility for your dining experience.'
    },
    dietary: {
      vegetarian: 'Vegetarian: Contains no meat or fish products.',
      spicy: 'Spicy: Contains hot chili peppers or spices.',
      containsNuts: 'Contains Nuts: May contain peanuts, tree nuts, or seeds.',
      info: 'Dietary Information'
    },
    location: {
      findUs: 'Find Us',
      hkCentral: 'Wan Chai, Hong Kong',
      address: 'Vincenzo Capuano Hong Kong, Lee Tung Avenue, 200 Queens Road East, GF Unit 01 04 05',
      hours: 'Hours',
      lunch: 'Open Daily',
      dinner: '7 Days a Week',
      contact: 'GET IN TOUCH',
      makeReservation: 'Make a Reservation',
      reserveExperience: 'Reserve Your Experience',
      checkAvailability: 'Check availability live',
      guests: 'Guests',
      nextAvailable: 'Next Available',
      checkAll: 'Check All Times',
      viewMap: 'View Map',
      people: 'People',
      today: 'Today',
      locationLabel: 'LOCATION'
    },
    common: {
      operatingHours: 'Operating Hours',
      kitchenStatus: 'Kitchen Status',
      activeStatus: 'Open 7 days',
      closedStatus: 'Standby • Closed',
      callNow: 'Call Now',
      navigate: 'Navigate',
      viewDetails: 'View Branch Details',
      addressShort: "Lee Tung Avenue, GF Unit 01 04 05"
    },
    modals: {
      reservationTitle: 'Booking Inquiry',
      reservationSecure: 'Reservations opening soon',
      reservationLoading: 'Follow us on Instagram for updates',
      reservationChecking: 'Opening Shortly',
      deliveryTitle: 'Delivery Service',
      deliveryAnywhere: 'Starting in 3 weeks after opening',
      deliverySelect: 'Stay tuned for updates',
      comingSoonTitle: 'Coming Soon',
      instagramPrompt: 'Follow us on Instagram for the latest updates and reservation announcements.',
      followUs: 'Follow Us',
      cateringTitle: 'Catering & Events',
      cateringDesc: 'Direct Large Order Concierge',
      simulatedOrder: 'Start Simulated Order',
      changePlatform: 'Change Platform',
      promoCodeLabel: 'Use Code:',
      discountMsg: 'UP TO 20% OFF',
      flagshipLocation: 'Flagship Location',
      locationDesc: 'Located in the heart of Wan Chai, Hong Kong.',
      managementLabel: 'Pizzeria Management'
    },
    infoHub: {
      badge: 'Vincenzo Capuano Hub',
      title: 'News & Experience',
      tabs: {
        operations: 'Service',
        events: 'Hosting',
        seasonal: 'Seasonal',
        heritage: 'Heritage'
      },
      operations: {
        title: 'Service Hours',
        lunch: 'Lunch',
        dinner: 'Dinner',
        lastOrder: 'Last Order',
        walkInTitle: 'Walk-in Policy',
        walkInDesc: 'We reserve 30% of our seating for walk-ins. To experience our Contemporary dough without a booking, we recommend arriving within the first 45 minutes of each session.',
        liveAvailability: 'Live Availability'
      },
      events: {
        title: 'Private Hosting',
        capacity: 'Capacity: Up to 60 Guests',
        mainTitle: 'Host Your Masterpiece',
        description: 'From corporate galas to intimate celebrations, Vincenzo Capuano provides a high-energy, sophisticated atmosphere for Neapolitan excellence in Hong Kong.',
        tailoredMenus: 'Tailored Menus',
        pairings: 'Pairings & Flights',
        fullBuyout: 'Full Buyout',
        corporate: 'Corporate Exclusivity',
        directInquiries: 'Direct Inquiries',
        planning: 'Event Planning',
        brochure: 'Event Brochure PDF',
        viewPackages: 'View Packages'
      },
      seasonal: {
        title: 'Natale a Napoli',
        subtitle: 'The Christmas Menu',
        description: 'A 5-course feast featuring fried cod, stuffed escarole pizza, and traditional Neapolitan Struffoli.',
        preview: 'Preview',
        masterclassTitle: 'Masterclass',
        masterclassSeats: '12 Seats Remaining',
        masterclassDesc: 'Learn the secrets of the Nuvola Super dough directly from the World Champion himself.',
        soldOut: 'Sold Out',
        waitlist: 'Waitlist',
        newsTitle: 'Asia-Pacific Shortlist',
        newsDesc: 'Vincenzo Capuano HK has been shortlisted for the 2025 Top 50 Pizza Awards in the region.'
      },
      heritage: {
        title: 'The Legacy of 081',
        description: 'Vincenzo Capuano represents the third generation of pizzaioli. The number "081" is the telephone area code for Naples, a symbol he carries as a badge of honor.',
        stats: {
          family: 'Family Tradition',
          champion: 'World Champion',
          icon: 'Icon Status',
          hk: 'Hong Kong'
        }
      },
      overlay: {
        details: 'Hosting Details',
        packageTitle: 'Package "Gold Scissors"',
        packageDesc: 'Our signature sharing experience. Includes 3 types of montanare starters, unlimited selection of contemporary pizzas, and our Amaretto Tiramisu.',
        tailored: 'Tailored for your excellence',
        request: 'Request Proposal',
        download: 'Download Brochure'
      }
    },
    testimonials: {
      retrieving: 'Retrieving Guest Chronicles',
      authenticating: 'Authenticating Feedback',
      verified: 'Verified Guest Experience',
      viewSource: 'View Source'
    }
  },
  hk: {
    nav: {
      philosophy: '品牌理念',
      reviews: '食客好評',
      menu: '精選菜單',
      location: '位置',
      order: '網上訂餐',
      reservations: '預約座席',
      events: '活動預約',
      hours: '營業時間',
      callUs: '致電預約',
      book: '訂座',
      events_short: '活動'
    },
    hero: {
      champion: '拿坡里 • 2022 世界冠軍',
      philosophy: '「當代薄餅不只是一個流派，更是一套哲學。」',
      bookNow: '預約座席',
      orderDelivery: '外賣服務'
    },
    banner: {
      launch: 'Vincenzo Capuano 香港店：4月1日於利東街盛大開幕！'
    },
    signature: {
      thePhilosophy: '品牌理念',
      contemporary: '當代風格',
      neapolitan: '拿坡里薄餅',
      description: '我們不僅在製作薄餅，更在定義一個時代。當代薄餅與傳統風格的不同之處在於其顯著的餅皮（cornicione）和高含水量的麵團。',
      nuvolaTitle: 'Nuvola Super 麵粉',
      nuvolaDesc: '選用專門的麵粉配方，經過36小時以上的發酵。成果是結構極其柔軟、輕盈，且易於消化。',
      scissorsTitle: '黃金剪刀',
      scissorsDesc: '使用滾輪切割會壓碎氣孔。我們堅持使用黃金剪刀輕輕剪開薄餅，以保留雲朵般的質感。',
      quote: "Vivere di pizza è meraviglioso (為薄餅而活是美妙的)"
    },
    stats: {
      performance: '實時運作數據',
      guests: '見證美味的賓客',
      guestsDesc: '自開業以來總賓客人數',
      pizzas: '雲朵薄餅創作',
      pizzasDesc: '道地手工剪裁薄餅',
      tomatoes: 'San Marzano 黃金番茄',
      tomatoesDesc: '來自拿坡里陽光的番茄原汁 (公升)',
      flour: 'Nuvola 頂級麵粉',
      flourDesc: '進口專業麵粉消耗量 (公噸)',
      activeStatus: '實時廚房狀態：營業中',
      closedStatus: '系統待命：目前暫停營業'
    },
    menu: {
      tasteOfNapoli: '拿坡里之味',
      selectedWorks: '主廚精選',
      popular: '熱門推薦',
      signature: '招牌推薦',
      noItems: '未找到相關項目',
      chefNote: '主廚筆記',
      readNote: '查看主廚筆記',
      hideNote: '收起筆記',
      aboutDrinks: '關於我們的飲品服務',
      drinksDesc: '所有優質烈酒和精選葡萄酒均可按杯或整瓶形式供應，讓您靈活搭配用餐體驗。'
    },
    dietary: {
      vegetarian: '素食：不含肉類或魚類產品。',
      spicy: '辛辣：含有辣椒或辛辣香料。',
      containsNuts: '含堅果：可能含有花生、堅果或種子。',
      info: '飲食提示'
    },
    location: {
      findUs: '親臨門店',
      hkCentral: '香港灣仔',
      address: '香港灣仔皇后大道東200號, 利東街地下 G01, 04, 05 號舖',
      hours: '營業時間',
      lunch: '每日營業',
      dinner: '每週 7 天',
      contact: '聯絡方式',
      makeReservation: '立即訂座',
      reserveExperience: '預約您的美味體驗',
      checkAvailability: '查看實時供應情況',
      guests: '人數',
      nextAvailable: '最早可選時段',
      checkAll: '查看所有時段',
      viewMap: '查看地圖',
      people: '位',
      today: '今日',
      locationLabel: '門店地址'
    },
    common: {
      operatingHours: '營業時間',
      kitchenStatus: '廚房狀態',
      activeStatus: '每週 7 天營業',
      closedStatus: '目前休息 • 稍後再會',
      callNow: '立即致電',
      navigate: '開啟導航',
      viewDetails: '查看分店詳情',
      addressShort: '利東街地下 G01, 04, 05 號舖'
    },
    modals: {
      reservationTitle: '座席預約',
      reservationSecure: '預約平台即將開放',
      reservationLoading: '立即關注我們的 Instagram 以獲取最新消息',
      reservationChecking: '即將開放',
      deliveryTitle: '外賣服務',
      deliveryAnywhere: '開業後三週隆重推出',
      deliverySelect: '敬請期待最新消息',
      comingSoonTitle: '即將開幕',
      followUs: '立即關注',
      cateringTitle: '餐飲外送及活動',
      cateringDesc: '大額訂單專人服務',
      simulatedOrder: '開始模擬訂餐',
      changePlatform: '切換平台',
      promoCodeLabel: '優惠碼：',
      discountMsg: '高達 8 折優惠',
      flagshipLocation: '旗艦店位置',
      locationDesc: '坐落於灣仔核心地帶，交通便利。',
      managementLabel: '拿坡里薄餅專門店'
    },
    infoHub: {
      badge: 'Vincenzo Capuano 資訊中心',
      title: '最新消息與體驗',
      tabs: {
        operations: '營運資訊',
        events: '活動預約',
        seasonal: '季節限定',
        heritage: '品牌傳承'
      },
      operations: {
        title: '營業時間',
        lunch: '午市',
        dinner: '晚市',
        lastOrder: '最後點餐',
        walkInTitle: '入座守則',
        walkInDesc: '我們保留 30% 的座位供客滿時現場候補。如欲直接到店品嚐我們的當代系列，建議於各時段開始後的 45 分鐘內抵達。',
        liveAvailability: '實時供應查詢'
      },
      events: {
        title: '私人活動預約',
        capacity: '容納人數：高達 60 位賓客',
        mainTitle: '打造您的專屬饗宴',
        description: '從企業慶典到私人聚會，Vincenzo Capuano 為您提供充滿活力且精緻的氛圍，感受香港頂尖的拿坡里美味。',
        tailoredMenus: '定制菜單',
        pairings: '美酒搭配',
        fullBuyout: '包場服務',
        corporate: '企業專屬體驗',
        directInquiries: '直接查詢',
        planning: '活動策劃',
        brochure: '活動手冊 PDF',
        viewPackages: '查看方案'
      },
      seasonal: {
        title: '拿坡里聖誕盛宴',
        subtitle: '聖誕節慶菜單',
        description: '五道菜式的華麗饗宴，包括炸鱈魚、內填苦苣薄餅及傳統拿坡里 Struffoli 甜點。',
        preview: '搶先看',
        masterclassTitle: '大師班',
        masterclassSeats: '剩餘 12 個名額',
        masterclassDesc: '直接向世界冠軍學習 Nuvola Super 麵粉的秘密與技巧。',
        soldOut: '名額已滿',
        waitlist: '候補名單',
        newsTitle: '亞太區入圍名單',
        newsDesc: 'Vincenzo Capuano 香港店已入選 2025 年亞太區 50 佳薄餅大獎名單。'
      },
      heritage: {
        title: '081 的傳承',
        description: 'Vincenzo Capuano 代表著家族第三代的薄餅工藝。「081」是拿坡里的電話區號，也是他引以為傲的身份徽章。',
        stats: {
          family: '家族傳統',
          champion: '世界冠軍',
          icon: '指標性地位',
          hk: '香港分店'
        }
      },
      overlay: {
        details: '活動細節',
        packageTitle: '「黃金剪刀」精選方案',
        packageDesc: '我們的招牌分享體驗。包括 3 款炸拿坡里麵團前菜、無限量供應的當代薄餅系列，以及杏仁酒提拉米蘇。',
        tailored: '為您的卓越品味量身打造',
        request: '索取建議書',
        download: '下載手冊'
      }
    },
    testimonials: {
      retrieving: '正在獲取食客評論',
      authenticating: '正在驗證意見回饋',
      verified: '已驗證的賓客評論',
      viewSource: '查看原文'
    }
  },
  zh: {
    nav: {
      philosophy: '品牌理念',
      reviews: '食客好评',
      menu: '精选菜单',
      location: '位置',
      order: '网上订餐',
      reservations: '预约座席',
      events: '活动预约',
      callUs: '致电预约',
      book: '订座',
      events_short: '活动'
    },
    hero: {
      champion: '拿坡里 • 2022 世界冠军',
      philosophy: '「当代薄饼不只是一个流派，更是一套哲学。」',
      bookNow: '预约座席',
      orderDelivery: '外送服务'
    },
    banner: {
      launch: 'Vincenzo Capuano 香港店：4月1日于利东街盛大开幕！'
    },
    signature: {
      thePhilosophy: '品牌理念',
      contemporary: '当代风格',
      neapolitan: '拿坡里薄饼',
      description: '我们不仅在制作薄饼，更在定义一个时代。当代薄饼与传统风格的不同之处在于其显著的饼皮（cornicione）和高含水量的面团。',
      nuvolaTitle: 'Nuvola Super 面粉',
      nuvolaDesc: '选用专门的面粉配方，经过36小时以上的发酵。成果是结构极其柔软、轻盈，且易于消化。',
      scissorsTitle: '黄金剪刀',
      scissorsDesc: '使用滚轮切割会压碎气孔。我们坚持使用黄金剪刀轻轻剪开薄饼，以保留云朵般的质感。',
      quote: "Vivere di pizza è meraviglioso (为薄饼而活是美妙的)"
    },
    stats: {
      performance: '实时运作数据',
      guests: '见证美味的宾客',
      guestsDesc: '自开业以来总宾客人数',
      pizzas: '云朵薄饼创作',
      pizzasDesc: '地道手工剪裁薄餅',
      tomatoes: 'San Marzano 黄金番茄',
      tomatoesDesc: '来自拿坡里阳光的番茄原汁 (公升)',
      flour: 'Nuvola 顶级面粉',
      flourDesc: '进口专业面粉消耗量 (公吨)',
      activeStatus: '实时厨房状态：营业中',
      closedStatus: '系统待命：目前暂停营业'
    },
    menu: {
      tasteOfNapoli: '拿坡里之味',
      selectedWorks: '主厨精选',
      popular: '热门推荐',
      signature: '招牌推荐',
      noItems: '未找到相关项目',
      chefNote: '主厨笔记',
      readNote: '查看主厨笔记',
      hideNote: '收起笔记',
      aboutDrinks: '关于我们的饮品服务',
      drinksDesc: '所有优质烈酒和精选葡萄酒均可按杯或整瓶形式供应，让您灵活搭配用餐体验。'
    },
    dietary: {
      vegetarian: '素食：不含肉类或鱼类产品。',
      spicy: '辛辣：含有辣椒或辛辣香料。',
      containsNuts: '含坚果：可能含有花生、坚果或种子。',
      info: '饮食提示'
    },
    location: {
      findUs: '亲临门店',
      hkCentral: '香港湾仔',
      address: '香港湾仔皇后大道东200号地下G01, G04, G05及1楼F01A号铺',
      hours: '营业时间',
      lunch: '午市',
      dinner: '晚市',
      contact: '联系方式',
      makeReservation: '立即订座',
      reserveExperience: '预约您的美味体验',
      checkAvailability: '查看实时供应情况',
      guests: '人数',
      nextAvailable: '最早可选时段',
      checkAll: '查看所有时段',
      viewMap: '查看地图',
      people: '位',
      today: '今日',
      locationLabel: '门店地址'
    },
    common: {
      operatingHours: '营业时间',
      kitchenStatus: '厨房状态',
      activeStatus: '营业中 • 欢迎莅临',
      closedStatus: '目前休息 • 稍后再会',
      callNow: '立即致电',
      navigate: '开启导航',
      viewDetails: '查看分店详情',
      addressShort: '湾仔皇后大道东200号地下'
    },
    modals: {
      reservationTitle: '座席预约',
      reservationSecure: '预约平台即将开放',
      reservationLoading: '立即关注我们的 Instagram 以获取最新消息',
      reservationChecking: '即将开放',
      deliveryTitle: '外送服务',
      deliveryAnywhere: '开业后三周隆重推出',
      deliverySelect: '敬请期待最新消息',
      comingSoonTitle: '即将开幕',
      followUs: '立即关注',
      cateringTitle: '餐饮外送及活动',
      cateringDesc: '大额订单专人服务',
      simulatedOrder: '开始模拟订餐',
      changePlatform: '切换平台',
      promoCodeLabel: '优惠码：',
      discountMsg: '高达 8 折优惠',
      flagshipLocation: '旗舰店位置',
      locationDesc: '坐落于湾仔核心地带，交通便利。',
      managementLabel: '拿坡里薄饼专门店'
    },
    infoHub: {
      badge: 'Vincenzo Capuano 资讯中心',
      title: '最新消息与体验',
      tabs: {
        operations: '运营资讯',
        events: '活动预约',
        seasonal: '季节限定',
        heritage: '品牌传承'
      },
      operations: {
        title: '营业时间',
        lunch: '午市',
        dinner: '晚市',
        lastOrder: '最后点餐',
        walkInTitle: '入座守则',
        walkInDesc: '我们保留 30% 的座位供客满时现场候补。如欲直接到店品尝我们的当代系列，建议于各时段开始后的 45 分钟内抵达。',
        liveAvailability: '实时供应查询'
      },
      events: {
        title: '私人活动预约',
        capacity: '容纳人数：高达 60 位宾客',
        mainTitle: '打造您的专属飨宴',
        description: '从企业庆典到私人聚会，Vincenzo Capuano 为您提供充满活力且精致的氛围，感受香港顶尖的拿坡里美味。',
        tailoredMenus: '定制菜单',
        pairings: '美酒搭配',
        fullBuyout: '包场服务',
        corporate: '企业专属体验',
        directInquiries: '直接查询',
        planning: '活动策划',
        brochure: '活动手册 PDF',
        viewPackages: '查看方案'
      },
      seasonal: {
        title: '拿坡里圣诞盛宴',
        subtitle: '圣诞节庆菜单',
        description: '五道菜式的华丽飨宴，包括炸鳕鱼、内填苦苣薄饼及传统拿坡里 Struffoli 甜点。',
        preview: '抢先看',
        masterclassTitle: '大师班',
        masterclassSeats: '剩余 12 个名额',
        masterclassDesc: '直接向世界冠军学习 Nuvola Super 面粉的秘密与技巧。',
        soldOut: '名额已满',
        waitlist: '候补名单',
        newsTitle: '亚太区入围名单',
        newsDesc: 'Vincenzo Capuano 香港店已入选 2025 年亚太区 50 佳薄饼大奖名单。'
      },
      heritage: {
        title: '081 的传承',
        description: 'Vincenzo Capuano 代表着家族第三代的薄饼工艺。「081」是拿坡里的电话区号，也是他引以为傲的身份徽章。',
        stats: {
          family: '家族传统',
          champion: '世界冠军',
          icon: '指标性地位',
          hk: '香港分店'
        }
      },
      overlay: {
        details: '活动细节',
        packageTitle: '「黄金剪刀」精选方案',
        packageDesc: '我们的招牌分享体验。包括 3 款炸拿坡里面团前菜、无限量供应的当代薄餅系列，以及杏仁酒提拉米苏。',
        tailored: '为您的卓越品味量身打造',
        request: '索取建议书',
        download: '下载手册'
      }
    },
    testimonials: {
      retrieving: '正在获取食客评论',
      authenticating: '正在验证意见回馈',
      verified: '已验证的宾客评论',
      viewSource: '查看原文'
    }
  }
};
