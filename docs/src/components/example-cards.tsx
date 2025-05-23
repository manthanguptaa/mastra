"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";

export function CardItem({
  links,
}: {
  links: Array<{ title: string; href: string }>;
}) {
    return (
      <Card className="dark:border-[#404040] w-full lg:w-fit px-0 rounded-none border-none shadow-none transition-colors">
        <CardContent className="space-y-2 w-full px-0 gap-3 grid md:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <Link
              key={`${item.title}-${item.href}`}
              href={item.href}
              className="flex bg-[#1a1a1a]/50 mb-0 border-[0.5px]  rounded-md dark:border-[#343434] items-center group justify-between p-2 px-4 text-sm"
            >
              {item.title}
            </Link>
          ))}
        </CardContent>
      </Card>
    );
}

export function CardItems({
  titles,
  items,
}: {
  titles: string[];
  items: Record<string, Array<{ title: string; href: string }>>;
}) {
  const [activeTab, setActiveTab] = useState(titles[0]);
  return (
    <div>
      <CardTitle
        titles={titles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="mt-6">
        <CardItem links={items[activeTab] || []} />
      </div>
    </div>
  );
}


export function CardTitle({
  titles,
  activeTab,
  setActiveTab,
}: {
  titles: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  return (
    <div className="flex flex-wrap mt-6 items-center gap-2">
      {titles?.map((title) => (
        <button
          onClick={() => setActiveTab(title)}
          key={title}
          className={cn(
            "capitalize  rounded-full text-sm bg-gray-100 dark:bg-[#1a1a1a] px-3 py-1",
            activeTab === title &&
              "dark:bg-gray-100 text-white bg-slate-800 dark:text-black",
          )}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
