/* ==================================================================
   Refonte R2 — bilan de la semaine (rapport hebdomadaire du volet B) :
   ce qui a marché, ce qui bloque, quoi faire. Construit PAR RÈGLES à
   partir des faits des sept derniers jours ; l'assistant IA peut
   ensuite le reformuler (automatisations/bilan-ia.ts), sans jamais
   ajouter de chiffre. Pur, sur l'index reçu.
   Montants taxes comprises ; l'aide LogisVert n'est jamais un revenu
   et n'apparaît pas ici.
   ================================================================== */

import { jobCompletion } from "../commissions/link";
import type { CrmIndex } from "./model";
import { deadlineOf, LOSS_CAUSE_LABELS, LOSS_MOTIF_LABELS, parcoursSettingsOf, stepDelay, stepLabel, type JourneyStep } from "./parcours";
import { topPriorities } from "./priorite";

export interface Bilan {
  wins: string[];
  blocks: string[];
  todo: string[];
  source: "regles" | "ia";
}

export interface BilanFacts {
  signed: { n: number; cents: number };
  wentAhead: number;
  installed: number;
  paid: { n: number; cents: number };
  lost: { n: number; top: string | null };
  blocked: { n: number; top: Array<{ label: string; n: number }> };
  slow: Array<{ label: string; n: number }>;
  alerts: number;
  /** Les dossiers les plus prioritaires où le propriétaire doit agir (prénom et ville seulement). */
  top: Array<{ who: string; action: string; score: string }>;
}

const DAY = 86_400_000;
const nf0 = new Intl.NumberFormat("fr-CA", { maximumFractionDigits: 0 });
export const dollarsFr = (cents: number): string => `${nf0.format(Math.round(cents / 100))} $`;
const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export function bilanFacts(index: CrmIndex, now: Date, alertsSent: number): BilanFacts {
  const from = now.getTime() - 7 * DAY;
  const inWeek = (iso: string | null | undefined) => Boolean(iso) && Date.parse(iso!) > from && Date.parse(iso!) <= now.getTime();
  const versions = index.src.quotes.flatMap((q) => q.versions);
  const acc = versions.map((v) => v.acceptance).filter((a): a is NonNullable<typeof a> => Boolean(a) && inWeek(a!.at));
  const paid = (index.src.parcours?.invoices ?? []).filter((i) => i.status === "payee" && inWeek(i.paidAt));
  const ps = parcoursSettingsOf(index.src.crm);

  const lost = new Map<string, number>();
  const blocked = new Map<string, number>();
  const slow = new Map<JourneyStep, number>();
  let blockedN = 0;
  for (const c of index.clients) {
    const j = c.journey;
    if (!j) continue;
    if (j.state === "perdu") {
      if (j.lost && inWeek(j.lost.at)) {
        const label = j.lost.cause ? LOSS_CAUSE_LABELS[j.lost.cause] : LOSS_MOTIF_LABELS[j.lost.motif];
        lost.set(label, (lost.get(label) ?? 0) + 1);
      }
      continue;
    }
    if (j.blockers.length) {
      blockedN++;
      blocked.set(j.blockers[0], (blocked.get(j.blockers[0]) ?? 0) + 1);
    }
    const d = stepDelay(j.state, ps, index.settings);
    if (d && deadlineOf(j.since, d).getTime() <= now.getTime()) slow.set(j.state, (slow.get(j.state) ?? 0) + 1);
  }
  const sorted = <K,>(m: Map<K, number>) => [...m.entries()].sort((a, b) => b[1] - a[1]);
  return {
    signed: { n: acc.length, cents: acc.reduce((s, a) => s + a.totalCents, 0) },
    wentAhead: versions.filter((v) => inWeek(v.jumelage?.at)).length,
    installed: index.src.jobs.filter((j) => j.kind !== "entretien" && inWeek(jobCompletion(j)?.completedAt)).length,
    paid: { n: paid.length, cents: paid.reduce((s, i) => s + i.totalCents, 0) },
    lost: { n: [...lost.values()].reduce((s, n) => s + n, 0), top: sorted(lost)[0]?.[0] ?? null },
    blocked: { n: blockedN, top: sorted(blocked).slice(0, 3).map(([label, n]) => ({ label, n })) },
    slow: sorted(slow).slice(0, 2).map(([s, n]) => ({ label: stepLabel(s, ps), n })),
    alerts: alertsSent,
    top: topPriorities(index, 3, { actor: "proprietaire" }).map(({ client, priority }) => ({
      who: `${client.b.firstName || "Client"}${client.b.city ? ` (${client.b.city})` : ""}`,
      action: client.tasks[0]?.title ?? client.journey!.actorWhy,
      score: priority.label,
    })),
  };
}

/** Lignes sans nom de client (celles qu'on peut confier à l'assistant IA) et lignes nominatives (jamais envoyées). */
export function bilanFromFacts(f: BilanFacts): Bilan & { named: string[] } {
  const wins: string[] = [];
  if (f.signed.n) wins.push(`${plural(f.signed.n, "contrat signé", "contrats signés")} (${dollarsFr(f.signed.cents)}, taxes comprises).`);
  if (f.wentAhead) wins.push(`${plural(f.wentAhead, "client est allé", "clients sont allés")} de l’avant.`);
  if (f.installed) wins.push(`${plural(f.installed, "installation terminée", "installations terminées")}.`);
  if (f.paid.n) wins.push(`${plural(f.paid.n, "commission encaissée", "commissions encaissées")} (${dollarsFr(f.paid.cents)}).`);
  if (!wins.length) wins.push("Aucune signature, installation ni commission encaissée cette semaine.");

  const blocks: string[] = [];
  if (f.blocked.n) blocks.push(`${plural(f.blocked.n, "dossier bloqué", "dossiers bloqués")} : ${f.blocked.top.map((b) => `${b.n} « ${b.label} »`).join(", ")}.`);
  if (f.slow.length) blocks.push(`Étapes au-delà de leur délai : ${f.slow.map((s) => `${s.label} (${plural(s.n, "dossier", "dossiers")})`).join(", ")}.`);
  if (f.alerts) blocks.push(`${plural(f.alerts, "alerte de délai envoyée", "alertes de délai envoyées")} par texto cette semaine.`);
  if (f.lost.n) blocks.push(`${plural(f.lost.n, "perte", "pertes")} cette semaine${f.lost.top ? `, surtout « ${f.lost.top} »` : ""}.`);
  if (!blocks.length) blocks.push("Rien de bloqué en ce moment.");

  const todo: string[] = [];
  if (f.slow[0]) todo.push(`Débloquer l’étape « ${f.slow[0].label} » : ${plural(f.slow[0].n, "dossier attend", "dossiers attendent")}.`);
  if (f.blocked.top[0]) todo.push(`Régler d’abord « ${f.blocked.top[0].label} » (${plural(f.blocked.top[0].n, "dossier", "dossiers")}).`);
  const named = f.top.map((t) => `${t.who} : ${t.action} (note ${t.score}).`);
  if (!todo.length && !named.length) todo.push("Rien d’urgent : suivre les tâches du jour.");
  return { wins, blocks, todo: [...todo, ...named], named, source: "regles" };
}
