import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function LookbookPage() {
  return (
    <main className="pb-24 pt-16">
      <section className="relative min-h-[76vh] overflow-hidden">
        <Image src="/images/collection-moonlit-lineup.png" alt="Moonlit nightwear lookbook" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a12]/88 via-[#070a12]/44 to-transparent" />
        <div className="relative mx-auto flex min-h-[76vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Lookbook</p>
            <h1 className="editorial-serif mt-5 text-7xl leading-none">The moon room campaign.</h1>
            <p className="mt-6 text-base leading-8 text-[#dde6f2]/70">
              Shop styled rituals built from silk sets, robes, sleep dresses,
              and lounge layers with editorial clarity.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {products.slice(0, 2).map((product) => (
            <Link
              key={product.handle}
              href={`/products/${product.handle}`}
              className="group relative min-h-[520px] overflow-hidden rounded-lg soft-border"
            >
              <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/88 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[#c8b68a]">Shop the look</p>
                <h2 className="editorial-serif mt-2 text-4xl">{product.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
