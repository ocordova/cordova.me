import { Bookmark, bookmarks, Category } from "~/db/bookmarks";
import { SimpleLayout } from "~/components/layouts/simple-layout";
import { cn } from "~/lib/utils";

import { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, useNavigate, useLocation } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Bookmarks" },
    {
      name: "description",
      content: "A collection of my favorite bookmarks.",
    },
  ];
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
    { name: "All", type: "all" },
    { name: "Articles", type: "article" },
    { name: "Resources", type: "resource" },
    { name: "Tools", type: "tool" },
    { name: "Videos", type: "video" },
  ];

  const handleTypeChange = (type: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("category", type);
    navigate({ search: searchParams.toString() });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive =
          currenyCategory == tab.type ||
          (!currenyCategory && tab.type === "all");
        return (
          <button
            key={tab.name}
            type="button"
            onClick={() => handleTypeChange(tab.type)}
            className={cn(
              "inline-flex items-center rounded-full px-3 py-1 text-sm transition-colors",
              isActive
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}

const Item = ({ title, description, url, icon }: Bookmark) => {
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
          <h2 className="text-[15px] leading-6 font-normal">
            <span className="link-underline">{title}</span>
            <span className="sr-only"> (opens in a new tab)</span>
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
