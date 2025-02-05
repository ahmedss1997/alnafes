/* eslint-disable @next/next/no-img-element */
"use client";

import Recipe1 from "../../../public/assets/Recipe1.png";
import { useRecipeFilter } from "@/hooks/useRecipe";
import { IRecipe } from "@/types/types";
import { useEffect, useState } from "react";

const Recipes = () => {
  const RecipeFilter = useRecipeFilter();
  const [recipesList, setRecipesList] = useState<IRecipe[] | null>(null);

  useEffect(() => {
    RecipeFilter.mutate(
      { MaxPageSize: 4 },
      {
        onSuccess: (data) => {
          setRecipesList(data.result);
        },
        onError: (error) => {
          console.error("Recipes failed:", error);
        },
      }
    );
  }, []);

  return (
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 text-center">
      <h2 className="text-primary text-4xl mt-5 mb-8">Recipes</h2>
      <div className="row-all w-full flex flex-wrap">
        {recipesList?.map((item, index) => (
          <div
            key={index}
            className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2"
          >
            <div className={`w-full h-full ${index % 2 !== 0 ? "lg:pt-10" : "pt-0"}`}>
              <div className="img-bakery">
                <img
                  src={Recipe1.src}
                  className="w-full"
                  width={300}
                  height={200}
                  alt={item.title || "Recipe Image"}
                />
              </div>
              <div className="caption-bakery p-4">
                <h3 className="text-2xl text-blackColor font-semibold">{item.title}</h3>
                <p className="text-base text-grayColor600 leading-6 font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="text-blackColor font-semibold mx-auto">See All</button>
    </div>
  );
};

export default Recipes;