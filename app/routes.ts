import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("root.tsx", [
    index("routes/_index.tsx"),
    route("thoughts", "routes/thoughts.tsx", [
      index("routes/thoughts_._index.tsx"),
    ]),
    route("bookmarks", "routes/bookmarks.tsx"),
    route("uses", "routes/uses.tsx"),
    route("colophon", "routes/colophon.tsx"),
    route("action/set-theme", "routes/action.set-theme.ts"),
  ]),
] satisfies RouteConfig;