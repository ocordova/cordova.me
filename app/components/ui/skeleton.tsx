import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const skeletonVariants = cva(
  "animate-pulse bg-primary/5",
  {
    variants: {
      variant: {
        default: "rounded-md",
        circle: "rounded-full",
        text: "rounded-sm",
      },
      size: {
        sm: "h-3",
        md: "h-4", 
        lg: "h-5",
        xl: "h-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

function Skeleton({
  className,
  variant,
  size,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Skeleton };
