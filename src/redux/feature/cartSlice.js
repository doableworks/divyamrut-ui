// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface ProductInterface {
//   colour: string;
//   currency: string;
//   description: string;
//   discount: string;
//   image: string;
//   is_published: boolean;
//   name: string;
//   price: string;
//   product_identity: string;
//   video: string;
//   sku: string;
//   slug: string;
//   title: string;
//   created: string;
//   updated: string;
//   is_select: boolean;
//   quantity: number;
//   uid: string;
// }

// // Define the types for an item in the cart
// interface CartItem {
//   created: string;
//   updated: string;
//   is_select: boolean;
//   quantity: number;
//   uid: string;
//   product_detail: ProductInterface;
// }

// // Define the state type
// interface CartState {
//   items: CartItem[];
//   openCartSlider: boolean;
//   cartLoader: boolean;
// }

// const initialState: CartState = {
//   items: [],
//   openCartSlider: false,
//   cartLoader: false,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     selectAllItems: (state) => {
//       state.items.map((item) => (item.is_select = true));
//     },
//     unSelectAllItems: (state) => {
//       state.items.map((item) => (item.is_select = false));
//     },
//     selectItem: (state, action: PayloadAction<{ uid: string }>) => {
//       const existingItem = state.items.find(
//         (item) => item.product_detail.uid === action.payload.uid
//       );
//       if (existingItem) {
//         existingItem.is_select = true;
//       }
//     },
//     unSelectItem: (state, action: PayloadAction<{ uid: string }>) => {
//       const existingItem = state.items.find(
//         (item) => item.uid === action.payload.uid
//       );
//       if (existingItem) {
//         existingItem.is_select = false;
//       }
//     },
//     addItemsAfterLogin: (
//       state,
//       action: PayloadAction<{ cart_items: CartItem[] }>
//     ) => {
//       state.items = [];
//       state.items = action.payload.cart_items;
//     },
//     addItem: (state, action: PayloadAction<CartItem>) => {
//       const existingItem = state.items.find(
//         (item) => item.product_detail.uid === action.payload.uid
//       );
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1, is_select: true });
//       }
//     },
//     increaseOrDecreaseItemQuantity: (
//       state,
//       action: PayloadAction<{ uid: string; action: string }>
//     ) => {
//       const existingItem = state.items.find(
//         (item) => item.product_detail.uid  === action.payload.uid
//       );
//       console.log("dddddd", action.payload.uid,"action444444", action.payload.action, " existingItem", existingItem)
//       if (action.payload.action == "increase" && existingItem) {
//         existingItem.quantity += 1;
//       } else if (action.payload.action == "decrease") {
//         if (existingItem && existingItem.quantity > 1) {
//           existingItem.quantity -= 1;
//         } else {
//           state.items = state.items.filter(
//             (item) => item.product_detail.uid !== action.payload.uid
//           );
//         }
//       }
//     },

//     removeItem: (state, action: PayloadAction<{ uid: string }>) => {
//       const existingItem = state.items.find(
//         (item) => item.uid === action.payload.uid
//       );
//       if (existingItem && existingItem.quantity > 1) {
//         existingItem.quantity -= 1;
//       } else {
//         state.items = state.items.filter(
//           (item) => item.uid !== action.payload.uid
//         );
//       }
//     },
//     removeItemComplete: (state, action: PayloadAction<{ uid: string }>) => {
//       state.items = state.items.filter(
//         (item) => item.uid !== action.payload.uid
//       );
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.openCartSlider = false;
//       state.cartLoader = false;
//     },
//     handleCartSlider: (state, action: PayloadAction<boolean>) => {
//       state.openCartSlider = action.payload;
//     },
//     setCartLoader: (state, action: PayloadAction<{ loader: boolean }>) => {
//       state.cartLoader = action.payload.loader;
//     },
//   },
// });

// export const {
//   addItemsAfterLogin,
//   addItem,
//   increaseOrDecreaseItemQuantity,
//   removeItem,
//   clearCart,
//   selectAllItems,
//   unSelectAllItems,
//   selectItem,
//   unSelectItem,
//   handleCartSlider,
//   removeItemComplete,
//   setCartLoader,
// } = cartSlice.actions;
// export default cartSlice.reducer;



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
    selectAllItems: (state) => {
      state.items.map((item) => (item.is_select = true));
    },
    unSelectAllItems: (state) => {
      state.items.map((item) => (item.is_select = false));
    },
    selectItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product_detail.uid === action.payload.uid
      );
      if (existingItem) {
        existingItem.is_select = true;
      }
    },
    unSelectItem: (state, action) => {
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
        (item) => item.product_detail.uid === action.payload.uid
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1, is_select: true });
      }
    },
    increaseOrDecreaseItemQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.product_detail.uid === action.payload.uid
      );
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
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.uid === action.payload.uid
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.uid !== action.payload.uid
        );
      }
    },
    removeItemComplete: (state, action) => {
      state.items = state.items.filter(
        (item) => item.uid !== action.payload.uid
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.openCartSlider = false;
      state.cartLoader = false;
    },
    handleCartSlider: (state, action) => {
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
  increaseOrDecreaseItemQuantity,
  removeItem,
  clearCart,
  selectAllItems,
  unSelectAllItems,
  selectItem,
  unSelectItem,
  handleCartSlider,
  removeItemComplete,
  setCartLoader,
} = cartSlice.actions;

export default cartSlice.reducer;

