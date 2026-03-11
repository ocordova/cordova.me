import {
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
  Theme,
} from "remix-themes";
import { themeSessionResolver } from "./session.server";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";
import { json } from "~/lib/response-helpers";
import globalStyles from "./styles/globals.css?url";
import { LinksFunction, LoaderFunctionArgs } from "react-router";
import AppLayout from "./components/layouts/app-layout";
import Header from "./components/header";
import interFont from "@fontsource-variable/inter/index.css?url";
import Footer from "./components/footer";
import { cn } from "./lib/utils";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStyles },
    { rel: "stylesheet", href: interFont },
    // { rel: "icon", type: "image/svg+xml", href: favicon },
  ];
};

export interface LoaderData {
  theme: Theme | null;
  ENV: {
    isProduction: boolean;
    umamiId: string;
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  const umamiId = process.env.UMAMI_ID || "";
  const isProduction = process.env.NODE_ENV === "production";
  return Response.json({
    ENV: {
      isProduction,
      umamiId,
    },
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
      <InnerLayout env={data!.ENV} ssrTheme={Boolean(data?.theme)}>
        {children}
      </InnerLayout>
    </ThemeProvider>
  );
}

function InnerLayout({
  ssrTheme,
  children,
  env,
}: {
  ssrTheme: boolean;
  children: React.ReactNode;
  env: LoaderData["ENV"];
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="px-6 sm:px-0">
          <AppLayout>{children}</AppLayout>
        </main>
        <Footer />
        <ScrollRestoration />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(ssrTheme)} />
        <Scripts />
        {env.isProduction ? (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={env.umamiId}
          ></script>
        ) : null}
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
