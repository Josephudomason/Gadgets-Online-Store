import { appleGadgets } from "@/lib/appleGadgets";
import { brandCollections } from "@/lib/brandCollections";
import { categoryCollections } from "@/lib/category";
import { description } from "@/lib/description";
import { gamesProducts } from "@/lib/gamesProducts";
import { googleProducts } from "@/lib/googleProducts";
import { huaweiProducts } from "@/lib/huaweiProducts";
import { oppoProducts } from "@/lib/oppoProducts";
import { recommended } from "@/lib/recommended";
import { salesDiscount } from "@/lib/salesDiscount";
import { samsungGadgets } from "@/lib/samsungGadgets";
import { topSales } from "@/lib/topSales";
import { xiaomiProducts } from "@/lib/xiaomiProducts";

type ProductDescription = (typeof description)[number];

type NormalizedListing = {
  id: string;
  name: string;
  image: string;
  brand: string | null;
  model: string;
  storage: string | null;
  price: string | null;
};

const fromTopSales = (): NormalizedListing[] =>
  topSales.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: item.brand,
    model: item.model,
    storage: null,
    price: item.price,
  }));

const fromRecommended = (): NormalizedListing[] =>
  recommended.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: item.brand,
    model: item.model,
    storage: item.storage,
    price: item.price,
  }));

const fromSalesDiscount = (): NormalizedListing[] =>
  salesDiscount.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: item.brand,
    model: item.model,
    storage: null,
    price: item.price,
  }));

const fromGames = (): NormalizedListing[] =>
  gamesProducts.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: item.line.includes("PlayStation")
      ? "PlayStation"
      : item.line.includes("Xbox")
        ? "Xbox"
        : item.line.includes("Nintendo")
          ? "Nintendo"
          : "Game",
    model: item.line,
    storage: null,
    price: item.price,
  }));

const fromApple = (): NormalizedListing[] =>
  appleGadgets.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: "Apple",
    model: item.model,
    storage: item.storage,
    price: item.price,
  }));

const fromSamsung = (): NormalizedListing[] =>
  samsungGadgets.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: "Samsung",
    model: item.model,
    storage: item.storage,
    price: item.price,
  }));

const fromGoogle = (): NormalizedListing[] =>
  googleProducts.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: "Google",
    model: item.line,
    storage: null,
    price: item.price,
  }));

const fromXiaomi = (): NormalizedListing[] =>
  xiaomiProducts.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: "Xiaomi",
    model: item.line,
    storage: null,
    price: item.price,
  }));

const fromOppo = (): NormalizedListing[] =>
  oppoProducts.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: "Oppo",
    model: item.line,
    storage: null,
    price: item.price,
  }));

const fromHuawei = (): NormalizedListing[] =>
  huaweiProducts.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand: "Huawei",
    model: item.line,
    storage: null,
    price: item.price,
  }));

const fromExtraBrandCollections = (): NormalizedListing[] =>
  Object.values(brandCollections).flatMap((collection) =>
    collection.products.map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      brand: item.line.replace(" Collection", ""),
      model: item.line,
      storage: null,
      price: item.price,
    }))
  );

const fromCategoryCollections = (): NormalizedListing[] =>
  Object.values(categoryCollections).flatMap((collection) =>
    collection.products.map((item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      brand: null,
      model: item.line,
      storage: null,
      price: item.price,
    }))
  );

const allListings: NormalizedListing[] = [
  ...fromTopSales(),
  ...fromRecommended(),
  ...fromSalesDiscount(),
  ...fromGames(),
  ...fromApple(),
  ...fromSamsung(),
  ...fromGoogle(),
  ...fromXiaomi(),
  ...fromOppo(),
  ...fromHuawei(),
  ...fromExtraBrandCollections(),
  ...fromCategoryCollections(),
];

const listingsById = new Map<string, NormalizedListing>();
for (const listing of allListings) {
  listingsById.set(listing.id, listing);
}

const descriptionById = new Map(description.map((item) => [item.id, item]));
const descriptionByImage = new Map(description.map((item) => [item.image, item]));

type ProductCatalogItem = ProductDescription & {
  brand: string | null;
  model: string;
  storage: string | null;
  price: string | null;
};

const mergeDesc = (
  desc: ProductDescription,
  listing?: NormalizedListing
): ProductCatalogItem => ({
  ...desc,
  name: listing?.name ?? desc.name,
  image: listing?.image ?? desc.image,
  brand: listing?.brand ?? null,
  model: listing?.model ?? desc.name,
  storage: listing?.storage ?? null,
  price: listing?.price ?? null,
});

const fallbackProduct = (listing: NormalizedListing): ProductCatalogItem => ({
  id: listing.id,
  name: listing.name,
  image: listing.image,
  description: `${listing.name} is available in our catalog. Review specifications and pricing before purchase.`,
  Specifications: {
    brand: listing.brand ?? "—",
    model: listing.model,
    storage: listing.storage ?? "—",
    price: listing.price ?? "—",
  },
  brand: listing.brand,
  model: listing.model,
  storage: listing.storage,
  price: listing.price,
});

const resolveDescription = (
  listing: NormalizedListing
): ProductDescription | undefined =>
  descriptionById.get(listing.id) ?? descriptionByImage.get(listing.image);

const mergedByCanonicalId = new Map<string, ProductCatalogItem>();

for (const listing of listingsById.values()) {
  const desc = resolveDescription(listing);
  if (desc) {
    mergedByCanonicalId.set(desc.id, mergeDesc(desc, listing));
  } else {
    mergedByCanonicalId.set(listing.id, fallbackProduct(listing));
  }
}

for (const desc of description) {
  if (!mergedByCanonicalId.has(desc.id)) {
    mergedByCanonicalId.set(
      desc.id,
      mergeDesc(desc, listingsById.get(desc.id))
    );
  }
}

const products = Array.from(mergedByCanonicalId.values());

const productsById = new Map(products.map((product) => [product.id, product]));

const getProductById = (id: string) => productsById.get(id);

const normalizeTokens = (value: string) =>
  value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2);

const getRelatedProducts = (currentProduct: ProductCatalogItem, limit = 8) => {
  const currentTokens = new Set(
    normalizeTokens(
      `${currentProduct.name} ${currentProduct.model} ${currentProduct.description}`
    )
  );

  return products
    .filter((product) => product.id !== currentProduct.id)
    .map((product) => {
      let score = 0;

      if (
        currentProduct.brand &&
        product.brand &&
        currentProduct.brand.toLowerCase() === product.brand.toLowerCase()
      ) {
        score += 6;
      }

      if (currentProduct.model.toLowerCase() === product.model.toLowerCase()) {
        score += 3;
      }

      const productTokens = normalizeTokens(
        `${product.name} ${product.model} ${product.description}`
      );
      const sharedTokenCount = productTokens.filter((token) =>
        currentTokens.has(token)
      ).length;

      score += sharedTokenCount;

      return { product, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name))
    .slice(0, limit)
    .map((entry) => entry.product);
};

const getProductHref = (product: { id: string; image: string }) => {
  const desc =
    descriptionById.get(product.id) ?? descriptionByImage.get(product.image);

  if (desc) {
    return `/info/${desc.id}`;
  }

  return `/info/${product.id}`;
};

export { getProductById, getProductHref, getRelatedProducts, products };
export type { ProductCatalogItem };
