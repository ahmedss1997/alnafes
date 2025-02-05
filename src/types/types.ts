export interface IAPIResult<t> {
  pageNumber: number
  pageSize: number
  count: number
  success: boolean
  code: number
  message: string
  error: number
  result: t
}

export interface ICurrentUser {
  firstName: string
  lastName: string
  email: string
  image: string
  phoneNumber: string
  isVerified: boolean
  role: number
  address: string
  token: string
  id: number
  createdDate: string
  isActive: boolean
}

// #region Auth
export interface IRegisterRequest {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
}

export interface ILoginRequest {
  email: string
  password: string
}
// #endregin

//#region Recipe

export interface IRecipe {
  title: string
  ar_Title: string
  description: string
  ar_Description: string
  image: string
  recipeIngredients: IRecipeIngredient[]
  id: number
  createdDate: string
  isActive: boolean
}

export interface IRecipeIngredient {
  title: string
  ar_Title: string
  ingredients: string[]
  ar_Ingredients: string[]
  recipeId: number
  id: number
  createdDate: string
  isActive: boolean
}

export interface IRecipeFilterRequest {
  MaxPageSize?: number,
  PageSize?: number,
  PageNumber?: number,
  Id?: number,
  Search?: string,
  Sort?: string
}
// #endregion

//#region Category

export interface ICategory {
  name: string
  ar_Name: string
  image: string
  section: number
  id: number
  createdDate: string
  isActive: boolean
}

export interface ICategoryFilterRequest {
  Name?: string,
  Section?: number,
  MaxPageSize?: number,
  PageSize?: number,
  PageNumber?: number,
  Id?: number,
  Search?: string,
  Sort?: string
}
export interface ISubCategoryFilterRequest {
  CategoryName?: string,
  Section?: number,
  CategoryId?: number,
  MaxPageSize?: number,
  PageSize?: number,
  PageNumber?: number,
  Id?: number,
  Search?: string,
  Sort?: string
}
// #endregion


//#region Products

export interface IProduct {
  orderId: number
  itemId: number
  item: IProductItem
  quantity: number
  id: number
  createdDate: string
  isActive: boolean
}

export interface IProductItem {
  name: string
  ar_Name: string
  description: string
  ar_Description: string
  image: string
  price: number
  discount: number
  quantity: number
  weight: number
  isFavorite: any
  averageRate: any
  timeTaken: string
  subCategoryId: number
  subCategory: any
  ingredients: any[]
  id: number
  createdDate: string
  isActive: boolean
}

export interface iProductFilterRequest {
  Name?: string,
  Section?: number,
  MaxPageSize?: number,
  PageSize?: number,
  PageNumber?: number,
  Id?: number,
  Search?: string,
  Sort?: string
}

// #endregion

