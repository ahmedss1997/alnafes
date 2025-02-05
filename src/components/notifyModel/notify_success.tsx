import { CgClose } from "react-icons/cg";
import { Dispatch, SetStateAction } from "react";
// import { IProduct } from "@/code/dataModels";
import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";
import { IProduct } from "@/types/types";
export default function NotifySuccess ({product,setOpenNotifySuccess}: {product: IProduct, setOpenNotifySuccess: Dispatch<SetStateAction<boolean>>}) {
    return (
        <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-overlay">
            <div id="notify-modal" 
            className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-[100vh]">
                <div className="fixed max-w-3xl top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                    <div className="bg-white rounded-lg shadow-lg px-3 py-6">
                        <div className="flex items-center justify-between rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Notify me when the product is available
                            </h3>
                            <button type="button"
                             onClick={() => setOpenNotifySuccess(false)}
                             className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                <CgClose className="inline" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="pt-3 pb-3 space-y-4 text-center">
                            <CiCircleCheck className="text-5xl text-success mx-auto" />
                            <p className="text-sm leading-relaxed text-blackSubText ">
                                Success: You have added {product.item.name} to your wish list.
                            </p>
                        </div>
                            
                        <div className="items-center py-4 grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
                            <Link href="/cart" className="text-center text-white bg-primary rounded-md px-3 py-2 mt-3 lg:col-span-2"> 
                                Go to cart 
                            </Link>
                            <button onClick={() => setOpenNotifySuccess(false)} type="button" 
                            className="rounded-md border px-3 py-2 mt-3 bg-blackText text-white lg:col-span-1">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}