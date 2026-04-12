"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";

import { useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/ui/button";
import { addProductToCart, isProductInCart, subscribeToCart } from "@/lib/cart";
import type { ProductCatalogItem } from "@/lib/productCatalog";

type AddToCartButtonProps = {
  product: ProductCatalogItem;
};

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { session } = useAuth();
  const isAdded = useSyncExternalStore(
    subscribeToCart,
    () => isProductInCart(product.id),
    () => false
  );
  const checkoutHref = useMemo(
    () => (session ? "/checkout" : `/signup?next=${encodeURIComponent("/checkout")}`),
    [session]
  );

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  return (
    <div className="mt-8 flex w-full flex-col gap-3">
      <Button
        type="button"
        size="lg"
        onClick={handleAddToCart}
        className="h-11 w-full bg-[#6B52F1] px-6 text-white hover:bg-[#5b43dd] sm:w-auto"
      >
        {isAdded ? "Added to cart" : "Add to cart"}
      </Button>

      {isAdded ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            variant="outline"
            className="h-11 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <Link href="/cart">View cart</Link>
          </Button>
          <Button asChild className="h-11 bg-[#6B52F1] text-white hover:bg-[#5b43dd]">
            <Link href={checkoutHref}>Proceed to checkout</Link>
          </Button>
        </div>
      ) : null}

      <p className="text-sm text-gray-500 dark:text-slate-400">
        {isAdded ? "This product has been saved in your cart." : "Add this product to your cart for checkout."}
      </p>
    </div>
  );
};

export default AddToCartButton;
