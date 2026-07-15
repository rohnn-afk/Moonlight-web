import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Maison</p>
          <h1 className="editorial-serif mt-4 text-6xl leading-none">Nightwear with a slower pulse.</h1>
          <p className="mt-6 text-base leading-8 text-[#dde6f2]/70">
            Moonlight Feels designs premium night clothing with the restraint of a
            fashion house and the softness of a private ritual.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg soft-border">
          <Image src="/images/fabric-macro-silk.png" alt="Silk fabric macro" fill className="object-cover" />
        </div>
      </div>
    </main>
  );
}
