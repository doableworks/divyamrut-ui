import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workshops: [],
  loading: false,
  error: null,
  isBookingModal: false,
  bookingData: {},
  isRegistrationModal: false,
  selectedWorkshop: null,
};

const workshopSlice = createSlice({
  name: "workshop",
  initialState,
  reducers: {
    setWorkshops: (state, action) => {
      state.workshops = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    toggleBookingModal: (state, action) => {
      state.isBookingModal = action.payload;
    },
    setBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
    clearBookingData: (state) => {
      state.bookingData = {};
    },
    toggleWorkshopRegistrationModal: (state, action) => {
      state.isRegistrationModal = action.payload.isOpen;
      state.selectedWorkshop = action.payload.workshop;
    },
    addWorkshop: (state, action) => {
      state.workshops.push(action.payload);
    },
    updateWorkshop: (state, action) => {
      const index = state.workshops.findIndex(
        (workshop) => workshop.id === action.payload.id
      );
      if (index !== -1) {
        state.workshops[index] = action.payload;
      }
    },
    removeWorkshop: (state, action) => {
      state.workshops = state.workshops.filter(
        (workshop) => workshop.id !== action.payload
      );
    },
  },
});

export const {
  setWorkshops,
  setLoading,
  setError,
  toggleBookingModal,
  setBookingData,
  clearBookingData,
  toggleWorkshopRegistrationModal,
  addWorkshop,
  updateWorkshop,
  removeWorkshop,
} = workshopSlice.actions;

export default workshopSlice.reducer;
