export interface iUser {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  createdAt: string;
  isDefault: boolean;
}

export interface iUserAddress {
  id: number;
  streetName: string;
  address: string;
  city: string;
  country: string;
  zipcode: string;
  phone: string;
  isDefault: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  persent: string;
  currency:string,
  rate: string;
  imagesUrl: {id: number, url: string}[];
  description: string;
  model: string;
  stock: number;
  categoryId: number;
  categoryName: string;
  rating: number;
  matrial: string;
  color: string;
  size: string;
  SKU: string;
  reviews: iReview[];
  tags: string[];
  warranty: string;
}

export interface iProductInCart extends IProduct {
  quantity: number;
}

export interface iReview {
  id: number;
  username: string;
  comment: string;
  dateCreated: string;
  rate: number;
}

export interface iCategory {
  id: number;
  name: string;
  parentId?: number;
  imgUrl: string;
}
