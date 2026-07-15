"use client";

import { useMemo, useSyncExternalStore } from "react";
import { ProductCard } from "@/components/product/product-card";
import {
  getBrowserCatalogProducts,
  subscribeToBrowserCatalog,
} from "@/lib/catalog-storage";
import type { Product } from "@/types/product";

export function ClientProductGrid({
  initialProducts,
  category,
  limit,
}: {
  initialProducts: Product[];
  category?: string;
  limit?: number;
}) {
  const catalog = useSyncExternalStore(
    subscribeToBrowserCatalog,
    getBrowserCatalogProducts,
    () => initialProducts,
  );

  const visibleProducts = useMemo(() => {
    const filtered = category
      ? catalog.filter((product) => product.category === category)
      : catalog;

    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [catalog, category, limit]);

  if (visibleProducts.length === 0) {
    return (
      <div className="rounded-lg border border-white/12 bg-white/[0.035] p-8 text-sm text-[#dde6f2]/62">
        No products are available in this view yet.
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {visibleProducts.map((product) => (
        <ProductCard key={product.handle} product={product} />
      ))}
    </div>
  );
}
