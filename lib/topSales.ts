import { phoneImg } from "@/lib/catalogImages";

type TopSaleGadget = {
  id: string;
  name: string;
  brand: string;
  model: string;
  image: string;
  price: string;
};

const baseTopSales: TopSaleGadget[] = [
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
    id: "topsale-samsung-s10",
    name: "Samsung S10",
    brand: "Samsung",
    model: "S10",
    image: "/products/Samsung S10 1.webp",
    price: "N 310,000",
  },
  {
    id: "topsale-iphone-xs",
    name: "iPhone Xs Max",
    brand: "Apple",
    model: "Xs Max",
    image: "/products/iphone Xsmax 256gbg 1.webp",
    price: "N 540,000",
  },
];

const extraTopSales: TopSaleGadget[] = Array.from({ length: 26 }, (_, index) => {
  const slot = index + 5;
  const brands = ["Samsung", "Apple", "Google", "Xiaomi", "Oppo", "Huawei"] as const;
  const brand = brands[index % brands.length];

  return {
    id: `topsale-extra-${String(slot).padStart(2, "0")}`,
    name: `${brand} Featured Pick ${slot}`,
    brand,
    model: `Series ${slot}`,
    image: phoneImg(slot),
    price: `N ${(185 + index * 12) * 1000}`,
  };
});

const topSales: TopSaleGadget[] = [...baseTopSales, ...extraTopSales];

export { topSales };
export type { TopSaleGadget };
