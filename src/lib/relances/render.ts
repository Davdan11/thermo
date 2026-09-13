/* ==================================================================
   Message de la file → courriel prêt à partir, avec les chiffres du
   catalogue et de la liste LogisVert en place AU MOMENT DE L'ENVOI
   (un montant qui a changé depuis la demande est donc à jour).

   Charge le registre et la liste Hydro-Québec (35 Mo) : serveur et
   scripts seulement, jamais dans un composant client.
   ================================================================== */
import { registry } from "@/lib/data/registry";
import { getSeoModel } from "@/lib/seo/programmatic";
import { amountsForModel, currentListDate, resolveTarget } from "@/lib/alerts/logisvert-alerts-data";
import { SITE_URL } from "@/lib/crm/templates/layout";
import { avisEmail, choixEmail, logisVertEmail, type RelanceModel, type RenderedRelance } from "@/lib/crm/templates/relances-email";
import type { ScheduledMessage } from "./core";

/** Modèles recommandés encore publiés, avec leurs chiffres d'aujourd'hui. Les slugs disparus du catalogue sont ignorés. */
export function resolveRelanceModels(slugs: readonly string[]): RelanceModel[] {
  const out: RelanceModel[] = [];
  for (const slug of slugs.slice(0, 3)) {
    const m = registry.modelBySlug.get(slug);
    if (!m) continue;
    const resolved = resolveTarget({ kind: "model", modelId: m.id });
    if (!resolved) continue;
    const seo = getSeoModel(slug);
    out.push({
      label: resolved.label,
      url: `${SITE_URL}${resolved.path}`,
      h5Btu: seo?.h5Btu ?? null,
      hspf2: seo?.hspf2 ?? null,
      amounts: amountsForModel(m.id),
    });
  }
  return out;
}

/** null : plus rien à dire (aucun des modèles n'est encore au catalogue) → le message est annulé. */
export function renderRelance(m: ScheduledMessage, opts: { mailingAddress: string }): RenderedRelance | null {
  const common = { firstName: m.firstName, token: m.token, mailingAddress: opts.mailingAddress };
  switch (m.kind) {
    case "thermomatch-j2": {
      const models = resolveRelanceModels(m.payload.slugs ?? []);
      return models.length ? choixEmail({ ...common, models }) : null;
    }
    case "thermomatch-j7": {
      const models = resolveRelanceModels(m.payload.slugs ?? []);
      return models.length ? logisVertEmail({ ...common, models, listUpdatedAt: currentListDate() }) : null;
    }
    case "avis":
      return avisEmail(common);
  }
}
