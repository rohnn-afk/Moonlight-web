import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/products";
import { assetPath } from "@/lib/assets";

export default function CollectionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Collections</p>
      <h1 className="editorial-serif mt-4 text-6xl">Night, arranged by ritual.</h1>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {collections.map((collection) => (
          <Link
            key={collection.handle}
            href={`/collections/${collection.handle}`}
            className="group relative min-h-[420px] overflow-hidden rounded-lg soft-border"
          >
            <Image src={assetPath(collection.image)} alt={collection.name} fill className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/90 via-[#070a12]/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h2 className="editorial-serif text-4xl">{collection.name}</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-[#dde6f2]/68">{collection.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
