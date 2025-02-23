"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import GlobalContext from "@/code/globalContext";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IProductItem } from "@/types/types";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addProductInCart, setCartData } from "@/store/slices/cartSlice";
import { IAPIResult, IFavourite } from "@/types/types";
import { useFavouriteFilter, useToggleFavourite } from "@/hooks/useFavourite";
import { setFavData } from "@/store/slices/favouriteSlice";

export default function ProductPreview({ product }: { product: IProductItem }) {
  // const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
  const {currentUser} = useSelector((state: any) => state.auth);
  const toggleFavourite = useToggleFavourite();
  const FavouriteFilter = useFavouriteFilter();
  const [productCount, setProductCount] = useState(1);
  const [productInCart, setProductInCart] = useState(cartProducts.some(x => x.item.id == product.id));
  const { favData } = useSelector((state: RootState) => state.fav);
  const [productIsFav, setProductFav] = useState(false);

  // Determine if the product is favorited
  const isFavorited = favData.some((fav) => fav.item.id === product.id);
  const updatedProduct = { ...product, isFavorite: isFavorited };

  const getFav = () => FavouriteFilter.mutate({UserId: currentUser.id}, {
    onSuccess: async (data: IAPIResult<IFavourite[]>) => {
      console.log("getvaf");
      if (data.code === 200) {
        console.log("afterrr get fav");
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

  useEffect(() => {
    setProductFav(favData.some(x => x.item.id == product.id));
  }, [favData]);

  const toggleActiveIconHeart = (id: number, isFav: boolean) => {
    if (!currentUser) return;
    setProductFav(!productIsFav);
    {
      toggleFavourite.mutate({UserId: currentUser.id, ItemId: product.id}, {
        onSuccess: async (data: IAPIResult<string>) => {
          if (data.code === 200) {
            console.log('Favourite successful!', data);
            const updatedFavData = isFav
            ? favData.filter((fav) => fav.item.id !== id) // Remove from favorites
            : [...favData, { item: product, userId: currentUser.id, isFavorite: true }]; // Add to favorites
            dispatch(setFavData(updatedFavData));
          }
        },
        onError: (error: unknown) => {
          console.error('Favourite failed:', error);
        },
      });
    }
  };

  const handleIncrement = () => {
    const isInCart = cartProducts.some(x => x.item.id == product.id);
    setProductInCart(isInCart);
    if (productCount < product.quantity) {
      setProductCount(productCount + 1);
      if (isInCart) {
        addToCart(productCount + 1);
      }
    } else if (isInCart) {
      addToCart(productCount);
    }
  };

  const handleDecrement = () => {
    const isInCart = cartProducts.some(x => x.item.id == product.id);
    const count = productCount - 1;
    setProductInCart(isInCart);
    if (productCount > 0) {
      setProductCount(count);
      if (count == 0) {
        dispatch(setCartData(cartProducts.filter(x => x.item.id != product.id)));
        setProductInCart(false);
      } else if (productInCart) {
        addToCart(count);
      }
    }
  };

  const addToCart = (count: number) => {
    const productInCartFound = cartProducts.find(x => x.item.id == product.id);
    if (!productInCartFound) {
      setProductCount(count || 1);
      dispatch(addProductInCart({
        itemId: product.id,
        item: product,
        quantity: count || 1
      }));

      setProductInCart(true);

    } else if (count && productInCartFound) {

      const products = cartProducts.map(x => {
        if (x.item.id == product.id) {
          return { ...x, quantity: count };
        } else {
          return x;
        }
      });
      dispatch(setCartData(products));

    }
  };

  useEffect(() => {
    if (cartProducts.some(x => x.item.id == product.id)) {
      setProductCount(cartProducts.find(x => x.item.id == product.id)?.quantity || 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);


  const averageRate = product?.averageRate || 0;

  return (
    <div className="flex flex-wrap">
      <div className="basis-full lg:basis-1/2 mb-6">
        <div className="product-img">
          <img
            src={product?.image || ""}
            alt={product?.name || ""}
            width={600}
            height={600}
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
      <div className="product-info basis-full lg:basis-1/2 ltr:lg:pl-4 rtl:lg:pr-4">
        <div className="caption-product-home bg-bgGrayText50 border border-borderLineGray rounded-lg p-10">
          {/* Div With Title */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg text-bgGrayText800 font-medium">
              <Link href={`/product/${product?.id}`}>
                {product?.name}
              </Link>
            </h3>
            <span
              className={`h-9 w-9 mx-2 rounded-full border border-borderLineGray bg-onSurface flex justify-center items-center cursor-pointer`}
              onClick={() => toggleActiveIconHeart(updatedProduct.id, updatedProduct.isFavorite)}
            >
              {productIsFav ? (
                <BsHeartFill className="text-xl text-redColor"/>
              ) : (
                <BsHeart className="text-xl text-grey"/>
              )}
            </span>
          </div>
          {/* Div With Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`${
                    star <= averageRate ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-[#39545D] font-medium">
              ({averageRate === null ? 0 : averageRate})
            </span>
          </div>
          {/* Div With Price */}
          <div className="my-5">
            <div className="">
            <span className="text-base text-bgGrayText500 font-medium">Price:</span> 
            <span className="mx-2 text-bgGrayText800 text-xl font-medium">{product?.discount || product?.price} JOD</span>
            </div>
          </div>
          {/* Div With Time Taken */}
          <div className="my-5">
            <div className="">
            <span className="text-base text-bgGrayText500 font-medium">Time taken:</span> 
            <span className="mx-2 text-bgGrayText800 text-xl font-medium">10 mins</span>
            </div>
          </div>
          {/* Div With Countity Add To Cart */}
          <div className="countity flex items-center border-b border-borderLineGray py-3 my-5">
            <span className="text-xs text-bgGrayText400 font-medium ">Quantity:</span>
            <div className="flex items-center gap-4 mx-2 mb-2">
              <span
                className="h-9 w-9 rounded-full border border-bgGrayText800 bg-OnSurface flex justify-center items-center cursor-pointer"
                onClick={() => handleDecrement()}
              >
                <MdOutlineMinimize
                  className={`transition-all duration-500 ease-in-out text-2xl mb-3`}
                />
              </span>
              <span className="flex justify-center items-center text-lg text-bgGrayText800 font-medium cursor-pointer">
                {productCount}
              </span>
              <span
                className="h-9 w-9 rounded-full border border-bgGrayText800 bg-OnSurface flex justify-center items-center cursor-pointer"
                onClick={() => handleIncrement()}
              >
                <GoPlus
                  className={`transition-all duration-500 ease-in-out text-2xl`}
                />
              </span>
            </div>
          </div>
          {/* Div With Button Add To Cart  */}
          <div className="add-cart flex items-center gap-2 relative mt-8">
            <div className="w-full flex justify-between lg:h-11 h-9">
              {/* Button With Buy Now */}
              {(product?.quantity || 0) > 0 && (
                <div className="w-full flex justify-between items-center gap-4">
                  <Link className="text-onSurface  flex justify-center items-center lg:text-base text-sm font-semibold w-full h-full rounded-lg border border-solid border-primary bg-primary cursor-pointer" href={"/cart"}>
                    <button
                      >
                      Buy Now
                    </button>
                  </Link>
                  <span
                    className="w-8 h-8 lg:h-11 lg:w-11 rounded-full border border-[#39545D] bg-OnSurface flex justify-center items-center cursor-pointer"
                    role="button"
                    onClick={() => addToCart(productCount)}
                  >
                    {productInCart ? (
                      <AiOutlineShoppingCart  className="lg:text-primary text-graySubText text-xl cursor-pointer"  />
                    ) : (
                      <AiOutlineShoppingCart className="lg:text-primary text-graySubText text-xl cursor-pointer" />
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
