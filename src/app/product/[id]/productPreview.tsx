"use client";

import { iProduct } from "@/code/dataModels";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlobalContext from "@/code/globalContext";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Stars from "../../../../public/assets/stars.png";
import { BsHeart, BsHeartFill } from "react-icons/bs";
// import Link from "next/link";

export default function ProductPreview({ product }: { product: iProduct }) {
  const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);
  const defaultImg = product.imagesUrl[0] ? product.imagesUrl[0].url : "";
  const [productCount, setProductCount] = useState(1);
  const [productInCart, setProductInCart] = useState(false);
  const [productIsFav, setProductFav] = useState(false);

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
    <div className="flex flex-wrap">
      <div className="basis-full lg:basis-1/2 mb-6">
        <div className="product-img ">
          <Image
            loader={() => defaultImg}
            src={defaultImg}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="product-info basis-full lg:basis-1/2 ltr:lg:pl-4 rtl:lg:pr-4">
        <div className="caption-product-home bg-bgGrayText50 border border-borderLineGray rounded-lg p-10">
          {/* Div With Title */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg text-bgGrayText800 font-medium">
              <Link href={`/product/${product.id}`}>
                {product.name}
              </Link>
            </h3>
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
          {/* Div With Rating */}
          <div className="flex items-center gap-2">
            <Image
              src={Stars}
              className=""
              width={100}
              alt="product-star"
            />
          </div>
          {/* Div With Price */}
          <div className="my-5">
            <div className="">
            <span className="text-base text-bgGrayText500 font-medium">Price:</span> 
            <span className="mx-2 text-bgGrayText800 text-xl font-medium">{product.discountPrice || product.price} {product.currency}</span>
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
              {!productInCart && product.stock > 0 && (
                <div className="w-full flex justify-between items-center gap-4">
                  <Link className="text-onSurface  flex justify-center items-center lg:text-base text-sm font-semibold w-full h-full rounded-lg border border-solid border-primary bg-primary cursor-pointer" href={"/cart"}>
                    <button
                      onClick={() => setProductInCart(true)}
                      >
                        Buy Now
                    </button>
                  </Link>
                  <span
                    className="h-10 w-10 rounded-full border border-[#39545D] bg-OnSurface flex justify-center items-center cursor-pointer"
                  >
                    <AiOutlineShoppingCart className="lg:text-primary text-graySubText text-xl cursor-pointer" />
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
