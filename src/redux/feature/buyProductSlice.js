import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  source: "",
  hasBuy: false,
  buyLoader: false,
};

const buyProductSlice = createSlice({
  name: "buy",
  initialState,
  reducers: {
    setBuyProduct: (state, action) => {
      state.items = [];
      if (action.payload.source == 'cart') {
        state.source = 'cart'
        state.items = action.payload.items;
      }
      else if (action.payload.source == 'direct-buy') {
        state.source = 'direct-buy'
        state.items = [{
          id: "1",
          uid: "proudct_" + action.payload.items.uid,
          product_detail: action.payload.items,
          created: "",
          updated: "",
          is_select: true,
          quantity: 1
        },]
      }
    },

    clearBuyProduct: (state) => {
      state.items = [];
      state.source = ""
    },

    increOrDecreQuantity: (state, action) => {
      if(action.payload.uid && action.payload.action == "increase"){
        const updatedItems = state.items.map((item) => {
          if (item.uid === action.payload.uid) {
            // Increase the quantity if the item exists
            return { ...item, quantity: item.quantity + 1 };
          }
          return item; // Return the item as is if it doesn't match
        });
        state.items = updatedItems
      }
      else if(action.payload.uid && action.payload.action == "decrease"){
        const ItemData = state.items.find((item) => item.uid === action.payload.uid);
        if (ItemData && ItemData?.quantity == 1){
          const remainItems = state.items.filter(item =>item.uid != action.payload.uid); 
          state.items = remainItems
        }
        else{
          const updatedItems = state.items.map((item) => { 
            if (item.uid === action.payload.uid) {
              // Increase the quantity if the item exists
              return { ...item, quantity: item.quantity - 1 };
            }
            return item; // Return the item as is if it doesn't match
          });  
          state.items = updatedItems
        }
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
  increOrDecreQuantity,
  setBuyLoader,
  setBuyHasbuy,
  clearBuyProduct
} = buyProductSlice.actions;

export default buyProductSlice.reducer;