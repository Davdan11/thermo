/* ==================================================================
   PriceSection — ordre de grandeur du prix installé pour cette fiche

   Fourchette publiée (type × calibre × gamme de marque), avant et après
   LogisVert, plus les prix d'équipement observés chez des détaillants
   canadiens quand ils existent. Jamais un prix par modèle inventé.
   Présentation : feuille « Prix » — la fourchette est cotée au trait,
   puis la même fourchette glisse du montant LogisVert.
   ================================================================== */
import Link from "next/link";
import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { brandTier } from "@/lib/thermomatch/tiers";
import { installedPriceRange, money, PRICE_GRID_CONSULTED_AT } from "@/lib/prices/grille-installee";
import { observedPricesFor } from "@/lib/prices/observed";
import { QuoteForModelLink } from "./QuoteForModelLink";
import { PriceRanges } from "@/components/sections-v2/produit/charts";
import { Arrow, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { GREEN, INK, LABEL, LINE, MUTE, ORANGE } from "@/components/sections-v2/produit/tokens";

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

  const rows: Array<{ label: string; value: string; note?: string; tone?: "lv" }> = [];
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
        tone: "lv",
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

  const lv = range && logisVertDollars > 0 ? logisVertDollars : 0;

  return (
    <section aria-labelledby="prix-fiche">
      <SheetHead
        id="prix-fiche"
        kicker="Prix"
        title="Ce que coûte ce type de machine, installé"
        lead={
          <>
            Fourchettes tirées de prix publiés au Québec (Protégez-Vous, guides et installateurs qui affichent leurs prix), pour ce type, ce calibre et cette gamme de marque. Le prix exact de votre maison vient d&apos;une soumission écrite.
          </>
        }
      />

      {range && (
        <div className="mt-8 px-1">
          <PriceRanges
            min={range.min}
            max={range.max}
            lv={lv}
            labels={{
              min: money(range.min),
              max: money(range.max),
              afterMin: money(Math.max(0, range.min - lv)),
              afterMax: money(Math.max(0, range.max - lv)),
              lv: `− ${lv.toLocaleString("fr-CA")} $`,
            }}
          />
        </div>
      )}

      <dl className="m-0 mt-7" style={{ borderTop: `1px solid ${INK}` }}>
        {rows.map((r, i) => (
          <Reveal
            key={`${r.label}-${i}`}
            delay={0.06 * i}
            y={10}
            className="sv2f-tr grid grid-cols-1 gap-1.5 py-4 pl-3 pr-2 sm:grid-cols-[minmax(170px,230px)_1fr] sm:gap-6 sm:pl-4"
            style={{ borderBottom: `1px solid ${LINE}` }}
          >
            <dt className="sv2f-mono pt-1.5 text-[10.5px] uppercase" style={{ letterSpacing: "0.1em", color: LABEL }}>
              {r.label}
            </dt>
            <dd className="m-0">
              <p className="sv2f-mono m-0 text-[20px] sm:text-[24px]" style={{ color: r.tone === "lv" ? GREEN : INK, fontWeight: 500, letterSpacing: "-0.045em", lineHeight: 1.2 }}>
                {r.value}
              </p>
              {r.note && (
                <p className="m-0 mt-1.5 max-w-[640px] text-[13.5px] leading-[1.55]" style={{ color: MUTE }}>
                  {r.note}
                </p>
              )}
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={0.1} className="sv2f-dark mt-6 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7" style={{ background: INK, color: "#fff" }}>
        <div className="min-w-0 flex-1">
          <p className="m-0 text-[17px] font-semibold" style={{ letterSpacing: "-0.02em" }}>
            {observed.length === 0 ? "Aucun prix public pour ce modèle : demandez le vôtre." : "Le prix exact dépend de votre maison."}
          </p>
          <p className="m-0 mt-1.5 text-[13.5px] leading-[1.55]" style={{ color: "rgba(255,255,255,.7)" }}>
            {observed.length === 0
              ? `${brand.name} vend par installateurs agréés, sans prix affiché en ligne. Un conseiller vous donne un prix installé pour ce modèle, subvention déduite.`
              : "Un conseiller confirme le prix installé de ce modèle pour votre maison, subvention LogisVert déduite."}
          </p>
        </div>
        <QuoteForModelLink
          modelId={model.id}
          brandName={brand.name}
          systemType={model.systemType}
          className="sv2f-btn sv2f-orange inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-[3px] no-underline"
          style={{ padding: "14px 20px", fontSize: 15, fontWeight: 600, color: "#fff", background: ORANGE }}
        >
          Obtenir un prix pour ce modèle
          <Arrow />
        </QuoteForModelLink>
      </Reveal>

      <Reveal as="p" delay={0.1} className="m-0 mt-4 text-[12.5px] leading-[1.6]" style={{ color: LABEL }}>
        <span className="sv2f-mono" style={{ color: INK }}>
          Note —{" "}
        </span>
        Sources consultées le {PRICE_GRID_CONSULTED_AT}, méthode et grille complète sur la{" "}
        <Link href="/prix" className="font-semibold underline underline-offset-2" style={{ color: INK, textDecorationColor: ORANGE }}>
          page Prix
        </Link>
        . Le panneau électrique, l&apos;appoint, les conduits et les travaux d&apos;isolation s&apos;ajoutent selon la maison.
      </Reveal>
    </section>
  );
}
