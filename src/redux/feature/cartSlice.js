import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  openCartSlider: false,
  cartLoader: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectAllCartItems: (state) => {
      state.items.map((item) => (item.is_select = true));
    },
    unSelectAllCartItems: (state) => {
      state.items.map((item) => (item.is_select = false));
    },
    selectCartItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.uid === action.payload.uid
      );
      if (existingItem) {
        existingItem.is_select = true;
      }
    },
    unSelectCartItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.uid === action.payload.uid
      );
      if (existingItem) {
        existingItem.is_select = false;
      }
    },
    addCartItemsAfterLogin: (state, action) => {
      state.items = [];
      state.items = action.payload.cart_items;
    },
    addCartItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product_detail.uid === action.payload.product_detail.uid
      );
      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, is_select: true });
      }
    },
    increaseOrDecreaseCartItemQuantity: (state, action) => {
      const existingItem = state.items.find((item) =>{ 
        return item.product_detail.uid == action.payload.uid
      });
      if (action.payload.action === "increase" && existingItem) {
        existingItem.quantity += 1;
      } else if (action.payload.action === "decrease") {
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.product_detail.uid !== action.payload.uid
          );
        }
      }
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter(
        (item) =>  !action.payload.uids.includes(item.product_detail.uid)
      );
    },
    removeItemCartComplete: (state, action) => {
      state.items = state.items.filter(
        (item) => item.uid !== action.payload.uid
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.openCartSlider = false;
      state.cartLoader = false;
    },
    openCartSliderFun: (state, action) => {
      state.openCartSlider = action.payload;
    },
    setCartLoader: (state, action) => {
      state.cartLoader = action.payload.loader;
    },
  },
});

export const {
  addCartItemsAfterLogin,
  addCartItem,
  increaseOrDecreaseCartItemQuantity,
  removeCartItem,
  clearCart,
  selectAllCartItems,
  unSelectAllCartItems,
  selectCartItem,
  unSelectCartItem,
  openCartSliderFun,
  removeItemComplete,
  setCartLoader,
} = cartSlice.actions;

export default cartSlice.reducer;

