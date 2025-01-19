import { CgClose } from "react-icons/cg";
import { Dispatch, SetStateAction } from "react";
export default function NotifySign ({setOpenNotify, setOpenNotifySuccess}: {setOpenNotify: Dispatch<SetStateAction<boolean>>, setOpenNotifySuccess: Dispatch<SetStateAction<boolean>>}) {
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
                             onClick={() => setOpenNotify(false)}
                             className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                                <CgClose className="inline" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="pt-3 pb-3 space-y-4">
                            <p className="text-sm leading-relaxed text-blackSubText text-center">
                                Unfortunately this product cannot be ordered Fill out the form below and we will alert you as soon
                                as the product is in stock
                            </p>
                        </div>
                        <form>
                            <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block max-w-[400px] w-full mx-auto rounded-md border-0 mt-4 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            placeholder="Email"
                            />
                            
                            <div className="flex items-center py-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <button onClick={() => {setOpenNotify(false); setOpenNotifySuccess(true)}} type="button" className="text-center text-white bg-primary rounded-md px-3 py-2 mt-3 lg:col-span-2"> 
                                    Sign up
                                </button>
                                <button onClick={() => setOpenNotify(false)} type="button" className="rounded-md border px-3 py-2 mt-3 bg-blackText text-white lg:col-span-1">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}