"use client"

import Image from "next/image";
import { IAPIResult, ICategory } from "@/types/types";
import { useEffect, useState } from "react";
import {useSubCategoryFilter} from "@/hooks/useCategory";
import customImage from "../../../public/assets/Cake.png";

const HomeCategory = ({category}: {category: ICategory}) => {
  const SubCategoryFilter = useSubCategoryFilter();
  const [subCategoriesList, setSubCategoriesList] = useState<ICategory[]>([]);
  
  useEffect(() => {
    SubCategoryFilter.mutate(
      { CategoryId: category.id },
      {
        onSuccess: (data: IAPIResult<ICategory[]>) => {
          setSubCategoriesList(data.result);
        },
        onError: (error: unknown) => {
          console.error("Recipes failed:", error);
        },
      }
    );
  }, []);
  return (
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 text-center">
      <h2 className="text-primary text-4xl mb-3">{category.name}</h2>
      <div className="row-all w-full flex flex-wrap">
        {subCategoriesList.map((item, index) => (
          <div key={index} className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2">
            <div className="w-full h-full rounded-lg border-[0.3px] border-primary">
              <div className="img-bakery">
                <Image
                  src={item.image === null ? customImage : item.image}
                  className="w-full rounded-tr-lg rounded-tl-lg"
                  alt=""
                />
              </div>
              <div className="caption-bakery py-4">
                <h3 className="text-2xl text-primary">{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCategory;