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
        state.items = [];
        state.items = action.payload.items;
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