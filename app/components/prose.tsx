import { cn } from "@/lib/utils";

export const Prose = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        "prose-sm prose-neutral prose dark:prose-invert",
      )}
    >
      {children}
    </div>
  );
};
