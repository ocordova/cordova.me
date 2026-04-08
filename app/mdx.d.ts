declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: Record<string, unknown>;
  export const meta: () => Array<Record<string, unknown>>;

  const Component: ComponentType;
  export default Component;
}
