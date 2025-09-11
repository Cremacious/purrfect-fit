import ProductsView from './products-view';
import { getProducts } from '@/lib/actions/product.actions';

interface ProductsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const animal = searchParams.animal as string;
  const category = searchParams.category as string;
  const brand = searchParams.brand as string;
  const search = searchParams.search as string;

  const products = await getProducts({
    animal,
    category,
    brand,
    search,
  });

  return (
    <div className="bg-white max-w-7xl mx-auto my-4 rounded-2xl shadow-lg">
      <ProductsView animal={animal} />

      {products.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          No products available at the moment. Please check back later.
        </div>
      )}
      <div className="p-8 text-center text-gray-500">
        {products.map((product) => (
          <div key={product.id}>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm">Category: {product.category}</p>
            <p className="text-sm">Animal: {product.animal}</p>
            <p className="text-sm">Price: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
