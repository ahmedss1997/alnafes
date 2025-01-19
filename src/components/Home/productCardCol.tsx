"use client";
import { iProduct } from "@/code/dataModels";
import {useContext, useEffect, useState } from "react";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import GlobalContext from "@/code/globalContext";
import Link from "next/link";
import NotifySign from "../notifyModel/notify_sign";
import Image from "next/image";
import Stars from "../../../public/assets/stars.png";
import NotifySuccess from "../notifyModel/notify_success";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";

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
    <div className="product-content bg-onSurface border-2 border-solid border-bgGrayText400 rounded-md overflow-hidden ">
      <div className="img-product-home relative ">
        <Link href={`/product/${product.id}`}>
          <Image
            loader={() => defaultImg}
            src={defaultImg}
            className="w-full rounded-t-md"
            width={200}
            height={250}
            alt="product-home"
          />
        </Link>
        <div className="absolute top-0 p-5 w-full flex items-center justify-between">
          <button
            className={`text-sm font-normal rounded-md px-3 py-1 cursor-pointer ${
              product.stock == 0 ? "bg-redColor text-onSurface" : "text-primary bg-onSurface"
            }`}
          >
            {product.stock == 0 ? "Out of Stock" : "-40%"}
          </button>
          <span
            className={`h-11 w-11 rounded-full border border-[#39545D] bg-onSurface flex justify-center items-center cursor-pointer ${
              product.stock == 0 ? "hidden" : "block"
            }`}
            onClick={() => toggleActiveIconHeart()}
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
        <p className="text-sm text-bgGrayText400 font-semibold mb-2"> {product.categoryName} </p>
        <h3 className="text-lg text-bgGrayText800 font-medium">
          <Link href={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center gap-2">
          <Image
            src={Stars}
            className=""
            width={100}
            alt="product-star"
          />
          <span className="text-sm text-[#39545D] font-medium">{product.rate}</span>
        </div>
        {/* Div With Price */}
        <div className="my-2">
          <span className="text-base text-redColor font-medium">
            {product.discountPrice || product.price} {product.currency}
          </span>
          {
            product.discountPrice ? (
              <span className="text-base text-[#39545D] font-medium lg:mx-3 ml-1 line-through">
                {product.price} {product.currency}
              </span>
            ) : null
          }
        </div>
        {/* Div With Countity Add To Cart */}
        <div className="countity flex items-center">
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
        <div className="add-cart flex items-center gap-2 relative mt-5">
          <div className="w-full flex justify-between lg:h-11 h-9">
            {/* Button With Notify Me */}
            {product.stock == 0 && (
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
            {product.stock > 0 && (
              <div className="w-full flex justify-between items-center">
                <Link className="text-onSurface  flex justify-center items-center lg:text-base text-sm font-semibold max-w-[200px] w-full h-full rounded-lg border border-solid border-primary bg-primary cursor-pointer" href={"/cart"}>
                  <button
                    onClick={() => setProductInCart(true)}
                    >
                      Buy Now
                  </button>
                </Link>
                <span
                  className="h-11 w-11 rounded-full border border-[#39545D] bg-OnSurface flex justify-center items-center cursor-pointer"
                >
                  <AiOutlineShoppingCart className="lg:text-primary text-graySubText text-xl cursor-pointer" />
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
