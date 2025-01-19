"use client";

import { iProduct } from "@/code/dataModels";

export default function ProductTags({ product }: { product: iProduct }) {
  return (
    <div className="container px-0">
      {product.tags.map((tag) => (
        <span key={tag} className="text-primary bg-bgBrimary py-1 px-3 rounded-md mx-1 text-sm font-medium">
          {tag}
        </span>
      ))}
    </div>
  );
}
