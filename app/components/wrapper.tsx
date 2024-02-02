import { cn } from "@/lib/utils";

export const Wrapper = ({ className, ...props }: any) => {
  return <div className={cn("mx-auto max-w-xl my-6", className)} {...props} />;
};
