"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { ButtonLink } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";

export function CartDrawer() {
  const { isOpen, items, closeCart, removeItem } = useCartStore();
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <div
      className={`fixed inset-0 z-[80] transition ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className={`absolute inset-0 bg-black/58 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-white/12 bg-[#070a12]/92 p-5 shadow-2xl backdrop-blur-2xl transition duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#c8b68a]">Cart</p>
            <h2 className="editorial-serif mt-1 text-3xl">Your night ritual</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="grid size-10 place-items-center rounded-full border border-white/12 text-white"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-5">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="editorial-serif text-3xl">The drawer is quiet.</p>
                <p className="mt-3 text-sm text-[#dde6f2]/60">
                  Add silk, robes, or lounge layers to begin.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid gap-4">
              {items.map((item) => (
                <div
                  key={`${item.product.handle}-${item.size}`}
                  className="grid grid-cols-[86px_1fr] gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-3"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                    <Image src={item.product.images[0]} alt="" fill className="object-cover" />
                  </div>
                  <div>
                    <Link href={`/products/${item.product.handle}`} className="font-medium">
                      {item.product.name}
                    </Link>
                    <p className="mt-1 text-xs text-[#dde6f2]/56">
                      {item.size} / Qty {item.quantity}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm">
                        {formatCurrency(item.product.price * item.quantity)}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.handle, item.size)}
                        className="text-xs text-[#dde6f2]/54 underline-offset-4 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-white/10 pt-5">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-[#dde6f2]/62">Subtotal</span>
            <span className="text-lg">{formatCurrency(subtotal)}</span>
          </div>
          <ButtonLink href="/checkout" className="w-full">
            Continue to checkout
          </ButtonLink>
          <p className="mt-3 text-center text-xs text-[#dde6f2]/46">
            Taxes and delivery are calculated at checkout.
          </p>
        </div>
      </aside>
    </div>
  );
}
