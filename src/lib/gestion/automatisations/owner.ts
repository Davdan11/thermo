/* ==================================================================
   Messages au PROPRIÉTAIRE : alertes (mauvaise note, problème ou
   changement demandé, entretien, aide LogisVert), résumé du matin et
   rapport hebdomadaire. Courriel aux adresses de ADMIN_EMAILS, texto
   à ALERT_SMS_TO (voir send.ts). Prénom et ville seulement : le reste
   est dans /gestion.
   ================================================================== */

import { box, brandedEmail, p, strong, t, ul } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import { money } from "@/lib/soumissions/money";
import type { Mail } from "./send";

const REASON = "Vous recevez ce courriel parce que vous êtes administrateur de l’outil de gestion.";
const OPT_OUT = "Interrupteurs : /gestion/automatisations.";

function ownerMail(o: { subject: string; preheader: string; body: string; cta?: { label: string; href: string } }, text: string): Mail {
  return { subject: o.subject, html: brandedEmail({ title: o.subject, preheader: o.preheader, body: o.body, cta: o.cta, reason: REASON, optOutText: OPT_OUT }), text };
}

export type AlertKind = "note" | "probleme" | "changer" | "entretien" | "logisvert-aide";

export interface AlertData {
  kind: AlertKind;
  who: string;
  jobNumber: number;
  installer: string;
  rating?: number;
  message?: string;
  href: string;
}

const TITLES: Record<AlertKind, (d: AlertData) => string> = {
  note: (d) => `Note de ${d.rating}/5 : rappeler ${d.who} (job n° ${d.jobNumber})`,
  probleme: (d) => `Problème signalé par ${d.who} (job n° ${d.jobNumber})`,
  changer: (d) => `${d.who} demande un changement (job n° ${d.jobNumber})`,
  entretien: (d) => `Entretien demandé par ${d.who} (job n° ${d.jobNumber})`,
  "logisvert-aide": (d) => `${d.who} a besoin d’aide pour LogisVert (job n° ${d.jobNumber})`,
};

export function ownerAlert(d: AlertData): { mail: Mail; sms: string } {
  const subject = TITLES[d.kind](d);
  const body =
    p(t(d.kind === "note" ? "Le client n’est pas satisfait de son installation. Rappelez-le rapidement : une tâche « rappeler le client » est dans À faire." : "Une tâche est dans À faire.")) +
    box("Détails", [
      ["Client", d.who],
      ["Job", `n° ${d.jobNumber}`],
      ["Installateur", d.installer || null],
      ["Note", d.rating ? `${d.rating}/5` : null],
    ]) +
    (d.message ? p(`${strong("Message du client")} : ${escapeHtml(d.message).replace(/\n/g, "<br>")}`) : "");
  const text = [subject, "", ...(d.message ? [`Message : ${d.message}`, ""] : []), d.href].join("\n");
  return { mail: ownerMail({ subject, preheader: subject, body, cta: { label: "Ouvrir dans /gestion", href: d.href } }, text), sms: `TAV : ${subject}. ${d.href}` };
}

/* ---------------- Résumé du matin ---------------- */

export interface MorningData {
  dayLabel: string;
  tasks: Array<{ title: string; detail: string; overdue: boolean }>;
  tasksTotal: number;
  overdueTasks: number;
  installs: Array<{ installer: string; count: number; items: string[] }>;
  installsTotal: number;
  overdueInvoices: Array<{ number: string; company: string; totalCents: number; days: number }>;
  overdueCents: number;
  hotQuotes: Array<{ who: string; number: string; views: number; totalCents: number }>;
  href: string;
}

export function morningDigest(d: MorningData): { mail: Mail; sms: string } {
  const subject = `Résumé du matin · ${d.dayLabel}`;
  const sec = (title: string, items: string[], empty: string) => p(strong(title)) + (items.length ? ul(items) : p(t(empty), { muted: true, small: true }));
  const body =
    box("Aujourd’hui", [
      ["Tâches", `${d.tasksTotal}${d.overdueTasks ? ` (dont ${d.overdueTasks} en retard)` : ""}`],
      ["Installations", String(d.installsTotal)],
      ["Paiements en retard", d.overdueInvoices.length ? `${d.overdueInvoices.length} · ${money(d.overdueCents)}` : "aucun"],
      ["Soumissions chaudes", String(d.hotQuotes.length)],
    ]) +
    sec("Tâches du jour", d.tasks.slice(0, 10).map((x) => `${x.overdue ? `<strong style="color:#b42318">En retard</strong> · ` : ""}${escapeHtml(x.title)} · <span style="color:#536873">${escapeHtml(x.detail)}</span>`), "Rien à faire pour l’instant.") +
    sec("Installations du jour", d.installs.map((g) => `${strong(g.installer)} · ${g.count} : ${escapeHtml(g.items.join(", "))}`), "Aucune installation prévue.") +
    sec("Paiements en retard", d.overdueInvoices.slice(0, 10).map((i) => `${escapeHtml(i.number)} · ${escapeHtml(i.company)} · ${escapeHtml(money(i.totalCents))} · ${i.days} j`), "Aucun retard.") +
    sec("Soumissions chaudes", d.hotQuotes.slice(0, 8).map((q) => `${escapeHtml(q.who)} · soumission ${escapeHtml(q.number)} ouverte ${q.views} fois · ${escapeHtml(money(q.totalCents))}`), "Aucune soumission consultée plusieurs fois récemment.");
  const text = [
    subject,
    "",
    `Tâches : ${d.tasksTotal}${d.overdueTasks ? ` (dont ${d.overdueTasks} en retard)` : ""}`,
    ...d.tasks.slice(0, 10).map((x) => `  - ${x.title} (${x.detail})`),
    `Installations : ${d.installsTotal}`,
    ...d.installs.map((g) => `  - ${g.installer} : ${g.items.join(", ")}`),
    `Paiements en retard : ${d.overdueInvoices.length}`,
    ...d.overdueInvoices.slice(0, 10).map((i) => `  - ${i.number} · ${i.company} · ${money(i.totalCents).replace(/ | /g, " ")} · ${i.days} j`),
    `Soumissions chaudes : ${d.hotQuotes.length}`,
    ...d.hotQuotes.slice(0, 8).map((q) => `  - ${q.who} · ${q.number} · ouverte ${q.views} fois`),
    "",
    d.href,
  ].join("\n");
  const sms = `TAV · ${d.dayLabel} : ${d.tasksTotal} tâche${d.tasksTotal > 1 ? "s" : ""}${d.overdueTasks ? ` (${d.overdueTasks} en retard)` : ""}, ${d.installsTotal} installation${d.installsTotal > 1 ? "s" : ""}, ${d.overdueInvoices.length} paiement${d.overdueInvoices.length > 1 ? "s" : ""} en retard${d.overdueInvoices.length ? ` (${money(d.overdueCents)})` : ""}, ${d.hotQuotes.length} soumission${d.hotQuotes.length > 1 ? "s" : ""} chaude${d.hotQuotes.length > 1 ? "s" : ""}. ${d.href}`;
  return { mail: ownerMail({ subject, preheader: sms.slice(6, 140), body, cta: { label: "Ouvrir l’accueil", href: d.href } }, text), sms };
}

/* ---------------- Rapport hebdomadaire ---------------- */

export interface WeeklyData {
  weekLabel: string;
  demands: number;
  installsDone: number;
  invoicesIssued: number;
  invoicedCents: number;
  receivedCents: number;
  overdueCents: number;
  overdueCount: number;
  surveys: number;
  avgRating: number | null;
  badRatings: number;
  logisvert: { aFaire: number; faite: number; recue: number; aide: number };
  referralDemands: number;
  href: string;
}

export function weeklyReport(d: WeeklyData): { mail: Mail; sms: string } {
  const subject = `Rapport de la semaine · ${d.weekLabel}`;
  const rating = d.avgRating !== null ? `${d.avgRating.toFixed(1).replace(".", ",")}/5 (${d.surveys} réponse${d.surveys > 1 ? "s" : ""})` : "aucune réponse";
  const rows: Array<[string, string]> = [
    ["Nouvelles demandes", String(d.demands)],
    ["Installations terminées", String(d.installsDone)],
    ["Factures de commission émises", `${d.invoicesIssued} · ${money(d.invoicedCents)}`],
    ["Paiements reçus", money(d.receivedCents)],
    ["En retard (en ce moment)", d.overdueCount ? `${d.overdueCount} · ${money(d.overdueCents)}` : "aucun"],
    ["Satisfaction", rating],
    ["Mauvaises notes", String(d.badRatings)],
    ["LogisVert (clients)", `${d.logisvert.aFaire} à faire · ${d.logisvert.faite} faites · ${d.logisvert.recue} reçues${d.logisvert.aide ? ` · ${d.logisvert.aide} besoin d’aide` : ""}`],
    ["Demandes venues d’une référence", String(d.referralDemands)],
  ];
  const body = p(t("Les sept derniers jours en un coup d’œil. L’aide LogisVert est versée aux clients : elle n’est jamais comptée comme un revenu.")) + box("La semaine", rows);
  const text = [subject, "", ...rows.map(([k, v]) => `${k} : ${v.replace(/ | /g, " ")}`), "", d.href].join("\n");
  const sms = `TAV · semaine : ${d.demands} demandes, ${d.installsDone} installations, ${money(d.receivedCents)} reçus, ${d.overdueCount} factures en retard, satisfaction ${d.avgRating !== null ? d.avgRating.toFixed(1).replace(".", ",") : "—"}. ${d.href}`;
  return { mail: ownerMail({ subject, preheader: sms.slice(6, 140), body, cta: { label: "Ouvrir /gestion", href: d.href } }, text), sms };
}
