"use client";
import { useDispatch, useSelector } from "react-redux";
import { addProductInCart, setCartData } from '../../store/slices/cartSlice';
import {useEffect, useState } from "react";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import NotifySign from "../notifyModel/notify_sign";
import NotifySuccess from "../notifyModel/notify_success";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IAPIResult, IFavourite, IProductItem } from "@/types/types";
import { FaStar } from "react-icons/fa";
import { RootState } from "@/store";
import { useToggleFavourite } from "@/hooks/useFavourite";
import { setFavData } from "@/store/slices/favouriteSlice";


const ProductCardCol = ({
  product,
}: {
  product: IProductItem;
}) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const { favData } = useSelector((state: RootState) => state.fav);
  const toggleFavourite = useToggleFavourite();
  const defaultImg = product.image;
  const [productCount, setProductCount] = useState(1);
  const [productIsFav, setProductFav] = useState(false);
  const [productInCart, setProductInCart] = useState(cartProducts.some(x => x.item.id == product.id));
  const [openNotify, setOpenNotify] = useState(false);
  const [openNotifySuccess, setOpenNotifySuccess] = useState(false);
  const {currentUser} = useSelector((state: any) => state.auth);
  const language = useSelector((state: RootState) => state.language.language);

  // Determine if the product is favorited
  const isFavorited = favData.some((fav) => fav.item.id === product.id);
  const updatedProduct = { ...product, isFavorite: isFavorited };

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
            : [...favData, { item: product, userId: currentUser.id, isFavorite: true } as IFavourite]; // Add to favorites
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

  const averageRate = product.averageRate || 0;

  return (
    <div className="product-content bg-onSurface border-2 border-solid border-bgGrayText400 rounded-md overflow-hidden ">
      <div className="img-product-home relative h-[250px]">
        <Link href={`/product/${product.id}`} className="w-full h-full">
          <img
            src={defaultImg}
            className="w-full h-full rounded-t-md"
            alt="product-home"
          />
        </Link>
        <div className="absolute top-0 p-5 w-full flex items-center justify-between">
          <button
            className={`text-sm font-normal rounded-md px-3 py-1 cursor-pointer ${
              product.quantity == 0 ? "bg-redColor text-onSurface" : "text-primary bg-onSurface"
            }`}
          >
            {product.quantity == 0 ? "Out of Stock" : "-40%"}
          </button>
          <span
            className={`h-11 w-11 rounded-full border border-[#39545D] bg-onSurface flex justify-center items-center cursor-pointer ${
              product.quantity == 0 ? "hidden" : "block"
            }`}
            onClick={() => toggleActiveIconHeart(updatedProduct.id, updatedProduct.isFavorite)}
          >
            {productIsFav ? (
              <BsHeartFill className="text-xl text-redColor"/>
            ) : (
              <BsHeart className="text-xl text-grey"/>
            )}
          </span>
        </div>
      </div>
      <div className="caption-product-home bg-bgGrayText50 p-5">
        <p className="text-sm text-bgGrayText400 font-semibold mb-2"> 
          {
            product.subCategory === null 
              ? "Falafel" 
              : language === 'en' 
                ? product.subCategory.name 
                : product.subCategory.ar_Name
          } 
        </p>
        <h3 className="text-base lg:text-lg text-bgGrayText800 font-medium">
          <Link href={`/product/${product.id}`}>
            {language === 'en' ? product.name : product.ar_Name}  
          </Link>
        </h3>
        {/* Star Rating Section */}
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
        <div className="my-2">
          <span className="text-base text-redColor font-medium">
            {product.discount || product.price} JOD
          </span>
          {
            product.discount ? (
              <span className="text-base text-[#39545D] font-medium lg:mx-3 ml-1 line-through">
                {product.price} JOD
              </span>
            ) : null
          }
        </div>
        {/* Div With Countity Add To Cart */}
        <div className="countity flex items-center">
          <span className="text-xs text-bgGrayText400 font-medium ">Quantity:</span>
          <div className="flex items-center gap-2 lg:gap-4 mx-2 mb-2">
            <span
              className="w-7 h-7 lg:h-9 lg:w-9 rounded-full border border-bgGrayText800 bg-OnSurface flex justify-center items-center cursor-pointer"
              onClick={() => handleDecrement()}
            >
              <MdOutlineMinimize
                className={`transition-all duration-500 ease-in-out text-lg lg:text-2xl mb-3`}
              />
            </span>
            <span className="flex justify-center items-center text-lg text-bgGrayText800 font-medium cursor-pointer">
              {productCount}
            </span>
            <span
              className="w-7 h-7 lg:h-9 lg:w-9 rounded-full border border-bgGrayText800 bg-OnSurface flex justify-center items-center cursor-pointer"
              onClick={() => handleIncrement()}
            >
              <GoPlus
                className={`transition-all duration-500 ease-in-out text-lg lg:text-2xl`}
              />
            </span>
          </div>
        </div>
        {/* Div With Button Add To Cart  */}
        <div className="add-cart flex items-center gap-2 relative mt-5">
          <div className="w-full flex justify-between lg:h-11 h-9">
            {/* Button With Notify Me */}
            {product.quantity == 0 && (
              <div className="w-full flex justify-between items-center">
                <button
                  onClick={() => setOpenNotify(true)}
                  className="text-onSurface lg:text-base text-sm font-semibold max-w-[200px] w-full h-full rounded-lg border border-solid border-primary bg-primary cursor-pointer"
                >
                  Notify Me
                </button>
                <span
                  className="h-11 w-11 rounded-full border border-[#39545D] bg-OnSurface flex justify-center items-center cursor-pointer"
                >
                  <AiOutlineShoppingCart className="lg:text-primary text-graySubText text-xl cursor-pointer" />
                </span>
              </div>
            )}
            {/* Button With Buy Now */}
            {product.quantity > 0 && (
              <div className="w-full flex justify-between items-center gap-3">
                <Link className="text-onSurface flex justify-center items-center lg:text-base text-sm font-semibold w-[80px] lg:max-w-[200px] lg:w-full h-full rounded-lg border border-solid border-primary bg-primary cursor-pointer" href={"/cart"}>
                  <button
                    onClick={() => addToCart(productCount)}
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
      {
        openNotify && <NotifySign setOpenNotify={setOpenNotify} setOpenNotifySuccess={setOpenNotifySuccess}/>
      }
      {
        openNotifySuccess && <NotifySuccess setOpenNotifySuccess={setOpenNotifySuccess} product={product}/>
      }
    </div>
  );
};

export default ProductCardCol;
