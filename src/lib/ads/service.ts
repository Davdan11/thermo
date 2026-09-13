/* ==================================================================
   Mesure publicitaire : lecture des magasins (serveur seulement).

   - googleFeed()        flux CSV de Google Ads + trace du passage
   - syncMetaPurchases() achats (ventes signées) → API Conversions Meta,
                         inerte sans clés et hors production
   - adsOverview()       page /gestion/publicite (totaux, jamais de secret)
   - adsForClient()      carte « Publicité » de la fiche client
   Les clients viennent du CRM (demandes, soumissions et jobs réunis
   par téléphone et courriel) : même rapprochement que la fiche client.
   ================================================================== */

import { CHANNEL_LABELS, type ChannelId } from "@/lib/attribution/core";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import { readCommissions } from "@/lib/gestion/commissions/store";
import type { CrmIndex } from "@/lib/gestion/crm/model";
import { freshIndex, loadCrmIndex } from "@/lib/gestion/crm/service";
import { channelOfEntry, isEventLine, KIND_LABELS } from "@/lib/gestion/crm/sources";
import { AD_CONSENT_VERSION, BROWSER_CONVERSIONS, CLICK_TTL_DAYS, CONVERSION_NAMES, META_MAX_AGE_MS, publicAdsConfig, type BrowserConversion } from "./config";
import { feedCredentials, FEED_MIN_PASSWORD } from "./feed-auth";
import { googleFeedRows, toGoogleCsv } from "./google-feed";
import { buildMetaEvent, metaActive, metaConfig, sendMetaEvents } from "./meta-capi";
import { SITE_ORIGIN } from "./meta-lead";
import { EXCLUSION_LABELS, metaPurchaseId, pendingMetaPurchases, saleConversions, type ClientLike, type SaleConversion } from "./sales";
import { readPublicite, recordFeedFetch, recordMetaSends, type PubliciteData } from "./store";

/** Adresse du flux (le dossier de la route porte l'extension .csv). */
export const FEED_PATH = "/api/publicite/ventes-google.csv";
export const FEED_URL = `${SITE_ORIGIN}${FEED_PATH}`;

const FORM_KINDS = new Set(["soumission", "rendez-vous", "thermomatch", "thermoscan", "contact"]);
const DAY = 86_400_000;
const TZ = "America/Toronto";
const dateFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "short", year: "numeric" });
const stampFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
const when = (iso: string) => dateFmt.format(new Date(iso));
const stamp = (iso: string) => stampFmt.format(new Date(iso));

function clientsOf(index: CrmIndex): ClientLike[] {
  return index.clients.map((c) => ({ id: c.b.id, journal: c.b.journal, quotes: c.b.quotes, jobs: c.b.jobs, phones: c.b.phones, emails: c.b.emails }));
}

async function loadConversions(now: Date, index?: CrmIndex): Promise<{ index: CrmIndex; conversions: SaleConversion[]; pub: PubliciteData; percent: number }> {
  const [idx, com, pub] = await Promise.all([index ? Promise.resolve(index) : freshIndex(now), readCommissions(), readPublicite()]);
  // Installations toujours calculées (affichage) ; le flux ne les garde que si le réglage est activé.
  const conversions = saleConversions(clientsOf(idx), { percent: com.settings.percent, invoices: com.invoices, includeInstallation: true, now });
  return { index: idx, conversions, pub, percent: com.settings.percent };
}

const inFeed = (c: SaleConversion, pub: PubliciteData) => c.kind === "vente" || pub.settings.installationConversion;

/* ---------------- Flux Google ---------------- */

export async function googleFeed(now: Date = new Date()): Promise<{ csv: string; rows: number }> {
  const { conversions, pub } = await loadConversions(now);
  const kept = conversions.filter((c) => inFeed(c, pub));
  const rows = googleFeedRows(kept).length;
  await recordFeedFetch(rows, now).catch((e) => console.error("[publicite] trace du flux :", e));
  return { csv: toGoogleCsv(kept), rows };
}

/* ---------------- Meta : achats ---------------- */

export async function syncMetaPurchases(now: Date = new Date(), opts: { env?: NodeJS.ProcessEnv } = {}): Promise<{ status: "inactif" | "envoye" | "erreur" | "rien"; detail: string; sent: number }> {
  const env = opts.env ?? process.env;
  if (!metaActive(env)) return { status: "inactif", detail: env.NODE_ENV !== "production" ? "Hors production : aucun envoi." : "Clés Meta absentes.", sent: 0 };
  const { conversions, pub } = await loadConversions(now);
  const pending = pendingMetaPurchases(conversions, pub.metaSent, now);
  if (!pending.length) return { status: "rien", detail: "Aucune vente à envoyer.", sent: 0 };
  const events = pending.map((c) =>
    buildMetaEvent({ name: "Purchase", eventId: metaPurchaseId(c), time: new Date(c.at), sourceUrl: `${SITE_ORIGIN}/devis`, userAgent: c.meta.userAgent, emails: c.meta.emails, phones: c.meta.phones, fbc: c.meta.fbc, fbp: c.meta.fbp, valueCents: c.valueCents }),
  );
  const r = await sendMetaEvents(events, { env });
  const at = new Date().toISOString();
  await recordMetaSends(pending.map((c) => [metaPurchaseId(c), { at, name: "Purchase" as const, ok: r.status === "envoye", detail: r.detail, valueCents: c.valueCents, ref: c.quoteNumber }]));
  return { status: r.status === "envoye" ? "envoye" : r.status === "erreur" ? "erreur" : "inactif", detail: r.detail, sent: r.status === "envoye" ? pending.length : 0 };
}

/* ---------------- Vues ---------------- */

export interface StatusRow {
  key: string;
  label: string;
  env: string;
  present: boolean;
  secret: boolean;
  note: string;
}

export interface SaleRow {
  key: string;
  when: string;
  name: string;
  quoteNumber: string;
  clientId?: string;
  valueCents: number;
  channel: string;
  click: string;
  google: { ok: boolean; label: string };
  meta: string;
}

export interface AdsOverview {
  status: { google: StatusRow[]; meta: StatusRow[]; feed: StatusRow[] };
  consent: { total: number; granted: number; denied: number; absent: number; rate: number | null };
  byType: Array<{ key: string; label: string; n: number; note?: string }>;
  byChannel: Array<{ key: string; label: string; demandes: number; ventes: number; valueCents: number }>;
  sales: SaleRow[];
  feed: { url: string; configured: boolean; lastFetch: string | null; lastRows: number | null; rows: number; valueCents: number };
  meta: { active: boolean; production: boolean; sends: Array<{ key: string; when: string; name: string; ok: boolean; detail: string; ref?: string }> };
  settings: PubliciteData["settings"];
  names: { vente: string; installation: string };
  browser: Array<{ id: BrowserConversion; label: string; env: string }>;
  consentVersion: string;
  ttlDays: number;
  minPassword: number;
}

function metaStatus(c: SaleConversion, pub: PubliciteData, active: boolean, now: Date): string {
  if (c.kind !== "vente") return "—";
  const sent = pub.metaSent[metaPurchaseId(c)];
  if (sent?.ok) return `Envoyée le ${stamp(sent.at)}`;
  if (!active) return "Inactive";
  if (c.consent !== "granted" || !c.meta.eligible) return "Non admissible (consentement ou pixel absent)";
  if (now.getTime() - Date.parse(c.at) > META_MAX_AGE_MS) return "Trop ancienne pour Meta (7 jours)";
  return sent ? `Échec : ${sent.detail}` : "En attente";
}

function googleStatus(c: SaleConversion, pub: PubliciteData): { ok: boolean; label: string } {
  if (!c.google.eligible) return { ok: false, label: EXCLUSION_LABELS[c.google.reason] };
  if (!inFeed(c, pub)) return { ok: false, label: "Installation : désactivée dans les réglages" };
  return { ok: true, label: "Dans le flux" };
}

const CLICK_LABELS = { gclid: "gclid (Google)", gbraid: "gbraid (Google, iOS)", wbraid: "wbraid (Google, iOS)" } as const;

function saleRow(c: SaleConversion, pub: PubliciteData, active: boolean, now: Date): SaleRow {
  return {
    key: c.key,
    when: when(c.at),
    name: c.name,
    quoteNumber: c.quoteNumber,
    clientId: c.clientId,
    valueCents: c.valueCents,
    channel: CHANNEL_LABELS[c.channel] ?? c.channel,
    click: c.click ? CLICK_LABELS[c.click.type] : "—",
    google: googleStatus(c, pub),
    meta: metaStatus(c, pub, active, now),
  };
}

const present = (v: string | undefined) => Boolean(v && v.trim());

export async function adsOverview(now: Date = new Date()): Promise<AdsOverview> {
  const { index, conversions, pub } = await loadConversions(now);
  const cfg = publicAdsConfig();
  const active = metaActive();
  const from = now.getTime() - 30 * DAY;

  const forms = index.src.journal.filter((e: JournalEntry) => FORM_KINDS.has(e.kind) && !isEventLine(e) && Date.parse(e.at) >= from && Date.parse(e.at) <= now.getTime());
  const granted = forms.filter((e) => e.attribution?.ads?.consent.choice === "granted").length;
  const denied = forms.filter((e) => e.attribution?.ads?.consent.choice === "denied").length;
  const recent = conversions.filter((c) => Date.parse(c.at) >= from);

  const byChannel = new Map<ChannelId, { demandes: number; ventes: number; valueCents: number }>();
  const bump = (id: ChannelId) => byChannel.get(id) ?? byChannel.set(id, { demandes: 0, ventes: 0, valueCents: 0 }).get(id)!;
  for (const e of forms) bump(channelOfEntry(e)).demandes++;
  for (const c of recent.filter((x) => x.kind === "vente")) {
    const b = bump(c.channel);
    b.ventes++;
    b.valueCents += c.valueCents;
  }

  const feedRows = conversions.filter((c) => inFeed(c, pub) && c.google.eligible);
  const last = pub.feedFetches[pub.feedFetches.length - 1];
  const creds = feedCredentials();

  const row = (key: string, label: string, env: string, ok: boolean, secret: boolean, note: string): StatusRow => ({ key, label, env, present: ok, secret, note });
  const status = {
    google: [
      row("ga", "Google Analytics 4", "NEXT_PUBLIC_GA_ID", present(cfg.gaId), false, "Mesure d’audience (G-…)."),
      row("ads", "Balise Google Ads", "NEXT_PUBLIC_GOOGLE_ADS_ID", present(cfg.adsId), false, "Identifiant du compte (AW-…)."),
      ...(Object.keys(BROWSER_CONVERSIONS) as BrowserConversion[]).map((k) =>
        row(`label-${k}`, `Étiquette « ${BROWSER_CONVERSIONS[k].label} »`, BROWSER_CONVERSIONS[k].labelEnv, present(cfg.labels[k]), false, "Étiquette de l’action de conversion Web."),
      ),
    ],
    meta: [
      row("pixel", "Pixel Meta (navigateur)", "NEXT_PUBLIC_META_PIXEL_ID", present(cfg.metaPixelId), false, "Mêmes événements que Google, après consentement."),
      row("capi-pixel", "API Conversions : identifiant", "META_PIXEL_ID", metaConfig() !== null || present(process.env.META_PIXEL_ID), true, "Même identifiant que le pixel, côté serveur."),
      row("capi-token", "API Conversions : jeton", "META_CAPI_TOKEN", present(process.env.META_CAPI_TOKEN), true, "Jeton d’accès du gestionnaire d’événements."),
      row("capi-test", "Code de test (facultatif)", "META_TEST_EVENT_CODE", present(process.env.META_TEST_EVENT_CODE), true, "À retirer après les essais."),
    ],
    feed: [
      row("feed-user", "Identifiant du flux", "ADS_FEED_USER", present(process.env.ADS_FEED_USER), true, "Choisi par vous, donné à Google Ads."),
      row("feed-pass", "Mot de passe du flux", "ADS_FEED_PASSWORD", (process.env.ADS_FEED_PASSWORD ?? "").length >= FEED_MIN_PASSWORD, true, `${FEED_MIN_PASSWORD} caractères ou plus.`),
    ],
  };

  const count = (kind: string) => forms.filter((e) => e.kind === kind).length;
  return {
    status,
    consent: { total: forms.length, granted, denied, absent: forms.length - granted - denied, rate: forms.length ? granted / forms.length : null },
    byType: [
      { key: "soumission", label: "Soumissions envoyées", n: count("soumission") },
      { key: "thermomatch", label: "ThermoMatch envoyés par courriel", n: count("thermomatch"), note: "« ThermoMatch terminé » est compté dans Google Ads et Meta seulement." },
      { key: "rendez-vous", label: "Rendez-vous réservés", n: count("rendez-vous") },
      { key: "vente", label: CONVERSION_NAMES.venteSignee, n: recent.filter((c) => c.kind === "vente").length },
      { key: "installation", label: CONVERSION_NAMES.installationTerminee, n: recent.filter((c) => c.kind === "installation").length },
    ],
    byChannel: [...byChannel.entries()]
      .map(([id, v]) => ({ key: id, label: CHANNEL_LABELS[id] ?? id, ...v }))
      .sort((a, b) => b.ventes - a.ventes || b.demandes - a.demandes || a.label.localeCompare(b.label, "fr-CA")),
    sales: conversions.filter((c) => now.getTime() - Date.parse(c.at) <= CLICK_TTL_DAYS * DAY).map((c) => saleRow(c, pub, active, now)),
    feed: { url: FEED_URL, configured: creds !== null, lastFetch: last ? stamp(last.at) : null, lastRows: last ? last.rows : null, rows: feedRows.length, valueCents: feedRows.reduce((s, c) => s + c.valueCents, 0) },
    meta: {
      active,
      production: process.env.NODE_ENV === "production",
      sends: Object.entries(pub.metaSent)
        .sort((a, b) => b[1].at.localeCompare(a[1].at))
        .slice(0, 12)
        .map(([key, r]) => ({ key, when: stamp(r.at), name: r.name === "Purchase" ? "Achat (vente signée)" : "Lead (soumission)", ok: r.ok, detail: r.detail, ref: r.ref })),
    },
    settings: pub.settings,
    names: { vente: CONVERSION_NAMES.venteSignee, installation: CONVERSION_NAMES.installationTerminee },
    browser: (Object.keys(BROWSER_CONVERSIONS) as BrowserConversion[]).map((id) => ({ id, label: BROWSER_CONVERSIONS[id].label, env: BROWSER_CONVERSIONS[id].labelEnv })),
    consentVersion: AD_CONSENT_VERSION,
    ttlDays: CLICK_TTL_DAYS,
    minPassword: FEED_MIN_PASSWORD,
  };
}

/* ---------------- Fiche client ---------------- */

export interface ClientAdsView {
  demands: Array<{ key: string; when: string; kind: string; channel: string; consent: string; ids: string[]; clickWhen: string | null }>;
  sales: SaleRow[];
}

/** Identifiant tronqué (six derniers caractères) : assez pour le reconnaître, jamais la valeur entière à l'écran. */
const mask = (v: string) => `…${v.slice(-6)}`;

export async function adsForClient(clientId: string, now: Date = new Date()): Promise<ClientAdsView | null> {
  const index = await loadCrmIndex();
  const c = index.byId.get(clientId);
  if (!c) return null;
  const withAds = c.b.journal.filter((e) => e.attribution?.ads && !isEventLine(e));
  const { conversions, pub } = await loadConversions(now, index);
  const mine = conversions.filter((x) => x.clientId === c.b.id);
  if (!withAds.length && !mine.length) return null;
  const active = metaActive();
  return {
    demands: [...withAds]
      .sort((a, b) => b.at.localeCompare(a.at))
      .map((e) => {
        const a = e.attribution!.ads!;
        const ids = (["gclid", "gbraid", "wbraid", "fbc", "msclkid"] as const).filter((k) => a[k]).map((k) => `${k} ${mask(a[k]!)}`);
        return {
          key: e.id,
          when: stamp(e.at),
          kind: KIND_LABELS[e.kind] ?? e.kind,
          channel: CHANNEL_LABELS[channelOfEntry(e)],
          consent: `${a.consent.choice === "granted" ? "Accordé" : "Refusé"} le ${stamp(a.consent.at)} (texte du ${a.consent.version})`,
          ids,
          clickWhen: a.clickAt ? stamp(a.clickAt) : null,
        };
      }),
    sales: mine.map((x) => saleRow(x, pub, active, now)),
  };
}
