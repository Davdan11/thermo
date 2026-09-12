import type { Metadata } from "next";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { searchSite, type SearchKind } from "@/lib/search/site-search";
import { PageBlanche } from "@/components/heroes-v2/produit/PageBlanche";
import { ResultsIndex } from "@/components/sections-v2/produit/Recherche";

/* /recherche?q=… — page de résultats complète (Entrée dans le champ de l'en-tête). Non indexée.
   Sous le héros « Page blanche », les résultats forment un index éditorial (sections-v2/produit/Recherche). */

export const metadata: Metadata = {
  title: "Recherche",
  robots: { index: false, follow: true },
};

const KIND_LABEL: Record<SearchKind, string> = { modele: "Modèles", marque: "Marques", ville: "Villes", guide: "Guides", page: "Pages" };
const ORDER: SearchKind[] = ["modele", "marque", "ville", "guide", "page"];

export default async function RecherchePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const q = (typeof params.q === "string" ? params.q : "").slice(0, 80).trim();
  const hits = q ? searchSite(q, 40) : [];
  const groups = ORDER.map((k) => ({ kind: k, items: hits.filter((h) => h.kind === k) })).filter((g) => g.items.length);

  return (
    <main style={{ background: "#F3F2EF" }}>
      <PageBlanche
        q={q}
        total={hits.length}
        counts={groups.map((g) => ({ kind: g.kind, label: KIND_LABEL[g.kind], n: g.items.length }))}
        thumbs={hits.filter((h) => h.kind === "modele" && h.imageUrl).slice(0, 4).map((h) => ({ href: h.href, img: h.imageUrl as string, title: h.title }))}
        crumbs={<Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Recherche" }]} />}
      />
      {q && <ResultsIndex empty={hits.length === 0} groups={groups.map((g) => ({ kind: g.kind, label: KIND_LABEL[g.kind], items: g.items }))} />}
    </main>
  );
}
