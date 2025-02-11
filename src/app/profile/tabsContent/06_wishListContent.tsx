"use client";

import { useFavouriteFilter, useToggleFavourite } from "@/hooks/useFavourite";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";
import { BiSolidTrash } from "react-icons/bi";
import { IAPIResult, IFavourite, IProductItem } from "@/types/types";
import { setFavData } from "@/store/slices/favouriteSlice";

export default function WishListContent() {
  const [productsList, setProductsList] = useState<IProductItem[]>([]);
  const {currentUser} = useSelector((state: any) => state.auth);
  const {favData} = useSelector((state: any) => state.fav);
  const dispatch = useDispatch();
  const FavouriteFilter = useFavouriteFilter();
  const toggleFavourite = useToggleFavourite();

  useEffect(() => {
    // get favourite list on load and when user is logged in
    if (currentUser)
    {
      FavouriteFilter.mutate({UserId: currentUser.id}, {
        onSuccess: async (data: IAPIResult<IFavourite[]>) => {
          if (data.code === 200) {
            const favProducts = data.result.filter((favProduct) => favProduct.isFavorite && favProduct.userId === currentUser.id);
            setProductsList(favProducts.map((favProduct) => favProduct.item));
            dispatch(setFavData(favProducts));
          }
        },
        onError: (error: unknown) => {
          console.error('Favourite failed:', error);
        },
      });
    }
  }, [currentUser]);
  
  const toggleFav = (id: number) => {
    if (!currentUser) return;
    {
      toggleFavourite.mutate({UserId: currentUser.id, ItemId: id}, {
        onSuccess: async (data: IAPIResult<string>) => {
          if (data.code === 200) {
            dispatch(setFavData(favData.filter((x: IFavourite) => x.item.id !== id)));
            setProductsList(productsList.filter((x: IProductItem) => x.id !== id));
          }
        },
        onError: (error: unknown) => {
          console.error('Favourite failed:', error);
        },
      });
    }
  };

  return (
    <div className="container px-0">
      <h2 className="text-2xl text-blackText font-bold mb-1">My Wish List</h2>
      {productsList && productsList.length ? (
        productsList.map((product, index) => (
          <ProductCard key={index + 1} product={product} withCart>
            <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
              <button className="text-redColor mx-1 flex items-center" onClick={() => toggleFav(product.id)}>
                {" "}
                <BiSolidTrash className="mx-1 text-lg" /> <span> Remove </span>{" "}
              </button>
            </div>
          </ProductCard>
        ))
      ) : (
        <div className="text-sm text-captionColor text-center">
          No products found
        </div>
      )}
    </div>
  );
}
