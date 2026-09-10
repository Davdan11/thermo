import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { sitemapIds } from "@/lib/seo/sitemaps";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/styleguide"],
      },
    ],
    sitemap: [`${SITE_URL}/sitemap-index.xml`, ...sitemapIds().map((id) => `${SITE_URL}/sitemap/${id}.xml`)],
    host: SITE_URL,
  };
}
