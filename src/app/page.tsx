// import Image from "next/image";

import Header from "@/components/Header";
import About from "@/components/Home/About";
import AskUs from "@/components/Home/AskUs";
import Bakery from "@/components/Home/Bakery";
import BestBaked from "@/components/Home/BestBacked";
import ContactUs from "@/components/Home/ContactUs";
import Recipes from "@/components/Home/Recipe";

import { iProduct } from "@/code/dataModels";
// // import Categories from "@/components/categories";
import ProductCardCol from "../components/Home/productCardCol";

const products: iProduct[] = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 150.99,
    "discountPrice": 100.99,
    "persent": "30% OFF",
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/red/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/blue/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/green/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/yellow/white"
      }
    ],
    "description": "iPhone 14 128GB Blue 5G With - International",
    "model": "Model 1",
    "stock": 10,
    "categoryId": 2,
    "rating": 4.5,
    "matrial": "Material 1",
    "color": "Red",
    "size": "M",
    "SKU": "SKU001",
    "reviews": [
      {
        "id": 1,
        "username": "user1",
        "comment": "Great product!",
        "dateCreated": "2023-01-01",
        "rate": 5
      },
      {
        "id": 2,
        "username": "user2",
        "comment": "Great product!",
        "dateCreated": "2023-01-01",
        "rate": 5
      }
    ],
    "tags": [
      "Tag1",
      "Tag2"
    ],
    "warranty": "1 Year",
    "currency": "JOD",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 20.99,
    "discountPrice": 15.99,
    "persent": "30% OFF",
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/orange/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/purple/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/pink/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/brown/white"
      }
    ],
    "description": "Description of product 2",
    "model": "Model 2",
    "stock": 5,
    "categoryId": 2,
    "rating": 4,
    "matrial": "Material 2",
    "color": "Blue",
    "size": "L",
    "SKU": "SKU002",
    "reviews": [
      {
        "id": 1,
        "username": "user2",
        "comment": "Good value for money.",
        "dateCreated": "2023-02-01",
        "rate": 4
      }
    ],
    "tags": [
      "Tag3",
      "Tag4"
    ],
    "warranty": "1 Year",
    "currency": "JOD",
    categoryName: "Liver",
    rate: "(88)"
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 25.99,
    "discountPrice": 0,
    "persent": "30% OFF",
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/gray/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/black/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/teal/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/maroon/white"
      }
    ],
    "description": "Description of product 3",
    "model": "Model 3",
    "stock": 0,
    "categoryId": 2,
    "rating": 4.8,
    "matrial": "Material 3",
    "color": "Green",
    "size": "S",
    "SKU": "SKU003",
    "reviews": [
      {
        "id": 1,
        "username": "user3",
        "comment": "Highly recommend.",
        "dateCreated": "2023-03-01",
        "rate": 5
      }
    ],
    "tags": [
      "Tag5",
      "Tag6"
    ],
    "warranty": "1 Year",
    "currency": "JOD",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 30.99,
    "discountPrice": 25.99,
    "persent": "30% OFF",
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/cyan/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/magenta/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/navy/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/gold/white"
      }
    ],
    "description": "Description of product 4",
    "model": "Model 4",
    "stock": 8,
    "categoryId": 3,
    "rating": 3.5,
    "matrial": "Material 4",
    "color": "Yellow",
    "size": "XL",
    "SKU": "SKU004",
    "reviews": [
      {
        "id": 1,
        "username": "user4",
        "comment": "Decent quality.",
        "dateCreated": "2023-04-01",
        "rate": 3
      }
    ],
    "tags": [
      "Tag7",
      "Tag8"
    ],
    "warranty": "1 Year",
    "currency": "JOD",
    categoryName: "Liver",
    rate: "(88)"
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 35.99,
    "discountPrice": 30.99,
    "persent": "30% OFF",
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/silver/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/lime/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/olive/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/fuchsia/white"
      }
    ],
    "description": "Description of product 5",
    "model": "Model 5",
    "stock": 0,
    "categoryId": 2,
    "rating": 4.2,
    "matrial": "Material 5",
    "color": "Purple",
    "size": "XXL",
    "SKU": "SKU005",
    "reviews": [
      {
        "id": 1,
        "username": "user5",
        "comment": "Good product.",
        "dateCreated": "2023-05-01",
        "rate": 4
      }
    ],
    "tags": [
      "Tag9",
      "Tag10"
    ],
    "warranty": "1 Year",
    "currency": "JOD",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 40.99,
    "discountPrice": 35.99,
    "persent": "30% OFF",
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/peach/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/indigo/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/turquoise/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/violet/white"
      }
    ],
    "description": "Description of product 6",
    "model": "Model 6",
    "stock": 12,
    "categoryId": 2,
    "rating": 4.7,
    "matrial": "Material 6",
    "color": "Orange",
    "size": "XXXL",
    "SKU": "SKU006",
    "reviews": [
      {
        "id": 1,
        "username": "user6",
        "comment": "Excellent product.",
        "dateCreated": "2023-06-01",
        "rate": 5
      }
    ],
    "tags": [
      "Tag11",
      "Tag12"
    ],
    "warranty": "1 Year",
    "currency": "JOD",
    categoryName: "Liver",
    rate: "(88)"
  },
]

export default function Home() {
  return (
    <div className="">
      <Header />
      <About />
      <Bakery />
      <BestBaked />
      {/* <Categories /> */}
      <div className="product-home container-fluid mx-auto px-4 py-5 sm:px-6 lg:px-8 flex items-center">
        <div className="row-all w-full flex flex-wrap">
          <div className="relative w-full flex items-center justify-between mb-5 px-3">
            <span className="font-medium lg:text-3xl text-xl text-blackText">Sandwich on the go</span>
          </div>
          {products.map((product) => (
            <div
              key={product.id}
              className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 max-w-[50%] basis-1/2 "
            >
              <ProductCardCol product={product} key={product.id} />
            </div>
          ))}
        </div>
      </div>
      <Recipes />
      <ContactUs />
      <AskUs />
    </div>
  );
}
