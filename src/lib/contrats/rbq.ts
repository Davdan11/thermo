/* ==================================================================
   Conformité C1 — sous-catégories RBQ exigées par la portée du projet.

   Table réglable dans /gestion/reglages/rbq : travaux (réfrigération,
   électricité, conduits…) et types de système → sous-catégories dont
   le partenaire doit détenir AU MOINS UNE. Les suggestions de départ
   sont « à confirmer » et DÉSACTIVÉES : rien ne bloque tant que le
   propriétaire ne les active pas (validation de l'avocat ou de la RBQ).

   Sous-catégories connues du partenaire : celles du fichier des
   licences actives (chantier R, verdict « active » seulement) et
   celles saisies dans sa fiche. Fonctions pures.
   ================================================================== */

import { subcategoryCode } from "@/lib/gestion/reseau/rbq/csv";
import type { RbqVerification } from "@/lib/gestion/reseau/rbq/types";
import type { QuoteContent } from "@/lib/soumissions/types";
import { RULE_ID_RE, WORK_KINDS, WORK_LABELS, type PartnerRbqEntry, type RbqRule, type WorkKind } from "./types";

/** Types de système avec conduits (catalogue : src/lib/data/types/enums.ts). */
export const DUCTED_TYPES: readonly string[] = ["central-ducted", "hybrid"];

export const CODE_RE = /^\d{1,2}(?:\.\d{1,2}){0,2}$/;

/** « 15.10, 15.9 ; 16 » → ["15.10", "15.9", "16"] (codes valides, sans doublon). */
export function cleanCodes(input: string | readonly string[]): string[] {
  const parts = typeof input === "string" ? input.split(/[\s,;/]+/) : [...input];
  return [...new Set(parts.map((p) => String(p).trim().replace(/,/g, ".")).filter((p) => CODE_RE.test(p)))].slice(0, 20);
}

const rule = (id: string, work: WorkKind, label: string, systemTypes: string[], anyOf: string[], note: string): RbqRule => ({
  id,
  work,
  label,
  systemTypes,
  anyOf,
  active: false,
  status: "a-confirmer",
  note,
  updatedAt: null,
  updatedBy: null,
});

/** Règles de départ : suggestions à faire confirmer, toutes désactivées. */
export function defaultRbqRules(): RbqRule[] {
  return [
    rule("rg_refrigeration", "refrigeration", "Thermopompe : réfrigération et climatisation", [], ["15.10", "15.9"], "Suggestion à confirmer : la sous-catégorie exacte dépend de la puissance et du frigorigène du système."),
    rule("rg_electricite", "electricite", "Travaux électriques inclus au prix", [], ["16"], "Suggestion à confirmer : raccordement fait par l’entrepreneur (sinon, par un électricien engagé à part)."),
    rule("rg_conduits", "conduits", "Système central : conduits", [...DUCTED_TYPES], [], "À préciser avec l’avocat ou la RBQ avant d’activer."),
    rule("rg_air_pulse", "air-pulse", "Système central : chauffage à air pulsé", [...DUCTED_TYPES], [], "À préciser avec l’avocat ou la RBQ avant d’activer."),
  ];
}

export function normalizeRules(v: unknown): RbqRule[] {
  if (!Array.isArray(v)) return defaultRbqRules();
  const out: RbqRule[] = [];
  for (const raw of v) {
    if (!raw || typeof raw !== "object") continue;
    const r = raw as Partial<RbqRule>;
    if (typeof r.id !== "string" || !RULE_ID_RE.test(r.id) || !(WORK_KINDS as readonly string[]).includes(r.work as string)) continue;
    out.push({
      id: r.id,
      work: r.work as WorkKind,
      label: typeof r.label === "string" && r.label.trim() ? r.label.trim().slice(0, 120) : WORK_LABELS[r.work as WorkKind],
      systemTypes: Array.isArray(r.systemTypes) ? r.systemTypes.filter((s): s is string => typeof s === "string").slice(0, 12) : [],
      anyOf: cleanCodes(Array.isArray(r.anyOf) ? r.anyOf : []),
      active: r.active === true,
      status: r.status === "confirmee" ? "confirmee" : "a-confirmer",
      note: typeof r.note === "string" ? r.note.slice(0, 400) : "",
      updatedAt: typeof r.updatedAt === "string" ? r.updatedAt : null,
      updatedBy: typeof r.updatedBy === "string" ? r.updatedBy : null,
    });
  }
  return out;
}

export interface ProjectWorks {
  works: WorkKind[];
  systemType: string | null;
  reasons: Partial<Record<WorkKind, string>>;
}

const lower = (s: string | null | undefined) => (s ?? "").toLowerCase();

/** Travaux que la portée du projet comporte (d'après la machine et le plan d'installation). */
export function worksOf(content: Pick<QuoteContent, "machine" | "placement">): ProjectWorks {
  const reasons: Partial<Record<WorkKind, string>> = {};
  const m = content.machine;
  const systemType = m?.systemType ?? null;
  if (m) reasons.refrigeration = `Thermopompe ${[m.brand, m.name].filter(Boolean).join(" ")}${m.refrigerant ? ` (${m.refrigerant})` : ""}`;
  if (content.placement.electrical.electrician === "requis-inclus") reasons.electricite = "Maître électricien inclus au prix";
  const ductedIndoor = content.placement.indoor.some((u) => /gainable|central/.test(lower(u.type)));
  if ((systemType && DUCTED_TYPES.includes(systemType)) || ductedIndoor) {
    reasons.conduits = "Système avec conduits";
    reasons["air-pulse"] = "Système central à air pulsé";
  }
  return { works: WORK_KINDS.filter((w) => reasons[w]), systemType, reasons };
}

/** Règles actives qui s'appliquent à ces travaux. */
export function rulesFor(rules: readonly RbqRule[], w: ProjectWorks): RbqRule[] {
  return rules.filter((r) => r.active && w.works.includes(r.work) && (!r.systemTypes.length || (w.systemType !== null && r.systemTypes.includes(w.systemType))));
}

export interface KnownSubcategories {
  codes: string[];
  fromRegistry: string[];
  fromFiche: string[];
}

/** Sous-catégories connues : registre (licence active seulement) et fiche du partenaire. */
export function knownSubcategories(verification: RbqVerification | null | undefined, manual: PartnerRbqEntry | null | undefined): KnownSubcategories {
  const fromRegistry = verification && verification.outcome === "active" ? cleanCodes(verification.subcategories.map((s) => subcategoryCode(s) ?? "").filter(Boolean)) : [];
  const fromFiche = cleanCodes(manual?.codes ?? []);
  return { codes: [...new Set([...fromRegistry, ...fromFiche])], fromRegistry, fromFiche };
}

/** Ce qui manque au partenaire pour la portée du projet (libellés bloquants). */
export function subcategoryProblems(rules: readonly RbqRule[], w: ProjectWorks, known: KnownSubcategories): string[] {
  const out: string[] = [];
  for (const r of rulesFor(rules, w)) {
    if (!r.anyOf.length) continue;
    const need = r.anyOf.join(" ou ");
    if (!known.codes.length) out.push(`Sous-catégories RBQ du partenaire inconnues : saisissez-les dans sa fiche (${r.label} : ${need})`);
    else if (!r.anyOf.some((c) => known.codes.includes(c))) out.push(`Sous-catégorie RBQ manquante (${r.label}) : ${need} requise, le partenaire détient ${known.codes.join(", ")}`);
  }
  return [...new Set(out)];
}

/** Règles actives sans sous-catégorie : à compléter (avertissement dans /gestion). */
export function incompleteRules(rules: readonly RbqRule[]): RbqRule[] {
  return rules.filter((r) => r.active && !r.anyOf.length);
}
