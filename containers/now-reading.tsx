import { NowReading, getNowReading } from "@/app/actions/now-reading";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import { Suspense } from "react";

function Book({ data }: { data: NowReading }) {
  const { url, cover, title, author } = data;
  return (
    <a
      href={url}
      target="_blank"
      title="View on Literal"
      rel="noopener noreferrer"
      className="group relative flex items-center rounded-md transition-all duration-200 py-2 p-3 -mx-3 cursor-pointer hover:bg-accent/80"
    >
      <div className="group flex items-center gap-4">
        <div className="relative">
          <div className="relative origin-center">
            <Image src={cover} alt={title} width={56} height={80} />
          </div>
        </div>
        <div className="w-full truncate">
          <div className="truncate text-sm">{title}</div>

          <div className="truncate text-sm slashed-zero text-muted-foreground">
            {author}
          </div>
        </div>
      </div>
    </a>
  );
}

async function LatestBook() {
  noStore();
  const data = await getNowReading();
  return data ? (
    <Book data={data} />
  ) : (
    <div className="text-sm text-muted-foreground">
      Not reading anything at the moment.
    </div>
  );
}

async function Reading() {
  return (
    <section className="mt-16">
      <div className="mt-16 flex items-center justify-between">
        <h2 className="font-medium tracking-tight text-forground">Reading</h2>
        <a
          href="https://literal.club/ocordova"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground -mr-3"
          >
            View all
          </Button>
        </a>
      </div>
      <dd className="mt-2 list-content grid gap-4">
        <Suspense
          fallback={
            <div className="flex items-center space-x-4">
              <Skeleton className="h-16 w-12 rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[140px]" />
              </div>
            </div>
          }
        >
          <LatestBook />
        </Suspense>
      </dd>
    </section>
  );
}

export default Reading;
