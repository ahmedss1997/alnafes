
import { fetchSingleProduct, fetchProductsFilter } from "@/lib/productApi";
import ProductClient from "./ProductClient";



export default async function Page({ params }: { params: { id: string } }) {
  // const productId = parseInt(params.id);
  if (!params || !params.id) {
    return <p>Invalid Product</p>; 
  }

  const productId = Number(params.id);

  if (isNaN(productId)) {
    return <p>Invalid Product ID</p>;
  }

  const [productData, relatedProductsData] = await Promise.all([
    fetchSingleProduct(productId),
    fetchProductsFilter({ MaxPageSize: 20 }), // Example params for related products
  ]);

  return (
    <ProductClient initialProduct={productData} initialProductsList={relatedProductsData} />
  );
}