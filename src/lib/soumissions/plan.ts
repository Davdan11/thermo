/* ==================================================================
   Chantier D — plan d'installation construit à partir de la machine
   (pur : navigateur et serveur).

   Le jumelage officiel choisi donne les têtes intérieures :
     - jumelage simple : une tête, modèle intérieur et capacité
       nominale certifiée du jumelage ;
     - jumelage « tête + tête + … » (liste d'Hydro-Québec) : une tête
       par modèle, dans l'ordre ;
     - classe multizone (« Appareils sans conduits », « avec
       conduits », « Combinaison… ») : le nombre de têtes est choisi
       par le propriétaire, et chaque modèle parmi les têtes
       compatibles (celles des jumelages officiels de l'unité) ;
     - système central : un appareil central.
   Aucune capacité inventée : une tête de multizone sans capacité
   certifiée reste sans capacité.
   Noms clairs : « Unité extérieure », puis « Tête 1 · Salon »,
   « Tête 2 · Chambre »… Un ancien nom automatique (« Unité 1 ») ou
   illisible (une ou deux lettres, comme « R ») est remplacé.
   ================================================================== */

import { fold, indoorKind } from "./choices";
import { newIndoor } from "./defaults";
import type { IndoorPlacement, MachineInfo, PairingInfo } from "./types";

export const OUTDOOR_NAME = "Unité extérieure";

export type MultiClass = "sans-conduits" | "avec-conduits" | "combinaison";
export const CLASS_LABELS: Record<MultiClass, string> = {
  "sans-conduits": "Têtes sans conduits (murales, cassettes, consoles)",
  "avec-conduits": "Têtes avec conduits (gainables)",
  combinaison: "Combinaison de têtes avec et sans conduits",
};

const CLASS_OF: Record<string, MultiClass> = {
  "appareils sans conduits": "sans-conduits",
  "appareils avec conduits": "avec-conduits",
  "combinaison d'appareils avec ou sans conduits": "combinaison",
};

export type PairingShape =
  | { kind: "simple"; model: string }
  | { kind: "tetes"; heads: string[] }
  | { kind: "classe"; cls: MultiClass }
  | { kind: "centrale"; model: string };

/** Classe multizone d'une description d'Hydro-Québec, ou null. */
export function multiClassOf(description: string): MultiClass | null {
  return CLASS_OF[fold(description).replace(/[’`]/g, "'")] ?? null;
}

/** Forme d'un jumelage : ce que la description de l'unité intérieure dit des têtes. */
export function pairingShape(p: Pick<PairingInfo, "indoorDescription"> | null, systemType: string): PairingShape {
  const desc = (p?.indoorDescription ?? "").trim();
  const cls = multiClassOf(desc);
  if (cls) return { kind: "classe", cls };
  if (systemType === "central-ducted") return { kind: "centrale", model: desc };
  if (desc.includes("+")) {
    const heads = desc
      .split("+")
      .map((t) => t.trim())
      .filter((t) => t.length >= 4 && /\d/.test(t));
    if (heads.length >= 2) return { kind: "tetes", heads };
    if (heads.length === 1) return { kind: "simple", model: heads[0] };
  }
  return { kind: "simple", model: desc };
}

/** Unité extérieure multizone : une classe ou une liste de têtes parmi ses jumelages, ou « Multi » dans son nom. */
export function isMultiZone(machine: Pick<MachineInfo, "name" | "outdoorModel" | "systemType">, pairings: Array<Pick<PairingInfo, "indoorDescription">>): boolean {
  if (machine.systemType === "central-ducted") return false;
  if (pairings.some((p) => ["classe", "tetes"].includes(pairingShape(p, machine.systemType).kind))) return true;
  return /multi/i.test(machine.name) || /multi/i.test(machine.outdoorModel);
}

/** Nombre de zones inscrit dans le numéro du fabricant (2MXS…, MXZ-3C…, MULTI3-…), sinon null. */
export function zonesFromModel(outdoorModel: string): number | null {
  const m = /^(\d)MX/i.exec(outdoorModel) ?? /MXZ-?(\d)/i.exec(outdoorModel) ?? /MULTI-?(\d)/i.exec(outdoorModel);
  const n = m ? Number(m[1]) : NaN;
  return n >= 2 && n <= 8 ? n : null;
}

const normModel = (s: string) => s.toUpperCase().replace(/\*+$/g, "").replace(/[^A-Z0-9]/g, "");

/** Têtes compatibles : modèles intérieurs cités dans les jumelages officiels de l'unité (sans doublon, sans « * »). */
export function compatibleHeads(pairings: Array<Pick<PairingInfo, "indoorDescription">>, systemType: string): string[] {
  const seen = new Map<string, string>();
  for (const p of pairings) {
    const s = pairingShape(p, systemType);
    const list = s.kind === "tetes" ? s.heads : s.kind === "simple" && s.model ? [s.model] : [];
    for (const h of list) {
      const shown = h.replace(/\*+$/g, "");
      if (!seen.has(normModel(h))) seen.set(normModel(h), shown);
    }
  }
  return [...seen.values()];
}

/** Classe des têtes choisies : toutes avec conduits, aucune, ou un mélange. */
export function classForHeads(types: string[]): MultiClass {
  const ducted = types.map((t) => ["gainable", "centrale"].includes(indoorKind(t)));
  if (ducted.length && ducted.every(Boolean)) return "avec-conduits";
  if (ducted.some(Boolean)) return "combinaison";
  return "sans-conduits";
}

/**
 * Jumelage officiel des têtes choisies : la liste exacte de têtes s'il y en a une (dans n'importe quel ordre), sinon la
 * classe qui correspond à leurs types. null si aucun jumelage officiel ne correspond.
 */
export function pairingForHeads(pairings: PairingInfo[], heads: Array<Pick<IndoorPlacement, "model" | "type">>, systemType: string): PairingInfo | null {
  const want = heads.map((h) => normModel(h.model)).sort();
  if (want.length && want.every(Boolean)) {
    const exact = pairings.find((p) => {
      const s = pairingShape(p, systemType);
      const got = s.kind === "tetes" ? s.heads.map(normModel).sort() : s.kind === "simple" ? [normModel(s.model)] : null;
      return got !== null && got.length === want.length && got.every((g, i) => g === want[i]);
    });
    if (exact) return exact;
  }
  const cls = classForHeads(heads.map((h) => h.type));
  return pairings.find((p) => multiClassOf(p.indoorDescription) === cls) ?? null;
}

/* ---------------- Noms des têtes ---------------- */

const AUTO_RE = /^(?:unit[ée]|t[êe]te)(?: int[ée]rieure)?\s*\d+(?:\s*·.*)?$/i;

/** Nom automatique (« Unité 1 », « Tête 2 · Salon »), vide ou illisible (une ou deux lettres) : recalculé. */
export function isAutoLabel(label: string | null | undefined): boolean {
  const l = (label ?? "").trim();
  return l.length < 3 || AUTO_RE.test(l);
}

export function headLabel(index: number, room: string): string {
  const r = room.trim();
  return `Tête ${index + 1}${r ? ` · ${r}` : ""}`;
}

/** Noms automatiques remis à jour (numéro et pièce) ; un nom écrit par le propriétaire est gardé. */
export function relabel(indoor: IndoorPlacement[]): IndoorPlacement[] {
  return indoor.map((u, i) => (isAutoLabel(u.label) ? { ...u, label: headLabel(i, u.room) } : u));
}

/** Nom montré d'une tête (documents anciens compris). */
export function headName(u: Pick<IndoorPlacement, "label" | "room">, index: number): string {
  return isAutoLabel(u.label) ? headLabel(index, u.room) : u.label.trim();
}

/* ---------------- Plan à partir de la machine ---------------- */

const CENTRAL_TYPE = "Appareil central (fournaise ou serpentin)";

/** Type de tête déduit de la machine et du jumelage ; `fallback` : dernier choix du propriétaire (mémoire). */
export function headType(machine: Pick<MachineInfo, "systemType">, shape: PairingShape, fallback = ""): string {
  if (shape.kind === "centrale") return CENTRAL_TYPE;
  if (shape.kind === "classe" && shape.cls === "avec-conduits") return "Gainable (conduits)";
  if (shape.kind === "simple" && machine.systemType === "wall-single") return "Murale";
  return fallback && indoorKind(fallback) !== "centrale" ? fallback : "Murale";
}

export interface PlanOptions {
  /** Longueur incluse par tête (forfait, réglages ou installation standard). */
  included: number | null;
  /** Valeurs des nouvelles têtes : derniers choix du propriétaire (mémoire), jamais la pièce. */
  headDefaults?: Partial<IndoorPlacement>;
  /** Classe multizone : nombre de têtes choisi. */
  heads?: number;
}

/**
 * Têtes intérieures du plan pour la machine et son jumelage. Les têtes existantes gardent leur emplacement (pièce, mur,
 * hauteur, longueurs…) ; seuls le type, le modèle et la capacité viennent du jumelage. Les têtes en trop sont retirées.
 */
export function planFromMachine(indoor: IndoorPlacement[], machine: MachineInfo, opts: PlanOptions): IndoorPlacement[] {
  const shape: PairingShape = machine.offList ? { kind: "simple", model: machine.offListIndoor.trim() } : pairingShape(machine.pairing, machine.systemType);
  const multiOffList = machine.offList && /\+/.test(machine.offListIndoor);
  const n =
    shape.kind === "tetes"
      ? shape.heads.length
      : shape.kind === "classe" || multiOffList
        ? Math.max(1, Math.min(8, opts.heads ?? (indoor.length > 1 ? indoor.length : 2)))
        : 1;
  const certified = machine.pairing?.nominalBtu ?? null;
  const out: IndoorPlacement[] = [];
  for (let i = 0; i < n; i++) {
    const prev = indoor[i];
    const base: IndoorPlacement = prev ? { ...prev } : { ...newIndoor(i + 1, opts.included), ...(opts.headDefaults ?? {}), room: "" };
    if (!prev) base.lineIncluded = base.lineIncluded ?? opts.included;
    const fallbackType = prev?.type || opts.headDefaults?.type || "";
    let model = base.model;
    let capacity = base.capacityBtu;
    if (shape.kind === "simple" || shape.kind === "centrale") {
      model = shape.model.slice(0, 80);
      capacity = machine.offList ? null : certified;
    } else if (shape.kind === "tetes") {
      const next = shape.heads[i].replace(/\*+$/g, "").slice(0, 80);
      if (normModel(next) !== normModel(model)) capacity = null;
      model = next;
    } else if (prev && prev.model && !machine.offList) {
      model = prev.model;
    }
    const type = shape.kind === "classe" && prev?.type ? prev.type : headType(machine, shape, fallbackType);
    out.push({ ...base, type, model, capacityBtu: capacity });
  }
  return relabel(out);
}
