"use client";

/* ==================================================================
   Copie d'aperçu de la carte de résultat ThermoMatch, avec la zone du
   froid remplaçable par une variante.

   Sert uniquement à /dev/cartes-froid : la carte de production
   (ThermoMatchResults.tsx, composant ResultCard) n'est pas modifiée et
   n'expose pas d'emplacement. Tout le reste de la carte est repris tel
   quel — étiquette, score, marque, photo, unités, étiquettes de tête,
   couverture, chiffres certifiés, ordre de grandeur, raisons, bouton —
   pour que le propriétaire juge la zone du froid dans son vrai
   voisinage, à la vraie échelle.

   Toutes les valeurs viennent du moteur (recommendFromAnswers) : score,
   raisons, montant LogisVert officiel, ordre de grandeur installé.
   Aucune n'est inventée pour l'aperçu.
   ================================================================== */

import "@/app/trouver-ma-thermopompe/_components/results.css";
import type { ReactNode } from "react";
import Image from "next/image";
import { CountUp } from "@/components/home/premium/shared";
import { MentionGarantieLegale } from "@/components/garantie-legale/MentionGarantieLegale";
import { ORDRE_DE_GRANDEUR_LABEL } from "@/lib/prices/grille-installee";
import { OMBRE, OMBRE_TOP, R } from "@/app/trouver-ma-thermopompe/_components/palette";
import type { CarteVue } from "./donnees-carte";

const C = { ...R, inkMute: R.dim, inkLine: R.hair };
const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
const money = (n: number) => `${fr(Math.round(n / 50) * 50)} $`;

function Arrow() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Raison({ text }: { text: string }) {
  return (
    <li>
      <span className="grid grid-cols-[16px_1fr] gap-2.5 text-[13.5px] leading-snug" style={{ color: "#33434b" }}>
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2 }}>
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
        <span>{text}</span>
      </span>
    </li>
  );
}

export function CarteComplete({ carte, froid }: { carte: CarteVue; froid: ReactNode }) {
  const top = carte.rang === 0;
  const cov = carte.coverage != null ? Math.round(carte.coverage * 100) : null;
  const stats = [
    { k: "h5", label: "À −15 °C", v: carte.h5, d: 0, unit: carte.h5 && !carte.h5Certified ? "BTU/h (estimé)" : "BTU/h" },
    { k: "hspf2", label: "HSPF2", v: carte.hspf2, d: 1, unit: "chauffage" },
    { k: "seer2", label: "SEER2", v: carte.seer2, d: 1, unit: "climatisation" },
    { k: "subsidy", label: "LogisVert", v: carte.subsidy > 0 ? carte.subsidy : null, d: 0, unit: "$ officiels" },
  ];

  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-[28px]"
      style={{ background: C.card, color: C.ink, border: top ? "none" : `1px solid ${C.line}`, boxShadow: top ? OMBRE_TOP : OMBRE }}
    >
      <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-7 sm:pt-7">
        <span
          className="rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase"
          style={{ letterSpacing: "0.14em", background: top ? C.orange : "transparent", color: top ? "#fff" : C.ink, border: top ? "none" : `1px solid ${C.inkLine}` }}
        >
          {carte.badge}
        </span>
        {carte.score != null && (
          <div className="text-right leading-none">
            <span className="text-[34px] font-semibold tabular-nums" style={{ letterSpacing: "-0.05em", color: top ? C.orange : C.ink }}>
              <CountUp value={Math.round(carte.score)} play={false} />
            </span>
            <span className="text-[13px] font-semibold" style={{ color: C.inkMute }}>
              /100
            </span>
            <p className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: C.inkMute, margin: "6px 0 0" }}>
              Score ThermoMatch
            </p>
          </div>
        )}
      </div>

      <div className="px-6 pt-5 sm:px-7">
        <h3 style={{ fontSize: top ? 34 : 30, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>{carte.brand}</h3>
        {carte.series && (
          <p className="text-[14px] font-medium" style={{ color: C.inkMute, margin: "8px 0 0" }}>
            Série {carte.series}
          </p>
        )}
      </div>

      {/* L'information vedette, juste sous le nom : la variante à juger. */}
      <div className="px-6 sm:px-7">{froid}</div>

      <div className="px-6 pt-5 sm:px-7">
        <dl className="grid gap-1.5" style={{ margin: 0 }}>
          {[
            ["Dehors", carte.outdoor],
            ["Dedans", carte.indoor],
          ]
            .filter(([, v]) => Boolean(v))
            .map(([l, v]) => (
              <div key={l} className="flex items-baseline gap-3">
                <dt className="w-[64px] shrink-0 text-[10.5px] font-bold uppercase" style={{ letterSpacing: "0.14em", color: C.inkMute }}>
                  {l}
                </dt>
                <dd className="min-w-0 text-[14px] font-medium" style={{ color: C.ink, margin: 0, overflowWrap: "anywhere" }}>
                  {v}
                </dd>
              </div>
            ))}
        </dl>
        {carte.ahri && (
          <p className="text-[12px]" style={{ color: C.inkMute, margin: "6px 0 0" }}>
            Combinaison certifiée AHRI n° {carte.ahri}
          </p>
        )}
        {carte.installLabel && (
          <p className="mt-3 inline-flex rounded-full px-3 py-1 text-[12px] font-semibold" style={{ border: `1px solid ${C.inkLine}`, color: C.ink, margin: "12px 0 0" }}>
            {carte.installLabel}
          </p>
        )}
        {carte.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {carte.tags.map((t) => (
              <span key={t} className="rounded-full px-3 py-1 text-[12px] font-semibold" style={{ background: "rgba(229,75,23,0.1)", color: C.orangeText }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Scène de l'appareil */}
      <div className="relative mx-6 mt-5 h-[170px] overflow-hidden rounded-[20px] sm:mx-7 sm:h-[190px]" style={{ background: carte.img ? C.card : C.inset, border: `1px solid ${C.hair}` }}>
        {carte.img ? (
          <div className="tm-float absolute inset-0">
            <Image src={carte.img} alt={`${carte.brand} ${carte.outdoor}`} fill sizes="(min-width: 1024px) 380px, 90vw" style={{ objectFit: "contain", padding: 18 }} />
          </div>
        ) : (
          <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ color: C.ink }}>
            <span style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>{carte.brand}</span>
          </div>
        )}
        {carte.coldClimate && (
          <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase" style={{ letterSpacing: "0.12em", background: "rgba(255,255,255,0.94)", color: C.ink, border: `1px solid ${C.line}` }}>
            Climat froid
          </span>
        )}
      </div>

      {/* Part de la maison couverte à −15 °C */}
      {cov != null && (
        <div className="px-6 pt-5 sm:px-7">
          <div className="flex items-baseline justify-between text-[13px]">
            <span className="font-semibold">{carte.coverageLabel}</span>
            <span className="font-semibold tabular-nums">
              <CountUp value={cov} play={false} /> %
            </span>
          </div>
          <div className="relative mt-2 h-2 rounded-full" style={{ background: C.inkLine }}>
            <div className="h-full origin-left rounded-full" style={{ width: `${Math.min(cov, 120) / 1.2}%`, background: top ? C.orange : "rgba(12,24,33,0.55)" }} />
            <span aria-hidden="true" className="absolute top-[-4px] h-4 w-px" style={{ left: `${100 / 1.2}%`, background: C.ink }} />
          </div>
          <p className="text-[11.5px]" style={{ color: C.inkMute, margin: "6px 0 0" }}>
            {cov >= 100 ? "Couvre toute la charge estimée à −15 °C." : "Le chauffage d’appoint complète lors des grands froids."}
          </p>
          {carte.backupNote && (
            <p className="text-[11.5px] leading-snug" style={{ color: C.ink, margin: "4px 0 0" }}>
              {carte.backupNote}
            </p>
          )}
        </div>
      )}

      {/* Chiffres certifiés */}
      <dl className="mx-6 mt-5 grid grid-cols-2 overflow-hidden rounded-[18px] sm:mx-7" style={{ border: `1px solid ${C.inkLine}` }}>
        {stats.map((s, si) => (
          <div key={s.k} className="px-4 py-3.5" style={{ borderLeft: si % 2 ? `1px solid ${C.inkLine}` : "none", borderTop: si > 1 ? `1px solid ${C.inkLine}` : "none" }}>
            <dt className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: C.inkMute }}>
              {s.k === "subsidy" ? (
                <span className="inline-flex items-center gap-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/hydroquebec.png" alt="Hydro-Québec" width={14} height={14} style={{ width: 14, height: 14, objectFit: "contain", maxWidth: "none" }} />
                  {s.label}
                </span>
              ) : (
                s.label
              )}
            </dt>
            <dd style={{ margin: "4px 0 0" }}>
              <span className="text-[22px] font-semibold tabular-nums" style={{ letterSpacing: "-0.03em", color: s.k === "subsidy" ? C.green : C.ink }}>
                {s.v == null ? "N/D" : <CountUp value={s.v} decimals={s.d} play={false} />}
              </span>{" "}
              <span className="text-[11px]" style={{ color: C.inkMute }}>
                {s.unit}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      {/* Ordre de grandeur installé du marché québécois (grille de la page /prix), jamais un prix de vente. */}
      {carte.price && (
        <div className="mx-6 mt-4 rounded-[18px] px-4 py-3.5 sm:mx-7" style={{ border: `1px solid ${C.inkLine}` }}>
          <p className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: C.inkMute, margin: 0 }}>
            Ordre de grandeur installé
          </p>
          <p className="tabular-nums" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em", margin: "4px 0 0" }}>
            {money(carte.price.min)} – {money(carte.price.max)}
          </p>
          {carte.subsidy > 0 && (
            <p className="text-[12.5px] leading-snug" style={{ color: C.inkMute, margin: "4px 0 0" }}>
              Aide LogisVert à part :{" "}
              <strong className="tabular-nums" style={{ color: C.green }}>
                {fr(carte.subsidy)} $
              </strong>{" "}
              versés au client par Hydro-Québec (montant officiel pour cet appariement, à faire confirmer).
            </p>
          )}
          {carte.categorie && <MentionGarantieLegale cible={carte.categorie} className="text-[12px] font-semibold" style={{ color: C.ink, margin: "6px 0 0" }} />}
          <p className="text-[11.5px] leading-snug" style={{ color: C.inkMute, margin: "6px 0 0" }}>
            {ORDRE_DE_GRANDEUR_LABEL} ({carte.price.matchLabel}, {carte.price.tierLabel}
            {carte.price.basis === "derive" ? ", case interpolée" : ""}), avant subvention. Le prix exact vient de la soumission.
          </p>
        </div>
      )}

      {/* Pourquoi ce choix */}
      {carte.reasons.length > 0 && (
        <div className="px-6 pt-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.16em", color: C.inkMute, margin: 0 }}>
            Pourquoi ce choix
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }} className="space-y-2.5">
            {carte.reasons.slice(0, 2).map((r) => (
              <Raison key={r} text={r} />
            ))}
          </ul>
          {carte.reasons.length > 2 && (
            <p className="mt-3 text-[13px] font-semibold underline underline-offset-4" style={{ color: C.ink }}>
              Voir les {carte.reasons.length - 2} autres raisons
            </p>
          )}
        </div>
      )}

      <div className="mt-auto px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
        <div
          className="flex w-full items-center justify-between rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold text-white"
          style={{ background: top ? C.orange : C.ink, boxShadow: top ? "0 18px 40px -18px rgba(229,75,23,0.8)" : "none" }}
        >
          <span>Obtenir ma soumission</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.16)" }}>
            <Arrow />
          </span>
        </div>
        <p className="text-center text-[12px]" style={{ color: C.inkMute, margin: "10px 0 0" }}>
          Gratuit, sans engagement
        </p>
      </div>
    </article>
  );
}
