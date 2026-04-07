import type { CatalogCollectionProduct } from "@/lib/catalogFactory";
import { appleGadgets } from "@/lib/appleGadgets";
import { googleProducts } from "@/lib/googleProducts";
import { huaweiProducts } from "@/lib/huaweiProducts";
import { oppoProducts } from "@/lib/oppoProducts";
import { samsungGadgets } from "@/lib/samsungGadgets";
import { xiaomiProducts } from "@/lib/xiaomiProducts";

const hasRealProjectImage = (image: string) =>
  !image.startsWith("/catalog/") &&
  !image.startsWith("/tecno/") &&
  !image.startsWith("/infinix/") &&
  !image.startsWith("/itel/") &&
  !image.startsWith("/nokia/") &&
  !image.startsWith("/gionee/") &&
  !image.startsWith("/vivo/") &&
  !image.startsWith("/honor/") &&
  !image.startsWith("/oale/");

const isPhoneName = (value: string) =>
  !/(watch|buds|fit|tab|tablet|pad)/i.test(value);

const phonesProducts: CatalogCollectionProduct[] = [
  ...appleGadgets
    .filter((item) => isPhoneName(item.name) && hasRealProjectImage(item.image))
    .map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      line: "Apple iPhone",
      price: item.price,
      summary: `${item.model}${item.storage ? ` with ${item.storage}` : ""} from the Apple phone lineup.`,
    })),
  ...samsungGadgets
    .filter((item) => isPhoneName(item.name) && hasRealProjectImage(item.image))
    .map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      line: "Samsung Galaxy",
      price: item.price,
      summary: `${item.model}${item.storage ? ` with ${item.storage}` : ""} from the Samsung phone lineup.`,
    })),
  ...googleProducts
    .filter((item) => isPhoneName(item.name) && hasRealProjectImage(item.image))
    .map((item) => ({ ...item })),
  ...xiaomiProducts
    .filter((item) => isPhoneName(item.name) && hasRealProjectImage(item.image))
    .map((item) => ({ ...item })),
  ...huaweiProducts
    .filter((item) => isPhoneName(item.name) && hasRealProjectImage(item.image))
    .map((item) => ({ ...item })),
  ...oppoProducts
    .filter((item) => isPhoneName(item.name) && hasRealProjectImage(item.image))
    .map((item) => ({ ...item })),
  {
    id: "tecno-camon-19-real",
    name: "Tecno Camon 19",
    image: "/products/Tecno cmaon 19 1.webp",
    line: "Tecno Camon",
    price: "N 240,000",
    summary: "A real Tecno phone image already present in the project and included in the phone category.",
  },
];

export { phonesProducts };
