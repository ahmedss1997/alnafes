import { fetchCategoriesFilter } from "../lib/categoryApi";
import HomeClient from "./HomeClient";
import { fetchProducts } from "../lib/productApi";

export default async function Home() {
  const [categoriesList] = await Promise.all([
    fetchCategoriesFilter({MaxPageSize: 4}),
  ]);
  const [productsList] = await Promise.all([
    fetchProducts(),
  ]);
  return (
    <HomeClient categoriesList={categoriesList} productsList={productsList} />
  );
}
