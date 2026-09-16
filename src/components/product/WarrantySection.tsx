import type { ReactNode } from "react";
import type { SystemType } from "@/lib/data/types/enums";
import {
  WARRANTY_UNVERIFIED,
  warrantyLaborLabel,
  warrantyMatchLabel,
  warrantyQuebecLabel,
  warrantyRegistrationLabel,
  warrantySourceLabel,
  warrantyWithoutRegistrationLabel,
  type ResolvedWarranty,
} from "@/lib/data/warranty";
import { MentionGarantieLegale } from "@/components/garantie-legale/MentionGarantieLegale";
import { GrowBar, Reveal, SheetHead } from "@/components/sections-v2/produit/motion";
import { AMBER, INK, LABEL, LINE, MUTE, ORANGE, WASH } from "@/components/sections-v2/produit/tokens";

/* ------------------------------------------------------------------
   WarrantySection — la garantie du fabricant, telle qu'elle est écrite
   dans son document.

   Une durée ne s'affiche que si elle vient d'un relevé de document
   (src/lib/data/warranty.ts). Sans relevé : aucun chiffre, on le dit.
   La garantie légale de bon fonctionnement du Québec est rappelée à
   part : elle vient de la loi, pas du fabricant.
   ------------------------------------------------------------------ */

interface WarrantySectionProps {
  /** Garantie relevée pour cette fiche, ou null si aucun document ne la couvre. */
  warranty: ResolvedWarranty | null;
  systemType: SystemType;
  zones?: number | null;
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

/** Rappel de la garantie légale du Québec, à ne pas confondre avec celle du fabricant. */
function GarantieLegale({ systemType, zones }: { systemType: SystemType; zones?: number | null }) {
  return (
    <Reveal as="div" className="mt-6">
      <p className="m-0 text-[13px] leading-[1.6]" style={{ color: LABEL }}>
        En plus de la garantie du fabricant, la Loi sur la protection du consommateur prévoit une garantie légale de bon
        fonctionnement pour une thermopompe neuve. Elle vient de la loi, pas du fabricant, et s&apos;ajoute à ce qui est écrit
        ci-dessus.
      </p>
      <MentionGarantieLegale
        cible={{ systemType, zones }}
        className="sv2f-mono m-0 mt-1.5 text-[11px] uppercase"
        style={{ letterSpacing: "0.08em", color: INK }}
        lienStyle={{ color: INK, textDecorationColor: ORANGE }}
      />
    </Reveal>
  );
}

export function WarrantySection({ warranty, systemType, zones }: WarrantySectionProps) {
  /* ---- Aucun document : aucune durée, et on le dit ---- */
  if (!warranty) {
    return (
      <section id="garantie" aria-labelledby="garantie-title" style={{ scrollMarginTop: 110 }}>
        <SheetHead
          id="garantie-title"
          kicker="Garanties"
          title={
            <>
              Garanties{" "}
              <span className="align-middle text-[15px] font-normal" style={{ color: LABEL, letterSpacing: "-0.01em" }}>
                (non vérifiées)
              </span>
            </>
          }
        />
        <Note>
          {WARRANTY_UNVERIFIED}.
          <br />
          Nous n&apos;avons pas trouvé de certificat du fabricant qui vise ce modèle. Plutôt que d&apos;afficher une durée
          habituelle, nous n&apos;en affichons aucune. <strong>Demandez le certificat écrit au fabricant et à l&apos;installateur
          avant de signer.</strong>
        </Note>
        <GarantieLegale systemType={systemType} zones={zones} />
      </section>
    );
  }

  const w = warranty.record;
  const lignes: { type: string; label: string; years: number }[] = [
    { type: "parts", label: "Pièces", years: w.partsYears },
  ];
  if (w.compressorYears != null) lignes.push({ type: "compressor", label: "Compresseur", years: w.compressorYears });
  if (w.laborYears != null && w.laborYears > 0) lignes.push({ type: "labor", label: "Main-d'œuvre", years: w.laborYears });

  // Échelle : 0 à la plus longue durée (au moins 10 ans), arrondie à l'année paire.
  const scale = Math.ceil(Math.max(10, ...lignes.map((l) => l.years)) / 2) * 2;
  const years = Array.from({ length: scale + 1 }, (_, i) => i);
  const grid = "grid grid-cols-1 gap-3 sm:grid-cols-[minmax(120px,170px)_minmax(0,1fr)_64px] sm:items-center sm:gap-6";

  const enregistrement = warrantyRegistrationLabel(w);
  const sansEnregistrement = warrantyWithoutRegistrationLabel(w);
  const quebec = warrantyQuebecLabel(w);
  const mainOeuvre = warrantyLaborLabel(w);

  return (
    <section id="garantie" aria-labelledby="garantie-title" style={{ scrollMarginTop: 110 }}>
      <SheetHead id="garantie-title" kicker="Garanties" title="Garanties du fabricant" />

      <Reveal as="p" className="m-0 mt-3 text-[13.5px] leading-[1.6]" style={{ color: MUTE }}>
        {warrantyMatchLabel(warranty)}
        {w.scopeText ? ` — ${w.scopeText}` : ""}
      </Reveal>

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
        {lignes.map((l, i) => (
          <Reveal as="li" key={l.type} delay={0.08 * i} y={10} className={`sv2f-tr ${grid} py-5 pl-3 pr-2`} style={{ borderBottom: `1px solid ${LINE}` }}>
            <div className="min-w-0">
              <p className="m-0 text-[16px] font-semibold" style={{ color: INK, letterSpacing: "-0.015em" }}>
                {l.label}
              </p>
              <p className="sv2f-mono m-0 mt-1 text-[11px]" style={{ color: LABEL }}>
                Fournisseur : Fabricant
              </p>
            </div>
            <div className="min-w-0">
              <GrowBar pct={(l.years / scale) * 100} color={INK} height={6} track={WASH} delay={0.15 + 0.1 * i} />
              {l.type === "parts" && enregistrement && (
                <p className="sv2f-mono m-0 mt-2.5 text-[11px] uppercase" style={{ color: AMBER, letterSpacing: "0.08em" }}>
                  {enregistrement}
                </p>
              )}
            </div>
            <p className="sv2f-mono m-0 text-[17px] sm:text-right" style={{ color: INK, fontWeight: 500, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>
              {l.years} {l.years > 1 ? "ans" : "an"}
            </p>
          </Reveal>
        ))}
      </ul>

      {/* Ce que le document dit d'autre : compresseur non précisé, enregistrement, Québec, main-d'œuvre, conditions */}
      <Reveal as="ul" className="m-0 mt-5 flex list-none flex-col gap-2 p-0 text-[13.5px] leading-[1.6]" style={{ color: INK }}>
        {w.compressorYears == null && (
          <li>Le document ne donne pas de durée distincte pour le compresseur.</li>
        )}
        {sansEnregistrement && <li>{sansEnregistrement}</li>}
        {quebec && <li>{quebec}</li>}
        {mainOeuvre && <li>{mainOeuvre}</li>}
        {w.conditions && <li style={{ color: MUTE }}>{w.conditions}</li>}
      </Reveal>

      {/* Source : le document, sa citation, et sa nature */}
      <Reveal as="div" className="mt-6 py-3.5 pl-4 pr-4" style={{ borderLeft: `2px solid ${LINE}`, background: WASH }}>
        <p className="sv2f-mono m-0 text-[11px] uppercase" style={{ color: LABEL, letterSpacing: "0.12em" }}>
          {warrantySourceLabel(w)}
        </p>
        <p className="m-0 mt-2 text-[13.5px] leading-[1.6]" style={{ color: INK }}>
          «&nbsp;{w.quote}&nbsp;»
        </p>
        <p className="m-0 mt-2 text-[13px]">
          <a href={w.sourceFile} target="_blank" rel="noopener noreferrer" className="underline decoration-1 underline-offset-2" style={{ color: INK, textDecorationColor: ORANGE }}>
            Voir le document du fabricant
          </a>
          {w.sourceType === "secondaire" && (
            <span style={{ color: MUTE }}> — reproduite par un distributeur, pas téléchargée du site du fabricant.</span>
          )}
          {w.country === "US" && (
            <span style={{ color: MUTE }}> Document américain : la couverture au Canada reste à confirmer avec l&apos;installateur.</span>
          )}
        </p>
      </Reveal>

      <Reveal as="p" className="m-0 mt-4 text-[12.5px] leading-[1.6]" style={{ color: LABEL }}>
        Ces durées sont celles du document cité, à la date où nous l&apos;avons lu. Les conditions exactes peuvent varier :
        exigez la garantie écrite du fabricant et de l&apos;installateur avant de signer.
      </Reveal>

      <GarantieLegale systemType={systemType} zones={zones} />
    </section>
  );
}
