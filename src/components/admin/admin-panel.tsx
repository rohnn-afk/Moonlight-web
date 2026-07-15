"use client";

import Image from "next/image";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Archive,
  BarChart3,
  CheckCircle2,
  ImagePlus,
  Package,
  Plus,
  Save,
  Search,
  SlidersHorizontal,
  Trash2,
  Upload,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import { products as seededProducts } from "@/data/products";
import type { Product, ProductImages } from "@/types/product";

const STORAGE_KEY = "moonlight-feels-admin-products-v2";

type ProductForm = {
  name: string;
  sku: string;
  category: string;
  price: string;
  compareAtPrice: string;
  color: string;
  material: string;
  sizes: string;
  images: string[];
  description: string;
  details: string;
  inventory: string;
  reserved: string;
  status: Product["status"];
  featured: boolean;
};

type MetricCard = {
  label: string;
  value: string | number;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

const emptyForm: ProductForm = {
  name: "",
  sku: "",
  category: "Silk Sets",
  price: "",
  compareAtPrice: "",
  color: "",
  material: "",
  sizes: "XS, S, M, L, XL",
  images: [],
  description: "",
  details: "Premium finish, Gift-ready packaging, Easy exchange",
  inventory: "12",
  reserved: "0",
  status: "active",
  featured: false,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getStoredProducts() {
  if (typeof window === "undefined") {
    return seededProducts;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return seededProducts;
  }

  try {
    return JSON.parse(stored) as Product[];
  } catch {
    return seededProducts;
  }
}

function statusStyles(status: Product["status"]) {
  if (status === "active") {
    return "border-emerald-300/20 bg-emerald-300/10 text-emerald-100";
  }

  if (status === "draft") {
    return "border-[#c8b68a]/24 bg-[#c8b68a]/10 text-[#f7f1e8]";
  }

  return "border-white/12 bg-white/6 text-[#dde6f2]/58";
}

export function AdminPanel() {
  const [catalog, setCatalog] = useState<Product[]>(() => getStoredProducts());
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | Product["status"] | "low">("all");
  const [selectedHandle, setSelectedHandle] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(catalog));
  }, [catalog]);

  const metrics = useMemo(() => {
    const active = catalog.filter((product) => product.status === "active").length;
    const units = catalog.reduce((total, product) => total + product.inventory, 0);
    const reserved = catalog.reduce((total, product) => total + product.reserved, 0);
    const lowStock = catalog.filter((product) => product.inventory - product.reserved <= 8).length;
    const value = catalog.reduce(
      (total, product) => total + Math.max(product.inventory - product.reserved, 0) * product.price,
      0,
    );

    return { active, units, reserved, lowStock, value };
  }, [catalog]);

  const filteredCatalog = useMemo(() => {
    return catalog.filter((product) => {
      const available = product.inventory - product.reserved;
      const matchesQuery = [product.name, product.sku, product.category, product.material]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesFilter =
        filter === "all" ||
        product.status === filter ||
        (filter === "low" && available <= 8);

      return matchesQuery && matchesFilter;
    });
  }, [catalog, filter, query]);

  const metricCards: MetricCard[] = [
    { label: "Active", value: metrics.active, Icon: Package },
    { label: "Units", value: metrics.units, Icon: Archive },
    { label: "Reserved", value: metrics.reserved, Icon: SlidersHorizontal },
    { label: "Low stock", value: metrics.lowStock, Icon: AlertTriangle },
    { label: "Stock value", value: `$${metrics.value.toLocaleString()}`, Icon: BarChart3 },
  ];

  function updateForm<K extends keyof ProductForm>(field: K, value: ProductForm[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function resetForm() {
    setForm(emptyForm);
    setSelectedHandle(null);
    setImageUrl("");
    setFormError("");
  }

  function editProduct(product: Product) {
    setSelectedHandle(product.handle);
    setForm({
      name: product.name,
      sku: product.sku,
      category: product.category,
      price: String(product.price),
      compareAtPrice: product.compareAtPrice ? String(product.compareAtPrice) : "",
      color: product.color,
      material: product.material,
      sizes: product.sizes.join(", "),
      images: product.images,
      description: product.description,
      details: product.details.join(", "),
      inventory: String(product.inventory),
      reserved: String(product.reserved),
      status: product.status,
      featured: Boolean(product.featured),
    });
  }

  function saveProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.images.length === 0) {
      setFormError("Add at least one product image before saving.");
      return;
    }

    const handle = selectedHandle ?? slugify(form.name);
    const images = form.images as ProductImages;
    const product: Product = {
      handle,
      sku: form.sku || `LM-${Date.now().toString().slice(-6)}`,
      name: form.name,
      category: form.category,
      price: Number(form.price) || 0,
      compareAtPrice: form.compareAtPrice ? Number(form.compareAtPrice) : undefined,
      color: form.color,
      material: form.material,
      sizes: parseList(form.sizes),
      images,
      description: form.description,
      details: parseList(form.details),
      inventory: Number(form.inventory) || 0,
      reserved: Number(form.reserved) || 0,
      status: form.status,
      featured: form.featured,
    };

    setCatalog((current) => {
      const exists = current.some((item) => item.handle === handle);
      if (exists) {
        return current.map((item) => (item.handle === handle ? product : item));
      }

      return [product, ...current];
    });
    resetForm();
  }

  function removeProduct(handle: string) {
    setCatalog((current) => current.filter((product) => product.handle !== handle));
    if (selectedHandle === handle) {
      resetForm();
    }
  }

  function adjustStock(handle: string, amount: number) {
    setCatalog((current) =>
      current.map((product) =>
        product.handle === handle
          ? { ...product, inventory: Math.max(product.reserved, product.inventory + amount) }
          : product,
      ),
    );
  }

  function addImageUrl() {
    const nextUrl = imageUrl.trim();
    if (!nextUrl) {
      return;
    }

    updateForm("images", [...form.images, nextUrl]);
    setImageUrl("");
    setFormError("");
  }

  function removeImage(index: number) {
    updateForm(
      "images",
      form.images.filter((_, currentIndex) => currentIndex !== index),
    );
  }

  function moveImage(index: number, direction: -1 | 1) {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= form.images.length) {
      return;
    }

    const nextImages = [...form.images];
    [nextImages[index], nextImages[targetIndex]] = [
      nextImages[targetIndex],
      nextImages[index],
    ];
    updateForm("images", nextImages);
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) {
      return;
    }

    Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.readAsDataURL(file);
          }),
      ),
    ).then((images) => {
      updateForm("images", [...form.images, ...images]);
      setFormError("");
      event.target.value = "";
    });
  }

  return (
    <main className="min-h-screen bg-[#070a12] px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 lg:grid-cols-[0.82fr_0.18fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#c8b68a]">
              Operations dashboard
            </p>
            <h1 className="editorial-serif mt-4 max-w-4xl text-6xl leading-none sm:text-7xl">
              Admin panel for products, stock, and merchandising.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#dde6f2]/68">
              Add catalog items, upload product imagery, monitor inventory, and keep
              the storefront organized from one quiet workspace.
            </p>
          </div>
          <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4 text-sm text-[#dde6f2]/66">
            <div className="flex items-center gap-2 text-[#f7f1e8]">
              <CheckCircle2 size={16} />
              Auto-saved
            </div>
            <p className="mt-2">Catalog changes are saved in this browser.</p>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-5">
          {metricCards.map(({ label, value, Icon }) => (
            <div key={label} className="rounded-lg border border-white/12 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between text-[#dde6f2]/58">
                <span className="text-xs uppercase tracking-[0.18em]">{label}</span>
                <Icon size={17} />
              </div>
              <p className="mt-4 text-2xl font-semibold text-[#f7f1e8]">{value}</p>
            </div>
          ))}
        </section>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.38fr_0.62fr]">
          <form onSubmit={saveProduct} className="rounded-lg border border-white/12 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#c8b68a]">
                  {selectedHandle ? "Edit item" : "Upload item"}
                </p>
                <h2 className="editorial-serif mt-2 text-4xl">
                  {selectedHandle ? "Refine product" : "Create product"}
                </h2>
              </div>
              <button
                type="button"
                onClick={resetForm}
                className="grid size-10 place-items-center rounded-md border border-white/12 text-[#dde6f2]/72 transition hover:border-white/36 hover:text-white"
                aria-label="Start a new item"
              >
                <Plus size={17} />
              </button>
            </div>

            <section className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.18em] text-[#dde6f2]/54">
                  Product gallery
                </span>
                <span className="text-xs text-[#dde6f2]/42">
                  First image is primary
                </span>
              </div>
              <div className="mt-3 grid gap-3">
                {form.images.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {form.images.map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        className="overflow-hidden rounded-md border border-white/12 bg-[#111827]"
                      >
                        <div className="relative aspect-[4/5]">
                          <AdminImage src={image} />
                          {index === 0 ? (
                            <span className="absolute left-2 top-2 rounded-full bg-[#f7f1e8] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#070a12]">
                              Primary
                            </span>
                          ) : null}
                        </div>
                        <div className="grid grid-cols-3 border-t border-white/10 text-xs text-[#dde6f2]/70">
                          <button
                            type="button"
                            onClick={() => moveImage(index, -1)}
                            className="h-9 border-r border-white/10 disabled:opacity-30"
                            disabled={index === 0}
                          >
                            Up
                          </button>
                          <button
                            type="button"
                            onClick={() => moveImage(index, 1)}
                            className="h-9 border-r border-white/10 disabled:opacity-30"
                            disabled={index === form.images.length - 1}
                          >
                            Down
                          </button>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="h-9 text-red-100"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-md border border-dashed border-white/16 bg-[#070a12]/54 p-5 text-sm text-[#dde6f2]/56">
                    Add at least one image to publish this product.
                  </div>
                )}
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
                  <input
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                    className="h-11 rounded-md border border-white/12 bg-[#070a12]/70 px-3 text-sm outline-none transition focus:border-[#c8b68a]/60"
                    placeholder="/images/product-vignettes.png"
                  />
                  <button
                    type="button"
                    onClick={addImageUrl}
                    className="h-11 rounded-md border border-white/12 px-4 text-sm text-[#dde6f2] transition hover:border-white/36"
                  >
                    Add URL
                  </button>
                  <label className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-white/12 px-4 text-sm text-[#dde6f2] transition hover:border-white/36">
                    <Upload size={16} />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="sr-only"
                    />
                  </label>
                </div>
                {formError ? (
                  <p className="text-sm text-amber-100">{formError}</p>
                ) : null}
              </div>
            </section>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Name" value={form.name} onChange={(value) => updateForm("name", value)} required />
              <Field label="SKU" value={form.sku} onChange={(value) => updateForm("sku", value)} />
              <Field label="Category" value={form.category} onChange={(value) => updateForm("category", value)} />
              <Field label="Color" value={form.color} onChange={(value) => updateForm("color", value)} />
              <Field label="Price" type="number" value={form.price} onChange={(value) => updateForm("price", value)} required />
              <Field label="Compare at" type="number" value={form.compareAtPrice} onChange={(value) => updateForm("compareAtPrice", value)} />
              <Field label="Inventory" type="number" value={form.inventory} onChange={(value) => updateForm("inventory", value)} />
              <Field label="Reserved" type="number" value={form.reserved} onChange={(value) => updateForm("reserved", value)} />
            </div>

            <Field label="Material" value={form.material} onChange={(value) => updateForm("material", value)} className="mt-4" />
            <Field label="Sizes" value={form.sizes} onChange={(value) => updateForm("sizes", value)} className="mt-4" />
            <Textarea label="Description" value={form.description} onChange={(value) => updateForm("description", value)} className="mt-4" />
            <Textarea label="Details" value={form.details} onChange={(value) => updateForm("details", value)} className="mt-4" />

            <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
              <select
                value={form.status}
                onChange={(event) => updateForm("status", event.target.value as Product["status"])}
                className="h-12 rounded-md border border-white/12 bg-[#070a12] px-3 text-sm outline-none transition focus:border-[#c8b68a]/60"
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
              <label className="flex h-12 items-center gap-3 rounded-md border border-white/12 px-4 text-sm text-[#dde6f2]/72">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(event) => updateForm("featured", event.target.checked)}
                  className="size-4 accent-[#c8b68a]"
                />
                Featured
              </label>
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#f7f1e8] px-5 text-sm font-medium text-[#070a12] transition hover:bg-[#fff8ec]"
            >
              <Save size={16} />
              Save product
            </button>
          </form>

          <section className="rounded-lg border border-white/12 bg-white/[0.04]">
            <div className="border-b border-white/10 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#c8b68a]">Inventory</p>
                  <h2 className="editorial-serif mt-2 text-4xl">Catalog control</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <label className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#dde6f2]/42" size={16} />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      className="h-11 w-full rounded-md border border-white/12 bg-[#070a12]/70 pl-9 pr-3 text-sm outline-none transition focus:border-[#c8b68a]/60 sm:w-72"
                      placeholder="Search products"
                    />
                  </label>
                  <select
                    value={filter}
                    onChange={(event) => setFilter(event.target.value as typeof filter)}
                    className="h-11 rounded-md border border-white/12 bg-[#070a12] px-3 text-sm outline-none transition focus:border-[#c8b68a]/60"
                  >
                    <option value="all">All status</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                    <option value="low">Low stock</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-3 p-4">
              {filteredCatalog.map((product) => {
                const available = product.inventory - product.reserved;
                const isLow = available <= 8;

                return (
                  <article
                    key={product.handle}
                    className="grid gap-4 rounded-lg border border-white/10 bg-[#070a12]/58 p-3 md:grid-cols-[92px_1fr_auto]"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-md bg-[#111827]">
                      <AdminImage src={product.images[0]} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-medium text-[#f7f1e8]">{product.name}</h3>
                        <span className={`rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] ${statusStyles(product.status)}`}>
                          {product.status}
                        </span>
                        {isLow ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/22 bg-amber-300/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-amber-100">
                            <AlertTriangle size={12} />
                            Low
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#dde6f2]/45">
                        {product.sku} / {product.category} / {product.images.length} images
                      </p>
                      <div className="mt-4 grid gap-3 text-sm text-[#dde6f2]/66 sm:grid-cols-4">
                        <span>${product.price}</span>
                        <span>{product.inventory} units</span>
                        <span>{product.reserved} reserved</span>
                        <span>{available} available</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <button
                        type="button"
                        onClick={() => adjustStock(product.handle, -1)}
                        className="h-10 rounded-md border border-white/12 px-3 text-sm text-[#dde6f2]/72 transition hover:border-white/36"
                      >
                        -1
                      </button>
                      <button
                        type="button"
                        onClick={() => adjustStock(product.handle, 1)}
                        className="h-10 rounded-md border border-white/12 px-3 text-sm text-[#dde6f2]/72 transition hover:border-white/36"
                      >
                        +1
                      </button>
                      <button
                        type="button"
                        onClick={() => editProduct(product)}
                        className="grid size-10 place-items-center rounded-md border border-white/12 text-[#dde6f2]/72 transition hover:border-white/36 hover:text-white"
                        aria-label={`Edit ${product.name}`}
                      >
                        <ImagePlus size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeProduct(product.handle)}
                        className="grid size-10 place-items-center rounded-md border border-white/12 text-[#dde6f2]/72 transition hover:border-red-300/40 hover:text-red-100"
                        aria-label={`Delete ${product.name}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.18em] text-[#dde6f2]/54">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full rounded-md border border-white/12 bg-[#070a12]/70 px-3 text-sm outline-none transition focus:border-[#c8b68a]/60"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.18em] text-[#dde6f2]/54">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
        className="mt-2 w-full resize-none rounded-md border border-white/12 bg-[#070a12]/70 px-3 py-3 text-sm leading-6 outline-none transition focus:border-[#c8b68a]/60"
      />
    </label>
  );
}

function AdminImage({ src }: { src: string }) {
  if (src.startsWith("data:")) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" className="h-full w-full object-cover" />;
  }

  return <Image src={src} alt="" fill sizes="160px" className="object-cover" />;
}
