# cordova.me

Personal website of Óscar Córdova. This is a content-first, SSR React Router application. It is intentionally small and static-data-driven: most pages read from TypeScript modules, MDX files, or external APIs, with no database.

## Technology stack

- **Framework**: [React Router v7](https://reactrouter.com/) in SSR mode (`ssr: true` in `react-router.config.ts`).
- **Runtime**: Node.js 20+.
- **Language**: TypeScript (strict mode) with `type: "module"`.
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (New York style, neutral base color).
- **Icons**: [Lucide React](https://lucide.dev/).
- **Fonts**: Inter Variable (sans-serif) and Newsreader Variable (serif), loaded via `@fontsource-variable`.
- **Build tooling**: Vite 8 with the React Router plugin, MDX support via `@mdx-js/rollup`, and `vite-tsconfig-paths` for `~/*` aliases.
- **Testing**: Vitest.
- **Linting**: ESLint with recommended React, React Hooks, JSX a11y, and TypeScript rules.
- **Deployment target**: [Fly.io](https://fly.io/) via Docker (`Dockerfile` + `fly.toml`).

> **Note on Cloudflare artifacts**: `functions/[[path]].ts`, `load-context.ts`, `worker-configuration.d.ts`, and the `@react-router/cloudflare` dependency are present in the repo, but the active deployment path is Fly.io + Docker + `react-router-serve`. Do not treat those Cloudflare files as the source of truth for deployment.

## Project structure

```text
.
├── app/
│   ├── actions/              # Server-side data fetchers for external APIs
│   │   ├── now-listening.server.ts   # Last.fm recent tracks
│   │   ├── now-playing.server.ts     # Nintendo Switch game from a gist
│   │   ├── now-reading.server.ts     # Literal reading state
│   │   └── now-watching.server.ts    # Letterboxd RSS feed
│   ├── components/           # React components
│   │   ├── layouts/          # AppLayout, ArticleLayout, SimpleLayout
│   │   ├── ui/               # shadcn/ui primitives (button, dropdown-menu, skeleton, badge)
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── latest-bookmarks.tsx
│   │   ├── mode-toggle.tsx
│   │   ├── now.tsx
│   │   ├── prose.tsx
│   │   └── work-philosophy.tsx
│   ├── db/                   # Static data modules
│   │   ├── bookmarks.ts
│   │   ├── books.ts
│   │   ├── constants.server.ts
│   │   ├── quotes.ts
│   │   ├── thoughts.server.tsx
│   │   └── tools.ts
│   ├── lib/                  # Shared utilities and hooks
│   │   ├── cache.server.ts   # In-memory stale-while-revalidate cache
│   │   ├── cache.server.test.ts
│   │   ├── hooks.ts          # Client-side polling hooks for /api/now-*
│   │   └── utils.ts          # cn(), formatDate(), leadingZero()
│   ├── routes/               # React Router routes (flatRoutes convention)
│   │   ├── _index.tsx
│   │   ├── action.set-theme.ts
│   │   ├── api.now-listening.ts
│   │   ├── api.now-playing.ts
│   │   ├── api.now-reading.ts
│   │   ├── api.now-watching.ts
│   │   ├── bookmarks.tsx
│   │   ├── colophon.tsx
│   │   ├── thoughts.tsx      # Layout route for /thoughts/*
│   │   ├── thoughts_.<slug>.mdx   # Individual MDX essays
│   │   ├── thoughts_._index.tsx   # /thoughts listing
│   │   ├── uses.tsx
│   │   ├── [llms.txt].tsx
│   │   └── [robots.txt].tsx
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   ├── root.tsx              # Root layout, theme, fonts, analytics
│   ├── routes.ts             # flatRoutes() route configuration
│   ├── session.server.ts     # Cookie-based theme session
│   └── styles/globals.css
├── functions/                # Cloudflare Pages function (not used for Fly.io)
├── public/static/            # Static assets (images for bookmarks, books, tools, writing)
├── .github/workflows/        # CI and Fly.io deploy workflows
├── Dockerfile
├── fly.toml
├── package.json
├── react-router.config.ts
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Build, development, and test commands

Install dependencies first:

```bash
npm install
```

Then:

```bash
npm run dev          # Start the Vite dev server on http://localhost:3000
npm run build        # Production build into ./build
npm run start        # Serve the production build with react-router-serve
npm run typecheck    # Generate React Router types and run tsc
npm run lint         # Run ESLint
npm test             # Run Vitest once
```

CI runs `npm ci && npm test && npm run lint && npm run build` on pull requests.

## Runtime architecture

- The app renders on the server and hydrates on the client (`entry.server.tsx` / `entry.client.tsx`).
- Server-only modules are suffixed with `.server.ts` so Vite knows they must not leak to the client bundle.
- A lightweight in-memory cache (`app/lib/cache.server.ts`) protects the external "now" APIs. It supports stale-while-revalidate behavior and de-duplicates concurrent fetches.
- On server boot, `entry.server.tsx` pre-warms the now-* caches so the first request after a deploy does not wait on upstream APIs.
- Client-side React hooks in `app/lib/hooks.ts` poll `/api/now-listening` periodically; other now-* endpoints are fetched once after hydration.

## Content model

- **Home** (`/`): pulls the latest two thoughts, plus data from the four "now" APIs (listening, reading, watching, playing). Failures are swallowed so the page still renders.
- **Thoughts** (`/thoughts`): essays are stored as MDX files under `app/routes/thoughts.<slug>.mdx`. Frontmatter must include `title`, `description`, and `date`. The listing is built at runtime via `import.meta.glob`. Some old slugs redirect via small TypeScript route files (`thoughts.evaluating-stocks-1-the-problem.ts`).
- **Bookmarks** (`/bookmarks`): curated links from `app/db/bookmarks.ts`, filterable by category via query string.
- **Uses** (`/uses`): tools and hardware from `app/db/tools.ts`.
- **Colophon** (`/colophon`): a static page describing the stack.
- **Now** section on the home page: aggregated personal activity pulled from external services.

## Environment variables

Copy `.env.example` to `.env` for local development. Required variables:

| Variable | Purpose |
|---|---|
| `SESSION_SECRET` | Secret used to sign the theme cookie. Must be set in production. |
| `UMAMI_ID` | Umami analytics website ID. Only injected in production builds. |
| `LASTFM_API_KEY` | For the now-listening Last.fm API. |
| `LITERAL_TOKEN` / `LITERAL_PROFILE_ID` / `LITERAL_API` | For the now-reading Literal Club GraphQL API. |
| `NOW_PLAYING_URL` | URL to a raw JSON gist describing the currently played Nintendo Switch game. |

`TRAKT_CLIENT_ID` and `TMDB_API_KEY` are still in `.env.example` but are not used by the current application code.

## Code style and conventions

- TypeScript strict mode is enabled. Prefer explicit types for public module exports.
- Use the `~/*` path alias for imports from `app/`.
- Style classes with Tailwind; compose conditional classes with `cn()` from `~/lib/utils`.
- shadcn/ui components live in `app/components/ui/` and use `cva` for variants.
- Server-only code must be in `.server.ts` files or referenced only from server entry points.
- MDX frontmatter is parsed by `remark-mdx-frontmatter` and accessible as `frontmatter` inside the MDX module.
- External fetchers should return structured data and log errors; route loaders should handle failures gracefully so pages do not crash on upstream outages.

## Design and UX guidelines

The site has an established aesthetic. Keep changes aligned with it.

### Audience and voice

Visitors are fellow engineers, product people, and curious individuals discovering Óscar's work and thinking. They arrive from links, search, or social media and want to quickly understand who he is, what he thinks about, and what he's working on.

**Brand personality:** Calm, thoughtful, grounded. The voice is reflective and unhurried. Content draws from Zen and Taoist philosophy, product engineering, and Mexican culinary heritage. Tone is sincere without being heavy — more like a quiet conversation than a presentation.

### Aesthetic direction

- **Visual tone:** Minimal, content-first, with generous whitespace and restrained typography. The design should feel like a well-organized, peaceful space.
- **References:** paco.me (understated elegance, thoughtful details), leerob.io (clean developer blog, content-first with minimal chrome)
- **Anti-references:** Flashy portfolios, heavy animations, corporate SaaS aesthetics, cluttered dashboards
- **Theme:** Light and dark mode. Neutral zinc/slate palette. No bright accent colors — let content breathe.
- **Typography:** Inter Variable (sans-serif, primary) and Newsreader Variable (serif, headings and editorial accents). Small, comfortable text sizes. Tight tracking on headings.

### Design principles

1. **Content over chrome** — Every element should serve the content. Remove anything decorative that doesn't aid comprehension or navigation.
2. **Quiet confidence** — The design should be so refined it becomes invisible. No element should demand attention; the whole should feel effortless.
3. **Breathing room** — Generous spacing and whitespace. Never crowd elements. Let each section stand on its own.
4. **Subtle over spectacular** — Prefer micro-interactions and gentle transitions over dramatic animations. Respect `prefers-reduced-motion`.
5. **Accessible by default** — Target WCAG AAA where feasible. Support reduced motion, high contrast, and keyboard navigation. Good contrast ratios in both light and dark modes.

### Practical guidelines

- **Tone**: Calm, thoughtful, minimal. Content-first, generous whitespace.
- **Palette**: Neutral zinc/slate. No bright accent colors. Light and dark modes via `remix-themes`.
- **Typography**: Inter Variable for body, Newsreader Variable for headings and editorial accents.
- **Motion**: Subtle and purposeful. Respect `prefers-reduced-motion`.
- **Accessibility**: Aim for good contrast in both themes, keyboard focus rings, and skip links. External links should include `target="_blank" rel="noopener noreferrer"` and an `sr-only` "opens in a new tab" note.

## Testing

- Unit tests use Vitest. The main test file is `app/lib/cache.server.test.ts`, which covers the stale-while-revalidate cache.
- Run tests with `npm test`.
- There are currently no end-to-end tests.

## Deployment

- The production app runs on Fly.io (`cordova-me`, region `dfw`).
- `Dockerfile` builds the app in a multi-stage Node.js image and installs `curl` because some upstream hosts (e.g., Letterboxd via Cloudflare) reject Node.js TLS fingerprints, so the server shells out to `curl`.
- `npm run start` uses `react-router-serve` to serve the built server bundle on port 3000.
- GitHub Actions:
  - `.github/workflows/ci.yml` runs tests, lint, and build on pull requests to `master`.
  - `.github/workflows/fly-deploy.yml` runs tests and deploys to Fly.io on pushes to `master`.

## Git and pull requests

- Do not add the Claude session link or `Claude-Session:` trailer to commit messages or pull request descriptions.
- Use gitmoji for commit messages and PR titles: `✨ feat`, `🐛 fix`, `♻️ refactor`, `🧹 chore`, `📝 docs`, `✅ test`, `🔐 security`.
- Do NOT include `Co-Authored-By` lines in commit messages.
- When creating PRs, use this template for the body:

  ```markdown
  ## What

  <!-- What does this PR do and why? -->

  ## Changes

  <!-- Bullet list of changes -->

  ## Notes

  <!-- New env vars, migrations, breaking changes, deploy steps. Remove if not needed. -->
  ```

## Security considerations

- Secrets are read from environment variables; `.env` and `.env.*.local` are gitignored.
- `SESSION_SECRET` must be a strong, unique value in production.
- Theme cookies are `httpOnly`, `sameSite: "lax"`, and `secure` only in production.
- External links use `rel="noopener noreferrer"`.
- The Letterboxd fetcher uses a browser-like `User-Agent` and shells out to `curl` only to reach a feed that blocks Node.js clients; do not generalize that pattern for arbitrary URLs.
- Avoid logging full API tokens or response bodies that may contain personal data.
