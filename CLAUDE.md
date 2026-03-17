# cordova.me

Personal site for Óscar Córdova. React Router + Tailwind CSS + shadcn/ui (zinc theme) + Inter Variable + Newsreader Variable fonts. Deployed on Fly.io.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run typecheck` — Type check
- `npm run lint` — Lint

## Design Context

### Users
Visitors are fellow engineers, product people, and curious individuals discovering Óscar's work and thinking. They arrive from links, search, or social media and want to quickly understand who he is, what he thinks about, and what he's working on. The site serves as a personal digital space — not a portfolio showcase, but a living reflection.

### Brand Personality
**Calm, thoughtful, grounded.** The voice is reflective and unhurried. Content draws from Zen and Taoist philosophy, product engineering, and Mexican culinary heritage. Tone is sincere without being heavy — more like a quiet conversation than a presentation.

### Aesthetic Direction
- **Visual tone:** Minimal, content-first, with generous whitespace and restrained typography. The design should feel like a well-organized, peaceful space.
- **References:** paco.me (understated elegance, thoughtful details), leerob.io (clean developer blog, content-first with minimal chrome)
- **Anti-references:** Flashy portfolios, heavy animations, corporate SaaS aesthetics, cluttered dashboards
- **Theme:** Light and dark mode. Neutral zinc/slate palette. No bright accent colors — let content breathe.
- **Typography:** Inter Variable (sans-serif, primary) and Newsreader Variable (serif, headings and editorial accents). Small, comfortable text sizes. Tight tracking on headings.

### Design Principles
1. **Content over chrome** — Every element should serve the content. Remove anything decorative that doesn't aid comprehension or navigation.
2. **Quiet confidence** — The design should be so refined it becomes invisible. No element should demand attention; the whole should feel effortless.
3. **Breathing room** — Generous spacing and whitespace. Never crowd elements. Let each section stand on its own.
4. **Subtle over spectacular** — Prefer micro-interactions and gentle transitions over dramatic animations. Respect `prefers-reduced-motion`.
5. **Accessible by default** — Target WCAG AAA where feasible. Support reduced motion, high contrast, and keyboard navigation. Good contrast ratios in both light and dark modes.
