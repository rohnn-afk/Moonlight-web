import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/products";

export function CollectionReveal() {
  return (
    <section className="bg-[#0b101b] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Collections</p>
            <h2 className="editorial-serif mt-4 text-5xl sm:text-6xl">Designed after dark.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#dde6f2]/62">
            Editorial atmosphere meets practical shopping. Every collection is
            clear, tactile, and easy to buy.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {collections.map((collection, index) => (
            <Link
              key={collection.handle}
              href={`/collections/${collection.handle}`}
              className={`group relative min-h-[420px] overflow-hidden rounded-lg soft-border ${
                index === 1 ? "md:mt-12" : index === 2 ? "md:mt-24" : ""
              }`}
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/92 via-[#070a12]/28 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="editorial-serif text-3xl">{collection.name}</p>
                <p className="mt-2 text-sm leading-6 text-[#dde6f2]/66">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
