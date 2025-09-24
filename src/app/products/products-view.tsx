'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductGrid from './product-grid';
import { ProductType } from '@/lib/types/product.type';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductsView({
  animal,
  products,
  brands,
  animals,
}: {
  animal?: string;
  products: ProductType[];
  brands: string[];
  animals: string[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  // Controlled state for price sliders
  // const minParam = Number(searchParams.get('minPrice')) || 1;
  // const maxParam = Number(searchParams.get('maxPrice')) || 5000;
  // const [minPrice, setMinPrice] = useState(minParam);
  // const [maxPrice, setMaxPrice] = useState(maxParam);

  // React.useEffect(() => {
  //   setMinPrice(minParam);
  //   setMaxPrice(maxParam);
  // }, [minParam, maxParam]);

  const handleBrandChange = (brand: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get('brand') === brand) {
      params.delete('brand');
    } else {
      params.set('brand', brand);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleAnimalChange = (animal: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get('animal') === animal) {
      params.delete('animal');
    } else {
      params.set('animal', animal);
    }
    router.push(`/products?${params.toString()}`);
  };

  // const handlePriceChange = (min: number, max: number): void => {
  //   setMinPrice(min);
  //   setMaxPrice(max);
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set('minPrice', min.toString());
  //   params.set('maxPrice', max.toString());
  //   router.push(`/products?${params.toString()}`);
  // };

  const handleClearFilters = () => {
    router.push('/products');
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:hidden p-4">
        <Button className="w-full" onClick={() => setFiltersOpen(!filtersOpen)}>
          {filtersOpen ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>
      <div
        className={`w-full md:max-w-[300px] shrink-0  px-6 sm:px-8 min-h-screen py-6 ${
          filtersOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <div className="flex items-center border-b border-gray-300 pb-2 mb-6">
          <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>
          <button
            onClick={handleClearFilters}
            type="button"
            className="text-sm text-purple-500 font-semibold ml-auto cursor-pointer"
          >
            Clear all
          </button>
        </div>

        {/* Animals */}
        <h6 className="text-slate-900 text-sm font-semibold">Animal</h6>
        <ul className="mt-6 space-y-4">
          {animals.map((animal) => (
            <li key={animal} className="flex items-center gap-3">
              <input
                id={animal}
                type="checkbox"
                checked={searchParams.get('animal') === animal}
                onChange={() => handleAnimalChange(animal)}
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor={animal}
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                {animal && animal.charAt(0).toUpperCase() + animal.slice(1)}
              </label>
            </li>
          ))}
        </ul>
        <hr className="my-6 border-gray-300" />
        <div>
          <h6 className="text-slate-900 text-sm font-semibold">Brand</h6>

          {/* Brand List */}
          <ul className="mt-6 space-y-4">
            {brands.map((brand) => (
              <li key={brand} className="flex items-center gap-3">
                <input
                  id={brand}
                  type="checkbox"
                  checked={searchParams.get('brand') === brand}
                  onChange={() => handleBrandChange(brand)}
                  className="w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor={brand}
                  className="text-slate-600 font-medium text-sm cursor-pointer"
                >
                  {brand}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-300" />
        {/* Price */}
        {/* <div>
          <h6 className="text-slate-900 text-sm font-semibold">Price</h6>
          <div className="relative mt-6">
            <div className="h-1.5 bg-gray-300 relative">
              <div
                id="activeTrack"
                className="absolute h-1.5 bg-purple-500 rounded-full w-9/12"
              />
            </div>
            <input
              type="range"
              id="minRange"
              min={1}
              max={maxPrice - 1}
              value={minPrice}
              onChange={(e) => {
                const newMin = Math.min(Number(e.target.value), maxPrice - 1);
                if (newMin !== minPrice) handlePriceChange(newMin, maxPrice);
              }}
              className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-5 
              [&::-webkit-slider-thumb]:h-5 
              [&::-webkit-slider-thumb]:bg-purple-500 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:border-2 
              [&::-webkit-slider-thumb]:border-white 
              [&::-webkit-slider-thumb]:shadow-md 
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-5 
              [&::-moz-range-thumb]:h-5 
              [&::-moz-range-thumb]:bg-purple-500 
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:border-2 
              [&::-moz-range-thumb]:border-white 
              [&::-moz-range-thumb]:shadow-md 
              [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:border-none"
            />
            <input
              type="range"
              id="maxRange"
              min={minPrice + 1}
              max={5000}
              value={maxPrice}
              onChange={(e) => {
                const newMax = Math.max(Number(e.target.value), minPrice + 1);
                if (newMax !== maxPrice) handlePriceChange(minPrice, newMax);
              }}
              className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-5 
              [&::-webkit-slider-thumb]:h-5 
              [&::-webkit-slider-thumb]:bg-purple-500 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:border-2 
              [&::-webkit-slider-thumb]:border-white 
              [&::-webkit-slider-thumb]:shadow-md 
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-5 
              [&::-moz-range-thumb]:h-5 
              [&::-moz-range-thumb]:bg-purple-500 
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:border-2 
              [&::-moz-range-thumb]:border-white 
              [&::-moz-range-thumb]:shadow-md 
              [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:border-none"
            />
            <div className="flex justify-between text-slate-600 font-medium text-sm mt-4">
              <span id="minPrice">${minPrice}</span>
              <span id="maxPrice">${maxPrice}</span>
            </div>
          </div>
        </div> */}
      </div>

      <div className="w-full ">
        <ProductGrid animal={animal} products={products} />
      </div>
    </div>
  );
}
