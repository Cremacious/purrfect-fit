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

  const hasVariants =
    Array.isArray(product.variants) && product.variants.length > 0;
  const isDisabled = hasVariants
    ? !selectedVariant || selectedVariant.stock < quantity
    : product.stock < quantity;

  const handleAddToCart = () => {
    if (isDisabled) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(selectedVariant?.price ?? product.price),
      optionA: selectedVariant?.optionA ?? '',
      optionB: selectedVariant?.optionB ?? '',
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
      disabled={isDisabled}
    >
      Add to cart
    </Button>
  );
}
