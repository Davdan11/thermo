/* ==================================================================
   Annonce Marketplace / Kijiji prête à copier (texte + images).
   AUCUNE publication automatique : ces plateformes l'interdisent.
   Mêmes chiffres que la publication (lus dans sa source), rien de plus.
   ================================================================== */

import { fmtBtu, fmtDec, fmtMoney, fmtTemp } from "./format";
import type { Post } from "./types";
import { displayUrl } from "./utm";

export interface Annonce {
  title: string;
  body: string;
}

const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

export function buildAnnonce(post: Pick<Post, "series" | "source" | "link">): Annonce | null {
  if (post.series !== "modele" && post.series !== "logisvert") return null;
  const v = post.source.values;
  const brand = typeof v.marque === "string" ? v.marque : "";
  const serie = typeof v.serie === "string" ? v.serie : "";
  if (!brand || !serie) return null;
  const nominal = num(v.puissanceNominaleBtu);
  const h5 = num(v.chaleurMoins15Btu);
  const hspf2 = num(v.hspf2);
  const seer2 = num(v.seer2);
  const cop = num(v.cop5);
  const min = num(v.froidMinimalC);
  const lv = num(v.logisVertDollars);
  const ahri = typeof v.ahri === "string" ? v.ahri : null;

  const lines: string[] = [`Thermopompe ${brand} ${serie}${nominal ? `, ${fmtBtu(nominal)} de puissance nominale` : ""}.`, ""];
  if (h5) lines.push(`• Chaleur certifiée à ${fmtTemp(-15)} : ${fmtBtu(h5)}`);
  if (hspf2 !== null || seer2 !== null) lines.push(`• Efficacité : ${[hspf2 !== null ? `HSPF2 ${fmtDec(hspf2)}` : null, seer2 !== null ? `SEER2 ${fmtDec(seer2)}` : null, cop !== null ? `COP ${fmtDec(cop)} à ${fmtTemp(-15)}` : null].filter(Boolean).join(" · ")}`);
  if (min !== null) lines.push(`• Froid minimal selon le fabricant : ${fmtTemp(min)}`);
  if (lv) lines.push(`• Aide LogisVert pour ce jumelage${ahri ? ` (AHRI ${ahri})` : ""} : ${fmtMoney(lv)}, versée au client par Hydro-Québec`);
  lines.push("", "Prix sur soumission.", `Fiche complète et soumission : ${displayUrl(post.link.path)}`);

  return { title: `Thermopompe ${brand} ${serie}${nominal ? ` ${fmtBtu(nominal)}` : ""}`.slice(0, 100), body: lines.join("\n") };
}
