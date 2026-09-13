/* Dates affichées du blogue (heure de Montréal), sans dépendance. */

const LONG = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Montreal", day: "numeric", month: "long", year: "numeric" });
const DAY = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Montreal", day: "numeric" });
const MONTH = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Montreal", month: "short", year: "numeric" });

/** « 13 septembre 2026 ». */
export const fmtLongDate = (iso: string) => LONG.format(new Date(iso));
/** Jour du mois : « 13 ». */
export const fmtDayOfMonth = (iso: string) => DAY.format(new Date(iso));
/** « sept. 2026 ». */
export const fmtShortMonth = (iso: string) => MONTH.format(new Date(iso));
