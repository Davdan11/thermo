/* ==================================================================
   Chantier R — POINT D'EXTENSION pour le créateur de soumissions.

   Le créateur de soumissions n'est PAS modifié par ce chantier. À la
   fusion, pour afficher « en stock » à côté du modèle choisi :

     import { stockForModel } from "@/lib/gestion/inventaire/extension";
     const s = await stockForModel(machine.modelSlug);   // côté serveur
     // s === null : modèle non suivi en inventaire (ne rien afficher)
     // s.inStock   : chaque unité (extérieure, intérieure) liée au
     //               modèle a au moins `perJob` unités disponibles
     //               (en main − réservées)

   Lecture seule, sans accès réseau ; à appeler depuis une page ou
   une Server Action déjà protégée par requireAdmin().
   ================================================================== */

import { loadDossiers } from "./service";
import { stockView } from "./reservations";
import { readInventaire } from "./store";
import type { ItemKind } from "./types";

export interface ModelStock {
  modelSlug: string;
  inStock: boolean;
  items: Array<{ id: string; label: string; kind: ItemKind; onHand: number; reserved: number; available: number; perJob: number; location: string }>;
}

export async function stockForModels(slugs: string[]): Promise<Map<string, ModelStock>> {
  const want = new Set(slugs.filter(Boolean));
  const out = new Map<string, ModelStock>();
  if (!want.size) return out;
  const [data, dossiers] = await Promise.all([readInventaire(), loadDossiers()]);
  for (const s of stockView(data, dossiers)) {
    const slug = s.item.modelSlug;
    if (!slug || !want.has(slug) || s.item.archived) continue;
    const m = out.get(slug) ?? { modelSlug: slug, inStock: true, items: [] };
    m.items.push({ id: s.item.id, label: s.item.label, kind: s.item.kind, onHand: s.item.quantity, reserved: s.reserved, available: s.available, perJob: s.item.perJob, location: s.item.location });
    out.set(slug, m);
  }
  for (const m of out.values()) {
    const units = m.items.filter((i) => i.kind !== "accessoire");
    m.inStock = units.length > 0 && units.every((i) => i.available >= i.perJob);
  }
  return out;
}

export async function stockForModel(modelSlug: string): Promise<ModelStock | null> {
  return (await stockForModels([modelSlug])).get(modelSlug) ?? null;
}
