import Wrapper from "./layouts/app-layout";
import { Link, useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  return (
    <header>
      <Wrapper>
        <div className="py-8 px-4 sm:px-0">
          <Link
            to="/"
            className="font-serif text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Home
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}
