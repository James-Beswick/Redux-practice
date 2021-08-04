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

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartActions = cartSlice.actions;

export default store;
