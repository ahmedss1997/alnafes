
import { fetchSingleProduct, fetchProducts } from "../../../lib/productApi";
import ProductClient from "./ProductClient";
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Product ${(await params).id}`,
  };
}


export default async function Page({ params }: PageProps) {
  // const productId = parseInt(params.id);
  const productId = Number((await params).id);
  if (!params || !(await params).id) {
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