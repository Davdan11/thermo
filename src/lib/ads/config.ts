/* ==================================================================
   Mesure publicitaire (étape 1 du pilote) : constantes partagées.

   Module sans dépendance, lu par le navigateur et le serveur.
   Variables publiques (NEXT_PUBLIC_…) : toutes FACULTATIVES. Absentes,
   rien ne se charge. Elles sont lues une par une, en toutes lettres,
   pour que Next les inscrive dans le code du navigateur au build.
   ================================================================== */

/**
 * Version du texte de consentement (bandeau + politique). Un choix
 * mémorisé avec une autre version n'est plus valide : le bandeau
 * réapparaît (le texte précédent ne parlait pas de publicité).
 */
export const AD_CONSENT_VERSION = "2026-09-13";

/** Durée de conservation des identifiants de clic dans le navigateur : 90 jours (fenêtre maximale de Google Ads). */
export const CLICK_TTL_DAYS = 90;
export const CLICK_TTL_MS = CLICK_TTL_DAYS * 86_400_000;

/** Âge maximal d'un événement accepté par l'API Conversions de Meta (7 jours). */
export const META_MAX_AGE_MS = 7 * 86_400_000;

/** Noms EXACTS des actions de conversion hors ligne à créer dans Google Ads (importation de clics). */
export const CONVERSION_NAMES = {
  venteSignee: "Vente signée",
  installationTerminee: "Installation terminée",
} as const;

export const CURRENCY = "CAD";

/** Conversions mesurées dans le navigateur (après consentement seulement). */
export type BrowserConversion = "soumission" | "thermomatch" | "rendez-vous" | "telephone" | "texto";

export const BROWSER_CONVERSIONS: Record<BrowserConversion, { label: string; labelEnv: string; meta: { event: string; custom: boolean } }> = {
  soumission: { label: "Soumission envoyée", labelEnv: "NEXT_PUBLIC_GOOGLE_ADS_LABEL_SOUMISSION", meta: { event: "Lead", custom: false } },
  thermomatch: { label: "ThermoMatch terminé", labelEnv: "NEXT_PUBLIC_GOOGLE_ADS_LABEL_THERMOMATCH", meta: { event: "ThermoMatchTermine", custom: true } },
  "rendez-vous": { label: "Rendez-vous réservé", labelEnv: "NEXT_PUBLIC_GOOGLE_ADS_LABEL_RENDEZ_VOUS", meta: { event: "Schedule", custom: false } },
  telephone: { label: "Clic sur le téléphone", labelEnv: "NEXT_PUBLIC_GOOGLE_ADS_LABEL_TELEPHONE", meta: { event: "Contact", custom: false } },
  texto: { label: "Clic sur texto", labelEnv: "NEXT_PUBLIC_GOOGLE_ADS_LABEL_TEXTO", meta: { event: "Contact", custom: false } },
};

export interface PublicAdsConfig {
  gaId: string;
  adsId: string;
  metaPixelId: string;
  labels: Record<BrowserConversion, string>;
}

const clean = (v: string | undefined) => (v ?? "").trim();

/** Identifiants publics (jamais secrets). Lus à l'appel : les tests peuvent changer l'environnement. */
export function publicAdsConfig(): PublicAdsConfig {
  return {
    gaId: clean(process.env.NEXT_PUBLIC_GA_ID),
    adsId: clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_ID),
    metaPixelId: clean(process.env.NEXT_PUBLIC_META_PIXEL_ID),
    labels: {
      soumission: clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_SOUMISSION),
      thermomatch: clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_THERMOMATCH),
      "rendez-vous": clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_RENDEZ_VOUS),
      telephone: clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_TELEPHONE),
      texto: clean(process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_TEXTO),
    },
  };
}

/** Une mesure au moins est configurée : le bandeau de consentement s'affiche. */
export function measurementConfigured(c: PublicAdsConfig = publicAdsConfig()): boolean {
  return Boolean(c.gaId || c.adsId || c.metaPixelId);
}
