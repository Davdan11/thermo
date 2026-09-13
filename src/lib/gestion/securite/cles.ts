/* ==================================================================
   Chantier S — « Clés et connexions » : liste blanche des variables
   que le propriétaire peut coller lui-même depuis /gestion.

   Une valeur enregistrée n'est JAMAIS réaffichée ni renvoyée : l'état
   public d'une clé se limite à « définie » / « manquante » (et « en
   attente du redémarrage »). Chaque format est validé avant écriture.
   Toute autre variable (ADMIN_EMAILS, secrets de session, Twilio,
   SMTP…) reste modifiable seulement sur le serveur.
   ================================================================== */

import { audit } from "./audit";
import { isValidBackupKey } from "./sauvegarde/chiffrement";
import { readEnvValues, resolveEnvTarget, scheduleReload, writeEnvVar, type EnvTarget, type Spawner } from "./env-file";

export type KeyGroup = "meta" | "google-ads" | "anthropic" | "stripe" | "gemini" | "elevenlabs" | "avis" | "sauvegardes";

export const KEY_GROUPS: Record<KeyGroup, { label: string; sub: string }> = {
  meta: { label: "Meta", sub: "Facebook et Instagram (studio Présence)" },
  "google-ads": { label: "Google Ads", sub: "API Google Ads (campagnes et conversions)" },
  anthropic: { label: "Anthropic", sub: "Assistant « Une question ? » et robot du blogue" },
  stripe: { label: "Stripe", sub: "Paiements en ligne" },
  gemini: { label: "Gemini", sub: "ThermoScan (lecture des plaques signalétiques)" },
  elevenlabs: { label: "ElevenLabs", sub: "Voix du répondeur téléphonique" },
  avis: { label: "Avis Google", sub: "Lien « Laisser un avis »" },
  sauvegardes: { label: "Sauvegardes", sub: "Destination S3 et clé de chiffrement" },
};

export interface KeySpec {
  name: string;
  group: KeyGroup;
  label: string;
  /** Format attendu, en mots (jamais un exemple de vraie clé). */
  hint: string;
  check: (v: string) => boolean;
  /** Normalisation avant écriture (ex. numéro de client Google Ads sans tirets). */
  normalize?: (v: string) => string;
  /** « build » : prise en compte au prochain déploiement seulement. */
  applies?: "reload" | "build";
}

const re = (r: RegExp) => (v: string) => r.test(v);
const httpsUrl = (hosts: RegExp) => (v: string) => {
  try {
    const u = new URL(v);
    return u.protocol === "https:" && hosts.test(u.hostname) && v.length <= 400;
  } catch {
    return false;
  }
};
const digits = (v: string) => v.replace(/[\s-]/g, "");

export const KEY_SPECS: KeySpec[] = [
  { name: "META_PAGE_ID", group: "meta", label: "Identifiant de la page Facebook", hint: "chiffres seulement", check: re(/^\d{5,20}$/) },
  { name: "META_PAGE_TOKEN", group: "meta", label: "Jeton de la page (longue durée)", hint: "commence par EAA", check: re(/^EAA[A-Za-z0-9]{40,600}$/) },
  { name: "META_IG_USER_ID", group: "meta", label: "Identifiant du compte Instagram professionnel", hint: "chiffres seulement", check: re(/^\d{5,20}$/) },

  { name: "GOOGLE_ADS_DEVELOPER_TOKEN", group: "google-ads", label: "Jeton de développeur", hint: "22 caractères environ", check: re(/^[A-Za-z0-9_-]{16,40}$/) },
  { name: "GOOGLE_ADS_CLIENT_ID", group: "google-ads", label: "ID client OAuth", hint: "se termine par .apps.googleusercontent.com", check: re(/^\d{6,20}-[a-z0-9]{10,64}\.apps\.googleusercontent\.com$/) },
  { name: "GOOGLE_ADS_CLIENT_SECRET", group: "google-ads", label: "Code secret du client OAuth", hint: "commence par GOCSPX-", check: re(/^GOCSPX-[A-Za-z0-9_-]{16,64}$/) },
  { name: "GOOGLE_ADS_REFRESH_TOKEN", group: "google-ads", label: "Jeton d’actualisation", hint: "commence par 1//", check: re(/^1\/\/[A-Za-z0-9_-]{20,400}$/) },
  { name: "GOOGLE_ADS_CUSTOMER_ID", group: "google-ads", label: "Numéro de client Google Ads", hint: "10 chiffres (123-456-7890)", check: (v) => /^\d{10}$/.test(digits(v)), normalize: digits },
  { name: "GOOGLE_ADS_LOGIN_CUSTOMER_ID", group: "google-ads", label: "Numéro du compte gestionnaire (facultatif)", hint: "10 chiffres", check: (v) => /^\d{10}$/.test(digits(v)), normalize: digits },

  { name: "ANTHROPIC_API_KEY", group: "anthropic", label: "Clé d’API Anthropic", hint: "commence par sk-ant-", check: re(/^sk-ant-[A-Za-z0-9_-]{20,300}$/), applies: "build" },

  { name: "STRIPE_SECRET_KEY", group: "stripe", label: "Clé secrète (ou restreinte)", hint: "commence par sk_live_, rk_live_ (ou _test_)", check: re(/^(sk|rk)_(live|test)_[A-Za-z0-9]{16,300}$/) },
  { name: "STRIPE_WEBHOOK_SECRET", group: "stripe", label: "Secret de signature du webhook", hint: "commence par whsec_", check: re(/^whsec_[A-Za-z0-9+/=]{16,300}$/) },

  { name: "GEMINI_API_KEY", group: "gemini", label: "Clé d’API Gemini", hint: "commence par AIza (39 caractères)", check: re(/^AIza[0-9A-Za-z_-]{35}$/) },

  { name: "ELEVENLABS_API_KEY", group: "elevenlabs", label: "Clé d’API ElevenLabs", hint: "commence par sk_ (ou 32 caractères hexadécimaux)", check: re(/^(sk_[a-f0-9]{32,80}|[a-f0-9]{32})$/) },

  { name: "GOOGLE_REVIEW_URL", group: "avis", label: "Lien « Laisser un avis »", hint: "adresse https de Google (g.page, search.google.com…)", check: httpsUrl(/^(g\.page|search\.google\.com|www\.google\.com|google\.com|maps\.app\.goo\.gl|g\.co)$/) },

  { name: "BACKUP_ENCRYPTION_KEY", group: "sauvegardes", label: "Clé de chiffrement des sauvegardes", hint: "64 caractères hexadécimaux (gardez-en une copie hors du serveur)", check: isValidBackupKey },
  { name: "BACKUP_S3_ENDPOINT", group: "sauvegardes", label: "Adresse S3 (endpoint)", hint: "https://s3.<région>.backblazeb2.com, https://s3.wasabisys.com…", check: httpsUrl(/^[a-z0-9.-]+\.[a-z]{2,}$/), normalize: (v) => v.replace(/\/+$/, "") },
  { name: "BACKUP_S3_BUCKET", group: "sauvegardes", label: "Compartiment (bucket)", hint: "lettres, chiffres, tirets", check: re(/^[A-Za-z0-9][A-Za-z0-9.-]{1,61}[A-Za-z0-9]$/) },
  { name: "BACKUP_S3_KEY_ID", group: "sauvegardes", label: "Identifiant de la clé d’accès", hint: "keyID / Access Key ID", check: re(/^[A-Za-z0-9]{10,128}$/) },
  { name: "BACKUP_S3_SECRET", group: "sauvegardes", label: "Clé d’accès secrète", hint: "applicationKey / Secret Access Key", check: re(/^[A-Za-z0-9+/=_-]{20,128}$/) },
  { name: "BACKUP_S3_REGION", group: "sauvegardes", label: "Région", hint: "ex. us-east-005, ca-central-1", check: re(/^[a-z]{2,}(-[a-z0-9]+){1,4}$/) },
];

const SPEC = new Map(KEY_SPECS.map((s) => [s.name, s]));
export const isAllowedKey = (name: string) => SPEC.has(name);

/** Refus général : blancs, guillemets, $, \ (dotenv et shell), longueur. */
const BASIC = /^[^\s'"`$\\]{1,600}$/;

export function validateKeyValue(name: string, raw: string): { ok: true; value: string } | { ok: false; error: string } {
  const spec = SPEC.get(name);
  if (!spec) return { ok: false, error: "Cette variable ne peut pas être modifiée ici." };
  const trimmed = String(raw ?? "").trim();
  if (!trimmed) return { ok: false, error: "La valeur est vide." };
  if (!BASIC.test(trimmed)) return { ok: false, error: "Caractères refusés (espaces, guillemets, $ ou \\)." };
  const value = spec.normalize ? spec.normalize(trimmed) : trimmed;
  if (!spec.check(value)) return { ok: false, error: `Format inattendu : ${spec.hint}.` };
  return { ok: true, value };
}

export interface KeyStatus {
  name: string;
  group: KeyGroup;
  label: string;
  hint: string;
  applies: "reload" | "build";
  /** Présente dans le fichier .env. */
  defined: boolean;
  /** Le site en marche l'utilise déjà (identique au fichier). */
  pendingRestart: boolean;
}

/** État de chaque clé : jamais la valeur, ni un extrait, ni sa longueur. */
export async function keyStatuses(opts: { target?: EnvTarget; env?: NodeJS.ProcessEnv } = {}): Promise<KeyStatus[]> {
  const env = opts.env ?? process.env;
  const values = await readEnvValues(opts.target);
  return KEY_SPECS.map((s) => {
    const file = values.get(s.name) ?? "";
    const running = env[s.name] ?? "";
    return { name: s.name, group: s.group, label: s.label, hint: s.hint, applies: s.applies ?? "reload", defined: file.length > 0, pendingRestart: file !== running };
  });
}

export type SetKeyResult = { ok: true; message: string; restart: "planifie" | "hors-production" | "aucun" } | { ok: false; error: string };

/** Enregistre (value) ou retire (null) une clé. Audit sans la valeur. */
export async function setKey(name: string, raw: string | null, opts: { by: string; ip?: string; target?: EnvTarget; spawner?: Spawner; now?: Date } ): Promise<SetKeyResult> {
  if (!isAllowedKey(name)) return { ok: false, error: "Cette variable ne peut pas être modifiée ici." };
  let value: string | null = null;
  if (raw !== null) {
    const v = validateKeyValue(name, raw);
    if (!v.ok) return v;
    value = v.value;
  }
  let target: EnvTarget;
  try {
    target = opts.target ?? (await resolveEnvTarget());
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
  try {
    const r = await writeEnvVar(name, value, { target, now: opts.now });
    if (!r.changed) return { ok: true, message: value === null ? "Cette clé n’était pas définie." : "Cette valeur est déjà enregistrée.", restart: "aucun" };
  } catch (e) {
    console.error("[clés] écriture impossible :", (e as Error)?.message);
    return { ok: false, error: (e as Error)?.name === "EnvTargetRefused" ? (e as Error).message : "Écriture impossible. Rien n’a été modifié." };
  }
  await audit(value === null ? "cle.retiree" : "cle.modifiee", { variable: name, fichier: target.mode }, { qui: opts.by, ip: opts.ip ?? null, now: opts.now });
  const restart = target.mode === "production" ? scheduleReload(opts.spawner) : "hors-production";
  const spec = SPEC.get(name)!;
  const base = value === null ? "Clé retirée." : "Clé enregistrée.";
  const message =
    restart === "planifie"
      ? `${base} Le site redémarre (quelques secondes).${spec.applies === "build" ? " Cette clé sera pleinement active après le prochain déploiement." : ""}`
      : `${base} Fichier d’essai seulement (développement) : aucun redémarrage.`;
  return { ok: true, message, restart };
}
