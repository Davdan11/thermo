/* eslint-disable react/no-unescaped-entities */
/* ==================================================================
   Bloc de maillage interne d'une fiche produit :
   - machines identiques vendues sous d'autres marques (rebadges)
   - page de la classe de capacité, de la marque par type, LogisVert
   - classements pertinents
   ================================================================== */

import Link from "next/link";
import { capacitySlug, getSeoModel, getSeoModels, CAPACITY_CLASSES } from "@/lib/seo/programmatic";

export function ProductSeoLinks({ slug }: { slug: string }) {
  const m = getSeoModel(slug);
  if (!m) return null;
  const rep = m.canonicalSlug === m.slug ? m : getSeoModel(m.canonicalSlug);
  const siblings = rep ? [rep, ...rep.alsoSoldAs.map((a) => getSeoModel(a.slug)).filter((x): x is NonNullable<typeof x> => !!x)] : [];
  const others = siblings.filter((x) => x.slug !== m.slug);
  const sameClass = getSeoModels()
    .filter((x) => x.canonicalSlug === x.slug && x.slug !== rep?.slug && x.nominalBtu === m.nominalBtu && x.kind === m.kind && x.brandSlug !== m.brandSlug)
    .sort((a, b) => (b.cop5 ?? 0) - (a.cop5 ?? 0))
    .slice(0, 4);
  const typeSlug = m.kind === "murale" ? "murales" : "centrales";

  return (
    <section style={{ marginTop: 40 }}>
      {others.length > 0 && (
        <div style={{ border: "1px solid #e4ddd5", background: "#fff", padding: 24, marginBottom: 24 }}>
          <h2 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700, color: "#071d2b" }}>Même machine, autres marques</h2>
          <p style={{ margin: "0 0 12px", fontSize: 14, color: "#536873", lineHeight: 1.6 }}>
            Ces fiches partagent exactement les mêmes données certifiées (capacité à -8 °C et -15 °C, COP, SEER2, HSPF2) : il s'agit
            selon toute vraisemblance du même appareil vendu sous une autre marque. Comparez le prix installé et la garantie.
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 8 }}>
            {others.map((x) => (
              <li key={x.slug}>
                <Link href={`/produit/${x.slug}`} style={{ display: "inline-block", border: "1px solid #e4ddd5", borderRadius: 6, padding: "6px 10px", fontSize: 13, color: "#071d2b", textDecoration: "none" }}>
                  {x.brand} {x.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {sameClass.length > 0 && (
        <div style={{ border: "1px solid #e4ddd5", background: "#fff", padding: 24, marginBottom: 24 }}>
          <h2 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 700, color: "#071d2b" }}>
            Autres {m.kind === "murale" ? "murales" : "centrales"} {m.nominalBtu.toLocaleString("fr-CA")} BTU, par COP à -15 °C
          </h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
            {sameClass.map((x) => (
              <li key={x.slug} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
                <Link href={`/produit/${x.slug}`} style={{ color: "#071d2b", textDecoration: "none", fontWeight: 600 }}>{x.brand} {x.name}</Link>
                <span style={{ color: "#536873" }}>
                  {x.cop5 !== null ? `COP ${x.cop5.toLocaleString("fr-CA", { minimumFractionDigits: 2 })}` : ""}
                  {x.h5Btu !== null ? ` · ${x.h5Btu.toLocaleString("fr-CA")} BTU/h à -15 °C` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {(CAPACITY_CLASSES as readonly number[]).includes(m.nominalBtu) && (
          <Link href={`/thermopompes/${capacitySlug(m.nominalBtu)}`} style={pill}>Toutes les thermopompes {m.nominalBtu.toLocaleString("fr-CA")} BTU</Link>
        )}
        <Link href={`/marques/${m.brandSlug}/${typeSlug}`} style={pill}>{m.kind === "murale" ? "Murales" : "Centrales"} {m.brand}</Link>
        {m.logisVertDollars > 0 && <Link href={`/subventions/logisvert/${m.brandSlug}`} style={pill}>Subvention LogisVert {m.brand}</Link>}
        {m.coldClimate && <Link href="/meilleures-thermopompes/grand-froid" style={pill}>Classement grand froid</Link>}
      </div>
    </section>
  );
}

const pill: React.CSSProperties = {
  display: "inline-block",
  border: "1px solid #e4ddd5",
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 13,
  fontWeight: 600,
  color: "#071d2b",
  background: "#fff",
  textDecoration: "none",
};
