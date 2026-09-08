/* ==================================================================
   ThermoMatch v2 — Explications en français

   Chaque raison cite un chiffre réel de la machine ou du calcul.
   Rien de marketing, rien d'inventé.
   ================================================================== */

import type { LoadEstimate, MatchRequest, MatchResult, ScoredCandidate } from "./types";

const fmtBtu = (n: number) => `${Math.round(n).toLocaleString("fr-CA")} BTU/h`;
const fmtDollars = (n: number) => `${n.toLocaleString("fr-CA")} $`;
const fmtPct = (n: number) => `${Math.round(n * 100)} %`;
const fmtDec = (n: number, d = 1) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });

export function buildReasons(
  r: Omit<MatchResult, "reasons" | "warnings">,
  req: MatchRequest,
  load: LoadEstimate,
  logisVertUpdatedAt?: string,
): string[] {
  const c = r.candidate;
  const reasons: string[] = [];

  // 1. Capacité par rapport à la charge
  const ratio = r.fitRatio;
  const certified = c.h5Certified ? "certifiée" : "estimée";
  if (ratio >= 0.95 && ratio <= 1.2) {
    reasons.push(
      `Capacité ${certified} de ${fmtBtu(c.h5Btu)} à -15 °C pour une charge estimée de ${fmtBtu(load.loadBtuH)} : le bon calibre, sans surdimensionnement.`,
    );
  } else if (ratio < 0.95) {
    reasons.push(
      req.backupHeatAvailable
        ? `Capacité ${certified} de ${fmtBtu(c.h5Btu)} à -15 °C, soit ${fmtPct(ratio)} de la charge estimée. Votre fournaise prend le relais lors des pointes de froid.`
        : `Capacité ${certified} de ${fmtBtu(c.h5Btu)} à -15 °C, soit ${fmtPct(ratio)} de la charge estimée. Vos plinthes complètent lors des grands froids.`,
    );
  } else {
    reasons.push(
      `Capacité ${certified} de ${fmtBtu(c.h5Btu)} à -15 °C, ${fmtPct(ratio)} de la charge estimée : une marge confortable pour les pointes de froid.`,
    );
  }

  // 2. Rétention par grand froid
  if (c.nominalBtu > 0) {
    const retention = c.h5Btu / c.nominalBtu;
    const copText = c.cop5 !== undefined ? ` avec un COP de ${fmtDec(c.cop5, 2)} à -15 °C` : "";
    reasons.push(
      `Conserve ${fmtPct(Math.min(retention, 1.2))} de sa capacité nominale à -15 °C${copText}${c.coldClimate ? ", certification climat froid" : ""}.`,
    );
  }

  // 3. Subvention
  if (c.logisVertDollars > 0) {
    const date = logisVertUpdatedAt ? ` (liste Hydro-Québec du ${logisVertUpdatedAt.slice(0, 10)})` : "";
    reasons.push(`Admissible à ${fmtDollars(c.logisVertDollars)} de subvention LogisVert${date}, montant officiel pour cet appariement.`);
  }

  // 4. Efficacité
  if (c.hspf2 !== undefined) {
    const vsBaseboard = Math.round((1 - 3.412 / c.hspf2) * 100);
    reasons.push(`HSPF2 de ${fmtDec(c.hspf2)} : environ ${vsBaseboard} % de moins d'électricité pour le chauffage qu'avec des plinthes.`);
  }

  // 5. Rebadges
  if (c.alsoSoldAs.length > 0) {
    reasons.push(`Même machine vendue aussi sous ${c.alsoSoldAs.join(", ")} : comparez les prix d'installation.`);
  }

  return reasons;
}

export function buildWarnings(r: ScoredCandidate, req: MatchRequest): string[] {
  const w: string[] = [];
  if (!r.candidate.h5Certified) {
    w.push("Capacité à -15 °C estimée à partir de la donnée à -8 °C : cet appareil n'a pas de fiche ENERGY STAR détaillée.");
  }
  if (r.candidate.hspf2 === undefined) {
    w.push("Efficacité saisonnière (HSPF2) non publiée pour cet appareil.");
  }
  if (req.zones > 1 && !r.candidate.multiZoneCapable) {
    w.push("Cette unité extérieure est certifiée avec une seule unité intérieure : une configuration multizone demandera plusieurs appareils.");
  }
  return w;
}

export function globalWarnings(req: MatchRequest, load: LoadEstimate): string[] {
  const w = [
    `Charge estimée à ${fmtBtu(load.loadBtuH)} (±${load.uncertaintyPct} %). Le dimensionnement final doit être confirmé sur place par un calcul CSA F280.`,
  ];
  if (req.priorities.includes("silence")) {
    w.push("Le niveau sonore n'est pas publié dans les bases officielles : nous ne l'utilisons pas dans le classement.");
  }
  return w;
}
