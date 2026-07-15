"use client";

import { create } from "zustand";
import type { Product } from "@/types/product";

type CartItem = {
  product: Product;
  size: string;
  quantity: number;
};

type CartStore = {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, size?: string) => void;
  removeItem: (handle: string, size: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (product, size = product.sizes[0]) =>
    set((state) => {
      const existing = state.items.find(
        (item) => item.product.handle === product.handle && item.size === size,
      );

      if (existing) {
        return {
          isOpen: true,
          items: state.items.map((item) =>
            item.product.handle === product.handle && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        isOpen: true,
        items: [...state.items, { product, size, quantity: 1 }],
      };
    }),
  removeItem: (handle, size) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.product.handle !== handle || item.size !== size,
      ),
    })),
}));
