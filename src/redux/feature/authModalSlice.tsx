import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  open: boolean;
  icon: string | null;
  title: string | null;
  message: string | null;
  video?: string | null; 
}

interface AuthModalState {
  user: any; 
  isAuthenticated: boolean;
  isLoading: boolean;
  openLoginModal: boolean;
  openRegisterModal: boolean;
  openUploadDocument: boolean;
  openMessageModal: boolean;
  openVerificationNumberModal: boolean;
  openSubscriptionSidebar: boolean;
  openCommonGetProOtherModal: ModalState;
  mobileAuthDrawer: boolean;
  openCongratulationsModal: ModalState;
  openVideoModal: ModalState;
  openPhoneVerificationModal: boolean;
}

const initialState: AuthModalState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  openLoginModal: false,
  openRegisterModal: false,
  openUploadDocument: false,
  openMessageModal: false,
  openVerificationNumberModal: false,
  openSubscriptionSidebar: false,
  openCommonGetProOtherModal: { open: false, icon: null, title: null, message: null },
  mobileAuthDrawer: false,
  openCongratulationsModal: { open: false, icon: null, title: null, message: null },
  openVideoModal: { open: false, icon: null, title: null, message: null, video: null },
  openPhoneVerificationModal: false,
};

const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    setOpenLoginModal: (state, action: PayloadAction<boolean>) => {
      state.openLoginModal = action.payload;
    },
    setMobileAuthDrawer: (state, action: PayloadAction<boolean>) => {
      state.mobileAuthDrawer = action.payload;
    },
    setOpenCongratulationsModal: (state, action: PayloadAction<ModalState>) => {
      state.openCongratulationsModal = action.payload;
    },
    setOpenVideoModal: (state, action: PayloadAction<ModalState>) => {
      state.openVideoModal = action.payload;
    },
    setOpenRegisterModal: (state, action: PayloadAction<boolean>) => {
      state.openRegisterModal = action.payload;
    },
    setOpenUploadDocumentModal: (state, action: PayloadAction<boolean>) => {
      state.openUploadDocument = action.payload;
    },
    setOpenMessageModal: (state, action: PayloadAction<boolean>) => {
      state.openMessageModal = action.payload;
    },
    setOpenPhoneVerificationModal: (state, action: PayloadAction<boolean>) => {
      state.openVerificationNumberModal = action.payload;
    },
    setResetModalSlice: () => {
      return initialState;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
    setOpenSubscriptionSidebar: (state, action: PayloadAction<boolean>) => {
      state.openSubscriptionSidebar = action.payload;
    },
    setOpenCommonGetProOtherModal: (state, action: PayloadAction<ModalState>) => {
      state.openCommonGetProOtherModal = action.payload;
    },
  },
});

export const {
  setAuth,
  logout,
  finishInitialLoad,
  setOpenLoginModal,
  // setOpenOtpModal,
  setOpenRegisterModal,
  setOpenUploadDocumentModal,
  setOpenMessageModal,
  setOpenPhoneVerificationModal,
  setResetModalSlice,
  setOpenSubscriptionSidebar,
  setOpenCongratulationsModal,
  setMobileAuthDrawer,
  setOpenCommonGetProOtherModal,
  setOpenVideoModal,
} = authModalSlice.actions;

export default authModalSlice.reducer;

