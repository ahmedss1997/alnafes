"use client";

import { iProduct } from "@/code/dataModels";

export default function ProductDescription({ product }: { product: iProduct }) {
  return (
    <div className="container px-0">
      <p>{product.description}</p>
    </div>
  );
}
