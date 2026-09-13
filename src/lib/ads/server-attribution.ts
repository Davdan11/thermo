/* ==================================================================
   Côté serveur : attribution.ads d'un formulaire → journal des demandes.

   Validé avec zod. Rien n'est gardé sans un choix valide (version du
   texte en vigueur). Refus : seulement le choix daté. Accord : les
   identifiants de clic, s'ils ont moins de 90 jours, l'event_id et les
   utm du clic (nettoyés comme ceux de la session).
   Utilisé par les routes des formulaires à la place de
   attributionFromBody() : même attribution, plus attribution.ads.
   ================================================================== */

import { z } from "zod";
import { attributionFromBody, sanitizeUtmValue, UTM_KEYS, type Attribution, type UtmValues } from "@/lib/attribution/core";
import { AD_CONSENT_VERSION, CLICK_TTL_MS } from "./config";
import { CLICK_ID_RE, FBC_RE } from "./clicks";
import type { AdsAttribution } from "./types";

const isoDate = z.string().max(40).refine((v) => !Number.isNaN(Date.parse(v)), "Date invalide.");
const clickId = z.string().regex(CLICK_ID_RE);

const adsSchema = z.object({
  consent: z.object({ choice: z.enum(["granted", "denied"]), at: isoDate, version: z.string().max(20) }),
  eventId: z.string().regex(/^[A-Za-z0-9-]{8,64}$/).optional(),
  gclid: clickId.optional(),
  gbraid: clickId.optional(),
  wbraid: clickId.optional(),
  msclkid: clickId.optional(),
  fbc: z.string().regex(FBC_RE).optional(),
  fbp: z.string().regex(/^fb\.\d\.\d{10,16}\.\d{1,24}$/).optional(),
  clickAt: isoDate.optional(),
  utm: z.record(z.string(), z.unknown()).optional(),
});

/** Tolérance d'horloge du navigateur. */
const SKEW_MS = 10 * 60_000;

export function adsFromBody(body: unknown, now: Date = new Date()): AdsAttribution | undefined {
  const attribution = body && typeof body === "object" ? (body as Record<string, unknown>).attribution : undefined;
  const raw = attribution && typeof attribution === "object" ? (attribution as Record<string, unknown>).ads : undefined;
  if (raw === undefined) return undefined;
  const parsed = adsSchema.safeParse(raw);
  if (!parsed.success) return undefined;
  const a = parsed.data;
  const consentAt = Date.parse(a.consent.at);
  if (a.consent.version !== AD_CONSENT_VERSION || consentAt > now.getTime() + SKEW_MS) return undefined;
  const receivedAt = now.toISOString();
  const consent = { choice: a.consent.choice, at: new Date(consentAt).toISOString(), version: a.consent.version };
  if (consent.choice === "denied") return { consent, receivedAt };

  const out: AdsAttribution = { consent, receivedAt };
  if (a.eventId) out.eventId = a.eventId;
  if (a.fbp) out.fbp = a.fbp;
  const clickAt = a.clickAt ? Date.parse(a.clickAt) : NaN;
  const fresh = !Number.isNaN(clickAt) && clickAt <= now.getTime() + SKEW_MS && now.getTime() - clickAt <= CLICK_TTL_MS;
  if (fresh) {
    for (const k of ["gclid", "gbraid", "wbraid", "fbc", "msclkid"] as const) if (a[k]) out[k] = a[k];
    out.clickAt = new Date(Math.min(clickAt, now.getTime())).toISOString();
    if (a.utm) {
      const utm: UtmValues = {};
      for (const key of UTM_KEYS) {
        const v = sanitizeUtmValue(a.utm[key]);
        if (v) utm[key] = v;
      }
      if (Object.keys(utm).length) out.utm = utm;
    }
  }
  return out;
}

/** Attribution d'un formulaire (canal, page, référent, utm de la session) et, s'il y a lieu, la mesure publicitaire. */
export function attributionWithAds(body: unknown, now: Date = new Date()): Attribution {
  const base = attributionFromBody(body);
  const ads = adsFromBody(body, now);
  return ads ? { ...base, ads } : base;
}
