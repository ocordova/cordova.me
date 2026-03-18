import { Bookmark, bookmarks, Category } from "~/db/bookmarks";
import { SimpleLayout } from "~/components/layouts/simple-layout";

import { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, useNavigate, useLocation } from "react-router";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { ListFilterIcon } from "lucide-react";

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

  return Response.json({
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
  const location = useLocation();
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
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("category", type);
    navigate({ search: searchParams.toString() });
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
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 py-2"
      >
        <div className="flex-none w-6 h-6 mt-0.5">
          {icon ? (
            <img
              width={24}
              height={24}
              src={icon}
              alt=""
              className="rounded-sm"
            />
          ) : null}
        </div>
        <div className="min-w-0">
          <h2 className="text-sm leading-6 font-normal">
            <span className="link-underline">{title}</span>
          </h2>
          <p className="text-[0.8125rem] text-muted-foreground">{description}</p>
        </div>
      </a>
    </li>
  );
};

function BookMarksData({ bookmarks }: { bookmarks: Bookmark[] }) {
  return (
    <ul className="mt-4">
      {bookmarks.map((bookmark) => {
        return <Item key={bookmark.title} {...bookmark} />;
      })}
    </ul>
  );
}
