'use client';

import { useCartStore } from '@/stores/useCartStore';
import CartItem from './cart-item';

export default function CartList() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="lg:col-span-2 space-y-4 ">
      {cart.map((item) => (
        <CartItem item={item} key={item.id + item.optionA + item.optionB} />
      ))}
    </div>
  );
}
