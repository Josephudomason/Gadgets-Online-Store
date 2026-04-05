import { phoneImg } from "@/lib/catalogImages";

type SalesDiscountItem = {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: string;
  image: string;
};

const baseSales: SalesDiscountItem[] = [
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
];

const extraSales: SalesDiscountItem[] = Array.from({ length: 26 }, (_, index) => {
  const slot = index + 5;
  const brands = ["Samsung", "Apple", "Sony", "JBL", "Google", "Xiaomi"] as const;
  const brand = brands[index % brands.length];

  return {
    id: `sd-extra-${String(slot).padStart(2, "0")}`,
    name: `${brand} Clearance ${slot}`,
    brand,
    model: `Offer ${slot}`,
    image: phoneImg(slot),
    price: `N ${(95 + index * 9) * 1000}`,
  };
});

const salesDiscount: SalesDiscountItem[] = [...baseSales, ...extraSales];

export { salesDiscount };
export type { SalesDiscountItem };
