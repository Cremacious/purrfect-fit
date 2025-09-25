import CartList from './cart-list';
import CartSummary from './cart-summary';

export default async function CartPage() {
  return (
    <div className="max-w-5xl max-lg:max-w-2xl mx-auto bg-white p-4 rounded-2xl shadow-lg my-4 min-h-screen">
      <div className="border-b border-gray-300 pb-4">
        <h2 className="text-slate-900 text-2xl font-semibold">Shopping Cart</h2>
        <p className="text-sm text-slate-600 mt-2">
          Review the popular and trending items in your cart.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mt-12">
        <CartList />
        <CartSummary />
      </div>
    </div>
  );
}
