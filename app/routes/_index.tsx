import { type MetaFunction } from "react-router";
import About from "~/components/about";
import Contact from "~/components/contact";
import Bookmarks from "~/components/latest-bookmarks";
import Now from "~/components/now";
import WorkPhilosophy from "~/components/work-philosophy";
import NowListeningSection from "~/components/now-listening-section";
import NowReadingSection from "~/components/now-reading-section";
import NowWatchingSection from "~/components/now-watching-section";

export const meta: MetaFunction = () => {
  return [
    { title: "Óscar Córdova" },
    {
      name: "description",
      content: "Software Engineer by day, Product Manager by night",
    },
  ];
};

export default function Index() {
  return (
    <>
      <About />
      <WorkPhilosophy />
      <Now />
      <Bookmarks />
      <Contact />
      <NowListeningSection />
      <NowReadingSection />
      <NowWatchingSection />
    </>
  );
}
