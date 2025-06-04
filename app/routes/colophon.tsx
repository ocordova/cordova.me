import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Colophon" },
    {
      name: "description",
      content: "The tech stack behind this site.",
    },
  ];
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
            <a
              href="https://zed.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline text-foreground/80"
            >
              Zed
            </a>
            .
          </li>
          <li>
            Built with{" "}
            <a
              href="https://remix.run/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline text-foreground/80"
            >
              Remix
            </a>
            .
          </li>
          <li>
            Styled with{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline text-foreground/80"
            >
              Tailwind CSS
            </a>{" "}
            &{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline text-foreground/80"
            >
              shadcn/ui
            </a>
            .
          </li>
          <li>
            Iconified with{" "}
            <a
              href="https://lucide.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline text-foreground/80"
            >
              Lucide
            </a>
            .
          </li>
          <li>
            Hosted on{" "}
            <a
              href="https://fly.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:no-underline text-foreground/80"
            >
              Fly
            </a>
            .
          </li>
        </ul>

        <p className="leading-7 mt-6 text-justify">
          The open source code is available on{" "}
          <a
            href="https://github.com/ocordova/cordova.me"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:no-underline text-foreground/80"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </>
  );
}
