import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

export default function WishlistPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Wishlist</p>
      <h1 className="editorial-serif mt-4 text-6xl">Saved for later.</h1>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 2).map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </main>
  );
}
