"use client";
import { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";
import {BiSolidTrash } from "react-icons/bi";
import Link from "next/link";
import cartEmptyImg from "../../../public/assets/cartEmpty.png";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { selectCartTotal, selectCartTotalDiscount, selectCartTotalWithDiscount, setCartData } from "../../store/slices/cartSlice";
import { IAPIResult, IFavourite } from "@/types/types";
import { useFavouriteFilter, useToggleFavourite } from "@/hooks/useFavourite";
import { setFavData } from "@/store/slices/favouriteSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(true);
  const total = useSelector(selectCartTotal);
  const discount = useSelector(selectCartTotalDiscount);
  const totalWithDiscount = useSelector(selectCartTotalWithDiscount);
  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
  const {currentUser} = useSelector((state: any) => state.auth);
  const toggleFavourite = useToggleFavourite();
  const FavouriteFilter = useFavouriteFilter();

  const getFav = () => FavouriteFilter.mutate({UserId: currentUser.id}, {
    onSuccess: async (data: IAPIResult<IFavourite[]>) => {
      if (data.code === 200) {
        const favProducts = data.result.filter((favProduct) => favProduct.isFavorite && favProduct.userId === currentUser.id);
        dispatch(setFavData(favProducts));
        const products = cartProducts.map((cartProduct) => {
          const favProduct = favProducts.find((fav) => fav.item.id === cartProduct.item.id);
          return { ...cartProduct, item: { ...cartProduct.item, isFavorite: !!favProduct} };
        });
        dispatch(setCartData(products));
      }
    },
    onError: (error: unknown) => {
      console.error('Favourite failed:', error);
    },
  });

  useEffect(() => {
      // get favourite list on load and when user is logged in
      if (currentUser)
      {
        getFav();
      }
  }, [currentUser]);

  const toggleFav = (id: number, isFav: boolean) => {
    if (!currentUser) return;
    {
      toggleFavourite.mutate({UserId: currentUser.id, ItemId: id}, {
        onSuccess: async (data: IAPIResult<string>) => {
          if (data.code === 200) {
            const products = cartProducts.map((cartProduct) => {
              if (cartProduct.item.id === id) {
                return { ...cartProduct, item: { ...cartProduct.item, isFavorite: !isFav} };
              } else {
                return cartProduct;
              }
            });
            dispatch(setCartData(products));
            
            getFav();
          }
        },
        onError: (error: unknown) => {
          console.error('Favourite failed:', error);
        },
      });
    }
  };

  const removeItem = (id: number) => {
    dispatch(setCartData(cartProducts.filter((x) => x.item.id !== id)));
  };
  
  useEffect(() => {
    setIsloading(false);
  }, [cartProducts]);

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 ">
      <span className="text-lg text-bgGrayText400 font-medium p-3"> My cart ({cartProducts.length} items)</span>
      <div className="row-all w-full flex flex-wrap gap-3"> 
        <div className="col-item lg:max-w-[66%] lg:basis-2/3 max-w-full basis-full p-3">
          {(cartProducts && cartProducts.length) || isLoading ? (
            cartProducts.map((product, index) => (
              <ProductCard key={index + 1} product={product.item}>
                <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
                  <span
                    className={`h-9 w-9 mx-2 rounded-full border border-borderLineGray bg-onSurface flex justify-center items-center cursor-pointer`}
                    onClick={() => toggleFav(product.item.id, product.item.isFavorite)}
                  >
                    {product.item.isFavorite ? (
                      <BsHeartFill className="text-xl text-redColor"/>
                    ) : (
                      <BsHeart className="text-xl text-grey"/>
                    )}
                  </span>
                  <span
                    className={`h-9 w-9 mx-2 rounded-full border border-borderLineGray bg-onSurface flex justify-center items-center cursor-pointer`}
                    onClick={() => removeItem(product.item.id)}
                  >
                    <BiSolidTrash className="mx-1 text-lg" />
                  </span>
                </div>
              </ProductCard>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <div>
                <img 
                  src={cartEmptyImg.src} 
                  className="mx-auto" 
                  alt="cartEmpty"
                  width={200} 
                  height={200}
                />
                <p className="my-5">Enjoy your meal! We hope you will be back!</p>
                <Link href={'#'} className="text-onSurface mx-auto p-2 my-5 flex justify-center items-center lg:text-base text-sm font-semibold max-w-[200px] w-full h-full rounded-lg border border-solid border-primary bg-primary cursor-pointer">
                  <button>
                    Continue shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="col-item lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full p-3">
          {cartProducts && cartProducts.length > 0 && (
            <div className="border border-solid border-borderGray200 rounded-md lg:my-8 my-5 p-7">
              <div className="flex flex-wrap lg:justify-between justify-center mt-3">
                <span className="text-captionColor">Total</span>
                <span className="font-semibold text-xl text-bgGrayText600">{totalWithDiscount.toFixed(3)} JOD <span className="font-semibold text-xs text-bgGrayText400 relative bottom-3 line-through"> {total.toFixed(3)} JOD</span> 
                </span>
              </div>
              <div className="flex flex-wrap lg:justify-between justify-center mt-3">
                <span className="text-redColor600 font-semibold text-xs">
                  Discount: saved {discount.toFixed(3)} JOD
                </span>
              </div>
              <div className="text-center mt-6">
                <Link className="bg-primary text-white py-3 inline-block rounded-md w-full" href="/checkout">Check out</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}