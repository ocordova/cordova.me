import { cn } from "@/lib/utils";


export const Prose = ({ children, className }) => {
  return (
    <div className={cn(className, "prose-neutral prose dark:prose-invert")}>
      {children}
    </div>
  );
};
