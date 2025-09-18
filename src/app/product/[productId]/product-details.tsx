'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductType } from '@/lib/types/product.type';
import AddToCartButton from '@/components/add-to-cart-button';
import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetails({ product }: { product: ProductType }) {
  const displayWidth = 500;
  const displayHeight = 450;
  const [optionAChoice, setOptionAChoice] = useState('');
  const [optionBChoice, setOptionBChoice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex] = useState(product.defaultImageIndex ?? 0);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

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

  const openCarousel = (idx: number) => {
    setCarouselIndex(idx);
    setShowCarousel(true);
  };
  const closeCarousel = () => setShowCarousel(false);
  const prevImage = () =>
    setCarouselIndex((i) => (i === 0 ? product.images.length - 1 : i - 1));
  const nextImage = () =>
    setCarouselIndex((i) => (i === product.images.length - 1 ? 0 : i + 1));

  return (
    <div className="p-2 md:p-4 md:mt-8">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0 flex flex-col items-center gap-4 bg-purple-100 shadow-md pb-4 p-2 rounded-2xl ">
            <div className="text-center w-full font-medium text-gray-600">
              Click an image to zoom in
            </div>
            <div
              className="rounded-2xl overflow-hidden relative w-full flex justify-center items-center bg-purple-100 aspect-video"
              style={{
                width: '100%',
                maxWidth: displayWidth,
                height: displayHeight,
              }}
              onClick={() => openCarousel(mainImageIndex)}
            >
              <Image
                src={product.images[mainImageIndex]}
                alt="Product"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover w-full h-full rounded-2xl cursor-zoom-in"
                priority
              />
            </div>
            <div className="bg-white shadow-md p-2 w-full max-w-full overflow-auto rounded-2xl border">
              <div className="flex flex-row gap-4 shrink-0">
                {(() => {
                  const defaultIdx = product.defaultImageIndex ?? 0;
                  const reordered = [
                    product.images[defaultIdx],
                    ...product.images.filter((_, idx) => idx !== defaultIdx),
                  ];
                  return reordered.map((image) => {
                    const originalIndex = product.images.findIndex(
                      (img) => img === image
                    );
                    return (
                      <button
                        key={originalIndex}
                        type="button"
                        onClick={() => openCarousel(originalIndex)}
                        className={`focus:outline-none ${
                          originalIndex === mainImageIndex
                            ? 'border-2 border-purple-500 rounded-lg p-[2px]'
                            : ''
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Product ${originalIndex + 1}`}
                          width={64}
                          height={64}
                          className="w-16 h-16 aspect-square object-cover object-top cursor-pointer shadow-lg rounded-md"
                        />
                      </button>
                    );
                  });
                })()}
              </div>
            </div>
          </div>

          <div className="w-full p-4 md:p-8 flex flex-col bg-white shadow-md border-gray-100 border-t-1 rounded-2xl ">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-1 font-bold">
                  <Link
                    className="text-purple-600 hover:underline"
                    href={`/brand/${product.brand}`}
                  >
                    {product.brand}
                  </Link>
                </div>
                <h1 className="hidden md:block text-3xl font-bold text-slate-800 ">
                  {product.name}
                </h1>
                <h1 className=" md:hidden text-2xl font-bold text-slate-800 ">
                  {product.name}
                </h1>
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
              <div className="flex items-center flex-wrap gap-2 ">
                <h4 className="text-purple-800 text-2xl sm:text-3xl font-semibold">
                  {optionAChoice &&
                  optionBChoice &&
                  selectedVariantPrice !== undefined &&
                  !isNaN(selectedVariantPrice) ? (
                    <>${selectedVariantPrice.toFixed(2)} </>
                  ) : (
                    <>${product.price.toFixed(2)} </>
                  )}
                </h4>
              </div>
              <div className="mt-4">
                <p className="text-sm text-slate-600">Description:</p>
                <p className="text-slate-800 mt-1 text-sm">
                  {product.description}
                </p>
              </div>

              {/* Variant */}
              {product.variants !== null && product.variants.length > 0 && (
                <div>
                  <div className="text-sm text-gray-500 mb-2 ml-1">
                    Please select a {product.optionALabel}
                    {product.variants.length > 1
                      ? ` and ${product.optionBLabel}`
                      : ''}
                  </div>
                  <div>
                    {product.variants !== null &&
                      product.variants !== undefined && (
                        <div className="text-sm text-slate-500 ml-1 mb-1">
                          {product.optionALabel
                            ? product.optionALabel.charAt(0).toUpperCase() +
                              product.optionALabel.slice(1)
                            : ''}
                          :
                        </div>
                      )}

                    <div className="flex flex-row gap-1 flex-wrap mb-4">
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
                          {optionA
                            ? optionA.charAt(0).toUpperCase() + optionA.slice(1)
                            : ''}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    {product.variants !== null &&
                      product.variants !== undefined && (
                        <div className="text-sm text-slate-500 ml-1 mb-1">
                          {product.optionBLabel
                            ? product.optionBLabel.charAt(0).toUpperCase() +
                              product.optionBLabel.slice(1)
                            : ''}
                          :
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
                          {optionB
                            ? optionB.charAt(0).toUpperCase() + optionB.slice(1)
                            : ''}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 md:mt-8 grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-1">
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

      {showCarousel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-purple-100 rounded-lg p-2 mx-2 md:mx-4 max-w-4xl w-full flex flex-col items-center">
            <div
              className="relative w-full flex justify-center items-center"
              style={{ height: '100%', minHeight: 300, maxHeight: 700 }}
            >
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <span className="text-2xl">&#8592;</span>
              </button>
              <div className="w-full flex justify-center items-center">
                <Image
                  src={product.images[carouselIndex]}
                  alt={`Product ${carouselIndex + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full rounded-lg object-contain md:w-[800px] md:h-[600px]"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                onClick={nextImage}
                aria-label="Next image"
              >
                <span className="text-2xl">&#8594;</span>
              </button>
              <button
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white  shadow-md px-6 py-2 rounded-lg"
                onClick={closeCarousel}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
