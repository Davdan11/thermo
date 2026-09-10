/* ==================================================================
   PriceSection — ordre de grandeur du prix installé pour cette fiche

   Fourchette publiée (type × calibre × gamme de marque), avant et après
   LogisVert, plus les prix d'équipement observés chez des détaillants
   canadiens quand ils existent. Jamais un prix par modèle inventé.
   ================================================================== */
import Link from "next/link";
import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { brandTier } from "@/lib/thermomatch/tiers";
import { installedPriceRange, money, PRICE_GRID_CONSULTED_AT } from "@/lib/prices/grille-installee";
import { observedPricesFor } from "@/lib/prices/observed";

export function PriceSection({ detail, logisVertDollars }: { detail: ProductDetail; logisVertDollars: number }) {
  const { model, brand } = detail;
  const range = installedPriceRange({
    systemType: model.systemType,
    nominalBtu: model.nominalCapacityBtu,
    zones: model.zones,
    brandTier: brandTier(brand.name),
  });
  const observed = observedPricesFor(model.slug);
  if (!range && observed.length === 0) return null;

  const rows: Array<{ label: string; value: string; note?: string }> = [];
  if (range) {
    rows.push({
      label: "Installée, ordre de grandeur",
      value: `${money(range.min)} à ${money(range.max)}`,
      note: `${range.kind === "centrale" ? "Centrale" : range.kind === "multizone" ? "Multizone" : "Murale"} ${range.matchLabel}, ${range.tierLabel}, installation standard, avant subvention. ${range.basis === "publie" ? `Médiane de ${range.sources} source${range.sources > 1 ? "s" : ""} publiée${range.sources > 1 ? "s" : ""}` : `Valeur ${range.note ?? "dérivée des calibres voisins"}`}.`,
    });
    if (logisVertDollars > 0) {
      rows.push({
        label: "Après LogisVert",
        value: `${money(Math.max(0, range.min - logisVertDollars))} à ${money(Math.max(0, range.max - logisVertDollars))}`,
        note: `Subvention officielle de ${logisVertDollars.toLocaleString("fr-CA")} $ pour le jumelage de référence, déduite de la fourchette.`,
      });
    }
  }
  const seen = new Set<string>();
  for (const o of observed.filter((x) => !seen.has(x.retailer) && seen.add(x.retailer)).slice(0, 3)) {
    rows.push({
      label: o.priceType === "ensemble" ? "Équipement observé (ensemble)" : o.priceType === "unite-interieure" ? "Unité intérieure observée" : "Unité extérieure observée",
      value: `${o.priceCad.toLocaleString("fr-CA")} $`,
      note: `${o.retailer}, le ${o.observedAt}${o.bundle ? ` · ${o.bundle}` : ""}. Prix de l'équipement seul, sans installation.`,
    });
  }

  return (
    <section aria-labelledby="prix-fiche" style={{ border: "1px solid #e4ddd5", background: "#fff", borderRadius: 10, overflow: "hidden" }}>
      <div style={{ padding: "22px 24px 6px", borderBottom: "1px solid #e4ddd5" }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e54b17" }}>Prix</p>
        <h2 id="prix-fiche" style={{ margin: "8px 0 6px", fontSize: 22, fontWeight: 800, letterSpacing: "-0.01em", color: "#071d2b", lineHeight: 1.2 }}>Ce que coûte ce type de machine, installé</h2>
        <p style={{ margin: "0 0 16px", fontSize: 13.5, color: "#536873", lineHeight: 1.55, maxWidth: 640 }}>
          Fourchettes tirées de prix publiés au Québec (Protégez-Vous, guides et installateurs qui affichent leurs prix), pour ce type, ce calibre et cette gamme de marque. Le prix exact de votre maison vient d&apos;une soumission écrite.
        </p>
      </div>
      <dl style={{ margin: 0, padding: "4px 24px" }}>
        {rows.map((r, i) => (
          <div key={`${r.label}-${i}`} className="grid grid-cols-1 sm:grid-cols-[minmax(150px,200px)_1fr] gap-1 sm:gap-4" style={{ padding: "14px 0", borderBottom: i < rows.length - 1 ? "1px solid #f0ebe4" : "none" }}>
            <dt style={{ fontSize: 13, fontWeight: 600, color: "#536873", paddingTop: 2 }}>{r.label}</dt>
            <dd style={{ margin: 0 }}>
              <p style={{ margin: 0, fontSize: 18, fontWeight: 800, color: "#071d2b", letterSpacing: "-0.01em", fontVariantNumeric: "tabular-nums" }}>{r.value}</p>
              {r.note && <p style={{ margin: "4px 0 0", fontSize: 13, color: "#536873", lineHeight: 1.55 }}>{r.note}</p>}
            </dd>
          </div>
        ))}
      </dl>
      <p style={{ margin: 0, padding: "12px 24px", borderTop: "1px solid #e4ddd5", background: "#faf8f4", fontSize: 12.5, color: "#536873", lineHeight: 1.55 }}>
        Sources consultées le {PRICE_GRID_CONSULTED_AT}, méthode et grille complète sur la <Link href="/prix" style={{ color: "#e54b17", fontWeight: 600 }}>page Prix</Link>. Le panneau électrique, l&apos;appoint, les conduits et les travaux d&apos;isolation s&apos;ajoutent selon la maison.
      </p>
    </section>
  );
}
