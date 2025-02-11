"use client";

import { useEffect, useState } from "react";
import ProductSkeleton from "./productSkeleton";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ProductPreview from "./productPreview";
import ProductTabs from "./productTabs";
import ProductCardCol from "@/components/Home/productCardCol";
import { IProductItem } from "@/types/types";

export default function ProductClient({ initialProduct, initialProductsList }: { initialProduct: IProductItem | null; initialProductsList: IProductItem[] }) {
  const [product, setProduct] = useState<IProductItem | null>(initialProduct);
  const [products, setProducts] = useState<IProductItem[]>(initialProductsList || []);
  const [isLoading, setIsLoading] = useState(!initialProduct);

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
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            {Array.isArray(products) && products.map((product) => (
              <ProductCardCol product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}