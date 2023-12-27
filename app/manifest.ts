import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Óscar Córdova",
    short_name: "Ós",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicons/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
