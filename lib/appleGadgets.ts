import { phoneImg, watchImg } from "@/lib/catalogImages";

type AppleGadget = {
  id: string;
  name: string;
  model: string;
  storage: string | null;
  price: string;
  image: string;
};

const appleGadgets: AppleGadget[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    model: "iPhone 16 Pro",
    storage: "256 GB",
    price: "N 2,250,000",
    image: "/apple/iphone-16-pro.webp",
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    model: "iPhone 16",
    storage: "128 GB",
    price: "N 1,650,000",
    image: "/apple/iphone-16.webp",
  },
  {
    id: "iphone-16e",
    name: "iPhone 16e",
    model: "iPhone 16e",
    storage: "128 GB",
    price: "N 1,250,000",
    image: "/apple/iphone-16e.webp",
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    model: "iPhone 15 Pro",
    storage: "256 GB",
    price: "N 1,980,000",
    image: phoneImg(1),
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    model: "iPhone 15",
    storage: "128 GB",
    price: "N 1,420,000",
    image: phoneImg(2),
  },
  {
    id: "iphone-15-plus",
    name: "iPhone 15 Plus",
    model: "iPhone 15 Plus",
    storage: "256 GB",
    price: "N 1,560,000",
    image: phoneImg(3),
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    model: "iPhone 14 Pro",
    storage: "256 GB",
    price: "N 1,720,000",
    image: phoneImg(4),
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    model: "iPhone 14",
    storage: "128 GB",
    price: "N 1,180,000",
    image: phoneImg(5),
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    model: "iPhone 13",
    storage: "128 GB",
    price: "N 920,000",
    image: phoneImg(6),
  },
  {
    id: "iphone-13-mini",
    name: "iPhone 13 mini",
    model: "iPhone 13 mini",
    storage: "128 GB",
    price: "N 780,000",
    image: phoneImg(7),
  },
  {
    id: "apple-watch-series-10",
    name: "Apple Watch Series 10",
    model: "Watch Series 10",
    storage: null,
    price: "N 520,000",
    image: watchImg(1),
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    model: "Watch Series 9",
    storage: null,
    price: "N 465,000",
    image: watchImg(2),
  },
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    model: "Watch Ultra 2",
    storage: null,
    price: "N 890,000",
    image: watchImg(3),
  },
  {
    id: "apple-watch-se-3",
    name: "Apple Watch SE (3rd gen)",
    model: "Watch SE",
    storage: null,
    price: "N 310,000",
    image: watchImg(4),
  },
  {
    id: "apple-watch-series-8",
    name: "Apple Watch Series 8",
    model: "Watch Series 8",
    storage: null,
    price: "N 395,000",
    image: watchImg(5),
  },
  {
    id: "iphone-12-gbg-1",
    name: "iPhone 12",
    model: "iPhone 12",
    storage: null,
    price: "N 780,000",
    image: "/products/iphone 12 Gbg 1.webp",
  },
  {
    id: "iphone-12promax-124gbg-1",
    name: "iPhone 12 Pro Max",
    model: "iPhone 12 Pro Max",
    storage: "124gbg",
    price: "N 1,050,000",
    image: "/products/iphone 12promax 124gbg 1.webp",
  },
  {
    id: "iphone-x-256-gbgb-1",
    name: "iPhone X",
    model: "iPhone X",
    storage: "256 Gbgb",
    price: "N 460,000",
    image: "/products/Iphone X 256 Gbgb 1.webp",
  },
  {
    id: "iphone-xsmax-256gbg-1",
    name: "iPhone Xs Max",
    model: "iPhone Xs Max",
    storage: "256gbg",
    price: "N 540,000",
    image: "/products/iphone Xsmax 256gbg 1.webp",
  },
  {
    id: "iphone-xsmax-64-ggbg-1",
    name: "iPhone Xs Max",
    model: "iPhone Xs Max",
    storage: "64 Ggbg",
    price: "N 500,000",
    image: "/products/iphone Xsmax 64 Ggbg 1.webp",
  },
  ...Array.from({ length: 10 }, (_, index) => {
    const slot = index + 21;

    return {
      id: `apple-line-${slot}`,
      name: `Apple iPhone Line ${slot}`,
      model: `Edition ${slot}`,
      storage: index % 2 === 0 ? "256 GB" : "128 GB",
      price: `N ${(720 + index * 18) * 1000}`,
      image: phoneImg(slot),
    };
  }),
];

export { appleGadgets };
export type { AppleGadget };
