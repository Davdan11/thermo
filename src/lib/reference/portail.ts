/* ==================================================================
   Conformité C2 — programme de recommandation dans le portail « Mon
   projet » : état de la carte (règles de la trousse en vigueur,
   récompense tirée des réglages, déclaration du recommandant) et
   déclaration « 18 ans ou plus, résident du Canada ». Le jeton ne vaut
   que pour son projet.
   ================================================================== */

import { readAfterSale, readAutomations } from "@/lib/gestion/automatisations/store";
import { resolvePortalIn } from "@/lib/gestion/portail/access";
import { readGestion } from "@/lib/gestion/store";
import { referralOffer } from "./programme";
import { declareReferrer, readReferences } from "./store";

export interface ReferralCard {
  /** Règles de la trousse en vigueur. */
  c2: boolean;
  offered: boolean;
  declared: boolean;
  reward: string | null;
  rulesUrl: string;
}

export async function referralCardState(token: string): Promise<ReferralCard | null> {
  const [after, gestion, auto, refs] = await Promise.all([readAfterSale(), readGestion(), readAutomations(), readReferences()]);
  const access = resolvePortalIn(after, gestion, token);
  if (!access) return null;
  const offer = await referralOffer(auto.settings);
  return { c2: offer.c2, offered: offer.offered, declared: Boolean(refs.declarations[access.project.id]), reward: offer.reward, rulesUrl: offer.rulesUrl };
}

/** Déclaration du recommandant depuis son portail ; false si le jeton est invalide. */
export async function declareFromPortal(token: string, now = new Date()): Promise<boolean> {
  const [after, gestion] = await Promise.all([readAfterSale(), readGestion()]);
  const access = resolvePortalIn(after, gestion, token);
  if (!access) return false;
  return declareReferrer(access.project.id, now);
}
