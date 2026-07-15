import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { AddToCartPanel } from "@/components/product/add-to-cart-panel";
import { getProduct, products } from "@/data/products";
import { formatCurrency } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.handle !== product.handle).slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg soft-border">
            <Image src={product.image} alt={product.name} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/42 to-transparent" />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg soft-border">
            <Image src="/images/fabric-macro-silk.png" alt={`${product.name} fabric macro detail`} fill className="object-cover" />
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">{product.category}</p>
          <h1 className="editorial-serif mt-4 text-6xl leading-none">{product.name}</h1>
          <p className="mt-5 text-2xl">{formatCurrency(product.price)}</p>
          <p className="mt-6 text-base leading-8 text-[#dde6f2]/70">{product.description}</p>
          <AddToCartPanel product={product} />
          <div className="mt-8 grid gap-3">
            {[
              ["Material", product.material],
              ["Fit", "Relaxed, elegant drape with room to move."],
              ["Care", "Cold delicate wash or dry clean. Store away from direct sun."],
              ["Delivery", "Complimentary delivery and easy exchanges on premium orders."],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#dde6f2]/44">{label}</p>
                <p className="mt-2 text-sm leading-6 text-[#dde6f2]/72">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Complete the look</p>
          <h2 className="editorial-serif mt-3 text-5xl">Pairs beautifully with</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.handle} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
