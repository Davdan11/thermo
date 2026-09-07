import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/styleguide",
          "/espace-installateur",
          "/soumission/confirmation",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://thermopompeavendre.ca/sitemap.xml",
  };
}
