
import { getLocalStorage, setLocalStorage } from '@/src/utility/localStorage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: getLocalStorage('language') || 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      setLocalStorage('language', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;