"use client";

import Image from "next/image";
import Link from "next/link";

import CartCornerIcon from "@/components/cart-corner-icon";
import ProductSectionGrid from "@/components/product-section-grid";
import { getProductHref, type ProductCatalogItem } from "@/lib/productCatalog";

type RelatedProductsProps = {
  products: readonly ProductCatalogItem[];
};

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <ProductSectionGrid
      items={products}
      initialCount={4}
      maxCount={8}
      renderItem={(product) => (
        <Link
          href={getProductHref(product)}
          className="relative block overflow-hidden rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900"
        >
          <CartCornerIcon />
          <div className="mb-3 flex justify-center rounded-lg bg-gray-50 p-4 dark:bg-slate-950">
            <Image
              src={product.image}
              alt={product.name}
              width={160}
              height={160}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 160px"
              unoptimized={product.image.endsWith(".gif")}
              className="h-36 w-auto object-contain"
            />
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-violet-600">
              {product.brand ?? "Related item"}
            </p>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-100">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-slate-400">{product.model}</p>
            {product.price ? (
              <p className="pt-1 text-base font-bold text-gray-900 dark:text-slate-100">
                {product.price}
              </p>
            ) : null}
          </div>
        </Link>
      )}
    />
  );
};

export default RelatedProducts;
