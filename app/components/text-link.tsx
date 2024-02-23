import Link from "next/link";

export const TextLink = ({
  href,
  newWindow,
  children,
  target,
  rel,
}: {
  href: string;
  newWindow?: boolean;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) => {
  return (
    <Link
      href={href}
      {...(newWindow ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      target={target}
      rel={rel}
      className="underline underline-offset-4 hover:no-underline text-foreground/80"
    >
      {children}
    </Link>
  );
};
