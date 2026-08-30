"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
