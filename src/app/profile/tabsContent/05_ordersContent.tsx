"use client";

import { useState, useEffect } from "react";
// import Image from "next/image";
import noOrders from "../../../../public/assets/noOrders.png";
import { useOrders } from "@/hooks/useOrders";
import { IOrder } from "@/types/types";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export default function OrdersContent() {
  const getProducts = useOrders();
  const [ordersList, setOrdersList] = useState<IOrder[]>([]);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (!currentUser) return;
    return getProducts.mutate(
      {
        UserId: currentUser?.id
      },
      {
        onSuccess: (data) => {
          setOrdersList(data.result);
          console.log("data", data.result);
        },
        onError: (error) => {
          console.error("Recipes failed:", error);
        },
      }
    );
  }, []);
  return (
    <div className="container px-0">
      {ordersList && ordersList.length ? (
        ordersList.map((order, index) => (
          <div key={index} className="bg-bgGrayText50 p-4 rounded-md mb-8">
            <div className="container py-3">
              <button className={ `py-2 px-4 mx-3 rounded-md flex items-center gap-2 ${order.isActive ? "bg-primary text-onSurface" : "bg-greenColor600 text-onSurface}"}`}>
                <span className="w-2 h-2 rounded-full bg-bgBrimary inline-block"></span>
                <span>{ order.isActive ? "Active" : "Delivered" }</span>
              </button>
              <div className="row-all w-full flex flex-wrap">
                <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
                  <div className="w-full border-0 ltr:lg:border-r rtl:lg:border-l border-borderLineGray">
                    <div className=" flex items-center gap-1 my-6">
                      <h3 className="text-lg text-bgGrayText500 font-semibold">
                      Order ID : 
                      </h3>
                      <p className="text-lg text-bgGrayText800 leading-7 font-medium">
                        {order.id}
                      </p>
                    </div>
                    <div className=" flex items-center gap-1 mt-5">
                      <h3 className="text-lg text-bgGrayText500 font-semibold">
                      Date : 
                      </h3>
                      <p className="text-lg text-bgGrayText800 leading-7 font-medium">
                        {order.createdDate}
                      </p>
                    </div>
                    <div className=" flex items-center gap-1 mt-5">
                      <h3 className="text-lg text-bgGrayText500 font-semibold">
                      Shipping to : 
                      </h3>
                      <p className="text-lg text-bgGrayText800 leading-7 font-medium">
                        {currentUser?.firstName + " " + currentUser?.lastName}
                      </p>
                    </div>
                    <div className=" flex items-center gap-1 mt-5">
                      <h3 className="text-lg text-bgGrayText500 font-semibold">
                      Address : 
                      </h3>
                      <p className="text-lg text-bgGrayText800 leading-7 font-medium">
                        {order.address.buildingNumber + ", " + order.address.street + ", " + order.address.city}
                      </p>
                    </div>
                    <div className=" flex items-center gap-1 mt-5">
                      <h3 className="text-lg text-bgGrayText500 font-semibold">
                      Payment : 
                      </h3>
                      <p className="text-lg text-bgGrayText800 leading-7 font-medium">
                        {order.paymentMethod}
                      </p>
                    </div>
                    <div className=" flex items-center gap-1 mt-5">
                      <h3 className="text-lg text-bgGrayText500 font-semibold">
                      Shipping Fee : 
                      </h3>
                      <p className="text-lg text-greenColor600 leading-7 font-medium">
                        Free
                      </p>
                    </div>
                    <div className=" flex items-center gap-1 mt-5">
                      <h3 className="text-lg text-bgGrayText500 font-semibold">
                      Total Price : 
                      </h3>
                      <p className="text-lg text-redColor600 leading-7 font-medium">
                        {order.totalPrice} JOD
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-item lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full p-3">
                  <div className="bg-onSurface rounded-lg max-h-[100px] h-full mt-6">
                    {order.itemOrders && (
                      order.itemOrders.map((itemOrder, index) => (
                        <div key={index} className="h-full">
                          <div className="flex items-center h-full">
                            <div className="basis-full lg:basis-1/4 max-w-[160px] h-[100%]">
                              <img 
                                src={itemOrder.item.image} className="w-full h-full ltr:rounded-tl-lg ltr:rounded-bl-lg rtl:rounded-tr-lg rtl:rounded-br-lg" alt="itemOrder"
                              />
                            </div>
                            <div className="text-sm basis-full lg:basis-3/4 ltr:ml-4 rtl:mr-4 py-6">
                              <div className="flex items-center justify-between mb-2 flex-wrap">
                                <div className="font-medium text-lg text-bgGrayText800 ">{itemOrder.item.name}</div>
                              </div>
                              <div className="flex items-center justify-between flex-wrap max-w-[75%]">
                                <span className={`text-primary font-medium`}>{itemOrder.item.discount || itemOrder.item.price} JOD</span>
                                <span className={`text-primary font-medium`}>Quantity : {itemOrder.quantity} </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blackText mb-4">
            Order History
          </h2>
          <img
            src={noOrders.src}
            className="mb-3 mx-auto"
            width={200}
            height={200}
            alt="no orders"
          />
          <p className="text-captionColor text-sm mb-6">
            You have not made any previous orders!
          </p>
          <button
            type="submit"
            className="text-white bg-primary rounded-md px-3 py-2 mt-3 min-w-[260px]"
          >
            Shop now
          </button>
        </div>
      )}
    </div>
  );
}
