"use client";
import { Wrapper } from ".";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Separator />
        <div className="text-muted-foreground text-sm">
          <div className="flex flex-col items-center pt-4 pb-12 md:flex-row md:justify-between md:pt-2">
            <div className="mt-6 flex flex-row items-center justify-center text-sm sm:justify-start md:mt-0">
              Made with{" "}
              <span className="flex px-1">
                <Heart size={16} className="absolute animate-ping" />
                <Heart size={16} className="relative " />
              </span>{" "}
              in Mexico
            </div>
            <div className="mt-6 flex flex-row justify-center md:mt-0 md:justify-start">
              <TooltipProvider>
                <Tooltip>
                  {" "}
                  <TooltipTrigger>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="https://github.com/ocordova/ocordova.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 text-base"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </Button>
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
