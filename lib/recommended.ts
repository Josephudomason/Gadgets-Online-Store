type RecommendedGadget = {
  id: string;
  name: string;
  brand: string;
  model: string;
  storage: string | null;
  price: string;
  image: string;
};

const recommended: RecommendedGadget[] = [
  {
    id: "rec-lenovo",
    name: "Lenovo AMD Ryzen",
    brand: "Lenovo",
    model: "AMD Ryzen",
    storage: null,
    price: "N 690,000",
    image: "/products/Lenovo Amd 1.webp",
  },
  {
    id: "rec-iphone-12-pm",
    name: "iPhone 12 Pro Max",
    brand: "Apple",
    model: "iPhone 12 Pro Max",
    storage: "124gbg",
    price: "N 1,050,000",
    image: "/products/iphone 12promax 124gbg 1.webp",
  },
  {
    id: "rec-pixel-6a",
    name: "Google Pixel 6a",
    brand: "Google",
    model: "Pixel 6a",
    storage: null,
    price: "N 430,000",
    image: "/products/Google pixel Ga 1.webp",
  },
  {
    id: "galaxy-s24-fe",
    name: "Samsung Galaxy S24 FE",
    brand: "Samsung",
    model: "Galaxy S24 FE",
    storage: "256 GB",
    price: "N 1,180,000",
    image: "/samsung/galaxy-s24-fe.gif",
  },
  {
    id: "xiaomi-15t",
    name: "Xiaomi 15T",
    brand: "Xiaomi",
    model: "Xiaomi Series",
    storage: null,
    price: "N 1,180,000",
    image: "/xiaomi/xiaomi-15t.webp",
  },
  {
    id: "redmi-15c-5g",
    name: "Redmi 15C 5G",
    brand: "Xiaomi",
    model: "Redmi Series",
    storage: null,
    price: "N 395,000",
    image: "/xiaomi/redmi-15c-5g.webp",
  },
  {
    id: "find-x8",
    name: "OPPO Find X8",
    brand: "OPPO",
    model: "Find X Series",
    storage: null,
    price: "N 1,320,000",
    image: "/oppo/find-x8.webp",
  },
  {
    id: "reno13-pro",
    name: "OPPO Reno13 Pro",
    brand: "OPPO",
    model: "Reno13 Pro",
    storage: null,
    price: "N 980,000",
    image: "/oppo/reno13-pro.webp",
  },
  {
    id: "mate-x7",
    name: "HUAWEI Mate X7",
    brand: "Huawei",
    model: "Mate Fold Series",
    storage: null,
    price: "N 1,950,000",
    image: "/huawei/mate-x7.webp",
  },
  {
    id: "nova14-pro",
    name: "HUAWEI nova 14 Pro",
    brand: "Huawei",
    model: "nova Series",
    storage: null,
    price: "N 980,000",
    image: "/huawei/nova14-pro.webp",
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    model: "iPhone 16",
    storage: "128 GB",
    price: "N 1,650,000",
    image: "/apple/iphone-16.webp",
  },
  {
    id: "galaxy-note-10-plus-1",
    name: "Samsung Galaxy Note 10+",
    brand: "Samsung",
    model: "Galaxy Note 10+",
    storage: null,
    price: "N 420,000",
    image: "/products/Galaxy Note 10+ 1.webp",
  },
];

export { recommended };
export type { RecommendedGadget };
