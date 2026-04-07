import type { CatalogCollectionProduct } from "@/lib/catalogFactory";
import { chargersProducts } from "@/lib/chargersProducts";
import { computerAccessoriesProducts } from "@/lib/computerAccessoriesProducts";
import { consolesProducts } from "@/lib/consolesProducts";
import { earbudsProducts } from "@/lib/earbudsProducts";
import { gamesProducts } from "@/lib/gamesProducts";
import { iwatchesProducts } from "@/lib/iwatchesProducts";
import { laptopsProducts } from "@/lib/laptopsProducts";
import { networkRoutersProducts } from "@/lib/networkRoutersProducts";
import { padsProducts } from "@/lib/padsProducts";
import { phonesProducts } from "@/lib/phonesProducts";
import { powerBanksProducts } from "@/lib/powerBanksProducts";
import { speakersProducts } from "@/lib/speakersProducts";
import { storageDevicesProducts } from "@/lib/storageDevicesProducts";
import { tabletsEreadersProducts } from "@/lib/tabletsEreadersProducts";

type CategoryItem = {
  Image: string;
  Name: string;
  href?: string;
};

type CategoryCollection = CategoryItem & {
  eyebrow: string;
  title: string;
  description: string;
  gradientClassName: string;
  accentClassName: string;
  products: readonly CatalogCollectionProduct[];
};

const categoryCollections = {
  phones: {
    Image: "/apple/iphone-16-pro.webp",
    Name: "Phones",
    href: "/categories/phones",
    eyebrow: "Phone Collection",
    title: "Shop phones",
    description:
      "Browse the real phone products already available across the project, gathered into one category page.",
    gradientClassName: "bg-linear-to-r from-sky-100 via-cyan-50 to-violet-100",
    accentClassName: "text-sky-700",
    products: phonesProducts,
  },
  laptops: {
    Image: "/products/Lenovo Amd 1.webp",
    Name: "Laptops",
    href: "/categories/laptops",
    eyebrow: "Laptop Collection",
    title: "Shop laptops",
    description:
      "Browse laptop products with real project images and additional photographed laptop assets.",
    gradientClassName: "bg-linear-to-r from-slate-200 via-white to-slate-300",
    accentClassName: "text-slate-700",
    products: laptopsProducts,
  },
  iwatches: {
    Image: "/products/Google pixel watch 1.webp",
    Name: "iWatches",
    href: "/categories/iwatches",
    eyebrow: "Smartwatch Collection",
    title: "Shop smartwatches",
    description:
      "Browse smartwatches using the real watch assets already in the project plus official watch artwork.",
    gradientClassName: "bg-linear-to-r from-zinc-200 via-slate-100 to-stone-200",
    accentClassName: "text-zinc-700",
    products: iwatchesProducts,
  },
  earbuds: {
    Image: "/earbuds/airpods-pro-2.png",
    Name: "Earbuds",
    href: "/categories/earbuds",
    eyebrow: "Earbuds Collection",
    title: "Shop earbuds",
    description:
      "Browse earbuds and audio accessories using real product images instead of generated placeholders.",
    gradientClassName: "bg-linear-to-r from-fuchsia-100 via-rose-50 to-pink-100",
    accentClassName: "text-fuchsia-700",
    products: earbudsProducts,
  },
  consoles: {
    Image: "/products/Sony Ps4 Console 1.webp",
    Name: "Consoles",
    href: "/categories/consoles",
    eyebrow: "Console Collection",
    title: "Shop consoles",
    description:
      "Browse console products and gaming hardware with real product imagery.",
    gradientClassName: "bg-linear-to-r from-emerald-200 via-green-100 to-lime-100",
    accentClassName: "text-emerald-700",
    products: consolesProducts,
  },
  games: {
    Image: "/products/Fifa Sport game 1.webp",
    Name: "Games",
    href: "/categories/games",
    eyebrow: "Game Collection",
    title: "Shop games",
    description:
      "Browse all the games already in the project plus added PlayStation, Xbox, and Nintendo titles with real cover art.",
    gradientClassName: "bg-linear-to-r from-slate-900 via-indigo-900 to-blue-900",
    accentClassName: "text-cyan-300",
    products: gamesProducts,
  },
  speakers: {
    Image: "/products/JBL speaker 1.webp",
    Name: "Speakers",
    href: "/categories/speakers",
    eyebrow: "Speaker Collection",
    title: "Shop speakers",
    description:
      "Browse real speaker products already in the project along with additional photographed speaker items.",
    gradientClassName: "bg-linear-to-r from-orange-100 via-amber-100 to-yellow-100",
    accentClassName: "text-orange-700",
    products: speakersProducts,
  },
  pads: {
    Image: "/pads/playstation-dualsense.jpg",
    Name: "Pads",
    href: "/categories/pads",
    eyebrow: "Gaming Pads",
    title: "Shop gaming pads",
    description:
      "Browse game pads from PlayStation, Xbox, Nintendo, and PC-friendly controller brands using real product images.",
    gradientClassName: "bg-linear-to-r from-indigo-100 via-sky-50 to-cyan-100",
    accentClassName: "text-indigo-700",
    products: padsProducts,
  },
  chargers: {
    Image: "/chargers/oraimo-phone-charger.png",
    Name: "Chargers",
    href: "/categories/chargers",
    eyebrow: "Chargers Collection",
    title: "Shop chargers",
    description:
      "Browse phone chargers, laptop chargers, and adapters with real photographed product images.",
    gradientClassName: "bg-linear-to-r from-yellow-100 via-amber-100 to-orange-100",
    accentClassName: "text-amber-700",
    products: chargersProducts,
  },
  "computer-accessories": {
    Image: "/computer-accessories/logitech-mx-keys-s.png",
    Name: "Computer Accessories",
    href: "/categories/computer-accessories",
    eyebrow: "Computer Accessories",
    title: "Shop computer accessories",
    description:
      "Browse keyboards, mice, and accessory setups with real product imagery.",
    gradientClassName: "bg-linear-to-r from-slate-200 via-slate-100 to-cyan-100",
    accentClassName: "text-slate-700",
    products: computerAccessoriesProducts,
  },
  "power-banks": {
    Image: "/products/Newage Powerbank 1.webp",
    Name: "Power Banks",
    href: "/categories/power-banks",
    eyebrow: "Power Banks",
    title: "Shop power banks",
    description:
      "Browse all power bank products now backed by real images instead of generated placeholders.",
    gradientClassName: "bg-linear-to-r from-cyan-100 via-teal-50 to-emerald-100",
    accentClassName: "text-teal-700",
    products: powerBanksProducts,
  },
  "network-routers": {
    Image: "/network-routers/tp-link-archer-ax55.jpg",
    Name: "Network Routers",
    href: "/categories/network-routers",
    eyebrow: "Network Routers",
    title: "Shop network routers",
    description:
      "Browse networking products with official router product images.",
    gradientClassName: "bg-linear-to-r from-blue-200 via-sky-100 to-cyan-100",
    accentClassName: "text-blue-700",
    products: networkRoutersProducts,
  },
  "tablets-e-readers": {
    Image: "/tablets-e-readers/tablet-01.png",
    Name: "Tablets & E-readers",
    href: "/categories/tablets-e-readers",
    eyebrow: "Tablets & E-readers",
    title: "Shop tablets and e-readers",
    description:
      "Browse tablets and e-readers with real brand artwork and photographed reading devices.",
    gradientClassName: "bg-linear-to-r from-violet-100 via-purple-50 to-fuchsia-100",
    accentClassName: "text-violet-700",
    products: tabletsEreadersProducts,
  },
  "storage-devices": {
    Image: "/storage-devices/wd-my-passport-ssd.png",
    Name: "Storage Devices",
    href: "/categories/storage-devices",
    eyebrow: "Storage Devices",
    title: "Shop storage devices",
    description:
      "Browse storage products with real SSD, hard-drive, and USB device imagery.",
    gradientClassName: "bg-linear-to-r from-stone-200 via-slate-100 to-zinc-200",
    accentClassName: "text-stone-700",
    products: storageDevicesProducts,
  },
} as const satisfies Record<string, CategoryCollection>;

const category: CategoryItem[] = Object.values(categoryCollections).map(
  ({ Image, Name, href }) => ({
    Image,
    Name,
    href,
  })
);

export { category, categoryCollections };
export type { CategoryCollection, CategoryItem };
export type CategoryCollectionSlug = keyof typeof categoryCollections;
