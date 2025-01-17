import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for an item in the cart
interface CartItem {
  id: number; // Or use `number` if IDs are numeric
  name: string; // Add properties relevant to your cart items
  quantity: number;
  selected: boolean;
  price: number;
  image: string;
  [key: string]: any; // Allow additional properties
}

// Define the state type
interface CartState {
  items: CartItem[];
  openCartSlider: boolean;
}

const initialState: CartState = {
  //   items: [
  //     {
  //       id: 1,
  //       name: "Wireless Headphones",
  //       price: 99.99,
  //       image: "/headphones.jpg",
  //       quantity: 1,
  //     },
  //     {
  //       id: 2,
  //       name: "Smartwatch",
  //       price: 199.99,
  //       image: "/smartwatch.jpg",
  //       quantity: 2,sele
  //     },
  //   ],
  // };

  items: [],
  openCartSlider: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectAllItems: (state) => {
      state.items.map((item) => (item.selected = true));
    },
    unSelectAllItems: (state) => {
      state.items.map((item) => (item.selected = false));
    },
    selectItem: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.selected = true;
      }
    },
    unSelectItem: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.selected = false;
      }
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1, selected: true });
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    removeItemComplete: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.items = [];
    },
    handleCartSlider: (state, action: PayloadAction<boolean>) => {
      state.openCartSlider = action.payload
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
  handleCartSlider,
  removeItemComplete,
} = cartSlice.actions;
export default cartSlice.reducer;
