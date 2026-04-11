"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { category } from "@/lib/category";

type CategoriesProps = {
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  initialCount?: number;
  showToggleButton?: boolean;
};

const Categories = ({
  expanded,
  onExpandedChange,
  initialCount = 6,
  showToggleButton = true,
}: CategoriesProps) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : internalExpanded;
  const visibleCategories = isExpanded ? category : category.slice(0, initialCount);
  const canToggle = category.length > initialCount;

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
        {visibleCategories.map((product) => (
          <div
            key={product.Name}
            className="min-h-10 rounded-xl bg-white p-3 text-center text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-slate-200 bg-slate-50 dark:border-slate-200 dark:bg-white">
                {product.href ? (
                  <Link
                    href={product.href}
                    aria-label={`Browse ${product.Name}`}
                  >
                    <Image
                      src={product.Image}
                      alt={product.Name}
                      width={56}
                      height={56}
                      sizes="56px"
                      className="max-h-full max-w-full object-contain transition hover:scale-105"
                    />
                  </Link>
                ) : (
                  <Image
                    src={product.Image}
                    alt={product.Name}
                    width={56}
                    height={56}
                    sizes="56px"
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
              <p className="mt-2 text-xs font-medium leading-tight text-slate-900 dark:text-white">
                {product.Name}
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

export default Categories;
