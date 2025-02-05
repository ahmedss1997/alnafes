import { get } from "@/api/serverSide";
import { iProductFilterRequest } from "@/types/types";
import ProductClient from "./ProductClient";

// Server-side method for fetching filtered products
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

export default async function Page({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);

  const [productData, relatedProductsData] = await Promise.all([
    fetchSingleProduct(productId),
    fetchProductsFilter({ MaxPageSize: 20 }), // Example params for related products
  ]);

  return (
    <ProductClient initialProduct={productData} initialProductsList={relatedProductsData} />
  );
}