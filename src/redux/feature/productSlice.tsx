import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  isSticky: boolean;
}

const initialState: ProductState = {
  isSticky: false,
};

const productSlice = createSlice({
  name: 'productRedux',
  initialState,
  reducers: {
    SetIsSticky(state,  action: PayloadAction<boolean>) {
      state.isSticky = action.payload
    },
   
  },
});

export const { SetIsSticky } = productSlice.actions;
export default productSlice.reducer;
