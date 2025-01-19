
import Image from "next/image";
import Bread from "../../../public/assets/Bread.png"
import Cake from "../../../public/assets/Cake.png"
import Croissant from "../../../public/assets/Croissant.png"
import Cupcake from "../../../public/assets/Cupcake.png"

const BakeryList = [
  {
    imgSrc: Bread,
    title: 'Bread'
  },
  {
    imgSrc: Cake,
    title: 'Cake'
  },
  {
    imgSrc: Croissant,
    title: 'Croissant'
  },
  {
    imgSrc: Cupcake,
    title: 'Cupcake'
  }
]

const Bakery = () => {
  return (
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 text-center">
      <h2 className="text-primary text-4xl mb-3">Bakery</h2>
      <div className="row-all w-full flex flex-wrap">
        {BakeryList.map((item, index) => (
          <div key={index} className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2">
            <div className="w-full h-full rounded-lg border-[0.3px] border-primary">
              <div className="img-bakery">
                <Image
                  src={item.imgSrc}
                  className="w-full rounded-tr-lg rounded-tl-lg"
                  alt=""
                />
              </div>
              <div className="caption-bakery py-4">
                <h3 className="text-2xl text-primary">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bakery;