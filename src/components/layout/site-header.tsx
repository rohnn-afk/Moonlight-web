"use client";

import Link from "next/link";
import { Menu, Moon, Search, Settings, ShoppingBag, UserRound } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { primaryNav, siteConfig } from "@/config/site";

export function SiteHeader() {
  const { items, openCart } = useCartStore();
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070a12]/82 shadow-[0_14px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full border border-[#dde6f2]/20 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Moon size={17} />
          </span>
          <span className="editorial-serif text-xl tracking-wide">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#dde6f2]/76 md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-2 py-1 transition hover:bg-white/6 hover:text-[#f7f1e8]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            aria-label="Search"
            className="grid size-10 place-items-center rounded-full text-[#dde6f2]/80 transition hover:bg-white/8 hover:text-white"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden size-10 place-items-center rounded-full text-[#dde6f2]/80 transition hover:bg-white/8 hover:text-white sm:grid"
          >
            <UserRound size={18} />
          </Link>
          <Link
            href="/admin"
            aria-label="Admin"
            className="hidden size-10 place-items-center rounded-full text-[#dde6f2]/80 transition hover:bg-white/8 hover:text-white sm:grid"
          >
            <Settings size={18} />
          </Link>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative grid size-10 place-items-center rounded-full text-[#dde6f2]/80 transition hover:bg-white/8 hover:text-white"
          >
            <ShoppingBag size={18} />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#f7f1e8] text-[11px] font-semibold text-[#070a12]">
                {count}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="grid size-10 place-items-center rounded-full text-[#dde6f2]/80 transition hover:bg-white/8 md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
