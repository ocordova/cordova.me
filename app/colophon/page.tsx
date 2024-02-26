import { TextLink } from "@/components";

export default function AboutPage() {
  return (
    <>
      <div>
        <h2 className="mt-8 text-lg font-medium tracking-tight text-forground sm:text-xl">
          Colophon
        </h2>
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
          </li>
        </ul>
      </div>
    </>
  );
}
