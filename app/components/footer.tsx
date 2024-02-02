"use client"
import { Wrapper } from ".";
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from "./ui/tooltip";
import { Separator } from "./ui/separator";
import { GitHubLogoIcon, HeartIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Separator />
        <div className="text-muted-foreground text-sm">
          <div className="flex flex-col items-center pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
            <div className="mt-6 flex flex-row items-center justify-center text-sm sm:justify-start md:mt-0">
              Made with{" "}
              <span className="flex px-1">
                <HeartIcon className="absolute h-4 w-auto animate-ping" />
                <HeartIcon className="relative h-4 w-auto" />
              </span>{" "}
              in Mexico
            </div>
            <div className="mt-6 flex flex-row justify-center md:mt-0 md:justify-start">
            <TooltipProvider>
  <Tooltip> <TooltipTrigger>
                <a
                  href="https://github.com/ocordova/ocordova.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-base"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
                </TooltipTrigger>
                <TooltipContent>
      <p>View source code</p>
    </TooltipContent>
                </Tooltip>
</TooltipProvider>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
