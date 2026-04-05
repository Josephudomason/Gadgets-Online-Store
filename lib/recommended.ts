import { phoneImg } from "@/lib/catalogImages";

type RecommendedGadget = {
  id: string;
  name: string;
  brand: string;
  model: string;
  storage: string | null;
  price: string;
  image: string;
};

const baseRecommended: RecommendedGadget[] = [
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
    id: "rec-pixel-watch",
    name: "Google Pixel Watch",
    brand: "Google",
    model: "Pixel Watch",
    storage: null,
    price: "N 320,000",
    image: "/products/Google pixel watch 1.webp",
  },
];

const extraRecommended: RecommendedGadget[] = Array.from({ length: 26 }, (_, index) => {
  const slot = index + 5;
  const brands = ["Apple", "Samsung", "Xiaomi", "Oppo", "Google", "Huawei"] as const;
  const brand = brands[index % brands.length];

  return {
    id: `rec-extra-${String(slot).padStart(2, "0")}`,
    name: `${brand} Recommended ${slot}`,
    brand,
    model: `Edition ${slot}`,
    storage: index % 2 === 0 ? "256 GB" : null,
    image: phoneImg(slot),
    price: `N ${(210 + index * 11) * 1000}`,
  };
});

const recommended: RecommendedGadget[] = [...baseRecommended, ...extraRecommended];

export { recommended };
export type { RecommendedGadget };
