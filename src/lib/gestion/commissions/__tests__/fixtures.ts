/* Données fictives des tests du volet B (aucun vrai client, aucune vraie entreprise, numéros 514 555-01xx). */
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { computeTotals, defaultSelection } from "@/lib/soumissions/totals";
import { fullSettings, RATES, readyContent } from "@/lib/soumissions/__tests__/fixtures";
import type { Acceptance, Quote, QuoteContent, Settings } from "@/lib/soumissions/types";
import type { GeoPoint, Installer, Job } from "@/lib/gestion/types";
import type { Channels } from "@/lib/gestion/automatisations/send";
import type { ChannelOutcome } from "@/lib/gestion/automatisations/types";

export const BY = "proprio@exemple.ca";
export const JOB_ID = "j_testjob0001";
export const INSTALLER_ID = "i_testinst001";
export const QUOTE_ID = "q_testquote01";

export async function tempDir(): Promise<string> {
  return mkdtemp(path.join(tmpdir(), "thermo-voletb-"));
}

export function testEnv(dir: string, extra: Record<string, string> = {}): NodeJS.ProcessEnv {
  const base: Record<string, string | undefined> = { ...process.env };
  for (const k of ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_PHONE_NUMBER", "TEXTOS_ENVOIS_DEV", "SMTP_HOST", "SMTP_USER", "SMTP_PASS", "RESEND_API_KEY", "STRIPE_SECRET_KEY", "STRIPE_WEBHOOK_SECRET", "ALERT_SMS_TO", "AUTOMATISATIONS_CRON_SECRET", "GOOGLE_REVIEW_URL", "BUSINESS_MAILING_ADDRESS"]) delete base[k];
  return {
    ...base,
    NODE_ENV: "test",
    GESTION_DATA_DIR: dir,
    TEXTOS_DATA_DIR: dir,
    RELANCES_FILE: path.join(dir, "relances.json"),
    LEAD_JOURNAL_DIR: path.join(dir, "leads"),
    ADMIN_EMAILS: BY,
    BUSINESS_MAILING_ADDRESS: "1 rue Exemple, Montréal (Québec) H2X 1Y4",
    ...extra,
  } as NodeJS.ProcessEnv;
}

/** Soumission acceptée : totaux calculés comme à la signature (instantané figé). */
export function acceptedQuote(o: { id?: string; number?: string; at?: string; content?: QuoteContent; phone?: string; email?: string } = {}): Quote {
  const content = o.content ?? readyContent();
  if (o.phone !== undefined) content.client.phone = o.phone;
  if (o.email !== undefined) content.client.email = o.email;
  const at = o.at ?? "2026-09-01T15:00:00.000Z";
  const id = o.id ?? QUOTE_ID;
  const number = o.number ?? "2026-0012";
  const selection = defaultSelection(content.lines);
  const totals = computeTotals(content, selection, RATES, at.slice(0, 10));
  const acceptance: Acceptance = {
    at,
    version: 1,
    versionId: "v_1",
    quoteNumber: number,
    typedName: "Camille Exemple",
    termsAccepted: true,
    selectedOptionIds: selection,
    selectedOptions: [],
    totalCents: totals.totalCents,
    clientPaysCents: totals.clientPaysCents,
    ip: "127.0.0.1",
    userAgent: "test",
    contentHash: "x",
    snapshotHash: "y",
    snapshot: { document: {} as never, selection, totals, acceptedAt: at, typedName: "Camille Exemple", termsAccepted: true, ip: "127.0.0.1", userAgent: "test" },
  };
  return {
    id,
    number,
    createdAt: at,
    createdBy: BY,
    duplicatedFrom: null,
    internalNotes: "",
    versions: [
      { id: "v_1", v: 1, token: "t".repeat(43), kind: "initiale", basedOn: null, createdAt: at, createdBy: BY, updatedAt: at, status: "acceptee", content, frozen: null, contentHash: null, sentAt: at, sends: [], views: { count: 1, firstAt: at, lastAt: at }, acceptance, refusal: null, questions: [], replacedAt: null, replacedBy: null },
    ],
    pipedrive: { personId: null, dealId: null, log: [] },
    events: [],
  };
}

export function makeInstaller(over: Partial<Installer> = {}): Installer {
  return {
    id: INSTALLER_ID,
    company: "Climatisation Exemple",
    contactName: "Alex Exemple",
    phone: "514 555-0142",
    email: "alex@exemple.ca",
    rbq: "0000-0000-00",
    basePostalCode: "H7A 1A1",
    base: { lat: 45.6, lon: -73.7, city: "Laval", precision: "fsa" } as unknown as GeoPoint,
    radiusKm: 60,
    extraRegions: [],
    brands: [],
    systemTypes: [],
    active: true,
    maxOpenJobs: null,
    notes: "",
    createdAt: "2026-08-01T12:00:00.000Z",
    updatedAt: "2026-08-01T12:00:00.000Z",
    ...over,
  };
}

/** Job terminé (contrat du volet A : état « termine » + completedAt). */
export function makeJob(over: Partial<Job> & { completedAt?: string } = {}): Job {
  return {
    id: JOB_ID,
    number: 7,
    createdAt: "2026-09-01T15:00:00.000Z",
    updatedAt: "2026-09-10T18:00:00.000Z",
    client: { firstName: "Camille", lastName: "Exemple", phone: "514 555-0199", email: "camille@exemple.ca", address: "10 rue Fictive", city: "Laval", postalCode: "H7A 1A1" },
    geo: null,
    region: null,
    regionGuess: null,
    brand: null,
    systemType: null,
    modelSlug: null,
    modelLabel: null,
    capacity: "",
    desiredDate: null,
    desiredWindow: "",
    installerNotes: "",
    internalNotes: "Soumission 2026-0012 acceptée le 1 septembre 2026.",
    status: "termine",
    assignedInstallerId: INSTALLER_ID,
    scheduledFor: "2026-09-10",
    offers: [],
    audit: [],
    completedAt: "2026-09-10T18:00:00.000Z",
    ...over,
  } as Job;
}

export async function writeStores(dir: string, d: { jobs?: Job[]; installers?: Installer[]; quotes?: Quote[]; settings?: Settings }): Promise<void> {
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "gestion.json"), JSON.stringify({ version: 1, installers: d.installers ?? [makeInstaller()], jobs: d.jobs ?? [makeJob()] }));
  await writeFile(path.join(dir, "soumissions.json"), JSON.stringify({ version: 1, counters: {}, quotes: d.quotes ?? [acceptedQuote()], photos: [] }));
  await writeFile(path.join(dir, "soumissions-reglages.json"), JSON.stringify(d.settings ?? fullSettings()));
}

export interface Call {
  kind: keyof Channels;
  to: string | null | undefined;
  subject?: string;
  body?: string;
  label?: string;
}

/** Canaux simulés : chaque envoi est noté, rien ne part. */
export function fakeChannels(outcome: ChannelOutcome = "envoye"): { ch: Channels; calls: Call[]; count: (k: keyof Channels, label?: string) => number } {
  const calls: Call[] = [];
  const ch: Channels = {
    clientSms: async (to, body, o) => (calls.push({ kind: "clientSms", to, body, label: o.label }), outcome),
    clientMail: async (to, mail, o) => (calls.push({ kind: "clientMail", to, subject: mail.subject, label: o.label }), outcome),
    installerMail: async (to, mail, label) => (calls.push({ kind: "installerMail", to, subject: mail.subject, label }), outcome),
    installerSms: async (to, body, label) => (calls.push({ kind: "installerSms", to, body, label }), outcome),
    ownerMail: async (mail, label) => (calls.push({ kind: "ownerMail", to: null, subject: mail.subject, label }), outcome),
    ownerSms: async (body, label) => (calls.push({ kind: "ownerSms", to: null, body, label }), outcome),
  };
  return { ch, calls, count: (k, label) => calls.filter((c) => c.kind === k && (!label || c.label?.includes(label))).length };
}
