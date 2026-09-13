/* ==================================================================
   Adresses autorisées dans l'outil de gestion.
   ADMIN_EMAILS (séparées par des virgules), sinon NOTIFICATION_EMAIL.
   L'adresse est revérifiée à chaque requête : retirer une adresse de
   ADMIN_EMAILS ferme aussitôt ses sessions.
   ================================================================== */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

export function adminEmails(): string[] {
  const raw = process.env.ADMIN_EMAILS?.trim() ? process.env.ADMIN_EMAILS : process.env.NOTIFICATION_EMAIL ?? "";
  return [...new Set(raw.split(/[,;\s]+/).map(normalizeEmail).filter((e) => EMAIL_RE.test(e)))];
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return adminEmails().includes(normalizeEmail(email));
}

export function isEmail(value: string): boolean {
  return value.length <= 200 && EMAIL_RE.test(value);
}
