"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Sparkles } from "lucide-react";
import type { Product } from "@/types/product";
import { useCartStore } from "@/store/cart-store";
import { assetPath } from "@/lib/assets";
import { formatCurrency } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const available = product.inventory - product.reserved;

  return (
    <article className="group soft-border overflow-hidden rounded-lg bg-white/[0.04] shadow-[0_18px_70px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#c8b68a]/32 hover:bg-white/[0.055]">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#111827]">
          <Image
            src={assetPath(product.images[0])}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/72 via-transparent to-transparent opacity-70" />
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/14 bg-[#070a12]/46 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-[#f7f1e8] backdrop-blur">
            <Sparkles size={12} className="text-[#c8b68a]" />
            {product.featured ? "Signature" : product.category}
          </div>
          <button
            type="button"
            aria-label="Wishlist"
            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/14 bg-[#070a12]/40 text-white backdrop-blur transition hover:bg-white/14"
            onClick={(event) => event.preventDefault()}
          >
            <Heart size={16} />
          </button>
        </div>
      </Link>
      <div className="grid gap-4 p-4">
        <div>
          <div className="flex items-start justify-between gap-4">
            <Link href={`/products/${product.handle}`}>
              <h3 className="font-medium text-[#f7f1e8]">{product.name}</h3>
            </Link>
            <div className="text-right">
              <p className="text-sm text-[#f7f1e8]">{formatCurrency(product.price)}</p>
              {product.compareAtPrice ? (
                <p className="text-xs text-[#dde6f2]/42 line-through">
                  {formatCurrency(product.compareAtPrice)}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#dde6f2]/48">
            {product.material}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3 text-xs text-[#dde6f2]/56">
            <span>{product.color}</span>
            <span className={available <= 8 ? "text-amber-100" : "text-emerald-100/80"}>
              {available <= 8 ? `${available} left` : "In stock"}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="flex h-10 items-center justify-center gap-2 rounded-md border border-[#dde6f2]/18 text-sm text-[#dde6f2] transition hover:border-[#f7f1e8]/50 hover:bg-white/8"
        >
          <Plus size={16} />
          Quick add
        </button>
      </div>
    </article>
  );
}
