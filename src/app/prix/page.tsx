import { Breadcrumb } from "@/components/product/Breadcrumb";
import { Container } from "@/components/layout";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { PrixApproche, getPrixFaqSchema } from "@/components/prix/PrixApproche";

/* ------------------------------------------------------------------
   /prix — Prix d'une thermopompe : notre approche.
   Aucun prix publié : le coût installé se fait cas par cas, maison par
   maison, par un installateur partenaire licencié. Cette page documente
   ce qui fait varier le prix et ce qu'une soumission doit contenir.
   ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: "Prix d'une thermopompe au Québec : pourquoi c'est cas par cas",
  description:
    "Pourquoi nous ne publions pas de prix, ce qui fait varier le coût installé d'une thermopompe au Québec, et comment obtenir une soumission écrite pour votre maison.",
  canonicalPath: "/prix",
});

export default function PrixPage() {
  return (
    <main>
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Prix : notre approche", url: "/prix" }])} />
      <JsonLd data={getPrixFaqSchema()} />
      <Container className="max-w-3xl py-10">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Prix : notre approche" }]} />

        <p className="mt-6 mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#e54b17]">Prix et coûts</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Prix d&apos;une thermopompe au Québec : pourquoi c&apos;est cas par cas</h1>
        <p className="text-lg text-muted mb-10 max-w-2xl leading-relaxed">
          Nous ne publions aucun prix. Chaque maison reçoit un prix écrit, remis par un installateur partenaire licencié après évaluation. Voici
          ce qui fait varier le coût, ce qu&apos;une soumission sérieuse doit contenir, et comment ça se passe avec nous.
        </p>

        <PrixApproche keyword="une thermopompe au Québec" />
      </Container>
    </main>
  );
}
