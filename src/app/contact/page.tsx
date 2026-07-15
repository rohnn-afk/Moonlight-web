import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const contactOptions = [
    siteConfig.contactEmail,
    "Shipping and returns support",
    "Sizing and fabric advice",
  ];

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">Contact</p>
      <h1 className="editorial-serif mt-4 text-6xl">Private client care.</h1>
      <div className="mt-10 grid gap-4">
        {contactOptions.map((item) => (
          <div key={item} className="rounded-lg border border-white/12 bg-white/[0.035] p-5 text-[#dde6f2]/72">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
