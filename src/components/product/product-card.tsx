"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import type { Product } from "@/types/product";
import { useCartStore } from "@/store/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="group soft-border overflow-hidden rounded-lg bg-white/[0.035]">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#111827]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a12]/72 via-transparent to-transparent opacity-70" />
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
            <p className="text-sm text-[#f7f1e8]">${product.price}</p>
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#dde6f2]/48">
            {product.material}
          </p>
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
