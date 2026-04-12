import type { ProductCatalogItem } from "@/lib/productCatalog";

const CART_STORAGE_KEY = "cart-items";
const CART_STATE_EVENT = "store-cart-change";
const DELIVERY_FEE = 5000;
const DISCOUNT_RATE = 0.1;
const EMPTY_CART_ITEMS: CartItem[] = [];

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: string | null;
  brand: string | null;
  model: string;
  quantity: number;
};

type CartProduct = Pick<
  ProductCatalogItem,
  "id" | "name" | "image" | "price" | "brand" | "model"
>;

let cachedCartRaw: string | null | undefined;
let cachedCartSnapshot: CartItem[] = EMPTY_CART_ITEMS;

const parsePrice = (price: string | null) => {
  if (!price) {
    return 0;
  }

  const numericPrice = Number(price.replace(/[^\d.]/g, ""));

  return Number.isNaN(numericPrice) ? 0 : numericPrice;
};

const formatPrice = (amount: number) =>
  `N ${new Intl.NumberFormat("en-NG").format(amount)}`;

const createCartItem = (product: CartProduct): CartItem => ({
  id: product.id,
  name: product.name,
  image: product.image,
  price: product.price,
  brand: product.brand,
  model: product.model,
  quantity: 1,
});

const normalizeCartItem = (value: unknown): CartItem | null => {
  if (!value || typeof value !== "object") {
    return null;
  }

  const candidate = value as Partial<CartItem>;

  if (
    typeof candidate.id !== "string" ||
    typeof candidate.name !== "string" ||
    typeof candidate.image !== "string" ||
    typeof candidate.model !== "string"
  ) {
    return null;
  }

  return {
    id: candidate.id,
    name: candidate.name,
    image: candidate.image,
    price: typeof candidate.price === "string" || candidate.price === null ? candidate.price ?? null : null,
    brand: typeof candidate.brand === "string" || candidate.brand === null ? candidate.brand ?? null : null,
    model: candidate.model,
    quantity:
      typeof candidate.quantity === "number" && Number.isFinite(candidate.quantity) && candidate.quantity > 0
        ? Math.floor(candidate.quantity)
        : 1,
  };
};

const normalizeCartItems = (value: unknown): CartItem[] => {
  if (!Array.isArray(value)) {
    return EMPTY_CART_ITEMS;
  }

  const normalizedItems = value
    .map(normalizeCartItem)
    .filter((item): item is CartItem => item !== null);

  return normalizedItems.length > 0 ? normalizedItems : EMPTY_CART_ITEMS;
};

const dispatchCartChange = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(CART_STATE_EVENT));
};

const readCartItems = (): CartItem[] => {
  if (typeof window === "undefined") {
    return EMPTY_CART_ITEMS;
  }

  const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

  if (storedCart === cachedCartRaw) {
    return cachedCartSnapshot;
  }

  if (!storedCart) {
    cachedCartRaw = null;
    cachedCartSnapshot = EMPTY_CART_ITEMS;
    return cachedCartSnapshot;
  }

  try {
    cachedCartRaw = storedCart;
    cachedCartSnapshot = normalizeCartItems(JSON.parse(storedCart));
  } catch {
    cachedCartRaw = storedCart;
    cachedCartSnapshot = EMPTY_CART_ITEMS;
  }

  return cachedCartSnapshot;
};

const writeCartItems = (cartItems: CartItem[]) => {
  if (typeof window === "undefined") {
    return;
  }

  const nextCartItems = normalizeCartItems(cartItems);
  const raw = JSON.stringify(nextCartItems);

  window.localStorage.setItem(CART_STORAGE_KEY, raw);
  cachedCartRaw = raw;
  cachedCartSnapshot = nextCartItems;
  dispatchCartChange();
};

const addProductToCart = (product: CartProduct) => {
  const cartItems = readCartItems();
  const existingItem = cartItems.find((item) => item.id === product.id);
  const nextCartItems = existingItem
    ? cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    : [...cartItems, createCartItem(product)];

  writeCartItems(nextCartItems);

  return nextCartItems;
};

const removeProductFromCart = (productId: string) => {
  const nextCartItems = readCartItems().filter((item) => item.id !== productId);
  writeCartItems(nextCartItems);

  return nextCartItems;
};

const toggleProductInCart = (product: CartProduct) => {
  if (isProductInCart(product.id)) {
    removeProductFromCart(product.id);
    return false;
  }

  addProductToCart(product);
  return true;
};

const isProductInCart = (productId: string) =>
  readCartItems().some((item) => item.id === productId);

const clearCartItems = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CART_STORAGE_KEY);
  cachedCartRaw = null;
  cachedCartSnapshot = EMPTY_CART_ITEMS;
  dispatchCartChange();
};

const subscribeToCart = (onStoreChange: () => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CART_STATE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CART_STATE_EVENT, onStoreChange);
  };
};

export {
  addProductToCart,
  CART_STORAGE_KEY,
  CART_STATE_EVENT,
  clearCartItems,
  createCartItem,
  DELIVERY_FEE,
  DISCOUNT_RATE,
  EMPTY_CART_ITEMS,
  formatPrice,
  isProductInCart,
  parsePrice,
  readCartItems,
  removeProductFromCart,
  subscribeToCart,
  toggleProductInCart,
  writeCartItems,
};
export type { CartItem, CartProduct };
