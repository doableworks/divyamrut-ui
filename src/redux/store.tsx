import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import authModalSlice from './feature/authModalSlice';
import cartSlice from './feature/cartSlice'; 
import buyProductSlice from './feature/buyProductSlice'; 
import productSlice from './feature/productSlice'; 
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import mobileNavSlice from './feature/mobileNavSlice'
import menuSlice from './feature/menuSlice'
import therapySlice from '@/redux/feature/therapySlice'
import consultationSlice from './feature/consultationSlice'

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
  therapy: therapySlice,
  product: productSlice,
  buyProduct: buyProductSlice,
  consultation: consultationSlice
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


