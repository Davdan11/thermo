/* ==================================================================
   Ventes signées et installations terminées → conversions hors ligne.

   Pur (aucun disque, aucun envoi). Entrée : les clients du CRM (demandes
   du journal, soumissions, jobs réunis par téléphone et courriel).

   - « Vente signée » : au moment de la PREMIÈRE acceptation de la
     soumission. Valeur = commission prévue : pourcentage du volet B
     appliqué au sous-total accepté après rabais et avant taxes
     (totals.taxableCents de l'instantané figé). L'aide LogisVert est
     appliquée après les taxes : elle n'y entre jamais.
   - « Installation terminée » (facultative) : fin du chantier du job lié
     à la soumission acceptée ; valeur = commission de la facture émise,
     sinon la même commission prévue.
   Google : seulement avec un identifiant de clic (gclid, gbraid, wbraid)
   d'une demande AVEC consentement, clic de 90 jours au plus avant la
   conversion et avant aujourd'hui. Aucun nom, courriel ni téléphone
   dans ce qui sort d'ici vers le flux.
   ================================================================== */

import type { ChannelId } from "@/lib/attribution/core";
import { CHANNEL_LABELS, classifyChannel } from "@/lib/attribution/core";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import { percentOf } from "@/lib/soumissions/money";
import type { Acceptance, Quote } from "@/lib/soumissions/types";
import { commissionBase } from "@/lib/gestion/commissions/calc";
import { acceptedQuoteForJob, jobCompletion } from "@/lib/gestion/commissions/link";
import type { Job } from "@/lib/gestion/types";
import { CLICK_TTL_MS, CONVERSION_NAMES, META_MAX_AGE_MS } from "./config";
import type { AdsAttribution, ClickType } from "./types";

export interface ClientLike {
  id?: string;
  journal: JournalEntry[];
  quotes: Quote[];
  jobs: Job[];
  phones?: string[];
  emails?: string[];
}

export interface InvoiceLike {
  quoteId: string;
  jobId: string;
  commissionCents: number;
  status: string;
}

export type GoogleExclusion = "sans-demande" | "sans-consentement" | "sans-identifiant" | "clic-trop-ancien" | "clic-apres";

export const EXCLUSION_LABELS: Record<GoogleExclusion, string> = {
  "sans-demande": "Aucune demande reliée (client saisi à la main ou avant le suivi)",
  "sans-consentement": "Sans consentement à la mesure publicitaire",
  "sans-identifiant": "Sans identifiant de clic Google (gclid, gbraid, wbraid)",
  "clic-trop-ancien": "Clic de plus de 90 jours",
  "clic-apres": "Clic enregistré après la vente",
};

export interface SaleConversion {
  /** Stable : vente:<soumission> ou installation:<job>. */
  key: string;
  kind: "vente" | "installation";
  name: string;
  at: string;
  valueCents: number;
  /** Order ID du flux : unique par conversion. */
  orderId: string;
  quoteId: string;
  quoteNumber: string;
  clientId?: string;
  channel: ChannelId;
  consent: "granted" | "denied" | "absent";
  /** Demande du journal dont viennent l'identifiant et le consentement. */
  journalId?: string;
  click: { type: ClickType; value: string; at: string } | null;
  google: { eligible: true } | { eligible: false; reason: GoogleExclusion };
  /** Signaux Meta de la demande consentie (jamais dans le flux Google). */
  meta: { eligible: boolean; fbc?: string; fbp?: string; userAgent?: string; emails: string[]; phones: string[] };
}

const DEMAND = new Set(["soumission", "rendez-vous", "thermomatch", "thermoscan", "contact"]);

/** Première acceptation d'une soumission (moment de la signature). */
export function firstAcceptance(q: Quote): Acceptance | null {
  const all = q.versions.map((v) => v.acceptance).filter((a): a is Acceptance => Boolean(a));
  all.sort((a, b) => a.at.localeCompare(b.at));
  return all[0] ?? null;
}

/** Commission prévue d'une acceptation : pourcentage du sous-total après rabais, avant taxes, sans LogisVert. */
export function plannedCommission(a: Acceptance, percent: number): number {
  return percentOf(commissionBase(a.snapshot.totals), percent);
}

function channelOf(e: JournalEntry): ChannelId {
  const a = e.attribution;
  return !a ? "inconnu" : a.channel in CHANNEL_LABELS ? a.channel : classifyChannel(a);
}

function clickOf(ads: AdsAttribution | undefined): { type: ClickType; value: string; at: string } | null {
  if (!ads || ads.consent.choice !== "granted" || !ads.clickAt) return null;
  if (ads.gclid) return { type: "gclid", value: ads.gclid, at: ads.clickAt };
  if (ads.gbraid) return { type: "gbraid", value: ads.gbraid, at: ads.clickAt };
  if (ads.wbraid) return { type: "wbraid", value: ads.wbraid, at: ads.clickAt };
  return null;
}

/** Attribution publicitaire d'une conversion : la demande consentie la plus récente avant la conversion. */
function attributionFor(c: ClientLike, atIso: string, now: Date): Pick<SaleConversion, "channel" | "consent" | "journalId" | "click" | "google" | "meta"> {
  const at = Date.parse(atIso);
  const demands = c.journal.filter((e) => DEMAND.has(e.kind) && !(e.lead && typeof e.lead === "object" && "event" in e.lead) && Date.parse(e.at) <= at).sort((a, b) => b.at.localeCompare(a.at));
  const channel: ChannelId = demands.length ? channelOf(demands[demands.length - 1]) : "inconnu";
  const withAds = demands.filter((e) => e.attribution?.ads);
  const consented = withAds.filter((e) => e.attribution!.ads!.consent.choice === "granted");
  const consent: SaleConversion["consent"] = consented.length ? "granted" : withAds.length ? "denied" : "absent";
  const metaBase = { emails: c.emails ?? [], phones: c.phones ?? [] };
  if (!demands.length) return { channel, consent, click: null, google: { eligible: false, reason: "sans-demande" }, meta: { eligible: false, ...metaBase } };
  if (!consented.length) return { channel, consent, click: null, google: { eligible: false, reason: "sans-consentement" }, meta: { eligible: false, ...metaBase } };

  const latest = consented[0];
  const la = latest.attribution!.ads!;
  const meta = { eligible: Boolean(la.fbc || la.fbp), fbc: la.fbc, fbp: la.fbp, ...metaBase };

  // Le clic Google le plus récent parmi les demandes consenties.
  const clicked = consented.map((e) => ({ e, click: clickOf(e.attribution!.ads) })).filter((x) => x.click);
  if (!clicked.length) return { channel, consent, journalId: latest.id, click: null, google: { eligible: false, reason: "sans-identifiant" }, meta };
  clicked.sort((a, b) => b.click!.at.localeCompare(a.click!.at));
  const best = clicked.find((x) => Date.parse(x.click!.at) <= at) ?? null;
  if (!best) return { channel, consent, journalId: clicked[0].e.id, click: clicked[0].click, google: { eligible: false, reason: "clic-apres" }, meta };
  const clickAt = Date.parse(best.click!.at);
  const tooOld = at - clickAt > CLICK_TTL_MS || now.getTime() - clickAt > CLICK_TTL_MS;
  return {
    channel: channelOf(best.e),
    consent,
    journalId: best.e.id,
    click: best.click,
    google: tooOld ? { eligible: false, reason: "clic-trop-ancien" } : { eligible: true },
    meta,
  };
}

export function saleConversions(clients: ClientLike[], opts: { percent: number; invoices?: InvoiceLike[]; includeInstallation?: boolean; now: Date }): SaleConversion[] {
  const out: SaleConversion[] = [];
  const invoices = (opts.invoices ?? []).filter((i) => i.status !== "annulee");
  for (const c of clients) {
    for (const q of c.quotes) {
      const a = firstAcceptance(q);
      if (!a || Date.parse(a.at) > opts.now.getTime()) continue;
      const attr = attributionFor(c, a.at, opts.now);
      out.push({
        key: `vente:${q.id}`,
        kind: "vente",
        name: CONVERSION_NAMES.venteSignee,
        at: a.at,
        valueCents: plannedCommission(a, opts.percent),
        orderId: `${q.number}-V`,
        quoteId: q.id,
        quoteNumber: q.number,
        clientId: c.id,
        ...attr,
        // Navigateur de l'acceptation en ligne (preuve de signature) : seul signal technique repris pour Meta.
        meta: { ...attr.meta, userAgent: a.userAgent ? a.userAgent.slice(0, 400) : undefined },
      });
    }
    if (!opts.includeInstallation) continue;
    for (const j of c.jobs) {
      const done = jobCompletion(j);
      if (!done || Date.parse(done.completedAt) > opts.now.getTime()) continue;
      const linked = acceptedQuoteForJob(j, c.quotes, { completedAt: done.completedAt });
      if (!linked) continue;
      const a = firstAcceptance(linked.quote) ?? linked.acceptance;
      const inv = invoices.find((i) => i.jobId === j.id);
      out.push({
        key: `installation:${j.id}`,
        kind: "installation",
        name: CONVERSION_NAMES.installationTerminee,
        at: done.completedAt,
        valueCents: inv ? inv.commissionCents : plannedCommission(a, opts.percent),
        orderId: `${linked.quote.number}-J${j.number}`,
        quoteId: linked.quote.id,
        quoteNumber: linked.quote.number,
        clientId: c.id,
        ...attributionFor(c, done.completedAt, opts.now),
      });
    }
  }
  return out.sort((x, y) => y.at.localeCompare(x.at));
}

/** Achats à envoyer à Meta : ventes signées admissibles, de moins de 7 jours, pas déjà envoyées avec succès. */
export function pendingMetaPurchases(conversions: SaleConversion[], sent: Record<string, { ok: boolean }>, now: Date): SaleConversion[] {
  return conversions.filter((c) => c.kind === "vente" && c.consent === "granted" && c.meta.eligible && !sent[metaPurchaseId(c)]?.ok && now.getTime() - Date.parse(c.at) <= META_MAX_AGE_MS);
}

/** event_id stable d'un achat : jamais envoyé deux fois. */
export const metaPurchaseId = (c: Pick<SaleConversion, "quoteId">) => `vente-${c.quoteId}`;
