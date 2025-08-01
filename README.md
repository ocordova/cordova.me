# cordova.me

🏡 The personal website of Óscar Córdova - Software Engineer by day, Product Manager by night.

A modern, full-stack personal website featuring a blog, real-time integrations with music and reading services, and a comprehensive showcase of tools and philosophy.

## Features

### 🌟 Core Features
- **Personal Blog**: MDX-powered "Thoughts" section with syntax highlighting and frontmatter support
- **Real-time Now Section**: Live updates of currently playing music, reading progress, and watching activity
- **Uses Page**: Curated collection of favorite tools, software, and equipment
- **Work Philosophy**: Personal approach to product engineering and management
- **Colophon**: Technical details about the site's construction

### 🔗 External Integrations
- **Last.fm**: Real-time music listening activity
- **Literal.club**: Current reading status and book information
- **TMDB/Trakt**: Movie and TV show watching activity
- **Umami Analytics**: Privacy-focused site analytics

### 🎨 User Experience
- **Dark/Light Mode**: System-aware theme switching with manual override
- **Responsive Design**: Optimized for all device sizes
- **Fast Loading**: Server-side rendering with optimized assets
- **Auto-refresh**: Live data updates every 30 seconds

## Tech Stack

### Framework & Language
- **Framework**: [React Router v7](https://reactrouter.com/) (full-stack React framework)
- **Language**: [TypeScript](https://www.typescriptlang.com/) with strict configuration
- **Build Tool**: [Vite](https://vitejs.dev/) with custom plugins

### Styling & UI
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom configuration
- **Components**: [shadcn/ui](https://ui.shadcn.com/) component library
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter Variable](https://rsms.me/inter/) font
- **Animations**: [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)

### Content & Data
- **Content**: [MDX](https://mdxjs.com/) for blog posts with frontmatter
- **Markdown Processing**: 
  - [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter)
  - [remark-mdx-frontmatter](https://github.com/remcohaszing/remark-mdx-frontmatter)
  - [rehype-pretty-code](https://github.com/atomiks/rehype-pretty-code) for syntax highlighting

### Development & Deployment
- **Deployment**: [Fly.io](https://fly.io/) with Docker containerization
- **Package Manager**: npm
- **Linting**: [ESLint](https://eslint.org/) with TypeScript support
- **Theme Management**: [remix-themes](https://github.com/abereghici/remix-themes)

## Getting Started

### Prerequisites
- **Node.js**: Version 20.0.0 or higher
- **npm**: Latest version

### Installation

1. **Clone and install dependencies:**
```bash
git clone https://github.com/ocordova/cordova.me.git
cd cordova.me
npm install
```

2. **Configure environment variables:**
```bash
cp .env.example .env
```

Edit the `.env` file with your API keys (see [Environment Variables](#environment-variables) section below).

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
# Development
npm run dev          # Start development server on port 3000

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## Environment Variables

The following environment variables are required for full functionality:

### Required for Basic Functionality
```bash
SESSION_SECRET="your-session-secret-here"
```

### Optional Integrations
```bash
# Last.fm Music Integration
LASTFM_API_KEY="your-lastfm-api-key"

# Literal.club Reading Integration  
LITERAL_TOKEN="your-literal-api-token"
LITERAL_PROFILE_ID="your-literal-profile-id"
LITERAL_API="https://literal.club/graphql"

# Movie/TV Integration
TRAKT_CLIENT_ID="your-trakt-client-id"
TMDB_API_KEY="your-tmdb-api-key"

# Analytics (optional)
UMAMI_ID="your-umami-tracking-id"
```

### Getting API Keys

1. **Last.fm**: Register at [https://www.last.fm/api](https://www.last.fm/api)
2. **Literal.club**: Extract from browser dev tools when logged into Literal.club
3. **TMDB**: Register at [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
4. **Trakt**: Register at [https://trakt.tv/oauth/applications](https://trakt.tv/oauth/applications)
5. **Umami**: Set up at [https://umami.is](https://umami.is) or self-host

*Note: The site will function without these integrations, but the "Now" sections will show error states.*

## Project Structure

```
app/
├── actions/              # Server-side API integrations
│   ├── now-listening.server.ts
│   ├── now-reading.server.ts
│   └── now-watching.server.ts
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── layouts/         # Layout components
│   └── *.tsx            # Feature components
├── db/                  # Static data and content
├── lib/                 # Utility functions
├── routes/              # File-based routing
│   ├── *.tsx            # Route components
│   └── *.mdx            # Blog posts
├── styles/              # Global styles
├── entry.client.tsx     # Client entry point
├── entry.server.tsx     # Server entry point
└── root.tsx             # Root layout
```

## Development Workflow

### Adding Blog Posts
1. Create new `.mdx` files in `app/routes/` with the pattern `thoughts.your-post-title.mdx`
2. Include frontmatter with `author`, `date`, `title`, and `description`
3. Use React components and markdown as needed

### Modifying Components
- UI components are in `app/components/ui/` (shadcn/ui)
- Feature components are in `app/components/`
- Follow existing TypeScript and accessibility patterns

### External Integrations
- Server actions are in `app/actions/` with `.server.ts` suffix
- Add new integrations following existing patterns
- Handle errors gracefully with fallback states

## Deployment

### Fly.io Deployment
This project is configured for deployment on Fly.io with Docker:

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Deploy
fly deploy
```

### Docker
The included `Dockerfile` supports multi-stage builds optimized for production:
- Node.js 20 base image
- Development dependencies stripped in final image
- Optimized for Fly.io deployment

## API Integrations

### Last.fm Integration
- Fetches recently played tracks
- Shows current playing status
- Updates every 30 seconds
- Graceful fallback on API errors

### Literal.club Integration
- GraphQL API integration
- Shows currently reading books
- Displays book covers and metadata
- Handles multiple concurrent reads

### TMDB/Trakt Integration
- Movie and TV show data
- Watching status tracking
- Rich metadata display
- Poster image integration

## Contributing

This is a personal website, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper TypeScript types
4. Ensure linting and type checking pass
5. Submit a pull request

Please maintain the existing code style and patterns.

## License

This is free and unencumbered software released into the public domain. For more information, see <http://unlicense.org/> or the accompanying UNLICENSE file.

---

Built with ❤️ using modern web technologies. View the [colophon](https://cordova.me/colophon) for technical details.
