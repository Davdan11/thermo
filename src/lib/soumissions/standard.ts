/* ==================================================================
   Chantier D — « Inclusions standard » de l'installation (réglages)
   et lignes de prix tirées du plan. Pur : navigateur et serveur.

   Installation standard du propriétaire (réglable) :
     - ligne frigorifique : 50 pi inclus par tête intérieure ;
       au-delà, la ligne « pied de ligne supplémentaire » de SA liste
       de prix (rôle « ligne-supplementaire ») ;
     - cache-ligne inclus : seule la couleur se choisit ;
     - base au sol OU support mural inclus, au choix ;
     - drain par gravité inclus ; la pompe de condensat est un extra
       (rôle « pompe-drain ») ajouté quand elle est cochée au plan ;
     - raccordement électrique jusqu'au panneau inclus, sans limite
       de distance.
   Elles s'appliquent quand rien n'est configuré : la longueur incluse
   d'un forfait ou des valeurs par défaut du propriétaire passe avant.
   AUCUN PRIX INVENTÉ : un élément absent de la liste de prix (ou à
   0 $) n'est jamais ajouté ; un avis « Ajoutez-le à votre liste de
   prix » s'affiche à la place.
   ================================================================== */

import { fold, isPumpDrain } from "./choices";
import { rid } from "./defaults";
import { extraLength } from "./present";
import type { CatalogItem, CatalogRole, LengthUnit, ListItem, MachineInfo, PricePackage, QuoteContent, QuoteLine, Settings, StandardInclusions } from "./types";

export const DEFAULT_STANDARD: StandardInclusions = { enabled: true, lineIncludedFt: 50, lineCover: true, mounting: true, gravityDrain: true, electricalToPanel: true };

const bool = (v: unknown, d: boolean) => (typeof v === "boolean" ? v : d);

/** Réglage lu sur le disque : absent (anciens fichiers) = installation standard de départ. */
export function normalizeStandard(raw: unknown): StandardInclusions {
  const r = raw && typeof raw === "object" ? (raw as Partial<StandardInclusions>) : {};
  const ft = r.lineIncludedFt;
  return {
    enabled: bool(r.enabled, DEFAULT_STANDARD.enabled),
    lineIncludedFt: ft === null ? null : typeof ft === "number" && Number.isFinite(ft) && ft >= 0 && ft <= 1000 ? Math.round(ft * 10) / 10 : DEFAULT_STANDARD.lineIncludedFt,
    lineCover: bool(r.lineCover, DEFAULT_STANDARD.lineCover),
    mounting: bool(r.mounting, DEFAULT_STANDARD.mounting),
    gravityDrain: bool(r.gravityDrain, DEFAULT_STANDARD.gravityDrain),
    electricalToPanel: bool(r.electricalToPanel, DEFAULT_STANDARD.electricalToPanel),
  };
}

export const FT_PER_M = 3.28084;
const round1 = (n: number) => Math.round(n * 10) / 10;

/** Longueur incluse de l'installation standard, dans l'unité de la soumission (50 pi = 15,2 m). */
export function standardLineLength(std: StandardInclusions | undefined, unit: LengthUnit): number | null {
  const s = std ?? DEFAULT_STANDARD;
  if (!s.enabled || s.lineIncludedFt === null) return null;
  return unit === "pi" ? s.lineIncludedFt : round1(s.lineIncludedFt / FT_PER_M);
}

/** Longueur incluse par tête : celle du forfait, sinon celle des réglages, sinon l'installation standard. */
export function includedLineLength(settings: Pick<Settings, "defaults" | "standard">, unit: LengthUnit, pkg?: Pick<PricePackage, "includedLineLength"> | null): number | null {
  return pkg?.includedLineLength ?? settings.defaults.includedLineLength ?? standardLineLength(settings.standard, unit);
}

const fmtLen = (n: number, unit: LengthUnit) => `${String(n).replace(".", ",")} ${unit === "pi" ? "pi" : "m"}`;

export const STANDARD_TEXT = {
  line: (len: string) => `Ligne frigorifique jusqu’à ${len} par tête intérieure`,
  cover: "Cache-ligne",
  mounting: "Base au sol ou support mural pour l’unité extérieure",
  drain: "Drain de condensat par gravité",
  electrical: "Raccordement électrique jusqu’au panneau",
} as const;

/** Sujets déjà couverts par un élément standard : l'ancien libellé de la liste des réglages est remplacé, pas doublé. */
const TOPICS: Array<{ key: keyof Omit<StandardInclusions, "enabled">; re: RegExp }> = [
  { key: "lineIncludedFt", re: /^ligne (de refrigerant|frigorifique)/ },
  { key: "lineCover", re: /^cache-?ligne/ },
  { key: "mounting", re: /^(base au sol|support mural)/ },
  { key: "gravityDrain", re: /^drain/ },
  { key: "electricalToPanel", re: /^raccordement electrique/ },
];

/** Éléments de l'installation standard pour « Ce qui est inclus ». */
export function standardItems(std: StandardInclusions | undefined, unit: LengthUnit, coverColor = ""): Array<{ label: string; detail: string }> {
  const s = std ?? DEFAULT_STANDARD;
  if (!s.enabled) return [];
  const out: Array<{ label: string; detail: string }> = [];
  const len = standardLineLength(s, unit);
  if (len !== null) out.push({ label: STANDARD_TEXT.line(fmtLen(len, unit)), detail: "Au-delà : pied de ligne supplémentaire, selon la liste de prix." });
  if (s.lineCover) out.push({ label: STANDARD_TEXT.cover, detail: coverColor ? `Couleur : ${coverColor}` : "Couleur choisie selon la maison." });
  if (s.mounting) out.push({ label: STANDARD_TEXT.mounting, detail: "" });
  if (s.gravityDrain) out.push({ label: STANDARD_TEXT.drain, detail: "La pompe de condensat, si elle est requise, est un extra." });
  if (s.electricalToPanel) out.push({ label: STANDARD_TEXT.electrical, detail: "" });
  return out;
}

/** « Ce qui est inclus » d'une nouvelle soumission : l'installation standard, puis la liste des réglages sans ses doublons. */
export function mergeInclusions(std: StandardInclusions | undefined, templateLabels: string[], unit: LengthUnit): Array<{ label: string; detail: string }> {
  const s = std ?? DEFAULT_STANDARD;
  const items = standardItems(s, unit);
  if (!items.length) return templateLabels.filter((l) => l.trim()).map((label) => ({ label, detail: "" }));
  const covered = TOPICS.filter((t) => (t.key === "lineIncludedFt" ? s.lineIncludedFt !== null : s[t.key]));
  const rest = templateLabels.filter((l) => l.trim() && !covered.some((t) => t.re.test(fold(l))));
  return [...items, ...rest.map((label) => ({ label, detail: "" }))];
}

/** Couleur du cache-ligne : dans le plan et dans l'élément « Cache-ligne » de « Ce qui est inclus ». */
export function applyCoverColor(content: QuoteContent, color: string): QuoteContent {
  const c = color.trim().slice(0, 80);
  const inclusions: ListItem[] = content.inclusions.map((i) => (fold(i.label) === fold(STANDARD_TEXT.cover) ? { ...i, detail: c ? `Couleur : ${c}` : "Couleur choisie selon la maison." } : i));
  return { ...content, placement: { ...content.placement, coverColor: c }, inclusions };
}

/* ---------------- Forfait qui correspond à la machine ---------------- */

/** Forfaits de la liste de prix qui conviennent au type de système et à la capacité (le plus précis d'abord). */
export function matchingPackages(settings: Pick<Settings, "packages">, machine: Pick<MachineInfo, "systemType" | "pairing"> | null): PricePackage[] {
  if (!machine) return [];
  const cap = machine.pairing?.nominalBtu ?? null;
  const width = (p: PricePackage) => (p.capacityMinBtu === null || p.capacityMaxBtu === null ? Number.MAX_SAFE_INTEGER : p.capacityMaxBtu - p.capacityMinBtu);
  return settings.packages
    .filter((p) => {
      const typeOk = p.systemType === "tous" || !p.systemType || p.systemType === machine.systemType;
      const capOk = cap === null || ((p.capacityMinBtu === null || cap >= p.capacityMinBtu) && (p.capacityMaxBtu === null || cap <= p.capacityMaxBtu));
      return typeOk && capOk;
    })
    .sort((a, b) => Number(b.systemType === machine.systemType) - Number(a.systemType === machine.systemType) || width(a) - width(b) || Number(b.priceCents > 0) - Number(a.priceCents > 0));
}

/* ---------------- Lignes tirées du plan ---------------- */

export const PRICE_LIST_HREF = "/gestion/soumissions/prix";

export interface PlanNotice {
  /** « forfait », « ligne-supplementaire:<unité> », « pompe-drain:<unité> ». */
  key: string;
  text: string;
  href: string;
}

/** Clé d'une ligne ajoutée d'office (pour ne pas la remettre après que le propriétaire l'a retirée). */
export const autoKey = (role: "forfait" | "ligne-supplementaire" | "pompe-drain", unitRef?: string | null) => (role === "forfait" ? "forfait" : `${role}:${unitRef ?? ""}`);

const priced = (x: { unitPriceCents?: number; priceCents?: number }) => (x.unitPriceCents ?? x.priceCents ?? 0) > 0;

function catalogFor(settings: Pick<Settings, "extras" | "labour">, role: CatalogRole): CatalogItem | null {
  const all = [...settings.extras, ...settings.labour].filter((x) => x.role === role);
  return all.find(priced) ?? all[0] ?? null;
}

/** Quantité d'une longueur dans l'unité de l'élément de la liste de prix (pied ou mètre). */
export function lengthQty(qty: number, quoteUnit: LengthUnit, itemUnit: CatalogItem["unit"]): number {
  if (quoteUnit === "m" && itemUnit === "pied") return Math.ceil(qty * FT_PER_M);
  if (quoteUnit === "pi" && itemUnit === "metre") return round1(qty / FT_PER_M);
  return qty;
}

const baseLine = (over: Partial<QuoteLine>): QuoteLine => ({ id: rid("l"), kind: "extra", label: "", description: "", unit: "unite", quantity: 1, unitPriceCents: 0, optional: false, selectedByDefault: false, discount: null, catalogRef: null, unitRef: null, ...over });

const fromItem = (x: CatalogItem, over: Partial<QuoteLine>): QuoteLine =>
  baseLine({ kind: x.kind === "main-oeuvre" ? "main-oeuvre" : "extra", label: x.name, description: x.description, unit: x.unit, quantity: x.defaultQuantity || 1, unitPriceCents: x.unitPriceCents, catalogRef: x.id, ...over });

export interface SyncOptions {
  /** Forfait recalculé (machine ou jumelage changé). */
  forfait?: boolean;
  /** Lignes des têtes (longueur, pompe) recalculées. */
  units?: boolean;
  /** Clés retirées à la main par le propriétaire (autoKey) : jamais remises d'office. */
  dismissed?: ReadonlySet<string>;
}

/**
 * Lignes de prix d'office : forfait qui correspond à la machine, pied de ligne supplémentaire au-delà de la longueur
 * incluse, pompe de condensat cochée au plan. Chaque élément vient de la liste de prix, avec SON prix ; s'il manque (ou
 * s'il est à 0 $), aucune ligne n'est ajoutée et un avis le dit.
 */
export function syncPlanLines(content: QuoteContent, settings: Pick<Settings, "packages" | "extras" | "labour" | "standard">, opts: SyncOptions = {}): { lines: QuoteLine[]; notices: PlanNotice[] } {
  const dismissed = opts.dismissed ?? new Set<string>();
  let lines = [...content.lines];
  const notices: PlanNotice[] = [];
  const packageIds = new Set(settings.packages.map((p) => p.id));

  if (opts.forfait && content.machine) {
    const pkg = matchingPackages(settings, content.machine)[0] ?? null;
    if (!pkg) notices.push({ key: "forfait", text: "Aucun forfait d’installation de votre liste de prix ne correspond à cette machine : ajoutez-le à votre liste de prix.", href: PRICE_LIST_HREF });
    else if (!priced(pkg)) notices.push({ key: "forfait", text: `Le forfait « ${pkg.label} » n’a pas encore de prix : ajoutez-le à votre liste de prix.`, href: PRICE_LIST_HREF });
    else if (!dismissed.has(autoKey("forfait")) && !lines.some((l) => l.catalogRef === pkg.id)) {
      // Un forfait d'une autre machine (changée) est remplacé ; les autres lignes restent.
      lines = lines.filter((l) => !(l.kind === "forfait" && l.catalogRef && packageIds.has(l.catalogRef)));
      lines.unshift(baseLine({ kind: "forfait", label: pkg.label, description: pkg.description, unit: "forfait", quantity: 1, unitPriceCents: pkg.priceCents, catalogRef: pkg.id }));
    }
  }

  if (opts.units) {
    const unitIds = new Set(content.placement.indoor.map((u) => u.id));
    const lineItem = catalogFor(settings, "ligne-supplementaire");
    const pumpItem = catalogFor(settings, "pompe-drain");
    const roleIds = (role: CatalogRole) => new Set([...settings.extras, ...settings.labour].filter((x) => x.role === role).map((x) => x.id));
    const lineIds = roleIds("ligne-supplementaire");
    const pumpIds = roleIds("pompe-drain");
    // Lignes liées à une tête retirée du plan : retirées aussi.
    lines = lines.filter((l) => !(l.unitRef && !unitIds.has(l.unitRef) && l.catalogRef && (lineIds.has(l.catalogRef) || pumpIds.has(l.catalogRef))));
    const unit = content.placement.lengthUnit;
    content.placement.indoor.forEach((u, i) => {
      const name = u.label || `Tête ${i + 1}`;
      const extra = extraLength(u);
      const hasLine = (ids: Set<string>) => lines.findIndex((l) => l.unitRef === u.id && l.catalogRef !== null && ids.has(l.catalogRef));

      // Pied de ligne supplémentaire.
      const at = hasLine(lineIds);
      if (extra > 0) {
        if (!lineItem || !priced(lineItem)) {
          notices.push({ key: autoKey("ligne-supplementaire", u.id), text: `${name} : ${fmtLen(extra, unit)} au-delà de la longueur incluse. Pied de ligne supplémentaire : ajoutez-le à votre liste de prix.`, href: PRICE_LIST_HREF });
        } else {
          const qty = lengthQty(extra, unit, lineItem.unit);
          if (at >= 0) lines[at] = { ...lines[at], quantity: qty };
          else if (!dismissed.has(autoKey("ligne-supplementaire", u.id))) lines.push(fromItem(lineItem, { quantity: qty, unitRef: u.id, description: `${name} : ${fmtLen(extra, unit)} au-delà de la longueur incluse.` }));
        }
      } else if (at >= 0) lines.splice(at, 1);

      // Pompe de condensat (extra) cochée au plan.
      const pumpAt = hasLine(pumpIds);
      if (isPumpDrain(u.drain)) {
        if (!pumpItem || !priced(pumpItem)) notices.push({ key: autoKey("pompe-drain", u.id), text: `${name} : pompe de condensat. Ajoutez-la à votre liste de prix.`, href: PRICE_LIST_HREF });
        else if (pumpAt < 0 && !dismissed.has(autoKey("pompe-drain", u.id))) lines.push(fromItem(pumpItem, { quantity: 1, unitRef: u.id, description: pumpItem.description || name }));
      } else if (pumpAt >= 0) lines.splice(pumpAt, 1);
    });
  }
  return { lines, notices };
}

/* ---------------- Nouvelle soumission ---------------- */

const GRAVITY_DRAIN = "Gravité vers l’extérieur";
const COVER_FINISH = "Cache-ligne";

/**
 * Valeurs d'une NOUVELLE soumission (jamais une soumission existante) : installation standard dans « Ce qui est inclus »,
 * longueur incluse par tête, cache-ligne et drain par gravité au plan, textes par défaut des détails facultatifs
 * (présence, contraintes) quand le propriétaire n'en a pas réglé d'autres.
 */
export function newQuoteDefaults(content: QuoteContent, settings: Pick<Settings, "defaults" | "standard" | "templates">, presenceFallback: string): QuoteContent {
  const c = structuredClone(content);
  const std = settings.standard ?? DEFAULT_STANDARD;
  const unit = c.placement.lengthUnit;
  const included = includedLineLength(settings, unit);
  c.placement.indoor = c.placement.indoor.map((u) => ({
    ...u,
    lineIncluded: u.lineIncluded ?? included,
    lineFinish: u.lineFinish || (std.enabled && std.lineCover ? COVER_FINISH : ""),
    drain: u.drain || (std.enabled && std.gravityDrain ? GRAVITY_DRAIN : ""),
  }));
  if (std.enabled) c.inclusions = mergeInclusions(std, settings.templates.inclusions, unit).map((i) => ({ id: rid("i"), ...i }));
  if (!c.site.presence.trim()) c.site.presence = settings.defaults.site.presence.trim() || presenceFallback;
  if (!c.site.constraints.trim() && settings.defaults.site.constraints?.trim()) c.site.constraints = settings.defaults.site.constraints.trim();
  return c;
}

/** Valeurs standard d'une tête ajoutée au plan (longueur incluse, cache-ligne, drain par gravité). */
export function standardHead(settings: Pick<Settings, "defaults" | "standard">, unit: LengthUnit, pkg?: Pick<PricePackage, "includedLineLength"> | null): { lineIncluded: number | null; lineFinish?: string; drain?: string } {
  const std = settings.standard ?? DEFAULT_STANDARD;
  return {
    lineIncluded: includedLineLength(settings, unit, pkg),
    ...(std.enabled && std.lineCover ? { lineFinish: COVER_FINISH } : {}),
    ...(std.enabled && std.gravityDrain ? { drain: GRAVITY_DRAIN } : {}),
  };
}

/** Clé d'office d'une ligne existante (pour mémoriser son retrait par le propriétaire), ou null. */
export function autoKeyOfLine(l: QuoteLine, settings: Pick<Settings, "packages" | "extras" | "labour">): string | null {
  if (!l.catalogRef) return null;
  if (l.kind === "forfait" && settings.packages.some((p) => p.id === l.catalogRef)) return autoKey("forfait");
  const item = [...settings.extras, ...settings.labour].find((x) => x.id === l.catalogRef);
  if (item?.role === "ligne-supplementaire" && l.unitRef) return autoKey("ligne-supplementaire", l.unitRef);
  if (item?.role === "pompe-drain" && l.unitRef) return autoKey("pompe-drain", l.unitRef);
  return null;
}
