import { gioneeProducts } from "@/lib/gioneeProducts";
import { honorProducts } from "@/lib/honorProducts";
import { infinixProducts } from "@/lib/infinixProducts";
import { itelProducts } from "@/lib/itelProducts";
import { nokiaProducts } from "@/lib/nokiaProducts";
import { oaleProducts } from "@/lib/oaleProducts";
import { tecnoProducts } from "@/lib/tecnoProducts";
import { vivoProducts } from "@/lib/vivoProducts";

const brandCollections = {
  tecno: {
    eyebrow: "Tecno Collection",
    title: "Explore Tecno devices",
    description: "Browse Tecno phones and related devices from the expanded brand section.",
    gradientClassName: "bg-linear-to-r from-cyan-200 via-sky-100 to-blue-300",
    accentClassName: "text-cyan-700",
    products: tecnoProducts,
  },
  infinix: {
    eyebrow: "Infinix Collection",
    title: "Explore Infinix devices",
    description: "Browse Infinix products curated for shoppers who want stylish specs at accessible pricing.",
    gradientClassName: "bg-linear-to-r from-emerald-200 via-lime-100 to-yellow-100",
    accentClassName: "text-emerald-700",
    products: infinixProducts,
  },
  itel: {
    eyebrow: "Itel Collection",
    title: "Explore Itel devices",
    description: "Browse Itel phones and entry-friendly gadget options from the brand section.",
    gradientClassName: "bg-linear-to-r from-amber-100 via-orange-100 to-rose-100",
    accentClassName: "text-orange-700",
    products: itelProducts,
  },
  nokia: {
    eyebrow: "Nokia Collection",
    title: "Explore Nokia devices",
    description: "Browse Nokia devices built around familiarity, durability, and clean everyday use.",
    gradientClassName: "bg-linear-to-r from-slate-200 via-sky-100 to-indigo-200",
    accentClassName: "text-sky-700",
    products: nokiaProducts,
  },
  gionee: {
    eyebrow: "Gionee Collection",
    title: "Explore Gionee devices",
    description: "Browse Gionee products from the expanded brand catalog and compare available options.",
    gradientClassName: "bg-linear-to-r from-pink-100 via-rose-100 to-orange-100",
    accentClassName: "text-rose-700",
    products: gioneeProducts,
  },
  vivo: {
    eyebrow: "vivo Collection",
    title: "Explore vivo devices",
    description: "Browse vivo devices chosen for shoppers looking for design-forward phones and accessories.",
    gradientClassName: "bg-linear-to-r from-blue-200 via-cyan-100 to-sky-200",
    accentClassName: "text-blue-700",
    products: vivoProducts,
  },
  honor: {
    eyebrow: "Honor Collection",
    title: "Explore Honor devices",
    description: "Browse Honor products directly from the expanded brand section.",
    gradientClassName: "bg-linear-to-r from-indigo-200 via-violet-100 to-fuchsia-100",
    accentClassName: "text-indigo-700",
    products: honorProducts,
  },
  oale: {
    eyebrow: "Oale Collection",
    title: "Explore Oale devices",
    description: "Browse Oale devices and accessories from the new brand collection page.",
    gradientClassName: "bg-linear-to-r from-stone-200 via-orange-50 to-amber-100",
    accentClassName: "text-stone-700",
    products: oaleProducts,
  },
} as const;

export { brandCollections };
export type BrandCollectionSlug = keyof typeof brandCollections;
