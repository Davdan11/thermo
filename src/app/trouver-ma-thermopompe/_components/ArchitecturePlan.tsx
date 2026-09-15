"use client";

import Link from "next/link";
import { MentionGarantieLegale } from "@/components/garantie-legale/MentionGarantieLegale";
import type { CategorieThermopompe } from "@/lib/garantie-legale/config";

/* ==================================================================
   ThermoMatch — « Votre configuration » : entre le thermomètre et les
   trois cartes, l'architecture décidée avant les machines
   (src/lib/thermomatch/architecture.ts).
   1. Le titre, ses raisons et le degré de confiance.
   2. Le plan des zones : ce que chaque tête (ou les conduits) chauffe.
   3. La relève à la température de calcul de la région.
   4. « Pourquoi pas… » : les autres architectures, écartées en une phrase.
   5. Les points à vérifier à la visite.
   6. L'ordre de grandeur installé, une seule fois : jamais un prix de vente.
   Texte statique, sans compteur : le HTML serveur porte les valeurs finales.
   ================================================================== */

/** Ce que le moteur envoie (summaryContext.architecture), dans la forme dont l'écran a besoin. */
export interface ArchitecturePlanData {
  kind: string;
  heads: number;
  label: string;
  title: string;
  confidence: string;
  why: string[];
  zonePlan: { label: string; loadBtuH: number; headNominalBtu: number | null; servedBy: string }[];
  ruledOut: { kind: string; why: string }[];
  checks: { text: string; href?: string; linkLabel?: string }[];
  backup: string;
  backupSummary: string;
  price: { min: number; max: number; basis: string; tierLabel: string; matchLabel: string; note: string | null } | null;
  pricePerCard: boolean;
  priceLabel: string;
  alternative?: { note: string; decision: ArchitecturePlanData } | null;
}

const C = {
  ink: "#0A1419",
  panel: "#10222D",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  /** Petit texte encore lisible sur l'encre (près de 6:1). */
  dim: "rgba(244,239,231,0.58)",
  line: "rgba(244,239,231,0.12)",
};
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const fr = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 0 });
const money = (n: number) => `${fr(Math.round(n / 50) * 50)} $`;

const ECARTEE: Record<string, string> = {
  central: "Une centrale",
  "central-hybrid": "Une centrale",
  "single-zone": "Une seule tête murale",
  "multi-zone": "Une multizone",
  "multi-single": "Des murales indépendantes",
};

const RELEVE: Record<string, string> = {
  fournaise: "Reste sur la fournaise",
  chaudiere: "Reste sur la chaudière",
  plinthes: "Reste sur vos plinthes",
  inconnu: "Reste sur le chauffage actuel",
};

export function categorieOfKind(kind: string): CategorieThermopompe {
  if (kind === "central" || kind === "central-hybrid") return "centrale";
  if (kind === "multi-zone") return "multizone";
  return "murale";
}

const eyebrow = { letterSpacing: "0.16em", color: C.faint, margin: 0 } as const;

export function ArchitecturePlan({ arch }: { arch: ArchitecturePlanData }) {
  const ferme = arch.confidence === "ferme";
  return (
    <section
      aria-labelledby="tm-archi"
      className="mx-auto mt-10 w-full max-w-[1320px] overflow-hidden rounded-[28px] lg:mt-14"
      style={{ border: `1px solid ${C.line}`, background: "rgba(244,239,231,0.03)", color: C.cream, fontFamily: DISPLAY }}
    >
      <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:px-14 lg:py-14">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <p className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: C.mute, margin: 0 }}>
              <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: C.orange }} />
              Votre configuration
            </p>
            <span className="rounded-full px-3 py-1 text-[11.5px] font-semibold" style={{ border: `1px solid ${C.line}`, color: C.cream }}>
              {arch.label}
            </span>
            <span
              className="rounded-full px-3 py-1 text-[11.5px] font-semibold"
              style={ferme ? { background: "rgba(92,203,140,0.14)", color: "#8FE0B2" } : { background: "rgba(229,75,23,0.16)", color: "#FF9C77" }}
            >
              {ferme ? "Configuration ferme" : "À confirmer à la visite"}
            </span>
          </div>

          <h2 id="tm-archi" style={{ fontSize: "clamp(28px, 3.4vw, 48px)", lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 600, margin: "20px 0 0" }}>
            {arch.title}
          </h2>
          <div className="mt-6 space-y-3 text-[16px] leading-relaxed" style={{ color: C.mute }}>
            {arch.why.map((w) => (
              <p key={w} style={{ margin: 0 }}>
                {w}
              </p>
            ))}
          </div>

          <ZonePlan arch={arch} />

          <div className="mt-8">
            <p className="text-[11px] font-bold uppercase" style={eyebrow}>
              Les jours les plus froids
            </p>
            <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: C.mute, margin: "8px 0 0" }}>
              {arch.backupSummary}
            </p>
          </div>
        </div>

        <div className="min-w-0 space-y-8">
          {arch.ruledOut.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase" style={eyebrow}>
                Pourquoi pas…
              </p>
              <ul className="mt-3 space-y-3" style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
                {arch.ruledOut.map((r) => (
                  <li key={r.kind} className="rounded-[16px] px-4 py-3" style={{ background: C.panel }}>
                    <p className="text-[13.5px] font-semibold" style={{ margin: 0 }}>
                      {ECARTEE[r.kind] ?? r.kind}
                    </p>
                    <p className="text-[13px] leading-snug" style={{ color: C.dim, margin: "4px 0 0" }}>
                      {r.why}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {arch.checks.length > 0 && (
            <div>
              <p className="text-[11px] font-bold uppercase" style={eyebrow}>
                À vérifier à la visite
              </p>
              <ul className="mt-3 space-y-2.5" style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
                {arch.checks.map((c) => (
                  <li key={c.text} className="grid grid-cols-[14px_1fr] gap-2.5 text-[13.5px] leading-snug" style={{ color: C.mute }}>
                    <span aria-hidden="true" className="mt-[7px] h-[6px] w-[6px] rounded-full" style={{ background: C.orange }} />
                    <span>
                      {c.text}
                      {c.href && (
                        <>
                          {" "}
                          <Link href={c.href} className="font-semibold underline-offset-4 hover:underline" style={{ color: C.cream }}>
                            {c.linkLabel ?? "En savoir plus"} →
                          </Link>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <PriceBox arch={arch} />
        </div>
      </div>

      {arch.alternative && (
        <details className="tm-details px-6 pb-8 sm:px-10 lg:px-14" style={{ borderTop: `1px solid ${C.line}` }}>
          <summary className="flex items-center justify-between gap-4 pt-6 text-[15px] font-semibold">
            <span>
              Solution de repli : {arch.alternative.decision.title}
            </span>
            <span className="tm-plus flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[18px]" style={{ border: `1px solid ${C.line}` }} aria-hidden="true">
              +
            </span>
          </summary>
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="text-[14.5px] leading-relaxed" style={{ color: C.cream, margin: 0 }}>
                {arch.alternative.note}
              </p>
              <div className="mt-3 space-y-2 text-[14px] leading-relaxed" style={{ color: C.mute }}>
                {arch.alternative.decision.why.map((w) => (
                  <p key={w} style={{ margin: 0 }}>
                    {w}
                  </p>
                ))}
              </div>
              <ZonePlan arch={arch.alternative.decision} />
            </div>
            <div className="min-w-0">
              <PriceBox arch={arch.alternative.decision} />
            </div>
          </div>
        </details>
      )}
    </section>
  );
}

/* Plan des zones : une ligne par zone, sa charge à −15 °C et qui la chauffe ; barre proportionnelle, sans animation. */
function ZonePlan({ arch }: { arch: ArchitecturePlanData }) {
  const max = Math.max(1, ...arch.zonePlan.map((z) => z.loadBtuH));
  return (
    <div className="mt-8">
      <p className="text-[11px] font-bold uppercase" style={eyebrow}>
        Plan des zones <span style={{ letterSpacing: "0.04em", textTransform: "none", fontWeight: 500 }}>· charge à −15 °C</span>
      </p>
      <ul className="mt-3" style={{ listStyle: "none", padding: 0, margin: "12px 0 0", borderTop: `1px solid ${C.line}` }}>
        {arch.zonePlan.map((z) => {
          const served = z.servedBy === "conduits" ? "Par les conduits" : z.servedBy === "releve" ? (RELEVE[arch.backup] ?? RELEVE.inconnu) : z.headNominalBtu ? `Tête d’environ ${fr(z.headNominalBtu)} BTU` : "Une tête murale";
          const bar = z.servedBy === "tete" ? C.orange : z.servedBy === "conduits" ? "rgba(244,239,231,0.6)" : "rgba(244,239,231,0.22)";
          return (
            <li key={z.label} className="py-3" style={{ borderBottom: `1px solid ${C.line}` }}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="text-[14.5px] font-semibold">{z.label}</span>
                <span className="text-[14px] font-semibold tabular-nums">{fr(z.loadBtuH)} BTU/h</span>
              </div>
              <div className="mt-2 grid grid-cols-[1fr_auto] items-center gap-4">
                <span className="h-[6px] overflow-hidden rounded-full" style={{ background: C.line }}>
                  <span className="block h-full rounded-full" style={{ width: `${Math.round((z.loadBtuH / max) * 100)}%`, background: bar }} />
                </span>
                <span className="text-[12.5px]" style={{ color: z.servedBy === "releve" ? C.faint : C.dim }}>
                  {served}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* Ordre de grandeur installé : une seule fois pour la configuration ; s'il varie avec le calibre, chaque carte a le sien. */
function PriceBox({ arch }: { arch: ArchitecturePlanData }) {
  if (arch.pricePerCard) {
    return (
      <p className="rounded-[18px] px-5 py-4 text-[13px] leading-snug" style={{ border: `1px solid ${C.line}`, color: C.dim, margin: 0 }}>
        L’ordre de grandeur installé varie avec le calibre des machines : il est indiqué sur chaque carte. {arch.priceLabel}.
      </p>
    );
  }
  if (!arch.price) return null;
  const p = arch.price;
  return (
    <div className="rounded-[18px] px-5 py-4" style={{ border: `1px solid ${C.line}`, background: C.panel }}>
      <p className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: C.dim, margin: 0 }}>
        Ordre de grandeur installé
      </p>
      <p className="tabular-nums" style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.03em", margin: "6px 0 0" }}>
        {money(p.min)} – {money(p.max)}
      </p>
      {/* Conformité : garantie légale de bon fonctionnement, sous le prix. */}
      <MentionGarantieLegale cible={categorieOfKind(arch.kind)} className="text-[12px] font-semibold" style={{ color: C.cream, margin: "6px 0 0" }} />
      <p className="text-[12px] leading-snug" style={{ color: C.dim, margin: "8px 0 0" }}>
        {arch.priceLabel} : {p.matchLabel}, {p.tierLabel}
        {p.note ? ` (${p.note})` : p.basis === "derive" ? " (case interpolée)" : ""}, avant subvention LogisVert. Le prix exact vient de la soumission.
      </p>
    </div>
  );
}
