'use server';

import prisma from '../prisma';
import { cookies } from 'next/headers';
import { getAuthenticatedUser } from '../server-utils';
import { CartItemType, CartType } from '../types/cart.type';
import { convertToPlainObject } from '../utils';

export async function addItemToCartServer(cartItems: CartItemType[]) {
  // Get the authenticated user
  const auth = await getAuthenticatedUser();
  const userId = auth.user?.id;

  // Convert cart items to plain objects (for JSON serialization)
  const plainCartItems = convertToPlainObject(cartItems);

  // Helper to calculate items price only
  const calcItemsPrice = (items: CartItemType[]) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  if (userId) {
    // User is logged in: sync cart to DB
    const cart = await prisma.cart.findUnique({ where: { userId } });
    const itemsPrice = calcItemsPrice(plainCartItems);
    if (cart) {
      // Update existing cart
      await prisma.cart.update({
        where: { userId },
        data: {
          items: plainCartItems,
          itemsPrice,
          taxPrice: 0,
          totalPrice: 0,
        },
      });
    } else {
      // Create new cart
      await prisma.cart.create({
        data: {
          userId,
          items: plainCartItems,
          itemsPrice,
          taxPrice: 0,
          totalPrice: 0,
        },
      });
    }
    // Optionally, clear guest cart cookie
    const cookieStore = await cookies();
    cookieStore.set('guest_cart', '', { maxAge: 0 });
  } else {
    // Guest: save cart to cookie
    const cookieStore = await cookies();
    cookieStore.set('guest_cart', JSON.stringify(plainCartItems), {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
  }
}

export async function getUserCart() {}

export async function getCheckoutCart() {}

export async function getCartForOrder() {}

export async function updateItemQuantityServer(cartItems: CartItemType[]) {}

export async function mergeGuestCartToUserCart() {}

export async function removeItemFromCartServer(cartItems: CartItemType[]) {}

export async function clearCartServer() {}
