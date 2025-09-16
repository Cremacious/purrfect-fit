'use server';

import prisma from '../prisma';
import { cookies } from 'next/headers';
import { getAuthenticatedUser } from '../server-utils';
import { CartItemType, CartType } from '../types/cart.type';
import { convertToPlainObject } from '../utils';

export async function addItemToCartServer(cartItems: CartItemType[]) {
  try {
    const auth = await getAuthenticatedUser();
    const userId = auth.user?.id;

    const plainCartItems = convertToPlainObject(cartItems);

    const calcItemsPrice = (items: CartItemType[]) => {
      return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    if (userId) {
      const cart = await prisma.cart.findUnique({ where: { userId } });
      const itemsPrice = calcItemsPrice(plainCartItems);
      if (cart) {
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

      const cookieStore = await cookies();
      cookieStore.set('guest_cart', '', { maxAge: 0 });
    } else {
      const cookieStore = await cookies();
      cookieStore.set('guest_cart', JSON.stringify(plainCartItems), {
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 7,
      });
    }
  } catch (error) {
    console.error('Error in addItemToCartServer:', error);
  }
}

export async function removeItemFromCartServer(cartItems: CartItemType[]) {
  try {
    const auth = await getAuthenticatedUser();
    const userId = auth.user?.id;
    const plainCartItems = convertToPlainObject(cartItems);
    const calcItemsPrice = (items: CartItemType[]) => {
      return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };
    if (userId) {
      const itemsPrice = calcItemsPrice(plainCartItems);
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
      const cookieStore = await cookies();
      cookieStore.set('guest_cart', JSON.stringify(plainCartItems), {
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 7,
      });
    }
  } catch (error) {
    console.error('Error in removeItemFromCartServer:', error);
  }
}

export async function getUserCart() {
  try {
    const { user } = await getAuthenticatedUser();
    if (user) {
      const cart = await prisma.cart.findUnique({ where: { userId: user.id } });
      if (!cart) return [];
      return cart.items || [];
    } else {
      const cookieStore = await cookies();
      const guestCart = cookieStore.get('guest_cart');
      if (!guestCart?.value) return [];
      try {
        return JSON.parse(guestCart.value);
      } catch {
        return [];
      }
    }
  } catch (error) {
    console.error('Error in getUserCart:', error);
    return null;
  }
}

export async function getCheckoutCart() {}

export async function getCartForOrder() {}

export async function updateItemQuantityServer(cartItems: CartItemType[]) {}

export async function mergeGuestCartToUserCart() {}

export async function clearCartServer() {}
