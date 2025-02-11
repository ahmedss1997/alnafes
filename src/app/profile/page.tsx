"use client";
import * as tabContent from "./tabsContent/";
import DynamicBiIcons from "@/components/dynamic_bi_Icons";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("general");
  const TabContent: { [key: string]: () => JSX.Element } = tabContent;
  const [ActiveContent, setActiveContent] = useState<
    (() => JSX.Element) | null
  >(null); // Initialize as null
  const tabs = [
    {
      id: "general",
      title: "My Profile",
      icon: "BiSolidPencil",
    },
    { id: "orders", title: "My Orders", icon: "BiSolidShoppingBag" },
    { id: "wishList", title: "Wish List", icon: "BiSolidHeart" },
  ];

  useEffect(() => {
    setActiveContent(() => TabContent[activeTab]); // Set initial ActiveContent
  }, [TabContent, activeTab]);

  return (
    <main>
      <div className="container mx-auto px-3 md:px-6 py-12">
        <div className="flex flex-wrap">
          <div className="lg:basis-1/4 basis-full max-h-[300px] bg-primary rounded-lg mb-3  p-5">
            {tabs.map((tab) => (
              <div
                onClick={() => setActiveTab(tab.id)}
                role="button"
                key={tab.id}
                className={`cursor-pointer hover:bg-bgBrimary hover:text-primary transition ease-in-out font-medium text-sm mb-4 p-3 rounded-lg flex items-center ${
                  activeTab === tab.id
                    ? "bg-bgBrimary text-primary"
                    : "text-white"
                }`}
              >
                <DynamicBiIcons iconName={tab.icon} className="text-lg" />
                <span className="px-3">{tab.title}</span>
              </div>
            ))}
            <Link href="./sign_in" className="cursor-pointer bg-pinkLightColor text-redColor font-medium text-sm p-3 rounded-lg flex items-center">
              <DynamicBiIcons iconName="BiLogOut" className="text-lg" />
              <span className="px-3">Log Out</span>
            </Link>
          </div>
          <div className="lg:basis-3/4 basis-full">
            <div className="ltr:lg:ml-6 rtl:lg:mr-6 mx-0">
              {ActiveContent && <ActiveContent />}{" "}
              {/* Render ActiveContent if it's not null */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
