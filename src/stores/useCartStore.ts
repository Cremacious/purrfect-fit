import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItemType } from '@/lib/types/cart.type';
import {
  addItemToCartServer,
  removeItemFromCartServer,
  updateItemQuantityServer,
} from '@/lib/actions/cart.actions';

interface CartState {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  updateItemQuantity: (
    id: string,
    color: string,
    size: string,
    quantity: number
  ) => void;
  removeFromCart: (id: string, color: string, size: string) => void;
  clearCart: () => void;
  calcCartSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],
      calcCartSubtotal: () => {
        const itemsPrice = get().cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        return itemsPrice;
      },
      addToCart: async (item) => {
        console.log('Adding item to cart store:', item);
        const exists = get().cart.find(
          (i) =>
            i.id === item.id &&
            i.optionA === item.optionA &&
            i.optionB === item.optionB
        );
        if (exists) {
          set({
            cart: get().cart.map((i) =>
              i.id === item.id &&
              i.optionA === item.optionA &&
              i.optionB === item.optionB
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...item, quantity: item.quantity || 1 }],
          });
        }
        await addItemToCartServer(get().cart);
      },
      updateItemQuantity: async (id, optionA, optionB, quantity) => {
        set({
          cart: get().cart.map((i) =>
            i.id === id && i.optionA === optionA && i.optionB === optionB
              ? { ...i, quantity }
              : i
          ),
        });
        await updateItemQuantityServer(get().cart);
      },
      removeFromCart: async (id, optionA, optionB) => {
        set({
          cart: get().cart.filter(
            (i) =>
              !(i.id === id && i.optionA === optionA && i.optionB === optionB)
          ),
        });
        await removeItemFromCartServer(get().cart);
      },
      clearCart: () => set({ cart: [] }),
    }),
    { name: 'cart-storage' }
  )
);
