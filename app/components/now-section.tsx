import { ReactNode } from "react";
import { Button } from "./ui/button";

interface NowSectionProps {
  title: string;
  viewAllHref?: string;
  badge?: ReactNode;
  skeleton: ReactNode;
  loading: boolean;
  isInitialLoad: boolean;
  error: string | null;
  hasData: boolean;
  children: ReactNode;
  className?: string;
}

export default function NowSection({
  title,
  viewAllHref,
  badge,
  skeleton,
  loading,
  isInitialLoad,
  error,
  hasData,
  children,
  className = "mt-12",
}: NowSectionProps) {
  if (loading && isInitialLoad) {
    return <section className={className}>{skeleton}</section>;
  }

  const header = (
    <div className="mt-16 flex items-center justify-between">
      <h2 className="flex gap-2 font-medium tracking-tight text-foreground">
        {title}
        {badge}
      </h2>
      {viewAllHref && (
        <a href={viewAllHref} rel="noopener noreferrer" target="_blank">
          <Button variant="ghost" size="sm" className="text-muted-foreground -mr-3">
            View all
          </Button>
        </a>
      )}
    </div>
  );

  if (error && !hasData) {
    return (
      <section className={className}>
        {header}
        <div className="mt-2 p-4 rounded-md bg-destructive/10 border border-destructive/20">
          <p className="text-sm text-destructive">
            Failed to load currently {title.toLowerCase()}: {error}
          </p>
        </div>
      </section>
    );
  }

  if (!hasData) {
    return (
      <section className={className}>
        {header}
        <div className="mt-2 text-sm text-muted-foreground">
          No {title.toLowerCase()} data available
        </div>
      </section>
    );
  }

  return (
    <section className={className}>
      {header}
      <div className="mt-2 list-content grid gap-4">{children}</div>
    </section>
  );
}
