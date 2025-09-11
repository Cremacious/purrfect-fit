import ProductDetails from './product-details';
import ProductReviews from './product-reviews';
import ReviewForm from './review-form';

export default function ProductPage() {
  return (
    <div className="flex flex-col md:p-6 bg-white max-w-7xl mx-auto my-4 rounded-2xl shadow-lg">
      <div className="md:mb-6">
        <ProductDetails />
      </div>
      <div className="flex justify-center max-w-3xl mx-auto w-full py-4">
        <div className="border-b border-gray-300 border w-full"></div>
      </div>
      <div>
        <ProductReviews />
      </div>
      <div className="max-w-xl mx-auto w-full mt-4 px-2 pb-4">
        <ReviewForm />
      </div>
    </div>
  );
}
