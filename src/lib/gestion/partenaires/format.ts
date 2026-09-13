/* Dates lisibles (heure de Montréal), partagées par les pages, les courriels et le document signé. */

const TZ = "America/Toronto";
const dayFmt = new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: TZ });
const timeFmt = new Intl.DateTimeFormat("fr-CA", { hour: "numeric", minute: "2-digit", timeZone: TZ });

/** « 13 septembre 2026 » */
export const longDate = (iso: string): string => dayFmt.format(new Date(iso));

/** « 14 h 32 » */
export const clock = (iso: string): string => timeFmt.format(new Date(iso));

/** « 13 septembre 2026 à 14 h 32 » */
export const longDateTime = (iso: string): string => `${longDate(iso)} à ${clock(iso)}`;

/** « dans 2 jours », « il y a 3 h » (approximatif, pour l'affichage). */
export function relative(iso: string, now: Date): string {
  const diff = Date.parse(iso) - now.getTime();
  const abs = Math.abs(diff);
  const h = Math.round(abs / 3_600_000);
  const d = Math.round(abs / 86_400_000);
  const txt = abs < 3_600_000 ? `${Math.max(1, Math.round(abs / 60_000))} min` : h < 36 ? `${h} h` : `${d} jour${d > 1 ? "s" : ""}`;
  return diff >= 0 ? `dans ${txt}` : `il y a ${txt}`;
}

export const pctText = (x: number | null): string => (x === null ? "—" : `${Math.round(x * 100)} %`);
