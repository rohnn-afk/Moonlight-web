import Link from "next/link";
import { footerNav, siteConfig, supportNav } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070a12]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="editorial-serif text-3xl">{siteConfig.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#dde6f2]/62">
            {siteConfig.description}
          </p>
        </div>
        <div className="grid gap-3 text-sm text-[#dde6f2]/70">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="grid gap-3 text-sm text-[#dde6f2]/70">
          {supportNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
