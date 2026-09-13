import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { getOrganizationSchema, getWebSiteSchema, jsonLdString, SITE_URL } from "@/lib/seo";
import { UTMProvider } from "@/components/providers/UTMProvider";
import { Analytics } from "@/components/analytics/Analytics";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { AssistantLauncher } from "@/components/assistant/AssistantLauncher";
import { isAssistantEnabled } from "@/lib/assistant/config";
import { PauseOffscreenAnimations } from "@/components/providers/PauseOffscreenAnimations";
import { Suspense } from "react";
import { displayFont, serifFont } from "@/lib/fonts";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const inter = Inter({
  // Jamais rendue (--font-sans et --font-display pointent sur Geist et Inter Tight) : déclarée, pas préchargée.
  preload: false,
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  preload: false,
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | TAV.ca",
    default: "Thermopompes À Vendre.ca : trouvez la bonne thermopompe",
  },
  description:
    "Comparez les thermopompes vendues au Québec avec les données officielles d'Hydro-Québec, vérifiez la subvention LogisVert et obtenez une soumission.",
  openGraph: {
    type: "website",
    siteName: "Thermopompes À Vendre.ca",
    locale: "fr_CA",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" data-scroll-behavior="smooth" className={cn(inter.variable, outfit.variable, "font-sans", geist.variable, displayFont.variable, serifFont.variable)}>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(getWebSiteSchema()) }}
        />
        {/* Mesure d'audience, consentement et assistant : rendus par SiteChrome, sauf sur l'outil de gestion privé (/gestion, /job). */}
        <SiteChrome
          footer={<Footer />}
          extras={
            <>
              <Analytics />
              <ConsentBanner />
              {/* Assistant : seulement si l’assistant a un fournisseur (clé Claude, ou Gemini activé exprès) ; le panneau se charge au premier clic. */}
              {isAssistantEnabled() && <AssistantLauncher />}
            </>
          }
        >
          {children}
        </SiteChrome>
        <Suspense fallback={null}>
          <UTMProvider />
        </Suspense>
        <PauseOffscreenAnimations />
      </body>
    </html>
  );
}


