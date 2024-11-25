// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// // import { apiSlice } from './services/apiSlice';
// import authReducer from './feature/authSlice';
// import authModalSlice from './feature/authModalSlice';
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import aiAnswerReducer from "./feature/aiAnswerSlice"

// const createNoopStorage = () => {
//   return {
//     getItem() {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem() {
//       return Promise.resolve();
//     },
//   };
// };

// const storage =
//   typeof window !== "undefined"
//     ? createWebStorage("local")
//     : createNoopStorage();



// const rootReducer = combineReducers({
//     auth: authReducer,
//     aiAnswer: aiAnswerReducer,
//     authModal: authModalSlice,
//   });

//   const persistConfig = {
//     key: 'root',
//     storage,
//     // whitelist: ['aiAnswer']
//   };

//   const persistedReducer = persistReducer(persistConfig, rootReducer);

//   export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware =>
// 		getDefaultMiddleware({ serializableCheck: false }).concat(),
// 	  devTools: true
//   });

// // devTools: process.env.NODE_ENV !== 'production'

// export const persistor = persistStore(store);


import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// Import slices
import authReducer from './feature/authSlice';
import authModalSlice from './feature/authModalSlice';

// Type definition for the noop storage
const createNoopStorage = (): Storage => {
  return {
    getItem(_key: string): Promise<string | null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string): Promise<void> {
      return Promise.resolve();
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};

// Storage configuration
const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

// Root reducer and its type
const rootReducer = combineReducers({
  auth: authReducer,
  authModal: authModalSlice,
});

type RootState = ReturnType<typeof rootReducer>;

// Persist configuration
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  // whitelist: ['aiAnswer'], // Uncomment to whitelist specific reducers
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// Store configuration
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }).concat(),
  devTools: process.env.NODE_ENV !== 'production',
});

// Type for App Dispatch
export type AppDispatch = typeof store.dispatch;

// Persistor for redux-persist
export const persistor = persistStore(store);

