/* ==================================================================
   Flux CSV de l'importation planifiée de conversions hors ligne de
   Google Ads (conversions issues de clics).

   Modèle suivi (aide Google Ads, « Import conversions from ad clicks
   into Google Ads using files », consultée le 13 septembre 2026) :
     Google Click ID, Conversion Name, Conversion Time,
     Conversion Value, Conversion Currency, Order ID,
     Ad User Data, Ad Personalization (valeurs « Granted » / « Denied »).
   GBRAID et WBRAID : colonnes distinctes, un seul identifiant par ligne
   (Google accepte le gbraid dans l'importation standard ; l'intitulé
   exact des deux colonnes n'est pas publié dans l'article : à confirmer
   avec le modèle téléchargé dans Google Ads).
   Heure : « aaaa-MM-jj HH:mm:ss+hhmm », fuseau de Montréal inclus sur
   chaque ligne (format « yyyy-MM-dd HH:mm:ss+z » de Google, décalage
   sans deux-points : 2026-09-13 14:05:00-0400).
   Valeur : point décimal, deux décimales. Devise : CAD. Encodage UTF-8
   sans BOM (la première colonne doit commencer par « Google Click ID »),
   fins de ligne CRLF (RFC 4180).
   Aucun nom, courriel ni téléphone : identifiants de clic, nom de la
   conversion, heure, valeur et numéro de soumission seulement.
   ================================================================== */

import { CURRENCY } from "./config";
import type { SaleConversion } from "./sales";

export const GOOGLE_FEED_HEADERS = [
  "Google Click ID",
  "GBRAID",
  "WBRAID",
  "Conversion Name",
  "Conversion Time",
  "Conversion Value",
  "Conversion Currency",
  "Order ID",
  "Ad User Data",
  "Ad Personalization",
] as const;

export const FEED_TIME_ZONE = "America/Toronto";

const fmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: FEED_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

/** « 2026-09-13 14:05:00-0400 » : heure de Montréal et son décalage (heure avancée ou normale). */
export function googleTime(value: string | Date): string {
  const d = new Date(value);
  const p = Object.fromEntries(fmt.formatToParts(d).map((x) => [x.type, x.value])) as Record<string, string>;
  const hour = p.hour === "24" ? "00" : p.hour;
  const wall = Date.UTC(Number(p.year), Number(p.month) - 1, Number(p.day), Number(hour), Number(p.minute), Number(p.second));
  const offsetMin = Math.round((wall - Math.floor(d.getTime() / 1000) * 1000) / 60_000);
  const sign = offsetMin < 0 ? "-" : "+";
  const abs = Math.abs(offsetMin);
  return `${p.year}-${p.month}-${p.day} ${hour}:${p.minute}:${p.second}${sign}${String(Math.floor(abs / 60)).padStart(2, "0")}${String(abs % 60).padStart(2, "0")}`;
}

/** Cents → « 1234.50 » (point décimal, deux décimales, sans séparateur de milliers). */
export function googleValue(cents: number): string {
  const c = Math.max(0, Math.round(cents));
  return `${Math.floor(c / 100)}.${String(c % 100).padStart(2, "0")}`;
}

export function csvCell(v: string): string {
  return /[",\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

/** Lignes du flux : conversions admissibles seulement (identifiant de clic + consentement + 90 jours). */
export function googleFeedRows(conversions: SaleConversion[]): string[][] {
  return conversions
    .filter((c) => c.google.eligible && c.click && c.consent === "granted")
    .sort((a, b) => a.at.localeCompare(b.at) || a.orderId.localeCompare(b.orderId))
    .map((c) => [
      c.click!.type === "gclid" ? c.click!.value : "",
      c.click!.type === "gbraid" ? c.click!.value : "",
      c.click!.type === "wbraid" ? c.click!.value : "",
      c.name,
      googleTime(c.at),
      googleValue(c.valueCents),
      CURRENCY,
      c.orderId,
      "Granted",
      "Granted",
    ]);
}

export function toGoogleCsv(conversions: SaleConversion[]): string {
  const lines = [[...GOOGLE_FEED_HEADERS], ...googleFeedRows(conversions)].map((row) => row.map(csvCell).join(","));
  return `${lines.join("\r\n")}\r\n`;
}
