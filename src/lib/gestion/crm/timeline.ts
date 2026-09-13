/* ==================================================================
   Chronologie d'un client, du plus récent au plus ancien :
   demandes (journal), appels et messages vocaux, soumissions (envois,
   relances, consultations, questions, acceptation, refus), jobs (créé,
   offres, statuts), textos, relances par courriel et demandes d'avis,
   notes, changements d'étape manuels, tâches faites, affaires
   Pipedrive. Limitée aux 24 derniers mois.
   Affichée seulement dans la fiche du client.
   ================================================================== */

import { CHANNEL_LABELS } from "@/lib/attribution/core";
import { money } from "@/lib/soumissions/money";
import { channelOfEntry, isEventLine, KIND_LABELS } from "./sources";
import { STAGE_LABELS, type ClientBundle, type TaskStateEntry } from "./types";

export type TimelineKind =
  | "demande"
  | "appel"
  | "vocal"
  | "rdv"
  | "texto-in"
  | "texto-out"
  | "soumission"
  | "vue"
  | "question"
  | "acceptation"
  | "refus"
  | "job"
  | "offre"
  | "courriel"
  | "note"
  | "etape"
  | "tache"
  | "pipedrive"
  // Chantier D : visite photo à distance (« Photos reçues »).
  | "photos";

export interface TimelineItem {
  key: string;
  at: string;
  kind: TimelineKind;
  title: string;
  detail?: string;
  href?: string;
  external?: boolean;
  tone?: "ok" | "bad" | "warn" | "orange" | "muted";
}

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const clip = (s: string | undefined, n = 280) => (s && s.length > n ? `${s.slice(0, n - 1)}…` : s);
const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

const RELANCE_LABELS: Record<string, string> = {
  "thermomatch-j2": "Courriel de suivi ThermoMatch (J+2)",
  "thermomatch-j7": "Rappel LogisVert par courriel (J+7)",
  avis: "Demande d’avis Google",
};
const CANCEL_LABELS: Record<string, string> = {
  desabonnement: "désabonnement",
  soumission: "une soumission a suivi",
  "rendez-vous": "un rendez-vous a suivi",
  remplacee: "remplacé",
  catalogue: "catalogue changé",
  expiree: "trop tard",
  echecs: "échecs d’envoi",
};
const JOB_ACTIONS: Record<string, string> = {
  "marquer planifié": "Job planifié",
  "marquer terminé": "Job terminé",
  "annuler le job": "Job annulé",
  "remettre à offrir": "Job remis à offrir",
  rouvrir: "Job rouvert",
};
const CHANNEL_SEND: Record<string, string> = { envoye: "envoyé", echec: "échec", "non-configure": "non configuré", "sans-numero": "sans numéro" };

export function buildTimeline(b: ClientBundle, opts: { now: Date; installers?: Record<string, string>; taskState?: Record<string, TaskStateEntry>; tasksDone?: Array<{ at: string; title: string }> }): TimelineItem[] {
  const items: TimelineItem[] = [];
  const inst = (id: string) => opts.installers?.[id] ?? "un installateur";

  for (const e of b.journal) {
    if (isEventLine(e)) continue;
    const lead = (e.lead ?? {}) as Record<string, unknown>;
    const k = `j:${e.id}`;
    const channel = CHANNEL_LABELS[channelOfEntry(e)];
    switch (e.kind) {
      case "appel-manque":
        items.push({ key: k, at: e.at, kind: "appel", title: "Appel manqué", detail: str(lead.dept) ? `Service : ${lead.dept}` : undefined, tone: "warn" });
        break;
      case "message-vocal":
        items.push({ key: k, at: e.at, kind: "vocal", title: "Message vocal", detail: clip(str(lead.transcription)) ?? "Transcription non disponible", tone: "warn" });
        break;
      case "appel-enregistre":
        items.push({ key: k, at: e.at, kind: "appel", title: "Appel enregistré", detail: typeof lead.duration === "number" || str(lead.duration) ? `Durée : ${lead.duration} s` : undefined });
        break;
      case "rendez-vous":
        items.push({ key: k, at: e.at, kind: "rdv", title: "Rendez-vous réservé", detail: [str(lead.when) ?? str(lead.date), channel].filter(Boolean).join(" · "), tone: "orange" });
        break;
      case "texto":
        items.push({ key: k, at: e.at, kind: "texto-in", title: "Premier texto", detail: clip(str(lead.message)), tone: "orange" });
        break;
      case "contact":
        items.push({ key: k, at: e.at, kind: "demande", title: "Message par le formulaire de contact", detail: clip([str(lead.subject), str(lead.message)].filter(Boolean).join(" — ")), tone: "orange" });
        break;
      case "thermomatch": {
        const choices = Array.isArray(lead.choices) ? (lead.choices as unknown[]).filter((x) => typeof x === "string").join(", ") : "";
        items.push({ key: k, at: e.at, kind: "demande", title: "ThermoMatch", detail: [choices ? `Choix : ${choices}` : null, channel].filter(Boolean).join(" · "), tone: "orange" });
        break;
      }
      case "alerte-logisvert":
        items.push({ key: k, at: e.at, kind: "courriel", title: "Inscription aux alertes LogisVert", detail: str(lead.label), tone: "muted" });
        break;
      default:
        items.push({ key: k, at: e.at, kind: "demande", title: KIND_LABELS[e.kind] ?? "Demande", detail: channel, tone: "orange" });
    }
  }

  for (const q of b.quotes) {
    const href = `/gestion/soumissions/${q.id}`;
    items.push({ key: `q:${q.id}:creee`, at: q.createdAt, kind: "soumission", title: `Soumission ${q.number} créée`, href, tone: "muted" });
    for (const v of q.versions) {
      const tag = `Soumission ${q.number}${v.v > 1 ? ` (v${v.v})` : ""}`;
      v.sends.forEach((s, i) => {
        const chans = [`courriel ${CHANNEL_SEND[s.email] ?? s.email}`, s.sms ? `texto ${CHANNEL_SEND[s.sms] ?? s.sms}` : null].filter(Boolean).join(", ");
        items.push({ key: `q:${q.id}:v${v.v}:s${i}`, at: s.at, kind: "soumission", title: s.kind === "relance" ? `${tag} renvoyée (relance)` : `${tag} envoyée`, detail: chans.charAt(0).toUpperCase() + chans.slice(1), href });
      });
      if (!v.sends.length && v.sentAt) items.push({ key: `q:${q.id}:v${v.v}:sent`, at: v.sentAt, kind: "soumission", title: `${tag} envoyée`, href });
      if (v.views.count > 0 && v.views.firstAt) {
        items.push({ key: `q:${q.id}:v${v.v}:vue`, at: v.views.firstAt, kind: "vue", title: `${tag} ouverte par le client`, detail: v.views.count > 1 ? `${plural(v.views.count, "consultation", "consultations")} en tout` : undefined, href });
      }
      v.questions.forEach((x, i) => items.push({ key: `q:${q.id}:v${v.v}:q${i}`, at: x.at, kind: "question", title: "Question du client", detail: clip(x.message), href, tone: "warn" }));
      if (v.acceptance) items.push({ key: `q:${q.id}:v${v.v}:ok`, at: v.acceptance.at, kind: "acceptation", title: `${tag} acceptée`, detail: `${money(v.acceptance.totalCents)} taxes comprises`, href, tone: "ok" });
      if (v.refusal) items.push({ key: `q:${q.id}:v${v.v}:non`, at: v.refusal.at, kind: "refus", title: `${tag} refusée`, detail: clip(v.refusal.reason) || undefined, href, tone: "bad" });
    }
  }

  for (const j of b.jobs) {
    const href = `/gestion/jobs/${j.id}`;
    items.push({ key: `job:${j.id}`, at: j.createdAt, kind: "job", title: `Job n° ${j.number} créé`, href });
    for (const o of j.offers) {
      items.push({ key: `job:${j.id}:${o.id}`, at: o.sentAt, kind: "offre", title: `Offre envoyée à ${inst(o.installerId)}`, href, tone: "muted" });
      if (o.response === "accepte" && o.respondedAt) items.push({ key: `job:${j.id}:${o.id}:ok`, at: o.respondedAt, kind: "offre", title: `${inst(o.installerId)} a pris le job`, href, tone: "ok" });
      if (o.response === "refuse" && o.respondedAt) items.push({ key: `job:${j.id}:${o.id}:non`, at: o.respondedAt, kind: "offre", title: `${inst(o.installerId)} a refusé`, detail: o.reason || undefined, href, tone: "bad" });
      if (!o.response && Date.parse(o.expiresAt) <= opts.now.getTime()) items.push({ key: `job:${j.id}:${o.id}:exp`, at: o.expiresAt, kind: "offre", title: `Offre expirée sans réponse (${inst(o.installerId)})`, href, tone: "muted" });
    }
    j.audit.forEach((a, i) => {
      const title = JOB_ACTIONS[a.action];
      if (title) items.push({ key: `job:${j.id}:a${i}`, at: a.at, kind: "job", title, detail: a.detail?.replace(/prévu le (\d{4}-\d{2}-\d{2})/, (_, d) => `prévu le ${new Date(`${d}T12:00:00Z`).toLocaleDateString("fr-CA", { timeZone: "UTC", day: "numeric", month: "long" })}`), href, tone: title === "Job terminé" ? "ok" : title === "Job annulé" ? "bad" : undefined });
    });
  }

  for (const c of b.textos) {
    for (const m of c.messages.slice(-40)) {
      const href = `/gestion/textos/${c.id}`;
      if (m.dir === "in") items.push({ key: `t:${c.id}:${m.id}`, at: m.at, kind: "texto-in", title: m.keyword ? "Texto : mot-clé" : "Texto reçu", detail: clip(m.body) || (m.media?.length ? "Pièce jointe" : undefined), href });
      else items.push({ key: `t:${c.id}:${m.id}`, at: m.at, kind: "texto-out", title: m.auto ? "Réponse automatique" : "Texto envoyé", detail: clip(m.body), href, tone: m.auto ? "muted" : undefined });
    }
  }

  for (const r of b.relances) {
    const label = RELANCE_LABELS[r.kind] ?? "Courriel";
    if (r.sentAt) items.push({ key: `r:${r.id}`, at: r.sentAt, kind: "courriel", title: `${label} envoyé`, tone: "muted" });
    else if (r.status === "cancelled" && r.cancelledAt) items.push({ key: `r:${r.id}`, at: r.cancelledAt, kind: "courriel", title: `${label} annulé`, detail: r.cancelReason ? CANCEL_LABELS[r.cancelReason] : undefined, tone: "muted" });
  }

  for (const n of b.record?.notes ?? []) items.push({ key: `n:${n.id}`, at: n.at, kind: "note", title: n.kind === "appel" ? "Appel noté" : "Note", detail: clip(n.text, 600) });
  for (const [i, s] of (b.record?.stageLog ?? []).entries()) items.push({ key: `s:${i}:${s.at}`, at: s.at, kind: "etape", title: `Étape : ${STAGE_LABELS[s.to]}`, detail: s.reason || undefined, tone: s.to === "perdue" ? "bad" : undefined });
  for (const [i, t] of (opts.tasksDone ?? []).entries()) items.push({ key: `d:${i}:${t.at}`, at: t.at, kind: "tache", title: `Fait : ${t.title}`, tone: "ok" });

  const dealAt = new Map<number, string>();
  for (const tp of b.touchpoints) if (tp.dealId && (!dealAt.has(tp.dealId) || tp.at < dealAt.get(tp.dealId)!)) dealAt.set(tp.dealId, tp.at);
  for (const [id, at] of dealAt) items.push({ key: `pd:${id}`, at, kind: "pipedrive", title: `Affaire Pipedrive n° ${id}`, href: `https://app.pipedrive.com/deal/${id}`, external: true, tone: "muted" });

  // À la même seconde : l'affaire Pipedrive et l'envoi viennent après la demande et la création (affichage du plus récent au plus ancien).
  const weight = (i: TimelineItem) => (i.kind === "pipedrive" ? 0 : i.key.endsWith(":creee") || i.key.startsWith("j:") ? 2 : 1);
  const from = opts.now.getTime() - 730 * 86_400_000;
  return items.filter((i) => Date.parse(i.at) >= from).sort((a, b2) => b2.at.localeCompare(a.at) || weight(a) - weight(b2) || a.key.localeCompare(b2.key));
}
