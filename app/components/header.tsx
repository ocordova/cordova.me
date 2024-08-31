import { cn } from "~/lib/utils";
import Wrapper from "./layouts/app-layout";
import { NavLink } from "@remix-run/react";

// const NavLink = ({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) => {
//   const pathname = usePathname();

//   const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

//   return (
//     <Link
//       href={href}
//       className={cn(
//         "transition-colors hover:text-foreground/80",
//         isActive ? "text-foreground" : "text-foreground/60",
//       )}
//     >
//       {children}
//     </Link>
//   );
// };

// Export default

export default function Header() {
  const navigation: { href: string; label: string }[] = [
    { href: "/", label: "Home" },
    { href: "/thoughts", label: "Thoughts" },
    { href: "/bookmarks", label: "Bookmarks" },
    { href: "/uses", label: "Uses" },
  ];

  return (
    <header>
      <Wrapper>
        <div className="h-14 flex justify-center sm:justify-end items-center w-full mx-auto max-w- px-4 py-4 sm:px-0 mb-8">
          <nav className="flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  cn(
                    "transition-colors hover:text-foreground/80",
                    isActive ? "text-foreground" : "text-foreground/60"
                  )
                }
                key={item.href}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}
