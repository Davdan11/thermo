/* ==================================================================
   Adaptateurs : chaque magasin → points de contact (Touchpoint).

   - Journal des demandes : formulaires (soumission, rendez-vous,
     ThermoMatch, ThermoScan, contact), appels (manqué, message vocal,
     enregistré), premier texto. Les lignes de résultat donnent
     l'affaire Pipedrive (dealId).
     Exclus : candidatures (partenaire), désabonnements et
     confirmations (lignes avec lead.event), relances.
     Alertes LogisVert : s'attachent à un client existant, n'en créent
     jamais.
   - Soumissions : client de la dernière version envoyée (sinon de la
     version courante).
   - Jobs : client du job.
   - Relances : courriel seulement, s'attachent à un client existant.
   - Contacts saisis à la main (crm.json).
   ================================================================== */

import { CHANNEL_LABELS, classifyChannel, type ChannelId } from "@/lib/attribution/core";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import type { ScheduledMessage } from "@/lib/relances/core";
import { currentVersion, latestSent } from "@/lib/soumissions/quote";
import type { Quote } from "@/lib/soumissions/types";
import type { Job } from "../types";
import { emailOf, phoneOf } from "./identity";
import type { JournalOutcome, ManualContact, Touchpoint } from "./types";

/** Demandes entrantes (créent ou réactivent un client). */
export const DEMAND_KINDS = new Set(["soumission", "rendez-vous", "thermomatch", "thermoscan", "contact", "appel-manque", "message-vocal", "appel-enregistre", "texto"]);
export const PHONE_KINDS = new Set(["appel-manque", "message-vocal", "appel-enregistre"]);
/** Demandes par formulaire ou texto : rappel dans le délai choisi. */
export const CALLBACK_KINDS = new Set(["soumission", "thermomatch", "thermoscan", "contact", "texto"]);

export const KIND_LABELS: Record<string, string> = {
  soumission: "Demande de soumission",
  "rendez-vous": "Rendez-vous réservé",
  thermomatch: "ThermoMatch",
  thermoscan: "ThermoScan",
  contact: "Message (formulaire de contact)",
  "appel-manque": "Appel manqué",
  "message-vocal": "Message vocal",
  "appel-enregistre": "Appel",
  texto: "Premier texto",
  "alerte-logisvert": "Alerte LogisVert",
};

const str = (v: unknown): string | undefined => (typeof v === "string" && v.trim() ? v.trim() : undefined);
const cap = (s: string | undefined) => (s ? s.charAt(0).toLocaleUpperCase("fr-CA") + s.slice(1) : undefined);

export const isEventLine = (e: JournalEntry): boolean => Boolean(e.lead && typeof e.lead === "object" && "event" in e.lead);
export const isDemand = (e: JournalEntry): boolean => DEMAND_KINDS.has(e.kind) && !isEventLine(e);

/** Canal d'une demande : téléphone et texto par nature ; sinon celui classé à la réception (reclassé s'il manque). */
export function channelOfEntry(e: JournalEntry): ChannelId {
  if (PHONE_KINDS.has(e.kind)) return "telephone";
  if (e.kind === "texto") return "texto";
  const a = e.attribution;
  return !a ? "inconnu" : a.channel in CHANNEL_LABELS ? a.channel : classifyChannel(a);
}

/** Réunit les lignes de résultat : le dernier dealId connu d'une demande. */
export function mergeOutcomes(lines: Array<{ id: string; outcome?: JournalOutcome }>): Map<string, JournalOutcome> {
  const out = new Map<string, JournalOutcome>();
  for (const l of lines) if (l.outcome) out.set(l.id, { ...out.get(l.id), ...l.outcome, dealId: l.outcome.dealId ?? out.get(l.id)?.dealId });
  return out;
}

export function journalTouchpoints(entries: JournalEntry[], outcomes: Map<string, JournalOutcome>): Touchpoint[] {
  const out: Touchpoint[] = [];
  const seen = new Set<string>();
  for (const e of entries) {
    if (e.outcome || seen.has(e.id) || isEventLine(e)) continue;
    seen.add(e.id);
    const lead = (e.lead ?? {}) as Record<string, unknown>;
    const attach = e.kind === "alerte-logisvert";
    if (!attach && !DEMAND_KINDS.has(e.kind)) continue;
    const dealId = outcomes.get(e.id)?.dealId ?? (typeof lead.dealId === "number" ? lead.dealId : undefined);
    out.push({
      key: `j:${e.id}`,
      source: "journal",
      at: e.at,
      phone: phoneOf(lead.phone) ?? undefined,
      email: emailOf(lead.email) ?? undefined,
      firstName: cap(str(lead.firstName)?.split(/\s+/)[0]?.slice(0, 40)),
      lastName: str(lead.lastName)?.slice(0, 60),
      city: (str(lead.municipality) ?? str(lead.city))?.slice(0, 60),
      postalCode: str(lead.postalCode)?.toUpperCase().replace(/\s+/g, ""),
      address: str(lead.address)?.slice(0, 120),
      channel: attach ? undefined : channelOfEntry(e),
      dealId,
      ref: e.id,
      ...(attach ? { attachOnly: true } : {}),
    });
  }
  return out;
}

/** Version qui représente la soumission : la dernière envoyée, sinon la version courante. */
export const shownVersion = (q: Quote) => latestSent(q) ?? currentVersion(q);

export function quoteTouchpoints(quotes: Quote[]): Touchpoint[] {
  return quotes.map((q) => {
    const c = shownVersion(q).content;
    const site = c.site;
    return {
      key: `q:${q.id}`,
      source: "soumission" as const,
      at: q.createdAt,
      phone: phoneOf(c.client.phone) ?? undefined,
      email: emailOf(c.client.email) ?? undefined,
      firstName: str(c.client.firstName),
      lastName: str(c.client.lastName),
      city: (site && !site.sameAsBilling ? str(site.city) : undefined) ?? str(c.client.city),
      postalCode: str(c.client.postalCode)?.toUpperCase().replace(/\s+/g, ""),
      address: (site && !site.sameAsBilling ? str(site.address) : undefined) ?? str(c.client.address),
      dealId: q.pipedrive.dealId ?? undefined,
      ref: q.id,
    };
  });
}

export function jobTouchpoints(jobs: Job[]): Touchpoint[] {
  return jobs.map((j) => ({
    key: `job:${j.id}`,
    source: "job" as const,
    at: j.createdAt,
    phone: phoneOf(j.client.phone) ?? undefined,
    email: emailOf(j.client.email) ?? undefined,
    firstName: str(j.client.firstName),
    lastName: str(j.client.lastName),
    city: str(j.client.city) ?? j.geo?.city,
    postalCode: str(j.client.postalCode)?.toUpperCase().replace(/\s+/g, ""),
    address: str(j.client.address),
    ref: j.id,
  }));
}

export function relanceTouchpoints(messages: ScheduledMessage[]): Touchpoint[] {
  return messages.map((m) => ({
    key: `r:${m.id}`,
    source: "relance" as const,
    at: m.createdAt,
    email: emailOf(m.email) ?? undefined,
    firstName: str(m.firstName),
    dealId: m.source.type === "pipedrive" ? m.source.dealId : undefined,
    ref: m.id,
    attachOnly: true,
  }));
}

export function manualTouchpoints(contacts: ManualContact[]): Touchpoint[] {
  return contacts.map((m) => ({
    key: `m:${m.id}`,
    source: "manuel" as const,
    at: m.createdAt,
    phone: phoneOf(m.phone) ?? undefined,
    email: emailOf(m.email) ?? undefined,
    firstName: str(m.firstName),
    lastName: str(m.lastName),
    city: str(m.city),
    ref: m.id,
  }));
}
