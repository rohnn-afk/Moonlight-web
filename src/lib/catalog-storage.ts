import { products as seededProducts } from "@/data/products";
import type { Product } from "@/types/product";

export const CATALOG_STORAGE_KEY = "moonlight-feels-admin-products-v2";
const CATALOG_CHANGE_EVENT = "moonlight-feels-catalog-change";

let cachedRawCatalog: string | null = null;
let cachedCatalogProducts: Product[] = seededProducts;

export function getBrowserCatalogProducts() {
  if (typeof window === "undefined") {
    return seededProducts;
  }

  const stored = window.localStorage.getItem(CATALOG_STORAGE_KEY);
  if (stored === cachedRawCatalog) {
    return cachedCatalogProducts;
  }

  cachedRawCatalog = stored;
  if (!stored) {
    cachedCatalogProducts = seededProducts;
    return cachedCatalogProducts;
  }

  try {
    cachedCatalogProducts = JSON.parse(stored) as Product[];
    return cachedCatalogProducts;
  } catch {
    cachedCatalogProducts = seededProducts;
    return cachedCatalogProducts;
  }
}

export function saveBrowserCatalogProducts(products: Product[]) {
  const serializedProducts = JSON.stringify(products);
  cachedRawCatalog = serializedProducts;
  cachedCatalogProducts = products;
  window.localStorage.setItem(CATALOG_STORAGE_KEY, serializedProducts);
  window.dispatchEvent(new Event(CATALOG_CHANGE_EVENT));
}

export function subscribeToBrowserCatalog(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleChange = () => callback();
  window.addEventListener("storage", handleChange);
  window.addEventListener(CATALOG_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(CATALOG_CHANGE_EVENT, handleChange);
  };
}
