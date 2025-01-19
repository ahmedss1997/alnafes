
import Image from "next/image";
import Recipe1 from "../../../public/assets/Recipe1.png"
import Recipe2 from "../../../public/assets/Recipe2.png"
import Recipe3 from "../../../public/assets/Recipe3.png"
import Recipe4 from "../../../public/assets/Recipe4.png"

const BakeryList = [
  {
    imgSrc: Recipe1,
    title: 'New York Slice',
    caption: 'Our large, hand-tossed thin crust pies are foldable, crispy on the edges..',
    isPadding: false,
  },
  {
    imgSrc: Recipe2,
    title: 'Tropical Paradise',
    caption: 'A light and airy coconut cake filled with mango curd and topped..',
    isPadding: true,
  },
  {
    imgSrc: Recipe3,
    title: 'Chocolate Indulgence',
    caption: 'A decadent layers of rich chocolate cake, velvety mousse, and dark..',
    isPadding: false,
  },
  {
    imgSrc: Recipe4,
    title: 'Tropical Paradise',
    caption: 'A light and airy coconut cake filled with mango curd and topped..',
    isPadding: true,
  }
]

const Recipes = () => {
  return (
    <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 text-center">
      <h2 className="text-primary text-4xl mt-5 mb-8">Recipes</h2>
      <div className="row-all w-full flex flex-wrap">
        {BakeryList.map((item, index) => (
          <div key={index} className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2">
            <div className={`w-full h-full ${item.isPadding ? 'lg:pt-10' : 'pt-0'}`}>
              <div className="img-bakery">
                <Image
                  src={item.imgSrc}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="caption-bakery p-4">
                <h3 className="text-2xl text-blackColor font-semibold">{item.title}</h3>
                <p className="text-base text-grayColor600 leading-6 font-medium">{item.caption}</p>
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