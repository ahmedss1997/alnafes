import { IProduct } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  cartProducts: IProduct[];
}

const initialState: CartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductInCart(state, action: PayloadAction<IProduct>) {
      if (!state.cartProducts) {
        state.cartProducts = [];
      }
      state.cartProducts?.push(action.payload);
    },
    setCartData(state, action: PayloadAction<IProduct[]>) {
      state.cartProducts = action.payload;
    },
    clearCartData(state) {
      state.cartProducts.splice(0, state.cartProducts.length);
    },
  },
});

export const selectCartTotal = (state: { cart: CartState }) => 
  state.cart.cartProducts
    .map((product) => product.item.price * product.quantity)
    .reduce((total, price) => total + price, 0);

export const selectCartTotalDiscount = (state: { cart: CartState }) => 
  state.cart.cartProducts.map(x => (x.item.price - (x.item.discount || 0)) * x.quantity).reduce((a,b) => a + b, 0);
export const selectCartTotalWithDiscount = (state: { cart: CartState }) => {
  return selectCartTotal(state) - selectCartTotalDiscount(state);
}



export const { setCartData, clearCartData, addProductInCart } = cartSlice.actions;
export default cartSlice.reducer;
