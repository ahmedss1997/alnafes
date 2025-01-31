"use client";

import { iProduct } from "@/code/dataModels";
import { ReactNode, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import GlobalContext from "@/code/globalContext";
const ProductCard = ({
  product,
  children,
}: {
  product: iProduct;
  children?: ReactNode;
}) => {
  const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);
  const defaultImg = product.imagesUrl[0] ? product.imagesUrl[0].url : "";
  const [productCount, setProductCount] = useState(1);
  const [productInCart, setProductInCart] = useState(false);

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
    <div className={`shadow-sm rounded-lg mb-4 border my-12 bg-white`}>
      <div className="flex items-start flex-wrap">
        <div className="border basis-full lg:basis-1/4 max-w-[160px] mx-auto lg:mx-0">
          <Image 
            loader={() => defaultImg} 
            src={defaultImg} className="h-full" alt="product"
            width={200} height={200}/>
        </div>
        <div className="text-sm basis-full lg:basis-3/4 ltr:lg:ml-4 rtl:lg:mr-4 mx-0">
          <div className="flex items-center justify-between mb-2 flex-wrap">
            <div className="font-medium text-lg text-bgGrayText800 ">{product.name}</div>
            <div>
              {children && children} {/* Optional Slot */}
            </div>
          </div>
          <div className="flex flex-wrap">
            <span className={`text-redColor text-medium`}>{product.discountPrice || product.price} {product.currency}</span>
            {
              product.discountPrice ? <span
                className={`${
                  product.discountPrice
                    ? "line-through text-captionColor mx-3"
                    : "text-primary"
                }`}
              >
                {product.price} {product.currency}
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
