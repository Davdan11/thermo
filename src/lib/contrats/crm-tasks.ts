/* ==================================================================
   Conformité C1 — tâches automatiques du parcours (calculées, jamais
   stockées, comme celles du volet A) :
     contrat-installateur  le client est allé de l'avant : installateur
                           à trouver (« depuis X h ») ;
     contrat-reponse       l'installateur refuse ou demande un changement ;
                           le client demande un autre installateur ;
     contrat-date          signé sans date réservée 48 h après, ou date
                           confirmée dépassée sans « en route ».
   Branché dans computeIndex (crm/model.ts) par une boucle commentée.
   ================================================================== */

import type { Task, TaskFamily, TaskRule } from "@/lib/gestion/crm/tasks";
import { readTerrain } from "@/lib/gestion/terrain/store";
import type { Job } from "@/lib/gestion/types";
import { latestSent } from "@/lib/soumissions/quote";
import type { Quote } from "@/lib/soumissions/types";
import { activeContract, clientStage } from "./regles";
import { readContrats } from "./store";
import type { ContratsData } from "./types";

export interface ContratTaskInput {
  contrats: ContratsData;
  records: Record<string, { enRoute?: unknown; arrivedAt?: unknown }>;
}

export async function readContratTaskInput(): Promise<ContratTaskInput> {
  const [contrats, terrain] = await Promise.all([readContrats(), readTerrain()]);
  const records: ContratTaskInput["records"] = {};
  for (const [id, r] of Object.entries(terrain.records)) records[id] = { enRoute: r.enRoute, arrivedAt: r.arrivedAt };
  return { contrats, records };
}

const HOUR = 3_600_000;
const FAMILY: TaskFamily = "jobs";

function mk(rule: TaskRule, key: string, fields: Pick<Task, "title" | "detail" | "dueAt" | "href"> & { quoteId?: string; jobId?: string }): Task {
  return { key: `auto:${rule}:${key}`, rule, family: FAMILY, clientId: null, manual: false, snoozed: false, ...fields };
}

/** « 5 h », « 2 jours ». */
export function sinceFr(fromIso: string, now: Date): string {
  const h = Math.max(0, Math.floor((now.getTime() - Date.parse(fromIso)) / HOUR));
  return h < 48 ? `${h} h` : `${Math.floor(h / 24)} jours`;
}

/** « Julie T. » */
export function shortWho(first: string, last: string): string {
  const f = first.trim();
  const l = last.trim();
  return [f, l ? `${l.charAt(0).toUpperCase()}.` : ""].filter(Boolean).join(" ") || "le client";
}

export function contratAutoTasks(input: ContratTaskInput | undefined, quotes: readonly Quote[], jobs: readonly Job[], now: Date): Task[] {
  if (!input) return [];
  const out: Task[] = [];
  const today = now.toISOString().slice(0, 10);
  for (const q of quotes) {
    const v = latestSent(q);
    if (!v) continue;
    const d = input.contrats.dossiers.find((x) => x.quoteId === q.id);
    const who = shortWho(v.content.client.firstName, v.content.client.lastName);
    const href = `/gestion/soumissions/${q.id}#parcours`;
    const offerOpen = Boolean(d?.offer && d.offer.versionId === v.id && jobs.some((j) => j.id === d.offer!.jobId && (j.status === "nouveau" || j.status === "offert" || j.status === "attribue")));
    const stage = clientStage(d, v.id, { jumelage: Boolean(v.jumelage), offerOpen });

    if (stage === "recherche" && v.jumelage) {
      out.push(mk("contrat-installateur", `${q.id}:${v.id}`, { title: `Trouver l’installateur pour ${who}`, detail: `Client prêt, installateur à trouver depuis ${sinceFr(v.jumelage.at, now)} · soumission ${q.number}`, dueAt: v.jumelage.at, href, quoteId: q.id }));
    }
    if (stage === "finalisation" && d) {
      const last = [...d.proposals].filter((p) => p.versionId === v.id).sort((a, b) => a.createdAt.localeCompare(b.createdAt)).pop();
      const asked = [...d.contracts].reverse().find((c) => c.versionId === v.id && c.status === "autre-installateur");
      if (asked?.refusal) out.push(mk("contrat-reponse", `${q.id}:${asked.id}:autre`, { title: `${who} demande un autre installateur`, detail: asked.refusal.reason || `Soumission ${q.number}`, dueAt: asked.refusal.at, href, quoteId: q.id }));
      else if (last && (last.status === "refusee" || last.status === "changements")) {
        const msg = last.messages.at(-1);
        out.push(
          mk("contrat-reponse", `${q.id}:${last.id}:${last.status}`, {
            title: last.status === "refusee" ? `${last.company} refuse le projet de ${who} : choisir un autre installateur` : `${last.company} demande des changements pour ${who}`,
            detail: msg?.text.slice(0, 160) || `Soumission ${q.number}`,
            dueAt: msg?.at ?? last.createdAt,
            href,
            quoteId: q.id,
          }),
        );
      }
    }
    const c = activeContract(d);
    if (d && c?.status === "signe" && c.signature && d.jobId) {
      const job = jobs.find((j) => j.id === d.jobId);
      if (job && (job.status === "attribue" || job.status === "planifie")) {
        const due = new Date(Date.parse(c.signature.at) + 48 * HOUR).toISOString();
        if (!job.scheduledFor && due <= now.toISOString()) out.push(mk("contrat-date", `${q.id}:${job.id}:sans-date`, { title: `Réserver la date du job n° ${job.number} (${who})`, detail: `Contrat signé depuis ${sinceFr(c.signature.at, now)}, aucune date réservée`, dueAt: due, href: `/gestion/jobs/${job.id}`, jobId: job.id }));
        const s = c.doc.project.schedule;
        const end = s.mode === "date" ? s.date : s.mode === "fenetre" ? s.windowEnd : "";
        const r = input.records[job.id];
        if (end && end < today && !r?.enRoute && !r?.arrivedAt) out.push(mk("contrat-date", `${q.id}:${job.id}:depassee:${end}`, { title: `Date confirmée dépassée sans « en route » : job n° ${job.number} (${who})`, detail: `${c.doc.installer.tradeName || c.doc.installer.legalName} · date confirmée au contrat`, dueAt: `${end}T23:00:00.000Z`, href: `/gestion/jobs/${job.id}`, jobId: job.id }));
      }
    }
  }
  return out;
}
