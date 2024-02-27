import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => {
    return [
      {
        source: "/blog/telegram-bot-with-apps-script",
        destination: "/thoughts/telegram-bot-with-apps-script",
        permanent: true,
      },
      {
        source: "/writing/telegram-bot-with-apps-script",
        destination: "/thoughts/telegram-bot-with-apps-script",
        permanent: true,
      },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
