"use client";

import { iProduct, iUserAddress } from "@/code/dataModels";
import { useState, useEffect } from "react";
import { BiPlus, BiSolidPencil, BiSolidTrash } from "react-icons/bi";

export default function ProductPreview({ product }: { product: iProduct }) {
  const [userAddresses, setUserAddresses] = useState<iUserAddress[]>([]);
  useEffect(() => {
  }, []);

  return (
    <div className="container px-0">
      {/* loop over addresses and display them in cards */}
      {product.reviews.length ? (
        product.reviews.map((review, i) => (
          <div key={i} className="border-b pb-3 mb-3">
            <div className="flex flex-wrap justify-center lg:justify-between align-center">
              <h3 className="font-medium text-blackText text-xl mb-3">
                {review.username}
              </h3>
              <span className="text-captionColor text-sm">
                {review.dateCreated}
              </span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <div className="text-sm text-captionColor text-center">
          No reviews found
        </div>
      )}
      <div>
        <h3 className="font-medium text-blackText text-xl">Leave your review</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-3">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="w-full mb-3 rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 shadow-sm"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-wrap mb-3 items-center border border-gray-300 rounded-md py-1 px-3 text-gray-900 sm:text-sm">
            <span className="text-captionColor text-sm">Rate</span>
          </div>
        </div>
        <textarea
            id="about"
            name="about"
            rows={3}
            className="block w-full rounded-md border-0 mt-3 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            defaultValue={""}
            placeholder="Comment"
          />
      </div>
      <div className="flex justify-center lg:justify-end mt-3">
        <button
          type="submit"
          className="text-white bg-primary rounded-md px-3 py-2 mt-3 min-w-[260px] flex items-center justify-center border-2 border-solid border-primary font-medium hover:bg-transparent hover:text-primary transition-all duration-500 ease-in-out"
        >
          <span>Done</span>
        </button>
      </div>
    </div>
  );
}
