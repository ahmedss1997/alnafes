"use client";
import ProductCardCol from "@/components/Home/productCardCol";
import Pagination from "@/components/pagination";
import ProductCard from "@/components/productCard";
import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuSquareEqual } from "react-icons/lu";
import { IProductItem } from "@/types/types";

const itemCtegoryProducts = [
  {
    id: 1,
    name: 'Flafel',
  },
  {
    id: 2,
    name: 'Liver',
  },
  {
    id: 3,
    name: 'Potatoes',
  }
]

const AllProducts = ({ initialProduct }: { initialProduct: IProductItem[] | null; }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [isBestSellerActive, setIsBestSellerActive] = useState(false);
  const [activeItemId, setActiveItemId] = useState(1);
  const [page, setPage] = useState(1);
  const [itemsPerPages] = useState(9);
  const [productList, setProductList] = useState<IProductItem[]>([]);
  const allProducts = initialProduct || [] as IProductItem[];
  // Update the product list whenever the page changes
  useEffect(() => {
    if (allProducts) {
      setProductList(allProducts.slice((page - 1) * itemsPerPages, page * itemsPerPages));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPages, page]);

  const toggleBestSeller = () => {
    setIsBestSellerActive(!isBestSellerActive);
  };

  const handleItemClick = (id: number) => {
    setActiveItemId(id);
  };

  return (
    <div className="container mx-auto px-3 md:px-6 py-12">
      <div className="row-all w-full flex flex-wrap">
        <div className="col-item p-3 lg:max-w-[33%] lg:basis-1/3 max-w-[100%] basis-full">
          <div className="w-full h-full">
            <h3 className="text-lg text-bgGrayText400 font-medium  mb-3">Restaurant| <span>Sandwich</span></h3>
            <div className="w-full h-full max-h-[400px] mt-3 bg-bgGrayText50 border border-bgGrayText300 rounded-md">
              <div className="border-b border-bgGrayText300 p-3">
                <h3 className="text-lg text-primary font-medium">Restaurant Menu</h3>
              </div>
              <div className="p-3 border-b border-bgGrayText200">
                <ul className="list-disc px-5 py-4">
                  <li className="font-semibold text-lg text-bgGrayText800">Sandwich: </li>
                </ul>
                <ul>
                  {itemCtegoryProducts.map((item) => (
                    <li onClick={() => handleItemClick(item.id)} key={item.id} className={` my-3 cursor-pointer ${item.id === activeItemId ? 'font-medium text-lg bg-onSurface text-bgGrayText700 border border-borderLine rounded-md p-2' : 'font-medium text-bgGrayText600 text-lg border-0 bg-transparent'}`}
                    >{item.name}</li>
                  ))}
                </ul>
              </div>
              <ul className="list-disc px-8 py-3">
                <li className="font-semibold text-lg text-bgGrayText800">Boxes: </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-item p-3 lg:max-w-[66%] lg:basis-2/3 max-w-[100%] basis-full">
          <div className="flex max-h-12">
            <div className="w-full h-full">
              <input type="text" placeholder="Search..." className="border border-borderLine rounded-md p-2 w-full peer focus:outline-gray-300" />
            </div>
            <div className="flex items-center justify-center gap-3 w-full h-full">
              <span>Sort By</span>
              <div onClick={toggleBestSeller} className={`flex items-center gap-3 border cursor-pointer border-bgGrayText300 rounded-md p-2 transition-all ease-in-out duration-500 ${
                  isBestSellerActive ? 'bg-primary text-white' : ''
                }`}>
                <span>Best Seller</span>
                {isBestSellerActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div onClick={() => setIsGrid(true)} className="bg-bgGrayText100 border cursor-pointer border-[#9DABAF] rounded-md p-2">
                <HiOutlineSquares2X2 />
              </div>
              <div onClick={() => setIsGrid(false)} className="border border-bgGrayText100 cursor-pointer rounded-md p-2">
                <LuSquareEqual />
              </div>
            </div>
          </div>
          {productList.length ? (
            <>
              {isGrid ? (
                <div className="grid lg:grid-cols-3 gap-4 mt-8">
                  {productList.map((product) => (
                    <ProductCardCol product={product} key={product.id} />
                  ))}
                </div>
              ): (
                <div className="grid lg:grid-cols-1 gap-4">
                  {productList.map((product) => (
                    <ProductCard product={product} key={product.id} withCart />
                  ))}
                </div>
              )}
              {allProducts.length > itemsPerPages && (
                <Pagination className="mt-6 justify-center" page={page} numberOfPages={Math.ceil(allProducts.length / itemsPerPages)} setPage={setPage} />
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-captionColor text-sm text-center italic">
                <BsInfoCircle className="inline" /> <span className="mx-1">No products found!</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AllProducts;