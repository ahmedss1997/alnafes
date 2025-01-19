"use client";

import { FaRegUserCircle } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import categories from "@/code/categories_db";

const itemsNav = [
  {
    title: "New arrivals",
    path: "/new_arrivals",
  },
  {
    title: "Shop by brand",
    path: "/Shop",
  },
  {
    title: "Offer",
    path: "/Offer",
  },
  {
    title: "Branches",
    path: "/Branches",
  },
  {
    title: "Need Help?",
    path: "/Help",
  },
  {
    title: "Wholesale sales",
    path: "/whole_sale",
  },
];

const AppBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-bgBrimary lg:block hidden">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
        <div className="flex items-center">
          <LuMenu className="text-2xl text-primary mx-2 cursor-pointer" />
          {/* Dropdown  Menu */}
          <div
            className="relative border-r-2 border-solid border-primary px-3"
            ref={dropdownRef}
          >
            <button
              onClick={handleDropdownClick}
              className="flex items-center text-primary text-sm xl:text-base font-medium"
            >
              Categories
              <IoMdArrowDropdown
                className={`ml-1 transform transition-transform text-2xl  ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 h-56 z-50 overflow-auto bg-white text-graySubText shadow-lg rounded-md py-2 ${
                dropdownOpen ? "block" : "hidden"
              }`}
              style={{ scrollbarWidth: "thin", scrollbarColor: "#138AA8" }}
            >
              <li
                className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
              >
                <Link href={`/categories`} className="w-full block px-4 py-2">All</Link>
              </li>
              {categories.filter((category) => !category.parentId).map((item, index) => (
                <li
                  key={index}
                  className="hover:text-primary hover:bg-bgBrimary transition-all duration-500 ease-in-out cursor-pointer"
                >
                  <Link href={`/categories/${item.id}`} className="w-full block px-4 py-2">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* links Nav */}
          <ul className="flex">
            {itemsNav.map((item, index) => (
              <Link key={index} className="cursor-pointer" href={item.path}>
                <li className="py-2 px-2 xl:px-4 text-sm xl:text-base text-primary font-medium">
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {/* Icon Nav */}
        <div className="icon-nav flex items-center justify-end grow  text-primary">
          <div className="flex mx-2 cursor-pointer">
            {" "}
            <CiGlobe className=" text-2xl mx-1" />
            <span className="mx-1">Ar</span>
          </div>
          <Link className="flex mx-2 cursor-pointer" href="/profile">
            <FaRegUserCircle className="mx-1 text-2xl" />
            <span className="mx-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
