import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { cn } from "@/lib/utils";
import { getOrganizationSchema, getWebSiteSchema, SITE_URL } from "@/lib/seo";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Thermopompe A Vendre.ca",
    default: "Thermopompe A Vendre.ca — Trouvez la bonne thermopompe. Au bon prix.",
  },
  description:
    "Comparez les thermopompes, comprenez les prix et les subventions, et trouvez la machine adaptée à votre propriété au Québec.",
  openGraph: {
    type: "website",
    siteName: "Thermopompe A Vendre.ca",
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
    <html lang="fr-CA" data-scroll-behavior="smooth" className={cn(inter.variable, outfit.variable, "font-sans", geist.variable)}>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}


