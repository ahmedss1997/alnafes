"use client";

import { iProduct } from "@/code/dataModels";
import * as tabContent from "./products_TabsContent";
import { useEffect, useState } from "react";

export default function ProductsTabs({product}: {product: iProduct}) {
  const [activeTab, setActiveTab] = useState("related");
  const TabContent: any = tabContent;
  const [ActiveContent, setActiveContent] = useState<(() => JSX.Element) | null>(null); // Initialize as null
  const tabs = [
    {
      id: "related",
      title: "Related products",
    },
    { id: "sameBrand", title: "Same brand"},
    { id: "sameCategory", title: "Same category"},
    { id: "peopleAlsoBought", title: "People also bought"},
  ];

  useEffect(() => {
    setActiveContent(() => TabContent[activeTab]); // Set initial ActiveContent
  }, [TabContent, activeTab]);

  return (
    <div className="">
      <div className="flex flex-wrap mb-3 border-b">
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
          {ActiveContent && <ActiveContent/>}{" "}
          {/* Render ActiveContent if it's not null */}
        </div>
      </div>
    </div>
  );
}
