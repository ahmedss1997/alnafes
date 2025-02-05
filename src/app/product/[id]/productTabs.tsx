"use client";


import { IProduct } from "@/types/types";
import * as tabContent from "./product_TabsContent";
import { JSX, useEffect, useState } from "react";

export default function ProductTabs({product}: {product: IProduct | null}) {
  const [activeTab, setActiveTab] = useState("description");
  const TabContent: any = tabContent;
  const [ActiveContent, setActiveContent] = useState<(({product}: {product: IProduct}) => JSX.Element) | null>(null); // Initialize as null
  const tabs = [
    {
      id: "description",
      title: "Product Description",
    },
    { id: "specification", title: "Specification"},
    { id: "reviews", title: "Reviews"},
  ];

  useEffect(() => {
    setActiveContent(() => TabContent[activeTab]); // Set initial ActiveContent
  }, [TabContent, activeTab]);

  return (
    <div className="">
      <div className="flex flex-wrap mb-8 border-b">
        {tabs.map((tab) => (
          <div
            onClick={() => setActiveTab(tab.id)}
            role="button"
            key={tab.id}
            className={`cursor-pointer text-sm pb-3 mb-4 lg:mb-0 flex items-center ${
              activeTab === tab.id
                ? "text-primary border-b-2 border-primary font-bold"
                : "text-captionColor"
            }`}
          >
            <span className="px-3">{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="lg:basis-3/4 basis-full">
        <div className="">
          {ActiveContent && product && <ActiveContent product={product}/>}{" "}
          {/* Render ActiveContent if it's not null */}
        </div>
      </div>
    </div>
  );
}
