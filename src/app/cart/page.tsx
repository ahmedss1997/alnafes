"use client";
import { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";
import {BiSolidTrash } from "react-icons/bi";
import { useContext } from "react";
import GlobalContext from "@/code/globalContext";
import Link from "next/link";
import Image from "next/image";
import cartEmptyImg from "../../../public/assets/cartEmpty.png";

export default function Cart() {
  const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);

  const [isLoading, setIsloading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalWithTaxes, setTotalWithTaxes] = useState(0);
  const removeItem = (id:number) => {
    setG_ProductsInCart(G_productsInCart.filter(x => x.id != id));
  };
  useEffect(() => {
    const total = G_productsInCart.map(x => (x.discountPrice || x.price) * x.quantity).reduce((a,b) => a + b, 0);
    setTotal(total);
    setTotalWithTaxes(total * 1.21);
    setIsloading(false);
  }, [G_productsInCart]);

  return (
    <div className="container px-3 max-w-[700px] mx-auto py-12">
      <h2 className="text-2xl text-blackText font-bold mb-6 text-center">Cart</h2>
      {(G_productsInCart && G_productsInCart.length) || isLoading ? (
        G_productsInCart.map((product, index) => (
          <ProductCard key={index + 1} product={product}>
            <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
              <button className="text-redColor mx-1 flex items-center" onClick={() => removeItem(product.id)}>
                {" "}
                <BiSolidTrash className="mx-1 text-lg" /> <span> Remove </span>{" "}
              </button>
            </div>
          </ProductCard>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <div>
            <Image 
              src={cartEmptyImg} 
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
      {G_productsInCart && G_productsInCart.length > 0 && (
        <div>
          <div className="flex flex-wrap lg:justify-between justify-center mt-3">
              <span className="text-captionColor">Total products:</span>
              <span className="font-bold">{total.toFixed(2)} SAR</span>
          </div>
          <div className="flex flex-wrap lg:justify-between justify-center mt-3">
              <span className="text-captionColor">Final total <span className="text-xs text-black">(Taxes included)</span>:</span>
              <span className="font-bold text-primary">{totalWithTaxes.toFixed(2)} SAR</span>
          </div>
          <div className="text-center mt-6">
            <Link className="bg-primary text-white py-2 inline-block rounded-md min-w-[260px]" href="/checkout">Check out</Link>
          </div>
        </div>
      )}
    </div>
  );
}