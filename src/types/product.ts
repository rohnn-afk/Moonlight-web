export type Product = {
  handle: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  color: string;
  material: string;
  sizes: string[];
  image: string;
  description: string;
  details: string[];
  inventory: number;
  reserved: number;
  status: "active" | "draft" | "archived";
  featured?: boolean;
};

export type Collection = {
  handle: string;
  name: string;
  description: string;
  image: string;
};
