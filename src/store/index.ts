import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import favReducer from './slices/favouriteSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    fav: favReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
