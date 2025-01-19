
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = async () => {
  return (
    <footer className="w-full border-t pt-20 bg-primary flex flex-col items-center justify-center gap-8 mt-auto">
      <ul className="flex items-center justify-between w-full sm:w-4/5 md:w-3/5 px-5 md:px-0">
        <li className="w-fit capitalize">
          <Link
            href={"/"}
            className="text-onSurface text-base font-semibold"
          >
            Home
          </Link>
        </li>
        <li className="w-fit capitalize">
          <Link
            href={"/"}
            className="text-onSurface text-base font-semibold"
          >
            Restaurant
          </Link>
        </li>
        <li className="w-fit capitalize">
          <Link
            href={"/"}
            className="text-onSurface text-base font-semibold"
          >
            Bakery
          </Link>
        </li>
        <li className="w-fit capitalize">
          <Link
            href={"/"}
            className="text-onSurface text-base font-semibold"
          >
            Pastry
          </Link>
        </li>
        <li className="w-fit capitalize">
          <Link
            href={"/"}
            className="text-onSurface text-base font-semibold"
          >
            Recipes
          </Link>
        </li>
      </ul>
      <div>
        <div className="socialLinks flex text-onSurface items-center gap-5 justify-center mb-8">
          <span className="ltr:border-r-2 rtl:border-l-2 bodrer-borderLine text-2x ltr:pr-5 rtl:pl-5">
            <FaInstagram size={28} className="cursor-pointer" />
          </span>
          <FaSquareFacebook size={28} className="cursor-pointer" />
        </div>
        <h2 className="text-lg md:text-xl lg:text-2xl text-onSurface font-semibold">
          Ibn Al-Nafis Bakery
        </h2>
      </div>
      <div className="copyright border-0 border-t border-gray-50 border-opacity-15 w-full mt-auto">
        <p className="text-gray-50 text-opacity-20 text-center text-xl py-1">Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
