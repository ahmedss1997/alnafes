import { get } from "@/api/serverSide";
import { iProductFilterRequest } from "@/types/types";

export const fetchProductsFilter = async (params: iProductFilterRequest) => {
  try {
    const data = await get("api/ItemOrder/Filter", false, params);
    return data.result;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Server-side method for fetching a single product
export const fetchSingleProduct = async (id: number) => {
  try {
    const data = await get("api/ItemOrder/Filter", false, { Id: id });
    return data.result ? data.result[0] : null;
  } catch (error) {
    console.error("Error fetching single product:", error);
    throw error;
  }
};
