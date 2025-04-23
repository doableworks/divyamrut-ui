import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBookingModal: false,
};

const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    toggleConsultationModal(state, action) {
      state.isBookingModal = action.payload;
    },
  },
});

export const { toggleConsultationModal } = consultationSlice.actions;
export default consultationSlice.reducer;
