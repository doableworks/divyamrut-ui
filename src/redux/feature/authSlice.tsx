// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { getSession, signOut } from 'next-auth/react';
// // import axiosInstance from "@/lib/axios";
// // import { setResetAIAnsSlice } from "@/redux/feature/aiAnswerSlice";
// // import {
// //     setOpenCongratulationsModal,
// //     setOpenLoginModal,
// //     setOpenPhoneVerificationModal,
// //     setOpenSubscriptionSidebar,
// //     setResetModalSlice
// // } from "@/redux/feature/authModalSlice";
// // import {message} from "antd";
// // import {useSelector} from "react-redux";

// // // Initial state
// // const initialState = {
// //     user: {},
// //     isAuthenticated: false,
// //     isLoading: true,
// //     authLoading: false,
// //     nonUserQuota: 2,
// //     userQuota: 10,
// //     nonUserAsked: 0,
// //     nonUserAskedTime: null,
// //     userAsked: 0,
// //     startTrial: false,
// //     loadingSubscription: false,
// //     paymentUnderProcess: false,
// //     userSession:null,
// // };

// // // Thunk to fetch user data and check session status
// // export const fetchUserData = createAsyncThunk(
// //     'auth/fetchUserData',
// //     async (session, { dispatch, rejectWithValue }) => {
// //       try {
// //         if (session) {
// //           // Pass session in the request configuration
// //           const response = await axiosInstance.get('api/account/auth/user/', {
// //             session, // Pass session to axiosInstance
// //           });
// //           const userData = response.data;

// //           // Dispatch necessary actions
// //           dispatch(setUser(userData));
// //           dispatch(setAuth());
// //           dispatch(setUserAsked(userData?.question_count));
// //           return userData;
// //         } else {
// //           // If no session found, reset the state
// //           dispatch(setResetAuthSlice());
// //           dispatch(setResetAIAnsSlice());
// //           dispatch(setResetModalSlice());
// //           dispatch(setUserSession(null));
// //           return rejectWithValue('No session found');
// //         }
// //       } catch (error) {
// //         // Handle error
// //         return rejectWithValue(error.response ? error.response.data : 'An error occurred');
// //       } finally {
// //         // Ensure loading state is properly updated
// //         dispatch(finishInitialLoad());
// //         dispatch(stopAuthLoading());
// //       }
// //     }
// //   );


// // export const logOut = createAsyncThunk(
// //     'auth/logOut',
// //     async (_, { dispatch, rejectWithValue }) => {
// //         try {
// //             dispatch(setResetAuthSlice());
// //             dispatch(setResetAIAnsSlice());
// //             // dispatch(setResetModalSlice());
// //         } catch (error) {
// //             console.log("onLogOut error", error);
// //             return rejectWithValue(error);
// //         }
// //     }
// // );


// // export const getFree = (router) => async (dispatch) => {
// //   try {
// //     dispatch(setLoadingSubscription(true));
// //     const session = await getSession()
// //     const response = await axiosInstance.post("api/document/trial/", {},
// //         {
// //             session
// //         });

// //     if (response.status === 200) {
// //       dispatch(
// //         setOpenCongratulationsModal({
// //           open: true,
// //           message: "You have earned 7 days free trial!",
// //           title: "Congratulations!",
// //           icon: "",
// //         })
// //       );

// //       setTimeout(() => {
// //         dispatch(setStartTrial(false));
// //         router.push('/home');
// //         dispatch(setLoadingSubscription(false));
// //       }, 3000);
// //     } else {
// //       message.error("Something went wrong, please try again later!");
// //       dispatch(setLoadingSubscription(false));
// //     }
// //   } catch (error) {
// //     message.error("Something went wrong, please try again later!");
// //     dispatch(setLoadingSubscription(false));
// //   }
// // };


// // export const handlePlanModal = (name, user, router) => async (dispatch) => {
// //     if (user && user?.email) {
// //         if (name === "Pro") {
// //             dispatch(setOpenSubscriptionSidebar(true));
// //             dispatch(setStartTrial(false));
// //         } else {
// //             if(user.phone_number){
// //                 dispatch(getFree(router))
// //             }else{
// //                 dispatch(setOpenPhoneVerificationModal(true));
// //                 dispatch(setStartTrial(true));
// //             }
// //         }
// //     } else {
// //         dispatch(setOpenLoginModal(true));
// //         dispatch(setStartTrial(false));
// //     }
// // };

// // const authSlice = createSlice({
// //     name: 'auth',
// //     initialState,
// //     reducers: {
// //         setAuth: (state) => {
// //             state.isAuthenticated = true;
// //         },
// //         setUserSession: (state, action) =>{
// //             state.userSession = action.payload;
// //             },
// //         setResetAuthSlice: (state) => {
// //             state.isAuthenticated = false;
// //             state.user = {};
// //             state.isLoading = false;
// //             state.userSession = null,
// //             // state.nonUserQuota = 2;
// //             state.userQuota = 10;
// //             // state.nonUserAsked = 0;
// //             state.userAsked = 0;
// //         },
// //         finishInitialLoad: (state) => {
// //             state.isLoading = false;
// //         },
// //         setUser: (state, action) => {
// //             state.user = action.payload;
// //         },
// //         setStartTrial: (state, action) => {
// //             state.startTrial = action.payload;
// //         },
// //         setLoadingSubscription: (state, action) => {
// //             state.loadingSubscription = action.payload;
// //         },
// //         setPaymentUnderProcess: (state, action) => {
// //             state.paymentUnderProcess = action.payload;
// //         },
// //         setUserQuota: (state, action) => {
// //             state.userQuota = action.payload;
// //         },
// //         setNonUserQuota: (state, action) => {
// //             state.nonUserQuota = action.payload;
// //         },
// //         setNonUserAsked: (state, action) => {
// //             state.nonUserAsked = action.payload;
// //         },
// //         setNonUserAskedTime: (state, action) => {
// //             state.nonUserAskedTime = action.payload;
// //         },
// //         setUserAsked: (state, action) => {
// //             state.userAsked = action.payload;
// //         },
// //         startAuthLoading: (state) => {
// //             state.authLoading = true;
// //         },
// //         stopAuthLoading: (state) => {
// //             state.authLoading = false;
// //         },
// //         clearUserData: (state) => {
// //             state.user = {};
// //             state.isLoading = false;
// //             state.isAuthenticated = false;
// //         },
// //     },
// //     extraReducers: (builder) => {
// //         builder
// //             .addCase(fetchUserData.pending, (state) => {
// //                 state.authLoading = true;
// //                 state.isLoading = true;
// //             })
// //             .addCase(fetchUserData.fulfilled, (state, action) => {
// //                 state.user = action.payload;
// //                 state.isAuthenticated = true;
// //                 state.authLoading = false;
// //                 state.isLoading = false;
// //             })
// //             .addCase(fetchUserData.rejected, (state) => {
// //                 state.authLoading = false;
// //                 state.user = {};
// //                 state.isAuthenticated = false;
// //                 state.isLoading = false;
// //             })
// //             .addCase(logOut.fulfilled, (state) => {
// //                 state.user = {};
// //                 state.isAuthenticated = false;
// //                 state.isLoading = false;
// //             })
// //             .addCase(logOut.rejected, (state, action) => {
// //                 console.error("Logout failed", action.payload);
// //             });
// //     }
// // });

// // export const {
// //     setAuth,
// //     finishInitialLoad,
// //     setUser,
// //     setResetAuthSlice,
// //     setUserQuota,
// //     setNonUserAsked,
// //     setUserAsked,
// //     startAuthLoading,
// //     stopAuthLoading,
// //     setStartTrial,
// //     clearUserData,
// //     setLoadingSubscription,
// //     setPaymentUnderProcess,
// //     setUserSession,
// //     setNonUserAskedTime
// // } = authSlice.actions;

// // export default authSlice.reducer;


// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// // import { getSession } from 'next-auth/react';
// import axiosInstance from "@/lib/axios";
// import {
//   setOpenCongratulationsModal,
//   setOpenLoginModal,
//   setOpenPhoneVerificationModal,
//   setOpenSubscriptionSidebar,
//   setResetModalSlice
// } from "@/redux/feature/authModalSlice";
// // import { message } from "antd";
// import { AppDispatch } from "../store";

// // Define the initial state interface
// interface AuthState {
//   user: Record<string, any> | null; // Replace `any` with a specific type if available
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   authLoading: boolean;
//   nonUserQuota: number;
//   userQuota: number;
//   nonUserAsked: number;
//   nonUserAskedTime: string | null;
//   userAsked: number;
//   startTrial: boolean;
//   loadingSubscription: boolean;
//   paymentUnderProcess: boolean;
//   userSession: any | null; // Replace `any` with a specific type if session has a defined structure
// }

// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
//   isLoading: true,
//   authLoading: false,
//   nonUserQuota: 2,
//   userQuota: 10,
//   nonUserAsked: 0,
//   nonUserAskedTime: null,
//   userAsked: 0,
//   startTrial: false,
//   loadingSubscription: false,
//   paymentUnderProcess: false,
//   userSession: null,
// };

// // Thunk to fetch user data and check session status
// export const fetchUserData = createAsyncThunk(
//   'auth/fetchUserData',
//   async ( { dispatch, rejectWithValue }) => {
//     try {
//       if (false) {
//         const response = await axiosInstance.get('api/account/auth/user/', );
//         const userData = response.data;

//         dispatch(setUser(userData));
//         dispatch(setAuth());
//         dispatch(setUserAsked(userData?.question_count));
//         return userData;
//       } else {
//         dispatch(setResetAuthSlice());
//         dispatch(setResetModalSlice());
//         dispatch(setUserSession(null));
//         return rejectWithValue('No session found');
//       }
//     } catch (error: any) {
//       return rejectWithValue(error.response ? error.response.data : 'An error occurred');
//     } finally {
//       dispatch(finishInitialLoad());
//       dispatch(stopAuthLoading());
//     }
//   }
// );

// export const logOut = createAsyncThunk(
//   'auth/logOut',
//   async (_, { dispatch, rejectWithValue }) => {
//     try {
//       dispatch(setResetAuthSlice());
//     } catch (error) {
//       console.error("onLogOut error", error);
//       return rejectWithValue(error);
//     }
//   }
// );

// export const getFree = (router: any) => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(setLoadingSubscription(true));
//     // const session = await getSession();
//     const response = await axiosInstance.post("api/document/trial/", {},);

//     if (response.status === 200) {
//       // dispatch(
//         // setOpenCongratulationsModal({
//         //   open: true,
//         //   message: "You have earned 7 days free trial!",
//         //   title: "Congratulations!",
//         //   icon: "",
//         // })
//       // );

//       setTimeout(() => {
//         dispatch(setStartTrial(false));
//         router.push('/home');
//         dispatch(setLoadingSubscription(false));
//       }, 3000);
//     } else {
//       // message.error("Something went wrong, please try again later!");
//       dispatch(setLoadingSubscription(false));
//     }
//   } catch (error) {
//     // message.error("Something went wrong, please try again later!");
//     dispatch(setLoadingSubscription(false));
//   }
// };

// export const handlePlanModal = (name: string, user: any, router: any) => async (dispatch: AppDispatch) => {
//   if (user && user?.email) {
//     if (name === "Pro") {
//       dispatch(setOpenSubscriptionSidebar(true));
//       dispatch(setStartTrial(false));
//     } else {
//       if (user.phone_number) {
//         dispatch(getFree(router));
//       } else {
//         dispatch(setOpenPhoneVerificationModal(true));
//         dispatch(setStartTrial(true));
//       }
//     }
//   } else {
//     dispatch(setOpenLoginModal(true));
//     dispatch(setStartTrial(false));
//   }
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setAuth: (state) => {
//       state.isAuthenticated = true;
//     },
//     setUserSession: (state, action: PayloadAction<any | null>) => {
//       state.userSession = action.payload;
//     },
//     setResetAuthSlice: (state) => {
//       state.isAuthenticated = false;
//       state.user = null;
//       state.isLoading = false;
//       state.userSession = null;
//       state.userQuota = 10;
//       state.userAsked = 0;
//     },
//     finishInitialLoad: (state) => {
//       state.isLoading = false;
//     },
//     setUser: (state, action: PayloadAction<Record<string, any>>) => {
//       state.user = action.payload;
//     },
//     setStartTrial: (state, action: PayloadAction<boolean>) => {
//       state.startTrial = action.payload;
//     },
//     setLoadingSubscription: (state, action: PayloadAction<boolean>) => {
//       state.loadingSubscription = action.payload;
//     },
//     setPaymentUnderProcess: (state, action: PayloadAction<boolean>) => {
//       state.paymentUnderProcess = action.payload;
//     },
//     setUserQuota: (state, action: PayloadAction<number>) => {
//       state.userQuota = action.payload;
//     },
//     setNonUserQuota: (state, action: PayloadAction<number>) => {
//       state.nonUserQuota = action.payload;
//     },
//     setNonUserAsked: (state, action: PayloadAction<number>) => {
//       state.nonUserAsked = action.payload;
//     },
//     setNonUserAskedTime: (state, action: PayloadAction<string | null>) => {
//       state.nonUserAskedTime = action.payload;
//     },
//     setUserAsked: (state, action: PayloadAction<number>) => {
//       state.userAsked = action.payload;
//     },
//     startAuthLoading: (state) => {
//       state.authLoading = true;
//     },
//     stopAuthLoading: (state) => {
//       state.authLoading = false;
//     },
//     clearUserData: (state) => {
//       state.user = null;
//       state.isLoading = false;
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserData.pending, (state) => {
//         state.authLoading = true;
//         state.isLoading = true;
//       })
//       .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<any>) => {
//         state.user = action.payload;
//         state.isAuthenticated = true;
//         state.authLoading = false;
//         state.isLoading = false;
//       })
//       .addCase(fetchUserData.rejected, (state) => {
//         state.authLoading = false;
//         state.user = null;
//         state.isAuthenticated = false;
//         state.isLoading = false;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = null;
//         state.isAuthenticated = false;
//         state.isLoading = false;
//       })
//       .addCase(logOut.rejected, (state, action) => {
//         console.error("Logout failed", action.payload);
//       });
//   }
// });

// export const {
//   setAuth,
//   finishInitialLoad,
//   setUser,
//   setResetAuthSlice,
//   setUserQuota,
//   setNonUserAsked,
//   setUserAsked,
//   startAuthLoading,
//   stopAuthLoading,
//   setStartTrial,
//   clearUserData,
//   setLoadingSubscription,
//   setPaymentUnderProcess,
//   setUserSession,
//   setNonUserAskedTime
// } = authSlice.actions;

// export default authSlice.reducer;

