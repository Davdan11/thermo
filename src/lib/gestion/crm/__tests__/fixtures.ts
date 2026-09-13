/* Données fictives des tests du CRM (aucun vrai client). Numéros 555-01xx, adresses @exemple.ca. */
import type { JournalEntry } from "@/lib/crm/lead-journal";
import { fullSettings, readyContent } from "@/lib/soumissions/__tests__/fixtures";
import { acceptVersion, addQuestion, createQuote, freezeForSend, recordView, refuseVersion } from "@/lib/soumissions/quote";
import type { ClientInfo, LogisVertMode, Quote, SoumissionsData } from "@/lib/soumissions/types";
import type { Conversation, TextoMessage } from "@/lib/textos/types";
import type { Job } from "../../types";
import { emptyCrm } from "../store";
import type { SourceData } from "../types";

/** Mercredi 16 septembre 2026, 11 h à Montréal. */
export const NOW = new Date("2026-09-16T15:00:00Z");
export const hoursAgo = (h: number, from = NOW) => new Date(from.getTime() - h * 3_600_000);
export const daysAgo = (d: number, from = NOW) => hoursAgo(d * 24, from);
export const iso = (d: Date) => d.toISOString();

export function src(over: Partial<SourceData> = {}): SourceData {
  return { journal: [], outcomes: new Map(), quotes: [], jobs: [], installers: {}, relances: [], textos: [], crm: emptyCrm(), generic: [], ...over };
}

let seq = 0;
export function entry(kind: JournalEntry["kind"], at: Date, lead: Record<string, unknown>, extra: Partial<JournalEntry> = {}): JournalEntry {
  seq++;
  return { id: `e${String(seq).padStart(4, "0")}-demo-uuid`, at: iso(at), kind, lead, ...extra };
}

const data: SoumissionsData = { version: 1, counters: {}, quotes: [], photos: [] };

export interface QuoteOpts {
  client?: Partial<ClientInfo>;
  createdAt?: Date;
  sentAt?: Date;
  viewedAt?: Date;
  acceptedAt?: Date;
  refusedAt?: Date;
  reason?: string;
  questionAt?: Date;
  mode?: LogisVertMode;
  validUntil?: string;
  dealId?: number;
}

export function quote(o: QuoteOpts = {}): Quote {
  const settings = fullSettings();
  const c = readyContent(settings);
  c.client = { ...c.client, ...o.client };
  if (o.mode) c.logisvert = { mode: o.mode };
  if (o.validUntil) c.validUntil = o.validUntil;
  const q = createQuote(data, c, "proprio@exemple.ca", o.createdAt ?? o.sentAt ?? daysAgo(10));
  const v = q.versions[0];
  if (o.sentAt) {
    freezeForSend(q, v, settings, [], o.sentAt);
    v.sends.push({ at: iso(o.sentAt), by: "proprio@exemple.ca", kind: "envoi", email: "envoye", sms: null });
  }
  if (o.viewedAt) recordView(v, o.viewedAt);
  if (o.questionAt) addQuestion(v, "Le support au sol est-il compris ?", "203.0.113.1", "test", o.questionAt);
  if (o.acceptedAt) acceptVersion(q, v, { selection: [], typedName: "Camille Exemple", termsAccepted: true, ip: "203.0.113.1", userAgent: "test", now: o.acceptedAt });
  if (o.refusedAt) refuseVersion(v, o.reason ?? "Trop cher pour nous", "203.0.113.1", "test", o.refusedAt);
  if (o.dealId) q.pipedrive.dealId = o.dealId;
  return q;
}

let jobSeq = 0;
export function job(over: Partial<Omit<Job, "client">> & { client?: Partial<Job["client"]> } = {}): Job {
  jobSeq++;
  const { client, ...rest } = over;
  const created = rest.createdAt ?? iso(daysAgo(5));
  return {
    id: `j_testjob${String(jobSeq).padStart(4, "0")}`,
    number: jobSeq,
    createdAt: created,
    updatedAt: created,
    client: { firstName: "Camille", lastName: "Exemple", phone: "", email: "", address: "", city: "Laval", postalCode: "", ...client },
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
    internalNotes: "",
    status: "nouveau",
    assignedInstallerId: null,
    scheduledFor: null,
    offers: [],
    audit: [],
    ...rest,
  };
}

let msgSeq = 0;
export function msg(dir: "in" | "out", at: Date, body: string, extra: Partial<TextoMessage> = {}): TextoMessage {
  msgSeq++;
  return { id: `m_testmsg${String(msgSeq).padStart(4, "0")}`, dir, at: iso(at), body, ...extra };
}

let convSeq = 0;
export function conv(phone: string, messages: TextoMessage[], extra: Partial<Conversation> = {}): Conversation {
  convSeq++;
  return {
    id: `c_testconv${String(convSeq).padStart(3, "0")}`,
    phone,
    createdAt: messages[0]?.at ?? iso(NOW),
    lastAt: messages.at(-1)?.at ?? iso(NOW),
    unread: 0,
    archived: false,
    optedOut: false,
    notify: { pending: 0 },
    messages,
    ...extra,
  };
}
