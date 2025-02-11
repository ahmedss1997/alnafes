"use client"

import { selectCartTotal, selectCartTotalDiscount, selectCartTotalWithDiscount } from "@/store/slices/cartSlice";
import Link from "next/link"
import { useSelector } from "react-redux";

const Chekout = () => {

  const total = useSelector(selectCartTotal);
  const discount = useSelector(selectCartTotalDiscount);
  const totalWithDiscount = useSelector(selectCartTotalWithDiscount);
  const deliveryCost = 50;
  const finalTotal = totalWithDiscount + deliveryCost;

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 ">
      <span className="text-lg text-bgGrayText400 font-medium p-3">Delivery</span>
      <div className="row-all w-full flex flex-wrap "> 
        <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
          <div className="border border-borderLineGray px-5 py-8 rounded-md">
            <div className="content-order">
              <div className="border-b border-borderLineGray text-bgGrayText800 mx-3 font-bold text-2xl py-3">Shipping info</div>
              <form action="" className="mt-5">
                <div className="row-all w-full flex flex-wrap">
                  {/* Frist Name */}
                  <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
                    <div className="relative w-full mb-2">
                      <input
                        type="text"
                        name="frist_name"
                        id="frist_name"
                        autoComplete="frist_name"
                        className="block px-4 pt-4 pb-2 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                        placeholder=""
                      />
                      <label htmlFor="frist_name" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Frist name</label>
                    </div>
                  </div>
                  {/* Last Name */}
                  <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
                    <div className="relative w-full mb-2">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="last_name"
                        className="block px-4 pt-4 pb-2 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                        placeholder=""
                      />
                      <label htmlFor="last_name" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Last name</label>
                    </div>
                  </div>
                  {/* City */}
                  <div className="col-item max-w-full basis-full p-3">
                    <div className="relative w-full mb-2">
                      <select name="city" id="" className="block px-4 py-4 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300">
                        <option value="" className="text-gray-400">City</option>
                        <option value="" className="text-gray-400">Egypt</option>
                        <option value="" className="text-gray-400">Saudia</option>
                        <option value="" className="text-gray-400">Qatar</option>
                      </select>
                    </div>
                  </div>
                  {/* Street */}
                  <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
                    <div className="relative w-full mb-2">
                      <input
                        type="text"
                        name="Street"
                        id="Street"
                        autoComplete="Street"
                        className="block px-4 pt-4 pb-2 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                        placeholder=""
                      />
                      <label htmlFor="Street" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Street </label>
                    </div>
                  </div>
                  {/* Building Number */}
                  <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
                    <div className="relative w-full mb-2">
                      <input
                        type="text"
                        name="building_number"
                        id="building_number"
                        autoComplete="building_number"
                        className="block px-4 pt-4 pb-2 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                        placeholder=""
                      />
                      <label htmlFor="building_number" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Building number</label>
                    </div>
                  </div>
                  {/* Phone Number */}
                  <div className="col-item max-w-full basis-full p-3">
                    <div className="relative w-full mb-2">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        autoComplete="phone_number"
                        className="block px-4 pt-4 pb-2 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                        placeholder=""
                      />
                      <label htmlFor="phone_number" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Phone number</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="border-b border-borderLineGray text-primary font-semibold text-base py-3 mb-2 mx-3">Select Your Location on google maps</div>
              <div className="Adress flex items-center gap-2 m-3 mt-6 w-full">
                <input type="radio" className="w-6 h-6 cursor-pointer" />
                <span>use Home address</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
          <div className="border border-solid border-borderLineGray bg-bgGrayText50 rounded-md p-7">
            <h3 className="text-2xl font-semibold text-bgGrayText700">Order summery</h3>
            {/* Subtotal */}
            <div className="flex flex-wrap lg:justify-between justify-center mt-3">
              <span className="text-bgGrayText500 font-medium">Subtotal</span>
              <span className="font-semibold text-xl text-bgGrayText600"> 
                {total.toFixed(3)}  JOD
              </span>
            </div>
            {/* Delivery */}
            <div className="flex flex-wrap lg:justify-between justify-center mt-3">
              <span className="text-bgGrayText500 font-medium">Delivery:</span>
              <span className="font-semibold text-xl text-bgGrayText600"> 
                {deliveryCost.toFixed(3)} JOD
              </span>
            </div>
            {/* Discount */}
            <div className="flex flex-wrap lg:justify-between justify-center mt-3">
              <span className="text-bgGrayText500 font-semibold">
                Discount:
              </span>
              <span className="font-semibold text-xl text-redColor600"> 
                {discount.toFixed(3)} JOD
              </span>
            </div>
            {/* Total */}
            <div className="flex flex-wrap lg:justify-between justify-center mt-6 border-t border-bgGrayText300 py-5">
              <span className="text-bgGrayText500 font-semibold">Total</span>
              <span className="font-semibold text-xl text-bgGrayText600"> 
                {finalTotal.toFixed(3)} JOD
              </span>
            </div>
            {/* Promo code */}
            <div className="flex justify-between gap-5 py-5">
              <div className="relative w-full ">
                <input
                  type="text"
                  name="promo_code"
                  id="promo_code"
                  autoComplete="promo_code"
                  className="block px-4 pt-6 pb-3 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                  placeholder=""
                />
                <label htmlFor="promo_code" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Add promocode</label>
              </div>
              <button className="bg-transparent border border-bgGrayText600 text-bgGrayText800 p-3 rounded-md font-semibold overflow-hidden min-w-[120px]">
                Submit
              </button>
            </div>
            <p className="text-bgGrayText500 font-medium mt-3">Estimated shopping time: 2 days</p>
            {/* Complete order */}
            <div className="text-center mt-6">
              <Link className="bg-primary text-white py-3 inline-block rounded-md w-full" href="/orders">Complete order</Link>
            </div>
          </div>
        </div>
        <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
        <div className="border border-borderLineGray px-5 py-8 rounded-md">
            <div className="content-order">
              <div className="border-b border-borderLineGray text-bgGrayText800 mx-3 font-semibold text-2xl py-3">Payment Method</div>
              <form action="">
                <div className="Adress flex items-center gap-2 m-3 mt-6 w-full">
                  <input type="radio" id="cash" value={"cash"} name="payment" className="w-6 h-6 cursor-pointer" />
                  <span>Cash on Delivery</span>
                </div>
                <div className="Adress flex items-center gap-2 m-3 mt-6 w-full">
                  <input type="radio" id="visa" value={"visa"} name="payment" className="w-6 h-6 cursor-pointer" />
                  <span>Credit or Debit Card</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chekout