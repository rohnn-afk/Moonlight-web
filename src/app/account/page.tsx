import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Account</p>
      <h1 className="editorial-serif mt-4 text-6xl">Your private wardrobe.</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["/account/orders", "Orders", "Track purchases and delivery."],
          ["/account/wishlist", "Wishlist", "Return to saved nightwear."],
          ["/contact", "Client care", "Sizing, fabric, and returns support."],
        ].map(([href, title, copy]) => (
          <Link key={href} href={href} className="rounded-lg border border-white/12 bg-white/[0.035] p-5 transition hover:bg-white/[0.06]">
            <h2 className="editorial-serif text-3xl">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#dde6f2]/62">{copy}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
