'use client';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu, User } from 'lucide-react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { UserRound } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleButtonClick = (path: string) => {
    setIsOpen(!isOpen);
    router.push(path);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="text-white h-8 w-8" />
      </SheetTrigger>
      <SheetContent className="bg-purple-500 border-0 px-0 pt-0 [&>button]:hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4">
            <span className="lilita text-2xl text-white drop-shadow-lg">
              Purrfect Fit
            </span>
            <SheetClose asChild>
              <button aria-label="Close" className="p-1">
                <X className="text-white h-8 w-8" />
              </button>
            </SheetClose>
          </div>
          {/* 
          <div className="border-b-2 border-purple-400 mx-8">
            <div className="grid grid-cols-2 gap-2 my-2 mx-6">
              <div className=" text-white font-bold p-2 rounded-xl bg-purple-400 text-center">
                Order History
              </div>
              <div className="flex items-center justify-center font-bold text-white p-2 rounded-xl bg-purple-400 text-center">
                Settings
              </div>
            </div>
          </div> */}

          <nav className="flex flex-col gap-2 mt-2 px-6">
            <Link
              onClick={() => handleButtonClick('/products')}
              href="/products"
              className="text-xl lilita text-white text-center py-3 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md"
            >
              All
            </Link>
            <Link
              onClick={() => handleButtonClick('/products?animal=cats')}
              href="/products?animal=cats"
              className="text-xl lilita text-white text-center py-3 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md"
            >
              Cats
            </Link>
            <Link
              onClick={() => handleButtonClick('/products?animal=dogs')}
              href="/products?animal=dogs"
              className="text-xl lilita text-white text-center py-3 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md"
            >
              Dogs
            </Link>
            <Link
              onClick={() => handleButtonClick('/products?animal=birds')}
              href="/products?animal=birds"
              className="text-xl lilita text-white text-center py-3 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md"
            >
              Birds
            </Link>
            <Link
              onClick={() => handleButtonClick('/products?animal=fish')}
              href="/products?animal=fish"
              className="text-xl lilita text-white text-center py-3 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md"
            >
              Fish
            </Link>

            {/* <Button className="text-xl lilita text-white text-center py-6 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md">
              Other Animals
            </Button> */}

            <Link
              onClick={() => handleButtonClick('/services')}
              href="/services"
              className="text-xl lilita text-white text-center py-3 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md"
            >
              Services
            </Link>
            <Link
              onClick={() => handleButtonClick('/about')}
              href="/about"
              className="text-xl lilita text-white text-center py-3 px-4 rounded-lg bg-purple-400 transition font-bold shadow-md"
            >
              About
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
