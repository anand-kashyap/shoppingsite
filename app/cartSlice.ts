import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartProduct } from 'types';

interface CartState {
  isOpen: boolean;
  totalQty: number;
  items: ICartProduct[];
}

const initialState: CartState = {
  isOpen: false,
  totalQty: 0,
  items: [],
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
    addToCart: (state, payload: PayloadAction<ICartProduct>) => {
      const { payload: prodtoAdd } = payload;
      state.totalQty++;
      const existingItemIndex = state.items.findIndex(
        prod => prod.id === prodtoAdd.id
      );
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].qty++;
      } else {
        prodtoAdd.qty = 1;
        state.items.push(prodtoAdd);
      }
    },
    removeFromCart: (state, payload: PayloadAction<string>) => {
      const { payload: prodId } = payload;
      const existingItemIndex = state.items.findIndex(
        prod => prod.id === prodId
      );
      if (existingItemIndex) {
        state.totalQty--;
        state.items[existingItemIndex].qty--;
        state.items[existingItemIndex].qty < 1 &&
          state.items.splice(existingItemIndex, 1);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, openCart, closeCart } =
  cartSlice.actions;
