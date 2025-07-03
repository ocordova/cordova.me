import { Bookmark, bookmarks, Category } from "~/db/bookmarks";
import { SimpleLayout } from "~/components/layouts/simple-layout";

import { json, MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { ListFilterIcon } from "lucide-react";
import { Badge } from "~/components/ui/badge";

export const meta: MetaFunction = () => {
  return [
    { title: "Bookmarks" },
    {
      name: "description",
      content: "A collection of my favorite bookmarks.",
    },
  ];
};

type LoaderData = {
  category?: Category | null;
  bookmarks: typeof bookmarks;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const searchParams = new URLSearchParams(new URL(request.url).search);
  const category = searchParams.get("category");
  const filteredBookmarks = bookmarks.filter((bookmark) => {
    if (!category || category === "all") return true;
    return bookmark.category === category;
  });

  return json<LoaderData>({
    category: category as Category,
    bookmarks: filteredBookmarks,
  });
};

export default function BookmarksPage() {
  const { bookmarks, category } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout title="Bookmarks">
      <FilterBookmarks currenyCategory={category} />
      <BookMarksData bookmarks={bookmarks} />
    </SimpleLayout>
  );
}

function FilterBookmarks({
  currenyCategory,
}: {
  currenyCategory?: Category | null;
}) {
  const navigate = useNavigate();
  const tabs = [
    {
      name: "All",
      category: null,
      type: "all",
    },
    {
      name: "Articles",
      category: Category.article,
      type: "article",
    },
    {
      name: "Resources",
      category: Category.resource,
      type: "resource",
    },
    {
      name: "Tools",
      category: Category.tool,
      type: "tool",
    },
    {
      name: "Videos",
      category: Category.video,
      type: "video",
    },
  ];

  const handleTypeChange = (type: string) => {
    const url = new URL(location.href);
    url.searchParams.set("category", type);
    navigate({
      search: url.search,
    });
  };

  return (
    <div className="flex flex-col w-full ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="ml-auto font-normal">
            <ListFilterIcon className="mr-2 h-4 w-4" /> Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {tabs.map((tab) => {
            return (
              <DropdownMenuCheckboxItem
                key={tab.name}
                checked={
                  currenyCategory == tab.type ||
                  (!currenyCategory && tab.type === "all")
                }
                onCheckedChange={() => handleTypeChange(tab.type)}
              >
                {tab.name}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

const Item = ({ title, description, url, icon, category }: Bookmark) => {
  return (
    <li className="group -mx-3">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="p-3 hover:bg-accent/80 rounded-md transition-all duration-200">
          <div className="flex items-center justify-between gap-x-2">
            {icon ? (
              <img
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
          <h3 className="mt-3 flex-auto text-sm font-medium leading-6">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </a>
    </li>
  );
};

function BookMarksData({ bookmarks }: { bookmarks: Bookmark[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {bookmarks.map((bookmark) => {
        return <Item key={bookmark.title} {...bookmark} />;
      })}
    </ul>
  );
}
