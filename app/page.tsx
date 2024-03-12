import { Metadata } from "next";
import Bookmarks from "@/containers/latest-bookmarks";
import LatestThoughts from "@/containers/latest-thoughts";
import Contact from "@/containers/contact";
import WorkPhilosophy from "@/containers/work-philosophy";
import NowReading from "@/containers/now-reading";
import NowListening from "@/containers/now-listening";
import NowWatching from "@/containers/now-watching";
import Now from "@/containers/now";
import About from "@/containers/about";

export const metadata: Metadata = {
  title: "Óscar Córdova",
  description: "Software Engineer by day, Product Manager by night.",
};

export default function Page() {
  return (
    <>
      <About />
      <WorkPhilosophy />
      <Now />
      <LatestThoughts />
      <Bookmarks />
      <Contact />
      <NowListening />
      <NowReading />
      <NowWatching />
    </>
  );
}
