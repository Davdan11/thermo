/* ==================================================================
   Chantier R — verdict d'une licence d'après le fichier des licences
   actives de la RBQ. Fonctions pures.

   Bloquent les offres (branché dans partenaires/blockers.ts) :
     - absente de la liste des licences actives (« introuvable ») ;
     - statut « suspendue » ou « annulée » écrit dans le fichier.
   Ne bloquent pas, mais créent une tâche : statut inhabituel (le
   texte est affiché tel quel), sous-catégorie exigée absente.
   Aucune vérification tant que la source n'a pas été lue : sans
   fichier, aucun verdict n'existe et rien n'est bloqué par ce module.
   Le propriétaire peut lever le blocage 30 jours après avoir vérifié
   lui-même au registre public (numéro mal saisi, licence renouvelée
   après l'extraction du jour).
   ================================================================== */

import { localYmd } from "../../crm/time";
import { ymdLong } from "../../partenaires/compliance";
import { normalizeLicence, subcategoryCode } from "./csv";
import type { RbqOutcome, RbqRecord, RbqVerification } from "./types";

/** Recherche publique de la RBQ (Registre des détenteurs de licence). */
export const RBQ_REGISTRY_URL = "https://www.pes.rbq.gouv.qc.ca/RegistreLicences";
/** Description du jeu de données sur Données Québec. */
export const RBQ_DATASET_URL = "https://www.donneesquebec.ca/recherche/dataset/licencesactives";
/** Fichier CSV (compressé en .zip) de la liste des licences actives ; imposable avec RBQ_SOURCE_URL. */
export const RBQ_DEFAULT_SOURCE =
  "https://www.donneesquebec.ca/recherche/dataset/755b45d6-7aee-46df-a216-748a0191c79f/resource/32f6ec46-85fd-45e9-945b-965d9235840a/download/rdl01_extractiondonneesouvertes.zip";

export const BLOCKING_OUTCOMES: ReadonlySet<RbqOutcome> = new Set<RbqOutcome>(["suspendue", "annulee", "introuvable"]);

/** Durée d'une levée manuelle après vérification au registre public. */
export const OVERRIDE_DAYS = 30;

/** Classement du statut écrit dans le fichier (le texte d'origine est toujours conservé). */
export function statusKind(raw: string): Exclude<RbqOutcome, "introuvable" | "numero-manquant"> {
  const f = raw
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
  if (/suspend/.test(f)) return "suspendue";
  if (/annul|revoq|revoc|radie/.test(f)) return "annulee";
  if (/^(active?|actif|en vigueur|valide)\b/.test(f)) return "active";
  return "autre";
}

export interface EvaluateContext {
  at: string;
  source: RbqVerification["source"];
  /** Codes de sous-catégories exigés par le propriétaire (« 15.10 »…) ; vide : non vérifié. */
  relevant: readonly string[];
  previous?: RbqVerification | null;
}

export function evaluateLicence(numberRaw: string, found: ReadonlyMap<string, RbqRecord>, ctx: EvaluateContext): RbqVerification {
  const number = String(numberRaw ?? "").trim().slice(0, 40);
  const key = normalizeLicence(number);
  const base = { checkedAt: ctx.at, number, source: ctx.source, subcategories: [] as string[], missingSubcategories: [] as string[] };
  let v: RbqVerification;
  if (!key) v = { ...base, outcome: "numero-manquant" };
  else {
    const rec = found.get(key);
    if (!rec) v = { ...base, outcome: "introuvable" };
    else {
      const codes = new Set(rec.subcategories.map(subcategoryCode).filter((c): c is string => Boolean(c)));
      v = {
        ...base,
        outcome: statusKind(rec.status),
        rawStatus: rec.status || "(vide)",
        licenceType: rec.licenceType || undefined,
        subcategories: rec.subcategories,
        registryName: rec.name || undefined,
        restriction: rec.restriction ? { text: rec.restriction, from: rec.restrictionStart, to: rec.restrictionEnd } : null,
        missingSubcategories: ctx.relevant.filter((c) => !codes.has(c)),
      };
    }
  }
  const prev = ctx.previous ?? null;
  if (BLOCKING_OUTCOMES.has(v.outcome)) {
    const sameBlock = prev && BLOCKING_OUTCOMES.has(prev.outcome) && prev.number === v.number;
    v.blockingSince = sameBlock ? prev.blockingSince ?? prev.checkedAt : ctx.at;
    // Levée manuelle encore valide : gardée (même numéro seulement).
    v.override = sameBlock && prev.override && prev.override.until > ctx.at ? prev.override : null;
  } else v.override = null;
  return v;
}

/** Le blocage s'applique (verdict bloquant, sans levée manuelle en cours). */
export function isBlocking(v: RbqVerification | null | undefined, now: Date): boolean {
  if (!v || !BLOCKING_OUTCOMES.has(v.outcome)) return false;
  if (v.override && Date.parse(v.override.until) > now.getTime()) return false;
  return true;
}

const fileDay = (v: RbqVerification) => ymdLong(localYmd(v.source.fetchedAt || v.checkedAt));

/** Raison affichée dans les blocages des offres, ou null. */
export function registryBlockerLabel(v: RbqVerification | null | undefined, now: Date): string | null {
  if (!v || !isBlocking(v, now)) return null;
  if (v.outcome === "introuvable") return `Licence RBQ ${v.number} absente de la liste des licences actives (fichier du ${fileDay(v)})`;
  if (v.outcome === "suspendue") return `Licence RBQ suspendue selon la RBQ (fichier du ${fileDay(v)})`;
  return `Licence RBQ annulée selon la RBQ (fichier du ${fileDay(v)})`;
}

/** Levée manuelle : valable OVERRIDE_DAYS jours, jusqu'à la prochaine vérification qui confirme la licence. */
export function withOverride(v: RbqVerification, by: string, note: string, now: Date): RbqVerification {
  return { ...v, override: { at: now.toISOString(), by, note: note.slice(0, 300), until: new Date(now.getTime() + OVERRIDE_DAYS * 86_400_000).toISOString() } };
}
