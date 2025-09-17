export type CartType = {
  id: string;
  userId: string;
  items: CartItemType[];
  itemsPrice: number;
  taxPrice: number;
  totalPrice: number;
  createdAt: Date;
  quantity?: number;
};

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  optionA: string;
  optionB: string;
  quantity: number;
  image?: string[];
  defaultImageIndex?: number;
};

export type CheckoutCartType = {
  id: string;
  userId: string;
  itemsPrice: number;
  taxPrice: number;
  totalPrice: number;
  createdAt: Date;
};
