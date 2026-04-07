"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import CartCornerIcon from "@/components/cart-corner-icon";
import { getProductHref } from "@/lib/productCatalog";

type BrandProduct = {
  id: string;
  name: string;
  image: string;
  line: string;
  price: string;
  summary: string;
};

type BrandProductGridProps = {
  products: readonly BrandProduct[];
  accentClassName: string;
  initialCount?: number;
  maxCount?: number;
};

const BrandProductGrid = ({
  products,
  accentClassName,
  initialCount = 4,
  maxCount = 30,
}: BrandProductGridProps) => {
  const [expanded, setExpanded] = useState(false);
  const cap = Math.min(maxCount, products.length);
  const visibleCount = expanded ? cap : Math.min(initialCount, products.length);
  const visible = products.slice(0, visibleCount);
  const canToggle = cap > initialCount;

  return (
    <div className="space-y-6">
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((product) => (
          <Link
            key={product.id}
            href={getProductHref(product)}
            className="relative block rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
          >
            <article>
              <CartCornerIcon />
              <div className="flex h-56 items-center justify-center rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 220px"
                  unoptimized={product.image.endsWith(".gif")}
                  className="h-auto max-h-48 w-auto object-contain"
                />
              </div>

              <div className="mt-5">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.25em] ${accentClassName}`}
                >
                  {product.line}
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-50">
                  {product.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {product.summary}
                </p>
                <p className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-50">
                  {product.price}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
      {canToggle ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            {expanded ? "Show less" : "See more"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BrandProductGrid;
