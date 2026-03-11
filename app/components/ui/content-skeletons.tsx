import { Skeleton } from "./skeleton";

export function QuoteSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton variant="text" className="h-3 w-full" />
      <Skeleton variant="text" className="h-3 w-3/4" />
    </div>
  );
}
