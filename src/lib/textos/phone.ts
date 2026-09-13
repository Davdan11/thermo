/* Numéros de téléphone des textos : normalisation E.164, affichage complet ou masqué. Sans dépendance serveur. */

/** Numéro de l'expéditeur tel que Twilio le transmet (E.164). null si ce n'est pas un numéro. */
export function normalizeFrom(raw: string | null | undefined): string | null {
  const v = (raw ?? "").trim();
  if (/^\+\d{6,15}$/.test(v)) return v;
  const digits = v.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

/** Dix chiffres d'un numéro nord-américain, sinon les chiffres tels quels. */
export function phoneDigits(e164: string): string {
  const d = e164.replace(/\D/g, "");
  return d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
}

/** « +15145551234 » → « 514 555-1234 ». */
export function formatPhone(e164: string): string {
  const d = phoneDigits(e164);
  return d.length === 10 ? `${d.slice(0, 3)} ${d.slice(3, 6)}-${d.slice(6)}` : e164;
}

/** Listes : « 514 •••-••34 » (indicatif régional et deux derniers chiffres). */
export function maskPhone(e164: string): string {
  const d = phoneDigits(e164);
  if (d.length === 10) return `${d.slice(0, 3)} •••-••${d.slice(8)}`;
  return d.length > 4 ? `${"•".repeat(d.length - 2)}${d.slice(-2)}` : "••••";
}
