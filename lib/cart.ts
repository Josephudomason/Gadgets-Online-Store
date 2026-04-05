import type { ProductCatalogItem } from "@/lib/productCatalog";

const CART_STORAGE_KEY = "cart-items";
const DELIVERY_FEE = 5000;
const DISCOUNT_RATE = 0.1;

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: string | null;
  brand: string | null;
  model: string;
  quantity: number;
};

const parsePrice = (price: string | null) => {
  if (!price) {
    return 0;
  }

  const numericPrice = Number(price.replace(/[^\d.]/g, ""));

  return Number.isNaN(numericPrice) ? 0 : numericPrice;
};

const formatPrice = (amount: number) =>
  `N ${new Intl.NumberFormat("en-NG").format(amount)}`;

const createCartItem = (product: ProductCatalogItem): CartItem => ({
  id: product.id,
  name: product.name,
  image: product.image,
  price: product.price,
  brand: product.brand,
  model: product.model,
  quantity: 1,
});

export {
  CART_STORAGE_KEY,
  createCartItem,
  DELIVERY_FEE,
  DISCOUNT_RATE,
  formatPrice,
  parsePrice,
};
export type { CartItem };
