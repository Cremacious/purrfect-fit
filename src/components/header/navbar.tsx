'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Heart, ChevronDown, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import AuthButtons from './auth-buttons';

export default function Navbar() {
  return (
    <div className="bg-purple-500 shadow-md">
      <div className="flex bg-purple-600 shadow-md py-1 sm:px-6 px-4 min-h-[75px] tracking-wide relative z-50">
        <div className="flex max-w-screen-xl mx-auto w-full">
          <div className="flex items-center justify-between w-full">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Link href="javascript:void(0)" className="max-sm:hidden">
                <div>
                  <h1 className="lilita text-4xl text-white drop-shadow-lg">
                    Purrfect Fit
                  </h1>
                  <p className="text-white lilita  -mt-1 drop-shadow-lg text-center">
                    Everyday Pets & Clothes
                  </p>
                </div>
              </Link>
              <Link href="javascript:void(0)" className="hidden max-sm:block">
                <div>
                  <h1 className="lilita text-3xl text-white drop-shadow-lg">
                    Purrfect Fit
                  </h1>
                  <p className="text-white lilita text-xs -mt-1 drop-shadow-lg text-center">
                    Everyday Pets & Clothes
                  </p>
                </div>
              </Link>
            </div>

            {/* Center - Search */}
            <div className="flex-1 flex justify-center px-4">
              <div className="flex bg-gray-50 border border-gray-300 focus-within:bg-transparent focus-within:border-gray-500 rounded-full px-4 py-2.5 overflow-hidden w-full max-w-md max-lg:hidden">
                <input
                  type="text"
                  placeholder="Search something..."
                  className="w-full text-sm bg-transparent outline-0 pr-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="cursor-pointer fill-gray-600"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
                </svg>
              </div>
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-x-6 gap-y-4 flex-shrink-0">
              <div className="flex items-center sm:space-x-8 space-x-6">
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <div className="relative">
                    <Heart className="cursor-pointer text-white inline w-7 h-7" />
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <div className="relative">
                    <ShoppingCart className="cursor-pointer text-white inline w-7 h-7" />
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  </div>
                </div>
                <AuthButtons />
                {/* Mobile button */}
                <button id="toggleOpen" className="lg:hidden cursor-pointer">
                  <svg
                    className="w-7 h-7"
                    fill="#333"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Links */}
      <div className="min-h-[50px] hidden sm:flex flex-wrap items-center justify-center">
        <div className="flex flex-row items-center gap-10">
          <Link
            href="/products?animal=cats"
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Cats
          </Link>
          <Link
            href="/products?animal=dogs"
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Dogs
          </Link>
          <Link
            href="/products?animal=birds"
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Birds
          </Link>
          <Link
            href="/products?animal=fish"
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Fish
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex flex-row items-center">
                <div className="text-xl lilita text-white drop-shadow-lg">
                  Other Animals
                </div>
                <ChevronDown className="text-white drop-shadow-lg" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href={'/products'}
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Services
          </Link>
          <Link
            href={'/products'}
            className="text-xl lilita text-white drop-shadow-lg"
          >
            About
          </Link>
          <Link
            href={'/products'}
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
