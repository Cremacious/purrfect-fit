import ProductsTab from './products-tab';
import { getProducts } from '@/lib/actions/product.actions';

export default async function AdminProducts() {
  const products = await getProducts();

  return (
    <div className="bg-white max-w-7xl mx-auto my-4 rounded-2xl shadow-lg md:p-8 min-h-screen">
      <div className="flex justify-center">
        <ProductsTab products={products} />
      </div>
    </div>
  );
}
