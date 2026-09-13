/* ==================================================================
   Chantier A — outils de l'assistant du CRM : LECTURE SEULE.

   Chaque outil lit le contexte (index du CRM, commissions, dépenses)
   et renvoie du JSON : prénoms et initiale du nom, villes, étapes,
   montants, dates, liens vers les fiches. Jamais de numéro complet,
   de courriel ni d'adresse ; le texte libre (notes, chronologie) est
   masqué une seconde fois (sanitizeDeep).
   Aucun outil n'écrit ni n'envoie : « preparer_brouillon » remet un
   brouillon au panneau, que le propriétaire enverra lui-même.
   ================================================================== */

import { z } from "zod";
import { CHANNEL_LABELS } from "@/lib/attribution/core";
import { EXCLUSION_LABELS, saleConversions } from "@/lib/ads/sales";
import { moneyShort } from "@/lib/soumissions/money";
import { effectiveStatus, latestSent } from "@/lib/soumissions/quote";
import { STATUS_LABELS as QUOTE_STATUS_LABELS } from "@/lib/soumissions/types";
import { invoiceState, daysOverdue } from "../commissions/calc";
import { taskDTO } from "../crm/dashboard";
import { last4 } from "../crm/identity";
import { buildMoney, periodRange, quoteAmount } from "../crm/money";
import { logisvertOf, type ClientComputed } from "../crm/model";
import { matchesClient } from "../crm/service";
import { isEventLine } from "../crm/sources";
import { bucketTasks, dueToday } from "../crm/tasks";
import { buildTimeline } from "../crm/timeline";
import { ago, dateLong, daysBetweenYmd, localYmd, stamp, todayLong } from "../crm/time";
import { CLIENT_ID_RE, PIPELINE_STAGES, STAGE_LABELS, type Stage } from "../crm/types";
import { acquisitionFor, buildRentabilite, monthLabel, periodMonths, salesOf, type Metric, type RentaRow } from "../rentabilite/calc";
import { MONTH_RE, RENTA_PERIODS, type RentaPeriodId } from "../rentabilite/types";
import { PERIODS, type PeriodId } from "../statistiques";
import { JOB_STATUS_LABELS } from "../types";
import type { ToolDef } from "./anthropic";
import type { AssistantContext } from "./context";
import { maskPersonal, sanitizeDeep } from "./redact";

/* ---------------- Brouillons remis au panneau ---------------- */

export interface Draft {
  id: string;
  clientId: string;
  name: string;
  canal: "texto" | "courriel";
  objet: string;
  texte: string;
  /** Conversation texto existante (ouverte dans l'outil Textos). */
  conversationId?: string;
  hasPhone: boolean;
  hasEmail: boolean;
}

export interface ToolSink {
  drafts: Draft[];
}

/* ---------------- Définitions (JSON Schema) ---------------- */

const periodeJours = { type: "string", enum: ["7", "30", "90", "tout"], description: "Période en jours : 7, 30, 90 ou tout (30 par défaut)." };

export const TOOL_DEFS: ToolDef[] = [
  {
    name: "chercher_client",
    description: "Trouve des clients par prénom, nom, ville, 4 derniers chiffres du téléphone ou numéro de soumission (ex. S-2026-0005). Renvoie au plus 8 clients avec leur client_id et le lien de leur fiche.",
    input_schema: { type: "object", properties: { requete: { type: "string", description: "Texte à chercher (2 à 80 caractères)." } }, required: ["requete"], additionalProperties: false },
  },
  {
    name: "fiche_client",
    description: "Lit la fiche d'un client : étape, valeur, tâches ouvertes, notes, soumissions, jobs, chronologie récente et coût d'acquisition. Sans coordonnées.",
    input_schema: { type: "object", properties: { client_id: { type: "string", description: "Identifiant « c_ » suivi de 12 caractères, donné par chercher_client ou par la fiche ouverte." } }, required: ["client_id"], additionalProperties: false },
  },
  {
    name: "taches_du_jour",
    description: "Tâches dues aujourd'hui (en retard d'abord), nombre de tâches à venir et installations prévues aujourd'hui. Donne aussi la date du jour.",
    input_schema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "pipeline",
    description: "Pipeline actuel : nombre de clients et valeur par étape, clients bloqués depuis plus de 7 jours, raisons des pertes.",
    input_schema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "argent",
    description: "L'argent sur une période : soumissions acceptées (taxes comprises et avant taxes), montants en jeu, taux d'acceptation, commissions des ventes signées, factures de commission à recevoir et en retard.",
    input_schema: { type: "object", properties: { periode: periodeJours }, additionalProperties: false },
  },
  {
    name: "demandes_et_canaux",
    description: "Demandes reçues sur une période et la période précédente : par type, par canal d'arrivée (Google, Facebook, téléphone…), villes.",
    input_schema: { type: "object", properties: { periode: periodeJours }, additionalProperties: false },
  },
  {
    name: "rentabilite",
    description: "Rentabilité par canal (mois civils) : dépenses publicitaires saisies, demandes, soumissions, ventes signées, commissions, coût par demande, coût par vente, rendement ; plus la tendance des 6 derniers mois. Choisir « periode » OU « mois ».",
    input_schema: {
      type: "object",
      properties: {
        periode: { type: "string", enum: RENTA_PERIODS.map((p) => p.id), description: "mois (ce mois-ci), mois-precedent, 3-mois ou 12-mois." },
        mois: { type: "string", description: "Un mois précis, au format AAAA-MM." },
      },
      additionalProperties: false,
    },
  },
  {
    name: "publicite",
    description: "Mesure publicitaire des 30 derniers jours : consentement à la mesure, ventes signées, ventes renvoyables à Google Ads (et pourquoi les autres ne le sont pas).",
    input_schema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "preparer_brouillon",
    description: "Prépare un brouillon de texto ou de courriel pour un client. N'ENVOIE RIEN : le brouillon s'affiche au propriétaire, qui l'ouvre dans l'outil habituel et l'envoie lui-même.",
    input_schema: {
      type: "object",
      properties: {
        client_id: { type: "string" },
        canal: { type: "string", enum: ["texto", "courriel"] },
        objet: { type: "string", description: "Objet du courriel (facultatif)." },
        texte: { type: "string", description: "Texte complet du brouillon." },
      },
      required: ["client_id", "canal", "texte"],
      additionalProperties: false,
    },
  },
];

export const TOOL_NAMES = TOOL_DEFS.map((t) => t.name);

export const TOOL_LABELS: Record<string, string> = {
  chercher_client: "recherche de clients",
  fiche_client: "fiche client",
  taches_du_jour: "tâches du jour",
  pipeline: "pipeline",
  argent: "argent",
  demandes_et_canaux: "demandes et canaux",
  rentabilite: "rentabilité",
  publicite: "publicité",
  preparer_brouillon: "brouillon",
};

/* ---------------- Aides ---------------- */

const $ = (cents: number | null | undefined): string | null => (cents === null || cents === undefined ? null : moneyShort(Math.round(cents)));
const clientLink = (id: string) => `/gestion/clients/${id}`;
const shortName = (b: ClientComputed["b"]) => (b.firstName ? `${b.firstName}${b.lastName ? ` ${b.lastName.charAt(0)}.` : ""}` : "Sans nom");
const clip = (s: string | undefined, n: number) => (s && s.length > n ? `${s.slice(0, n - 1)}…` : s);
const pct = (x: number | null) => (x === null ? null : `${Math.round(x * 100)} %`);
const periodLabel = (p: PeriodId) => PERIODS.find((x) => x.id === p)?.label ?? p;

function metricText(m: Metric, kind: "money" | "roi"): { valeur: string | null; etat: string } {
  const etat = m.status === "ok" ? "ok" : m.status === "insuffisant" ? "données insuffisantes" : m.status === "sans-depense" ? "aucune dépense saisie" : "canal non payant";
  if (m.status !== "ok" || m.value === null) return { valeur: null, etat };
  return { valeur: kind === "money" ? $(m.value) : `${m.value.toLocaleString("fr-CA", { maximumFractionDigits: 1 })} × la dépense`, etat };
}

function rentaRow(r: RentaRow) {
  return {
    canal: r.label,
    payant: r.paid,
    depenses: r.paid ? (r.spendCents === null ? "aucune dépense saisie" : $(r.spendCents)) : "canal non payant",
    mois_avec_depense_saisie: r.paid ? r.spendMonths : undefined,
    demandes: r.demandes,
    soumissions_envoyees: r.soumissions,
    ventes_signees: r.ventes,
    commissions: $(r.commissionCents),
    commissions_deja_facturees: $(r.invoicedCents),
    cout_par_demande: metricText(r.costPerDemand, "money"),
    cout_par_vente: metricText(r.costPerSale, "money"),
    rendement: metricText(r.roi, "roi"),
  };
}

const out = (v: unknown): string => JSON.stringify(sanitizeDeep(v));
const fail = (message: string): string => JSON.stringify({ erreur: message });

/* ---------------- Outils ---------------- */

function chercherClient(ctx: AssistantContext, input: unknown): string {
  const p = z.object({ requete: z.string().trim().min(2).max(80) }).safeParse(input);
  if (!p.success) return fail("Requête invalide : 2 à 80 caractères.");
  const s = p.data.requete;
  const digitsOnly = /^[\d\s().+-]{3,}$/.test(s);
  const list = ctx.index.clients.filter((c) => matchesClient(c, s)).sort((a, b) => (b.b.lastAt || b.b.firstAt).localeCompare(a.b.lastAt || a.b.firstAt));
  return out({
    total: list.length,
    resultats: list.slice(0, 8).map((c) => ({
      client_id: c.b.id,
      nom: shortName(c.b),
      ville: c.b.city,
      etape: STAGE_LABELS[c.stage.stage],
      derniere_activite: ago(c.b.lastAt || c.b.firstAt, ctx.now),
      soumissions: c.b.quotes.map((q) => q.number).slice(0, 4),
      lien: clientLink(c.b.id),
      // 4 derniers chiffres seulement, et seulement pour confirmer une recherche par chiffres.
      ...(digitsOnly && last4(c.b.phones[0]) ? { tel_fin: last4(c.b.phones[0]) } : {}),
    })),
  });
}

function ficheClient(ctx: AssistantContext, input: unknown): string {
  const p = z.object({ client_id: z.string().regex(CLIENT_ID_RE) }).safeParse(input);
  if (!p.success) return fail("client_id invalide.");
  const c = ctx.index.byId.get(p.data.client_id);
  if (!c) return fail("Client introuvable.");
  const { b, stage } = c;
  const now = ctx.now;
  const today = localYmd(now);
  const acq = acquisitionFor(b.id, ctx.renta);
  const logisvert = logisvertOf(b, today);
  return out({
    client_id: b.id,
    lien: clientLink(b.id),
    nom: shortName(b),
    ville: b.city,
    etape: STAGE_LABELS[stage.stage],
    etape_depuis: dateLong(stage.since),
    jours_a_cette_etape: Math.max(0, daysBetweenYmd(localYmd(stage.since), today)),
    etape_choisie_a_la_main: stage.manual,
    perdu: stage.lost ? { raison: stage.lost.reason, le: dateLong(stage.lost.at) } : undefined,
    canal_arrivee: b.firstChannel ? CHANNEL_LABELS[b.firstChannel] : "saisi à la main (sans demande en ligne)",
    premier_contact: dateLong(b.firstAt),
    derniere_activite: ago(b.lastAt || b.firstAt, now),
    valeur: $(c.valueCents),
    aide_logisvert_information: logisvert ? `${$(logisvert)} versés au client par Hydro-Québec (pas un revenu)` : undefined,
    a_un_telephone: b.phones.length > 0,
    a_un_courriel: b.emails.length > 0,
    conversation_texto: b.textos[0] ? { lien: `/gestion/textos/${b.textos[0].id}`, non_lus: b.textos[0].unread } : undefined,
    etiquettes: b.record?.tags.length ? b.record.tags : undefined,
    taches_ouvertes: c.tasks.slice(0, 10).map((t) => {
      const d = taskDTO(t, ctx.index, now);
      return { titre: d.title, detail: d.detail, echeance: d.due, en_retard: d.overdue, lien: d.href };
    }),
    notes: [...(b.record?.notes ?? [])]
      .reverse()
      .slice(0, 8)
      .map((n) => ({ quand: stamp(n.at, now), type: n.kind, texte: clip(maskPersonal(n.text), 400) })),
    soumissions: b.quotes.map((q) => {
      const sent = latestSent(q);
      const v = sent ?? q.versions[q.versions.length - 1];
      const st = sent ? effectiveStatus(v, today) : "brouillon";
      return {
        numero: q.number,
        statut: QUOTE_STATUS_LABELS[st],
        montant_taxes_comprises: $(quoteAmount(v, today)),
        envoyee_le: v.sentAt ? dateLong(v.sentAt) : null,
        ouvertures: v.views.count,
        derniere_ouverture: v.views.lastAt ? stamp(v.views.lastAt, now) : undefined,
        questions_du_client: v.questions.length || undefined,
        acceptee_le: v.acceptance ? dateLong(v.acceptance.at) : undefined,
        refusee_le: v.refusal ? dateLong(v.refusal.at) : undefined,
        valide_jusqu_au: v.content.validUntil || undefined,
        lien: `/gestion/soumissions/${q.id}`,
      };
    }),
    jobs: b.jobs.map((j) => ({
      numero: j.number,
      statut: JOB_STATUS_LABELS[j.status],
      prevu_le: j.scheduledFor ? dateLong(`${j.scheduledFor}T12:00:00Z`) : null,
      installateur: j.assignedInstallerId ? (ctx.index.src.installers[j.assignedInstallerId] ?? null) : null,
      lien: `/gestion/jobs/${j.id}`,
    })),
    chronologie_recente: buildTimeline(b, { now, installers: ctx.index.src.installers })
      .slice(0, 25)
      .map((i) => ({ quand: stamp(i.at, now), quoi: i.title, detail: clip(i.detail ? maskPersonal(i.detail) : undefined, 200) })),
    cout_acquisition:
      acq?.status === "calculable"
        ? {
            montant: $(acq.cacCents),
            calcul: `${$(acq.spendCents)} dépensés sur ${acq.channel} en ${acq.monthLabel}, ÷ ${acq.newClients} nouveau(x) client(s) de ce canal ce mois-là`,
            estimation_fragile: acq.fragile,
            commissions_de_ce_client: $(acq.commissionCents),
          }
        : { non_calculable: acq?.reason ?? "Client introuvable." },
  });
}

function tachesDuJour(ctx: AssistantContext): string {
  const { index, now } = ctx;
  const due = dueToday(index.tasks, now);
  const b = bucketTasks(due, now);
  const today = localYmd(now);
  return out({
    aujourd_hui: todayLong(now),
    taches_du_jour: due.length,
    en_retard: b.overdue.length,
    a_venir_plus_tard: index.tasks.length - due.length,
    taches: due.slice(0, 20).map((t) => {
      const d = taskDTO(t, index, now);
      return { titre: d.title, detail: d.detail, echeance: d.due, en_retard: d.overdue, pour: d.who, lien: d.href || (d.clientId ? clientLink(d.clientId) : "/gestion/taches") };
    }),
    installations_du_jour: index.src.jobs
      .filter((j) => j.scheduledFor === today && (j.status === "planifie" || j.status === "attribue"))
      .map((j) => {
        const c = index.byId.get(index.byJob.get(j.id) ?? "");
        return { job: j.number, pour: c ? shortName(c.b) : j.client.firstName || "Sans nom", ville: j.client.city || c?.b.city, installateur: j.assignedInstallerId ? (index.src.installers[j.assignedInstallerId] ?? null) : null, lien: `/gestion/jobs/${j.id}` };
      }),
    lien_de_la_liste: "/gestion/taches",
  });
}

function pipeline(ctx: AssistantContext): string {
  const today = localYmd(ctx.now);
  const active: Stage[] = ["nouvelle", "contacte", "soumission-envoyee", "ouverte", "acceptee", "planifiee"];
  const reasons = new Map<string, number>();
  for (const c of ctx.index.clients) if (c.stage.stage === "perdue") reasons.set((c.stage.lost?.reason || "Sans raison notée").slice(0, 60), (reasons.get((c.stage.lost?.reason || "Sans raison notée").slice(0, 60)) ?? 0) + 1);
  return out({
    etapes: [...PIPELINE_STAGES, "perdue" as const].map((stage) => {
      const list = ctx.index.clients.filter((c) => c.stage.stage === stage);
      const days = (c: ClientComputed) => Math.max(0, daysBetweenYmd(localYmd(c.stage.since), today));
      return {
        etape: STAGE_LABELS[stage],
        clients: list.length,
        valeur: $(list.reduce((s, c) => s + (c.valueCents ?? 0), 0)),
        bloques_plus_de_7_jours: active.includes(stage) ? list.filter((c) => days(c) > 7).length : undefined,
        plus_anciens: active.includes(stage)
          ? [...list]
              .sort((a, b) => a.stage.since.localeCompare(b.stage.since))
              .slice(0, 3)
              .map((c) => ({ nom: shortName(c.b), ville: c.b.city, jours: days(c), lien: clientLink(c.b.id) }))
          : undefined,
      };
    }),
    raisons_des_pertes: [...reasons.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([raison, n]) => ({ raison, clients: n })),
    lien: "/gestion/pipeline",
  });
}

function argent(ctx: AssistantContext, input: unknown): string {
  const p = z.object({ periode: z.enum(["7", "30", "90", "tout"]).default("30") }).safeParse(input ?? {});
  if (!p.success) return fail("Période invalide.");
  const period = p.data.periode as PeriodId;
  const { index, now } = ctx;
  const m = buildMoney(index.src.quotes, {
    period,
    now,
    channelOfQuote: (id) => {
      const cid = index.byQuote.get(id);
      return cid ? (index.byId.get(cid)?.b.firstChannel ?? null) : null;
    },
  });
  const { from, to } = periodRange(period, now);
  const sales = salesOf(ctx.renta).filter((s) => {
    const d = localYmd(s.at);
    return d >= from && d <= to;
  });
  const month = localYmd(now).slice(0, 7);
  const inv = ctx.commissions.invoices.map((i) => ({ i, state: invoiceState(i, now) }));
  const open = inv.filter((x) => x.state === "a-recevoir" || x.state === "en-retard");
  const late = inv.filter((x) => x.state === "en-retard").sort((a, b) => daysOverdue(b.i, now) - daysOverdue(a.i, now));
  const paid = inv.filter((x) => x.i.status === "payee" && x.i.payment?.date.startsWith(month));
  return out({
    periode: periodLabel(period),
    soumissions_acceptees: { nombre: m.accepted.n, total_taxes_comprises: $(m.accepted.totalCents), sous_total_avant_taxes: $(m.accepted.taxableCents) },
    en_jeu_maintenant: { envoyees: { nombre: m.atStake.envoyee.n, montant: $(m.atStake.envoyee.cents) }, ouvertes: { nombre: m.atStake.ouverte.n, montant: $(m.atStake.ouverte.cents) } },
    taux_acceptation: { taux: pct(m.rate.value), acceptees: m.rate.accepted, refusees: m.rate.refused, expirees: m.rate.expired, en_attente: m.rate.pending },
    entonnoir: { envoyees: m.funnel.sent, ouvertes: m.funnel.opened, acceptees: m.funnel.accepted },
    delai_median_avant_acceptation_jours: m.medianDays,
    panier_moyen_taxes_comprises: $(m.averageCents),
    acceptees_par_canal: m.byChannel.slice(0, 6).map((c) => ({ canal: c.label, ventes: c.n, montant: $(c.cents) })),
    commissions_des_ventes_signees: {
      ventes: sales.length,
      total: $(sales.reduce((s, x) => s + (x.commissionCents ?? 0), 0)),
      deja_facturees: $(sales.filter((x) => x.invoiced).reduce((s, x) => s + (x.commissionCents ?? 0), 0)),
      pourcentage: `${ctx.commissions.settings.percent} % du sous-total avant taxes`,
    },
    factures_de_commission: {
      a_recevoir: { nombre: open.length, total: $(open.reduce((s, x) => s + x.i.totalCents, 0)) },
      en_retard: {
        nombre: late.length,
        total: $(late.reduce((s, x) => s + x.i.totalCents, 0)),
        factures: late.slice(0, 10).map((x) => ({ facture: x.i.number, installateur: x.i.installer.company, jours_de_retard: daysOverdue(x.i, now), montant: $(x.i.totalCents), lien: `/gestion/paiements/${x.i.id}` })),
      },
      recues_ce_mois: { nombre: paid.length, total: $(paid.reduce((s, x) => s + x.i.totalCents, 0)) },
      lien: "/gestion/paiements",
    },
    aide_logisvert_information: { montant: $(m.logisvert.cents), soumissions: m.logisvert.n, note: "Versée au client par Hydro-Québec : jamais un revenu." },
  });
}

function demandesEtCanaux(ctx: AssistantContext, input: unknown): string {
  const p = z.object({ periode: z.enum(["7", "30", "90", "tout"]).default("30") }).safeParse(input ?? {});
  if (!p.success) return fail("Période invalide.");
  const s = ctx.stats(p.data.periode as PeriodId);
  return out({
    periode: `${s.periodLabel} (${s.range})`,
    demandes: s.total,
    demandes_periode_precedente: s.previousTotal,
    par_type: s.byKind.filter((k) => k.n || k.prev).map((k) => ({ type: k.label, demandes: k.n, periode_precedente: k.prev })),
    par_canal: s.channels.map((c) => ({ canal: c.label, demandes: c.n, soumissions: c.soumissions, part: pct(c.share) })),
    villes: s.cities.slice(0, 6).map((c) => ({ ville: c.name, demandes: c.n })),
    suivi: { suivies: s.tracking.tracked, inconnues: s.tracking.unknown, telephone: s.tracking.phone, textos: s.tracking.texto },
    lien: "/gestion/statistiques",
  });
}

function rentabilite(ctx: AssistantContext, input: unknown): string {
  const p = z
    .object({ periode: z.enum(RENTA_PERIODS.map((x) => x.id) as [RentaPeriodId, ...RentaPeriodId[]]).optional(), mois: z.string().regex(MONTH_RE).optional() })
    .safeParse(input ?? {});
  if (!p.success) return fail("Période invalide : « periode » (mois, mois-precedent, 3-mois, 12-mois) ou « mois » (AAAA-MM).");
  const range = p.data.mois ? { from: p.data.mois, to: p.data.mois } : periodMonths(p.data.periode ?? "3-mois", ctx.now);
  const v = buildRentabilite(ctx.renta, range);
  return out({
    periode: v.label,
    commission: `${v.percent} % du sous-total avant taxes des soumissions acceptées (facture émise si elle existe) ; LogisVert n'y entre jamais`,
    seuils: `Ratios « données insuffisantes » sous ${v.seuils.demandes} demandes ou ${v.seuils.ventes} ventes`,
    attribution: "Demandes : canal de chaque demande. Soumissions et ventes : canal de la première demande du client.",
    publicite_total: rentaRow(v.paid),
    par_canal: v.rows.map(rentaRow),
    tous_canaux: { demandes: v.total.demandes, soumissions_envoyees: v.total.soumissions, ventes_signees: v.total.ventes, commissions: $(v.total.commissionCents) },
    tendance_6_mois: v.monthly.slice(-6).map((m) => ({ mois: monthLabel(m.month), demandes: m.demandes, ventes_signees: m.ventes, commissions: $(m.commissionCents), depenses_publicitaires: m.hasSpend ? $(m.spendCents) : "non saisies" })),
    lien: "/gestion/rentabilite",
  });
}

const FORM_KINDS = new Set(["soumission", "rendez-vous", "thermomatch", "thermoscan", "contact"]);

function publicite(ctx: AssistantContext): string {
  const { index, now } = ctx;
  const from = now.getTime() - 30 * 86_400_000;
  const forms = index.src.journal.filter((e) => FORM_KINDS.has(e.kind) && !isEventLine(e) && Date.parse(e.at) >= from && Date.parse(e.at) <= now.getTime());
  const granted = forms.filter((e) => e.attribution?.ads?.consent.choice === "granted").length;
  const denied = forms.filter((e) => e.attribution?.ads?.consent.choice === "denied").length;
  // Sans téléphone ni courriel : seuls les comptes sortent d'ici.
  const conv = saleConversions(
    index.clients.map((c) => ({ id: c.b.id, journal: c.b.journal, quotes: c.b.quotes, jobs: c.b.jobs })),
    { percent: ctx.commissions.settings.percent, invoices: ctx.commissions.invoices, now },
  ).filter((c) => c.kind === "vente" && Date.parse(c.at) >= from);
  const reasons = new Map<string, number>();
  for (const c of conv) if (!c.google.eligible) reasons.set(EXCLUSION_LABELS[c.google.reason], (reasons.get(EXCLUSION_LABELS[c.google.reason]) ?? 0) + 1);
  return out({
    periode: "30 derniers jours",
    demandes_par_formulaire: forms.length,
    consentement_mesure_publicitaire: { accorde: granted, refuse: denied, sans_choix: forms.length - granted - denied },
    ventes_signees: conv.length,
    ventes_renvoyables_a_google_ads: conv.filter((c) => c.google.eligible).length,
    ventes_non_renvoyables: [...reasons.entries()].map(([raison, n]) => ({ raison, ventes: n })),
    lien: "/gestion/publicite",
  });
}

function preparerBrouillon(ctx: AssistantContext, input: unknown, sink: ToolSink): string {
  const p = z
    .object({ client_id: z.string().regex(CLIENT_ID_RE), canal: z.enum(["texto", "courriel"]), objet: z.string().max(140).optional(), texte: z.string().trim().min(1).max(2000) })
    .safeParse(input);
  if (!p.success) return fail("Brouillon invalide : client_id, canal (texto ou courriel) et texte (2 000 caractères au plus).");
  const c = ctx.index.byId.get(p.data.client_id);
  if (!c) return fail("Client introuvable.");
  if (sink.drafts.length >= 3) return fail("Trois brouillons au plus par question.");
  const d: Draft = {
    id: `d${sink.drafts.length + 1}`,
    clientId: c.b.id,
    name: shortName(c.b),
    canal: p.data.canal,
    objet: p.data.canal === "courriel" ? maskPersonal(p.data.objet?.trim() || "Suivi de votre projet de thermopompe") : "",
    texte: maskPersonal(p.data.texte),
    ...(c.b.textos[0] ? { conversationId: c.b.textos[0].id } : {}),
    hasPhone: c.b.phones.length > 0,
    hasEmail: c.b.emails.length > 0,
  };
  sink.drafts.push(d);
  return out({
    envoye: false,
    enregistre: false,
    message: "Brouillon affiché au propriétaire dans le panneau. Rien n'a été envoyé : il l'ouvrira dans l'outil habituel pour l'envoyer lui-même.",
    avertissement: d.canal === "courriel" && !d.hasEmail ? "Aucun courriel connu pour ce client." : d.canal === "texto" && !d.hasPhone ? "Aucun numéro connu pour ce client." : undefined,
  });
}

/** Exécute un outil. Lecture seule : aucun outil n'a accès à une fonction d'écriture ou d'envoi. */
export async function executeTool(name: string, input: unknown, ctx: AssistantContext, sink: ToolSink): Promise<string> {
  switch (name) {
    case "chercher_client":
      return chercherClient(ctx, input);
    case "fiche_client":
      return ficheClient(ctx, input);
    case "taches_du_jour":
      return tachesDuJour(ctx);
    case "pipeline":
      return pipeline(ctx);
    case "argent":
      return argent(ctx, input);
    case "demandes_et_canaux":
      return demandesEtCanaux(ctx, input);
    case "rentabilite":
      return rentabilite(ctx, input);
    case "publicite":
      return publicite(ctx);
    case "preparer_brouillon":
      return preparerBrouillon(ctx, input, sink);
    default:
      return fail("Outil inconnu.");
  }
}
