
import { fetchProducts } from "../../lib/productApi";
import AllProductClient from "./AllProductClient";

export default async function Page() {

  const [productData,] = await Promise.all([
    fetchProducts(),
  ]);

  return (
    <AllProductClient initialProduct={productData} />
  );
}