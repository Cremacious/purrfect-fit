'use client';
import { CartItemType } from '@/lib/types/cart.type';

import Image from 'next/image';

export default function CheckoutItem({ item }: { item: CartItemType }) {
  const optionsDisplay =
    item.optionA && item.optionB
      ? `${item.optionA} | ${item.optionB}`
      : item.optionA
      ? item.optionA
      : item.optionB
      ? item.optionB
      : null;

  return (
    <div className="flex items-center gap-6 bg-white rounded-xl shadow-md p-4 mb-4 border border-gray-100 relative">
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
        <Image
          src={item.image ?? '/placeholder.png'}
          alt={item.name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
      {/* Details */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-purple-700 ml-4">
            ${item.price}
          </span>
        </div>
        {optionsDisplay && (
          <div className="text-sm text-gray-500 mt-1">{optionsDisplay}</div>
        )}
     
          <div className="flex items-center gap-2 mt-4">
            <span className="px-3 py-1 rounded  text-gray-900 font-medium min-w-[2rem] text-center">
              Quantity: {item.quantity}
            </span>
          </div>
     

        <div className="flex items-center gap-2 mt-4"></div>
      </div>
    </div>
  );
}
