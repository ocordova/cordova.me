import { Metadata } from "next";
import Bookmarks from "@/containers/latest-bookmarks";
import LatestThoughts from "@/containers/latest-thoughts";
import Contact from "@/containers/contact";
import Introduction from "@/containers/introduction";

export const metadata: Metadata = {
  title: "Óscar Córdova - Product Engineer",
  description: "Software Engineer by day, Product Manager by night.",
};

export default function Page() {
  return (
    <>
      <Introduction />
      <LatestThoughts />
      <Bookmarks />
      <Contact />
    </>
  );
}
