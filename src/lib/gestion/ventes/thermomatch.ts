/* ==================================================================
   ThermoMatch → soumission en un clic (volet C), pur : les accès au
   catalogue sont passés en paramètre (service.ts les fournit ; les
   tests les simulent).

   D'où vient la machine choisie :
     - demande « thermomatch » (choix reçus par courriel) : les trois
       recommandations sont recalculées à partir du code de partage
       (mêmes réponses = mêmes résultats) et VÉRIFIÉES contre les
       libellés consignés au journal ; si le catalogue a changé depuis,
       rien n'est pré-rempli pour ce choix ;
     - demande « soumission » portant « Marque — <id du modèle> »
       (modèle choisi dans ThermoMatch) : le modèle, sans AHRI.

   La machine est ensuite recalculée par resolveMachine (catalogue et
   liste officielle LogisVert d'Hydro-Québec) : marque, modèle
   extérieur, jumelage AHRI, unité intérieure, capacités, efficacités
   et montant LogisVert OFFICIEL. L'estimation affichée par ThermoMatch
   n'est jamais reprise. Une donnée absente reste vide.
   ================================================================== */

import type { JournalEntry } from "@/lib/crm/lead-journal";
import type { MachineChoice } from "@/lib/soumissions/catalog";
import type { MachineInfo, QuoteContent } from "@/lib/soumissions/types";
import { THERMOMATCH_SELECTION_RE } from "../radar/radar";

export interface RecomputedChoice {
  modelId: string;
  brand: string;
  series: string;
  outdoorModel: string;
  ahri: string | null;
}

export interface ThermoMatchDeps {
  /** Recommandations recalculées à partir du code de partage (null : code illisible). */
  recompute: (code: string) => RecomputedChoice[] | null;
  /** Modèle du catalogue : slug et libellé (null : retiré du catalogue). */
  model: (modelId: string) => { slug: string; label: string } | null;
}

export interface ThermoMatchChoice {
  rank: number;
  label: string;
  slug: string | null;
  ahri: string | null;
  /** La recommandation recalculée ne correspond plus à celle envoyée au client. */
  changed: boolean;
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
const compact = (s: string) => s.replace(/\s+/g, "").toUpperCase();
/** « 1. Marque Série (MODÈLE) » → « MODÈLE ». */
const modelOfLabel = (label: string) => /\(([^()]+)\)\s*$/.exec(label)?.[1]?.trim() ?? null;
const cleanLabel = (label: string) => label.replace(/^\d+\.\s*/, "").slice(0, 160);

export function thermoMatchChoices(e: JournalEntry, deps: ThermoMatchDeps): ThermoMatchChoice[] {
  const lead = (e.lead ?? {}) as Record<string, unknown>;
  if (e.kind === "thermomatch") {
    const labels = (Array.isArray(lead.choices) ? lead.choices : []).filter((x): x is string => typeof x === "string").slice(0, 3);
    const code = str(lead.code);
    const rec = code ? deps.recompute(code) : null;
    const n = labels.length || Math.min(3, rec?.length ?? 0);
    return Array.from({ length: n }, (_, i) => {
      const r = rec?.[i];
      const sent = labels[i] ? modelOfLabel(labels[i]) : null;
      const label = labels[i] ? cleanLabel(labels[i]) : r ? `${r.brand} ${r.series} (${r.outdoorModel})`.trim() : `Choix ${i + 1}`;
      // Sans libellé consigné, rien ne prouve que le client a vu cette machine : aucun pré-remplissage.
      const same = Boolean(r && sent && compact(sent) === compact(r.outdoorModel));
      const m = same && r ? deps.model(r.modelId) : null;
      // Modèle retiré du catalogue : ni machine ni jumelage.
      return { rank: i + 1, label, slug: m?.slug ?? null, ahri: m && r?.ahri ? r.ahri : null, changed: Boolean(r && sent && !same) };
    });
  }
  const sel = str(lead.modeleSelectionne);
  if (e.kind === "soumission" && THERMOMATCH_SELECTION_RE.test(sel)) {
    const parts = sel.split(/\s+[—–-]\s+/);
    const m = deps.model(parts[parts.length - 1].trim());
    return [{ rank: 1, label: m?.label ?? parts[0].slice(0, 80), slug: m?.slug ?? null, ahri: null, changed: false }];
  }
  return [];
}

export type ResolveMachine = (choice: MachineChoice) => Promise<{ ok: true; machine: MachineInfo } | { ok: false; error: string }>;

export interface MachinePrefill {
  machine: MachineInfo | null;
  /** Ce que le propriétaire doit compléter lui-même. */
  notes: string[];
}

/** Machine complète recalculée depuis le catalogue et la liste officielle ; jumelage laissé vide s'il est inconnu ou retiré. */
export async function machineFromChoice(choice: ThermoMatchChoice, resolve: ResolveMachine): Promise<MachinePrefill> {
  if (!choice.slug) {
    return { machine: null, notes: [choice.changed ? "La recommandation ThermoMatch a changé depuis l’envoi au client : choisissez la machine à la main." : "Modèle introuvable dans le catalogue : choisissez la machine à la main."] };
  }
  const base: MachineChoice = { modelSlug: choice.slug, ahri: null, offList: false, offListIndoor: "", showCatalogWarranties: false, warrantyText: "", explanation: "" };
  if (choice.ahri) {
    const r = await resolve({ ...base, ahri: choice.ahri });
    if (r.ok) return { machine: r.machine, notes: [] };
  }
  const r = await resolve(base);
  if (!r.ok) return { machine: null, notes: [r.error] };
  return {
    machine: r.machine,
    notes: [choice.ahri ? `Le jumelage AHRI ${choice.ahri} n’est plus dans la liste officielle LogisVert pour ce modèle : choisissez le jumelage.` : "Jumelage AHRI non précisé : choisissez-le dans la liste officielle LogisVert."],
  };
}

/** Pose la machine dans le contenu initial du créateur de soumission. Rien d'autre n'est deviné. */
export function applyMachinePrefill(content: QuoteContent, machine: MachineInfo): QuoteContent {
  const lv = machine.pairing?.logisVertCents ?? 0;
  const indoor = machine.pairing?.indoorDescription.trim() ?? "";
  const units = content.placement.indoor;
  // Unité intérieure du jumelage officiel : seulement s'il n'y a qu'une unité prévue et un seul modèle dans la description.
  const single = indoor && units.length === 1 && !units[0].model && !/[+,;/]|\bet\b/i.test(indoor);
  return {
    ...content,
    machine,
    logisvert: { mode: lv > 0 ? "client" : "aucune" },
    placement: single ? { ...content.placement, indoor: [{ ...units[0], model: indoor.slice(0, 120) }] } : content.placement,
  };
}
