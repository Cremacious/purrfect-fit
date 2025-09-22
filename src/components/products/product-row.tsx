import ProductCard from './product-card';
import { getProducts } from '@/lib/actions/product.actions';

export default async function ProductRow() {
  const products = await getProducts();
  const fiveProducts = products.slice(0, 4);
  if (products.length === 0) {
    return null;
  }
  return (
    <div className="w-full p-2 rounded-2xl shadow-lg my-8 bg-purple-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        {fiveProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
