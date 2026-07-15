import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070a12]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="editorial-serif text-3xl">Lune Maison</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#dde6f2]/62">
            Premium nightwear for slow evenings, soft mornings, and the quiet theatre of rest.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-[#dde6f2]/70">
          <Link href="/collections/silk-sets">Silk Sets</Link>
          <Link href="/collections/robes">Robes</Link>
          <Link href="/lookbook">Lookbook</Link>
          <Link href="/about">Maison</Link>
        </div>
        <div className="grid gap-3 text-sm text-[#dde6f2]/70">
          <Link href="/policies/shipping">Shipping</Link>
          <Link href="/policies/returns">Returns</Link>
          <Link href="/policies/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
