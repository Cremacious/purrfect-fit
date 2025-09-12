import Link from 'next/link';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { ProductType } from '@/lib/types/product.type';
import lion from '@/assets/product-images/lion-parachute.png';

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
      <div className="aspect-[12/11] bg-gray-100 rounded-lg ">
        <Image
          src={lion}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl"
          width={300}
          height={300}
        />
      </div>
      <div className="flex gap-2 mt-4">
        <h5 className="text-base font-semibold text-slate-900">
          {product.name}
        </h5>
        <h6 className="text-base text-slate-900 font-bold ml-auto">
          $
          {product.price.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h6>
      </div>
      <p className="text-slate-600 text-[13px] mt-2">{product.description}</p>

      <div className="flex flex-row items-center gap-2 mt-6  w-full">
        <div
          className="bg-purple-200 hover:bg-purple-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer flex-shrink-0"
          title="Wishlist"
        >
          <Heart className="text-purple-600" />
        </div>
        <Button asChild variant={'purple'} className="flex-1 min-w-0 font-bold">
          <Link href={`/product/${product.slug}`}>View</Link>
        </Button>
      </div>
    </div>
  );
}
