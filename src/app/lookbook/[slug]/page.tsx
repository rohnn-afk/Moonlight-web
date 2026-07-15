import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "moon-room-campaign" }];
}

export default function LookbookStoryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Campaign story</p>
      <h1 className="editorial-serif mt-4 max-w-3xl text-6xl leading-none">
        A styled night ritual, ready to shop.
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-[#dde6f2]/68">
        This route is prepared for CMS-driven campaign stories with shoppable
        hotspots, editorial copy, and product trays.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </main>
  );
}
