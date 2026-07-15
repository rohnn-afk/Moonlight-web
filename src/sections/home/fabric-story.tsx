import Image from "next/image";

export function FabricStory() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
      <div className="relative min-h-[520px] overflow-hidden rounded-lg">
        <Image
          src="/images/fabric-macro-silk.png"
          alt="Macro detail of silk satin with lace"
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/46 to-transparent" />
      </div>
      <div className="flex items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Material story</p>
          <h2 className="editorial-serif mt-5 text-5xl leading-none text-balance sm:text-6xl">
            Light moves differently across real silk.
          </h2>
          <p className="mt-7 text-base leading-8 text-[#dde6f2]/68">
            The collection is built around tactile clarity: cool silk satin,
            fine stitching, soft lace, and breathable layers that feel refined
            without becoming delicate for daily wear.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["19 momme silk", "French seams", "Soft lace edges"].map((item) => (
              <div key={item} className="soft-border rounded-md p-4 text-sm text-[#dde6f2]/72">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
