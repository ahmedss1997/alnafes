
import Image from "next/image";
import About1 from "../../../public/assets/RectangleAbout1.png"
import About2 from "../../../public/assets/RectangleAbout2.png"
import About3 from "../../../public/assets/RectangleAbout3.png"

const About = () => {
  return (
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <div className="row-all w-full flex flex-wrap">
        <div className="col-item p-3 lg:max-w-[40%] lg:basis-2/5 max-w-[100%] basis-full">
          <div className="w-full h-full flex items-center">
            <div className="max-w-[500px] max-h-[425px] p-3">
              <h3 className="text-5xl text-primary">About us</h3>
              <p className="text-lg text-graySubText leading-7 my-3">
                Welcome to Ibn Al-Nafis! We are a family-owned bakery, baking delicious treats with love for generations. We use fresh, local ingredients to create mouthwatering pastries, breakfasts, and desserts. Come join us for a taste of tradition and share the joy of baking!
              </p>
              <p className="text-lg text-graySubText leading-7 mt-5">
                At Ibn Al-Nafis, the aroma of freshly baked goodness welcomes you like a hug. We are a family-owned bakery, passing down delicious recipes for generations. We use only the finest ingredients to create mouthwatering pastries, breakfasts, and desserts. Come savor a taste of tradition and share the joy of baking with us!
              </p>
            </div>
          </div>
        </div>
        <div className="col-item p-3 lg:max-w-[60%] lg:basis-3/5 max-w-[100%] basis-full ">
          <div className="row-all w-full flex flex-wrap">
            <div className="col-item p-3 lg:max-w-[40%] lg:basis-2/5 lg:block max-w-[100%] basis-full flex gap-5 ">
              <Image
                className="min-h-[210px] w-full lg:mb-6"
                src={About1}
                alt=""
              />
              <Image
                className="max-h-[315px] h-[315px] w-full"
                src={About2}
                alt=""
              />
            </div>
            <div className="col-item p-3 lg:max-w-[60%] lg:basis-3/5 max-w-[100%] basis-full ">
              <Image
                className="max-h-[550px] lg:h-[550px] h-[350px] w-full"
                src={About3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;