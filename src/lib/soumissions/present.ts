/* Textes en français simple, partagés par le document client, l'outil et les courriels (pur). */
import { choiceText } from "./choices";
import { formatDay } from "./dates";
import { formatNumber, money } from "./money";
import {
  UNIT_LABELS,
  type IndoorPlacement,
  type LengthUnit,
  type MachineInfo,
  type Placement,
  type QuoteDocument,
  type QuoteLine,
  type ScheduleInfo,
  type Totals,
} from "./types";

/** Niveau sans ambiguïté : « premier étage » ne veut pas dire la même chose pour tout le monde. */
export function floorLabel(n: number | null): string {
  if (n === null) return "";
  if (n === 0) return "Sous-sol";
  if (n === 1) return "Rez-de-chaussée";
  return `${n - 1}${n - 1 === 1 ? "er" : "e"} étage au-dessus du rez-de-chaussée`;
}

export function floorShort(n: number | null): string {
  if (n === null) return "?";
  if (n === 0) return "Sous-sol";
  if (n === 1) return "Rez-de-chaussée";
  return `Étage ${n - 1}`;
}

export function lengthText(n: number | null, unit: LengthUnit): string {
  if (n === null) return "";
  return `${formatNumber(n, 1)} ${unit === "pi" ? "pi" : "m"}`;
}

export function extraLength(u: Pick<IndoorPlacement, "lineLength" | "lineIncluded">): number {
  if (u.lineLength === null || u.lineIncluded === null) return 0;
  return Math.max(0, Math.round((u.lineLength - u.lineIncluded) * 10) / 10);
}

const lc = (s: string) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);

/** Une phrase par unité (courriel, texte brut). `u` null : l'unité extérieure. */
export function describeUnit(label: string, p: Placement, u: IndoorPlacement | null): string {
  if (!u) {
    const o = p.outdoor;
    return [
      `${label} : ${o.location || "emplacement à préciser"}${o.mounting ? `, sur ${lc(choiceText("mounting", o.mounting))}` : ""}`,
      o.clearance ? `dégagement : ${o.clearance}` : "",
      o.snow ? `neige : ${o.snow}` : "",
    ]
      .filter(Boolean)
      .join(" ; ");
  }
  const bits = [
    `${label} : ${choiceText("indoorType", u.type) || "unité"}${u.model ? ` ${u.model}` : ""}`,
    [u.room, floorLabel(u.floor).toLowerCase()].filter(Boolean).join(", "),
    u.wall ? `mur : ${u.wall}` : "",
    u.height ? `hauteur : ${u.height}` : "",
    u.lineLength !== null ? `ligne de ${lengthText(u.lineLength, p.lengthUnit)}${u.lineIncluded !== null ? ` (${lengthText(u.lineIncluded, p.lengthUnit)} inclus)` : ""}` : "",
    u.lineRoute ? lc(choiceText("route", u.lineRoute)) : "",
    u.lineFinish ? `finition : ${lc(choiceText("finish", u.lineFinish))}` : "",
    u.penetrations !== null ? `${u.penetrations} percement${u.penetrations > 1 ? "s" : ""}${u.wallMaterial ? ` (${lc(choiceText("wallMaterial", u.wallMaterial))})` : ""}` : "",
    u.drain ? `drain : ${lc(choiceText("drain", u.drain))}` : "",
  ];
  return bits.filter(Boolean).join(" ; ");
}

/** « Le jeudi 15 octobre 2026 » ou « Entre le 5 et le 16 octobre 2026 ». */
export function whenText(s: ScheduleInfo): string {
  if (s.mode === "date" && s.date) return `Le ${formatDay(s.date, true)}`;
  if (s.mode === "fenetre" && s.windowStart && s.windowEnd) return `Entre le ${formatDay(s.windowStart)} et le ${formatDay(s.windowEnd)}`;
  return "Date à confirmer";
}

export function scheduleText(s: ScheduleInfo): Array<[string, string]> {
  const rows: Array<[string, string]> = [
    [s.mode === "fenetre" ? "Fenêtre prévue" : "Date prévue", whenText(s)],
    ["Précision", s.windowText],
    ["Durée estimée des travaux", s.duration],
    ["Arrivée de l’équipe", s.arrival],
    ["À préparer avant notre arrivée", s.prep.join(" ; ")],
    ["Remarques", s.notes],
  ];
  return rows.filter(([, v]) => v);
}

export function qtyText(l: Pick<QuoteLine, "quantity" | "unit" | "unitPriceCents">): string {
  if (l.unit === "forfait" && l.quantity === 1) return "Forfait";
  const u = UNIT_LABELS[l.unit];
  return `${formatNumber(l.quantity, 2)} ${l.quantity > 1 ? u.many : u.one} × ${money(l.unitPriceCents)}`;
}

/** Lignes du prix accepté (courriel de confirmation, note). */
export function documentLines(doc: QuoteDocument, totals: Totals, selection: string[]): Array<[string, string]> {
  const sel = new Set(selection);
  const byId = new Map(totals.lines.map((l) => [l.id, l]));
  const rows: Array<[string, string]> = [];
  for (const l of doc.content.lines) {
    const t = byId.get(l.id);
    if (!t?.included) continue;
    const name = `${l.label}${l.optional ? (sel.has(l.id) ? " (option choisie)" : "") : ""} · ${qtyText(l)}`;
    rows.push([name, t.discountCents ? `${money(t.netCents)} (au lieu de ${money(t.grossCents)}, ${l.discount?.reason})` : money(t.netCents)]);
  }
  for (const d of totals.quoteDiscounts) if (d.amountCents) rows.push([`Rabais : ${d.reason}`, `− ${money(d.amountCents)}`]);
  rows.push(["Sous-total avant taxes", money(totals.taxableCents)]);
  rows.push(["TPS (5 %)", money(totals.tpsCents)]);
  rows.push(["TVQ (9,975 %)", money(totals.tvqCents)]);
  rows.push(["Total, taxes comprises", money(totals.totalCents)]);
  if (totals.logisvertCents) {
    if (totals.logisvertMode === "cession") {
      rows.push(["Aide LogisVert, versée par Hydro-Québec à l’entreprise", `− ${money(totals.logisvertCents)}`]);
      rows.push(["À payer à l’entreprise", money(totals.clientPaysCents)]);
    } else if (doc.contractor !== undefined) {
      // Modèle actuel : l'aide est une information, jamais soustraite du montant payable.
      rows.push(["Aide LogisVert prévue (information : versée au client par Hydro-Québec, non garantie)", money(totals.logisvertCents)]);
      rows.push(["Estimation après l’aide (estimation, non garantie)", money(totals.netAfterAidCents)]);
    } else {
      rows.push(["Aide LogisVert, versée par Hydro-Québec au client après l’installation", money(totals.logisvertCents)]);
      rows.push(["Coût net estimé après l’aide", money(totals.netAfterAidCents)]);
    }
  }
  if (totals.depositCents) rows.push(["Acompte", money(totals.depositCents)]);
  rows.push([totals.depositCents ? "Solde" : "Montant payable", money(totals.balanceCents)]);
  return rows;
}

/** Brouillon factuel de l’explication, à partir des chiffres certifiés seulement (le propriétaire le relit et l’adapte). */
export function explanationDraft(m: MachineInfo, where?: string): string {
  const pr = m.pairing;
  const parts: string[] = [`La ${m.brand} ${m.name} est une thermopompe ${m.systemTypeLabel.toLowerCase()} : elle chauffe l’hiver et climatise l’été${where ? ` ${where}` : ""}.`];
  if (pr?.h5Btu) parts.push(`Par grand froid, à −15 °C, elle fournit encore ${pr.h5Btu.toLocaleString("fr-CA")} BTU/h de chaleur, selon sa certification.`);
  if (pr?.hspf2) parts.push(`Son rendement de chauffage sur la saison (HSPF2) est de ${pr.hspf2.toLocaleString("fr-CA")}.`);
  if (pr?.coldClimate) parts.push("Elle est reconnue pour les climats froids.");
  return parts.join(" ");
}
