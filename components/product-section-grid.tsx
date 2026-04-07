"use client";

import { Fragment, useState, type ReactNode } from "react";

type ProductSectionGridProps<T> = {
  items: readonly T[];
  renderItem: (item: T) => ReactNode;
  initialCount?: number;
  maxCount?: number;
  gridClassName?: string;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  showToggleButton?: boolean;
};

const ProductSectionGrid = <T,>({
  items,
  renderItem,
  initialCount = 4,
  maxCount = 30,
  gridClassName = "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
  expanded,
  onExpandedChange,
  showToggleButton = true,
}: ProductSectionGridProps<T>) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isControlled = expanded !== undefined;
  const isExpanded = isControlled ? expanded : internalExpanded;
  const cap = Math.min(maxCount, items.length);
  const visibleCount = isExpanded ? cap : Math.min(initialCount, items.length);
  const visible = items.slice(0, visibleCount);
  const canToggle = cap > initialCount;
  const handleToggle = () => {
    const nextExpanded = !isExpanded;
    if (!isControlled) {
      setInternalExpanded(nextExpanded);
    }
    onExpandedChange?.(nextExpanded);
  };

  return (
    <div className="space-y-4">
      <div className={gridClassName}>
        {visible.map((item) => (
          <Fragment key={(item as { id: string }).id}>{renderItem(item)}</Fragment>
        ))}
      </div>
      {canToggle && showToggleButton ? (
        <div className="flex justify-center pb-2">
          <button
            type="button"
            onClick={handleToggle}
            className="rounded-full border border-violet-200 bg-white px-6 py-2 text-sm font-semibold text-violet-700 shadow-sm transition hover:bg-violet-50 dark:border-violet-800 dark:bg-slate-900 dark:text-violet-300 dark:hover:bg-slate-800"
          >
            {isExpanded ? "Show less" : "See more"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProductSectionGrid;
