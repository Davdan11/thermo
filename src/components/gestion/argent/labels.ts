/* Libellés et petites mises en forme du volet B (serveur et navigateur) : états des factures, moments relatifs. */
import { addDaysYmd, hm, localYmd, zoned } from "@/lib/gestion/crm/time";
import type { InvoiceState } from "@/lib/gestion/commissions/types";
import type { ChipTone } from "../kit/Chip";

export const STATE_TONE: Record<InvoiceState, ChipTone> = { "a-recevoir": "blue", "en-retard": "bad", payee: "ok", annulee: "muted" };

const dayFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Toronto", day: "numeric", month: "short" });

/** « aujourd’hui, 10 h 15 », « demain, 9 h », « 12 sept., 16 h ». */
export function whenLabel(iso: string, now: Date): string {
  const d = new Date(iso);
  const z = zoned(d);
  const today = localYmd(now);
  const day = z.ymd === today ? "aujourd’hui" : z.ymd === addDaysYmd(today, 1) ? "demain" : z.ymd === addDaysYmd(today, -1) ? "hier" : dayFmt.format(d);
  return `${day}, ${hm(z)}`;
}

/** « il y a 4 min », « il y a 3 h », « il y a 2 jours ». */
export function relTime(iso: string, now: Date): string {
  const m = Math.round((now.getTime() - Date.parse(iso)) / 60_000);
  if (m < 1) return "à l’instant";
  if (m < 60) return `il y a ${m} min`;
  const h = Math.round(m / 60);
  if (h < 24) return `il y a ${h} h`;
  const days = Math.round(h / 24);
  return `il y a ${days} jour${days > 1 ? "s" : ""}`;
}

export const pctFr = (p: number) => `${String(p).replace(".", ",")} %`;
