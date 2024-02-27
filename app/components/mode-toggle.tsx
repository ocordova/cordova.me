"use client";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  console.log(theme);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-9 px-0">
            <Sun
              size={18}
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <MoonStar
              size={18}
              className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuCheckboxItem
            onClick={() => setTheme("light")}
            checked={theme === "light"}
          >
            Light
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={() => setTheme("dark")}
            checked={theme === "dark"}
          >
            Dark
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onClick={() => setTheme("system")}
            checked={theme === "system"}
          >
            System
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
