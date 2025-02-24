
import { fetchSingleProduct, fetchProducts } from "@/lib/productApi";
import ProductClient from "./ProductClient";

type Params = {
  id: string;
};


export default async function Page({ params }: { params: Promise<Params> }) {
  try {
    const productId = await params;

    const [productData, relatedProductsData] = await Promise.all([
      fetchSingleProduct(parseInt(productId.id)),
      fetchProducts(), // Example params for related products
    ]);

    return (
      <ProductClient initialProduct={productData} initialProductsList={relatedProductsData.slice(0, 20)} />
    );
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}