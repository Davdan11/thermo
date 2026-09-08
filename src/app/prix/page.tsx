import type { Metadata } from "next";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { Container } from "@/components/layout";
import { EstimatorLoader } from "@/components/pricing/EstimatorLoader";

/* ------------------------------------------------------------------
   SEO
   ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Estimateur de prix",
  description:
    "Estimez le coût d'installation d'une thermopompe au Québec. Fourchette indicative selon votre projet, votre habitation et vos contraintes d'installation.",
  alternates: {
    canonical: "/prix",
  },
};

/* ------------------------------------------------------------------
   Page
   ------------------------------------------------------------------ */

export default function PrixPage() {
  return (
    <main>
      <Container className="max-w-3xl py-10">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Estimateur de prix" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-3">
          Estimateur de prix
        </h1>

        <p className="text-base text-muted mb-8 max-w-lg">
          Obtenez une fourchette indicative du coût d&apos;installation d&apos;une thermopompe
          selon votre projet. L&apos;estimation est gratuite, anonyme et sans engagement.
        </p>

        <div className="bg-surface rounded-lg border border-border p-5 mb-8">
          <p className="text-sm text-muted leading-relaxed">
            Cet outil fournit une estimation indicative basée sur les données
            disponibles dans notre catalogue. Il ne remplace pas une soumission
            personnalisée par un installateur certifié. Les prix réels varient
            selon les conditions spécifiques de votre projet.
          </p>
        </div>
      </Container>

      <EstimatorLoader />
    </main>
  );
}

