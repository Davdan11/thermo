/* ==================================================================
   ThermoMatch — L'architecture d'abord

   Avant de choisir une machine, on décide comment la chaleur sera
   distribuée dans la maison : par les conduits existants (centrale,
   seule ou avec la fournaise en relève), par une tête murale, ou par
   plusieurs (une multizone, ou des murales indépendantes). Le moteur
   ne cherche ensuite que des appariements de cette classe, calibrés
   pour la bonne charge : toute la maison, ou la zone qu'ils chauffent.

   Règles (la première qui s'applique) :
   A1  conduits complets, ou probables (fournaise, conduits non précisés)
       → centrale ; biénergie avec la fournaise en relève.
   A2  conduits partiels → centrale à confirmer, la solution sans
       conduits en repli.
   L   ancien lien partagé : le type de thermopompe choisi par le client.
   A4  sans conduits → une tête par espace à chauffer (simple zone,
       multizone ou murales indépendantes).
   A5  panneau de 100 A sans combustible en relève → point à vérifier.

   Pur : aucune donnée chargée ici. Chaque phrase cite un chiffre du
   calcul ; ce qui reste incertain est dit « à confirmer ».
   ================================================================== */

import type { HomeType, PairingClass } from "./types";

export type { PairingClass } from "./types";
export type ArchitectureKind = "central" | "central-hybrid" | "single-zone" | "multi-zone" | "multi-single";
export type BackupKind = "fournaise" | "chaudiere" | "plinthes" | "inconnu";
export type ArchitectureConfidence = "ferme" | "a-confirmer";

export interface ZonePlanEntry {
  label: string;
  /** Charge estimée de la zone à −15 °C (BTU/h), arrondie à 500. */
  loadBtuH: number;
  /** Calibre indicatif de la tête (le plus petit calibre courant qui couvre la zone) ; null pour les conduits ou la relève. */
  headNominalBtu: number | null;
  /** Qui chauffe la zone : les conduits (centrale), une tête, ou le chauffage actuel (relève). */
  servedBy: "conduits" | "tete" | "releve";
}

export interface ArchitectureCheck {
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface ArchitectureDecision {
  kind: ArchitectureKind;
  /** Classe d'appariements que le moteur doit chercher. */
  pairingClass: PairingClass;
  heads: number;
  zonePlan: ZonePlanEntry[];
  /** Charge pour laquelle chaque machine est calibrée : toute la maison, la zone la plus chargée ou l'espace principal. */
  sizingLoadBtuH: number;
  /** Ce que couvre la charge de calibrage quand ce n'est pas toute la maison (« de l'espace principal »). */
  sizingLabel?: string;
  totalLoadBtuH: number;
  /** Niveaux chauffés : étages hors sol, plus le sous-sol s'il est chauffé par la thermopompe. */
  levels: number;
  backup: BackupKind;
  rule: "A1" | "A2" | "A4" | "L";
  confidence: ArchitectureConfidence;
  /** Type affiché sur chaque carte : « Centrale gainable », « Multizone, 3 têtes », « Murale × 3 ». */
  label: string;
  title: string;
  why: string[];
  ruledOut: { kind: ArchitectureKind; why: string }[];
  checks: ArchitectureCheck[];
  /** Température de calcul de la région ; null sans région reconnue (on s'en tient alors à −15 °C). */
  designTempC: number | null;
  /** Charge de la maison à la température de calcul. */
  designLoadBtuH: number | null;
  /** Relève à la température de calcul, en une phrase ou deux. */
  backupSummary: string;
  alternative?: { note: string; decision: ArchitectureDecision };
}

export interface ArchitectureInput {
  homeType: HomeType;
  /** Étages hors sol (sans le sous-sol). */
  floors: number;
  basement?: string;
  currentSystem?: string;
  ducts?: string;
  zonesWanted?: string;
  layout?: string;
  placements?: string[];
  electricalPanel?: string;
  /** Ancien lien partagé : type de thermopompe choisi par le client, avant la question des conduits. */
  heatPumpType?: string;
  /** Température de conception de la région (table des codes postaux) ; null ou absente sans région reconnue. */
  designTempC?: number | null;
  region?: string | null;
  /** Vrai s'il existe au moins un appariement multizone admissible qui couvre cette charge à −15 °C. */
  multiZoneFits?: (loadBtuH: number) => boolean;
}

export const GUIDE_PANNEAU_100A = "/guides/panneau-electrique-100-amperes-thermopompe";

/** Calibres courants d'une tête murale (BTU), du plus petit au plus grand. */
const HEAD_CALIBRES = [6000, 9000, 12000, 15000, 18000, 24000, 30000, 36000];
/** La charge du questionnaire est calculée à −15 °C, pour 21 °C à l'intérieur. */
const INDOOR_C = 21;
const LOAD_OUTDOOR_C = -15;

const round500 = (v: number) => Math.round(v / 500) * 500;
const fr = (n: number) => Math.round(n).toLocaleString("fr-CA");
const btu = (n: number) => `${fr(n)} BTU/h`;
const temp = (t: number) => `${t < 0 ? "−" : ""}${fr(Math.abs(t))} °C`;
const NOMBRES = ["zéro", "une", "deux", "trois", "quatre", "cinq"];
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const oneOf = <T extends string>(value: unknown, allowed: readonly T[]): T | undefined =>
  typeof value === "string" && (allowed as readonly string[]).includes(value) ? (value as T) : undefined;

/** Plus petit calibre courant de tête murale qui couvre la charge (indicatif). */
export function headCalibre(loadBtuH: number): number {
  return HEAD_CALIBRES.find((c) => c >= loadBtuH) ?? HEAD_CALIBRES[HEAD_CALIBRES.length - 1];
}

/** Charge de la maison à la température de calcul, extrapolée de la charge à −15 °C (pertes proportionnelles à l'écart). */
export function designLoadAt(loadBtuH: number, designTempC: number): number {
  return round500((loadBtuH * (INDOOR_C - designTempC)) / (INDOOR_C - LOAD_OUTDOOR_C));
}

export function installLabel(kind: ArchitectureKind, heads: number): string {
  if (kind === "central" || kind === "central-hybrid") return "Centrale gainable";
  if (kind === "multi-zone") return `Multizone, ${heads} têtes`;
  if (kind === "multi-single") return `Murale × ${heads}`;
  return "Murale";
}

/* ------------------------------------------------------------------
   Contexte : réponses nettoyées, une seule fois
   ------------------------------------------------------------------ */

interface Ctx {
  total: number;
  floors: number;
  basementHeated: boolean;
  levels: number;
  condo: boolean;
  currentSystem?: string;
  /** « fournaise au gaz », « fournaise au mazout », ou null sans fournaise. */
  furnace: string | null;
  backup: BackupKind;
  ducts?: "complets" | "partiels" | "aucun" | "ne-sais-pas";
  zonesWanted?: "principal" | "par-etage" | "pieces" | "ne-sais-pas";
  layout?: "ouvert" | "mixte" | "cloisonne";
  placements: string[];
  panel?: "100-moins" | "125-150" | "200-plus" | "ne-sais-pas";
  legacy?: "centrale" | "murale" | "multizone" | "ne-sais-pas";
  designTempC: number | null;
  region: string | null;
  multiZoneFits?: (loadBtuH: number) => boolean;
}

function contextOf(input: ArchitectureInput, total: number): Ctx {
  const floors = Math.min(4, Math.max(1, Math.round(Number(input.floors)) || 1));
  const condo = input.homeType === "condo";
  // La question du sous-sol n'est pas posée aux condos.
  const basementHeated = !condo && input.basement === "heated";
  const sys = input.currentSystem;
  const furnace = sys === "fournaise-gaz" ? "fournaise au gaz" : sys === "fournaise-mazout" ? "fournaise au mazout" : null;
  const ducts = oneOf(input.ducts, ["complets", "partiels", "aucun", "ne-sais-pas"] as const);
  const zonesWanted = oneOf(input.zonesWanted, ["principal", "par-etage", "pieces", "ne-sais-pas"] as const);
  return {
    total,
    floors,
    basementHeated,
    levels: floors + (basementHeated ? 1 : 0),
    condo,
    currentSystem: sys,
    furnace,
    backup: furnace ? "fournaise" : sys === "chaudiere" ? "chaudiere" : sys === "electrique" ? "plinthes" : "inconnu",
    ducts,
    zonesWanted,
    layout: oneOf(input.layout, ["ouvert", "mixte", "cloisonne"] as const),
    placements: Array.isArray(input.placements) ? input.placements.filter((p) => typeof p === "string") : [],
    panel: oneOf(input.electricalPanel, ["100-moins", "125-150", "200-plus", "ne-sais-pas"] as const),
    // Ancien lien : ni conduits ni espaces demandés, mais le type de thermopompe choisi à l'époque.
    legacy: ducts === undefined && zonesWanted === undefined ? oneOf(input.heatPumpType, ["centrale", "murale", "multizone", "ne-sais-pas"] as const) : undefined,
    designTempC: typeof input.designTempC === "number" && Number.isFinite(input.designTempC) ? input.designTempC : null,
    region: input.region ?? null,
    multiZoneFits: input.multiZoneFits,
  };
}

/* ------------------------------------------------------------------
   Morceaux de phrases
   ------------------------------------------------------------------ */

/** « sur vos 3 étages », « sur vos 2 étages et au sous-sol », « dans toute la maison ». */
function surNiveaux(c: Ctx): string {
  if (c.floors === 1 && !c.basementHeated) return c.condo ? "dans tout le logement" : "dans toute la maison";
  const etages = c.floors === 1 ? "au rez-de-chaussée" : `sur vos ${c.floors} étages`;
  return c.basementHeated ? `${etages} et au sous-sol` : etages;
}

/** « 3 étages », ou « 3 niveaux » quand le sous-sol chauffé en fait partie. */
function niveaux(c: Ctx): string {
  return c.basementHeated ? `${c.levels} niveaux` : `${c.levels} étage${c.levels > 1 ? "s" : ""}`;
}

/** Le chauffage actuel, complément du verbe (« restent sur vos plinthes »). */
function releveNom(c: Ctx): string {
  if (c.backup === "fournaise") return `votre ${c.furnace}`;
  if (c.backup === "chaudiere") return "votre chaudière";
  if (c.backup === "plinthes") return "vos plinthes";
  return "votre chauffage actuel";
}

function relevePhrase(c: Ctx): string {
  if (c.backup === "fournaise") return `Votre ${c.furnace} reste en relève : elle fournit ce que la thermopompe ne donne plus.`;
  if (c.backup === "chaudiere") return "Votre chaudière reste en relève : elle fournit ce que la thermopompe ne donne plus.";
  if (c.backup === "plinthes") return "Vos plinthes restent en relève : elles fournissent ce que la thermopompe ne donne plus.";
  return "Gardez un chauffage d'appoint (plinthes, serpentin électrique ou autre) : il fournit ce que la thermopompe ne donne plus.";
}

function introSansConduits(c: Ctx, alt: boolean): string {
  if (alt) return "Sans les conduits";
  if (c.ducts === "aucun") return "Pas de conduits d'air";
  if (c.currentSystem === "electrique") return "Chauffage aux plinthes, sans conduits d'air";
  if (c.currentSystem === "chaudiere") return "Chauffage à eau chaude, sans conduits d'air";
  if (c.condo) return "En condo, sans conduits d'air à réutiliser";
  return "Sans conduits d'air à réutiliser";
}

const centraleEcartee = (alt: boolean) =>
  alt ? "Si vos conduits ne portent pas assez d'air aux étages, les refaire coûterait plus cher que ces têtes murales." : "Pas de conduits : les construire multiplie le coût.";

function backupSummaryOf(c: Ctx): string {
  const suite = relevePhrase(c);
  if (c.designTempC == null) return `Région non reconnue : nous nous en tenons au calcul à −15 °C, point de mesure commun des capacités certifiées. ${suite}`;
  const ou = c.region ? ` à ${c.region}` : "";
  return `Les jours les plus froids${ou} (${temp(c.designTempC)}), ${c.condo ? "le logement" : "la maison"} demande environ ${btu(designLoadAt(c.total, c.designTempC))}, contre ${btu(c.total)} à −15 °C. ${suite}`;
}

/* ------------------------------------------------------------------
   Plan des zones
   ------------------------------------------------------------------ */

function floorLabels(n: number): string[] {
  if (n === 1) return ["Rez-de-chaussée"];
  if (n === 2) return ["Rez-de-chaussée", "Étage"];
  return ["Rez-de-chaussée", "2e niveau", "3e niveau", "4e niveau"].slice(0, n);
}

/**
 * Répartition indicative de la charge : le sous-sol chauffé reprend ce qu'il ajoute à la charge
 * (facteur 1,1 du calcul, soit charge × 0,1 / 1,1), les étages hors sol se partagent le reste à parts
 * égales ; une tête de plus partage l'étage le plus haut, celui des chambres. Arrondi à 500 BTU/h,
 * l'écart d'arrondi reporté sur la plus grande zone : la somme retombe sur la charge.
 */
function planZones(c: Ctx, heads: number): ZonePlanEntry[] {
  type Z = { label: string; raw: number; servedBy: ZonePlanEntry["servedBy"] };
  const basementRaw = c.basementHeated ? (c.total * 0.1) / 1.1 : 0;
  const perFloor = (c.total - basementRaw) / c.floors;
  const floors: Z[] = floorLabels(c.floors).map((label) => ({ label, raw: perFloor, servedBy: "tete" }));
  let zones: Z[] = [...(c.basementHeated ? [{ label: "Sous-sol", raw: basementRaw, servedBy: "tete" as const }] : []), ...floors];

  if (heads <= 1) {
    if (zones.length === 1) zones = [{ label: c.condo ? "Tout le logement" : "Toute la maison", raw: c.total, servedBy: "tete" }];
    else {
      // Une seule tête, à l'étage principal ; les autres niveaux restent sur le chauffage actuel.
      const rez = c.basementHeated ? 1 : 0;
      zones = zones.map((z, i) => (i === rez ? { ...z, label: "Rez-de-chaussée (espace principal)" } : { ...z, servedBy: "releve" }));
    }
  } else {
    while (zones.length > heads) {
      const [a, b, ...rest] = zones;
      zones = [{ label: `${a.label} et ${b.label.toLowerCase()}`, raw: a.raw + b.raw, servedBy: "tete" }, ...rest];
    }
    if (zones.length < heads) {
      const top = zones[zones.length - 1];
      const halves = c.floors === 1 ? [`${top.label} : aire de vie`, `${top.label} : chambres`] : [`${top.label} : chambres (1re tête)`, `${top.label} : chambres (2e tête)`];
      zones = [...zones.slice(0, -1), ...halves.map((label) => ({ label, raw: top.raw / 2, servedBy: "tete" as const }))];
    }
  }

  const loads = zones.map((z) => Math.max(500, round500(z.raw)));
  const diff = round500(c.total) - loads.reduce((s, v) => s + v, 0);
  let imax = 0;
  loads.forEach((v, i) => {
    if (v > loads[imax]) imax = i;
  });
  loads[imax] += diff;
  return zones.map((z, i) => ({ label: z.label, loadBtuH: loads[i], headNominalBtu: z.servedBy === "tete" ? headCalibre(loads[i]) : null, servedBy: z.servedBy }));
}

function headsFor(c: Ctx): number {
  switch (c.zonesWanted) {
    case "principal":
      return 1;
    case "par-etage":
      return c.levels;
    case "pieces":
      return Math.min(5, c.levels + 1);
    default:
      // « Conseillez-moi » : une tête par niveau, une de plus si les pièces sont fermées.
      return c.layout === "cloisonne" ? Math.min(5, c.levels + 1) : c.levels;
  }
}

/* ------------------------------------------------------------------
   A1 / A2 : centrale sur les conduits
   ------------------------------------------------------------------ */

type EtatConduits = "complets" | "probables" | "partiels";

function central(c: Ctx, etat: EtatConduits, rule: ArchitectureDecision["rule"]): ArchitectureDecision {
  const hybrid = c.backup === "fournaise";
  const kind: ArchitectureKind = hybrid ? "central-hybrid" : "central";
  const machine = `une seule machine chauffe et climatise toute la maison${hybrid ? ", et la fournaise prend le relais par grand froid" : ""}`;
  const why: string[] = [];
  if (etat === "partiels") {
    why.push(hybrid ? `Votre ${c.furnace} distribue sa chaleur par des conduits, que vous dites incomplets, petits ou bruyants.` : "Votre maison a des conduits d'air, que vous dites incomplets, petits ou bruyants.");
    why.push(`Une thermopompe centrale peut quand même s'y brancher si l'inspection confirme qu'ils portent assez d'air : ${machine}.`);
  } else if (hybrid) {
    const reseau = etat === "complets" ? `par des conduits ${surNiveaux(c)}` : `par des conduits, normalement ${surNiveaux(c)}`;
    why.push(`Votre ${c.furnace} distribue déjà sa chaleur ${reseau}. Une thermopompe centrale se branche sur ce réseau : ${machine}.`);
  } else if (etat === "complets") {
    why.push(`Votre maison a déjà des conduits d'air ${surNiveaux(c)}. Une thermopompe centrale se branche sur ce réseau : ${machine}.`);
  } else {
    why.push(`Vous avez choisi une thermopompe centrale : elle se branche sur les conduits d'air de la maison, et ${machine}.`);
  }
  why.push(`Calibre visé : la charge de toute la maison, ${btu(c.total)} à −15 °C${hybrid ? " ; la fournaise complète ce que la thermopompe ne fournit pas" : ""}.`);

  const partout = c.levels > 1 ? "chaque étage" : "chaque pièce";
  const ruledOut: ArchitectureDecision["ruledOut"] = [
    {
      kind: "multi-zone",
      why:
        etat === "partiels"
          ? "Tant que vos conduits portent assez d'air, une multizone ajouterait des têtes murales et des lignes de réfrigérant pour une chaleur que les conduits répartissent déjà ; c'est la solution de repli si l'inspection les écarte."
          : `Vos conduits desservent ${etat === "complets" ? "déjà" : "normalement"} ${partout} : une multizone ajouterait une tête murale et une ligne de réfrigérant par espace, pour une chaleur que les conduits répartissent déjà.`,
    },
    {
      kind: "single-zone",
      why:
        c.levels > 1
          ? `Une seule tête murale ne chauffe pas ${niveaux(c)} : sa chaleur reste dans l'espace où elle est posée.`
          : "Une seule tête murale chauffe l'espace où elle est posée ; vos conduits répartissent déjà la chaleur dans toute la maison.",
    },
  ];

  const checks: ArchitectureCheck[] = [];
  if (etat === "complets") checks.push({ text: `À la visite : l'installateur vérifie le débit d'air des conduits${hybrid ? " et pose le serpentin de la thermopompe sur la fournaise, qui reste en place" : " et l'emplacement de l'unité intérieure"}.` });
  if (etat === "probables") checks.push({ text: "À confirmer à la visite : état et dimension des conduits, surtout aux étages." });
  if (etat === "partiels") checks.push({ text: "À confirmer à la visite : dimension des conduits et des bouches aux étages ; une bouche ajoutée ou un conduit agrandi est parfois nécessaire." });
  if (hybrid && etat !== "complets") checks.push({ text: "La fournaise reste en place : le serpentin de la thermopompe se pose dessus, et l'installateur règle avec vous la température de bascule (biénergie)." });

  return {
    kind,
    pairingClass: "central",
    heads: 1,
    zonePlan: [{ label: "Toute la maison (conduits)", loadBtuH: round500(c.total), headNominalBtu: null, servedBy: "conduits" }],
    sizingLoadBtuH: c.total,
    totalLoadBtuH: c.total,
    levels: c.levels,
    backup: c.backup,
    rule,
    confidence: etat === "complets" ? "ferme" : "a-confirmer",
    label: installLabel(kind, 1),
    title: hybrid ? `Thermopompe centrale ajoutée à votre ${c.furnace}, qui reste en relève (biénergie)` : "Thermopompe centrale branchée sur vos conduits d'air",
    why,
    ruledOut,
    checks,
    designTempC: c.designTempC,
    designLoadBtuH: c.designTempC == null ? null : designLoadAt(c.total, c.designTempC),
    backupSummary: backupSummaryOf(c),
  };
}

/* ------------------------------------------------------------------
   A4 : têtes murales, sans conduits
   ------------------------------------------------------------------ */

function ductless(c: Ctx, opts: { rule: ArchitectureDecision["rule"]; heads?: number; forceMulti?: boolean; alt?: boolean }): ArchitectureDecision {
  const heads = Math.max(1, opts.heads ?? headsFor(c));
  const alt = !!opts.alt;
  const oneOutdoor = c.placements.includes("un-seul-exterieur");
  let kind: ArchitectureKind = "single-zone";
  let multiRefused = false;
  if (heads > 1) {
    const wantsMulti = !!opts.forceMulti || oneOutdoor || heads >= 4;
    const fits = c.multiZoneFits ? c.multiZoneFits(c.total) : true;
    kind = wantsMulti && fits ? "multi-zone" : "multi-single";
    multiRefused = wantsMulti && !fits;
  }
  const zonePlan = planZones(c, heads);
  const tetes = zonePlan.filter((z) => z.servedBy === "tete");
  const partial = kind === "single-zone" && c.levels > 1;
  const sizing = kind === "multi-zone" ? c.total : kind === "multi-single" ? Math.max(...tetes.map((z) => z.loadBtuH)) : tetes.reduce((s, z) => s + z.loadBtuH, 0);
  const intro = introSansConduits(c, alt);
  const why: string[] = [];
  const ruledOut: ArchitectureDecision["ruledOut"] = [];
  let title: string;

  if (kind === "single-zone") {
    if (partial) {
      title = "Une thermopompe murale pour l'espace principal";
      const autres = c.floors > 1 ? (c.basementHeated ? "les autres étages et le sous-sol restent" : "les autres étages restent") : "le sous-sol reste";
      why.push(`${intro} : une tête murale posée dans l'aire de vie chauffe et climatise le rez-de-chaussée.`);
      why.push(`Chauffe l'espace principal ; ${autres} sur ${releveNom(c)}.`);
      why.push(`Elle est donc calibrée pour la charge de cet étage, ${btu(sizing)} à −15 °C, et non pour toute la maison (${btu(c.total)}).`);
      ruledOut.push({ kind: "multi-zone", why: `Vous voulez chauffer l'espace principal : une multizone ajouterait des têtes ${c.floors > 1 ? "aux autres étages" : "au sous-sol"}, qui restent sur ${releveNom(c)}.` });
    } else {
      title = c.condo ? "Une thermopompe murale pour tout le logement" : "Une thermopompe murale pour toute la maison";
      why.push(`${intro} : une tête murale bien placée dans l'aire de vie chauffe et climatise ${c.condo ? "le logement" : "la maison"}, soit ${btu(c.total)} à −15 °C.`);
      ruledOut.push({ kind: "multi-zone", why: "Un seul espace à chauffer : une tête suffit ; plusieurs têtes se justifient quand des pièces fermées ont chacune besoin de la leur." });
    }
    ruledOut.push({ kind: "central", why: centraleEcartee(alt) });
  } else if (kind === "multi-zone") {
    title = `Multizone : une unité extérieure, ${heads} têtes intérieures`;
    why.push(`${intro} : chaque espace reçoit sa propre tête murale, et toutes sont reliées à une seule unité extérieure.`);
    if (oneOutdoor) why.push("Vous n'avez qu'un seul endroit possible dehors : une multizone y branche toutes les têtes.");
    else if (heads >= 4) why.push(`Avec ${heads} têtes, une seule unité extérieure évite d'en poser ${heads} autour de la maison.`);
    else if (opts.forceMulti) why.push("C'est la configuration que vous aviez choisie.");
    why.push(`L'unité extérieure est calibrée pour toute la maison, ${btu(c.total)} à −15 °C ; chaque tête, pour son espace.`);
    ruledOut.push({
      kind: "multi-single",
      why: oneOutdoor ? `Des murales indépendantes demanderaient ${heads} unités extérieures, et vous n'avez qu'un seul endroit dehors.` : `Des murales indépendantes demanderaient ${heads} unités extérieures autour de la maison.`,
    });
    ruledOut.push({ kind: "central", why: centraleEcartee(alt) });
    if (c.levels > 1) ruledOut.push({ kind: "single-zone", why: `Une seule tête murale ne chauffe pas ${niveaux(c)}.` });
  } else {
    title = `${cap(NOMBRES[heads] ?? String(heads))} thermopompes murales indépendantes, une par espace`;
    why.push(`${intro} : chaque espace reçoit sa propre thermopompe murale, avec son unité extérieure, calibrée pour la charge de cet espace (la plus grande : ${btu(sizing)} à −15 °C).`);
    if (multiRefused) why.push(`Aucune multizone admissible ne couvre ${btu(c.total)} à −15 °C avec une seule unité extérieure : des murales indépendantes s'en chargent.`);
    why.push(`Chaque appareil reste simple à calibrer et à entretenir, et la maison reste chauffée si l'un tombe en panne ; en contrepartie, il faut ${heads} emplacements dehors.`);
    ruledOut.push({
      kind: "multi-zone",
      why: multiRefused
        ? `Aucune multizone admissible ne couvre toute la charge (${btu(c.total)} à −15 °C) avec une seule unité extérieure.`
        : `Une multizone relierait les ${heads} têtes à une seule unité extérieure : c'est le bon choix quand il n'y a qu'un seul endroit possible dehors, ou à partir de 4 têtes.`,
    });
    ruledOut.push({ kind: "central", why: centraleEcartee(alt) });
    if (c.levels > 1) ruledOut.push({ kind: "single-zone", why: `Une seule tête murale ne chauffe pas ${niveaux(c)}.` });
  }

  const checks: ArchitectureCheck[] = [];
  if (c.placements.includes("plancher") && !c.placements.includes("mur-haut")) {
    checks.push({ text: "Vous préférez des consoles au plancher : aucune console n'est admissible au catalogue ThermoMatch pour l'instant. Les recommandations sont des murales ; l'installateur vous montrera les consoles offertes." });
  }
  if (c.placements.includes("plafond")) checks.push({ text: "Plafond ou grenier accessible : un petit gainable caché est possible, à évaluer." });
  if (!alt && c.ducts === "ne-sais-pas") checks.push({ text: "Conduits d'air à vérifier à la visite : s'il y en a en bon état à chaque étage, une centrale devient possible." });
  if (kind === "multi-zone") checks.push({ text: `L'installateur vérifie que l'unité extérieure retenue accepte ${heads} têtes : la liste LogisVert ne publie pas ce nombre maximal.` });
  checks.push({
    text: heads > 1 ? "À la visite : emplacement de chaque tête et parcours des lignes de réfrigérant ; la répartition des zones est indicative." : "À la visite : emplacement de la tête et de l'unité extérieure.",
  });

  const vague = opts.rule === "L" || c.zonesWanted === undefined || c.zonesWanted === "ne-sais-pas" || c.ducts === "ne-sais-pas";
  return {
    kind,
    pairingClass: kind === "multi-zone" ? "multi" : "single",
    heads,
    zonePlan,
    sizingLoadBtuH: sizing,
    sizingLabel: partial ? "de l'espace principal" : kind === "multi-single" ? "de la zone la plus chargée" : undefined,
    totalLoadBtuH: c.total,
    levels: c.levels,
    backup: c.backup,
    rule: opts.rule,
    confidence: vague || multiRefused ? "a-confirmer" : "ferme",
    label: installLabel(kind, heads),
    title,
    why,
    ruledOut,
    checks,
    designTempC: c.designTempC,
    designLoadBtuH: c.designTempC == null ? null : designLoadAt(c.total, c.designTempC),
    backupSummary: backupSummaryOf(c),
  };
}

/* ------------------------------------------------------------------
   A5 : panneau électrique
   ------------------------------------------------------------------ */

function panelCheck(c: Ctx, d: ArchitectureDecision): void {
  // Une fournaise en relève chauffe au combustible : la thermopompe n'ajoute pas d'appoint électrique au panneau.
  if (c.backup === "fournaise") return;
  const nominal = d.pairingClass === "central" ? d.totalLoadBtuH : d.zonePlan.reduce((s, z) => s + (z.headNominalBtu ?? 0), 0);
  if (!(d.pairingClass === "central" || d.heads >= 3 || nominal >= 24_000)) return;
  const lien = { href: GUIDE_PANNEAU_100A, linkLabel: "Panneau de 100 A et thermopompe : le guide" };
  if (c.panel === "100-moins") {
    d.checks.push({ text: "Panneau de 100 A : un électricien fait le calcul de charge (thermopompe, plinthes, chauffe-eau, cuisinière) avant l'installation ; il faut parfois passer à 200 A.", ...lien });
  } else if (c.panel === "ne-sais-pas") {
    d.checks.push({ text: "Intensité du panneau à vérifier (elle est inscrite sur le disjoncteur principal) : avec 100 A, un calcul de charge est nécessaire avant l'installation.", ...lien });
  }
}

/* ------------------------------------------------------------------
   Décision
   ------------------------------------------------------------------ */

function decideCore(c: Ctx): ArchitectureDecision {
  if (c.legacy === "centrale") return central(c, "probables", "L");
  if (c.legacy === "murale") return ductless(c, { rule: "L", heads: 1 });
  if (c.legacy === "multizone") return ductless(c, { rule: "L", heads: c.condo ? 1 : Math.max(2, Math.min(c.levels, 4)), forceMulti: true });
  if (c.legacy === "ne-sais-pas") return c.furnace ? central(c, "probables", "L") : ductless(c, { rule: "L" });

  if (c.ducts === "complets") return central(c, "complets", "A1");
  // Une fournaise distribue sa chaleur par des conduits : sans réponse contraire, on les tient pour probables.
  if (c.furnace && (c.ducts === "ne-sais-pas" || c.ducts === undefined)) return central(c, "probables", "A1");
  if (c.ducts === "partiels") {
    const d = central(c, "partiels", "A2");
    d.alternative = { note: "Si l'inspection révèle des conduits trop petits aux étages, voici la solution sans conduits.", decision: ductless(c, { rule: "A2", alt: true }) };
    return d;
  }
  return ductless(c, { rule: "A4" });
}

export function decideArchitecture(input: ArchitectureInput, load: { loadBtuH: number }): ArchitectureDecision {
  const c = contextOf(input, load.loadBtuH);
  const d = decideCore(c);
  panelCheck(c, d);
  if (d.alternative) panelCheck(c, d.alternative.decision);
  return d;
}

/**
 * Architecture pressentie à partir des seules réponses (parcours : tranches de budget, brouillon de projet).
 * La charge sert seulement à calibrer les zones : une valeur type suffit pour connaître le type et le nombre de têtes.
 */
export function architectureHint(input: ArchitectureInput): { kind: ArchitectureKind; heads: number } {
  const d = decideArchitecture(input, { loadBtuH: 20_000 });
  return { kind: d.kind, heads: d.heads };
}

/* ------------------------------------------------------------------
   Relève d'une machine donnée, à la température de calcul
   ------------------------------------------------------------------ */

const RELEVE_SUJET: Record<BackupKind, [string, string]> = {
  fournaise: ["la fournaise", "couvre"],
  chaudiere: ["la chaudière", "couvre"],
  plinthes: ["vos plinthes", "couvrent"],
  inconnu: ["le chauffage d'appoint", "couvre"],
};

/**
 * Relève nécessaire pour une machine : au moins la charge à la température de calcul moins sa capacité
 * certifiée à −15 °C (sa puissance réelle y est plus basse : c'est un minimum). Sous sa température
 * minimale de fonctionnement, la relève couvre tout. Sans région reconnue : calcul à −15 °C seulement.
 */
export function backupNoteFor(d: ArchitectureDecision, h5PerUnitBtuH: number, minOperatingTempC: number | null): string | null {
  if (!(h5PerUnitBtuH > 0)) return null;
  const units = d.kind === "multi-single" ? d.heads : 1;
  const covered = d.kind === "single-zone" ? d.sizingLoadBtuH : d.totalLoadBtuH;
  const pour = d.kind === "single-zone" && d.levels > 1 ? " pour l'espace principal" : "";
  const sa = units > 1 ? "leur" : "sa";
  const [sujet, verbe] = RELEVE_SUJET[d.backup];
  if (d.designTempC == null) {
    const need = round500(covered - h5PerUnitBtuH * units);
    return need > 0 ? `Relève d'au moins ${btu(need)} à −15 °C${pour} ; région non reconnue, nous nous en tenons à ce point de mesure.` : null;
  }
  const T = d.designTempC;
  const need = round500(designLoadAt(covered, T) - h5PerUnitBtuH * units);
  let s =
    need > 0
      ? `Relève d'au moins ${btu(need)} à ${temp(T)}${pour}.`
      : `À ${temp(T)}, ${sa} capacité certifiée à −15 °C couvre encore la charge estimée${pour} ; la relève garde une marge, car la puissance baisse avec le froid.`;
  if (minOperatingTempC != null && minOperatingTempC > T) {
    s += ` Sous ${temp(minOperatingTempC)}, ${sa} température minimale de fonctionnement, ${sujet} ${verbe} toute la charge.`;
  }
  return s;
}
