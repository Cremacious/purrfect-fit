import Link from 'next/link';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { ProductType } from '@/lib/types/product.type';

export default function ProductCard({ product }: { product: ProductType }) {
  const imageSrc = product.images?.[0];
  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-3">
      <div className="aspect-[12/11] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
            width={300}
            height={300}
            priority
          />
        ) : (
          <span className="text-5xl text-gray-400">📦</span>
        )}
      </div>
      <div className="flex gap-2 mt-4">
        <h5 className="text-base line-clamp-1 font-semibold text-slate-800">
          {product.name}
        </h5>
        <h6 className="text-base text-slate-800 font-bold ml-auto">
          $
          {product.price.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h6>
      </div>
      <p className="text-slate-800 text-[13px] line-clamp-3 mt-2">{product.description}</p>

      <div className="flex flex-row items-center gap-2 mt-6  w-full">
        {/* <div
          className="bg-purple-200 hover:bg-purple-300 w-12 h-9 flex items-center justify-center rounded-lg cursor-pointer flex-shrink-0"
          title="Wishlist"
        >
          <Heart className="text-purple-600" />
        </div> */}
        <Button asChild variant={'purple'} className="flex-1 min-w-0 font-bold">
          <Link href={`/product/${product.slug}`}>View</Link>
        </Button>
      </div>
    </div>
  );
}
