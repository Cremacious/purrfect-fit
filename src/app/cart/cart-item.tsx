'use client';
import { CartItemType } from '@/lib/types/cart.type';

export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 items-start sm:gap-4 gap-6 ">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-00 p-3 rounded-md">
          <img
            src="https://readymadeui.com/images/product14.webp"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-slate-900">
            {item.name}
          </h3>
          <p className="text-sm font-medium text-slate-500 mt-2">
            {item.optionA} {item.optionB}
          </p>
          <button
            type="button"
            className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current inline"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
            REMOVE
          </button>
        </div>
      </div>
      <div className="sm:ml-auto max-sm:flex max-sm:justify-between max-sm:gap-4 max-sm:col-span-full">
        <h4 className="text-base font-semibold text-slate-900">
          ${item.price}
        </h4>
        <div className="flex items-center px-2.5 py-1.5 border border-gray-300 text-slate-900 text-xs font-medium rounded-md sm:mt-6">
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 fill-current"
              viewBox="0 0 124 124"
            >
              <path
                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                data-original="#000000"
              />
            </svg>
          </span>
          <span className="mx-3">{item.quantity}</span>
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 fill-current"
              viewBox="0 0 42 42"
            >
              <path
                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                data-original="#000000"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
