import { iProduct } from "@/code/dataModels";
import { ReactNode } from "react";
import Image from "next/image";
const ProductCard = ({
  product,
  children,
}: {
  product: iProduct;
  children?: ReactNode;
}) => {
  const defaultImg = product.imagesUrl[0] ? product.imagesUrl[0].url : "";
  return (
    <div className={`shadow-sm rounded-lg mb-4 py-6 px-4 border mt-3  bg-white`}>
      <div className="flex items-start flex-wrap">
        <div className="border basis-full lg:basis-1/4 max-w-[100px] mx-auto lg:mx-0 mb-3">
          <Image 
            loader={() => defaultImg} 
            src={defaultImg} className="" alt="product"
            width={200} height={200}/>
        </div>
        <div className="text-sm basis-full lg:basis-3/4 ltr:lg:ml-4 rtl:lg:mr-4 mx-0">
          <div className="flex mb-3 flex-wrap">
            <span className="text-captionColor w-[120px]">Product Name</span>
            <span>{product.name}</span>
          </div>
          <div className="flex mb-3 flex-wrap">
            <span className="text-captionColor w-[120px]">Model</span>
            <span>{product.model}</span>
          </div>
          <div className="flex mb-3 flex-wrap">
            <span className="text-captionColor w-[120px]">Stock</span>
            <span>{product.stock}</span>
          </div>
          <div className="flex flex-wrap">
            <span className="text-captionColor w-[120px]">Unit Price</span>
            <span className={`text-primary`}>{product.discountPrice || product.price} {product.currency}</span>
            {
              product.discountPrice ? <span
                className={`${
                  product.discountPrice
                    ? "line-through text-captionColor mx-3"
                    : "text-primary"
                }`}
              >
                {product.price} {product.currency}
              </span> : ""
            }
            
          </div>
        </div>
      </div>
      {children && children} {/* Optional Slot */}
    </div>
  );
};

export default ProductCard;
