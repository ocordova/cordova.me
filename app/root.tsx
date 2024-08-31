import {
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
  Theme,
} from "remix-themes";
import { themeSessionResolver } from "./session.server";
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";
import globalStyles from "./styles/globals.css?url";
import { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import AppLayout from "./components/layouts/app-layout";
import Header from "./components/header";
import "@fontsource-variable/inter/wght.css";
import Footer from "./components/footer";
import { cn } from "./lib/utils";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    // { rel: "icon", type: "image/svg+xml", href: favicon },
  ];
};

export interface LoaderData {
  theme: Theme | null;
  isProduction: boolean;
  plausibleDomain: string | undefined;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  const plausibleDomain = process.env.PLAUSIBLE_DATA_DOMAIN;
  const isProduction = process.env.NODE_ENV === "production";

  return json<LoaderData>({
    plausibleDomain,
    isProduction,
    theme: getTheme(),
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  return (
    <ThemeProvider
      specifiedTheme={data?.theme as Theme}
      themeAction="/action/set-theme"
    >
      <InnerLayout ssrTheme={Boolean(data?.theme)}>{children}</InnerLayout>
    </ThemeProvider>
  );
}

function InnerLayout({
  ssrTheme,
  children,
  plausibleDomain,
  isProduction,
}: {
  ssrTheme: boolean;
  children: React.ReactNode;
  plausibleDomain?: string;
  isProduction?: boolean;
}) {
  const [theme] = useTheme();

  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main className="px-6 sm:px-0">
          <AppLayout>{children}</AppLayout>
        </main>
        <Footer />
        <ScrollRestoration />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(ssrTheme)} />
        <Scripts />
        {isProduction && plausibleDomain ? (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.tagged-events.outbound-links.js"
          ></script>
        ) : null}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
