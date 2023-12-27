"use client";

import { Category } from "@/db/bookmarks";
import { getSearchParam } from "@/lib/params";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterBookmarks() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentType = getSearchParam(searchParams.get("type"));

  const tabs = [
    {
      name: "All",
      category: null,
      type: "",
    },
    {
      name: "Articles",
      category: Category.article,
      type: "article",
    },
    {
      name: "Resources",
      category: Category.resource,
      type: "resource",
    },
    {
      name: "Tools",
      category: Category.tool,
      type: "tool",
    },
    {
      name: "Videos",
      category: Category.video,
      type: "video",
    },
  ];

  const handleTypeChange = (type: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (type === "") {
      nextParams.delete("type");
      router.replace(`${pathname}`);
      return;
    }
    nextParams.set("type", type);
    router.replace(`${pathname}?${nextParams.toString()}`);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500"
          defaultValue={""}
          onChange={(e) => handleTypeChange(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.type}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => handleTypeChange(tab.type)}
              className={clsx(
                currentType == tab.type
                  ? "border border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-800 dark:bg-gray-500/10 dark:text-gray-200"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                "cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium",
              )}
            >
              {tab.name}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
