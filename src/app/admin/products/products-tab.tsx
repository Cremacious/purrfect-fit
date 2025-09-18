'use client';
import { useState } from 'react';

import AddProductForm from './add-product-form';
import { ProductType } from '@/lib/types/product.type';

export default function ProductsTab({ products }: { products: ProductType[] }) {
  const [activeTab, setActiveTab] = useState<'products' | 'add'>('products');

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-8 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm ${
            activeTab === 'products'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-gray-100 text-slate-700 hover:bg-purple-100'
          }`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm ${
            activeTab === 'add'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-gray-100 text-slate-700 hover:bg-purple-100'
          }`}
          onClick={() => setActiveTab('add')}
        >
          Add New
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        {activeTab === 'products' && (
          <div>
            {/* Replace with your product list UI */}
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              All Products
            </h2>
            <ul className="divide-y divide-gray-200">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="py-4 flex justify-between items-center"
                >
                  <span className="font-medium text-slate-800">
                    {product.name}
                  </span>
                  <span className="text-slate-500">
                    $
                    {product.price.toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'add' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              Add New Product
            </h2>
            <AddProductForm />
          </div>
        )}
      </div>
    </div>
  );
}
