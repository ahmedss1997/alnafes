"use client";

import { useSingleRecipe } from "@/hooks/useRecipe";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { IRecipe } from "@/types/types";
import customImage from "../../../public/assets/Cake.png";

const RecipeDetails = () => {
  const RecipeDetails = useSingleRecipe();
  const { id } = useParams();
  const [recipe, setRecipesDetails] = useState<IRecipe | null>(null);

  useEffect(() => {
    RecipeDetails.mutate(
      { Id: id || 0 },
      {
        onSuccess: (data) => {
          setRecipesDetails(data.result);
          console.log("Recipe details successful!", data);
        },
        onError: (error) => {
          console.error("Recipe details failed:", error);
        },
      }
    );
  }, []);

  return (
    <div className="container-fluid mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <h2 className="text-bgGrayText400 text-lg font-medium my-5">Recipes {">"} {recipe?.title}</h2>
      <div className="row-all w-full flex flex-wrap">
        <div className="basis-full lg:basis-1/2 mb-6">
          <div className="">
            <img
              src={recipe?.image || ""}
              width={600}
              height={600}
              className="rounded-lg overflow-hidden w-full h-full"
            />
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 ltr:lg:pl-4 rtl:lg:pr-4">
          <div className="p-5">
            {/* Div With Title */}
            <div className="mb-2">
              <h3 className="text-2xl text-bgGrayText800 font-semibold">
                {recipe?.title}
              </h3>
              <p className="text-bgGrayText600 font-medium leading-6 my-5">{recipe?.description}</p>
            </div>
            {/* Div With Ingredients */}
            <div>
              {recipe?.recipeIngredients.map((mainIngredient, index) => (
                <div key={index}>
                  <h3>{mainIngredient.title} : </h3>
                  {mainIngredient.ingredients.map((ingredient, index) => (
                    <ul key={index} className="list-disc my-4 mx-8">
                      <li key={index} className="text-bgGrayText600 font-medium">{ingredient}</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;

