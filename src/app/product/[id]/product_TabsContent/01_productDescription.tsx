"use client";

import { IProduct } from "@/types/types";

export default function ProductDescription({ product }: { product: IProduct }) {
  return (
    <div className="container px-0">
      <p>{product.item.description}</p>
    </div>
  );
}
