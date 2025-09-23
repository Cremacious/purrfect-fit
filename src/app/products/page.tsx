import ProductsView from './products-view';
import { getAllAnimals, getProducts } from '@/lib/actions/product.actions';
import { getAllBrands } from '@/lib/actions/product.actions';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const animal = params.animal as string;
  const category = params.category as string;
  const brand = params.brand as string;
  const search = params.search as string;

  const brands = await getAllBrands();
  const animals = await getAllAnimals();
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;
  const products = await getProducts({
    animal,
    category,
    brand,
    search,
    minPrice,
    maxPrice,
  });
  return (
    <div className="bg-white max-w-7xl mx-auto my-4 rounded-2xl shadow-lg">
      <ProductsView
        animal={animal}
        products={products}
        brands={brands}
        animals={animals}
      />

      {products.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          No products available at the moment. Please check back later.
        </div>
      )}
    </div>
  );
}
