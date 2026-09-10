"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

const ROUTES_WITHOUT_CHROME: string[] = [
  "/trouver-ma-thermopompe",
  "/soumission",
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = ROUTES_WITHOUT_CHROME.some((route) =>
    pathname.startsWith(route),
  );

  if (hideChrome) {
    // Parcours plein écran : pas d'en-tête ni de barre mobile, mais le pied de page reste
    // pour que ces pages, les plus liées du site, renvoient vers les autres sections.
    return (
      <>
        <div className="flex-1">{children}</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex-1 pb-[76px] md:pb-0">{children}</div>
      <Footer />
      <MobileActionBar />
    </>
  );
}
