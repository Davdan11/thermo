import type { ReactNode } from "react";
import type { Warranty } from "@/lib/data/types";
import { GrowBar, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { AMBER, INK, LABEL, LINE, MUTE, ORANGE, WASH } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   WarrantySection — warranties with conditions clearly shown
   Présentation : feuille « Garanties » — une règle graduée en années,
   chaque garantie en barre à l'échelle.
   ------------------------------------------------------------------ */

const WARRANTY_LABELS: Record<string, string> = {
  parts: "Pièces",
  compressor: "Compresseur",
  labor: "Main-d'œuvre",
  replacement: "Remplacement",
};

const PROVIDER_LABELS: Record<string, string> = {
  manufacturer: "Fabricant",
  installer: "Installateur",
  third_party: "Tiers",
};

interface WarrantySectionProps {
  warranties: Warranty[];
}

function Note({ children }: { children: ReactNode }) {
  return (
    <Reveal className="mt-6 flex flex-col gap-2 py-3.5 pl-4 pr-4 text-[13.5px] leading-[1.6] sm:flex-row sm:gap-4" style={{ borderLeft: `2px solid ${ORANGE}`, background: "#FBF3EF", color: INK }}>
      <span className="sv2f-mono shrink-0 pt-[2px] text-[11px] uppercase" style={{ color: ORANGE, letterSpacing: "0.12em" }}>
        Note
      </span>
      <div>{children}</div>
    </Reveal>
  );
}

export function WarrantySection({ warranties }: WarrantySectionProps) {
  // Deduplicate warranties — same type + duration + modelId = same warranty
  const seen = new Set<string>();
  let uniqueWarranties = warranties.filter((w) => {
    const key = `${w.type}-${w.durationYears}-${(w as any).modelId ?? ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Garanties « estimées » (valeurs par défaut de l'import, non vérifiées auprès du fabricant)
  const allEstimated = uniqueWarranties.length > 0 && uniqueWarranties.every((w) => (w as { confidence?: string }).confidence === "estimated");

  // Fallback if no warranties are specified in the dataset
  const hasFallback = uniqueWarranties.length === 0;
  if (hasFallback) {
    uniqueWarranties = [
      { id: "fallback-parts", type: "parts", durationYears: 10, provider: "manufacturer", requiresRegistration: true, modelId: "" } as any,
      { id: "fallback-comp", type: "compressor", durationYears: 10, provider: "manufacturer", requiresRegistration: true, modelId: "" } as any,
    ];
  }

  // Échelle : 0 à la plus longue garantie (au moins 10 ans), arrondie à l'année paire.
  const scale = Math.ceil(Math.max(10, ...uniqueWarranties.map((w) => w.durationYears)) / 2) * 2;
  const years = Array.from({ length: scale + 1 }, (_, i) => i);
  const grid = "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(120px,170px)_minmax(0,1fr)_64px] sm:items-center sm:gap-6";

  return (
    <section id="garantie" aria-labelledby="garantie-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead
        id="garantie-title"
        kicker="Garanties"
        title={
          <>
            Garanties{" "}
            {(hasFallback || allEstimated) && (
              <span className="align-middle text-[15px] font-normal" style={{ color: LABEL, letterSpacing: "-0.01em" }}>
                (estimation, non vérifiée)
              </span>
            )}
          </>
        }
      />

      {allEstimated && !hasFallback && (
        <Note>
          Ces durées sont les valeurs habituelles de la marque, pas la garantie confirmée pour ce modèle précis.
          <br />
          <strong>Exigez la garantie écrite du fabricant et de l&apos;installateur avant de signer.</strong>
        </Note>
      )}

      {hasFallback && (
        <Note>
          Les garanties exactes pour ce modèle ne sont pas spécifiées. Voici les standards habituels de l&apos;industrie. <br />
          <strong>À vérifier avec l&apos;installateur.</strong>
        </Note>
      )}

      {/* Règle des années (décor) */}
      <div aria-hidden="true" className={`${grid} mt-8 hidden sm:grid`}>
        <span />
        <Reveal y={0} className="relative h-7">
          {years.map((y) => (
            <span key={y} className="absolute bottom-0" style={{ left: `${(y / scale) * 100}%` }}>
              <span className="absolute bottom-0 block w-px" style={{ height: y % 2 === 0 ? 8 : 4, background: INK }} />
              {y % 2 === 0 && (
                <span className="sv2f-mono absolute bottom-3 block -translate-x-1/2 text-[10.5px]" style={{ color: LABEL }}>
                  {y}
                </span>
              )}
            </span>
          ))}
        </Reveal>
        <span className="sv2f-mono self-end text-[10.5px] uppercase" style={{ color: LABEL, letterSpacing: "0.1em" }}>
          ans
        </span>
      </div>

      <ul className="m-0 mt-2 list-none p-0" style={{ borderTop: `1px solid ${INK}` }}>
        {uniqueWarranties.map((w, i) => (
          <Reveal as="li" key={w.id} delay={0.08 * i} y={10} className={`sv2f-tr ${grid} py-5 pl-3 pr-2`} style={{ borderBottom: `1px solid ${LINE}` }}>
            <div className="min-w-0">
              <p className="m-0 text-[16px] font-semibold" style={{ color: INK, letterSpacing: "-0.015em" }}>
                {WARRANTY_LABELS[w.type] ?? w.type}
              </p>
              <p className="sv2f-mono m-0 mt-1 text-[11px]" style={{ color: LABEL }}>
                Fournisseur : {PROVIDER_LABELS[w.provider] ?? w.provider}
              </p>
            </div>
            <div className="min-w-0">
              <GrowBar pct={(w.durationYears / scale) * 100} color={INK} height={6} track={WASH} delay={0.15 + 0.1 * i} />
              {(w.requiresRegistration || w.conditions) && (
                <div className="mt-2.5 flex flex-col gap-1">
                  {w.requiresRegistration && (
                    <p className="sv2f-mono m-0 text-[11px] uppercase" style={{ color: AMBER, letterSpacing: "0.08em" }}>
                      Enregistrement requis
                    </p>
                  )}
                  {w.conditions && (
                    <p className="m-0 text-[12.5px] leading-[1.5]" style={{ color: MUTE }}>
                      {w.conditions}
                    </p>
                  )}
                </div>
              )}
            </div>
            <p className="sv2f-mono m-0 text-[17px] sm:text-right" style={{ color: INK, fontWeight: 500, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>
              {w.durationYears} ans
            </p>
          </Reveal>
        ))}
      </ul>

      {!hasFallback && (
        <Reveal as="p" className="m-0 mt-4 text-[12.5px] leading-[1.6]" style={{ color: LABEL }}>
          Les durées affichées correspondent aux informations publiées par le fabricant. Les conditions exactes peuvent varier.
        </Reveal>
      )}
    </section>
  );
}
