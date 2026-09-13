"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";

/* Outil de gestion privé et pages de réponse des installateurs : aucun élément du site public
   (en-tête, pied de page, mesure d'audience, bannière de consentement, assistant). */
const PRIVATE_ROUTES: string[] = ["/gestion", "/job"];

const ROUTES_WITHOUT_CHROME: string[] = [
  "/trouver-ma-thermopompe",
  "/soumission",
];

/* Le pied de page arrive du layout racine (composant serveur) : passé en prop, il reste rendu au serveur.
   `extras` : mesure d'audience, bannière de consentement et assistant, absents des routes privées. */
export function SiteChrome({ children, footer, extras }: { children: React.ReactNode; footer: React.ReactNode; extras?: React.ReactNode }) {
  const pathname = usePathname();
  if (PRIVATE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    return <div className="flex-1">{children}</div>;
  }
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
        {extras}
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      {footer}
      {extras}
    </>
  );
}
