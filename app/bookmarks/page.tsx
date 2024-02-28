import { bookmarks } from "@/db/bookmarks";
import { SimpleLayout } from "@/components";
import { getSearchParam } from "@/lib/params";
import BookMarksData from "./bookmarks";
import FilterBookmarks from "./FilterBookmarks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "A collection of my favorite resources.",
};

interface PageProps {
  searchParams: {
    type: string;
  };
}

export default function BookmarksPage(props: PageProps) {
  const { searchParams } = props;

  const currentType = getSearchParam(searchParams.type);

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    if (currentType === "") return true;
    return bookmark.category === currentType;
  });

  return (
    <SimpleLayout title="Bookmarks">
      <FilterBookmarks />
      <BookMarksData data={filteredBookmarks} />
    </SimpleLayout>
  );
}
