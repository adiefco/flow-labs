import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kairos",
    short_name: "Kairos",
    description: "A casa digital da sua igreja.",
    start_url: "/kairos",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#A7C7E7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}