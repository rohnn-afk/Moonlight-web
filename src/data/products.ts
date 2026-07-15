import type { Collection, Product } from "@/types/product";

export const collections: Collection[] = [
  {
    handle: "silk-sets",
    name: "Silk Sets",
    description: "Tailored sleep sets with pearl piping and a moonlit satin finish.",
    image: "/images/product-vignettes.png",
  },
  {
    handle: "robes",
    name: "Robes",
    description: "Soft wrap layers designed for slow evenings and quiet mornings.",
    image: "/images/collection-moonlit-lineup.png",
  },
  {
    handle: "sleep-dresses",
    name: "Sleep Dresses",
    description: "Fluid silhouettes with lace detail, cut for ease and elegance.",
    image: "/images/product-vignettes.png",
  },
  {
    handle: "lounge-layers",
    name: "Lounge Layers",
    description: "Breathable knit and satin pieces for night-to-morning comfort.",
    image: "/images/collection-moonlit-lineup.png",
  },
];

export const products: Product[] = [
  {
    handle: "ivory-silk-pajama-set",
    sku: "LM-SLK-001",
    name: "Ivory Silk Pajama Set",
    category: "Silk Sets",
    price: 248,
    compareAtPrice: 288,
    color: "Pearl Ivory",
    material: "19 momme silk satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "/images/product-vignettes.png",
    description:
      "A luminous silk set with contrast piping, relaxed tailoring, and a cool hand-feel.",
    details: ["Mother-of-pearl buttons", "Elastic waist trouser", "French seams"],
    inventory: 42,
    reserved: 7,
    status: "active",
    featured: true,
  },
  {
    handle: "noir-lace-silk-robe",
    sku: "LM-ROB-014",
    name: "Noir Lace Silk Robe",
    category: "Robes",
    price: 286,
    color: "Midnight Black",
    material: "Silk satin with lace cuff",
    sizes: ["XS/S", "M/L", "XL"],
    image: "/images/product-vignettes.png",
    description:
      "A fluid black robe with a soft waist tie and delicate lace edge at the cuff.",
    details: ["Removable sash", "Interior tie", "Falls above the knee"],
    inventory: 18,
    reserved: 4,
    status: "active",
    featured: true,
  },
  {
    handle: "rose-mist-slip-dress",
    sku: "LM-SLP-021",
    name: "Rose Mist Slip Dress",
    category: "Sleep Dresses",
    price: 218,
    color: "Dust Rose",
    material: "Silk charmeuse and lace",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/product-vignettes.png",
    description:
      "A softly draped slip with a sculpted lace neckline and moonlit sheen.",
    details: ["Adjustable straps", "Bias cut", "Mid-thigh length"],
    inventory: 9,
    reserved: 3,
    status: "active",
    featured: true,
  },
  {
    handle: "pearl-lounge-knit-set",
    sku: "LM-LNG-008",
    name: "Pearl Lounge Knit Set",
    category: "Lounge Layers",
    price: 198,
    color: "Warm Pearl",
    material: "Brushed modal knit",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "/images/product-vignettes.png",
    description:
      "An airy lounge set with a relaxed long sleeve top and soft drawstring pant.",
    details: ["Breathable modal", "Soft rib finish", "Easy relaxed fit"],
    inventory: 31,
    reserved: 5,
    status: "active",
  },
];

export function getProduct(handle: string) {
  return products.find((product) => product.handle === handle);
}

export function getCollection(handle: string) {
  return collections.find((collection) => collection.handle === handle);
}
