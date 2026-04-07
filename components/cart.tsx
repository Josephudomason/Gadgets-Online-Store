"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useSyncExternalStore } from "react";
import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CART_STORAGE_KEY,
  DELIVERY_FEE,
  DISCOUNT_RATE,
  formatPrice,
  parsePrice,
} from "@/lib/cart";
import type { CartItem } from "@/lib/cart";

const emptySubscribe = () => () => {};

const readCartItems = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

  return storedCart ? (JSON.parse(storedCart) as CartItem[]) : [];
};

const Cart = () => {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [cartVersion, setCartVersion] = useState(0);
  const [deselectedItemIds, setDeselectedItemIds] = useState<string[]>([]);

  const cartItems = useMemo(() => {
    void cartVersion;

    return isClient ? readCartItems() : [];
  }, [cartVersion, isClient]);

  const persistCartItems = (nextCartItems: CartItem[]) => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(nextCartItems));
    setDeselectedItemIds((currentIds) =>
      currentIds.filter((itemId) => nextCartItems.some((item) => item.id === itemId))
    );
    setCartVersion((currentVersion) => currentVersion + 1);
  };

  const selectedItems = useMemo(
    () => cartItems.filter((item) => !deselectedItemIds.includes(item.id)),
    [cartItems, deselectedItemIds]
  );

  const subtotal = selectedItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const discount = Math.round(subtotal * DISCOUNT_RATE);
  const deliveryFee = selectedItems.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee - discount;

  const updateQuantity = (id: string, change: number) => {
    const nextCartItems = cartItems.flatMap((item) => {
      if (item.id !== id) {
        return [item];
      }

      const nextQuantity = item.quantity + change;

      return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
    });

    persistCartItems(nextCartItems);
  };

  const removeItem = (id: string) => {
    persistCartItems(cartItems.filter((item) => item.id !== id));
  };

  const toggleSelection = (id: string) => {
    setDeselectedItemIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((itemId) => itemId !== id)
        : [...currentIds, id]
    );
  };

  if (!isClient) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-slate-900">
        <p className="text-base text-gray-500 dark:text-slate-400">Loading cart...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-sm dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-50">Your cart is empty</h2>
        <p className="mt-3 text-gray-500 dark:text-slate-400">
          Add products from the info page and they will show up here.
        </p>
        <Button asChild className="mt-6 bg-[#6B52F1] text-white hover:bg-[#5b43dd]">
          <Link href="/">Continue shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="space-y-4">
        {cartItems.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl bg-white p-5 shadow-sm transition hover:shadow-md dark:bg-slate-900"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={!deselectedItemIds.includes(item.id)}
                  onChange={() => toggleSelection(item.id)}
                  className="h-4 w-4 accent-[#6B52F1]"
                />
                <span className="text-sm font-medium text-gray-600 dark:text-slate-300">Select</span>
              </label>

              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-28 w-full max-w-32 items-center justify-center rounded-2xl bg-gray-50 p-4 dark:bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    sizes="120px"
                    unoptimized={item.image.endsWith(".gif")}
                    className="h-24 w-auto object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
                    {item.brand ?? "Product"}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-slate-50">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">{item.model}</p>
                  <p className="mt-3 text-lg font-bold text-gray-900 dark:text-slate-50">
                    {item.price ?? "Price unavailable"}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-end">
                <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 p-1 dark:border-slate-700 dark:bg-slate-950">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    className="h-10 w-10 rounded-full text-lg font-bold text-gray-700 transition hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800"
                    aria-label={`Reduce quantity for ${item.name}`}
                  >
                    -
                  </button>
                  <span className="min-w-10 text-center text-sm font-semibold text-gray-900 dark:text-slate-50">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    className="h-10 w-10 rounded-full text-lg font-bold text-gray-700 transition hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800"
                    aria-label={`Increase quantity for ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="inline-flex items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/40"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          Order summary
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-slate-50">Cart total</h2>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-slate-300">
            <span>Selected items</span>
            <span>{selectedItems.length}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-slate-300">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-slate-300">
            <span>Delivery fee</span>
            <span>{formatPrice(deliveryFee)}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>-{formatPrice(discount)}</span>
          </div>
        </div>

        <div className="my-6 border-t border-dashed border-gray-200 dark:border-slate-700" />

        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-gray-900 dark:text-slate-50">Total</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-slate-50">{formatPrice(total)}</span>
        </div>

        {selectedItems.length > 0 ? (
          <Button asChild className="mt-6 h-11 w-full bg-[#6B52F1] text-white hover:bg-[#5b43dd]">
            <Link href="/checkout">Proceed to checkout</Link>
          </Button>
        ) : (
          <Button className="mt-6 h-11 w-full bg-[#6B52F1] text-white" disabled>
            Proceed to checkout
          </Button>
        )}

        <Button
          asChild
          variant="outline"
          className="mt-3 h-11 w-full dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          <Link href="/">Continue shopping</Link>
        </Button>
      </aside>
    </div>
  );
};

export default Cart;
