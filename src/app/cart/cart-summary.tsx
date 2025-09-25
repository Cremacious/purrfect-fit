'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCartStore } from '@/stores/useCartStore';
import { useState } from 'react';
import { createOrUpdatePendingOrder } from '@/lib/actions/order.actions';
import { useRouter } from 'next/navigation';

export default function CartSummary() {
  const router = useRouter();
  const subtotal = useCartStore((state) => state.calcCartSubtotal());
  const shippingPrice = 15;
  const subtotalWithShipping = subtotal + shippingPrice;
  const [creatingOrder, setCreatingOrder] = useState(false);

  const handleCheckout = async () => {
    try {
      setCreatingOrder(true);
      const response = await createOrUpdatePendingOrder();
      const orderId = response.id;
      router.push(`/checkout/${orderId}`);
    } catch (error) {
      console.error('Error creating order:', error);
      setCreatingOrder(false);
    }
  };
  return (
    <div className="bg-purple-100 rounded-md p-4 h-max">
      <ul className="text-slate-800 font-medium mt-6 space-y-4">
        <li className="flex flex-wrap gap-4 text-sm">
          Subtotal
          <span className="ml-auto font-semibold text-slate-900">
            ${subtotal.toFixed(2)}
          </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Shipping
          <span className="ml-auto font-semibold text-slate-900">
            ${shippingPrice.toFixed(2)}
          </span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Tax
          <span className="ml-auto font-semibold text-slate-900">
            Determined at checkout
          </span>
        </li>
        <hr className="border-gray-300" />
        <li className="flex flex-wrap gap-4 text-sm text-slate-900">
          Total{' '}
          <span className="ml-auto font-semibold">
            ${subtotalWithShipping.toFixed(2)}
          </span>
        </li>
      </ul>
      <div className="mt-8 space-y-3">
        <Button
          disabled={creatingOrder}
          onClick={handleCheckout}
          className="w-full"
          variant={'purple'}
        >
          {creatingOrder ? 'Creating Order...' : 'Go to Checkout'}
        </Button>
        <Button asChild type="button" className="w-full" variant={'white'}>
          <Link href={'/products'}>Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
