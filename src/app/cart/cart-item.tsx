'use client';
import { CartItemType } from '@/lib/types/cart.type';
import { useCartStore } from '@/stores/useCartStore';
import { Plus, Minus, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartItem({ item }: { item: CartItemType }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);

  // Helper for option display
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
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
        <Image
          src={item.image ?? '/placeholder.png'}
          alt={item.name}
          width={96}
          height={96}
          className="object-contain w-full h-full"
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
          <button
            type="button"
            aria-label="Decrease quantity"
            className="p-2 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 transition"
            onClick={() =>
              updateItemQuantity(
                item.id,
                item.optionA ?? '',
                item.optionB ?? '',
                Math.max(1, item.quantity - 1)
              )
            }
            disabled={item.quantity <= 1}
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
          <span className="px-3 py-1 rounded bg-gray-100 text-gray-900 font-medium min-w-[2rem] text-center">
            {item.quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="p-2 rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100 transition"
            onClick={() =>
              updateItemQuantity(
                item.id,
                item.optionA ?? '',
                item.optionB ?? '',
                item.quantity + 1
              )
            }
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      {/* Remove button in bottom right */}
      <button
        type="button"
        aria-label="Remove item"
        className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-red-50 text-red-600 font-semibold border border-red-200 hover:bg-red-100 transition cursor-pointer"
        onClick={() =>
          removeFromCart(item.id, item.optionA ?? '', item.optionB ?? '')
        }
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
