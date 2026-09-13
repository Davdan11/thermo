/* ==================================================================
   Demande d'avis Google après une affaire gagnée dans Pipedrive.

   Appelé par le webhook /api/webhooks/pipedrive. Si l'affaire vient de
   passer à « gagnée », qu'elle est de ce site (le pipeline est partagé
   avec Bellechasse Énergie) et que GOOGLE_REVIEW_URL est défini, une
   demande d'avis est mise en file pour dans 5 jours. Jamais deux fois
   pour la même affaire ni pour la même adresse. Le robot quotidien
   (scripts/send-relances.ts) fait l'envoi.
   ================================================================== */
import { belongsToThisSite, resolvePerson, type WebhookDeal } from "@/lib/crm/stage-emails";
import { isWonTransition } from "./core";
import { googleReviewUrl } from "./config";
import { enqueueReviewRequest } from "./store";

export type ReviewRequestAction = "ignore" | "autre-site" | "sans-lien-avis" | "sans-courriel" | "doublon" | "desabonne" | "planifiee";

export interface ReviewRequestDeps {
  resolvePerson: (deal: WebhookDeal) => Promise<{ email: string; firstName: string } | null>;
  now?: () => Date;
}

export async function handleDealWon(
  current: WebhookDeal,
  /** v1 : l'affaire complète ; v2 : seulement les champs modifiés. */
  previous: Record<string, unknown> | null | undefined,
  deps: ReviewRequestDeps = { resolvePerson },
): Promise<{ action: ReviewRequestAction; dueAt?: string }> {
  if (!isWonTransition(current, previous)) return { action: "ignore" };
  if (!belongsToThisSite(current)) return { action: "autre-site" };
  if (!googleReviewUrl()) return { action: "sans-lien-avis" };
  const person = await deps.resolvePerson(current);
  if (!person?.email) return { action: "sans-courriel" };
  const r = await enqueueReviewRequest({ email: person.email, firstName: person.firstName || undefined, dealId: current.id }, deps.now?.() ?? new Date());
  if (r.status === "suppressed") return { action: "desabonne" };
  if (r.status === "doublon") return { action: "doublon" };
  return { action: "planifiee", dueAt: r.message.dueAt };
}
