/* ==================================================================
   Conformité C2 — prospects inactifs : conservation de 24 mois (politique
   4.10, décision approuvée en 8.1), ensuite anonymisation.

   Un prospect = un client du CRM (traces réunies) SANS contrat :
     - exclus « contrat »  : soumission acceptée ou job ;
     - exclus « garantie » : installation terminée (7 ans, politique) ;
     - exclus « litige »   : étiquette ou raison de perte « litige »,
                             « plainte », « gel » (gel de preuve).
   Inactif : dernière trace (demande, texto, note, étape, tâche) plus
   vieille que N mois (24 par défaut).

   Mode essai (par défaut) : rien n'est modifié ; le bilan compte ce qui
   le serait. Mode réel :
     - demandes du journal : ligne gardée (type, date, territoire) mais
       sans rien qui identifie, marquée « anonymise » (elle ne recrée
       jamais un client) ;
     - fiche CRM : notes, étiquettes, étapes, tâches, contacts saisis
       et consentements de saison retirés ;
     - rappels (relances) : messages retirés (la liste de désabonnement,
       en empreintes, reste) ;
     - téléphonie : réponses en 60 s retirées ; appels et
       enregistrements sans numéro ni transcription ;
     - textos : conversation retirée (fil vidé mais numéro gardé s'il
       s'est désabonné : STOP respecté) ;
     - rendez-vous : coordonnées effacées.
   Non touchés : soumissions (créateur de soumissions) et preuves de
   consentement (conservation propre de 3 ans). Journal d'audit à
   chaque passage (essai ou réel).
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { journalDir, type JournalEntry } from "@/lib/crm/lead-journal";
import type { ClientBundle, CrmTask } from "@/lib/gestion/crm/types";
import { DEFAULT_INACTIVE_MONTHS, type RetentionMode, type RetentionReport } from "./reglages";

const LITIGE_RE = /litige|plainte|\bgel\b|poursuite|r[ée]clamation/i;

export type Exclusion = "contrat" | "garantie" | "litige";

export function addMonths(d: Date, months: number): Date {
  const x = new Date(d.getTime());
  x.setUTCMonth(x.getUTCMonth() + months);
  return x;
}

const maxIso = (xs: Array<string | null | undefined>) => xs.filter((x): x is string => typeof x === "string" && !Number.isNaN(Date.parse(x))).sort().pop() ?? "1970-01-01T00:00:00.000Z";

/** Dernière activité : traces du client, notes, étapes, tâches. */
export function lastActivity(b: ClientBundle, tasks: CrmTask[]): string {
  const ids = new Set([b.id, ...b.aliases]);
  const r = b.record;
  return maxIso([
    b.lastAt,
    r?.updatedAt,
    ...(r?.notes ?? []).map((n) => n.at),
    ...(r?.stageLog ?? []).map((s) => s.at),
    ...tasks.filter((t) => t.clientId && ids.has(t.clientId)).flatMap((t) => [t.createdAt, t.doneAt]),
  ]);
}

/** Dossier gardé : litige (étiquette ou raison de perte), garantie (installation terminée), contrat (soumission acceptée ou job). */
export function exclusionOf(b: ClientBundle): Exclusion | null {
  const r = b.record;
  if (r?.tags.some((t) => LITIGE_RE.test(t)) || (r?.lost?.reason && LITIGE_RE.test(r.lost.reason))) return "litige";
  if (b.jobs.some((j) => j.status === "termine")) return "garantie";
  if (b.jobs.length || b.quotes.some((q) => q.versions.some((v) => v.acceptance))) return "contrat";
  return null;
}

export function inactiveProspects(bundles: ClientBundle[], tasks: CrmTask[], now: Date, months: number): { candidates: ClientBundle[]; exclus: Record<Exclusion, number> } {
  const cutoff = addMonths(now, -months).toISOString();
  const candidates: ClientBundle[] = [];
  const exclus: Record<Exclusion, number> = { contrat: 0, garantie: 0, litige: 0 };
  for (const b of bundles) {
    if (lastActivity(b, tasks) >= cutoff) continue;
    const ex = exclusionOf(b);
    if (ex) exclus[ex]++;
    else candidates.push(b);
  }
  return { candidates, exclus };
}

/** Ligne du journal sans rien qui identifie : type, date, territoire, type de système et page d'origine seulement. */
export function anonymizeEntry(e: JournalEntry): JournalEntry {
  if (e.outcome) {
    const { error: _error, meetLink: _meet, ...rest } = e.outcome;
    return { id: e.id, at: e.at, kind: e.kind, lead: {}, outcome: rest };
  }
  const lead = (e.lead ?? {}) as Record<string, unknown>;
  const keep: Record<string, unknown> = { event: "anonymise" };
  for (const k of ["territory", "typeThermopompe", "source"]) if (typeof lead[k] === "string") keep[k] = lead[k];
  return { id: e.id, at: e.at, kind: e.kind, lead: keep };
}

/** Réécrit les lignes visées (fichiers mensuels anciens : plus aucun ajout n'y arrive). Renvoie le nombre de demandes touchées. */
async function rewriteJournal(ids: Set<string>, write: boolean): Promise<number> {
  const dir = journalDir();
  let files: string[] = [];
  try {
    files = (await fs.readdir(dir)).filter((f) => /^\d{4}-\d{2}\.jsonl$/.test(f));
  } catch {
    return 0;
  }
  let n = 0;
  for (const f of files) {
    const file = path.join(dir, f);
    const raw = await fs.readFile(file, "utf8");
    let changed = false;
    const out = raw.split("\n").map((line) => {
      if (!line.trim()) return line;
      let e: JournalEntry;
      try {
        e = JSON.parse(line) as JournalEntry;
      } catch {
        return line;
      }
      if (!ids.has(e.id)) return line;
      if (!e.outcome && (e.lead as { event?: unknown } | undefined)?.event === "anonymise") return line;
      changed = true;
      if (!e.outcome) n++;
      return JSON.stringify(anonymizeEntry(e));
    });
    if (changed && write) {
      const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
      await fs.writeFile(tmp, out.join("\n"), "utf8");
      await fs.rename(tmp, file);
    }
  }
  return n;
}

export interface RetentionOptions {
  now?: Date;
  mode: RetentionMode;
  months?: number;
  log?: (line: string) => void;
}

export async function runProspectRetention(o: RetentionOptions): Promise<RetentionReport> {
  const now = o.now ?? new Date();
  const months = o.months ?? DEFAULT_INACTIVE_MONTHS;
  const write = o.mode === "reel";
  const { freshIndex, resetCrmMemo } = await import("@/lib/gestion/crm/service");
  const index = await freshIndex(now);
  const bundles = index.clients.map((c) => c.b);
  const { candidates, exclus } = inactiveProspects(bundles, index.src.crm.tasks, now, months);
  const ids = new Set(candidates.flatMap((b) => [b.id, ...b.aliases]));
  const emails = new Set(candidates.flatMap((b) => b.emails));
  const phones = new Set(candidates.flatMap((b) => b.phones));
  const journalIds = new Set(candidates.flatMap((b) => b.journal.map((e) => e.id)));
  const elements: Record<string, number> = {};

  elements.demandes = await rewriteJournal(journalIds, write);

  const { mutateCrm } = await import("@/lib/gestion/crm/store");
  elements.fiches = await mutateCrm((d) => {
    const manual = new Set(candidates.flatMap((b) => b.manual.map((m) => m.id)));
    let fiches = 0;
    for (const id of ids) if (d.clients[id]) fiches++;
    if (!write || !candidates.length) return { result: fiches, changed: false };
    for (const id of ids) delete d.clients[id];
    d.manualContacts = d.manualContacts.filter((m) => !manual.has(m.id));
    d.tasks = d.tasks.filter((t) => !(t.clientId && ids.has(t.clientId)));
    for (const [k, v] of Object.entries(d.taskState)) if (v.clientId && ids.has(v.clientId)) delete d.taskState[k];
    for (const id of ids) delete d.seasonConsents[id];
    for (const [alias, target] of Object.entries(d.aliases)) if (ids.has(alias) || ids.has(target)) delete d.aliases[alias];
    return { result: fiches, changed: true };
  });

  const { forgetEmails } = await import("@/lib/relances/store");
  elements.rappels = await forgetEmails([...emails], { dryRun: !write });

  const { mutateTelephonie } = await import("@/lib/telephonie/store");
  const tel = await mutateTelephonie((d) => {
    const leads = d.leads.filter((l) => l.phone && phones.has(l.phone)).length;
    const calls = d.calls.filter((c) => phones.has(c.phone));
    const recs = d.recordings.filter((r) => r.phone && phones.has(r.phone));
    if (write && (leads || calls.length || recs.length)) {
      d.leads = d.leads.filter((l) => !(l.phone && phones.has(l.phone)));
      for (const c of calls) {
        c.phone = "";
        c.label = "Prospect anonymisé";
        c.context = "";
      }
      for (const r of recs) {
        delete r.phone;
        delete r.transcript;
        delete r.summary;
        delete r.need;
        delete r.budget;
        delete r.nextStep;
      }
    }
    return { result: { leads, appels: calls.length, enregistrements: recs.length }, changed: write && (leads > 0 || calls.length > 0 || recs.length > 0) };
  });
  Object.assign(elements, { reponses60s: tel.leads, appels: tel.appels, enregistrements: tel.enregistrements });

  const { mutateTextos } = await import("@/lib/textos/store");
  elements.textos = await mutateTextos((d) => {
    const hit = [...phones].filter((p) => d.conversations[p]);
    if (write)
      for (const p of hit) {
        const c = d.conversations[p];
        if (c.optedOut) {
          // Désabonné (STOP) : le numéro reste pour respecter le désabonnement, le fil disparaît.
          (c as unknown as { messages: unknown[] }).messages = [];
        } else delete d.conversations[p];
      }
    return { result: hit.length, changed: write && hit.length > 0 };
  });

  const rdv = await import("@/lib/rdv/store");
  const bookings = (await rdv.listBookings().catch(() => [])).filter((b) => emails.has(b.email?.trim().toLowerCase()) || [...phones].some((p) => b.phone && p.endsWith(b.phone.replace(/\D/g, "").slice(-10))));
  elements.rendezVous = bookings.length;
  if (write)
    for (const b of bookings) await rdv.updateBooking(b.id, { firstName: "", lastName: "", phone: "", email: "", address: "", city: "", notes: "", userAgent: "", referer: "" }).catch(() => undefined);

  elements.soumissionsNonTouchees = candidates.filter((b) => b.quotes.length).length;
  if (write && candidates.length) resetCrmMemo();

  const report: RetentionReport = { at: now.toISOString(), mode: o.mode, prospects: candidates.length, exclus, elements, preuves: { ipRetirees: 0, supprimees: 0, appelsSupprimes: 0 } };
  const { audit } = await import("@/lib/gestion/securite/audit");
  await audit(write ? "prospects.anonymisation" : "prospects.essai", { mois: months, prospects: candidates.length, demandes: elements.demandes, fiches: elements.fiches, contrats: exclus.contrat, garanties: exclus.garantie, litiges: exclus.litige }, { qui: "robot (conservation)", ip: null });
  o.log?.(`${write ? "anonymisés" : "essai"} : ${candidates.length} prospect(s) inactif(s) depuis ${months} mois ; exclus ${exclus.contrat} contrat(s), ${exclus.garantie} garantie(s), ${exclus.litige} litige(s)`);
  return report;
}
