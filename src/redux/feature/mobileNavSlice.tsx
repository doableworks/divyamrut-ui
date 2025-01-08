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
      state.isOpen = !state.isOpen; // Toggles between true and false
    },
    openNav(state: { isOpen: boolean; }) {
      state.isOpen = true; // Explicitly sets to true
    },
    closeNav(state: { isOpen: boolean; }) {
      state.isOpen = false; // Explicitly sets to false
    },
  },
});

export const { toggleNav, openNav, closeNav } = mobileNavSlice.actions;
export default mobileNavSlice.reducer;
