type SalesDiscountItem = {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: string;
  image: string;
};

const salesDiscount: SalesDiscountItem[] = [
  {
    id: "sd-powerbank",
    name: "Newage Powerbank",
    brand: "Newage",
    model: "Powerbank",
    price: "N 95,000",
    image: "/products/Newage Powerbank 1.webp",
  },
  {
    id: "sd-ps4",
    name: "Sony PS4 Console",
    brand: "Sony",
    model: "PS4 Console",
    price: "N 420,000",
    image: "/products/Sony Ps4 Console 1.webp",
  },
  {
    id: "sd-farcry",
    name: "Far Cry 4 PS4",
    brand: "Ubisoft",
    model: "Far Cry 4",
    price: "N 55,000",
    image: "/products/Far Cry Game 1.webp",
  },
  {
    id: "sd-fifa",
    name: "EA Sports FIFA 24 PS4",
    brand: "EA Sports",
    model: "FIFA 24",
    price: "N 68,000",
    image: "/products/Fifa Sport game 1.webp",
  },
  {
    id: "samsung-a03-1",
    name: "Samsung A03",
    brand: "Samsung",
    model: "Samsung A03",
    price: "N 145,000",
    image: "/products/Samsung A03 1.webp",
  },
  {
    id: "iphone-x-256-gbgb-1",
    name: "iPhone X",
    brand: "Apple",
    model: "iPhone X",
    price: "N 460,000",
    image: "/products/Iphone X 256 Gbgb 1.webp",
  },
  {
    id: "redmi-15c",
    name: "Redmi 15C",
    brand: "Xiaomi",
    model: "Redmi Series",
    price: "N 330,000",
    image: "/xiaomi/redmi-15c.webp",
  },
  {
    id: "reno13-f-5g",
    name: "OPPO Reno13 F 5G",
    brand: "OPPO",
    model: "Reno Series",
    price: "N 710,000",
    image: "/oppo/reno13-f-5g.webp",
  },
  {
    id: "nova14-pro",
    name: "HUAWEI nova 14 Pro",
    brand: "Huawei",
    model: "nova Series",
    price: "N 980,000",
    image: "/huawei/nova14-pro.webp",
  },
  {
    id: "google-pixel-ga-1",
    name: "Google Pixel 6a",
    brand: "Google",
    model: "Pixel 6a",
    price: "N 430,000",
    image: "/products/Google pixel Ga 1.webp",
  },
  {
    id: "iphone-12-gbg-1",
    name: "iPhone 12",
    brand: "Apple",
    model: "iPhone 12",
    price: "N 780,000",
    image: "/products/iphone 12 Gbg 1.webp",
  },
];

export { salesDiscount };
export type { SalesDiscountItem };
