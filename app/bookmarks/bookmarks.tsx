import { Badge } from "@/components/ui/badge";
import { Bookmark } from "@/db/bookmarks";
import Image from "next/image";
import Link from "next/link";

const Item = ({ title, description, url, icon, category }: Bookmark) => {
  return (
    <li className="group -mx-3">
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <div className="p-3 hover:bg-accent/80 rounded-md transition-all duration-200">
          <div className="flex items-center justify-between gap-x-2">
            {icon ? (
              <Image
                quality={100}
                width={28}
                height={28}
                src={icon}
                alt={title}
                className="flex-none rounded-full"
              />
            ) : (
              <div></div>
            )}
            <Badge variant="secondary" className="flex-none font-normal">
              {category}
            </Badge>
          </div>
          <h3 className="mt-3 flex-auto text-sm font-semibold leading-6">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default function BookMarksData({ data }: { data: Bookmark[] }) {
  return (
    <ul role="list" className="mt-4 space-y-2">
      {data.map((bookmark) => {
        return <Item key={bookmark.title} {...bookmark} />;
      })}
    </ul>
  );
}
