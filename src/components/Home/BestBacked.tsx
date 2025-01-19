
import Image from "next/image";
import Baked1 from "../../../public/assets/Backed1.png"
import Baked2 from "../../../public/assets/Backed2.png"

const BestBaked = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <h2 className="text-onSurface text-4xl p-3">Our Best Backed </h2>
        <div className="row-all w-full flex flex-wrap">
          <div className="col-item p-3 lg:max-w-[50%] lg:basis-1/2 max-w-[100%] basis-full ">
            <Image
              className="w-full h-full"
              src={Baked1}
              alt=""
            />
          </div>
          <div className="col-item p-3 lg:max-w-[50%] lg:basis-1/2 max-w-[100%] basis-full">
            <div className="w-full h-full flex items-center">
              <div className="w-full h-full">
                <h3 className="text-lg text-bgGrayText50 font-semibold">Edible Cookies:</h3>
                <p className="text-lg text-bgGrayText100 leading-7 my-3 font-medium">
                  Small, sweet baked treats typically made with flour, sugar, butter, and eggs. Often include additional ingredients like chocolate chips, nuts, raisins, or oats. Can be enjoyed as a snack or dessert.
                </p>
                <Image
                  className="w-full lg:min-h-[565px] "
                  src={Baked2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestBaked;