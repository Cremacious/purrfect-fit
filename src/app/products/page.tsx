import ProductsView from './products-view';
import { getProducts } from '@/lib/actions/product.actions';

interface ProductsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = searchParams;
  const animal = params.animal as string;
  const category = params.category as string;
  const brand = params.brand as string;
  const search = params.search as string;

  const products = await getProducts({
    animal,
    category,
    brand,
    search,
  });
  return (
    <div className="bg-white max-w-7xl mx-auto my-4 rounded-2xl shadow-lg">
      <ProductsView animal={animal} products={products} />

      {products.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          No products available at the moment. Please check back later.
        </div>
      )}
    </div>
  );
}
