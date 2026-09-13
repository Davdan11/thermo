/* Chantier S — mise en forme des pages Sécurité (heure de Montréal, français du Québec). */

const dtf = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Toronto", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
const dayFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Toronto", day: "numeric", month: "long", year: "numeric" });

export const when = (iso: string | null | undefined): string => (iso ? dtf.format(new Date(iso)) : "—");
export const day = (iso: string | null | undefined): string => (iso ? dayFmt.format(new Date(iso)) : "—");

export function ago(iso: string | null | undefined, now = Date.now()): string {
  if (!iso) return "jamais";
  const m = Math.round((now - Date.parse(iso)) / 60000);
  if (m < 1) return "à l’instant";
  if (m < 60) return `il y a ${m} min`;
  const h = Math.round(m / 60);
  if (h < 24) return `il y a ${h} h`;
  const d = Math.round(h / 24);
  return `il y a ${d} j`;
}

export function bytes(n: number | undefined): string {
  if (!n) return "0 o";
  if (n < 1024) return `${n} o`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} Ko`;
  return `${(n / 1024 / 1024).toFixed(1).replace(".", ",")} Mo`;
}

export const METHOD_LABEL: Record<string, string> = {
  totp: "application",
  secours: "code de secours",
  texto: "texto",
  appareil: "appareil de confiance",
};
