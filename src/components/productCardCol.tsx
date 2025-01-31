"use client";
import { iProduct } from "@/code/dataModels";
import {useContext, useEffect, useState } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import GlobalContext from "@/code/globalContext";
import Link from "next/link";
import NotifySign from "./notifyModel/notify_sign";
import Image from "next/image";
import NotifySuccess from "./notifyModel/notify_success";
import PointsImg from "../../public/assets/points.png";

const ProductCardCol = ({
  product,
}: {
  product: iProduct;
}) => {
  const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);
  const defaultImg = product.imagesUrl[0] ? product.imagesUrl[0].url : "";
  const [productCount, setProductCount] = useState(1);
  const [productIsFav, setProductFav] = useState(false);
  const [productInCart, setProductInCart] = useState(false);
  const [openNotify, setOpenNotify] = useState(false);
  const [openNotifySuccess, setOpenNotifySuccess] = useState(false);
  const handleIncrement = () => {
    if (productCount < product.stock) {
      setProductCount(productCount + 1);
    }
  };

  const handleDecrement = () => {
    const count = productCount - 1;
    if (productCount > 0) {
      setProductCount(count);
      if (count == 0) {
        setProductInCart(false);
      }
    }
  };

  const toggleActiveIconHeart = () => {
    setProductFav(!productIsFav);
  };

  useEffect(() => {
    if (productInCart && !G_productsInCart.some(x => x.id == product.id)) {
      setProductCount(productCount || 1);
      setG_ProductsInCart([...G_productsInCart, { ...product, quantity: productCount }]);
    } else if (productInCart && G_productsInCart.some(x => x.id == product.id)) {
      const index = G_productsInCart.findIndex(x => x.id == product.id);
      const products = [...G_productsInCart];
      products[index].quantity = productCount;
      setG_ProductsInCart(products);
    } else if (!productInCart && !productCount && G_productsInCart.some(x => x.id == product.id)) {
      setG_ProductsInCart(G_productsInCart.filter(x => x.id != product.id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productInCart, productCount])

  return (
    <div className="product-content min-h-[465px] border-2 border-solid border-borderGrayColor rounded-md p-3 bg-white">
      <div className="img-product-home relative flex justify-center">
        <Image
          loader={() => defaultImg}
          src={defaultImg}
          className="m-5 mt-7"
          width={200}
          height={200}
          alt="product-home"
        />
        <div className="absolute top-0 w-full flex items-center">
          <button
            className={`text-white text-sm font-normal rounded-md px-3 py-1  cursor-pointer ${
              product.stock == 0 ? "bg-redColor" : "bg-secondary"
            }`}
          >
            {product.stock == 0 ? "Out of Stock" : "15% off"}
          </button>
          <span
            className={`font-medium text-sm text-blackText absolute right-0 cursor-pointer ${
              product.stock == 0 ? "hidden" : "block"
            }`}
            onClick={() => toggleActiveIconHeart()}
          >
            {productIsFav ? (
              <RiHeartFill className="text-xl text-redColor"/>
            ) : (
              <RiHeartLine className="text-xl text-grey"/>
            )}
          </span>
        </div>
      </div>
      <div className="caption-product-home ">
        <div className="points flex items-center justify-between">
          <span className="text-grayColor font-normal text-base">Apple</span>
          <div className="flex items-center">
            <Image
              src={PointsImg}
              className="mx-1"
              width={16}
              height={16}
              alt="product-points"
            />
            <span className="text-primary font-normal text-xs">4 Points</span>
          </div>
        </div>
        <p className="text-blackSubText text-lg font-semibold my-2">
          <Link href={`/product/${product.id}`} className="hover:text-primary block"> {product.description} </Link>
        </p>
        {/* Div With Price */}
        <div className="my-2">
          <span className="lg:text-2xl text-sm text-secondary font-bold">
            <span className="text-JODColor text-xl font-medium">{product.currency}</span> 
            <span className="text-primary text-2xl font-bold">{product.discountPrice}</span> 
            {/* <span className="text-JODColor text-sm font-normal">{product.price}</span>
            <span className="text-red-500 text-sm font-bold">{product.persent}</span> */}
          </span>
          {
            product.discountPrice ? (
              <span className="">
                <span className="text-JODColor text-sm font-normal line-through">{product.price}</span>
                <span className="text-red-500 text-sm font-bold">{product.persent}</span>
              </span>
            ) : null
          }
        </div>
        {/* Div With Button Add To Cart  */}
        <div className="add-cart flex items-center justify-center relative my-4">
          <div className="w-full flex justify-center lg:h-12 h-9">
            {/* Button With Notify Me */}
            {product.stock == 0 && (
              <button
                onClick={() => setOpenNotify(true)}
                className="lg:text-base text-sm font-semibold justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary bg-primary text-white cursor-pointer"
              >
                Notify Me
              </button>
            )}
            {/* Button With Add to Increment */}
            {!productInCart && product.stock > 0 && (
              <button
              onClick={() => setProductInCart(true)}
              className="lg:text-base text-base font-semibold justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary bg-primary text-white cursor-pointer"
              >
                Add to Cart
              </button>
            )}
            {/* Button With Decrement & Cart */}
            {productInCart && product.stock > 0 && (
              <button
                className="text-base font-semibold justify-center items-center max-w-[270px] w-full h-full rounded-md flex border-2 border-solid border-primary bg-primary text-white cursor-pointer"
              >
                <span
                  className="h-full flex justify-center items-center mx-1 cursor-pointer"
                  onClick={() => handleDecrement()}
                >
                  <MdOutlineMinimize
                    className={`transition-all duration-500 ease-in-out text-2xl mb-3`}
                  />
                </span>
                <span className="h-full flex grow justify-center items-center cursor-pointer">
                  <span className="text-xl font-bold">
                    {productCount}
                  </span>
                </span>
                <span
                  className="h-full flex justify-center items-center mx-1 cursor-pointer"
                  onClick={() => handleIncrement()}
                >
                  <GoPlus
                    className={`transition-all duration-500 ease-in-out text-2xl`}
                  />
                </span>
              </button>
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
