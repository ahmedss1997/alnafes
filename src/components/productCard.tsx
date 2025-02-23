"use client";
import { useDispatch, useSelector } from "react-redux";
import { addProductInCart, setCartData } from '@/store/slices/cartSlice';
import {ReactNode, useEffect, useState } from "react";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IProductItem } from "@/types/types";
import { RootState } from "@/store";
import { AiOutlineShoppingCart } from "react-icons/ai";
const ProductCard = ({
  product,
  withCart,
  children,
}: {
  product: IProductItem;
  withCart?: boolean;
  children?: ReactNode;
}) => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const defaultImg = product.image;
  const [productCount, setProductCount] = useState(1);
  const [productInCart, setProductInCart] = useState(cartProducts.some(x => x.item.id == product.id));

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


  return (
    <div className={`shadow-sm rounded-lg mb-4 border my-8 bg-white`}>
      <div className="flex h-full items-start flex-wrap max-h-[150px]">
        <div className="h-[150px] basis-full lg:basis-1/4 max-w-[160px] mx-auto lg:mx-0">
          <img
            src={defaultImg} className="h-full ltr:rounded-l-lg rtl:rounded-r-lg" alt="product"
          />
        </div>
        <div className="text-sm basis-full lg:basis-3/4 ltr:lg:ml-4 rtl:lg:mr-4 mx-0">
          <div className="flex items-center justify-between mb-2 flex-wrap">
            <div className="font-medium text-lg text-bgGrayText800 ">{product.name}</div>
            
            <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
              {
                withCart && (
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
                )
              }
              
              {children && children} {/* Optional Slot */}
            </div>
          </div>
          <div className="flex flex-wrap">
            <span className={`text-redColor text-medium`}>{product.discount || product.price} JOD</span>
            {
              product.discount ? <span
                className={`${
                  product.discount
                    ? "line-through text-captionColor mx-3"
                    : "text-primary"
                }`}
              >
                {product.price} JOD
              </span> : ""
            }
          </div>
          <div className="countity flex items-center my-4">
            <span className="text-xs text-bgGrayText400 font-medium ">Quantity:</span>
            <div className="flex items-center gap-4 mx-2">
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
