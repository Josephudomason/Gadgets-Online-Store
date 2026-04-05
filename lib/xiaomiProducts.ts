import { phoneImg } from "@/lib/catalogImages";

const baseXiaomi = [
  {
    id: "xiaomi-15t",
    name: "Xiaomi 15T",
    image: "/xiaomi/xiaomi-15t.webp",
    line: "Xiaomi Series",
    price: "N 1,180,000",
    summary:
      "Flagship-grade Xiaomi phone with a premium finish and performance-focused design.",
  },
  {
    id: "xiaomi-15t-pro",
    name: "Xiaomi 15T Pro",
    image: "/xiaomi/xiaomi-15t-pro.webp",
    line: "Xiaomi Series",
    price: "N 1,420,000",
    summary:
      "A more advanced 15T model with stronger imaging and top-tier daily performance.",
  },
  {
    id: "redmi-15",
    name: "Redmi 15",
    image: "/xiaomi/redmi-15.webp",
    line: "Redmi Series",
    price: "N 480,000",
    summary: "Balanced mid-range Redmi option built for dependable everyday use.",
  },
  {
    id: "redmi-15c",
    name: "Redmi 15C",
    image: "/xiaomi/redmi-15c.webp",
    line: "Redmi Series",
    price: "N 330,000",
    summary:
      "Affordable Redmi smartphone aimed at practical value and simple usability.",
  },
  {
    id: "redmi-15c-5g",
    name: "Redmi 15C 5G",
    image: "/xiaomi/redmi-15c-5g.webp",
    line: "Redmi Series",
    price: "N 395,000",
    summary:
      "Entry-friendly 5G Redmi device with a clean design and modern connectivity.",
  },
  {
    id: "poco-f8-pro",
    name: "POCO F8 Pro",
    image: "/xiaomi/poco-f8-pro.webp",
    line: "POCO Series",
    price: "N 910,000",
    summary:
      "Performance-focused POCO phone made for users who want speed and gaming power.",
  },
  {
    id: "poco-f8-ultra",
    name: "POCO F8 Ultra",
    image: "/xiaomi/poco-f8-ultra.webp",
    line: "POCO Series",
    price: "N 1,060,000",
    summary:
      "High-end POCO model with a bolder build and stronger flagship-level hardware.",
  },
  {
    id: "poco-c85",
    name: "POCO C85",
    image: "/xiaomi/poco-c85.webp",
    line: "POCO Series",
    price: "N 280,000",
    summary: "Budget-friendly POCO model designed for light use and strong value.",
  },
] as const;

const extraXiaomi = Array.from({ length: 22 }, (_, index) => {
  const slot = index + 9;
  const lines = ["Xiaomi T Series", "Redmi Note", "POCO X", "Redmi A"] as const;

  return {
    id: `xiaomi-extra-${String(slot).padStart(2, "0")}`,
    name: `Xiaomi Group Device ${slot}`,
    image: phoneImg(slot),
    line: lines[index % lines.length],
    price: `N ${(310 + index * 13) * 1000}`,
    summary: `Xiaomi ecosystem device ${slot} with balanced specs and modern MIUI-ready presentation.`,
  };
});

const xiaomiProducts = [...baseXiaomi, ...extraXiaomi];

export { xiaomiProducts };
