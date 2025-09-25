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

export async function updateItemQuantityServer(cartItems: CartItemType[]) {
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
    console.error('Error in updateItemQuantityServer:', error);
  }
}

export async function getUserCart() {
  try {
    const { user } = await getAuthenticatedUser();
    if (!user) throw new Error('User not authenticated');
    const cart = await prisma.cart.findUnique({ where: { userId: user.id } });
    if (!cart) throw new Error('Cart not found');
    return cart;
  } catch (error) {
    console.error('Error in getUserCart:', error);
    return null;
  }
}

export async function getCheckoutCart() {
  const { user } = await getAuthenticatedUser();
  if (!user) return null;

  const cart = await prisma.cart.findFirst({ where: { userId: user.id } });
  if (!cart) return null;

  const items: CartItemType[] = Array.isArray(cart.items)
    ? (cart.items as CartItemType[])
    : [];

  return {
    ...cart,
    items,
    itemsPrice: Number(cart.itemsPrice),
    taxPrice: Number(cart.taxPrice),
    totalPrice: Number(cart.totalPrice),
  };
}

export async function getCartForOrder() {
  const { user } = await getAuthenticatedUser();
  if (!user) return null;

  const cart = await prisma.cart.findFirst({ where: { userId: user.id } });
  if (!cart) return null;

  const items: CartItemType[] = Array.isArray(cart.items)
    ? (cart.items as CartItemType[])
    : [];

  return {
    ...cart,
    items,
    itemsPrice: Number(cart.itemsPrice),
    taxPrice: Number(cart.taxPrice),
    totalPrice: Number(cart.totalPrice),
  };
}

export async function mergeGuestCartToUserCart() {
  try {
    const { user } = await getAuthenticatedUser();
    if (!user) return;

    const cookiesStore = await cookies();
    const cartCookie = cookiesStore.get('cart')?.value;
    if (!cartCookie) return;
    const guestItems = JSON.parse(cartCookie);

    const cart = await prisma.cart.findFirst({ where: { userId: user.id } });
    const userItems: CartItemType[] =
      cart && Array.isArray(cart.items) ? (cart.items as CartItemType[]) : [];

    for (const guestItem of guestItems) {
      const product = await prisma.product.findUnique({
        where: { id: guestItem.id },
      });
      if (!product) continue;
      const idx = userItems.findIndex(
        (i) =>
          i.id === guestItem.id &&
          i.optionA === guestItem.optionA &&
          i.optionB === guestItem.optionB
      );
      const maxQty = product.stock;
      if (idx > -1) {
        userItems[idx].quantity = Math.min(
          (userItems[idx].quantity || 0) + (guestItem.quantity || 1),
          maxQty
        );
      } else {
        userItems.push({
          ...guestItem,
          quantity: Math.min(guestItem.quantity || 1, maxQty),
        });
      }
    }

    await prisma.cart.upsert({
      where: cart ? { id: cart.id } : { id: '' },
      update: { items: convertToPlainObject(userItems) },
      create: {
        userId: user.id,
        items: convertToPlainObject(userItems),
        itemsPrice: 0,
        taxPrice: 0,
        totalPrice: 0,
      },
    });

    cookiesStore.set('cart', '', { httpOnly: true, maxAge: 0 });
  } catch (error) {
    console.error('Error merging guest cart to user cart:', error);
  }
}

export async function clearCartServer() {
  try {
    const { user } = await getAuthenticatedUser();
    if (!user) return;

    await prisma.cart.deleteMany({ where: { userId: user.id } });
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
}
