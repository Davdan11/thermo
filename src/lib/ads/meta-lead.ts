/* ==================================================================
   Événement « Lead » de l'API Conversions de Meta pour une soumission
   reçue (/api/leads). Léger : appelé sans attendre après le journal.

   Rien sans production ET clés (aucune lecture de fichier, aucun
   réseau) ; rien sans consentement accordé ; même event_id que le
   pixel du navigateur (dédoublonnage par Meta) ; jamais deux fois.
   ================================================================== */

import type { JournalEntry } from "@/lib/crm/lead-journal";
import { buildMetaEvent, metaActive, sendMetaEvents, type FetchLike, type MetaSendResult } from "./meta-capi";
import { readPublicite, recordMetaSends } from "./store";

export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thermopompesavendre.ca").replace(/\/$/, "");

export type MetaLeadOutcome = "inactif" | "sans-consentement" | "deja-envoye" | MetaSendResult["status"];

export async function sendMetaLead(entry: JournalEntry, ctx: { userAgent?: string | null; env?: NodeJS.ProcessEnv; fetchImpl?: FetchLike } = {}): Promise<MetaLeadOutcome> {
  const env = ctx.env ?? process.env;
  if (!metaActive(env)) return "inactif";
  const ads = entry.attribution?.ads;
  if (!ads || ads.consent.choice !== "granted" || !ads.eventId) return "sans-consentement";
  if ((await readPublicite()).metaSent[ads.eventId]?.ok) return "deja-envoye";
  const lead = (entry.lead ?? {}) as Record<string, unknown>;
  const event = buildMetaEvent({
    name: "Lead",
    eventId: ads.eventId,
    time: new Date(entry.at),
    sourceUrl: `${SITE_ORIGIN}/soumission`,
    userAgent: ctx.userAgent,
    emails: [typeof lead.email === "string" ? lead.email : null],
    phones: [typeof lead.phone === "string" ? lead.phone : null],
    fbc: ads.fbc,
    fbp: ads.fbp,
  });
  const r = await sendMetaEvents([event], { env, fetchImpl: ctx.fetchImpl });
  if (r.status !== "inactif") await recordMetaSends([[ads.eventId, { at: new Date().toISOString(), name: "Lead", ok: r.status === "envoye", detail: r.detail, ref: entry.id }]]);
  return r.status;
}
