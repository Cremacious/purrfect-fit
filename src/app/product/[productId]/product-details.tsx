'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/lib/types/product.type';
import AddToCartButton from '@/components/add-to-cart-button';
import { Minus, Plus } from 'lucide-react';

export default function ProductDetails({ product }: { product: ProductType }) {
  const originalWidth = 800;
  const originalHeight = 800;
  const displayWidth = 350;
  const displayHeight = 400;
  const [optionAChoice, setOptionAChoice] = useState('');
  const [optionBChoice, setOptionBChoice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(
    product.defaultImageIndex ?? 0
  );

  const hasVariants =
    Array.isArray(product.variants) && product.variants.length > 0;
  const selectedVariant = hasVariants
    ? product.variants?.find(
        (v) => v.optionA === optionAChoice && v.optionB === optionBChoice
      )
    : null;

  const selectedVariantPrice =
    selectedVariant && selectedVariant.price !== undefined
      ? typeof selectedVariant.price === 'string'
        ? Number(selectedVariant.price)
        : selectedVariant.price
      : undefined;

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

  const isOptionAEnabled = (optionA: string) => {
    if (!optionBChoice) return true;
    return product.variants?.some(
      (v) => v.optionA === optionA && v.optionB === optionBChoice
    );
  };

  const isOptionBEnabled = (optionB: string) => {
    if (!optionAChoice) return true;
    return product.variants?.some(
      (v) => v.optionB === optionB && v.optionA === optionAChoice
    );
  };

  return (
    <div className="p-2 md:p-4 md:mt-8">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0 flex flex-col items-center gap-4 bg-purple-100 shadow-sm pb-4 p-2 rounded-2xl border">
            <div className="text-center w-full font-medium text-gray-600">
              Click an image to zoom in
            </div>
            <div
              className="rounded-2xl overflow-hidden relative w-full flex justify-center items-center"
              style={{
                width: '100%',
                maxWidth: displayWidth,
                height: 'auto',
                minHeight: displayHeight,
              }}
            >
              <Image
                src={product.images[mainImageIndex]}
                alt="Product"
                width={originalWidth}
                height={originalHeight}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                className="object-cover w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                priority
              />
            </div>
            <div className="bg-white shadow-md p-4 w-full max-w-full overflow-auto rounded-2xl border">
              <div className="flex justify-between flex-row gap-4 shrink-0">
                <div className="flex justify-between flex-row gap-4 shrink-0">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setMainImageIndex(index)}
                      className={`focus:outline-none ${
                        index === mainImageIndex ? 'ring-2 ring-purple-500' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Product ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-md aspect-square object-cover object-top cursor-pointer shadow-lg"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:pl-8 flex flex-col  bg-white shadow-sm p-2 rounded-2xl border">
            <div className="space-y-4">
              <div>Brand:</div>
              <div>{product.brand}</div>
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
                <p className="text-sm text-slate-500">Description:</p>
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
              {/* Variant */}
              {product.variants !== null && product.variants.length > 0 && (
                <div>
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
                </div>
              )}

              <div className="mt-4 md:mt-8 grid md:grid-cols-2 grid-cols-1 gap-2">
                <div className="flex gap-4 items-center border border-gray-200 py-1 px-2 rounded-md w-max">
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="border-0 outline-0 cursor-pointer"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-slate-900 text-sm font-semibold px-6 block">
                    {quantity}
                  </span>
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="border-0 outline-0 cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div>
                  <AddToCartButton
                    product={product}
                    selectedVariant={selectedVariant ?? null}
                    quantity={quantity}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
