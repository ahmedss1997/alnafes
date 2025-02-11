"use client";
import {iProductInCart } from "@/code/dataModels";
import GlobalContext from "@/code/globalContext";
import { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineMinimize } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import Image from "next/image";

export default function CartMenuItem ({product}: {product: iProductInCart}) {
  const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);
  const removeItem = (id:number) => {
    const leftProductsList = G_productsInCart.filter(x => x.id != id);
    setG_ProductsInCart(leftProductsList);
  };
  const handleIncrement = (product: iProductInCart) => {
    if (product.quantity < product.stock) {
      const indix = G_productsInCart.findIndex(x => x.id == product.id);
      const products = [...G_productsInCart];
      products[indix].quantity += 1;
      setG_ProductsInCart(products);
    }
  };

  const handleDecrement = (product: iProductInCart) => {
    const count = product.quantity - 1;
    if (count > 0) {
      const indix = G_productsInCart.findIndex(x => x.id == product.id);
      const products = [...G_productsInCart];
      products[indix].quantity = count;
      setG_ProductsInCart(products);
    }
  };
  return (
    <div className="flex justify-between py-3 border-b items-center">
      <div>
        <Image src={product.imagesUrl ? product.imagesUrl[0].url : ""} alt={product.name} className="w-12 h-12" />
      </div>
      <div className="flex-grow mx-1">
        <h3 className="text-captionColor">{product.name}</h3>
        <button
            className="text-primary hover:text-white text-base font-normal justify-center items-center w-full rounded-md flex border-2 border-solid border-primary hover:bg-primary transition-all duration-500 ease-in-out"
            >
            <span
                className="h-full flex justify-center items-center mx-1 cursor-pointer"
                onClick={() => handleDecrement(product)}
            >
                <MdOutlineMinimize
                className={`transition-all duration-500 ease-in-out text-lg mb-3`}
                />
            </span>
            <span className="h-full flex grow justify-center items-center cursor-pointer">
                <span className="text-lg font-bold">
                {product.quantity}
                </span>
            </span>
            <span
                className="h-full flex justify-center items-center mx-1 cursor-pointer"
                onClick={() => handleIncrement(product)}
            >
                <GoPlus
                className={`transition-all duration-500 ease-in-out text-lg`}
                />
            </span>
        </button>
        <p className="text-center mt-1">
            <span className="text-blackText text-sm font-bold">
                {product.discountPrice || product.price} {product.currency}
            </span>
            {
                product.discountPrice ? <span className="text-captionColor line-through text-xs ltr:ml-1 rtl:mr-1">{product.price} {product.currency}</span> : ""
            }
        </p>
      </div>
      <button>
        <TbTrash className="text-redColor text-2xl" onClick={() => removeItem(product.id)} />
      </button>
    </div>
  );
};