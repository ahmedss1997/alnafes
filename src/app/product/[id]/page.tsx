
import { fetchSingleProduct, fetchProducts } from "@/lib/productApi";
import ProductClient from "./ProductClient";

type Params = {
  id: string;
};


export default async function Page({ params }: { params: Params }) {
  // const productId = parseInt(params.id);
  const productId = Number(params.id);
  if (!params || !params.id) {
    return <p>Invalid Product</p>; 
  }

  if (isNaN(productId)) {
    return <p>Invalid Product ID</p>;
  }

  const [productData, relatedProductsData] = await Promise.all([
    fetchSingleProduct(productId),
    fetchProducts(), // Example params for related products
  ]);

  return (
    <ProductClient initialProduct={productData} initialProductsList={relatedProductsData.slice(0, 20)} />
  );
}