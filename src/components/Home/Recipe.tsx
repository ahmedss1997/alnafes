"use client";

import Image from "next/image";
import Recipe1 from "../../../public/assets/Recipe1.png";
// import { useRecipeFilter } from "@/hooks/useRecipe";
import { IRecipe } from "@/types/types";
import { useEffect } from "react";

const Recipes = () => {
  const RecipesList = [] as IRecipe[];
  // const RecipeFilter = useRecipeFilter();
  // const [RecipesList, setReceipesList] = useState<IRecipe[] | null>(null);

  // const getRecipes = () => {
  //   RecipeFilter.mutate({MaxPageSize: 4}, {
  //     onSuccess: (data) => {
  //       setReceipesList(data.result)
  //       console.log('Recipes successful!', data.result);
  //     },
  //     onError: (error) => {
  //       console.error('Recipes failed:', error);
  //     },
  //   });
  // };

  useEffect (() => {
    // getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 text-center">
      <h2 className="text-primary text-4xl mt-5 mb-8">Recipes</h2>
      <div className="row-all w-full flex flex-wrap">
        {RecipesList?.map((item, index) => (
          <div key={index} className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2">
            <div className={`w-full h-full ${index === 1 || index === 3 ? 'lg:pt-10' : 'pt-0'}`}>
              <div className="img-bakery">
                <Image
                  src={item.image || Recipe1}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="caption-bakery p-4">
                <h3 className="text-2xl text-blackColor font-semibold">{item.title}</h3>
                <p className="text-base text-grayColor600 leading-6 font-medium">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="text-blackColor font-semibold mx-auto">See All</button>
      </div>
    </div>
  )
}

export default Recipes;