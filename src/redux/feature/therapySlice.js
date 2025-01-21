import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  isBlockLoader: false,
  isBookingModal: false,
  bookingData: {},
};

const therapySlice = createSlice({
  name: "therapy",
  initialState,
  reducers: {
    toggleBlockLoader(state, action) {
      state.isBlockLoader = action.payload;
    },

    toggleBookingModal(state, action) {
      state.isBookingModal = action.payload;
    },

    setBookingData(state, action) {
      state.bookingData = action.payload;
    },

    clearBookingData(state) {
      state.bookingData = {};
    },
  },
});

export const {
  toggleBlockLoader,
  toggleBookingModal,
  setBookingData,
  clearBookingData,
} = therapySlice.actions;

export default therapySlice.reducer;
