import ProductDetails from './product-details';
import ProductReviews from './product-reviews';

export default function ProductPage() {
  return (
    <div className="flex flex-col">
      <div>
        <ProductDetails />
      </div>
      <div className="flex justify-center max-w-5xl mx-auto w-full py-4">
        <div className="border-b border-gray-300 border-2 w-full"></div>
      </div>
      <div>
        <ProductReviews />
      </div>
    </div>
  );
}
