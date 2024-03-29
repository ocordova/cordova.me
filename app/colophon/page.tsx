import { TextLink } from "@/components/text-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colophon",
  description: "The tech stack behind this site.",
};

export default function AboutPage() {
  return (
    <>
      <div className="text-sm">
        <h1 className="mt-8 font-semibold">Colophon</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify">
          In case you were wondering, this site is:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Carefully hand-coded with{" "}
            <TextLink
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code
            </TextLink>
            .
          </li>
          <li>
            Built with{" "}
            <TextLink
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </TextLink>
            .
          </li>
          <li>
            Styled with{" "}
            <TextLink
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </TextLink>{" "}
            &{" "}
            <TextLink
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui
            </TextLink>
            .
          </li>
          <li>
            Iconified with{" "}
            <TextLink
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucide
            </TextLink>
            .
          </li>
          <li>
            Hosted on{" "}
            <TextLink
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </TextLink>
            .
          </li>
          <li>
            Tracking data with{" "}
            <TextLink
              href="https://plausible.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plausible
            </TextLink>
            .
          </li>
        </ul>

        <p className="leading-7 mt-6 text-justify">
          The open source code is available on{" "}
          <TextLink
            href="https://github.com/ocordova/cordova.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </TextLink>
          .
        </p>
      </div>
    </>
  );
}
