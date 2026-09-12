"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";

const ROUTES_WITHOUT_CHROME: string[] = [
  "/trouver-ma-thermopompe",
  "/soumission",
];

/* Le pied de page arrive du layout racine (composant serveur) : passé en prop, il reste rendu au serveur. */
export function SiteChrome({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = ROUTES_WITHOUT_CHROME.some((route) =>
    pathname.startsWith(route),
  );

  if (hideChrome) {
    // Parcours plein écran : pas d'en-tête, mais le pied de page reste
    // pour que ces pages, les plus liées du site, renvoient vers les autres sections.
    return (
      <>
        <div className="flex-1">{children}</div>
        {footer}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      {footer}
    </>
  );
}
