import { Bookmark } from "@/db/bookmarks";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, url, icon, category }: Bookmark) => {
  const { hostname } = new URL(url);
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="group relative h-full rounded-lg border  border-transparent transition-colors hover:border-border">
        <div className="relative overflow-hidden rounded-lg p-6">
          <div className="flex w-full items-center justify-between">
            <div className="relative h-8 w-8 object-cover">
              {icon ? (
                <Image
                  quality={100}
                  width={32}
                  height={32}
                  src={icon}
                  alt={title}
                  className="rounded-full"
                />
              ) : null}
            </div>
            <span className="borderinline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize">
              {category}
            </span>
          </div>
          <h2 className="mt-4 font-serif text-base font-semibold text-foreground">
            {title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-muted-foreground">
            <LinkIcon size={14} className="flex-none" />
            <span className="ml-2">{hostname}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function BookMarksData({ data }: { data: Bookmark[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-1">
      {data.map((bookmark) => {
        return <Card key={bookmark.title} {...bookmark} />;
      })}
    </div>
  );
}
