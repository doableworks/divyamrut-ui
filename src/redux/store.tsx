// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import authModalSlice from './feature/authModalSlice';
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

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
//     authModal: authModalSlice,
//   });

//   const persistConfig = {
//     key: 'root',
//     storage,
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




import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import authModalSlice from './feature/authModalSlice';
import cartSlice from './feature/cartSlice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import type { Middleware } from 'redux';
import type { PersistPartial } from 'redux-persist/es/persistReducer';
import mobileNavSlice from './feature/mobileNavSlice'
import menuSlice from './feature/menuSlice'
import therapySlice from '@/redux/feature/therapySlice'

interface Storage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

const createNoopStorage = (): Storage => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve();
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage: Storage =
  typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootReducer = combineReducers({
  authModal: authModalSlice,
  cart:cartSlice,
  mobileNav: mobileNavSlice,
  menuItems: menuSlice,
  therapy: therapySlice
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export const persistor = persistStore(store);


