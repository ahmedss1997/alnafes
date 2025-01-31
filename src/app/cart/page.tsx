"use client";
import { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";
import {BiSolidTrash } from "react-icons/bi";
import { useContext } from "react";
import GlobalContext from "@/code/globalContext";
import Link from "next/link";
import Image from "next/image";
import cartEmptyImg from "../../../public/assets/cartEmpty.png";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export default function Cart() {
  const { G_productsInCart, setG_ProductsInCart } = useContext(GlobalContext);
  const [isLoading, setIsloading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);
  const [discount, setDiscount] = useState<number>(0);
  const [productIsFav, setProductFav] = useState(false);

  const toggleActiveIconHeart = () => {
    setProductFav(!productIsFav);
  };

  const removeItem = (id:number) => {
    setG_ProductsInCart(G_productsInCart.filter(x => x.id != id));
  };
  useEffect(() => {
    const total = G_productsInCart.map(x => (x.discountPrice || x.price) * x.quantity).reduce((a,b) => a + b, 0);
    const discountSave = 300;
    setTotal(total);
    setTotalWithDiscount(total - discountSave);
    setDiscount(discountSave);
    setIsloading(false);
  }, [G_productsInCart]);

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 ">
      {/* <h2 className="text-2xl text-blackText font-bold mb-6 text-center">Cart</h2> */}
      <span className="text-lg text-bgGrayText400 font-medium p-3"> My cart ({G_productsInCart.length} items)</span>
      <div className="row-all w-full flex flex-wrap gap-3"> 
        <div className="col-item lg:max-w-[66%] lg:basis-2/3 max-w-full basis-full p-3">
          {(G_productsInCart && G_productsInCart.length) || isLoading ? (
            G_productsInCart.map((product, index) => (
              <ProductCard key={index + 1} product={product}>
                <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
                  <span
                    className={`h-9 w-9 mx-2 rounded-full border border-borderLineGray bg-onSurface flex justify-center items-center cursor-pointer`}
                    onClick={() => toggleActiveIconHeart()}
                  >
                    {productIsFav ? (
                      <BsHeartFill className="text-xl text-redColor"/>
                    ) : (
                      <BsHeart className="text-xl text-grey"/>
                    )}
                  </span>
                  <span
                    className={`h-9 w-9 mx-2 rounded-full border border-borderLineGray bg-onSurface flex justify-center items-center cursor-pointer`}
                    onClick={() => removeItem(product.id)}
                  >
                    <BiSolidTrash className="mx-1 text-lg" />
                  </span>
                  {/* <button className="text-redColor mx-1 flex items-center" onClick={() => removeItem(product.id)}>
                    {" "}
                    <BiSolidTrash className="mx-1 text-lg" /> <span> Remove </span>{" "}
                  </button> */}
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
        </div>
        <div className="col-item lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full p-3">
          {G_productsInCart && G_productsInCart.length > 0 && (
            <div className="border border-solid border-borderGray200 rounded-md lg:my-12 my-5 p-7">
              <div className="flex flex-wrap lg:justify-between justify-center mt-3">
                <span className="text-captionColor">Total</span>
                <span className="font-semibold text-xl text-bgGrayText600">{totalWithDiscount.toFixed(2)} JOD <span className="font-semibold text-xs text-bgGrayText400 relative bottom-3 line-through">{total.toFixed(2)} JOD</span> 
                </span>
              </div>
              <div className="flex flex-wrap lg:justify-between justify-center mt-3">
                <span className="text-redColor600 font-semibold text-xs">
                  Discount: saved {discount.toFixed(2)} JOD
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