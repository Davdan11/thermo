import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Geist } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { cn } from "@/lib/utils";

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
  title: {
    template: "%s | ThermopompesÀVendre.ca",
    default: "ThermopompesÀVendre.ca — Trouvez la bonne thermopompe. Au bon prix.",
  },
  description:
    "Comparez les thermopompes, comprenez les prix et les subventions, et trouvez la machine adaptée à votre propriété au Québec.",
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

