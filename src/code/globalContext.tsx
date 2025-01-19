"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import G from "../code/globalData";
import { iProductInCart } from "../code/dataModels";

interface IGlobalContext {
  G_productsInCart: iProductInCart[];
  setG_ProductsInCart: Dispatch<SetStateAction<iProductInCart[]>>;
}

const GlobalContext = createContext<IGlobalContext>({
  G_productsInCart: [] as iProductInCart[],
  setG_ProductsInCart: () => {},
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [G_productsInCart, setG_ProductsInCart] = useState(G.cartProducts);

  return (
    <GlobalContext.Provider value={{ G_productsInCart, setG_ProductsInCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;


