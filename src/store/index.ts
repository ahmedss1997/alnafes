import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import favReducer from './slices/favouriteSlice';
import languageReducer from './slices/languageSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    fav: favReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
