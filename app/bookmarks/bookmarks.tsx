import { Bookmark } from "@/db/bookmarks";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/20/solid";

const Card = ({ title, description, url, icon, category }: Bookmark) => {
  const { hostname } = new URL(url);
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="group relative h-full rounded-lg border border-gray-100 border-transparent transition-colors hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-500 ">
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
            <span
              className={clsx(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize",
                "border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-800 dark:bg-gray-500/10 dark:text-gray-300",
              )}
            >
              {category}
            </span>
          </div>
          <h2 className="mt-4 font-serif text-base font-semibold text-gray-900 dark:text-gray-50">
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-gray-700 transition dark:text-gray-500">
            <LinkIcon className="h-5 w-5 flex-none" />
            <span className="ml-2">{hostname}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function BookMarksData({ data }: { data: Bookmark[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {data.map((bookmark) => {
        return <Card key={bookmark.title} {...bookmark} />;
      })}
    </div>
  );
}
