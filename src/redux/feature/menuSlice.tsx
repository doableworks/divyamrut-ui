import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    all: [],
  },
  reducers: {
    setMenuItems: (state, action) => {
      state.all = action.payload;
    },
  },
});

export const { setMenuItems } = menuSlice.actions;

export default menuSlice.reducer;
