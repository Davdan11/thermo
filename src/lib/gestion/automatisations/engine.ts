/* ==================================================================
   Moteur d'automatisations : UN passage (/api/automatisations/tick,
   toutes les 15 minutes) exécute tout ce qui est dû.

   1. Lecture des magasins (jobs, soumissions, factures, dossiers
      après-vente, journal des envois).
   2. Plan : chaque automatisation propose ses envois, chacun avec une
      CLÉ UNIQUE (« sondage:j_abc », « relance-facture:f_x:7 »…), un
      moment dû et, souvent, une heure limite (au-delà, le message n'a
      plus de sens : il est noté « manqué », jamais envoyé en retard).
   3. Exécution : interrupteur vérifié ; clé RÉSERVÉE sous verrou avant
      l'envoi (jamais deux fois le même message, même si deux passages
      se chevauchent) ; un échec du transport est réessayé au passage
      suivant, 3 fois au plus ; une réservation interrompue (« en
      cours ») n'est jamais renvoyée d'office.
   Les jobs terminés AVANT le premier passage du moteur ne déclenchent
   rien d'office (facture manuelle possible dans Paiements) : mettre le
   moteur en marche n'inonde personne.
   Garde-fous des envois : voir send.ts (désabonnés, adresse postale,
   aucun envoi réel hors production).
   ================================================================== */

import { businessMailingAddress, googleReviewUrl } from "@/lib/relances/config";
import { enqueueReviewRequest } from "@/lib/relances/store";
import { SITE_URL } from "@/lib/seo";
import { formatDay, isDay } from "@/lib/soumissions/dates";
import { readSoumissions } from "@/lib/soumissions/store";
import type { Quote } from "@/lib/soumissions/types";
import { readGestion } from "../store";
import type { Installer, Job } from "../types";
import { localYmd } from "../crm/time";
import { blocksOffers, invoiceState } from "../commissions/calc";
import { invoiceReminderEmail, invoiceReminderSms } from "../commissions/emails";
import { acceptedQuoteForJob, installedEquipment, jobCompletion, type AcceptedQuote } from "../commissions/link";
import { getCompletion } from "../terrain/completion";
import { hasActiveMembership } from "../portail/store"; // Chantier P
import { invoiceLink, issueInvoiceForJob, recordInvoiceSend } from "../commissions/service";
import { readCommissions } from "../commissions/store";
import { stripeConfigured } from "../commissions/stripe";
import type { CommissionsData } from "../commissions/types";
import { crmDeps, type CrmDeps } from "./crm-link";
import { loadMorningData, loadWeeklyData } from "./digest";
import { referralLink } from "./followup";
import { eveReminder, logisvertDossier, logisvertFollow, maintenanceReminder, referralMessage, surveyMessage, unsubscribeHeaders, warrantyReminder, type SuiviLinks } from "./messages";
import { morningDigest, weeklyReport, type MorningData, type WeeklyData } from "./owner";
import { reached, realChannels, type Channels } from "./send";
import { ensureDossier, ensureDossierIn, mutateAfterSale, mutateAutomations, newReferralCode, readAfterSale, readAutomations } from "./store";
import { addMonthsYmd, atLocal, dayAfterAt, eveWindow, isoWeekKey, mondayOf, MORNING_HOUR, surveyDueAt, WEEKLY_HOUR, WEEKLY_MINUTE } from "./time";
import { AUTOMATION_IDS, OUTCOME_LABELS, type AfterSaleData, type AutomationId, type AutomationsData, type ChannelOutcome, type LogEntry, type TickSummary } from "./types";

export const MAX_ATTEMPTS = 3;
const D = 86_400_000;

export interface TickOptions {
  now?: Date;
  channels?: Channels;
  baseUrl?: string;
  /** Plafond d'envois par passage (le reste attend le passage suivant). */
  max?: number;
  crm?: CrmDeps;
  enqueueReview?: typeof enqueueReviewRequest;
  morningData?: (now: Date, base: string) => Promise<MorningData>;
  weeklyData?: (now: Date, base: string) => Promise<WeeklyData>;
  /** Premier passage (tests) : sinon, le moment du premier passage réel. */
  startedAt?: string;
  log?: (line: string) => void;
}

type ChannelsMap = NonNullable<LogEntry["channels"]>;
interface RunResult {
  status: "fait" | "echec" | "ignore";
  detail: string;
  channels?: ChannelsMap;
  ref?: LogEntry["ref"];
}

export interface PlannedAction {
  key: string;
  automation: AutomationId;
  dueAt: Date;
  /** Au-delà : noté « manqué », jamais envoyé. */
  expiresAt?: Date;
  label: string;
  ref?: LogEntry["ref"];
  /** Courriel au client : exige l'adresse postale (LCAP). */
  client?: boolean;
  /** Raison d'attendre (réglage manquant) ; l'envoi reste dû et partira quand ce sera réglé. */
  precondition?: () => string | null;
  run: () => Promise<RunResult>;
}

interface Ctx {
  now: Date;
  base: string;
  channels: Channels;
  crm: CrmDeps;
  enqueueReview: typeof enqueueReviewRequest;
  morningData: (now: Date, base: string) => Promise<MorningData>;
  weeklyData: (now: Date, base: string) => Promise<WeeklyData>;
  jobs: Job[];
  installers: Installer[];
  quotes: Quote[];
  comm: CommissionsData;
  after: AfterSaleData;
  auto: AutomationsData;
  suppressed: Set<string>;
  since: number;
}

const CHANNEL_WORDS: Record<string, string> = { email: "courriel", sms: "texto", owner: "courriel au propriétaire", installer: "courriel à l’installateur", crm: "tâche", file: "file des avis" };

function describe(label: string, chs: ChannelsMap): string {
  const parts = Object.entries(chs).map(([k, v]) => `${CHANNEL_WORDS[k] ?? k} ${v === "fait" ? "créée" : OUTCOME_LABELS[v as ChannelOutcome] ?? v}`);
  return [label, ...parts].join(" · ");
}

/** Au moins un canal a abouti : fait ; sinon un échec du transport : à réessayer ; sinon rien à faire (désabonné, sans destinataire…). */
export function verdict(chs: ChannelsMap): RunResult["status"] {
  const vals = Object.values(chs);
  if (vals.some((v) => v === "fait" || reached(v as ChannelOutcome))) return "fait";
  if (vals.some((v) => v === "echec")) return "echec";
  return "ignore";
}

const result = (label: string, chs: ChannelsMap, ref?: LogEntry["ref"]): RunResult => ({ status: verdict(chs), detail: describe(label, chs), channels: chs, ref });

/** Montant LogisVert prévu (liste officielle), tiré de la soumission acceptée : versé AU CLIENT. */
export function logisvertExpected(aq: AcceptedQuote | null): number {
  if (!aq) return 0;
  const snap = aq.acceptance.snapshot?.totals?.logisvertCents ?? 0;
  if (snap > 0) return snap;
  const m = aq.version.content.machine;
  return m && !m.offList && m.pairing && aq.version.content.logisvert.mode !== "aucune" ? Math.max(0, Math.round(m.pairing.logisVertCents)) : 0;
}

export const needsWarrantyRegistration = (aq: AcceptedQuote | null): boolean => Boolean(aq?.version.content.machine?.catalogWarranties?.some((w) => w.requiresRegistration));

/* ---------------- Contexte ---------------- */

async function loadContext(o: TickOptions, now: Date, persist = true): Promise<Ctx> {
  const [gestion, soum, comm, after, auto] = await Promise.all([readGestion(), readSoumissions(), readCommissions(), readAfterSale(), readAutomations()]);
  let startedAt = auto.startedAt;
  if (!startedAt && !persist) startedAt = o.startedAt ?? now.toISOString();
  if (!startedAt) {
    startedAt = o.startedAt ?? now.toISOString();
    const s = startedAt;
    await mutateAutomations((d) => {
      if (d.startedAt) return { result: undefined, changed: false };
      d.startedAt = s;
      return { result: undefined, changed: true };
    });
  }
  // Données de démonstration (scripts de développement) : jamais en production.
  const demo = process.env.NODE_ENV !== "production";
  return {
    now,
    base: (o.baseUrl ?? SITE_URL).replace(/\/$/, ""),
    channels: o.channels ?? realChannels,
    crm: o.crm ?? crmDeps,
    enqueueReview: o.enqueueReview ?? enqueueReviewRequest,
    morningData: o.morningData ?? loadMorningData,
    weeklyData: o.weeklyData ?? loadWeeklyData,
    jobs: demo || !gestion.seed ? gestion.jobs : [],
    installers: gestion.installers,
    quotes: soum.quotes.filter((q) => demo || !q.seed),
    comm,
    after,
    auto,
    suppressed: new Set(after.suppressed),
    since: Date.parse(startedAt),
  };
}

/* ---------------- Plan ---------------- */

function clientCommon(ctx: Ctx, token: string): { links: SuiviLinks; mailingAddress: string } {
  return { links: { base: ctx.base, token }, mailingAddress: businessMailingAddress() ?? "" };
}

async function sendClient(ctx: Ctx, job: Job, label: string, m: { mail?: { subject: string; html: string; text: string }; sms?: string }, links: SuiviLinks): Promise<ChannelsMap> {
  const [email, sms] = await Promise.all([
    m.mail ? ctx.channels.clientMail(job.client.email, m.mail, { suppressed: ctx.suppressed, label, headers: unsubscribeHeaders(links) }) : Promise.resolve(undefined),
    m.sms ? ctx.channels.clientSms(job.client.phone, m.sms, { suppressed: ctx.suppressed, label }) : Promise.resolve(undefined),
  ]);
  const out: ChannelsMap = {};
  if (email) out.email = email;
  if (sms) out.sms = sms;
  return out;
}

function planJob(ctx: Ctx, job: Job): PlannedAction[] {
  const out: PlannedAction[] = [];
  const label = `Job n° ${job.number}`;
  const ref = { jobId: job.id };
  const done = jobCompletion(job);
  const aq = acceptedQuoteForJob(job, ctx.quotes, { linkedQuoteId: ctx.comm.jobLinks[job.id], completedAt: done?.completedAt });
  const firstName = job.client.firstName || undefined;

  // Rappel la veille (job planifié à une date précise).
  if (job.status === "planifie" && isDay(job.scheduledFor)) {
    const day = job.scheduledFor;
    const w = eveWindow(day);
    out.push({
      key: `rappel-veille:${job.id}:${day}`,
      automation: "rappel-veille",
      dueAt: w.from,
      expiresAt: w.until,
      label,
      ref,
      client: true,
      run: async () => {
        const dossier = await ensureDossier(job.id, ctx.now);
        const c = clientCommon(ctx, dossier.token);
        const s = aq?.version.content.schedule;
        // Chantier P : la fenêtre du créneau choisi par le client passe avant celle de la soumission.
        const m = eveReminder({ ...c, firstName, day, arrival: job.scheduledWindow?.trim() || s?.arrival?.trim() || job.desiredWindow.trim(), address: [job.client.address, job.client.city].filter(Boolean).join(", "), prep: s?.prep ?? [] });
        return result(`${label} · installation du ${formatDay(day)}`, await sendClient(ctx, job, "rappel la veille", m, c.links), ref);
      },
    });
  }

  if (!done) return out;
  const completedMs = Date.parse(done.completedAt);
  if (completedMs < ctx.since) return out; // terminé avant la mise en marche : rien d'office
  const completedAt = done.completedAt;

  // Facture de commission : le lendemain, 8 h.
  if (!ctx.comm.invoices.some((i) => i.jobId === job.id && i.status !== "annulee")) {
    out.push({
      key: `facture-commission:${job.id}`,
      automation: "facture-commission",
      dueAt: atLocal(localYmd(new Date(completedMs + D)), 8),
      label,
      ref,
      run: async () => {
        const r = await issueInvoiceForJob(job.id, "automatisation", { now: ctx.now, channels: ctx.channels, baseUrl: ctx.base });
        if (r.ok) return { status: "fait", detail: describe(`${label} · facture ${r.invoice.number}${r.created ? "" : " (déjà émise)"}`, r.email ? { installer: r.email } : {}), channels: r.email ? { installer: r.email } : undefined, ref: { jobId: job.id, invoiceId: r.invoice.id } };
        if (r.code === "non-termine" || r.code === "introuvable") return { status: "ignore", detail: `${label} · ${r.message}`, ref };
        const clientId = await ctx.crm.clientIdForJob(job.id).catch(() => null);
        await ctx.crm.addTask({ clientId, title: `Facturer le job n° ${job.number} : ${r.code === "sans-installateur" ? "attribuer l’installateur" : "lier la soumission acceptée"} (Paiements)`, dueAt: ctx.now });
        return { status: "ignore", detail: `${label} · ${r.message} Tâche créée.`, channels: { crm: "fait" }, ref };
      },
    });
  }

  // Sondage : +8 h (la nuit : 9 h), jusqu'à 3 jours après.
  out.push({
    key: `sondage:${job.id}`,
    automation: "sondage",
    dueAt: surveyDueAt(completedAt),
    expiresAt: new Date(completedMs + 3 * D),
    label,
    ref,
    client: true,
    run: async () => {
      const dossier = await ensureDossier(job.id, ctx.now);
      if (dossier.survey) return { status: "ignore", detail: `${label} · déjà répondu`, ref };
      const c = clientCommon(ctx, dossier.token);
      return result(label, await sendClient(ctx, job, "sondage", surveyMessage({ ...c, firstName }), c.links), ref);
    },
  });

  // Demande d'avis Google : à TOUS les clients, sans égard à la note (file du robot des avis : envoi 5 jours plus tard, 9 h 30).
  out.push({
    key: `avis-google:${job.id}`,
    automation: "avis-google",
    dueAt: new Date(completedMs),
    expiresAt: new Date(completedMs + 30 * D),
    label,
    ref,
    precondition: () => (googleReviewUrl() ? null : "lien d’avis Google absent (GOOGLE_REVIEW_URL)"),
    run: async () => {
      const email = job.client.email?.trim().toLowerCase();
      if (!email || !email.includes("@")) return { status: "ignore", detail: `${label} · sans courriel`, ref };
      const r = await ctx.enqueueReview({ email, firstName }, ctx.now);
      if (r.status === "suppressed") return { status: "ignore", detail: `${label} · adresse désabonnée : aucune demande`, channels: { file: "desabonne" }, ref };
      if (r.status === "doublon") return { status: "fait", detail: `${label} · demande d’avis déjà en file pour cette adresse`, channels: { file: "fait" }, ref };
      return { status: "fait", detail: `${label} · demande d’avis en file (envoi à partir du ${formatDay(localYmd(new Date(r.message.dueAt)))})`, channels: { file: "fait" }, ref };
    },
  });

  // Dossier LogisVert : seulement si la soumission acceptée a un jumelage de la liste officielle.
  const expected = logisvertExpected(aq);
  if (aq && expected > 0) {
    out.push({
      key: `dossier-logisvert:${job.id}`,
      automation: "dossier-logisvert",
      dueAt: dayAfterAt(completedAt, 1, 10),
      expiresAt: dayAfterAt(completedAt, 15, 10),
      label,
      ref,
      client: true,
      run: async () => {
        const iso = ctx.now.toISOString();
        const dossier = await mutateAfterSale((data) => {
          const { dossier: d } = ensureDossierIn(data, job.id, ctx.now);
          d.logisvert ??= { status: "a-faire", expectedCents: expected, sentAt: iso, updates: [] };
          return { result: structuredClone(d), changed: true };
        });
        const m = aq.version.content.machine!;
        const eq = installedEquipment(job, (await getCompletion(job.id))?.serials); // volet A : numéros de la fin de chantier
        const c = clientCommon(ctx, dossier.token);
        const msg = logisvertDossier({
          ...c,
          firstName,
          brand: m.brand,
          model: m.name,
          outdoorModel: m.outdoorModel,
          indoor: aq.version.content.placement.indoor.map((u) => u.model).filter(Boolean).join(", ") || m.pairing?.indoorDescription || m.offListIndoor,
          ahri: m.pairing?.ahri ?? "",
          outdoorSerial: eq.outdoorSerial,
          indoorSerials: eq.indoorSerials,
          installedOn: localYmd(completedAt),
          expectedCents: expected,
          listDate: m.listDate,
        });
        return result(label, await sendClient(ctx, job, "dossier LogisVert", msg, c.links), ref);
      },
    });
  }

  // Suivi LogisVert : « demande faite ? » puis « reçue ? ».
  const lv = ctx.after.dossiers[job.id]?.logisvert;
  if (lv && (lv.status === "a-faire" || lv.status === "demande-faite")) {
    const demande = lv.status === "a-faire";
    const baseAt = demande ? completedAt : ([...lv.updates].reverse().find((u) => u.status === "demande-faite")?.at ?? lv.sentAt);
    const steps: Array<[string, number]> = demande ? [["demande-1", 10], ["demande-2", 24]] : [["recue-1", 45], ["recue-2", 75]];
    for (const [step, days] of steps) {
      const dueAt = dayAfterAt(baseAt, days, 10);
      out.push({
        key: `suivi-logisvert:${job.id}:${step}`,
        automation: "suivi-logisvert",
        dueAt,
        expiresAt: new Date(dueAt.getTime() + 14 * D),
        label,
        ref,
        client: true,
        run: async () => {
          const fresh = (await readAfterSale()).dossiers[job.id];
          if (fresh?.logisvert?.status !== lv.status) return { status: "ignore", detail: `${label} · le client a répondu entre-temps`, ref };
          const c = clientCommon(ctx, fresh.token);
          return result(`${label} · ${demande ? "demande faite ?" : "aide reçue ?"}`, await sendClient(ctx, job, "suivi LogisVert", logisvertFollow({ ...c, firstName, step: demande ? "demande" : "recue" }), c.links), ref);
        },
      });
    }
  }

  // Enregistrement de garantie : seulement si la fiche de la marque l'exige.
  if (aq && needsWarrantyRegistration(aq)) {
    out.push({
      key: `garantie:${job.id}`,
      automation: "garantie",
      dueAt: dayAfterAt(completedAt, 2, 10),
      expiresAt: dayAfterAt(completedAt, 32, 10),
      label,
      ref,
      client: true,
      run: async () => {
        const dossier = await ensureDossier(job.id, ctx.now);
        const m = aq.version.content.machine!;
        const eq = installedEquipment(job, (await getCompletion(job.id))?.serials); // volet A : numéros de la fin de chantier
        const c = clientCommon(ctx, dossier.token);
        const msg = warrantyReminder({ ...c, firstName, brand: m.brand, model: [m.name, m.outdoorModel].filter(Boolean).join(" · "), outdoorSerial: eq.outdoorSerial, indoorSerials: eq.indoorSerials, installedOn: localYmd(completedAt) });
        return result(label, await sendClient(ctx, job, "garantie", msg, c.links), ref);
      },
    });
  }

  // Entretien annuel : 12 mois après, 10 h ; tâche « proposer l'entretien ».
  const yearDue = atLocal(addMonthsYmd(localYmd(completedAt), 12), 10);
  out.push({
    key: `entretien:${job.id}:12`,
    automation: "entretien",
    dueAt: yearDue,
    expiresAt: new Date(yearDue.getTime() + 30 * D),
    label,
    ref,
    client: true,
    run: async () => {
      // Chantier P : adhérent d'un plan d'entretien : sa visite est créée et offerte par le plan, pas de rappel générique.
      if (await hasActiveMembership(job.maintenance?.originJobId ?? job.id)) return { status: "ignore", detail: `${label} · adhérent d’un plan d’entretien : visite prévue par le plan`, ref };
      const dossier = await ensureDossier(job.id, ctx.now);
      const c = clientCommon(ctx, dossier.token);
      const chs = await sendClient(ctx, job, "entretien", maintenanceReminder({ ...c, firstName, brand: aq?.version.content.machine?.brand ?? "" }), c.links);
      const clientId = await ctx.crm.clientIdForJob(job.id).catch(() => null);
      await ctx.crm.addTask({ clientId, title: `Entretien annuel : proposer à ${job.client.firstName || "ce client"} (job n° ${job.number})`, dueAt: ctx.now });
      return result(label, { ...chs, crm: "fait" }, ref);
    },
  });

  // Référence : le lendemain d'une note de 4 ou 5.
  const survey = ctx.after.dossiers[job.id]?.survey;
  if (survey && survey.rating >= 4) {
    const dueAt = dayAfterAt(survey.at, 1, 10);
    out.push({
      key: `reference:${job.id}`,
      automation: "reference",
      dueAt,
      expiresAt: new Date(dueAt.getTime() + 14 * D),
      label,
      ref,
      client: true,
      run: async () => {
        const d = await mutateAfterSale((data) => {
          const { dossier } = ensureDossierIn(data, job.id, ctx.now);
          if (!dossier.referral) {
            let code = newReferralCode();
            while (data.referrals[code]) code = newReferralCode();
            dossier.referral = { code, createdAt: ctx.now.toISOString() };
            data.referrals[code] = job.id;
          }
          return { result: structuredClone(dossier), changed: true };
        });
        const c = clientCommon(ctx, d.token);
        const m = referralMessage({ ...c, firstName, link: referralLink(ctx.base, d.referral!.code), reward: ctx.auto.settings.referralReward });
        return result(label, await sendClient(ctx, job, "référence", m, c.links), ref);
      },
    });
  }
  return out;
}

function planInvoices(ctx: Ctx): PlannedAction[] {
  const out: PlannedAction[] = [];
  for (const inv of ctx.comm.invoices) {
    if (inv.status !== "emise") continue;
    for (const d of [7, 14] as const) {
      const dueAt = dayAfterAt(inv.issuedAt, d, 9);
      const label = `Facture ${inv.number}`;
      const ref = { jobId: inv.jobId, invoiceId: inv.id };
      out.push({
        key: `relance-facture:${inv.id}:${d}`,
        automation: "relance-facture",
        dueAt,
        expiresAt: new Date(dueAt.getTime() + (d === 7 ? 6 : 14) * D),
        label,
        ref,
        run: async () => {
          const comm = await readCommissions();
          const fresh = comm.invoices.find((i) => i.id === inv.id);
          if (!fresh || fresh.status !== "emise") return { status: "ignore", detail: `${label} · payée ou annulée entre-temps`, ref };
          const overdue = invoiceState(fresh, ctx.now) === "en-retard";
          const paused = blocksOffers(fresh, comm.settings, ctx.now);
          const link = invoiceLink(ctx.base, fresh.token);
          const phone = ctx.installers.find((i) => i.id === fresh.installerId)?.phone;
          const [installer, sms] = await Promise.all([
            ctx.channels.installerMail(fresh.installer.email, invoiceReminderEmail(fresh, link, stripeConfigured(), { overdue, paused }), `relance J+${d}`),
            ctx.channels.installerSms(phone, invoiceReminderSms(fresh, link, overdue), `relance facture J+${d}`),
          ]);
          await recordInvoiceSend(fresh.id, { at: ctx.now.toISOString(), kind: d === 7 ? "relance-7" : "relance-14", email: installer });
          return result(`${label} · ${overdue ? "en retard" : "rappel d’échéance"}`, { installer, sms }, ref);
        },
      });
    }
  }
  return out;
}

function planOwner(ctx: Ctx): PlannedAction[] {
  const today = localYmd(ctx.now);
  const out: PlannedAction[] = [
    {
      key: `resume-matin:${today}`,
      automation: "resume-matin",
      dueAt: atLocal(today, MORNING_HOUR),
      expiresAt: atLocal(today, 11),
      label: `Résumé du ${formatDay(today)}`,
      run: async () => {
        const m = morningDigest(await ctx.morningData(ctx.now, ctx.base));
        const [owner, sms] = await Promise.all([ctx.channels.ownerMail(m.mail, "résumé du matin"), ctx.channels.ownerSms(m.sms, "résumé du matin")]);
        return result(`Résumé du ${formatDay(today)}`, { owner, sms });
      },
    },
  ];
  const monday = mondayOf(ctx.now);
  if (monday === today) {
    out.push({
      key: `rapport-hebdo:${isoWeekKey(ctx.now)}`,
      automation: "rapport-hebdo",
      dueAt: atLocal(monday, WEEKLY_HOUR, WEEKLY_MINUTE),
      expiresAt: atLocal(monday, 12),
      label: `Semaine ${isoWeekKey(ctx.now)}`,
      run: async () => {
        const m = weeklyReport(await ctx.weeklyData(ctx.now, ctx.base));
        const [owner, sms] = await Promise.all([ctx.channels.ownerMail(m.mail, "rapport hebdomadaire"), ctx.channels.ownerSms(m.sms, "rapport hebdomadaire")]);
        return result(`Semaine ${isoWeekKey(ctx.now)}`, { owner, sms });
      },
    });
  }
  return out;
}

export function planActions(ctx: Ctx): PlannedAction[] {
  return [...ctx.jobs.flatMap((j) => planJob(ctx, j)), ...planInvoices(ctx), ...planOwner(ctx)].sort((a, b) => a.dueAt.getTime() - b.dueAt.getTime() || a.key.localeCompare(b.key));
}

/* ---------------- Exécution ---------------- */

export interface TickReport extends TickSummary {
  deferred: number;
  lines: string[];
}

/** Réserve une clé : null si elle est déjà faite, ignorée, en cours ou à bout d'essais. */
function claim(key: string, automation: AutomationId, ref: LogEntry["ref"], label: string, now: Date): Promise<LogEntry | null> {
  return mutateAutomations<LogEntry | null>((data) => {
    const prev = data.log[key];
    if (prev && (prev.status !== "echec" || prev.attempts >= MAX_ATTEMPTS)) return { result: null, changed: false };
    const entry: LogEntry = { key, automation, at: prev?.at ?? now.toISOString(), status: "en-cours", attempts: (prev?.attempts ?? 0) + 1, detail: `${label} · envoi en cours`, ...(ref ? { ref } : {}) };
    data.log[key] = entry;
    return { result: { ...entry }, changed: true };
  });
}

function finish(key: string, r: RunResult, now: Date): Promise<void> {
  return mutateAutomations((data) => {
    const e = data.log[key];
    if (!e) return { result: undefined, changed: false };
    e.status = r.status;
    e.detail = r.detail;
    e.doneAt = now.toISOString();
    if (r.channels) e.channels = r.channels;
    if (r.ref) e.ref = r.ref;
    return { result: undefined, changed: true };
  });
}

let running: Promise<TickReport> | null = null;

/** Un passage du moteur. Deux appels simultanés dans le même processus partagent le même passage. */
export function runTick(o: TickOptions = {}): Promise<TickReport> {
  if (running) return running;
  running = tick(o).finally(() => {
    running = null;
  });
  return running;
}

async function tick(o: TickOptions): Promise<TickReport> {
  const started = Date.now();
  const now = o.now ?? new Date();
  const say = o.log ?? (() => undefined);
  const ctx = await loadContext(o, now);
  const report: TickReport = { at: now.toISOString(), ms: 0, done: 0, failed: 0, ignored: 0, waiting: {}, deferred: 0, lines: [] };
  const enabled = (id: AutomationId) => ctx.auto.settings.enabled[id] !== false;
  const mailing = businessMailingAddress();
  let budget = Math.max(0, o.max ?? 60);

  for (const a of planActions(ctx)) {
    if (!enabled(a.automation) || a.dueAt.getTime() > now.getTime()) continue;
    const prev = ctx.auto.log[a.key];
    if (prev && (prev.status !== "echec" || prev.attempts >= MAX_ATTEMPTS)) continue;
    if (a.expiresAt && now.getTime() > a.expiresAt.getTime()) {
      // Passé l'heure utile (moteur arrêté, job planifié trop tard) : noté, jamais envoyé.
      const c = await claim(a.key, a.automation, a.ref, a.label, now);
      if (c) await finish(a.key, { status: "ignore", detail: `${a.label} · manqué : passé l’heure utile` }, now);
      report.ignored++;
      continue;
    }
    const wait = a.client && !mailing ? "adresse postale absente (BUSINESS_MAILING_ADDRESS)" : (a.precondition?.() ?? null);
    if (wait) {
      report.waiting[wait] = (report.waiting[wait] ?? 0) + 1;
      continue;
    }
    if (budget <= 0) {
      report.deferred++;
      continue;
    }
    const c = await claim(a.key, a.automation, a.ref, a.label, now);
    if (!c) continue;
    budget--;
    let r: RunResult;
    try {
      r = await a.run();
    } catch (e) {
      console.error(`[automatisations] ${a.key} :`, e);
      r = { status: "echec", detail: `${a.label} · erreur : ${(e as Error).message.slice(0, 160)}` };
    }
    await finish(a.key, r, new Date());
    if (r.status === "fait") report.done++;
    else if (r.status === "echec") report.failed++;
    else report.ignored++;
    report.lines.push(`${r.status === "fait" ? "✓" : r.status === "echec" ? "✗" : "–"} ${a.automation} · ${r.detail}`);
    say(report.lines[report.lines.length - 1]);
  }

  report.ms = Date.now() - started;
  const summary: TickSummary = { at: report.at, ms: report.ms, done: report.done, failed: report.failed, ignored: report.ignored, waiting: report.waiting };
  await mutateAutomations((d) => {
    d.lastTick = summary;
    return { result: undefined, changed: true };
  });
  return report;
}

/* ---------------- Vue de la page Automatisations ---------------- */

export interface UpcomingInfo {
  /** Prochain envoi prévu (ISO), s'il y en a un. */
  next: string | null;
  /** Envois dus en attente d'un réglage. */
  waiting: string | null;
}

/** Prochain envoi prévu par automatisation (lecture seule : rien n'est réservé ni envoyé). */
export async function upcoming(now = new Date()): Promise<Record<AutomationId, UpcomingInfo>> {
  // Lecture seule : le moment de mise en marche n'est jamais écrit par un simple affichage.
  const ctx = await loadContext({ startedAt: now.toISOString() }, now, false).catch(() => null);
  const out = Object.fromEntries(AUTOMATION_IDS.map((id) => [id, { next: null, waiting: null }])) as Record<AutomationId, UpcomingInfo>;
  if (!ctx) return out;
  const mailing = businessMailingAddress();
  for (const a of planActions(ctx)) {
    const prev = ctx.auto.log[a.key];
    if (prev && (prev.status !== "echec" || prev.attempts >= MAX_ATTEMPTS)) continue;
    if (a.expiresAt && now.getTime() > a.expiresAt.getTime()) continue;
    const slot = out[a.automation];
    const wait = a.client && !mailing ? "adresse postale absente" : (a.precondition?.() ?? null);
    if (wait && a.dueAt.getTime() <= now.getTime()) slot.waiting ??= wait;
    const iso = (a.dueAt.getTime() < now.getTime() ? now : a.dueAt).toISOString();
    if (!slot.next || iso < slot.next) slot.next = iso;
  }
  return out;
}
