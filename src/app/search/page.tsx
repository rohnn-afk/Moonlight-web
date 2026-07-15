import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Search</p>
      <h1 className="editorial-serif mt-4 text-6xl">Find your piece.</h1>
      <input
        className="mt-8 h-14 w-full rounded-md border border-white/12 bg-white/[0.035] px-4 text-[#f7f1e8] outline-none placeholder:text-[#dde6f2]/36"
        placeholder="Search silk, robe, dress, lounge..."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </main>
  );
}
