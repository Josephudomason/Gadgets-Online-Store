import { phoneImg } from "@/lib/catalogImages";

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
  {
    id: "watch-x2",
    name: "OPPO Watch X2",
    image: "/oppo/watch-x2.webp",
    line: "Wearables",
    price: "N 590,000",
    summary:
      "A premium OPPO smartwatch with a bold design and flagship accessory positioning.",
  },
  {
    id: "watch-x2-mini",
    name: "OPPO Watch X2 Mini",
    image: "/oppo/watch-x2-mini.webp",
    line: "Wearables",
    price: "N 520,000",
    summary: "A more compact smartwatch option in the OPPO wearables line.",
  },
] as const;

const extraOppo = Array.from({ length: 22 }, (_, index) => {
  const slot = index + 9;
  const lines = ["Find X", "Reno", "A Series", "K Series"] as const;

  return {
    id: `oppo-extra-${String(slot).padStart(2, "0")}`,
    name: `OPPO Showcase ${slot}`,
    image: phoneImg(slot),
    line: `${lines[index % lines.length]} Family`,
    price: `N ${(360 + index * 12) * 1000}`,
    summary: `OPPO ColorOS-ready handset ${slot} with refined hardware staging for the brand wall.`,
  };
});

const oppoProducts = [...baseOppo, ...extraOppo];

export { oppoProducts };
