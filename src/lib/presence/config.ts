/* ==================================================================
   Connexion Meta et mode de publication.

   Variables (shared/.env sur le VPS, jamais dans le dépôt ni dans une
   conversation) :
     META_PAGE_ID          identifiant de la page Facebook
     META_PAGE_TOKEN       jeton de page longue durée (pages_manage_posts,
                           pages_read_engagement, instagram_basic,
                           instagram_content_publish)
     META_IG_USER_ID       identifiant du compte Instagram professionnel
                           relié à la page
     META_GRAPH_VERSION    version de l'API Graph (défaut : v24.0)

   Publication RÉELLE seulement si : NODE_ENV=production, jetons
   présents et interrupteur « Publication automatique » activé.
   Sinon : mode essai, qui montre ce qui serait envoyé (aucun appel).
   ================================================================== */

import type { Network, PresenceSettings } from "./types";

/** Version par défaut de l'API Graph ; modifiable par META_GRAPH_VERSION (ex. v25.0). */
export const DEFAULT_GRAPH_VERSION = "v24.0";
const VERSION_RE = /^v\d{1,2}\.\d$/;

type Env = Record<string, string | undefined>;

export interface MetaEnv {
  pageId: string | null;
  pageToken: string | null;
  igUserId: string | null;
  graphVersion: string;
}

const clean = (v: string | undefined) => {
  const t = v?.trim();
  return t ? t : null;
};

export function metaEnv(env: Env = process.env): MetaEnv {
  const v = clean(env.META_GRAPH_VERSION);
  return {
    pageId: clean(env.META_PAGE_ID),
    pageToken: clean(env.META_PAGE_TOKEN),
    igUserId: clean(env.META_IG_USER_ID),
    graphVersion: v && VERSION_RE.test(v) ? v : DEFAULT_GRAPH_VERSION,
  };
}

export interface MetaStatus {
  facebook: boolean;
  instagram: boolean;
  /** Noms des variables manquantes (jamais leur valeur). */
  missing: string[];
  graphVersion: string;
  graphVersionFromEnv: boolean;
}

/** État de la connexion, sans jamais exposer un jeton ou un identifiant. */
export function metaStatus(env: Env = process.env): MetaStatus {
  const m = metaEnv(env);
  const missing: string[] = [];
  if (!m.pageId) missing.push("META_PAGE_ID");
  if (!m.pageToken) missing.push("META_PAGE_TOKEN");
  if (!m.igUserId) missing.push("META_IG_USER_ID");
  return {
    facebook: !!(m.pageId && m.pageToken),
    instagram: !!(m.igUserId && m.pageToken),
    missing,
    graphVersion: m.graphVersion,
    graphVersionFromEnv: !!clean(env.META_GRAPH_VERSION) && m.graphVersion === clean(env.META_GRAPH_VERSION),
  };
}

export interface PublishMode {
  real: boolean;
  /** Pourquoi on reste en mode essai (vide si publication réelle). */
  reasons: string[];
  networks: Record<Network, boolean>;
}

export function publishMode(settings: Pick<PresenceSettings, "autoPublish">, env: Env = process.env): PublishMode {
  const s = metaStatus(env);
  const reasons: string[] = [];
  if (env.NODE_ENV !== "production") reasons.push("Serveur de développement ou de test : aucune publication réelle.");
  if (!settings.autoPublish) reasons.push("Interrupteur « Publication automatique » éteint.");
  if (!s.facebook && !s.instagram) reasons.push(`Connexion Meta incomplète : ${s.missing.join(", ")}.`);
  return { real: reasons.length === 0, reasons, networks: { facebook: s.facebook, instagram: s.instagram } };
}
