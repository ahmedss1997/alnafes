"use client";

import products from "@/code/products_db";
import ProductCardCol from "@/components/Home/productCardCol";

export default function RelatedProducts() {
  const productsList = products.slice(0, 4);
  return (
    <div className="container px-0">
      <h2 className="text-sm text-primary font-medium my-3 text-end underline">See all</h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {productsList.map((product) => (
          <ProductCardCol product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
