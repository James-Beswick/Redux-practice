import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCartState = { isShowing: false, items: {}, totalItems: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toggleCartShowing(state) {
      state.isShowing = !state.isShowing;
    },

    addItemToCart(state, action) {
      state.items = state.items.push(action.payload); //come back here later
    },

    incrementTotalItems(state) {
      state.totalItems = state.items.length();
    },
  },
});

const initialProductListState = {
  isShowing: true,
  items: [{ title: 'Test Item 1', quantity: 3, total: 18, price: 6 }],
};

const productListSlice = createSlice({
  name: 'prodList',
  initialState: initialProductListState,
  reducers: {
    displayItem() {},

    toggleProdListShowing(state) {
      if (cartSlice.isShowing) {
      }
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, prodList: productListSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
