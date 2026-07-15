import { ProductSearch } from "@/components/search/product-search";
import { products } from "@/data/products";

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Search</p>
      <h1 className="editorial-serif mt-4 text-6xl">Find your piece.</h1>
      <ProductSearch products={products} />
    </main>
  );
}
