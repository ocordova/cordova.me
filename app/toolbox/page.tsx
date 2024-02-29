import { SimpleLayout } from "@/components/simple-layout";
import { categories } from "@/db/tools";
import { Metadata } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Toolbox",
  description: "A collection of my favorite tools.",
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
      <h2 className="sticky top-0 z-10 py-2 font-medium tracking-tight bg-background">
        {title}
      </h2>
      <ul role="list" className="mt-4 space-y-2">
        {children}
      </ul>
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
    <li className="group -mx-3">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="p-3 hover:bg-accent/80 rounded-md transition-all duration-200">
          <div className="flex items-center justify-between gap-x-2">
            {icon ? (
              <Image
                quality={100}
                width={28}
                height={28}
                src={icon}
                alt={name}
                className="flex-none rounded-full"
              />
            ) : null}
            <h3 className="flex-auto truncate text-sm font-semibold">{name}</h3>
          </div>
          <p className="mt-2.5 text-sm text-muted-foreground">{children}</p>
        </div>
      </a>
    </li>
  );
};

export default function ToolboxPage() {
  return (
    <SimpleLayout title="Toolbox">
      <div className="space-y-8">
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
