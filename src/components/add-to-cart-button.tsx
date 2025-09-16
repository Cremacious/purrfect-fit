'use client';
import { useCartStore } from '@/stores/useCartStore';
import { Button } from './ui/button';
import { ProductType, ProductVariant } from '@/lib/types/product.type';

export default function AddToCartButton({
  product,
  selectedVariant,
  quantity,
}: {
  product: ProductType;
  selectedVariant: ProductVariant | null;
  quantity: number;
}) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedVariant || selectedVariant.stock < quantity) return;
    console.log('Adding to cart:');
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(selectedVariant.price ?? product.price),
      optionA: selectedVariant.optionA ?? '',
      optionB: selectedVariant.optionB ?? '',
      quantity,
      image: product.images[0],
    });
  };

  return (
    <Button
      size="lg"
      variant="purple"
      className="w-full font-bold"
      onClick={handleAddToCart}
      disabled={!selectedVariant || selectedVariant.stock < quantity}
    >
      Add to cart
    </Button>
  );
}
