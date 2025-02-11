import { get } from "@/api/serverSide";
import { ICategory, ICategoryFilterRequest } from "@/types/types";

export const fetchCategoriesFilter = async (params: ICategoryFilterRequest) => {
  try {
    const data = await get("api/Category/Filter", false, params);
    return data.result as ICategory[];
  } catch (error) {
    console.error("Error fetching Categories:", error);
    throw error;
  }
};
