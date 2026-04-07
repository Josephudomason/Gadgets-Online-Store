import { huaweiPhoneImages, imageAt } from "@/lib/catalogImages";

const baseHuawei = [
  {
    id: "mate80-pro",
    name: "HUAWEI Mate 80 Pro",
    image: "/huawei/mate80-pro.webp",
    line: "Mate Series",
    price: "N 1,680,000",
    summary:
      "A flagship Mate model presented with Huawei's premium hardware styling.",
  },
  {
    id: "mate-x7",
    name: "HUAWEI Mate X7",
    image: "/huawei/mate-x7.webp",
    line: "Mate Fold Series",
    price: "N 1,950,000",
    summary:
      "A foldable Huawei flagship with a high-end profile and productivity-first presentation.",
  },
  {
    id: "mate-xt-ultimate-design",
    name: "HUAWEI Mate XT Ultimate Design",
    image: "/huawei/mate-xt-ultimate-design.webp",
    line: "Ultimate Design",
    price: "N 2,250,000",
    summary: "A premium tri-fold Huawei concept with a bold luxury-focused identity.",
  },
  {
    id: "mate-x6",
    name: "HUAWEI Mate X6",
    image: "/huawei/mate-x6.webp",
    line: "Mate Fold Series",
    price: "N 1,820,000",
    summary:
      "A refined foldable Huawei device built around premium design and flagship hardware.",
  },
  {
    id: "pura80-pro",
    name: "HUAWEI Pura 80 Pro",
    image: "/huawei/pura80-pro.webp",
    line: "Pura Series",
    price: "N 1,430,000",
    summary: "A camera-forward Pura model with a polished premium product look.",
  },
  {
    id: "pura80-ultra",
    name: "HUAWEI Pura 80 Ultra",
    image: "/huawei/pura80-ultra.webp",
    line: "Pura Series",
    price: "N 1,620,000",
    summary:
      "A top-tier Pura flagship designed for buyers seeking Huawei's strongest imaging line.",
  },
  {
    id: "nova14-pro",
    name: "HUAWEI nova 14 Pro",
    image: "/huawei/nova14-pro.webp",
    line: "nova Series",
    price: "N 980,000",
    summary:
      "A stylish nova-series Huawei phone aimed at balanced performance and visual appeal.",
  },
] as const;

const extraHuawei = Array.from({ length: 22 }, (_, index) => {
  const slot = index + 9;
  const lines = ["Mate Series", "Pura Series", "nova Series", "Enjoy Series"] as const;
  const names = [
    "HUAWEI Mate Line",
    "HUAWEI Pura Line",
    "HUAWEI nova Line",
    "HUAWEI Enjoy Line",
  ] as const;
  const name = names[index % names.length];

  return {
    id: `huawei-extra-${String(slot).padStart(2, "0")}`,
    name: `${name} ${slot}`,
    image: imageAt(huaweiPhoneImages, slot),
    line: lines[index % lines.length],
    price: `N ${(520 + index * 15) * 1000}`,
    summary: `${name} ${slot} is shown as a Huawei phone entry with HarmonyOS-ready styling and premium hardware presentation.`,
  };
});

const huaweiProducts = [...baseHuawei, ...extraHuawei];

export { huaweiProducts };
