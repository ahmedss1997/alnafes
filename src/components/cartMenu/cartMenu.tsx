"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CartMenuItem from "./cartMenuItem";
import { iProductInCart } from "@/code/dataModels";
import GlobalContext from "@/code/globalContext";

export default function CartMenu () {
    const [total, setTotal] = useState(0);
    const [totalWithTaxes, setTotalWithTaxes] = useState(0);
    const { G_productsInCart } = useContext(GlobalContext);
    const [products, setProducts] = useState<iProductInCart[]>(G_productsInCart);

    useEffect(() => {
        setProducts(G_productsInCart);
        const total = G_productsInCart.map(x => (x.discountPrice || x.price) * x.quantity).reduce((a, b) => a + b, 0);
        setTotal(total);
        setTotalWithTaxes(total * 1.21);
    }, [G_productsInCart]);
  return (
    <div className="cartMenu bg-white shadow-lg min-h-[100px] min-w-[280px] border-2 rounded pb-3 px-3">
        <ul className="max-h-[360px] overflow-auto">
            {
                products.length ? products.map(product =>
                    <CartMenuItem  key={product.id} product={product} />
                ) : <p className="text-center text-captionColor texr-sm italic mt-3 pb-3 border-b">No products in cart!</p>
            }
        </ul>
        <div className="flex flex-wrap lg:justify-between justify-center mt-3">
            <span className="text-captionColor">Total products:</span>
            <span className="font-bold">{total.toFixed(2)} SAR</span>
        </div>
        <div className="flex flex-wrap lg:justify-between justify-center mt-3">
            <span className="text-captionColor">Final total <span className="text-xs text-black">(Taxes included)</span>:</span>
            <span className="font-bold text-primary">{totalWithTaxes.toFixed(2)} SAR</span>
        </div>
        <div className="text-center mt-3">
            <button className="bg-primary text-white py-2 rounded-md min-w-[260px]">Check out</button>
        </div>
        <div className="text-center mt-3">
            <Link href={"/cart"} className="text-primary underline">Go to cart</Link>
        </div>
    </div>
  );
};