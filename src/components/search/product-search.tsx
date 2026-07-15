"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types/product";

export function ProductSearch({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) =>
      [
        product.name,
        product.category,
        product.color,
        product.material,
        product.description,
        ...product.details,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [products, query]);

  return (
    <section className="mt-8">
      <label className="relative block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#dde6f2]/44" size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-14 w-full rounded-md border border-white/12 bg-white/[0.035] pl-12 pr-4 text-[#f7f1e8] outline-none transition placeholder:text-[#dde6f2]/36 focus:border-[#c8b68a]/56"
          placeholder="Search silk, robe, dress, lounge..."
        />
      </label>
      <div className="mt-4 text-sm text-[#dde6f2]/56">
        {results.length} {results.length === 1 ? "piece" : "pieces"} found
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {results.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </section>
  );
}
