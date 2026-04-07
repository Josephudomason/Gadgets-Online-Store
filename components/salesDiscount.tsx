"use client";

import Link from "next/link";
import Image from "next/image";
import CartCornerIcon from "@/components/cart-corner-icon";
import { salesDiscount } from "@/lib/salesDiscount";
import { getProductHref } from "@/lib/productCatalog";
import ProductSectionGrid from "@/components/product-section-grid";

type SalesDiscountSectionProps = {
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  showToggleButton?: boolean;
};

const SalesDiscountSection = ({
  expanded,
  onExpandedChange,
  showToggleButton,
}: SalesDiscountSectionProps) => {
  return (
    <ProductSectionGrid
      items={salesDiscount}
      expanded={expanded}
      onExpandedChange={onExpandedChange}
      showToggleButton={showToggleButton}
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
              className="h-36 w-auto object-contain"
            />
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wide text-violet-600">
              {product.brand}
            </p>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-100">{product.name}</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400">{product.model}</p>
            <p className="pt-1 text-base font-bold text-gray-900 dark:text-slate-100">{product.price}</p>
          </div>
        </Link>
      )}
    />
  );
};

export default SalesDiscountSection;
