"use client";

import { IProduct, IReviews } from "@/types/types";
// import Image from "next/image";
import avatar from "../../../../../public/assets/avatart.png";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAddReview, useReviewsFilter } from "@/hooks/useReviews";
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';


export default function ProductPreview({ product }: { product: IProduct }) {
  const [newReview, setNewReview] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);
  const addReview = useAddReview();
  const { currentUser } = useSelector((state: RootState) => state.auth);

  // Handle star selection
  const handleStarClick = (rating: number) => {
    setSelectedStars(rating);
  };

  const getReviews = useReviewsFilter();
  const [reviewsList, setReviewsList] = useState<IReviews[]>([]);
  useEffect(() => {
    return getReviews.mutate(
      { MaxPageSize: 4 },
      {
        onSuccess: (data) => {
          console.log("donee", data.result);
          setReviewsList(data.result);
        },
        onError: (error) => {
          console.error("Recipes failed:", error);
        },
      }
    );
  }, []);

  // Add a new review
  const handleAddReview = () => {
    if (!newReview.trim()) return;

    const newReviewData = {
      id: product.id,
      userId: currentUser?.id || 0,
      user: {
        firstName: currentUser?.firstName || "John",
        lastName: currentUser?.lastName || "Doe",
        image: currentUser?.image || avatar
      },
      itemId: product.itemId,
      rateNumber: selectedStars,
      comment: newReview
    };

    // setReviews([newReviewData, ...reviews]);


    addReview.mutate(newReviewData, {
      onSuccess: (data) => {
        console.log('Add Review successful!', data);
        setNewReview("");
        setSelectedStars(0);
      },
      onError: (error: any) => {
        console.error('Add Review failed:', error.response);
      },
    });
  };

  return (
    <div className="container px-0">
      {/* loop over addresses and display them in cards */}
      {product ? (
        <div className="border border-borderLineGray rounded-md overflow-hidden">
          <div className="bg-bgGrayText50 border-b border-borderLineGray p-5">
            <h3 className="font-medium text-blackText text-xl ">Reviews</h3>
          </div>
          <div className="p-8">
            {/* Write A Review */}
            <div className=" flex gap-6 p-5 border-b border-borderLineGray my-5">
              <div className="min-w-[100px] h-[100px]">
                <img
                  src={(currentUser?.image === null ? avatar.src : currentUser?.image) || avatar.src}
                  width={100}
                  height={100}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="w-full">
              <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      onClick={() => handleStarClick(star)}
                      className={`cursor-pointer ${
                        star <= selectedStars ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <textarea
                  id="review"
                  name="review"
                  rows={3}
                  className="block w-full rounded-md border-0 my-5 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Please let others know what you think about this product"
                />
                <button
                  onClick={handleAddReview}
                  type="submit"
                  className="text-white bg-primary opacity-40 rounded-md px-3 py-2 mt-3 min-w-[110px] flex items-center justify-center border-2 border-solid border-primary font-medium"
                >
                  <span>Send</span>
                </button>
              </div>
            </div>
            {/* Reviews Which are already written */}
            {reviewsList.map((review) => (
              <div
                key={review.id}
                className="flex gap-6 p-5 border-b border-borderLineGray my-5"
              >
                <div className="w-[110px] h-[110px]">
                  <img
                    src={review.item.image}
                    width={110}
                    height={110}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h3 className="font-medium text-bgGrayText500 text-base mb-3">
                    {review.user.firstName + " " + review.user.lastName}
                  </h3>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`${
                          star <= review.rateNumber ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="font-medium text-bgGrayText800 text-base my-3">
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-sm text-captionColor text-center">
          No reviews found
        </div>
      )}
      
    </div>
  );
}
