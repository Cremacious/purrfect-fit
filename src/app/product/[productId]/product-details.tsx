'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const listA = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'];
const listB = ['Red', 'Blue', 'Black', 'Green'];

export default function ProductDetails() {
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');

  return (
    <div className="p-4 md:mt-8">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div className="w-full lg:sticky top-0">
            <div className="flex flex-col gap-4">
              <div className="bg-white shadow-sm p-2">
                <img
                  src="https://readymadeui.com/images/sunscreen-img-1.webp"
                  alt="Product"
                  className="w-full  aspect-[11/8] object-cover "
                />
              </div>
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
          </div>

          <div className="w-full">
            <div className="space-y-4">
              <div className="text-2xl sm:text-xl font-semibold text-slate-800">
                SunProtect Sunscreen SPF
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
                  Contains Vitamin E and Green Tea Extract to protect, nourish,
                  and hydrate the skin while providing antioxidant benefits to
                  combat free radicals and promote a healthy complexion.
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-2 ">
                <h4 className="text-purple-800 text-2xl sm:text-3xl font-semibold">
                  $12
                </h4>
              </div>
              <div className="flex flex-row gap-1">
                {listA.map((item) => (
                  <Button
                    key={item}
                    variant={'outline'}
                    onClick={() => setOptionA(item)}
                    className={`${
                      optionA === item
                        ? 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:text-white'
                        : ''
                    }`}
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <div className="flex flex-row gap-1">
                {listB.map((item) => (
                  <Button
                    key={item}
                    variant={'outline'}
                    onClick={() => setOptionB(item)}
                    className={`${
                      optionB === item
                        ? 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700 hover:text-white'
                        : ''
                    }`}
                  >
                    {item}
                  </Button>
                ))}
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

            {/* <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-2 bg-red-500 ">
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
                <Button size={'lg'} className="w-full">
                  Add to cart
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
