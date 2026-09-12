import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout";
import { Breadcrumb } from "@/components/product/Breadcrumb";
import { searchSite, type SearchKind } from "@/lib/search/site-search";
import { PageBlanche } from "@/components/heroes-v2/produit/PageBlanche";

/* /recherche?q=… — page de résultats complète (Entrée dans le champ de l'en-tête). Non indexée. */

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
    <main>
      <PageBlanche
        q={q}
        total={hits.length}
        counts={groups.map((g) => ({ kind: g.kind, label: KIND_LABEL[g.kind], n: g.items.length }))}
        thumbs={hits.filter((h) => h.kind === "modele" && h.imageUrl).slice(0, 4).map((h) => ({ href: h.href, img: h.imageUrl as string, title: h.title }))}
        crumbs={<Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Recherche" }]} />}
      />
      {q && (
      <Container className="max-w-4xl pb-10 pt-2">
        {q && hits.length === 0 && (
          <p className="mt-8 text-[16px]" style={{ color: "#536873" }}>
            Aucun résultat. Essayez un nom de marque, un numéro de modèle (par exemple MUZ-FS12NA) ou une ville, ou passez par le <Link href="/thermopompes" className="font-semibold underline underline-offset-4" style={{ color: "#071d2b" }}>catalogue</Link>.
          </p>
        )}

        {groups.map((g) => (
          <section key={g.kind} id={`resultats-${g.kind}`} className="mt-10" style={{ scrollMarginTop: 110 }}>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: "#e54b17" }}>{KIND_LABEL[g.kind]}</h2>
            <ul className="divide-y rounded-2xl overflow-hidden" style={{ border: "1px solid #e4ddd5", background: "#fff", borderColor: "#e4ddd5" }}>
              {g.items.map((h) => (
                <li key={h.href} style={{ borderColor: "#f0ebe4" }}>
                  <Link href={h.href} className="flex items-center gap-4 px-5 py-4 no-underline hover:bg-[#faf8f4] transition-colors">
                    {h.kind === "modele" && h.imageUrl && (
                      <span className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0 overflow-hidden" style={{ background: "#fff", border: "1px solid #ebe5dc" }}>
                        <img src={h.imageUrl} alt="" width={56} height={56} loading="lazy" style={{ objectFit: "contain", width: 48, height: 48 }} />
                      </span>
                    )}
                    <span className="min-w-0">
                      <span className="block text-[16px] font-semibold" style={{ color: "#071d2b" }}>{h.title}</span>
                      {h.subtitle && <span className="block text-[13.5px] mt-0.5" style={{ color: "#536873" }}>{h.subtitle}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
      )}
    </main>
  );
}
