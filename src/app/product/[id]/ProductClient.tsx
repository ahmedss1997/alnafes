"use client";

import { useEffect, useState } from "react";
import ProductSkeleton from "./productSkeleton";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ProductPreview from "./productPreview";
import ProductTabs from "./productTabs";
import ProductCardCol from "../../../components/Home/productCardCol";
import { IProductItem } from "../../../types/types";

export default function ProductClient({ initialProduct, initialProductsList }: { initialProduct: IProductItem | null; initialProductsList: IProductItem[] }) {
  const [product, setProduct] = useState<IProductItem | null>(initialProduct);
  const [products, setProducts] = useState<IProductItem[]>(initialProductsList || []);
  const [isLoading, setIsLoading] = useState(!initialProduct);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Fetch single product if not provided initially
  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
      console.log("initialProduct", initialProduct);
      setIsLoading(false);
    }
  }, [initialProduct]);

  useEffect(() => {
    if (initialProductsList) {
      setProducts(initialProductsList);
    }
  }, [initialProductsList]);

  // Update itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth > 640 && window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
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
    setCurrentSlide((prev) => (prev + 1) % Math.max(products.length - itemsPerPage + 1, 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(products.length - itemsPerPage + 1, 1)) % Math.max(products.length - itemsPerPage + 1, 1));
  };

  if (isLoading) return <ProductSkeleton />;

  if (!product) {
    return (
      <div className="text-center py-12">
        <BsFillInfoCircleFill className="text-5xl text-captionColor mx-auto mb-3" />
        <p className="text-blackText text-2xl">Product not found!</p>
      </div>
    );
  }

  return (
    <main dir="ltr">
      <div className="container mx-auto px-3 md:px-6 py-12">
        <ProductPreview product={product} />
        
        <div className="mt-6">
          <ProductTabs product={product} />
        </div>

        <div className="container px-0 mt-12">
          <h2 className="text-4xl text-primary font-normal my-3">
            Trust us, you will love
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden`}>
            {products.slice(currentSlide, currentSlide + itemsPerPage).map((product) => (
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
    </main>
  );
}