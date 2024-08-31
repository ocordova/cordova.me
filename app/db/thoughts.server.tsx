type Frontmatter = {
  title: string;
  description: string;
  date: string;
};

export type ThoughtMeta = {
  slug: string;
  frontmatter: Frontmatter;
};

const slug = (filename: string) =>
  filename
    .replace("../routes/thoughts", "")
    .replace(/\.mdx$/, "")
    .replace(/\./, "");

export const getThoughts = (): ThoughtMeta[] => {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/thoughts.*.mdx",
    {
      eager: true,
    }
  );

  const thoughts = Object.entries(modules).map(([filename, thought]) => {
    return {
      slug: slug(filename),
      frontmatter: thought.frontmatter,
    };
  });

  return thoughts.sort((a, b) => {
    return a.frontmatter.date > b.frontmatter.date ? -1 : 1;
  });
};
