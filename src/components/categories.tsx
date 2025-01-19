"use client";

import Image from "next/image";
import categoryMobiles from "../../public/assets/phones.png";
import categoryLaptops from "../../public/assets/laptops.png";
import categoryHeadphones from "../../public/assets/headphones.png";
import categoryCamera from "../../public/assets/canonCam.png";
import categoryPlaystation from "../../public/assets/playStation.png";
import categorySpeakers from "../../public/assets/speakers.png";
import { useState } from "react";

const Categoriess = [
  {
    src: categoryMobiles,
    title: "Mobiles",
    active: true,
  },
  {
    src: categoryLaptops,
    title: "Laptop",
  },
  {
    src: categoryHeadphones,
    title: "Headphones",
  },
  {
    src: categoryCamera,
    title: "Camera",
  },
  {
    src: categoryPlaystation,
    title: "Playstation",
  },
  {
    src: categorySpeakers,
    title: "Speakers",
  },
];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number>();

  return (
    <div className="categories container-fluid mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
      <div className="row-all w-full flex flex-wrap">
        <div className="relative w-full flex items-center mb-5">
          <span className="font-medium lg:text-3xl text-xl text-blackText">
            Shop By Categories
          </span>
          <button className="text-primary text-base font-normal rounded-md lg:px-6 px-4 lg:py-2 py-1 border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out absolute right-0 cursor-pointer">
            See All
          </button>
        </div>
        {Categoriess.map((Category, index) => (
          <div
            key={index}
            className="col-item p-3 xl:max-w-[16.666%] xl:basis-1/6 max-w-[33%] basis-1/3 "
            onClick={() => setActiveCategory(index)}
          >
            <div
              className={`type-category text-center lg:p-4 p-2 lg:min-h-[370px] cursor-pointer bg-white rounded-md ${
                activeCategory === index
                  ? "border-2 border-solid border-primary shadow-none"
                  : "border-0 shadow-[0_1px_4px_1px] shadow-[#CAC9C9]"
              }`}
            >
              <Image
                src={Category.src}
                className="mx-auto min-h-[200px] "
                width={150}
                alt="logo"
              />
              <h4 className="text-primary text-sm lg:text-lg font-normal md:mb-2 md:mt-3 m-0">
                {Category.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
