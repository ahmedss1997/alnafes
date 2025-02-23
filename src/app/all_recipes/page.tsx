
"use client";

import { IRecipe } from "@/types/types";
import { useEffect, useState } from "react";
import customImage from "../../../public/assets/Cake.png";
import { useRecipeFilter } from "@/hooks/useRecipe";
import Pagination from "@/components/pagination";
import Link from "next/link";


const AllRecipes = () => {
  const RecipeFilter = useRecipeFilter();
  const [recipesList, setRecipesList] = useState<IRecipe[]>([]);
  const [page, setPage] = useState(1);
  const [itemsPerPages] = useState(8);
  useEffect(() => {
    RecipeFilter.mutate(
      { MaxPageSize: 4 },
      {
        onSuccess: (data) => {
          setRecipesList(data.result);
          console.log("Recipes Success:", data);  
        },
        onError: (error) => {
          console.error("Recipes failed:", error);
        },
      }
    );
  }, []);
  return (
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 text-center">
      <h2 className="text-primary font-normal text-4xl mb-3">Recipes</h2>
      <p>Fuel Your Body, Satisfy Your Cravings: Healthy Recipes That Taste Amazing</p>
      <div className="row-all w-full flex flex-wrap">
        {recipesList.map((item, index) => (
          <div key={index} className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2">
            <div className="w-full h-full rounded-lg ">
              <div className="img-bakery">
                <Link href={`/recipe/${item.id}`} className="w-full h-full">
                  <img
                    src={item.image === null ? customImage.src : customImage.src}
                    className="w-full rounded-md"
                    alt=""
                  />
                </Link>
              </div>
              <div className="caption-bakery py-4">
                <h3 className="text-2xl text-primary">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        {recipesList.length > itemsPerPages && (
          <Pagination className="mt-6 justify-center" page={page} numberOfPages={Math.ceil(recipesList.length / itemsPerPages)} setPage={setPage} />
        )}
      </div>
    </div>
  )
}

export default AllRecipes;