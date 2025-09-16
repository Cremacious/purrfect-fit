'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/lib/types/product.type';
import defaultProductImage from '@/assets/stock-product.jpg';

function getImageSrc(image: string | undefined) {
  if (!image) return defaultProductImage;
  if (image.startsWith('http') || image.startsWith('data:')) return image;
  return `data:image/jpeg;base64,${image}`;
}

// const listA = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
// const listB = ['Red', 'Blue', 'Black', 'Green'];

export default function ProductDetails({ product }: { product: ProductType }) {
  const [optionAChoice, setOptionAChoice] = useState('');
  const [optionBChoice, setOptionBChoice] = useState('');
  const selectedVariant = product.variants?.find(
    (v) => v.optionA === optionAChoice && v.optionB === optionBChoice
  );

  // Ensure price is a number if it's a string
  const selectedVariantPrice =
    selectedVariant && selectedVariant.price !== undefined
      ? typeof selectedVariant.price === 'string'
        ? Number(selectedVariant.price)
        : selectedVariant.price
      : undefined;

  // Get all unique optionA and optionB values
  // Filter out null/undefined and ensure only strings are used
  const optionAList = Array.from(
    new Set(
      product.variants
        ?.map((v) => v.optionA)
        .filter((x): x is string => typeof x === 'string')
    )
  );
  const optionBList = Array.from(
    new Set(
      product.variants
        ?.map((v) => v.optionB)
        .filter((x): x is string => typeof x === 'string')
    )
  );

  // For each optionA, check if a variant exists with selected optionB
  const isOptionAEnabled = (optionA: string) => {
    if (!optionBChoice) return true;
    return product.variants?.some(
      (v) => v.optionA === optionA && v.optionB === optionBChoice
    );
  };

  // For each optionB, check if a variant exists with selected optionA
  const isOptionBEnabled = (optionB: string) => {
    if (!optionAChoice) return true;
    return product.variants?.some(
      (v) => v.optionB === optionB && v.optionA === optionAChoice
    );
  };

  return (
    <div className="p-4 md:mt-8">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0 flex flex-col gap-4">
            <Image
              src={getImageSrc(product.images[0])}
              alt="Product"
              width={600}
              height={440}
              className="w-full aspect-[11/8] object-cover rounded-2xl"
              priority
            />
            <div className="bg-white shadow-sm p-2 w-full max-w-full overflow-auto">
              <div className="flex justify-between flex-row gap-4 shrink-0">
                <img
                  src="https://readymadeui.com/images/sunscreen-img-1.webp"
                  alt="Product1"
                  className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-black"
                />
                <img
                  src="https://readymadeui.com/images/sunscreen-img-2.webp"
                  alt="Product2"
                  className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent"
                />
                <img
                  src="https://readymadeui.com/images/sunscreen-img-3.webp"
                  alt="Product3"
                  className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent"
                />
                <img
                  src="https://readymadeui.com/images/sunscreen-img-4.webp"
                  alt="Product4"
                  className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent"
                />
                <img
                  src="https://readymadeui.com/images/sunscreen-img-5.webp"
                  alt="Product5"
                  className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent"
                />
                <img
                  src="https://readymadeui.com/images/sunscreen-img-6.webp"
                  alt="Product6"
                  className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-md border-b-2 border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:pl-8 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="text-2xl sm:text-xl font-semibold text-slate-800">
                {product.name}
              </div>
              <div className="flex items-center gap-3 ">
                <div className="flex items-center gap-1">
                  <p className="text-base text-slate-800">4</p>
                  <svg
                    className="w-3.5 h-3.5 fill-purple-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-3.5 h-3.5 fill-purple-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-3.5 h-3.5 fill-purple-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-3.5 h-3.5 fill-purple-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-3.5 h-3.5 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
                <span className="text-slate-800">|</span>
                <p className="text-sm text-slate-800">76 Ratings</p>
                <span className="text-slate-800">|</span>
                <p className="text-sm text-slate-800">50 Reviews</p>
              </div>
              <div className="mt-4">
                <p className="text-slate-800 mt-1 text-sm">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-2 ">
                <h4 className="text-purple-800 text-2xl sm:text-3xl font-semibold">
                  {optionAChoice &&
                  optionBChoice &&
                  selectedVariantPrice !== undefined &&
                  !isNaN(selectedVariantPrice) ? (
                    <>
                      ${selectedVariantPrice.toFixed(2)}{' '}
                      <span className="text-xs text-gray-500">
                        (variant price)
                      </span>
                    </>
                  ) : (
                    <>
                      ${product.price.toFixed(2)}{' '}
                      <span className="text-xs text-gray-500">
                        (default price)
                      </span>
                    </>
                  )}
                </h4>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                {selectedVariant
                  ? `Stock: ${selectedVariant.stock}`
                  : 'Select options to view stock'}
              </div>
              <div>
                {product.variants !== null &&
                  product.variants !== undefined && (
                    <div className="text-sm text-slate-500 ml-1 mb-1">
                      {product.optionALabel}:
                    </div>
                  )}

                <div className="flex flex-row gap-1 flex-wrap">
                  {optionAList.map((optionA) => (
                    <Button
                      key={optionA}
                      variant="outline"
                      onClick={() =>
                        setOptionAChoice(
                          optionAChoice === optionA ? '' : optionA
                        )
                      }
                      disabled={!isOptionAEnabled(optionA)}
                      className={`${
                        optionAChoice === optionA
                          ? 'bg-purple-600 text-white'
                          : ''
                      } ${
                        !isOptionAEnabled(optionA)
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      {optionA}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                {product.variants !== null &&
                  product.variants !== undefined && (
                    <div className="text-sm text-slate-500 ml-1 mb-1">
                      {product.optionBLabel}:
                    </div>
                  )}
                <div className="flex flex-row gap-1 flex-wrap">
                  {optionBList.map((optionB) => (
                    <Button
                      key={optionB}
                      variant="outline"
                      onClick={() =>
                        setOptionBChoice(
                          optionBChoice === optionB ? '' : optionB
                        )
                      }
                      disabled={!isOptionBEnabled(optionB)}
                      className={`${
                        optionBChoice === optionB
                          ? 'bg-purple-600 text-white'
                          : ''
                      } ${
                        !isOptionBEnabled(optionB)
                          ? 'opacity-50 cursor-not-allowed'
                          : ''
                      }`}
                    >
                      {optionB}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mt-4 md:mt-8 grid md:grid-cols-2 grid-cols-1 gap-2">
                <div className="flex gap-4 items-center border border-gray-200 py-1 rounded-md w-max">
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="border-0 outline-0 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-1.5 1-2.5"
                      viewBox="0 0 121.805 121.804"
                    >
                      <path
                        d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z"
                        data-original="#000000"
                      />
                    </svg>
                  </Button>
                  <span className="text-slate-900 text-sm font-semibold px-6 block">
                    1
                  </span>
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="border-0 outline-0 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2.5 h-2.5"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z"
                        data-original="#000000"
                      />
                      <path
                        d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z"
                        data-original="#000000"
                      />
                    </svg>
                  </Button>
                </div>
                <div>
                  <Button
                    size={'lg'}
                    variant={'purple'}
                    className="w-full font-bold"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
