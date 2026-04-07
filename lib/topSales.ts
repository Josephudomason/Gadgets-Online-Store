type TopSaleGadget = {
  id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  price: string;
};

const topSales: TopSaleGadget[] = [
  {
    id: "topsale-jbl",
    name: "JBL Speaker",
    brand: "JBL",
    model: "Portable",
    image: "/products/JBL speaker 1.webp",
    price: "N 185,000",
  },
  {
    id: "topsale-tecno",
    name: "Tecno Camon 19",
    brand: "Tecno",
    model: "Camon 19",
    image: "/products/Tecno cmaon 19 1.webp",
    price: "N 240,000",
  },
  {
    id: "galaxy-s25-series",
    name: "Samsung Galaxy S25 Series",
    brand: "Samsung",
    model: "Galaxy S25 Series",
    image: "/samsung/galaxy-s25-series.webp",
    price: "N 1,780,000",
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    model: "iPhone 16 Pro",
    image: "/apple/iphone-16-pro.webp",
    price: "N 2,250,000",
  },
  {
    id: "pixel-fold-1",
    name: "Google Pixel Fold",
    brand: "Google",
    model: "Pixel Fold Series",
    image: "/google/pixel-10-pro-fold-1.webp",
    price: "N 1,650,000",
  },
  {
    id: "xiaomi-15t-pro",
    name: "Xiaomi 15T Pro",
    brand: "Xiaomi",
    model: "Xiaomi Series",
    image: "/xiaomi/xiaomi-15t-pro.webp",
    price: "N 1,420,000",
  },
  {
    id: "find-x8-pro",
    name: "OPPO Find X8 Pro",
    brand: "OPPO",
    model: "Find X Series",
    image: "/oppo/find-x8-pro.webp",
    price: "N 1,540,000",
  },
  {
    id: "mate80-pro",
    name: "HUAWEI Mate 80 Pro",
    brand: "Huawei",
    model: "Mate Series",
    image: "/huawei/mate80-pro.webp",
    price: "N 1,680,000",
  },
  {
    id: "iphone-12promax-124gbg-1",
    name: "iPhone 12 Pro Max",
    brand: "Apple",
    model: "iPhone 12 Pro Max",
    image: "/products/iphone 12promax 124gbg 1.webp",
    price: "N 1,050,000",
  },
];

export { topSales };
export type { TopSaleGadget };
