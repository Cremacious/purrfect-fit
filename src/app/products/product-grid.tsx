import ProductCard from '@/components/products/product-card';
import { ProductType } from '@/lib/types/product.type';

export default function ProductGrid({
  animal,
  products,
}: {
  animal?: string;
  products: ProductType[];
}) {
  return (
    <div className="p-4 md:mt-4">
      <div className="mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
        <h2 className="text-2xl lilita  sm:text-3xl font-semibold drop-shadow-2xl text-purple-900 mb-6 sm:mb-8 md:text-left text-center">
          {animal
            ? `Products For ${animal.charAt(0).toUpperCase() + animal.slice(1)}`
            : 'All Products'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-xl:gap-4 gap-6 mb-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
