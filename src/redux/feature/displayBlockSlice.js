import { createSlice } from "@reduxjs/toolkit";

const displayBlockSlice = createSlice({
  name: "displayBlocks",
  initialState: {
    blocks: []
  },
  reducers: {
    setDisplayBlocks: (state, action) => {
      state.blocks = action.payload;
    },
  },
});

export const { setDisplayBlocks } = displayBlockSlice.actions;

export default displayBlockSlice.reducer;
