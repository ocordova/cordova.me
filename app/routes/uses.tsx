import { SimpleLayout } from "~/components/layouts/simple-layout";
import { categories } from "~/db/tools";
import type { MetaFunction } from "react-router";
import { ReactNode } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Uses" },
    {
      name: "description",
      content: "A collection of my favorite tools.",
    },
  ];
};

const ToolsSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section>
      <h2 className="sticky top-0 -mx-3 px-3 z-10 py-2 font-serif text-lg font-medium tracking-tight bg-background">
        {title}
      </h2>
      <ul className="mt-2">{children}</ul>
    </section>
  );
};

const Tool = ({
  name,
  url,
  icon,
  children,
}: {
  name: string;
  url: string;
  icon?: string;
  children: ReactNode;
}) => {
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
          <h3 className="text-sm">
            <span className="link-underline">{name}</span>
          </h3>
          <p className="text-[0.8125rem] text-muted-foreground">{children}</p>
        </div>
      </a>
    </li>
  );
};

export default function UsesPage() {
  return (
    <SimpleLayout title="Uses">
      <div className="space-y-4">
        {categories.map((category, index) => {
          return (
            <ToolsSection key={index} title={category.name}>
              {category.tools.map((tool, index) => {
                return (
                  <Tool key={index} {...tool}>
                    {tool.description}
                  </Tool>
                );
              })}
            </ToolsSection>
          );
        })}
      </div>
    </SimpleLayout>
  );
}
