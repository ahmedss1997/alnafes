"use client";

import { IProductItem } from "../../../../types/types";

export default function ProductSpecification({ product }: { product: IProductItem }) {

  return (
    <div className="container-fluid mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <ul className="list-disc">
        {product.ingredients.map((ingredient, index) => (
          <li key={index}>
            <span>{ingredient.name} : </span>
            <span>{ingredient.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
