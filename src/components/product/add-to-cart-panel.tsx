"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";

export function AddToCartPanel({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="mt-8 rounded-lg border border-white/12 bg-white/[0.035] p-5">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#dde6f2]/50">Color</p>
        <p className="mt-2 text-sm">{product.color}</p>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-[#dde6f2]/50">Size</p>
          <button className="text-xs text-[#dde6f2]/62 underline-offset-4 hover:underline">
            Size guide
          </button>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {product.sizes.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSize(item)}
              className={`h-11 rounded-md border text-sm transition ${
                size === item
                  ? "border-[#f7f1e8] bg-[#f7f1e8] text-[#070a12]"
                  : "border-white/14 text-[#dde6f2] hover:border-white/42"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <Button className="mt-5 w-full" onClick={() => addItem(product, size)}>
        <ShoppingBag size={16} />
        Add to cart
      </Button>
      <p className="mt-3 text-center text-xs text-[#dde6f2]/50">
        Secure checkout. Easy exchanges. Complimentary gift wrap.
      </p>
    </div>
  );
}
