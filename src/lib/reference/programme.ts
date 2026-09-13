/* ==================================================================
   Conformité C2 — programme de recommandation : état en vigueur
   (serveur). Quand la trousse et l'identité sont en vigueur (textes
   prêts), le programme suit les réglages structurés du volet B
   (montant, forme, plafond, date de lancement, délai d'annulation) et
   ses règles publiques (/programme-de-recommandation) ; sans montant,
   il n'est pas offert. Sinon, comportement actuel (texte libre).
   ================================================================== */

import { SITE_URL } from "@/lib/seo";
import type { AutomationSettings } from "@/lib/gestion/automatisations/types";
import { currentConsentBundle } from "@/lib/consentements/serveur";
import { rewardText } from "@/lib/consentements/textes";
import { programState } from "./regles";

export const RULES_PATH = "/programme-de-recommandation";

export interface ReferralOffer {
  /** Trousse et identité en vigueur : règles de la section 7 appliquées. */
  c2: boolean;
  offered: boolean;
  missing: string[];
  /** Phrase ajoutée au message de référence (null : rien). */
  reward: string | null;
  rulesUrl: string;
}

export async function referralOffer(settings: AutomationSettings, now = new Date(), base = SITE_URL): Promise<ReferralOffer> {
  const rulesUrl = `${base.replace(/\/$/, "")}${RULES_PATH}`;
  const ready = (await currentConsentBundle().catch(() => ({ ready: false as const }))).ready;
  if (!ready) return { c2: false, offered: true, missing: [], reward: settings.referralReward.trim() || null, rulesUrl };
  const p = settings.referralProgram;
  const s = programState(p, now);
  const amount = p ? rewardText({ rewardCents: p.rewardCents, form: p.form, annualCap: p.annualCap, launchDate: p.launchDate }) : null;
  return {
    c2: true,
    offered: s.offered,
    missing: s.missing,
    reward: s.offered && amount ? `Récompense fixe de ${amount} quand l’installation de la personne recommandée est terminée et payée. Règles : ${rulesUrl}` : null,
    rulesUrl,
  };
}

/** Lien de désabonnement en un clic des messages après l'installation (ouvrir le lien suffit). */
export const oneClickPageUrl = (links: { base: string; token: string }) => `${links.base.replace(/\/$/, "")}/suivi/${encodeURIComponent(links.token)}/desabonnement`;
