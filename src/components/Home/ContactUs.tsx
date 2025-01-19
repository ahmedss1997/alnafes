

import { FaHome } from "react-icons/fa";
import frame from "../../../public/assets/Bread.png"

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center relative p-8"
      style={{
        backgroundImage: `url(${frame.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="overlay absolute opacity-[0.3] z-10 top-0 left-0 right-0 bottom-0 w-full h-full bg-[#39545D] "></div>
      <div className="lg:flex items-center justify-center block min-h-[500px] gap-24 relative">
        <div className="bg-bgGrayText50 z-50 rounded-md p-6 min-h-[250px] w-[370px] lg:mb-0 mb-8">
          <div className="mb-2 border-b-2 border-borderLine pb-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl text-primary"><FaHome /></span>
              <span className="font-semibold text-2xl text-primary">Contact us</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg text-primary"><FaHome /></span>
              <span className="font-medium text-xl text-bgGrayText700">+962 7788 2012</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg text-primary"><FaHome /></span>
              <span className="font-medium text-xl text-bgGrayText700">ibnalnafisbakery@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <span className="ltr:border-r-2 rtl:border-l-2 bodrer-borderLine text-2xl text-primary ltr:pr-5 rtl:pl-5"><FaHome /></span>
            <span className="text-2xl text-primary"><FaHome /></span>
          </div>
        </div>
        <div className="bg-bgGrayText50 z-50 rounded-md p-6 min-h-[210px] lg:w-[345px] w-[370px]">
          <div className="flex items-center gap-2">
            <span className="text-3xl text-primary"><FaHome /></span>
            <span className="text-2xl font-semibold text-primary">Our address</span>
          </div>
          <p className="text-lg font-medium text-bgGrayText700">Amman - Jabal Al Nasr, Sahari Mall Roundabout</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;