"use client";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../../store/slices/cartSlice";
import { GoPlus } from "react-icons/go";
import { MdOutlineMinimize } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import { IProduct } from "@/types/types";
import { RootState } from "@/store";

export default function CartMenuItem({ product }: { product: IProduct }) {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
  const currentQuantity = product.quantity || 0;


  const removeItem = (id: number) => {
    dispatch(setCartData(cartProducts.filter((x) => x.item.id !== id)));
  };

  const handleIncrement = () => {
    if (currentQuantity < product.item.quantity) {
      const updatedCart = cartProducts.map((x) =>
        x.item.id === product.item.id ? { ...x, quantity: currentQuantity + 1 } : x
      );
      dispatch(setCartData(updatedCart));
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      const updatedCart = cartProducts.map((x) =>
        x.item.id === product.item.id ? { ...x, quantity: currentQuantity - 1 } : x
      );
      dispatch(setCartData(updatedCart));
    }
  };


  if (typeof window === "undefined") return null; // Prevent hydration mismatch

  if (!product) return null; // Prevent rendering if data isn't available yet

  return (
    <div className="flex justify-between py-3 border-b items-center">
      <div>
        <img src={product.item.image || ""} alt={product.item.name} className="w-12 h-12" />
      </div>
      <div className="flex-grow mx-1">
        <h3 className="text-captionColor">{product.item.name}</h3>
        <button className="text-primary hover:text-white text-base font-normal justify-center items-center w-full rounded-md flex border-2 border-solid border-primary hover:bg-primary transition-all duration-500 ease-in-out">
          <span className="h-full flex justify-center items-center mx-1 cursor-pointer" onClick={handleDecrement}>
            <MdOutlineMinimize className="transition-all duration-500 ease-in-out text-lg mb-3" />
          </span>
          <span className="h-full flex grow justify-center items-center cursor-pointer">
            <span className="text-lg font-bold">{currentQuantity}</span>
          </span>
          <span className="h-full flex justify-center items-center mx-1 cursor-pointer" onClick={handleIncrement}>
            <GoPlus className="transition-all duration-500 ease-in-out text-lg" />
          </span>
        </button>
        <p className="text-center mt-1">
          <span className="text-blackText text-sm font-bold">
            {product.item.discount || product.item.price} JOD
          </span>
          {product.item.discount ? (
            <span className="text-captionColor line-through text-xs ltr:ml-1 rtl:mr-1">
              {product.item.price} JOD
            </span>
          ) : null}
        </p>
      </div>
      <button>
        <TbTrash className="text-redColor text-2xl" onClick={() => removeItem(product.item.id)} />
      </button>
    </div>
  );
};
