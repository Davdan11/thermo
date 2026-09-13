/* ==================================================================
   Conformité C2 — textes en vigueur, lus au moment de l'appel (jamais
   figés au build) : trousse.json + plateforme.json + réglages.
   Serveur seulement (lecture de fichiers). Toute erreur de lecture
   rend le texte « pas prêt » : le site garde son comportement actuel.
   ================================================================== */

import { readPlatformIdentity } from "@/lib/plateforme/identite";
import { readTrousse, type TrousseData } from "@/lib/plateforme/trousse";
import { SITE_URL } from "@/lib/seo";
import { readConformite } from "./reglages";
import { registerBundle } from "./store";
import {
  buildConsentBundle,
  buildPolicy,
  buildReferralRules,
  commercialFooter,
  inboundCallNotice,
  outboundCallNotice,
  type ConsentBundleResult,
  type FillContext,
  type FilledDoc,
  type FilledText,
  type ReferralTerms,
} from "./textes";

export async function consentContext(): Promise<{ trousse: TrousseData; ctx: FillContext }> {
  const [trousse, identity] = await Promise.all([readTrousse(), readPlatformIdentity()]);
  return { trousse, ctx: { identity, siteUrl: SITE_URL.replace(/\/$/, "") } };
}

/** Versions déjà gardées par ce processus : le magasin n'est verrouillé qu'à la première apparition d'une version. */
const registered = new Set<string>();

/** Textes des formulaires. `register` : garde la version (texte exact) pour la preuve. */
export async function currentConsentBundle(opts: { register?: boolean } = {}): Promise<ConsentBundleResult> {
  try {
    const { trousse, ctx } = await consentContext();
    const b = buildConsentBundle(trousse, ctx);
    if (b.ready && opts.register && !registered.has(`${process.env.GESTION_DATA_DIR ?? ""}|${b.version}`)) {
      await registerBundle(b);
      registered.add(`${process.env.GESTION_DATA_DIR ?? ""}|${b.version}`);
    }
    return b;
  } catch (e) {
    console.error("[consentements] textes illisibles :", (e as Error)?.message ?? e);
    return { ready: false, missing: ["Lecture de la trousse ou de l’identité impossible"] };
  }
}

/** Type de messages du pied commercial (5.5), selon le consentement utilisé. */
export const MESSAGE_TYPES = {
  rappels: "des rappels au sujet de votre demande",
  entretien: "des conseils d’entretien et des offres de service",
  reference: "des offres et des promotions",
} as const;
export type CommercialKind = keyof typeof MESSAGE_TYPES;

/** Pied de message commercial rempli, ou null (trousse ou identité incomplète : pied actuel gardé). */
export async function commercialFooterFor(kind: CommercialKind, unsubscribeUrl: string): Promise<FilledText | null> {
  try {
    const { trousse, ctx } = await consentContext();
    return commercialFooter(trousse, ctx, { typeMessages: MESSAGE_TYPES[kind], unsubscribeUrl });
  } catch {
    return null;
  }
}

export async function currentInboundNotice(): Promise<{ text: FilledText; trousseVersion: string } | null> {
  try {
    const { trousse, ctx } = await consentContext();
    const r = inboundCallNotice(trousse, ctx);
    return r.ok ? { text: r.text, trousseVersion: trousse.version } : null;
  } catch {
    return null;
  }
}

export async function currentOutboundNotice(callerName: string): Promise<{ text: FilledText; trousseVersion: string } | null> {
  try {
    const { trousse, ctx } = await consentContext();
    const r = outboundCallNotice(trousse, ctx, callerName);
    return r.ok ? { text: r.text, trousseVersion: trousse.version } : null;
  } catch {
    return null;
  }
}

export async function currentPolicy(): Promise<{ doc: FilledDoc; effectiveDate: string } | null> {
  try {
    const [{ trousse, ctx }, settings] = await Promise.all([consentContext(), readConformite()]);
    if (!settings.politiqueEnVigueurLe) return null;
    const r = buildPolicy(trousse, ctx, { effectiveDate: settings.politiqueEnVigueurLe });
    return "ok" in r ? { doc: r.doc, effectiveDate: settings.politiqueEnVigueurLe } : null;
  } catch (e) {
    console.error("[consentements] politique illisible :", (e as Error)?.message ?? e);
    return null;
  }
}

export async function currentReferralRules(terms: ReferralTerms): Promise<FilledDoc | null> {
  try {
    const { trousse, ctx } = await consentContext();
    const r = buildReferralRules(trousse, ctx, terms);
    return "ok" in r ? r.doc : null;
  } catch {
    return null;
  }
}
