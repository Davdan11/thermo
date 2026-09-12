import type { ProductDetail } from "@/lib/data/queries/product-detail";
import { lookupLogisVertFuzzy } from "@/lib/subsidies/logisvert-official";
import { calculateLogisVertSimple } from "@/lib/subsidies/logisvert-calculator";
import Image from "next/image";
import logisvertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { ArrowRule, CropMarks, DrawCheck, InViewTick, Reveal, Rule, SheetHead } from "@/components/sections-v2/produit/motion";
import { GREEN, INK, LABEL, LINE, MUTE } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   LogisVertBadge — official certified subsidy display
   Uses REAL AHRI-certified data from the government database.
   Falls back to formula calculation if no official match found.
   Présentation : feuille « Subvention » de la fiche d'ingénierie —
   la capacité certifiée, une flèche de calcul, le montant en vert
   qui défile (même vert que l'étiquette LogisVert du héros).
   ------------------------------------------------------------------ */

interface LogisVertBadgeProps {
  detail: ProductDetail;
}

export function LogisVertBadge({ detail }: LogisVertBadgeProps) {
  const { model, brand, isColdClimate, outdoorUnit } = detail;

  // --- Try to find official LogisVert amount from government data ---
  // Try outdoor unit MODEL NUMBER (not ID) from the configuration
  let officialEntry = outdoorUnit?.modelNumber
    ? lookupLogisVertFuzzy(outdoorUnit.modelNumber, brand.name)
    : null;

  // If not found, try the model number directly
  if (!officialEntry) {
    officialEntry = lookupLogisVertFuzzy(model.modelNumber, brand.name);
  }

  let dollars: number;
  let btu: number;
  let isOfficial: boolean;

  if (officialEntry) {
    // Use REAL data from Hydro-Québec
    dollars = officialEntry.logisVertDollars;
    btu = officialEntry.heatingBtu17F;
    isOfficial = true;
  } else {
    // Fallback: calculate from model capacity data
    const fallbackBtu =
      model.nominalCapacityBtu ??
      model.heatingCapacity5FMaxBtu ??
      model.coolingCapacityMaxBtu ??
      0;

    if (fallbackBtu <= 0) return null;

    const result = calculateLogisVertSimple(fallbackBtu, isColdClimate);
    dollars = result.dollars;
    btu = fallbackBtu;
    isOfficial = false;
  }

  if (dollars <= 0) return null;

  const updated = new Date(logisvertMetadata.updatedAt).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" });

  return (
    <section id="subvention-logisvert" aria-labelledby="logisvert-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead
        id="logisvert-title"
        kicker="Subvention"
        title="Programme LogisVert — Hydro-Québec"
        aside={<Image src="/images/hydroquebec.png" alt="Logo Hydro-Québec" width={32} height={32} style={{ width: 26, height: 26, maxWidth: "none", objectFit: "contain" }} />}
      />

      {/* Détail encadré : capacité certifiée → montant */}
      <div className="relative mt-7 p-5 sm:p-8" style={{ border: `1px solid ${LINE}` }}>
        <CropMarks />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
          <div className="min-w-0">
            <Reveal as="p" className="m-0 max-w-[560px] text-[15px] leading-[1.65]" style={{ color: MUTE }}>
              {isOfficial ? (
                <>
                  Montant officiel Hydro-Québec — capacité certifiée AHRI de <strong className="whitespace-nowrap" style={{ color: INK }}>{btu.toLocaleString("fr-CA")} BTU/h à -8 °C</strong>.
                </>
              ) : (
                <>
                  Montant estimé pour une capacité de <strong className="whitespace-nowrap" style={{ color: INK }}>{btu.toLocaleString("fr-CA")} BTU/h</strong>.
                </>
              )}
            </Reveal>

            <Reveal delay={0.15} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="sv2f-mono px-3 py-2 text-[12.5px]" style={{ border: `1px solid ${INK}` }}>
                <span style={{ color: LABEL }}>Capacité : </span>
                <span style={{ color: INK, fontWeight: 600 }}>{btu.toLocaleString("fr-CA")} BTU/h à -8 °C</span>
              </span>
              <span className="block min-w-[48px] flex-1">
                <ArrowRule color={GREEN} delay={0.35} />
              </span>
              <span className="sv2f-mono px-3 py-2 text-[12.5px] font-semibold" style={{ border: `1px solid ${GREEN}`, color: GREEN }}>
                {dollars.toLocaleString("fr-CA")} $
              </span>
            </Reveal>
            {isOfficial && (
              <Reveal delay={0.3} className="sv2f-mono mt-3 flex items-center gap-2 text-[11px] uppercase" style={{ color: GREEN, letterSpacing: "0.1em" }}>
                <DrawCheck color={GREEN} size={14} delay={0.9} />
                Vérifié Hydro-Québec
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1} className="min-w-0 lg:min-w-[260px] lg:text-right">
            <p className="sv2f-mono m-0 text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: LABEL }}>
              {isOfficial ? "Montant officiel" : "Montant estimé"}
            </p>
            <p className="sv2f-mono m-0 mt-2 whitespace-nowrap" style={{ color: GREEN, fontSize: "clamp(48px, 5.4vw, 84px)", fontWeight: 500, letterSpacing: "-0.065em", lineHeight: 0.95 }}>
              <InViewTick value={dollars} duration={1.6} />
              &nbsp;$
            </p>
            <Rule color={GREEN} className="mt-4" delay={0.6} origin="right" />
          </Reveal>
        </div>
      </div>

      {/* Disclaimer */}
      <Reveal as="p" delay={0.1} className="m-0 mt-5 max-w-[780px] text-[12.5px] leading-[1.6]" style={{ color: LABEL }}>
        {isOfficial
          ? "Montant officiel tiré directement de la liste des thermopompes admissibles d’Hydro-Québec."
          : "Montant estimatif basé sur la capacité du modèle. Consultez le portail LogisVert pour le montant exact."}{" "}
        <a
          href="https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2"
          style={{ color: INK, textDecorationColor: GREEN }}
        >
          Consultez les conditions complètes sur le portail LogisVert
        </a>
        .
        <br />
        <span className="sv2f-mono mt-1.5 inline-block text-[11px]" style={{ color: LABEL }}>
          * Dernière mise à jour de la base de données : {updated}
        </span>
      </Reveal>
    </section>
  );
}
