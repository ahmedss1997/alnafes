"use client";

import imgLogo from "../../public/assets/logo.jpg";
import avatar from "../../public/assets/avatart.png";
import {
  IoChevronDown,
  IoChevronDownOutline,
  IoChevronUp,
  IoClose,
} from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect } from "react";
import i18next from '../i18n';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { setAuthData } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import dynamic from "next/dynamic";
import { setLanguage } from "@/store/slices/languageSlice";

const CartMenu = dynamic(() => import("./cartMenu/cartMenu"), { ssr: false });

const Navbar = () => {
  const dispatch = useDispatch();
  const [cartMenuIsOpen, setCartMenuIsOpen] = useState(false);
  // const [language, setLanguage] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfileMenue, setShowProfileMenue] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const { currentUser } = useSelector((state: RootState) => state.auth);
  const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
  const language = useSelector((state: RootState) => state.language.language);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  const toggleDropdownProfile = () => {
    setShowProfileMenue(!showProfileMenue);
  };

  useEffect(() => {
    const user = localStorage?.getItem('currentUser');
    if (user) {
      dispatch(setAuthData(JSON.parse(user)));
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLanguage = (lang: string) => {
    setSidebarOpen(false);
    dispatch(setLanguage(lang));
    i18next.changeLanguage(lang);
    setShowDropdown(false);
  };

  const itemsNav = [
    {
      title: "Restaurant",
    },
    {
      title: "Bakery",
    },
    {
      title: "Pastery",
    },
  ];

  return (
    <div className=" bg-bgGrayText50 sticky top-0 w-full z-[1000]">
      <div className="border-b-[1px] border-bgGrayText400">
        <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8 flex gap-3 items-center">
          <div className="flex items-center justify-between w-full">
            {/* show in phone */}
            <div className="col-item flex lg:hidden items-center gap-4 lg:max-w-[25%] lg:basis-1/4 max-w-full basis-full ">
              <div className="content">
                <div className="logo-footer flex items-center">
                  <LuMenu
                    className="text-2xl text-graySubText mx-2 block lg:hidden cursor-pointer"
                    onClick={toggleSidebar}
                  />
                  <img
                    src={imgLogo.src}
                    className=""
                    width={45}
                    height={45}
                    alt="logo"
                  />
                  <h4 className="text-primary font-bold mx-2">
                    Ibn Al-Nafis
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center ltr:border-r-2 rtl:border-l-2 border-borderLine">
                <MdPhone className="text-bgGrayText800 text-2xl lg:block hidden cursor-pointer" />
                <p className="text-bgGrayText800 text-sm font-medium mx-5 lg:block hidden">
                  (603) 555-0123
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-bgGrayText800 text-2xl lg:block hidden cursor-pointer" />
                <p className="text-bgGrayText800 text-sm font-medium mx-2 lg:block hidden">
                  ibnalnafis11@example.com
                </p>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="p-2 bg-gray-200 rounded-md focus:outline-none flex items-center space-x-2"
              >
                <span>{language === 'en' ? 'English' : 'العربية'}</span>
                <IoChevronDownOutline />
              </button>
              {showDropdown && (
                <ul className="absolute top-10 left-0 w-40 z-50 bg-white border rounded-md shadow-lg">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => changeLanguage('ar')}
                  >
                    العربية
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 flex gap-3 items-center ">
        {/* Logo Nav */}
        <div className="col-item hidden lg:flex items-center gap-4 lg:max-w-[25%] lg:basis-1/4 max-w-full basis-full ">
          <div className="content">
            <Link href={'/'} className="logo-footer flex items-center">
              <img
                src={imgLogo.src}
                className=""
                width={45}
                height={45}
                alt="logo"
              />
              <h4 className="text-primary font-bold mx-2">
                Ibn Al-Nafis
              </h4>
            </Link>
          </div>
        </div>
        {/* list Nav */}
        <div className="col-item hidden lg:flex items-center justify-center lg:max-w-[45%] lg:basis-[45%] max-w-full basis-full ">
          <ul className="flex">
            {itemsNav.map((item, index) => (
              <li key={index} className="flex items-center py-2 px-2 xl:px-4 text-sm xl:text-base text-primary font-medium">
                {item.title}
                <IoMdArrowDropdown
                  className={`ml-1 transform transition-transform text-2xl `}
                />
              </li>
            ))}
            <Link className="cursor-pointer" href={'#'}>
              <li className="py-2 px-2 xl:px-4 text-sm xl:text-base text-primary font-medium">
                Recipe
              </li>
            </Link>
          </ul>
        </div>
        {/* profile Nav */}
        <div className="icon-nav flex items-center lg:justify-end justify-between relative lg:gap-5 lg:max-w-[30%] lg:basis-[30%] max-w-full basis-full">
          {!currentUser ? (
            <Link href={'/sign_in'}>
              <button
                className="p-2 bg-primary w-[110px] text-onSurface rounded-md focus:outline-none flex items-center justify-center space-x-2"
              >
                <span>Login</span>
              </button>
            </Link>
          ): (
            <div
              className="lg:border-x-2 lg:border-borderGrayColor lg:px-6 px-3 flex items-center"
              onClick={toggleDropdownProfile}
            >
              <div className="w-14 h-14 rounded-full border border-bgGrayText300">
                <img 
                  className="w-full h-full"
                  src={currentUser?.image || avatar.src}
                  alt="avatar"
                />
              </div>
              <button
                className="p-2 rounded-md focus:outline-none flex items-center space-x-2"
              >
                <span> {currentUser?.firstName + ' ' + currentUser?.lastName } </span>
                <IoChevronDownOutline />
              </button>
              <div>
                {showProfileMenue && (
                  <ul className="absolute top-[50px] right-[215px] z-50 w-40 bg-white border rounded-md shadow-lg">
                    <Link className="cursor-pointer" href={'/profile'}>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        Profile
                      </li>
                    </Link>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      WishList
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
          {/* cart */}
          <div className="relative">
            <button className="flex items-center w-12 h-12 rounded-full  border border-bgGrayText300"
              onClick={() =>  setCartMenuIsOpen(!cartMenuIsOpen)}>
              <span className="bg-primary text-xs h-5 w-5 leading-5 text-center text-white rounded-full absolute top-[35px] right-0"> {cartProducts.length} </span>
              <AiOutlineShoppingCart className="lg:text-primary text-graySubText text-xl grow cursor-pointer" />
            </button>
            {
              cartMenuIsOpen && <div className="absolute ltr:right-[-24px] rtl:left-[-24px] ltr:lg:right-0 rtl:lg:left-0 top-[30px] z-10"><CartMenu/> </div>
            }
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 ltr:left-0 rtl:right-0 w-64 h-full overflow-auto bg-white shadow-md transform ${
          isSidebarOpen ? "ltr:translate-x-0 rtl:translate-x-0" : "ltr:-translate-x-full rtl:translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 ">
          <img src={imgLogo.src} width={50} height={50} alt="logo" />
          <IoClose
            className="text-2xl text-primary cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="">
          <Link href="/">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Home</span>
            </li>
          </Link>
          <li className="border-t cursor-pointer ">
            <button
              className="w-full flex justify-between items-center text-left px-4 py-2 transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium"
              onClick={toggleSubmenu}
            >
              Categories
              {isSubmenuOpen ? (
                <IoChevronUp className="text-xl" />
              ) : (
                <IoChevronDown className="text-xl" />
              )}
            </button>
            <ul
              className={`pl-4 overflow-auto transition-max-height duration-500 ease-in-out ${
                isSubmenuOpen ? "max-h-80" : "max-h-0"
              }`}
              style={{ scrollbarWidth: "thin", scrollbarColor: "#138AA8" }}
            >
              <li className="p-2 mr-3 my-3 rounded-md  border-2 border-solid border-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
                <Link href="/option1">Cooking</Link>
              </li>
              <li className="p-2 mr-3 my-3 rounded-md  border-2 border-solid border-primary cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
                <Link href="/option2">Travel</Link>
              </li>
            </ul>
          </li>
          <Link href="/new_arrivals">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">New arrivals</span>
            </li>
          </Link>
          <Link href="/Shop">
            <li className="py-2 border-t cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-primary font-medium">
              <span className="px-4">Shop by brand</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;

