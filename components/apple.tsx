"use client";

import Link from "next/link";
import Image from "next/image";
import CartCornerIcon from "@/components/cart-corner-icon";
import { appleGadgets } from "@/lib/appleGadgets";
import { getProductHref } from "@/lib/productCatalog";
import ProductSectionGrid from "@/components/product-section-grid";

type AppleSectionProps = {
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  showToggleButton?: boolean;
};

const AppleSection = ({
  expanded,
  onExpandedChange,
  showToggleButton,
}: AppleSectionProps) => {
  return (
    <ProductSectionGrid
      items={appleGadgets}
      expanded={expanded}
      onExpandedChange={onExpandedChange}
      showToggleButton={showToggleButton}
      renderItem={(product) => (
        <article className="relative overflow-hidden rounded-xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-800">
          <CartCornerIcon product={{ ...product, brand: "Apple" }} />
          <Link href={getProductHref(product)} className="block">
            <div className="mb-3 flex justify-center rounded-lg bg-gray-50 p-4 dark:bg-gray-100">
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
                Apple
              </p>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-slate-100">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">{product.model}</p>
              <p className="pt-1 text-base font-bold text-gray-900 dark:text-slate-100">
                {product.price}
              </p>
            </div>
          </Link>
        </article>
      )}
    />
  );
};

export default AppleSection;
