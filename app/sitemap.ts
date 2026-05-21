import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://flow-labs.digital",
      lastModified: new Date(),
    },
    {
      url: "https://flow-labs.digital/kairos",
      lastModified: new Date(),
    },
  ];
}