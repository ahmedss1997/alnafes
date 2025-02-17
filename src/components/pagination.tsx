import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";

export default function Pagination({className, numberOfPages, page, maxPagesLength, setPage}:
    {className?: string, numberOfPages: number, page: number, maxPagesLength?: number,
        setPage: Dispatch<SetStateAction<number>>}) {
    const maxPages = maxPagesLength || 5;
    const pagesNumsArr = [...Array(numberOfPages)].map((_, index) => index + 1);
    const [pagesNumsView, setPagesNumsView] = useState<number[]>([]);
    useEffect(() => {
        setPagesNumsView(pagesNumsArr.slice(Math.max(0, page - Math.floor(maxPages / 2)), Math.min(numberOfPages, page + Math.floor(maxPages / 2))));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    
    return (
        <ul className={`flex items-center -space-x-px h-8 text-sm ${className}`}>
            <li>
                <button disabled={page === 1} onClick={() => setPage(page - 1)} className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === 1 ? "bg-gray-300 hover:bg-gray-300" : ""}`}>
                    <span className="sr-only">Previous</span>
                    <CgPushChevronLeft/>
                </button>
            </li>
            {
                pagesNumsView.map((x, index) => (
                    <li key={index}>
                        <button  onClick={() => setPage(x)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${page === x ? "bg-primary text-white" : "bg-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"}`}>{x}</button>
                    </li>
                ))
            }
            
            <li>
                <button disabled={page === numberOfPages}  onClick={() => setPage(page + 1)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === numberOfPages ? "bg-gray-300 hover:bg-gray-300" : ""}`}>
                    <span className="sr-only">Next</span>
                    <CgPushChevronRight/>
                </button>
            </li>
        </ul>
    )
}