import { googlePhoneImages, imageAt } from "@/lib/catalogImages";

const baseGoogle = [
  {
    id: "pixel-fold-1",
    name: "Google Pixel Fold",
    image: "/google/pixel-10-pro-fold-1.webp",
    line: "Pixel Fold Series",
    price: "N 1,650,000",
    summary:
      "A premium foldable Pixel showcase focused on clean design and flagship presentation.",
  },
  {
    id: "pixel-fold-2",
    name: "Pixel Fold Studio",
    image: "/google/pixel-10-pro-fold-2.webp",
    line: "Pixel Fold Series",
    price: "N 1,620,000",
    summary:
      "A polished Pixel fold concept with a minimal visual profile and premium finish.",
  },
  {
    id: "pixel-fold-3",
    name: "Pixel Fold View",
    image: "/google/pixel-10-pro-fold-3.webp",
    line: "Pixel Fold Series",
    price: "N 1,610,000",
    summary:
      "A foldable Pixel presentation angle that highlights the device's large-format build.",
  },
  {
    id: "pixel-fold-4",
    name: "Pixel Fold Duo",
    image: "/google/pixel-10-pro-fold-4.webp",
    line: "Pixel Fold Series",
    price: "N 1,600,000",
    summary:
      "A dual-view foldable Pixel product image with a clean hardware-focused look.",
  },
  {
    id: "pixel-fold-5",
    name: "Pixel Fold Pro",
    image: "/google/pixel-10-pro-fold-5.webp",
    line: "Pixel Fold Series",
    price: "N 1,700,000",
    summary:
      "A more premium foldable Pixel variant positioned as a flagship-tier Google device.",
  },
  {
    id: "pixel-fold-6",
    name: "Pixel Fold Slate",
    image: "/google/pixel-10-pro-fold-6.webp",
    line: "Pixel Fold Series",
    price: "N 1,580,000",
    summary:
      "A sleek Pixel fold image emphasizing understated hardware styling and portability.",
  },
  {
    id: "pixel-fold-7",
    name: "Pixel Fold Edge",
    image: "/google/pixel-10-pro-fold-7.webp",
    line: "Pixel Fold Series",
    price: "N 1,590,000",
    summary:
      "A compact Pixel fold presentation suitable for a Google-focused brand showcase page.",
  },
  {
    id: "pixel-fold-8",
    name: "Pixel Fold Air",
    image: "/google/pixel-10-pro-fold-8.webp",
    line: "Pixel Fold Series",
    price: "N 1,560,000",
    summary:
      "A lighter foldable Pixel showcase angle with a softer and more minimal product profile.",
  },
] as const;

const extraGoogle = Array.from({ length: 22 }, (_, index) => {
  const slot = index + 9;
  const series = ["Pixel 9 Pro", "Pixel 9", "Pixel 8a", "Pixel 8", "Pixel 7a"][
    index % 5
  ];

  return {
    id: `google-pixel-extra-${String(slot).padStart(2, "0")}`,
    name: `Google ${series} ${slot}`,
    image: imageAt(googlePhoneImages, slot),
    line: `${series} Series`,
    price: `N ${(480 + index * 14) * 1000}`,
    summary: `Google ${series} family device with Tensor-class performance and clean Android presentation.`,
  };
});

const googleProducts = [...baseGoogle, ...extraGoogle];

export { googleProducts };
