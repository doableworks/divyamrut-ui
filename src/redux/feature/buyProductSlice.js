import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  hasBuy: false,
  buyLoader: false,
};

const buyProductSlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    setBuyProduct: (state, action) => {
      console.log("action.payload 555", action.payload)
      state.items = [];
      if (action.payload.source == 'cart') {
        state.items = action.payload.items;
      }
      else if (action.payload.source == 'direct-buy') {
        state.items = {
          id: "1",
          uid: "local",
          product_detail: action.payload.items,
          created: "",
          updated: "",
          is_select: true,
          quantity: 1
        };
      }
    },
    setBuyLoader: (state, action) => {
      state.buyLoader = action.payload.buyLoader;
    },
    setBuyHasbuy: (state, action) => {
      // state.items = []
      state.hasBuy = action.payload.hasBuy;
    }
  },
});

export const {
  setBuyProduct,
  setBuyLoader,
  setBuyHasbuy
} = buyProductSlice.actions;

export default buyProductSlice.reducer;