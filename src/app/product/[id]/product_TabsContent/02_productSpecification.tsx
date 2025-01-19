"use client";

import { iProduct } from "@/code/dataModels";

export default function ProductSpecification({ }: { product: iProduct }) {

  return (
    <div className="container px-0">
      <ul className="list-disc">
        <li>Homemade falafel: Crafted with fresh ingredients and fried to crispy perfection.</li>
        <li>Creamy tahini sauce: Smooth and flavorful, it balances the sandwich is other elements.</li>
        <li>Warm pita bread: The perfect vessel to hold all the delicious fillings.</li>
      </ul>
    </div>
  );
}
