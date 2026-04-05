"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CART_STORAGE_KEY, createCartItem } from "@/lib/cart";
import type { CartItem } from "@/lib/cart";
import type { ProductCatalogItem } from "@/lib/productCatalog";

type AddToCartButtonProps = {
  product: ProductCatalogItem;
};

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (typeof window === "undefined") {
      return;
    }

    const existingCart = window.localStorage.getItem(CART_STORAGE_KEY);
    const cartItems: CartItem[] = existingCart ? JSON.parse(existingCart) : [];
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push(createCartItem(product));
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    setIsAdded(true);

    window.setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button
        type="button"
        size="lg"
        onClick={handleAddToCart}
        className="h-11 bg-[#6B52F1] px-6 text-white hover:bg-[#5b43dd]"
      >
        {isAdded ? "Added to cart" : "Add to cart"}
      </Button>

      <p className="text-sm text-gray-500">
        {isAdded ? "This product has been saved in your cart." : "Add this product to your cart for checkout."}
      </p>
    </div>
  );
};

export default AddToCartButton;
