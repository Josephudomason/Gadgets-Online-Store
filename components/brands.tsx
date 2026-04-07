"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brands } from "@/lib/brands";

type BrandsProps = {
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  initialCount?: number;
  showToggleButton?: boolean;
};

const Brands = ({
  expanded,
  onExpandedChange,
  initialCount = 6,
  showToggleButton = true,
}: BrandsProps) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : internalExpanded;
  const visibleBrands = isExpanded ? brands : brands.slice(0, initialCount);
  const canToggle = brands.length > initialCount;

  const handleToggle = () => {
    const nextExpanded = !isExpanded;
    if (!isControlled) {
      setInternalExpanded(nextExpanded);
    }
    onExpandedChange?.(nextExpanded);
  };

  return (
    <div className="space-y-4">
      <div className="grid w-full grid-cols-4 gap-4 p-2 sm:grid-cols-3 lg:grid-cols-6">
        {visibleBrands.map((brand) => (
          <div key={brand.brandName} className="min-h-10 rounded-xl bg-white p-3 text-center dark:bg-slate-900">
            <div className="flex flex-col items-center justify-center">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-md border border-gray-300 p-2 dark:border-slate-700 ${
                  brand.brandName === "Infinix" ? "bg-slate-950" : ""
                }`}
              >
                {brand.href ? (
                  <Link
                    href={brand.href}
                    aria-label={`View ${brand.brandName} products`}
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.brandName}
                      width={56}
                      height={56}
                      className="max-h-full max-w-full object-contain transition hover:scale-105"
                    />
                  </Link>
                ) : (
                  <Image
                    src={brand.logo}
                    alt={brand.brandName}
                    width={56}
                    height={56}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
              <p className="mt-2 text-xs font-medium leading-tight text-gray-700 dark:text-slate-200">
                {brand.brandName}
              </p>
            </div>
          </div>
        ))}
      </div>

      {canToggle && showToggleButton ? (
        <div className="flex justify-end px-2">
          <button
            type="button"
            onClick={handleToggle}
            className="text-sm font-semibold text-[#6B52F1] hover:underline"
          >
            {isExpanded ? "show less" : "see more"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Brands;
