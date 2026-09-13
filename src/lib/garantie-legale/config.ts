/* ==================================================================
   Conformité : garantie légale de bon fonctionnement
   (Loi sur la protection du consommateur).

   Texte à faire valider par un avocat.

   Source officielle : Office de la protection du consommateur (OPC),
   « Garantie de bon fonctionnement : questions et réponses pour les
   commerçants et fabricants d'électroménagers et d'appareils
   électroniques », page consultée le 2026-09-13 (voir SOURCE_OPC) :
   - biens neufs visés, dont la thermopompe : 6 ans ;
   - contrat de vente ou de louage à long terme conclu entre un
     consommateur et un commerçant à compter du 5 octobre 2026 ;
   - durée calculée à partir de la date de livraison du bien ;
   - le commerçant indique la durée « de manière évidente à proximité
     du prix annoncé » (en ligne, sur une étiquette, dans une publicité
     ou une circulaire), en inscrivant « garantie de bon fonctionnement »
     au long.

   Configuration unique : la date, la durée, les types visés, le texte
   court et le lien vivent ici. Module pur, utilisable au serveur et
   dans le navigateur. Surcharges : GARANTIE_LEGALE_DEBUT et
   GARANTIE_LEGALE_ANS, inscrites au build par next.config.ts (env) pour
   que les composants client et les pages statiques lisent les mêmes
   valeurs (voir .env.example).
   ================================================================== */

/** Montréal suit le fuseau America/Toronto (America/Montreal en est un alias). */
export const FUSEAU_MONTREAL = "America/Toronto";

/** Valeurs par défaut : 5 octobre 2026 à 00 h, heure de Montréal ; 6 ans pour une thermopompe. */
export const GARANTIE_LEGALE_DEFAUTS = { debut: "2026-10-05", ans: 6 } as const;

/** Page explicative du site. */
export const PAGE_GARANTIE_LEGALE = "/garantie-legale";

/** Page officielle de l'OPC (commerçants et fabricants). */
export const SOURCE_OPC = "https://www.opc.gouv.qc.ca/commercant/pratique-commerce/garanties/outils-garantie-bon-fonctionnement";

/** Attribut posé sur <html> par le script en ligne du layout, dès l'entrée en vigueur. */
export const ATTR_EN_VIGUEUR = "data-garantie-legale";
/** Attribut d'une mention rendue avant la date : masquée par globals.css tant que <html> n'a pas ATTR_EN_VIGUEUR. */
export const ATTR_EN_ATTENTE = "data-garantie-legale-attente";

/** Types de thermopompes du catalogue (tous neufs). */
export const CATEGORIES_THERMOPOMPE = ["murale", "multizone", "centrale", "console", "cassette", "plafonnier", "autre"] as const;
export type CategorieThermopompe = (typeof CATEGORIES_THERMOPOMPE)[number];

/**
 * Types visés, réglables ici. La loi vise la « thermopompe » neuve sans distinction de type, de marque, de gamme ni
 * de prix (source OPC) : tous les types du catalogue sont donc visés par défaut, pas seulement murale, multizone et centrale.
 */
export const CATEGORIES_VISEES: readonly CategorieThermopompe[] = CATEGORIES_THERMOPOMPE;

/** Catégories de la grille des prix installés (src/lib/prices/grille-installee.ts) : murale, multizone, centrale. */
export const CATEGORIES_GRILLE_PRIX: readonly CategorieThermopompe[] = ["murale", "multizone", "centrale"];

export interface GarantieLegaleConfig {
  /** Entrée en vigueur, en millisecondes depuis l'époque Unix. */
  debut: number;
  /** Durée pour une thermopompe neuve, en années. */
  ans: number;
  categories: readonly CategorieThermopompe[];
  /** Lien de la mention : page explicative du site. */
  page: string;
  source: string;
}

export interface EnvGarantie {
  GARANTIE_LEGALE_DEBUT?: string;
  GARANTIE_LEGALE_ANS?: string;
}

/** Accès littéraux : next.config.ts (env) remplace ces deux expressions au build, au serveur comme au client. */
export function envGarantie(): EnvGarantie {
  return { GARANTIE_LEGALE_DEBUT: process.env.GARANTIE_LEGALE_DEBUT, GARANTIE_LEGALE_ANS: process.env.GARANTIE_LEGALE_ANS };
}

/* ------------------------------------------------------------------
   Heure de Montréal → instant UTC, changements d'heure compris
   ------------------------------------------------------------------ */

let formatter: Intl.DateTimeFormat | null = null;

/** Décalage de l'heure de Montréal sur UTC (ms) à un instant donné : -4 h en heure avancée, -5 h en heure normale. */
function decalage(utc: number): number {
  formatter ??= new Intl.DateTimeFormat("en-US", {
    timeZone: FUSEAU_MONTREAL,
    hourCycle: "h23",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const p: Record<string, number> = {};
  for (const x of formatter.formatToParts(new Date(utc))) if (x.type !== "literal") p[x.type] = Number(x.value);
  const local = Date.UTC(p.year, p.month - 1, p.day, p.hour === 24 ? 0 : p.hour, p.minute, p.second);
  return local - Math.floor(utc / 1000) * 1000;
}

/**
 * Instant UTC d'une heure locale de Montréal. Heure ambiguë (retour à l'heure normale) : la première occurrence.
 * Heure inexistante (passage à l'heure avancée) : avancée de l'écart, comme Temporal (« compatible »).
 */
export function heureMontrealVersUtc(annee: number, mois: number, jour: number, heure = 0, minute = 0, seconde = 0): number {
  const naif = Date.UTC(annee, mois - 1, jour, heure, minute, seconde);
  const avant = decalage(naif - 86_400_000);
  const apres = decalage(naif + 86_400_000);
  const valides = [naif - avant, naif - apres].filter((t) => decalage(t) === naif - t);
  return valides.length > 0 ? Math.min(...valides) : naif - avant;
}

const DATE_LOCALE = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2}))?)?$/;
const ISO_AVEC_FUSEAU = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2})$/i;

/**
 * Date d'entrée en vigueur lue d'un texte : « 2026-10-05 » (00 h à Montréal), « 2026-10-05T08:30 » (heure de Montréal)
 * ou un instant ISO complet avec fuseau (« 2026-10-05T04:00:00Z »). Texte invalide : null.
 */
export function lireInstant(texte: string): number | null {
  const s = texte.trim();
  if (ISO_AVEC_FUSEAU.test(s)) {
    const t = Date.parse(s);
    return Number.isFinite(t) ? t : null;
  }
  const m = DATE_LOCALE.exec(s);
  if (!m) return null;
  const [annee, mois, jour, heure, minute, seconde] = [m[1], m[2], m[3], m[4] ?? "0", m[5] ?? "0", m[6] ?? "0"].map(Number);
  // Date du calendrier réelle (pas de 31 septembre) et heure plausible.
  const verif = new Date(Date.UTC(annee, mois - 1, jour));
  if (verif.getUTCFullYear() !== annee || verif.getUTCMonth() !== mois - 1 || verif.getUTCDate() !== jour) return null;
  if (heure > 23 || minute > 59 || seconde > 59) return null;
  return heureMontrealVersUtc(annee, mois, jour, heure, minute, seconde);
}

/* ------------------------------------------------------------------
   Configuration
   ------------------------------------------------------------------ */

const cache = new Map<string, GarantieLegaleConfig>();

/** Configuration effective : défauts, sauf surcharge valide par variable d'environnement (une valeur invalide est ignorée). */
export function lireConfig(env: EnvGarantie = envGarantie(), categories: readonly CategorieThermopompe[] = CATEGORIES_VISEES): GarantieLegaleConfig {
  const cle = `${env.GARANTIE_LEGALE_DEBUT ?? ""}|${env.GARANTIE_LEGALE_ANS ?? ""}|${categories.join(",")}`;
  const deja = cache.get(cle);
  if (deja) return deja;

  const debutEnv = env.GARANTIE_LEGALE_DEBUT?.trim() ? lireInstant(env.GARANTIE_LEGALE_DEBUT) : null;
  const debut = debutEnv ?? (lireInstant(GARANTIE_LEGALE_DEFAUTS.debut) as number);

  const ansTexte = env.GARANTIE_LEGALE_ANS?.trim() ?? "";
  const ansEnv = /^\d{1,2}$/.test(ansTexte) ? Number(ansTexte) : NaN;
  const ans = ansEnv >= 1 && ansEnv <= 25 ? ansEnv : GARANTIE_LEGALE_DEFAUTS.ans;

  const config: GarantieLegaleConfig = { debut, ans, categories, page: PAGE_GARANTIE_LEGALE, source: SOURCE_OPC };
  cache.set(cle, config);
  return config;
}

/** Date d'entrée en vigueur en toutes lettres, heure de Montréal : « 5 octobre 2026 ». */
export function dateEnVigueur(config: GarantieLegaleConfig = lireConfig()): string {
  return new Date(config.debut).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: FUSEAU_MONTREAL });
}

/** La garantie s'applique-t-elle à cet instant (par défaut : maintenant) ? Rien avant la date, tout dès la date. */
export function estEnVigueur(config: GarantieLegaleConfig = lireConfig(), instant: number | Date = Date.now()): boolean {
  const t = typeof instant === "number" ? instant : instant.getTime();
  return Number.isFinite(t) && t >= config.debut;
}

/* ------------------------------------------------------------------
   Produits visés
   ------------------------------------------------------------------ */

/**
 * Type de thermopompe d'un produit : types du catalogue (wall-single, multi-zone, central-ducted…) et types courts de
 * ThermoMatch (wall, central). Même règle que la grille des prix (priceKindOf) pour murale, multizone et centrale.
 */
export function categorieDe(systemType: string | null | undefined, zones?: number | null): CategorieThermopompe | null {
  switch (systemType) {
    case "multi-zone":
      return "multizone";
    case "central-ducted":
    case "central":
    case "hybrid":
      return "centrale";
    case "wall-single":
    case "ductless":
      return zones != null && zones > 1 ? "multizone" : "murale";
    case "floor-console":
      return "console";
    case "cassette":
      return "cassette";
    case "ceiling":
      return "plafonnier";
    case "other":
      return "autre";
    default:
      return null;
  }
}

/** Ce que la mention accompagne : un produit du catalogue, ou une ou plusieurs catégories (grilles de prix). */
export type CibleGarantie = { systemType: string | null | undefined; zones?: number | null } | CategorieThermopompe | readonly CategorieThermopompe[];

/** Seulement les produits visés : une thermopompe neuve d'un type retenu dans la configuration. */
export function estVise(cible: CibleGarantie, config: GarantieLegaleConfig = lireConfig()): boolean {
  if (typeof cible === "string") return config.categories.includes(cible);
  if (Array.isArray(cible)) return cible.some((c) => config.categories.includes(c));
  const { systemType, zones } = cible as { systemType: string | null | undefined; zones?: number | null };
  const c = categorieDe(systemType, zones);
  return c != null && config.categories.includes(c);
}

/* ------------------------------------------------------------------
   Texte et activation
   ------------------------------------------------------------------ */

/** Texte court affiché près du prix (espaces insécables avant « : » et entre le nombre et « ans »). */
export function texteMention(config: GarantieLegaleConfig = lireConfig()): string {
  return `Garantie légale de bon fonctionnement : ${config.ans} ans`;
}

/**
 * Script en ligne du layout, exécuté avant le premier affichage : marque <html> si la date est passée, ou à la date
 * si l'onglet reste ouvert. Une page statique générée avant la date montre ainsi la mention dès la date, sans
 * redéploiement et sans décalage de mise en page.
 */
export function scriptGarantieLegale(config: GarantieLegaleConfig = lireConfig()): string {
  return `(function(){var h=document.documentElement,t=${config.debut}-Date.now();function m(){h.setAttribute("${ATTR_EN_VIGUEUR}","")}if(t<=0)m();else if(t<2147483647)setTimeout(m,t)})();`;
}
