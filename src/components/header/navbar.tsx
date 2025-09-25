'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { ChevronDown, ShoppingCart } from 'lucide-react';
import AuthButtons from './auth-buttons';
import { useCartStore } from '@/stores/useCartStore';
import MobileSidebar from './mobile-sidebar';
import Search from './search';

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-purple-500 shadow-md">
      <div className="flex bg-purple-600 shadow-md py-1 sm:px-6 px-4 min-h-[75px] tracking-wide relative z-50">
        <div className="flex max-w-screen-xl mx-auto w-full">
          <div className="flex items-center justify-between w-full">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="max-sm:hidden">
                <div>
                  <h1 className="lilita text-4xl text-white drop-shadow-lg">
                    Purrfect Fit
                  </h1>
                  {/* <p className="text-white lilita  -mt-1 drop-shadow-lg text-center">
                    Everyday Pets & Clothes
                  </p> */}
                </div>
              </Link>
              <Link href="/" className="hidden max-sm:block">
                <div>
                  <h1 className="lilita text-3xl text-white drop-shadow-lg">
                    Purrfect Fit
                  </h1>
                  {/* <p className="text-white lilita text-xs -mt-1 drop-shadow-lg text-center">
                    Everyday Pets & Clothes
                  </p> */}
                </div>
              </Link>
            </div>

            {/* Center - Search */}
            <div className="flex-1 flex justify-center px-4">
              <Search />
            </div>

            {/* Right - Actions */}
            <div className="flex items-center gap-x-6 gap-y-4 flex-shrink-0">
              <div className="flex items-center md:space-x-5 space-x-4">
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  {/* <div className="relative">
                    <Heart className="cursor-pointer text-white inline w-7 h-7" />
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                  <Link href="/cart" className="relative">
                    <ShoppingCart className="cursor-pointer text-white inline w-7 h-7" />
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      {cartQuantity}
                    </span>
                  </Link>
                </div>
                <AuthButtons />
                <div className=" md:hidden">
                  <MobileSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Links */}
      <div className="min-h-[50px] hidden sm:flex flex-wrap items-center justify-center">
        <div className="flex flex-row items-center gap-10">
          <Link
            href="/products"
            className="text-xl lilita text-white drop-shadow-lg"
          >
            All
          </Link>
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
          {/* <DropdownMenu>
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
          </DropdownMenu> */}
          <Link
            href={'/services'}
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Services
          </Link>
          <Link
            href={'/about'}
            className="text-xl lilita text-white drop-shadow-lg"
          >
            About
          </Link>
          {/* <Link
            href={'/contact'}
            className="text-xl lilita text-white drop-shadow-lg"
          >
            Contact
          </Link> */}
        </div>
      </div>
    </div>
  );
}
