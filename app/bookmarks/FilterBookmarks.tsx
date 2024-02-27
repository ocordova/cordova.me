"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category } from "@/db/bookmarks";
import { getSearchParam } from "@/lib/params";
import { ChevronDown } from "lucide-react";
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="ml-auto">
            Filter <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {tabs.map((tab) => {
            return (
              <DropdownMenuCheckboxItem
                key={tab.name}
                checked={
                  currentType == tab.type ||
                  (!currentType && tab.type === "all")
                }
                onCheckedChange={() => handleTypeChange(tab.type)}
              >
                {tab.name}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
