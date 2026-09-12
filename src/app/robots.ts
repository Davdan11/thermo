import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { sitemapIds } from "@/lib/seo/sitemaps";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // /api/og produit les images d'aperçu (og:image) des fiches : les robots de partage doivent pouvoir les lire.
        allow: ["/", "/api/og"],
        disallow: [
          "/api/",
          "/styleguide",
          // Liens personnels (confirmation, désabonnement) et résultats du questionnaire : rien à explorer.
          "/alertes-logisvert/",
          "/trouver-ma-thermopompe/resultats",
          // Résultats de recherche interne (paramètres de requête) : pages déjà en noindex, sans valeur propre.
          "/recherche?",
          "/*?*search=",
        ],
      },
    ],
    sitemap: [`${SITE_URL}/sitemap-index.xml`, ...sitemapIds().map((id) => `${SITE_URL}/sitemap/${id}.xml`)],
    host: SITE_URL,
  };
}
