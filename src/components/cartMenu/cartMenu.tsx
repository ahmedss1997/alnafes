"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import dynamic from "next/dynamic";
import { selectCartTotalWithDiscount } from "../../store/slices/cartSlice";

const CartMenuItem = dynamic(() => import("./cartMenuItem"), { ssr: false });

export default function CartMenu () {
  const { cartProducts } = useSelector((state: RootState) => state.cart);
  const total = useSelector(selectCartTotalWithDiscount);

  if (typeof window === "undefined") return null; // Prevent hydration mismatch

  return (
    <div className="cartMenu bg-white shadow-lg min-h-[100px] min-w-[280px] border-2 rounded pb-3 px-3">
      <ul className="max-h-[360px] overflow-auto">
        {
          cartProducts.length > 0 ? cartProducts.map((product, index) =>
            <CartMenuItem key={index} product={product} />
          ) : <p className="text-center text-captionColor texr-sm italic mt-3 pb-3 border-b">No products in cart!</p>
        }
      </ul>
      <div className="flex flex-wrap lg:justify-between justify-center mt-3">
        <span className="text-captionColor">Total products:</span>
        <span className="font-bold">{total.toFixed(3)} JOD</span>
      </div>
      <div className="text-center mt-3">
        <Link href={"/checkout"} className="bg-primary block text-white py-2 rounded-md min-w-[260px]">
          <button>Check out</button>
        </Link>
      </div>
      <div className="text-center mt-3">
        <Link href={"/cart"} className="text-primary underline">Go to cart</Link>
      </div>
    </div>
  );
};
