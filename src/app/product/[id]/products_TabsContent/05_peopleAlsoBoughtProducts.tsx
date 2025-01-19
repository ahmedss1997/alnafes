"use client";

import { iProduct } from "@/code/dataModels";
import products from "@/code/products_db";
import ProductCardCol from "@/components/Home/productCardCol";

export default function PeopleAlsoBought({ product }: { product: iProduct }) {
  const productsList = products.slice(0, 4);
  return (
    <div className="container px-0">
      <h2 className="text-sm text-primary font-medium my-3 text-end underline">See all</h2>
      <div className="grid lg:grid-cols-1 lg:grid-cols-4 gap-4">
        {productsList.map((product) => (
          <ProductCardCol product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
