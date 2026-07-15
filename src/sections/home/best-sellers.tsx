import { products } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";

export function BestSellers() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Best sellers</p>
          <h2 className="editorial-serif mt-4 text-5xl leading-none sm:text-6xl">
            The pieces clients keep close.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#dde6f2]/62">
          Merchandised for fast comparison: price, fabric, availability, and
          quick add stay visible without breaking the boutique mood.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </section>
  );
}
