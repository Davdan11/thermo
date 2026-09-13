/* ==================================================================
   Liens entre un job et le reste (pur) :
   - jobCompletion(job) : CONTRAT avec le volet A (fin de chantier).
   - acceptedQuoteForJob() : la soumission acceptée d'où vient le job.
   - installedEquipment(job) : numéros de série saisis à la fin du
     chantier (volet A), lus sans supposer leur forme exacte.
   Tout ce qui dépend de la forme des données du volet A est isolé ici
   pour être ajusté à la fusion.
   ================================================================== */

import { toE164 } from "../sms";
import type { Job } from "../types";
import type { Acceptance, Quote, QuoteVersion } from "@/lib/soumissions/types";

/* ---------------- Contrat avec le volet A ---------------- */

/** Libellé d'audit écrit par applyStatusAction pour « Marquer terminé » (offers.ts, STATUS_ACTIONS.terminer). */
const DONE_AUDIT = "marquer terminé";

/**
 * Fin de chantier d'un job, ou null s'il n'est pas terminé.
 * Contrat : le volet A met le job à l'état « termine » et ajoute `completedAt` (ISO).
 * Repli : dernière entrée d'audit « marquer terminé » (fermeture par le propriétaire), puis updatedAt.
 */
export function jobCompletion(job: Job): { completedAt: string; source: "completedAt" | "audit" | "updatedAt" } | null {
  if (job.status !== "termine") return null;
  const explicit = (job as Job & { completedAt?: unknown }).completedAt;
  if (typeof explicit === "string" && !Number.isNaN(Date.parse(explicit))) return { completedAt: new Date(explicit).toISOString(), source: "completedAt" };
  const done = [...job.audit].reverse().find((a) => a.action === DONE_AUDIT || a.action.startsWith("chantier fermé") || a.action.startsWith("job fermé"));
  if (done) return { completedAt: done.at, source: "audit" };
  return { completedAt: job.updatedAt, source: "updatedAt" };
}

/** Numéros de série saisis à la fin du chantier (volet A). Formes acceptées, à ajuster à la fusion. */
export function installedEquipment(job: Job, field?: { outdoor: string[]; indoor: string[] } | null): { outdoorSerial: string | null; indoorSerials: string[] } {
  // Fusion du volet A : numéros saisis à la fermeture du chantier (terrain.json, via getCompletion) en priorité.
  const fo = (field?.outdoor ?? []).map((s) => s.trim()).filter(Boolean);
  const fi = (field?.indoor ?? []).map((s) => s.trim()).filter(Boolean);
  if (fo.length || fi.length) return { outdoorSerial: fo.length ? fo.join(", ").slice(0, 120) : null, indoorSerials: fi.map((s) => s.slice(0, 60)) };
  const j = job as Job & Record<string, unknown>;
  const pick = (v: unknown): string | null => (typeof v === "string" && v.trim() ? v.trim().slice(0, 60) : null);
  const bags = [j.completion, j.closeout, j.fieldwork, j.terrain, j].filter((x): x is Record<string, unknown> => Boolean(x) && typeof x === "object");
  let outdoor: string | null = null;
  let indoor: string[] = [];
  for (const b of bags) {
    const s = (b.serials && typeof b.serials === "object" ? b.serials : b) as Record<string, unknown>;
    outdoor ??= pick(s.outdoorSerial) ?? pick(s.outdoor) ?? pick(s.serialOutdoor);
    const ind = s.indoorSerials ?? s.indoor ?? s.serialIndoor;
    if (!indoor.length) {
      if (Array.isArray(ind)) indoor = ind.map(pick).filter((x): x is string => Boolean(x));
      else if (pick(ind)) indoor = [pick(ind)!];
    }
  }
  return { outdoorSerial: outdoor, indoorSerials: indoor.slice(0, 8) };
}

/* ---------------- Job → soumission acceptée ---------------- */

export interface AcceptedQuote {
  quote: Quote;
  version: QuoteVersion;
  acceptance: Acceptance;
  /** Comment le lien a été trouvé (affiché au propriétaire). */
  via: "choisie" | "job" | "notes" | "client";
}

function accepted(q: Quote): { version: QuoteVersion; acceptance: Acceptance } | null {
  const v = [...q.versions].reverse().find((x) => x.acceptance);
  return v?.acceptance ? { version: v, acceptance: v.acceptance } : null;
}

const phoneKey = (p: string | null | undefined) => (p ? toE164(p) : null);
const emailKey = (e: string | null | undefined) => (e && e.includes("@") ? e.trim().toLowerCase() : null);

/**
 * Soumission acceptée d'où vient le job, dans l'ordre :
 * 1. choisie à la main dans /gestion (jobLinks) ;
 * 2. `quoteId` du job, s'il existe (bouton « Créer le job depuis la soumission acceptée », volet C) ;
 * 3. numéro de soumission dans les notes internes (« Soumission 2026-0012 acceptée le … », pré-remplissage de la phase 1) ;
 * 4. même client (téléphone ou courriel) : la dernière acceptée avant la fin du chantier et pas encore facturée.
 * null si rien de sûr : aucun montant n'est jamais deviné.
 */
export function acceptedQuoteForJob(job: Job, quotes: Quote[], opts: { linkedQuoteId?: string | null; invoicedQuoteIds?: ReadonlySet<string>; completedAt?: string } = {}): AcceptedQuote | null {
  const byId = (id: string | null | undefined) => (id ? quotes.find((q) => q.id === id) : undefined);
  const wrap = (q: Quote | undefined, via: AcceptedQuote["via"]): AcceptedQuote | null => {
    if (!q) return null;
    const a = accepted(q);
    return a ? { quote: q, ...a, via } : null;
  };
  if (opts.linkedQuoteId) return wrap(byId(opts.linkedQuoteId), "choisie");
  const own = (job as Job & { quoteId?: unknown }).quoteId;
  if (typeof own === "string") {
    const r = wrap(byId(own), "job");
    if (r) return r;
  }
  const m = /Soumission\s+([A-Za-z0-9-]{3,30})\b/.exec(job.internalNotes ?? "");
  if (m) {
    const r = wrap(quotes.find((q) => q.number === m[1]), "notes");
    if (r) return r;
  }
  const phone = phoneKey(job.client.phone);
  const email = emailKey(job.client.email);
  if (!phone && !email) return null;
  const limit = opts.completedAt ? Date.parse(opts.completedAt) : Number.POSITIVE_INFINITY;
  const candidates = quotes
    .map((q) => ({ q, a: accepted(q) }))
    .filter((x): x is { q: Quote; a: { version: QuoteVersion; acceptance: Acceptance } } => Boolean(x.a))
    .filter(({ q, a }) => {
      const c = a.version.content.client;
      const same = (phone && phoneKey(c.phone) === phone) || (email && emailKey(c.email) === email);
      return Boolean(same) && Date.parse(a.acceptance.at) <= limit && !opts.invoicedQuoteIds?.has(q.id);
    })
    .sort((x, y) => y.a.acceptance.at.localeCompare(x.a.acceptance.at));
  const best = candidates[0];
  return best ? { quote: best.q, version: best.a.version, acceptance: best.a.acceptance, via: "client" } : null;
}
