import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  isConfirmationModalActive: false,
  startNewOrder: () => {
    set({ cartItems: [], isConfirmationModalActive: false });
  },
  confirmOrder: () => {
    set({ isConfirmationModalActive: true });
  },
  addToCart: (productItem) => {
    set((state) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === productItem.id,
      );

      if (itemIndex === -1) {
        return {
          cartItems: [...state.cartItems, { ...productItem, quantity: 1 }],
        };
      } else {
        const newCart = [...state.cartItems];
        newCart[itemIndex] = {
          ...newCart[itemIndex],
          quantity: newCart[itemIndex].quantity + 1,
        };
        return { cartItems: newCart };
      }
    });
  },
  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
    }));
  },
  decrementItemQuantity: (id) => {
    set((state) => {
      const index = state.cartItems.findIndex((cartItem) => cartItem.id === id);
      if (index === -1) return state;
      const item = state.cartItems[index];
      if (item.quantity === 1) {
        return {
          cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
        };
      }

      const newCart = [...state.cartItems];
      newCart[index] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return { cartItems: newCart };
    });
  },
}));
