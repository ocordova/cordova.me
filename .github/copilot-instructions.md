# GitHub Copilot Instructions for cordova.me

This document provides comprehensive guidance for using GitHub Copilot effectively with this React Router v7 + TypeScript personal website codebase.

## Project Overview

This is a personal website built with modern web technologies focusing on simplicity, performance, and maintainability.

### Tech Stack
- **Framework**: React Router v7 (full-stack React framework)
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS + shadcn/ui component library
- **UI Primitives**: Radix UI components
- **Icons**: Lucide React
- **Content**: MDX for blog posts with frontmatter
- **Deployment**: Fly.io
- **Package Manager**: npm

## Code Standards & Best Practices

### TypeScript Guidelines

When writing TypeScript code, follow these patterns:

```typescript
// ✅ Use proper type annotations for component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

// ✅ Use React.forwardRef for components that need ref forwarding
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Component implementation
  }
);
Button.displayName = "Button";

// ✅ Use proper loader types for React Router
type LoaderData = {
  nowListeningPromise: ReturnType<typeof getNowListening>;
  nowReadingPromise: ReturnType<typeof getNowReading>;
};

// ✅ Use consistent import organization
import { type MetaFunction } from "react-router";
import { Await, useLoaderData } from "react-router";
import { Suspense } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
```

### React Router v7 Patterns

Follow these React Router v7 specific patterns:

```typescript
// ✅ Route file structure - use proper exports
export const meta: MetaFunction = () => {
  return [
    { title: "Page Title" },
    { name: "description", content: "Page description" }
  ];
};

export const loader = async () => {
  // Server-side data loading
  return { data: "example" };
};

export default function Component() {
  const data = useLoaderData<LoaderData>();
  return <div>{/* Component JSX */}</div>;
}

// ✅ Use deferred data loading for better UX
export const loader = async () => {
  return {
    fastData: await getFastData(),
    slowDataPromise: getSlowData(), // Don't await - defer it
  };
};

// ✅ Handle deferred data with Suspense
<Suspense fallback={<Skeleton />}>
  <Await resolve={promise} errorElement="Error loading data">
    {(data) => <Component data={data} />}
  </Await>
</Suspense>
```

### Component Development

Follow these component patterns:

```typescript
// ✅ Use shadcn/ui component pattern with cva
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const componentVariants = cva(
  "base-classes", // Base styles
  {
    variants: {
      variant: {
        default: "default-styles",
        secondary: "secondary-styles",
      },
      size: {
        default: "default-size",
        sm: "small-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ComponentProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

// ✅ Use proper className merging
<div className={cn(componentVariants({ variant, size }), className)} />
```

### Styling Guidelines

Use Tailwind CSS following these patterns:

```typescript
// ✅ Use semantic color tokens from theme
className="bg-background text-foreground border-border"

// ✅ Use consistent spacing scale
className="mt-12 mb-6 px-4 py-2"

// ✅ Use responsive design patterns
className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"

// ✅ Use proper hover/focus states
className="hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"

// ✅ Use animation classes from config
className="transition-colors animate-accordion-down"
```

### Server Actions Pattern

Follow these server-side patterns:

```typescript
// ✅ Create server actions in the actions/ directory
// File: app/actions/example.server.ts
export async function getExample(): Promise<ExampleType> {
  try {
    const response = await fetch('api-url');
    return await response.json();
  } catch (error) {
    console.error('Error fetching example:', error);
    throw new Error('Failed to load example data');
  }
}

// ✅ Use proper error handling
export const loader = async () => {
  try {
    return {
      dataPromise: getData(),
    };
  } catch (error) {
    throw new Response('Data loading failed', { status: 500 });
  }
};
```

### MDX Content Guidelines

For blog posts and content:

```mdx
---
author: Óscar Córdova
date: 2024-01-15
title: Post Title
description: Post description for meta tags
---

import { formatDate } from "../lib/utils";

<h1 className="font-medium text-base mb-1">{frontmatter.title}</h1>
<time dateTime={frontmatter.date} className="mt-1 text-sm text-muted-foreground">
  <span>{formatDate(frontmatter.date)}</span>
</time>

Your content here with proper **formatting** and [links](https://example.com).
```

### Utility Functions

Follow these utility patterns:

```typescript
// ✅ Keep utilities simple and focused
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function leadingZero(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}

export function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long", 
    year: "numeric",
    timeZone: "UTC",
  });
}
```

## File Organization

Follow this structure:

```
app/
├── routes/           # Route components (.tsx) and content (.mdx)
├── components/       # Reusable components
│   ├── ui/          # shadcn/ui components
│   └── *.tsx        # Custom components
├── actions/         # Server-side actions (.server.ts)
├── lib/            # Utility functions
└── styles/         # Global styles
```

### Import Path Guidelines

```typescript
// ✅ Use path mapping for internal imports
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { getExample } from "~/actions/example.server";

// ✅ Group imports logically
// 1. React/framework imports
// 2. Third-party libraries  
// 3. Internal components/utilities
// 4. Type-only imports (use 'type' keyword)
import { type MetaFunction } from "react-router";
```

## Accessibility Standards

Ensure all components meet accessibility requirements:

```typescript
// ✅ Use semantic HTML elements
<button type="button" aria-label="Close dialog">
<nav aria-label="Main navigation">
<main id="main-content">

// ✅ Include proper ARIA attributes
<div role="dialog" aria-labelledby="title" aria-describedby="description">

// ✅ Handle keyboard navigation
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleAction();
  }
}}

// ✅ Use proper focus management
<button className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
```

## Performance Guidelines

Follow these performance best practices:

```typescript
// ✅ Use React.lazy for code splitting when needed
const LazyComponent = React.lazy(() => import("~/components/heavy-component"));

// ✅ Implement proper loading states
<Suspense fallback={<Skeleton className="h-16 w-16" />}>
  <LazyComponent />
</Suspense>

// ✅ Use deferred data loading for non-critical data
export const loader = async () => {
  return {
    criticalData: await getCriticalData(),
    deferredDataPromise: getDeferredData(), // Don't await
  };
};

// ✅ Optimize images and assets
<img 
  src="/images/example.jpg" 
  alt="Descriptive text"
  loading="lazy"
  className="w-full h-auto"
/>
```

## Testing Considerations

When writing testable code:

```typescript
// ✅ Write components that are easy to test
export function Component({ data, onAction }: ComponentProps) {
  return (
    <div data-testid="component">
      <button onClick={onAction} type="button">
        {data.title}
      </button>
    </div>
  );
}

// ✅ Use proper TypeScript for better testing
interface ComponentProps {
  data: { title: string };
  onAction: () => void;
}
```

## Error Handling

Implement proper error handling:

```typescript
// ✅ Use error boundaries in React Router
export function ErrorBoundary() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground">Please try again later</p>
      </div>
    </div>
  );
}

// ✅ Handle async errors properly
export const loader = async () => {
  try {
    const data = await fetchData();
    return { data };
  } catch (error) {
    console.error('Loader error:', error);
    throw new Response('Failed to load data', { status: 500 });
  }
};
```

## Common Anti-Patterns to Avoid

```typescript
// ❌ Don't use any types
const data: any = getData();

// ❌ Don't ignore TypeScript errors
// @ts-ignore
const result = someFunction();

// ❌ Don't use inline styles when Tailwind classes exist
<div style={{ marginTop: '12px' }}> // Use mt-3 instead

// ❌ Don't forget to handle loading/error states
<div>{data.title}</div> // What if data is undefined?

// ✅ Always handle edge cases
<div>{data?.title ?? 'Loading...'}</div>

// ❌ Don't use useState for derived state
const [fullName, setFullName] = useState('');
useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);

// ✅ Use derived state directly
const fullName = `${firstName} ${lastName}`;
```

## Copilot-Specific Tips

1. **Be specific in comments**: Write detailed comments about what you want Copilot to generate
2. **Use type hints**: Start with type definitions to guide Copilot's suggestions
3. **Context matters**: Keep related code visible in the editor for better suggestions
4. **Follow patterns**: Copilot learns from existing code patterns in the file
5. **Iterate**: Use Copilot suggestions as starting points, then refine as needed

## Environment & Configuration

### Environment Variables Pattern

```typescript
// ✅ Use proper environment variable access
const API_KEY = process.env.LASTFM_API_KEY;
const API_URL = "https://api.example.com";

// ✅ Provide fallbacks when appropriate
const USERNAME = process.env.USERNAME || "defaultuser";

// ✅ Use type guards for required env vars
if (!API_KEY) {
  throw new Error('LASTFM_API_KEY environment variable is required');
}
```

### Vite Configuration

The project uses Vite with specific plugins:
- `@mdx-js/rollup` for MDX support
- `remark-frontmatter` and `remark-mdx-frontmatter` for frontmatter
- `rehype-pretty-code` for syntax highlighting
- `vite-tsconfig-paths` for path resolution

### Layout Patterns

Follow consistent layout patterns:

```typescript
// ✅ Layout component pattern
interface LayoutProps {
  children: ReactNode;
}

export function ArticleLayout({ children }: LayoutProps) {
  return (
    <div className="xl:relative">
      <div className="mx-auto max-w-2xl">
        <article className="mt-8">
          <Prose className="mt-8">{children}</Prose>
        </article>
      </div>
    </div>
  );
}
```

## Questions to Ask Yourself

Before accepting Copilot suggestions:

- Does this follow our TypeScript best practices?
- Is this accessible to all users?
- Does this handle error states properly?
- Is this consistent with our existing component patterns?
- Does this follow our import organization standards?
- Is this performant and necessary?
- Does this properly handle environment variables and configuration?
- Are loading and error states properly implemented?

Remember: Copilot is a powerful tool, but the final code quality depends on your review and adherence to these standards.