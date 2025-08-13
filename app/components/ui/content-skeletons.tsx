import { Skeleton } from "./skeleton";

export function SongSkeleton() {
  return (
    <div className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3">
      <div className="group flex items-center gap-4">
        <div className="relative">
          <div className="relative origin-center w-[72px]">
            <Skeleton className="h-[72px] w-[72px] rounded-sm" />
          </div>
        </div>
        <div className="w-full space-y-1">
          <Skeleton variant="text" className="h-[20px] w-[200px]" />
          <Skeleton variant="text" className="h-[20px] w-[160px]" />
        </div>
      </div>
    </div>
  );
}

export function BookSkeleton() {
  return (
    <div className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3">
      <div className="group flex items-center gap-4">
        <div className="relative">
          <div className="relative origin-center w-[64px]">
            <Skeleton className="h-[96px] w-[64px] rounded-sm" />
          </div>
        </div>
        <div className="w-full space-y-1">
          <Skeleton variant="text" className="h-[20px] w-[180px]" />
          <Skeleton variant="text" className="h-[20px] w-[120px]" />
        </div>
      </div>
    </div>
  );
}

export function MovieSkeleton() {
  return (
    <div className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3">
      <div className="group flex items-center gap-4">
        <div className="relative">
          <div className="relative origin-center w-[64px]">
            <Skeleton className="h-[96px] w-[64px] rounded-sm" />
          </div>
        </div>
        <div className="w-full space-y-1">
          <Skeleton variant="text" className="h-[20px] w-[160px]" />
          <Skeleton variant="text" className="h-[20px] w-[60px]" />
        </div>
      </div>
    </div>
  );
}

export function QuoteSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton variant="text" className="h-3 w-full" />
      <Skeleton variant="text" className="h-3 w-3/4" />
    </div>
  );
}

export function ListeningSectionSkeleton() {
  return (
    <>
      <div className="mt-16 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Skeleton variant="text" className="h-[24px] w-[70px]" />
          <Skeleton className="h-[24px] w-[90px] rounded-full" />
        </div>
        <Skeleton variant="text" className="h-[32px] w-[64px] rounded-md" />
      </div>
      <div className="mt-2 list-content grid gap-4">
        <SongSkeleton />
      </div>
    </>
  );
}

export function ReadingSectionSkeleton() {
  return (
    <>
      <div className="mt-16 flex items-center justify-between">
        <Skeleton variant="text" className="h-[24px] w-[60px]" />
        <Skeleton variant="text" className="h-[32px] w-[64px] rounded-md" />
      </div>
      <div className="mt-2 list-content grid gap-4">
        <BookSkeleton />
      </div>
    </>
  );
}

export function WatchingSectionSkeleton() {
  return (
    <>
      <div className="mt-12 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Skeleton variant="text" className="h-[24px] w-[75px]" />
          <Skeleton className="h-[24px] w-[90px] rounded-full" />
        </div>
        <Skeleton variant="text" className="h-[32px] w-[64px] rounded-md" />
      </div>
      <div className="mt-2 list-content grid gap-4">
        <MovieSkeleton />
      </div>
    </>
  );
}
