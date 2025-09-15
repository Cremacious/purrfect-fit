export type ProductType = {
  id: string;
  name: string;
  slug: string;
  animal: string;
  category: string;
  images: string[];
  brand: string;
  description: string;
  stock: number;
  optionALabel: string | null;
  optionBLabel: string | null;
  price: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  createdAt: Date;
  variants: ProductVariant[];
};

export type ProductVariant = {
  id: string;
  productId: string;
  optionA?: string | null;
  optionB?: string | null;
  price?: number;
  stock: number;
  images: string[];
};
