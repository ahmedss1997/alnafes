import { IFavourite } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavouriteState {
  favData: IFavourite[];
}

const initialState: FavouriteState = {
  favData: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addProductInFav(state, action: PayloadAction<IFavourite>) {
      if (!state.favData) {
        state.favData = [];
      }
      state.favData?.push(action.payload);
    },
    setFavData(state, action: PayloadAction<IFavourite[]>) {
      state.favData = action.payload;
    },
    clearFavData(state) {
      state.favData.splice(0, state.favData.length);
    },
  },
});



export const getFavProductsIds = (state: { favourite: FavouriteState }) => {
  return state.favourite.favData.map((product) => product.item.id);
};


export const { setFavData, clearFavData, addProductInFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
