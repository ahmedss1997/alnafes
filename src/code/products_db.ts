import { iProduct } from "./dataModels";

const products: iProduct[] = [
  {
    "id": 1,
    "name": "Product 1",
    "price": 150.99,
    "discountPrice": 100.99,
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
    "description": "Crammed with crispy falafel balls, this satisfying sandwich is a vegetarian delight. We use a blend of chickpeas, herbs, and spices to create our falafel, then fry them to golden perfection. The falafel is nestled in a warm pita bread and layered with a vibrant shrak condiment, a tangy mix of chopped tomatoes, onions, and fresh herbs. A drizzle of tahini sauce adds a creamy counterpoint, making every bite a flavor explosion.",
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 20.99,
    "discountPrice": 15.99,
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 25.99,
    "discountPrice": 0,
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 4,
    "name": "Product 4",
    "price": 30.99,
    "discountPrice": 25.99,
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 5,
    "name": "Product 5",
    "price": 35.99,
    "discountPrice": 30.99,
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 6,
    "name": "Product 6",
    "price": 40.99,
    "discountPrice": 35.99,
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 7,
    "name": "Product 7",
    "price": 45.99,
    "discountPrice": 40.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/amber/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/salmon/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/coral/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/lavender/white"
      }
    ],
    "description": "Description of product 7",
    "model": "Model 7",
    "stock": 20,
    "categoryId": 2,
    "rating": 4.3,
    "matrial": "Material 7",
    "color": "Pink",
    "size": "S",
    "SKU": "SKU007",
    "reviews": [
      {
        "id": 1,
        "username": "user7",
        "comment": "Very good.",
        "dateCreated": "2023-07-01",
        "rate": 4
      }
    ],
    "tags": [
      "Tag13",
      "Tag14"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 8,
    "name": "Product 8",
    "price": 50.99,
    "discountPrice": 45.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/chartreuse/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/mint/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/khaki/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/periwinkle/white"
      }
    ],
    "description": "Description of product 8",
    "model": "Model 8",
    "stock": 7,
    "categoryId": 2,
    "rating": 4.1,
    "matrial": "Material 8",
    "color": "Brown",
    "size": "M",
    "SKU": "SKU008",
    "reviews": [
      {
        "id": 1,
        "username": "user8",
        "comment": "Satisfied with the purchase.",
        "dateCreated": "2023-08-01",
        "rate": 4
      }
    ],
    "tags": [
      "Tag15",
      "Tag16"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 9,
    "name": "Product 9",
    "price": 55.99,
    "discountPrice": 50.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/emerald/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/cerulean/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/sapphire/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/jade/white"
      }
    ],
    "description": "Description of product 9",
    "model": "Model 9",
    "stock": 9,
    "categoryId": 2,
    "rating": 3.8,
    "matrial": "Material 9",
    "color": "Black",
    "size": "L",
    "SKU": "SKU009",
    "reviews": [
      {
        "id": 1,
        "username": "user9",
        "comment": "Could be better.",
        "dateCreated": "2023-09-01",
        "rate": 3
      }
    ],
    "tags": [
      "Tag17",
      "Tag18"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 10,
    "name": "Product 10",
    "price": 60.99,
    "discountPrice": 55.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/cream/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/beige/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/tan/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/bronze/white"
      }
    ],
    "description": "Description of product 10",
    "model": "Model 10",
    "stock": 3,
    "categoryId": 13,
    "rating": 4.6,
    "matrial": "Material 10",
    "color": "White",
    "size": "XL",
    "SKU": "SKU010",
    "reviews": [
      {
        "id": 1,
        "username": "user10",
        "comment": "Excellent choice.",
        "dateCreated": "2023-10-01",
        "rate": 5
      }
    ],
    "tags": [
      "Tag19",
      "Tag20"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 11,
    "name": "Product 11",
    "price": 15.99,
    "discountPrice": 10.99,
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
    "description": "Description of product 11",
    "model": "Model 11",
    "stock": 10,
    "categoryId": 2,
    "rating": 4.5,
    "matrial": "Material 11",
    "color": "Red",
    "size": "M",
    "SKU": "SKU011",
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 12,
    "name": "Product 12",
    "price": 20.99,
    "discountPrice": 15.99,
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
    "description": "Description of product 12",
    "model": "Model 12",
    "stock": 5,
    "categoryId": 2,
    "rating": 4,
    "matrial": "Material 12",
    "color": "Blue",
    "size": "L",
    "SKU": "SKU012",
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 13,
    "name": "Product 13",
    "price": 25.99,
    "discountPrice": 0,
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
    "description": "Description of product 13",
    "model": "Model 13",
    "stock": 0,
    "categoryId": 2,
    "rating": 4.8,
    "matrial": "Material 13",
    "color": "Green",
    "size": "S",
    "SKU": "SKU013",
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 14,
    "name": "Product 14",
    "price": 30.99,
    "discountPrice": 25.99,
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
    "description": "Description of product 14",
    "model": "Model 14",
    "stock": 8,
    "categoryId": 3,
    "rating": 3.5,
    "matrial": "Material 14",
    "color": "Yellow",
    "size": "XL",
    "SKU": "SKU014",
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 15,
    "name": "Product 15",
    "price": 35.99,
    "discountPrice": 30.99,
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
    "description": "Description of product 15",
    "model": "Model 15",
    "stock": 0,
    "categoryId": 2,
    "rating": 4.2,
    "matrial": "Material 15",
    "color": "Purple",
    "size": "XXL",
    "SKU": "SKU015",
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 16,
    "name": "Product 16",
    "price": 40.99,
    "discountPrice": 35.99,
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
    "description": "Description of product 16",
    "model": "Model 16",
    "stock": 12,
    "categoryId": 2,
    "rating": 4.7,
    "matrial": "Material 16",
    "color": "Orange",
    "size": "XXXL",
    "SKU": "SKU016",
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
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 17,
    "name": "Product 17",
    "price": 45.99,
    "discountPrice": 40.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/amber/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/salmon/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/coral/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/lavender/white"
      }
    ],
    "description": "Description of product 17",
    "model": "Model 17",
    "stock": 20,
    "categoryId": 2,
    "rating": 4.3,
    "matrial": "Material 17",
    "color": "Pink",
    "size": "S",
    "SKU": "SKU017",
    "reviews": [
      {
        "id": 1,
        "username": "user7",
        "comment": "Very good.",
        "dateCreated": "2023-07-01",
        "rate": 4
      }
    ],
    "tags": [
      "Tag13",
      "Tag14"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 18,
    "name": "Product 18",
    "price": 50.99,
    "discountPrice": 45.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/chartreuse/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/mint/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/khaki/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/periwinkle/white"
      }
    ],
    "description": "Description of product 18",
    "model": "Model 18",
    "stock": 7,
    "categoryId": 2,
    "rating": 4.1,
    "matrial": "Material 18",
    "color": "Brown",
    "size": "M",
    "SKU": "SKU018",
    "reviews": [
      {
        "id": 1,
        "username": "user8",
        "comment": "Satisfied with the purchase.",
        "dateCreated": "2023-08-01",
        "rate": 4
      }
    ],
    "tags": [
      "Tag15",
      "Tag16"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 19,
    "name": "Product 19",
    "price": 55.99,
    "discountPrice": 50.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/emerald/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/cerulean/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/sapphire/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/jade/white"
      }
    ],
    "description": "Description of product 19",
    "model": "Model 19",
    "stock": 9,
    "categoryId": 13,
    "rating": 3.8,
    "matrial": "Material 19",
    "color": "Black",
    "size": "L",
    "SKU": "SKU019",
    "reviews": [
      {
        "id": 1,
        "username": "user9",
        "comment": "Could be better.",
        "dateCreated": "2023-09-01",
        "rate": 3
      }
    ],
    "tags": [
      "Tag17",
      "Tag18"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 20,
    "name": "Product 20",
    "price": 60.99,
    "discountPrice": 55.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/cream/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/beige/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/tan/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/bronze/white"
      }
    ],
    "description": "Description of product 20",
    "model": "Model 20",
    "stock": 3,
    "categoryId": 13,
    "rating": 4.6,
    "matrial": "Material 20",
    "color": "White",
    "size": "XL",
    "SKU": "SKU020",
    "reviews": [
      {
        "id": 1,
        "username": "user10",
        "comment": "Excellent choice.",
        "dateCreated": "2023-10-01",
        "rate": 5
      }
    ],
    "tags": [
      "Tag19",
      "Tag20"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 21,
    "name": "Product 21",
    "price": 65.99,
    "discountPrice": 60.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/aliceblue/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/antiquewhite/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/aqua/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/aquamarine/white"
      }
    ],
    "description": "Description of product 21",
    "model": "Model 21",
    "stock": 4,
    "categoryId": 13,
    "rating": 4.7,
    "matrial": "Material 21",
    "color": "Blue",
    "size": "XXL",
    "SKU": "SKU021",
    "reviews": [
      {
        "id": 1,
        "username": "user11",
        "comment": "Worth the price.",
        "dateCreated": "2023-11-01",
        "rate": 5
      }
    ],
    "tags": [
      "Tag21",
      "Tag22"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  },
  {
    "id": 22,
    "name": "Product 22",
    "price": 70.99,
    "discountPrice": 65.99,
    "imagesUrl": [
      {
        "id": 1,
        "url": "https://placehold.co/100/azure/white"
      },
      {
        "id": 2,
        "url": "https://placehold.co/100/beige/white"
      },
      {
        "id": 3,
        "url": "https://placehold.co/100/blue/white"
      },
      {
        "id": 4,
        "url": "https://placehold.co/100/blueviolet/white"
      }
    ],
    "description": "Description of product 22",
    "model": "Model 22",
    "stock": 2,
    "categoryId": 13,
    "rating": 4.9,
    "matrial": "Material 22",
    "color": "Green",
    "size": "L",
    "SKU": "SKU022",
    "reviews": [
      {
        "id": 1,
        "username": "user12",
        "comment": "Fantastic!",
        "dateCreated": "2023-12-01",
        "rate": 5
      }
    ],
    "tags": [
      "Tag23",
      "Tag24"
    ],
    "warranty": "1 Year",
    "currency": "SAR",
    persent: "",
    categoryName: "Falafel",
    rate: "(88)"
  }
]

  export default products