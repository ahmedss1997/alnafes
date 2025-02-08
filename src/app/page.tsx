"use client"

import Header from "@/components/Header";
import About from "@/components/Home/About";
import AskUs from "@/components/Home/AskUs";
import BestBaked from "@/components/Home/BestBacked";
import ContactUs from "@/components/Home/ContactUs";
import Recipes from "@/components/Home/Recipe";
import ProductCardCol from "../components/Home/productCardCol";
import { useEffect, useState } from "react";
import { useCategoryFilter } from "@/hooks/useCategory";
import { useProductsFilter } from "@/hooks/useProducts";
import { IAPIResult, ICategory, IProduct } from "@/types/types";
import HomeCategory from "@/components/Home/HomeCategory";

export default function Home() {
  const getCategories = useCategoryFilter();
  const [categoriesList, setCategoriesList] = useState<ICategory[]>([]);
  
  useEffect(() => {
    return getCategories.mutate(
      { MaxPageSize: 4 },
      {
        onSuccess: (data: IAPIResult<ICategory[]>) => {
          setCategoriesList(data.result);
        },
        onError: (error) => {
          console.error("Recipes failed:", error);
        },
      }
    );
  }, []);

  

  const getProducts = useProductsFilter();
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  useEffect(() => {
    return getProducts.mutate(
      { MaxPageSize: 20 },
      {
        onSuccess: (data) => {
          console.log("donee", data.result);
          setProductsList(data.result);
        },
        onError: (error) => {
          console.error("Recipes failed:", error);
        },
      }
    );
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  // Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Move one item at a time
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(productsList.length - itemsPerPage + 1, 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(productsList.length - itemsPerPage + 1, 1)) % Math.max(productsList.length - itemsPerPage + 1, 1));
  };

  return (
    <div className="">
      <Header />
      <About />
      {
        categoriesList.length > 3 && (
          <HomeCategory category={categoriesList[0]}  />
        )
      }
      
      <BestBaked />
      {/* <Categories /> */}
      <div className="product-home container-fluid mx-auto px-4 py-5 sm:px-6 lg:px-8 flex items-center">
        <div className="row-all w-full flex flex-wrap">
          <div className="relative w-full flex items-center justify-between mb-5 px-3">
            <span className="font-medium lg:text-3xl text-xl text-blackText">Sandwich on the go</span>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden`}>
            {productsList.slice(currentSlide, currentSlide + itemsPerPage).map((product) => (
              <ProductCardCol product={product} key={product.id} />
            ))}
          </div>
          <div className="flex justify-end w-full gap-3 mt-6">
            <button onClick={prevSlide} className="w-12 h-12 bg-white p-2 rounded-full border border-bgGrayText600">
              &lt;
            </button>
            <button onClick={nextSlide} className="w-12 h-12 bg-white p-2 rounded-full border border-bgGrayText600">
              &gt;
            </button>
          </div>
        </div>
      </div>
      {
        categoriesList.length > 3 && (
          <HomeCategory category={categoriesList[1]}  />
        )
      }
      <Recipes />
      <ContactUs />
      {
        categoriesList.length > 3 && (
          <HomeCategory category={categoriesList[2]}  />
        )
      }
      <AskUs />
    </div>
  );
}
