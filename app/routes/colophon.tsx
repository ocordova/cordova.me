import { MetaFunction } from "react-router";

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
        <h1 className="mt-8 font-serif text-xl font-medium tracking-tight">Colophon</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-left">
          In case you were wondering, this site is:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Pair-programmed with{" "}
            <a
              href="https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Claude Code
            </a>{" "}
            &{" "}
            <a
              href="https://zed.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Zed
            </a>
            .
          </li>
          <li>
            Built with{" "}
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              React Router
            </a>
            .
          </li>
          <li>
            Styled with{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Tailwind CSS
            </a>{" "}
            &{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
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
              className="link-underline"
            >
              Lucide
            </a>
            .
          </li>
          <li>
            Typeset in{" "}
            <a
              href="https://github.com/productiontype/Newsreader"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Newsreader
            </a>{" "}
            &{" "}
            <a
              href="https://rsms.me/inter/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Inter
            </a>
            .
          </li>
          <li>
            Hosted on{" "}
            <a
              href="https://fly.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Fly
            </a>
            .
          </li>
        </ul>

        <p className="leading-7 mt-6 text-left">
          The open source code is available on{" "}
          <a
            href="https://github.com/ocordova/cordova.me"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </>
  );
}
