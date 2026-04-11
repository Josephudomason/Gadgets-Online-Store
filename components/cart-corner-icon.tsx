"use client";

import { useSyncExternalStore, type MouseEvent } from "react";
import { ShoppingCart } from "lucide-react";

import {
  isProductInCart,
  subscribeToCart,
  toggleProductInCart,
  type CartProduct,
} from "@/lib/cart";

type CartCornerIconProps = {
  product: CartProduct;
};

const CartCornerIcon = ({ product }: CartCornerIconProps) => {
  const isAdded = useSyncExternalStore(
    subscribeToCart,
    () => isProductInCart(product.id),
    () => false
  );

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    toggleProductInCart(product);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      aria-label={isAdded ? "Remove product from cart" : "Add product to cart"}
      title={isAdded ? "Remove from cart" : "Add to cart"}
      className={`absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-white shadow-sm transition ${isAdded
          ? "bg-emerald-600 hover:bg-emerald-700"
          : "bg-[#5a45db] hover:bg-[#4f3ad1]"
        }`}
    >
      <ShoppingCart size={14} />
    </button>
  );
};

export default CartCornerIcon;
