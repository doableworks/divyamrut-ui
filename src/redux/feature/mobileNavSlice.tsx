import { createSlice } from '@reduxjs/toolkit';

interface MobileNavState {
  isOpen: boolean;
}

const initialState: MobileNavState = {
  isOpen: false,
};

const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    toggleNav(state: { isOpen: boolean; }) {
      state.isOpen = !state.isOpen; 
    },
    openNav(state: { isOpen: boolean; }) {
      state.isOpen = true; 
    },
    closeNav(state: { isOpen: boolean; }) {
      state.isOpen = false;
    },
  },
});

export const { toggleNav, openNav, closeNav } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;
