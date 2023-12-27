import "./styles/global.css";
import "focus-visible";
import { Inter, Bitter } from "next/font/google";
import { CONSTANTS } from "@/db/constants";
import { Metadata } from "next";
import Script from "next/script";
import { Footer, Header, Wrapper } from "./components";

export const metadata: Metadata = {
  metadataBase: new URL(CONSTANTS.baseUrl),
  title: {
    default: `${CONSTANTS.name}`,
    template: `%s | ${CONSTANTS.name}`,
  },
  description: `${CONSTANTS.description}`,
  openGraph: {
    title: `${CONSTANTS.name}`,
    description: `${CONSTANTS.description}`,
    url: `${CONSTANTS.baseUrl}`,
    siteName: `${CONSTANTS.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${CONSTANTS.baseUrl}${CONSTANTS.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.name}`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
});

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--bitter-font",
});

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bitter.variable} h-full antialiased`}
    >
      <body className="flex h-full flex-col bg-white dark:bg-gray-900">
        <Header />
        <main className="mt-4 px-6 sm:px-0">
          <Wrapper>{children}</Wrapper>
        </main>
        <Footer />
      </body>
      {CONSTANTS.isProduction && (
        <Script
          defer
          data-domain="ocordova.me"
          src="https://plausible.io/js/script.outbound-links.js"
        ></Script>
      )}
      <Script dangerouslySetInnerHTML={{ __html: modeScript }} />
    </html>
  );
}
