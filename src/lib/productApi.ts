import { get } from "../api/serverSide";
import { iProductFilterRequest, IProductItem } from "../types/types";

export const fetchProductsFilter = async (params: iProductFilterRequest): Promise<IProductItem[]> => {
  try {
    const data = await get("api/Item/Filter", false, params);
    return data.result as IProductItem[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Server-side method for fetching a single product
export const fetchSingleProduct = async (id: number): Promise<IProductItem> => {
  try {
    const data = await get(`api/Item/Get?id=${id}`, false);
    return data.result as IProductItem;
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};

export const fetchProducts = async (): Promise<IProductItem[]> => {
  try {
    const data = await get("api/Item/GetAll", false);
    console.log("data product",data.result);
    return data.result as IProductItem[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
