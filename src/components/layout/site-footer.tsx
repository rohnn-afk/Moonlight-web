import Link from "next/link";
import { ArrowRight, Globe2, Mail, Moon, ShieldCheck } from "lucide-react";
import { footerNav, siteConfig, supportNav } from "@/config/site";

const serviceLinks = [
  { href: "/checkout", label: "Checkout" },
  { href: "/account", label: "Account" },
  { href: "/account/orders", label: "Order tracking" },
  { href: "/account/wishlist", label: "Wishlist" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-[#dde6f2]/18 bg-white/5">
                <Moon size={18} />
              </span>
              <span className="editorial-serif text-3xl">{siteConfig.name}</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#dde6f2]/62">
              {siteConfig.description}
            </p>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="mt-5 inline-block text-sm text-[#f7f1e8] underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
            <div className="grid gap-5 md:grid-cols-[0.48fr_0.52fr] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-[#f7f1e8]">
                  <Mail size={17} className="text-[#c8b68a]" />
                  Private list
                </div>
                <p className="mt-2 text-sm leading-6 text-[#dde6f2]/60">
                  Early collection access and restock notes.
                </p>
              </div>
              <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                aria-label="Email address"
                placeholder="Email address"
                className="h-12 rounded-md border border-white/12 bg-[#070a12]/70 px-4 text-sm text-[#f7f1e8] outline-none transition placeholder:text-[#dde6f2]/34 focus:border-[#c8b68a]/60"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#f7f1e8] px-5 text-sm font-semibold text-[#070a12] transition hover:bg-[#fff8ec]"
              >
                Join <ArrowRight size={15} />
              </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Shop" links={footerNav} />
          <FooterColumn title="Client care" links={supportNav} />
          <FooterColumn title="Services" links={serviceLinks} />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c8b68a]">
              Global boutique
            </p>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[#dde6f2]/62">
              <p className="flex gap-3">
                <Globe2 size={17} className="mt-0.5 shrink-0 text-[#c8b68a]" />
                Global-ready storefront with static delivery.
              </p>
              <p className="flex gap-3">
                <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#c8b68a]" />
                Secure checkout flow and clear policy access.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#dde6f2]/44 sm:flex-row sm:items-center">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <span>USD</span>
            <span>Global shipping</span>
            <span>Premium nightwear atelier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-[#c8b68a]">{title}</p>
      <div className="mt-5 grid gap-3 text-sm text-[#dde6f2]/70">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-[#f7f1e8]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
