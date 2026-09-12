/* ==================================================================
   Alerte LogisVert — logique pure, sans disque ni catalogue :
   schéma de la demande, instantané des montants, comparaison.

   Un instantané garde, pour chaque modèle suivi, le montant minimal,
   le montant maximal et le nombre d'appariements admissibles (AHRI)
   de la liste officielle d'Hydro-Québec. Comparer l'instantané gardé
   avec celui de la liste du jour donne les changements à annoncer.
   ================================================================== */
import { z } from "zod";

export const alertTargetSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("model"), modelId: z.string().trim().min(1).max(160).regex(/^[A-Za-z0-9][A-Za-z0-9._-]*$/) }),
  z.object({ kind: z.literal("brand"), brandSlug: z.string().trim().min(1).max(80).regex(/^[a-z0-9][a-z0-9-]*$/) }),
]);
export type AlertTarget = z.infer<typeof alertTargetSchema>;

export const alertRequestSchema = z.object({
  email: z.string().trim().toLowerCase().email("Courriel invalide.").max(160),
  firstName: z.string().trim().max(80).optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
  target: alertTargetSchema,
  consent: z.literal(true, { message: "Le consentement est requis." }),
  /** Pot de miel : rempli seulement par les robots. */
  website: z.string().max(0).optional().or(z.literal("")),
});
export type AlertRequest = z.infer<typeof alertRequestSchema>;

export function targetKey(t: AlertTarget): string {
  return t.kind === "model" ? `model:${t.modelId}` : `brand:${t.brandSlug}`;
}

/** Montants d'un modèle dans la liste : n = nombre d'appariements admissibles (0 = hors de la liste). */
export interface ModelAmounts {
  min: number;
  max: number;
  n: number;
}

export interface AlertSnapshot {
  /** Date de la liste Hydro-Québec utilisée (logisvert-metadata.json). */
  listUpdatedAt: string | null;
  /** Par identifiant de modèle du catalogue. */
  models: Record<string, ModelAmounts>;
}

export const NOT_LISTED: ModelAmounts = { min: 0, max: 0, n: 0 };

export function amountsFromValues(values: number[]): ModelAmounts {
  const v = values.filter((x) => Number.isFinite(x) && x > 0);
  if (v.length === 0) return { ...NOT_LISTED };
  return { min: Math.min(...v), max: Math.max(...v), n: v.length };
}

export type ChangeKind = "raised" | "added" | "adjusted" | "lowered" | "removed";
const ORDER: Record<ChangeKind, number> = { raised: 0, added: 1, adjusted: 2, lowered: 3, removed: 4 };

export interface AlertChange {
  modelId: string;
  kind: ChangeKind;
  before: ModelAmounts;
  after: ModelAmounts;
}

/**
 * Changements à annoncer entre l'instantané gardé et celui du jour :
 * - added    : le modèle n'avait aucun appariement admissible, il en a maintenant ;
 * - removed  : il en avait, il n'en a plus ;
 * - raised / lowered : le montant maximal (« jusqu'à ») monte ou baisse ;
 * - adjusted : même maximum, mais le minimum de la fourchette a bougé.
 * Un simple changement du nombre d'appariements, à montants égaux, n'est pas annoncé.
 * Un modèle retiré du catalogue (absent de `next`) est ignoré.
 */
export function diffSnapshots(prev: AlertSnapshot | null | undefined, next: AlertSnapshot): AlertChange[] {
  const old = prev?.models ?? {};
  const out: AlertChange[] = [];
  for (const [modelId, after] of Object.entries(next.models)) {
    const before = old[modelId] ?? NOT_LISTED;
    const was = before.n > 0;
    const is = after.n > 0;
    let kind: ChangeKind | null = null;
    if (!was && is) kind = "added";
    else if (was && !is) kind = "removed";
    else if (was && is) kind = after.max > before.max ? "raised" : after.max < before.max ? "lowered" : after.min !== before.min ? "adjusted" : null;
    if (kind) out.push({ modelId, kind, before: { ...before }, after: { ...after } });
  }
  return out.sort(
    (a, b) =>
      ORDER[a.kind] - ORDER[b.kind] ||
      Math.abs(b.after.max - b.before.max) - Math.abs(a.after.max - a.before.max) ||
      a.modelId.localeCompare(b.modelId),
  );
}

/** Mêmes montants pour les mêmes modèles (la date de liste est ignorée). */
export function sameAmounts(a: AlertSnapshot, b: AlertSnapshot): boolean {
  const ka = Object.keys(a.models);
  if (ka.length !== Object.keys(b.models).length) return false;
  return ka.every((k) => {
    const x = a.models[k];
    const y = b.models[k];
    return !!y && x.min === y.min && x.max === y.max && x.n === y.n;
  });
}

export const NBSP = "\u00a0";

export function formatDollars(n: number): string {
  return `${Math.round(n).toLocaleString("fr-CA")}${NBSP}$`;
}

/** « 1 250 $ », « 900 $ à 1 250 $ » ou « hors de la liste ». */
export function formatRange(a: ModelAmounts): string {
  if (a.n === 0) return "hors de la liste";
  return a.min === a.max ? formatDollars(a.max) : `${formatDollars(a.min)} à ${formatDollars(a.max)}`;
}

export function formatListDate(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Toronto" });
}

export interface AlertSubscription {
  id: string;
  /** En minuscules : clé de déduplication avec la cible. */
  email: string;
  firstName?: string;
  target: AlertTarget;
  /** Nom affiché (« Daikin FTX12AXVJU » ou « Daikin ») calculé côté serveur. */
  label: string;
  /** Page du site liée dans les courriels (/produit/… ou /subventions/logisvert/…). */
  path: string;
  createdAt: string;
  /** Dernier consentement explicite (case cochée). */
  consentAt: string;
  /** Double consentement : aucune alerte tant que ce champ est nul. */
  confirmedAt: string | null;
  confirmationSentAt: string | null;
  /** Jeton aléatoire des liens de confirmation et de désabonnement. */
  token: string;
  lastSnapshot: AlertSnapshot;
  lastNotifiedAt: string | null;
  /** Référence de la demande dans le journal des leads. */
  journalId?: string;
}

export const TOKEN_RE = /^[A-Za-z0-9_-]{32}$/;
export function isToken(v: unknown): v is string {
  return typeof v === "string" && TOKEN_RE.test(v);
}
