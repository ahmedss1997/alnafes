"use client";

import { IProductItem } from "../../../../types/types";

export default function ProductDescription({ product }: { product: IProductItem }) {
  return (
    <div className="container px-0">
      <p>{product.description}</p>
    </div>
  );
}
