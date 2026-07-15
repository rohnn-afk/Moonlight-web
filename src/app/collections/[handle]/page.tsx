import { notFound } from "next/navigation";
import { CollectionReveal } from "@/sections/home/collection-reveal";
import { ClientProductGrid } from "@/components/product/client-product-grid";
import { collections, getCollection, products } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((collection) => ({
    handle: collection.handle,
  }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = getCollection(handle);

  if (!collection) {
    notFound();
  }

  return (
    <main className="pb-24 pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Collection</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[0.7fr_0.3fr] md:items-end">
          <h1 className="editorial-serif text-6xl leading-none sm:text-7xl">{collection.name}</h1>
          <p className="text-sm leading-7 text-[#dde6f2]/66">{collection.description}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-[#dde6f2]/58">
          {["Size", "Color", "Material", "Availability", "Sort"].map((filter) => (
            <button key={filter} className="rounded-full border border-white/12 px-4 py-3 transition hover:border-white/34">
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-10">
          <ClientProductGrid initialProducts={products} category={collection.name} />
        </div>
      </section>
      <CollectionReveal />
    </main>
  );
}
