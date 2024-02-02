"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/db/bookmarks";
import { getSearchParam } from "@/lib/params";
import { cn } from "@/lib/utils";
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
      type: "all",
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
    if (type === "all") {
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
        <Select
          name="tabs"
          defaultValue={currentType || "all"}
          value={currentType || "all"}
          onValueChange={(value) => handleTypeChange(value)}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab.name} value={tab.type}>
                {tab.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => handleTypeChange(tab.type)}
              className={cn(
                currentType == tab.type || (!currentType && tab.type === "all")
                  ? "border"
                  : "",
                "cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium text-foreground",
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
