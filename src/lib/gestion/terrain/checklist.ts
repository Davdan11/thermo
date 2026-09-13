/* ==================================================================
   Conformité C3 — liste de contrôle du chantier alignée sur
   l'annexe C de l'entente maître (fonctions pures, sans lecture de
   fichier : utilisables dans le téléphone).

   Les points viennent des DONNÉES (annexe C de la version en vigueur,
   jamais du code). Chaque point doit être « fait » : ils décrivent
   des étapes toujours applicables. Les photos, les numéros de série
   et la signature du client restent obligatoires à part (rules.ts).

   Rétrocompatibilité : un chantier dont un point de l'ancienne liste
   est déjà répondu garde l'ancienne liste jusqu'à sa fermeture.
   ================================================================== */

import { CHECKLIST, type ChecklistSpec, type FieldRecord } from "./types";

export const LEGACY_SPEC: ChecklistSpec = { kind: "ancienne", items: CHECKLIST.map((c) => ({ id: c.id, label: c.label, naAllowed: c.naAllowed })) };

const LEGACY_IDS = new Set<string>(CHECKLIST.map((c) => c.id));

export function annexChecklistSpec(items: string[], source: string): ChecklistSpec | null {
  const clean = items.map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean);
  if (!clean.length) return null;
  return { kind: "annexe-c", source, items: clean.map((label, i) => ({ id: `c${i + 1}`, label, naAllowed: false })) };
}

/** Liste du dossier : figée ; sinon l'ancienne si elle est commencée (ou le dossier fermé) ; sinon l'annexe C en vigueur. */
export function checklistSpecOf(r: Pick<FieldRecord, "checklistSpec" | "checklist" | "closedAt"> | undefined, annex: ChecklistSpec | null): ChecklistSpec {
  if (r?.checklistSpec?.items.length) return r.checklistSpec;
  if (r && (r.closedAt || Object.keys(r.checklist).some((k) => LEGACY_IDS.has(k)))) return LEGACY_SPEC;
  return annex ?? LEGACY_SPEC;
}

/** Libellé court d'un point (messages « il manque… ») : ancienne liste telle quelle, annexe C numérotée. */
export function checklistItemLabel(spec: ChecklistSpec, id: string): string {
  const i = spec.items.findIndex((c) => c.id === id);
  if (i < 0) return id;
  const label = spec.items[i].label;
  if (spec.kind === "ancienne") return label.toLowerCase();
  return `point ${i + 1} (${label.length > 70 ? `${label.slice(0, 68).trimEnd()}…` : label})`;
}
