import Image from "next/image";
import Bookmarks from "./components/bookmarks";
import LatestActivity from "./components/latest-activity";
import LatestThoughts from "./components/latest-thoughts";

export default function Page() {
  return (
    <>
      <section>
        <div className="flex items-center gap-x-4">
          <Image
            src="/images/profile.jpeg"
            alt="Óscar Córdova"
            width={64}
            height={64}
            className="rounded-full grayscale hover:grayscale-0"
          />
          <div>
            <h2 className="font-semibold">Óscar Córdova</h2>
            <p className="text-sm text-muted-foreground">Product Engineer</p>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className="mt-16">
        <h2 className="my-4 font-medium tracking-tight text-forground">
          About
        </h2>
        <p className="text-sm leading-7">
          Prioritizing outcomes and impact over tools or methods. Placing
          problems before ideas. Crafting solutions through direct customer
          engagement and data to ensure we solve real-life problems.
        </p>
        <p className="text-sm leading-7 [&:not(:first-child)]:mt-3">
          Currently Software Engineer by day at ______ and Product Manager by
          night at Artiflora.
        </p>
        <p className="text-sm leading-7 [&:not(:first-child)]:mt-3">
          <a href="mailto:oscar@cordova.me" className="text-sm">
            oscar@cordova.me
          </a>
          <a href="https://twitter.com/oscargm" className="text-sm">
            Telegram
          </a>
        </p>
      </section>
      <LatestThoughts />
      <Bookmarks />
      <LatestActivity />
    </>
  );
}
