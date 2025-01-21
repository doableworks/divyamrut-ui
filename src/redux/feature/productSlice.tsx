import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  isSticky: boolean;
  isBuyModalOpen: boolean;
}

const initialState: ProductState = {
  isSticky: false,
  isBuyModalOpen:false
};

const productSlice = createSlice({
  name: 'productRedux',
  initialState,
  reducers: {
    SetIsSticky(state,  action: PayloadAction<boolean>) {
      state.isSticky = action.payload
    },
    SetIsBuyModalOpen(state,  action: PayloadAction<boolean>) {
      state.isBuyModalOpen = action.payload
    },
   
  },
});

export const { SetIsSticky, SetIsBuyModalOpen } = productSlice.actions;
export default productSlice.reducer;
