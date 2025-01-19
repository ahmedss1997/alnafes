"use client";
import { iProduct } from "@/code/dataModels";
import { useEffect, useState } from "react";
import ProductSkeleton from "./productSkeleton";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ProductPreview from "./productPreview";
import ProductTabs from "./productTabs";
import products from "@/code/products_db";
import ProductCardCol from "@/components/Home/productCardCol";

export default function Product({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<iProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const productsList = products.slice(0, 4);

  useEffect(() => {
    const findProduct = products.find(
      (product) => product.id == parseInt(params.id)
    );
    if (findProduct) setProduct(findProduct);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [params.id]);

  return (
    <main dir="ltr">
      <div className="container mx-auto px-3 md:px-6 py-12">
        {/* fetching data*/}
        {isLoading && <ProductSkeleton />}
        {/* Product not found */}
        {!isLoading && !product && (
          <div className="text-center">
            <BsFillInfoCircleFill className="text-5xl text-captionColor mx-auto mb-3" />
            <p className="text-blackText text-2xl">Product not found!</p>
          </div>
        )}
        {/* Product found */}
        {!isLoading && product && (
          <>
            <ProductPreview product={product} />
            <div className="mt-6">
              <ProductTabs product={product} />
            </div>
            <div className="container px-0">
              <h2 className="text-4xl text-primary font-normal my-3">Trust us, you will love</h2>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                {productsList.map((product) => (
                  <ProductCardCol product={product} key={product.id} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
