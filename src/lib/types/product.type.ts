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
  optionA: string[];
  optionB: string[];
  price: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  createdAt: Date;
};
