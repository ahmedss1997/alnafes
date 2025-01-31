import { ICurrentUser } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  currentUser: ICurrentUser | null;
}

const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<ICurrentUser>) {
      state.currentUser = action.payload;
    },
    clearAuthData(state) {
      state.currentUser = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
