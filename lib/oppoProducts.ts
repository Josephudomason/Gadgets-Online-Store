import { imageAt, oppoPhoneImages } from "@/lib/catalogImages";

const baseOppo = [
  {
    id: "find-x8-pro",
    name: "OPPO Find X8 Pro",
    image: "/oppo/find-x8-pro.webp",
    line: "Find X Series",
    price: "N 1,540,000",
    summary:
      "A premium OPPO flagship with a camera-forward design and polished finish.",
  },
  {
    id: "find-x8",
    name: "OPPO Find X8",
    image: "/oppo/find-x8.webp",
    line: "Find X Series",
    price: "N 1,320,000",
    summary:
      "A flagship-grade OPPO phone positioned for premium everyday performance.",
  },
  {
    id: "find-n5",
    name: "OPPO Find N5",
    image: "/oppo/find-n5.webp",
    line: "Find N Series",
    price: "N 1,780,000",
    summary:
      "A foldable OPPO device designed for users who want a more futuristic flagship form.",
  },
  {
    id: "reno13-pro",
    name: "OPPO Reno13 Pro",
    image: "/oppo/reno13-pro.webp",
    line: "Reno Series",
    price: "N 980,000",
    summary:
      "A polished Reno smartphone balancing premium looks with strong day-to-day capability.",
  },
  {
    id: "reno13",
    name: "OPPO Reno13",
    image: "/oppo/reno13.webp",
    line: "Reno Series",
    price: "N 830,000",
    summary: "A stylish Reno device built around modern design and balanced user value.",
  },
  {
    id: "reno13-f-5g",
    name: "OPPO Reno13 F 5G",
    image: "/oppo/reno13-f-5g.webp",
    line: "Reno Series",
    price: "N 710,000",
    summary:
      "A more accessible OPPO Reno option with 5G connectivity and a strong modern look.",
  },
] as const;

const extraOppo = Array.from({ length: 22 }, (_, index) => {
  const slot = index + 9;
  const lines = ["Find X Series", "Reno Series", "A Series", "K Series"] as const;
  const names = [
    "OPPO Find X",
    "OPPO Reno",
    "OPPO A Line",
    "OPPO K Line",
  ] as const;
  const name = names[index % names.length];

  return {
    id: `oppo-extra-${String(slot).padStart(2, "0")}`,
    name: `${name} ${slot}`,
    image: imageAt(oppoPhoneImages, slot),
    line: lines[index % lines.length],
    price: `N ${(360 + index * 12) * 1000}`,
    summary: `${name} ${slot} is presented as an OPPO phone with refined ColorOS-ready styling and a polished hardware look.`,
  };
});

const oppoProducts = [...baseOppo, ...extraOppo];

export { oppoProducts };
