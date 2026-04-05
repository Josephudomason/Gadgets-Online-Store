type ProductDescription = {
  id: string;
  name: string;
  image: string;
  description: string;
  Specifications: ProductSpecifications;
};

type ProductSpecifications = Record<string, string>;

const description: ProductDescription[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    image: "/apple/iphone-16-pro.webp",
    description:
      "iPhone 16 Pro is a premium Apple flagship built for users who want top-tier performance, a polished titanium design, and advanced camera tools that feel ready for both creative work and everyday use. It fits shoppers who care about a high-end display, strong battery life, fast on-device intelligence features, and a phone that feels confidently future-ready.",
    Specifications: {
      display: '6.3" Super Retina XDR display',
      rearCamera: "48 MP Fusion + 48 MP ultra wide + 12 MP telephoto camera system",
      frontCamera: "12 MP TrueDepth front camera",
      chipset: "Apple A18 Pro",
      storage: "256 GB internal storage",
      build: "Titanium design with Ceramic Shield front",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
      highlights: "Apple Intelligence readiness and pro-level photography tools",
    },
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    image: "/apple/iphone-16.webp",
    description:
      "iPhone 16 brings a fresh current-generation iPhone experience with strong everyday speed, a bright modern display, and a camera system that is easy to trust for photos, video, and daily communication. It is a smart fit for buyers who want a newer Apple phone that feels balanced, stylish, and practical without stepping all the way up to the Pro tier.",
    Specifications: {
      display: '6.1" Super Retina XDR display',
      rearCamera: "48 MP Fusion camera + 12 MP ultra wide camera",
      frontCamera: "12 MP TrueDepth front camera",
      chipset: "Apple A18",
      storage: "128 GB internal storage",
      build: "Aluminum design with color-infused glass back",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
      highlights: "Fast everyday performance with current-generation Apple features",
    },
  },
  {
    id: "iphone-16e",
    name: "iPhone 16e",
    image: "/apple/iphone-16e.webp",
    description:
      "iPhone 16e is designed for users who want a newer Apple device with solid performance, a clean modern look, and access to the latest iPhone family experience at a more approachable entry point. It works well for calls, messaging, photos, streaming, and everyday app use while still feeling polished and current.",
    Specifications: {
      display: '6.1" Super Retina XDR display',
      rearCamera: "48 MP main camera system",
      frontCamera: "12 MP TrueDepth front camera",
      chipset: "Apple A18",
      storage: "128 GB internal storage",
      build: "Durable aluminum design",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
      highlights: "Current-generation iPhone experience in a simpler value-focused model",
    },
  },
  {
    id: "galaxy-s24-fe",
    name: "Samsung Galaxy S24 FE",
    image: "/samsung/galaxy-s24-fe.gif",
    description:
      "Samsung Galaxy S24 FE gives buyers a more accessible path into the newer Galaxy experience with a large immersive screen, strong everyday speed, and AI-enhanced features that support work, entertainment, and photography. It is a practical choice for users who want a fresh Samsung phone that feels current and capable without moving into the most expensive flagship tier.",
    Specifications: {
      display: '6.7" Dynamic AMOLED 2X display',
      rearCamera: "50 MP wide + 12 MP ultra wide + 8 MP telephoto",
      frontCamera: "10 MP selfie camera",
      battery: "4700 mAh",
      chipset: "Flagship-class Exynos platform",
      storage: "256 GB internal storage",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
      highlights: "Galaxy AI features with a large-screen fan-edition design",
    },
  },
  {
    id: "galaxy-s25-series",
    name: "Samsung Galaxy S25 Series",
    image: "/samsung/galaxy-s25-series.webp",
    description:
      "Samsung Galaxy S25 Series represents Samsung's 2025 flagship direction, combining premium design, fast hardware, and intelligent software features for users who want a polished high-end Android experience. It suits shoppers looking for modern Galaxy styling, advanced camera capability, and enough performance headroom for gaming, work, and media-heavy use.",
    Specifications: {
      display: "Premium Dynamic AMOLED flagship display",
      rearCamera: "Advanced multi-camera Galaxy flagship system",
      battery: "All-day battery performance",
      chipset: "Next-generation Snapdragon Galaxy platform",
      storage: "256 GB internal storage",
      software: "One UI with Galaxy AI features",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
      highlights: "Samsung flagship series focused on AI-enhanced mobile experiences",
    },
  },
  {
    id: "galaxy-s25-fe",
    name: "Samsung Galaxy S25 FE",
    image: "/samsung/galaxy-s25-fe.webp",
    description:
      "Samsung Galaxy S25 FE is built for users who want a current fan-edition phone with premium Galaxy styling, useful AI tools, and a well-rounded feature set for everyday performance, content viewing, and social media use. It strikes a nice balance between flagship feel and value, making it especially attractive for mainstream buyers.",
    Specifications: {
      display: '6.7" AMOLED display',
      rearCamera: "Triple rear camera system",
      frontCamera: "High-resolution selfie camera",
      battery: "Long-lasting all-day battery",
      chipset: "Modern Galaxy performance platform",
      storage: "256 GB internal storage",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
      highlights: "Fan-edition Galaxy experience with newer AI and security features",
    },
  },
  {
    id: "galaxy-s26-series",
    name: "Samsung Galaxy S26 Series",
    image: "/samsung/galaxy-s26-series.webp",
    description:
      "Samsung Galaxy S26 Series is positioned as Samsung's 2026 flagship lineup, aimed at users who want the newest Galaxy hardware, refined design, and top-end smartphone capability for work, photography, entertainment, and demanding daily use. It is the kind of lineup that appeals to buyers who prefer staying near the front edge of Samsung's mobile ecosystem.",
    Specifications: {
      display: "Next-generation Dynamic AMOLED flagship display",
      rearCamera: "Flagship Galaxy camera system with advanced zoom and processing",
      battery: "All-day premium battery profile",
      chipset: "2026 flagship Galaxy processor platform",
      storage: "512 GB internal storage",
      software: "Latest One UI experience",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
      highlights: "Samsung's newest Galaxy S flagship direction for 2026",
    },
  },
  {
    id: "far-cry-game-1",
    name: "Far Cry Game 1",
    image: "/products/Far Cry Game 1.webp",
    description:
      "Far Cry Game 1 is built for players who enjoy large open-world adventures, cinematic action, and mission-driven gameplay that keeps every session exciting. It delivers a visually rich environment, intense combat moments, and a strong sense of exploration, making it a great option for gamers who want a title that feels immersive, dramatic, and packed with content.",
    Specifications: {
      genre: "Open-world action adventure",
      mode: "Single-player campaign",
      visualStyle: "Cinematic environments with detailed world design",
      gameplayFocus: "Exploration, combat, missions, and survival elements",
      platformSupport: "Suitable for supported gaming consoles",
      packaging: "Retail game package",
    },
  },
  {
    id: "fifa-sport-game-1",
    name: "Fifa Sport game 1",
    image: "/products/Fifa Sport game 1.webp",
    description:
      "Fifa Sport game 1 offers a competitive football gaming experience with fast controls, energetic match flow, and the kind of presentation that makes every game feel lively and realistic. It is a strong choice for players who enjoy solo play, local competition with friends, or long gaming sessions focused on sports, strategy, and team management.",
    Specifications: {
      genre: "Football simulation",
      mode: "Single-player and local multiplayer",
      gameplayFocus: "Match play, tournaments, and team control",
      presentation: "Broadcast-style sports visuals",
      platformSupport: "Suitable for supported gaming consoles",
      packaging: "Retail sports game package",
    },
  },
  {
    id: "galaxy-note-10-plus-1",
    name: "Galaxy Note 10+ 1",
    image: "/products/Galaxy Note 10+ 1.webp",
    description:
      "Galaxy Note 10+ combines premium smartphone performance with a spacious display, elegant design, and productivity-focused features that make it suitable for both work and entertainment. It stands out for users who want a device that feels refined in the hand while still offering enough screen space, power, and versatility for streaming, multitasking, note-taking, and daily communication.",
    Specifications: {
      display: '6.8" Dynamic AMOLED display',
      rearCamera: "12 MP wide + 12 MP telephoto + 16 MP ultra wide",
      frontCamera: "10 MP selfie camera",
      battery: "4300 mAh",
      chipset: "Flagship-grade octa-core processor",
      memory: "12 GB RAM",
      storage: "256 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, USB-C",
    },
  },
  {
    id: "galaxy-note-9-1",
    name: "Galaxy Note 9 1",
    image: "/products/Galaxy Note 9 1.webp",
    description:
      "Galaxy Note 9 is designed for users who appreciate a dependable high-end smartphone with a large display, smooth everyday performance, and a premium build that still feels practical. It is well suited for browsing, media use, mobile productivity, and communication, giving buyers a balanced device that combines durability, comfort, and strong feature value.",
    Specifications: {
      display: '6.4" Super AMOLED display',
      rearCamera: "12 MP dual rear camera system",
      frontCamera: "8 MP selfie camera",
      battery: "4000 mAh",
      chipset: "High-performance octa-core processor",
      memory: "6 GB RAM",
      storage: "128 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, USB-C",
    },
  },
  {
    id: "google-pixel-ga-1",
    name: "Google pixel Ga 1",
    image: "/products/Google pixel Ga 1.webp",
    description:
      "Google pixel Ga 1 delivers a clean Android experience with a simple modern design, dependable performance, and a user-friendly software feel that many people appreciate for everyday use. It is a practical option for anyone looking for a smartphone that handles calling, messaging, photography, web browsing, and app use with a smooth and familiar experience.",
    Specifications: {
      display: '6.1" OLED display',
      rearCamera: "12.2 MP main camera",
      frontCamera: "8 MP selfie camera",
      battery: "4410 mAh",
      chipset: "Google Tensor series processor",
      memory: "6 GB RAM",
      storage: "128 GB internal storage",
      connectivity: "5G, Wi-Fi, Bluetooth, USB-C",
    },
  },
  {
    id: "google-pixel-watch-1",
    name: "Google pixel watch 1",
    image: "/products/Google pixel watch 1.webp",
    description:
      "Google pixel watch 1 is a sleek wearable created for users who want quick access to notifications, health tracking, and everyday convenience directly from the wrist. Its compact and stylish form makes it easy to wear throughout the day, while the smart functionality supports fitness monitoring, time management, and a more connected mobile lifestyle.",
    Specifications: {
      display: '1.2" AMOLED touch display',
      bodyMaterial: "Stainless steel case",
      battery: "Up to 24 hours typical usage",
      healthFeatures: "Heart rate tracking, sleep tracking, activity monitoring",
      connectivity: "Bluetooth, Wi-Fi, GPS",
      compatibility: "Works with supported Android phones",
      charging: "Magnetic fast charging",
    },
  },
  {
    id: "iphone-12-gbg-1",
    name: "iphone 12 Gbg 1",
    image: "/products/iphone 12 Gbg 1.webp",
    description:
      "iphone 12 Gbg 1 offers a modern Apple smartphone experience with a clean design, responsive performance, and a bright display that works well for entertainment, photography, and everyday communication. It is a strong fit for users who want a reliable device for social apps, video playback, mobile browsing, and smooth day-to-day use without sacrificing a premium feel.",
    Specifications: {
      display: '6.1" Super Retina XDR display',
      rearCamera: "12 MP dual camera system",
      frontCamera: "12 MP TrueDepth front camera",
      battery: "2815 mAh",
      chipset: "Apple A14 Bionic",
      memory: "4 GB RAM",
      storage: "64 GB internal storage",
      connectivity: "5G, Wi-Fi, Bluetooth, Lightning",
    },
  },
  {
    id: "iphone-12promax-124gbg-1",
    name: "iphone 12promax 124gbg 1",
    image: "/products/iphone 12promax 124gbg 1.webp",
    description:
      "iphone 12promax 124gbg 1 is aimed at users who want a larger iPhone with a more immersive screen, premium styling, and the kind of performance that can confidently support gaming, streaming, content capture, and multitasking. Its size and presentation make it especially attractive for people who prefer a flagship phone that feels powerful, polished, and entertainment-ready.",
    Specifications: {
      display: '6.7" Super Retina XDR display',
      rearCamera: "12 MP wide + 12 MP ultra wide + 12 MP telephoto",
      frontCamera: "12 MP TrueDepth front camera",
      battery: "3687 mAh",
      chipset: "Apple A14 Bionic",
      memory: "6 GB RAM",
      storage: "128 GB internal storage",
      connectivity: "5G, Wi-Fi, Bluetooth, Lightning",
    },
  },
  {
    id: "iphone-x-256-gbgb-1",
    name: "Iphone X 256 Gbgb 1",
    image: "/products/Iphone X 256 Gbgb 1.webp",
    description:
      "Iphone X 256 Gbgb 1 remains a stylish and capable smartphone choice for users who want the Apple ecosystem, a premium look, and enough storage to keep more photos, videos, and apps in one place. It is ideal for everyday mobile use and still appeals to buyers who value a familiar iPhone experience with a balance of elegance and functionality.",
    Specifications: {
      display: '5.8" Super Retina OLED display',
      rearCamera: "12 MP dual rear camera system",
      frontCamera: "7 MP front camera",
      battery: "2716 mAh",
      chipset: "Apple A11 Bionic",
      memory: "3 GB RAM",
      storage: "256 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, Lightning",
    },
  },
  {
    id: "iphone-xsmax-256gbg-1",
    name: "iphone Xsmax 256gbg 1",
    image: "/products/iphone Xsmax 256gbg 1.webp",
    description:
      "iphone Xsmax 256gbg 1 is built for users who like a larger screen and more storage for media, apps, and daily productivity. It delivers a premium smartphone feel with a broad display area that makes reading, watching videos, browsing online stores, and handling communication more comfortable, especially for users who spend long hours on their phones.",
    Specifications: {
      display: '6.5" Super Retina OLED display',
      rearCamera: "12 MP dual rear camera system",
      frontCamera: "7 MP front camera",
      battery: "3174 mAh",
      chipset: "Apple A12 Bionic",
      memory: "4 GB RAM",
      storage: "256 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, Lightning",
    },
  },
  {
    id: "iphone-xsmax-64-ggbg-1",
    name: "iphone Xsmax 64 Ggbg 1",
    image: "/products/iphone Xsmax 64 Ggbg 1.webp",
    description:
      "iphone Xsmax 64 Ggbg 1 gives users the same large-screen Apple experience in a storage option that suits lighter everyday use. It is a good choice for anyone who wants the comfort of a bigger display for messages, calls, entertainment, and browsing, while still enjoying the polished feel and straightforward usability expected from an iPhone.",
    Specifications: {
      display: '6.5" Super Retina OLED display',
      rearCamera: "12 MP dual rear camera system",
      frontCamera: "7 MP front camera",
      battery: "3174 mAh",
      chipset: "Apple A12 Bionic",
      memory: "4 GB RAM",
      storage: "64 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, Lightning",
    },
  },
  {
    id: "jbl-speaker-1",
    name: "JBL speaker 1",
    image: "/products/JBL speaker 1.webp",
    description:
      "JBL speaker 1 is a portable audio option designed for users who want clear sound, bold styling, and convenient everyday music playback whether at home or on the move. It works well for casual listening, gatherings, and personal entertainment, giving users a simple way to enjoy stronger sound output than a phone or laptop speaker can provide on its own.",
    Specifications: {
      outputPower: "Portable room-filling sound output",
      connectivity: "Bluetooth wireless connection",
      battery: "Long-lasting rechargeable battery",
      chargingPort: "USB charging support",
      design: "Compact portable speaker body",
      usage: "Indoor and outdoor casual listening",
    },
  },
  {
    id: "lenovo-amd-1",
    name: "Lenovo Amd 1",
    image: "/products/Lenovo Amd 1.webp",
    description:
      "Lenovo Amd 1 is a practical laptop choice for users who need a dependable machine for work, study, browsing, streaming, and regular day-to-day tasks. With its laptop form factor and AMD-powered positioning, it appeals to buyers who want a comfortable balance of productivity, convenience, and performance in a device suitable for home, office, or school use.",
    Specifications: {
      display: '15.6" Full HD display',
      processor: "AMD Ryzen series processor",
      memory: "8 GB RAM",
      storage: "512 GB SSD",
      graphics: "Integrated Radeon graphics",
      battery: "All-day productivity battery life",
      ports: "USB, HDMI, audio jack",
    },
  },
  {
    id: "newage-powerbank-1",
    name: "Newage Powerbank 1",
    image: "/products/Newage Powerbank 1.webp",
    description:
      "Newage Powerbank 1 is made for people who need extra battery support while away from a wall charger, helping keep phones and small devices powered during travel, workdays, or busy routines. Its compact utility makes it a convenient accessory for users who rely heavily on their devices and want a dependable backup power option they can carry easily.",
    Specifications: {
      capacity: "10000 mAh",
      outputPorts: "Dual USB output",
      inputPort: "Micro USB or USB-C charging input",
      chargingSupport: "Suitable for smartphones and small gadgets",
      design: "Slim portable power bank body",
      safetyFeatures: "Overcharge and short-circuit protection",
    },
  },
  {
    id: "samsung-a03-1",
    name: "Samsung A03 1",
    image: "/products/Samsung A03 1.webp",
    description:
      "Samsung A03 1 is a budget-friendly smartphone that focuses on essential daily performance, approachable design, and reliable usability for common mobile tasks. It is well suited for calling, messaging, light social media, web browsing, and basic app use, making it a sensible option for buyers who want value and familiarity without unnecessary complexity.",
    Specifications: {
      display: '6.5" HD+ display',
      rearCamera: "48 MP main camera + 2 MP depth camera",
      frontCamera: "5 MP selfie camera",
      battery: "5000 mAh",
      processor: "Octa-core processor",
      memory: "4 GB RAM",
      storage: "64 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, USB",
    },
  },
  {
    id: "samsung-s10-1",
    name: "Samsung S10 1",
    image: "/products/Samsung S10 1.webp",
    description:
      "Samsung S10 1 offers a premium smartphone experience with a sharp display, attractive build, and performance profile that still supports entertainment, communication, and everyday multitasking comfortably. It is a strong option for users who want a stylish Samsung device that feels advanced, capable, and enjoyable for both productivity and leisure.",
    Specifications: {
      display: '6.1" Dynamic AMOLED display',
      rearCamera: "12 MP wide + 12 MP telephoto + 16 MP ultra wide",
      frontCamera: "10 MP selfie camera",
      battery: "3400 mAh",
      chipset: "Flagship octa-core processor",
      memory: "8 GB RAM",
      storage: "128 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, USB-C",
    },
  },
  {
    id: "sony-ps4-console-1",
    name: "Sony Ps4 Console 1",
    image: "/products/Sony Ps4 Console 1.webp",
    description:
      "Sony Ps4 Console 1 is ideal for gamers who want a dedicated home gaming system with access to popular titles, comfortable long-session play, and a familiar console experience. It fits well into entertainment setups for solo gaming, couch multiplayer, and digital media use, making it a reliable choice for users building a fun and versatile living-room setup.",
    Specifications: {
      processor: "Custom AMD console processor",
      graphics: "Integrated console-grade GPU",
      storage: "500 GB or 1 TB internal storage",
      resolution: "Up to Full HD gaming output",
      connectivity: "HDMI, USB, Wi-Fi, Bluetooth",
      controllerSupport: "DualShock wireless controller support",
    },
  },
  {
    id: "tecno-cmaon-19-1",
    name: "Tecno cmaon 19 1",
    image: "/products/Tecno cmaon 19 1.webp",
    description:
      "Tecno cmaon 19 1 is positioned as an accessible smartphone with a modern appearance, practical everyday features, and a user experience suited to communication, entertainment, and general mobile use. It is a good fit for users who want a capable device for calls, messaging, social media, and casual photography while staying within a more affordable range.",
    Specifications: {
      display: '6.8" FHD+ display',
      rearCamera: "64 MP main camera + AI secondary lens",
      frontCamera: "16 MP selfie camera",
      battery: "5000 mAh",
      processor: "Octa-core MediaTek processor",
      memory: "4 GB RAM",
      storage: "128 GB internal storage",
      connectivity: "4G LTE, Wi-Fi, Bluetooth, USB-C",
    },
  },
];

export { description };
export type { ProductDescription, ProductSpecifications };
