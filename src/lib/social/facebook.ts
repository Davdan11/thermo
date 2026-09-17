/* ==================================================================
   Client de l'API Graph de Facebook (fetch direct, aucune dépendance).
   Facebook seulement : page, publications photo et stories photo.

   - Publication : POST /{page}/photos (multipart : source = PNG,
     message = légende, published = true) → { id, post_id }.
   - Story, en deux appels (comme le robot de SolutionNetPlus) :
     1. POST /{page}/photos (source = PNG, published = false) → { id } ;
     2. POST /{page}/photo_stories (photo_id) → { success, post_id }.
   - Connexion : GET /me (nom de la page) et GET /debug_token (validité,
     expiration, permissions).

   Le jeton de page part dans l'en-tête Authorization, jamais dans
   l'adresse d'une requête d'écriture. Seule exception imposée par Meta :
   /debug_token exige le jeton inspecté en paramètre input_token (lecture
   seulement, requête serveur à serveur) ; cette adresse n'est jamais
   écrite dans un message ni un journal. Tout texte venu de Meta passe
   par scrub() avant d'être gardé.

   Idempotence : chaque identifiant est enregistré dès qu'il est connu
   (save). L'étape qui publie n'est jamais rejouée à l'aveugle quand son
   issue est inconnue (réseau coupé, erreur 5xx) : on vérifie d'abord sur
   Facebook (publication dont le message contient utm_content=<id>,
   story dont media_id est la photo envoyée).
   ================================================================== */

export type FetchLike = (url: string, init: RequestInit) => Promise<Response>;

/** Version stable récente (juillet 2026 : v26.0 vient de sortir, v25.0 est éprouvée) ; META_GRAPH_VERSION l'emporte. */
export const VERSION_GRAPH_DEFAUT = "v25.0";
const VERSION_RE = /^v\d{1,2}\.\d$/;

type Env = Record<string, string | undefined>;

export interface ConfigFacebook {
  pageId: string | null;
  jeton: string | null;
  version: string;
}

const propre = (v: string | undefined) => {
  const t = v?.trim();
  return t ? t : null;
};

/** Variables de shared/.env : META_PAGE_ID, META_PAGE_TOKEN, META_GRAPH_VERSION (facultative). */
export function configFacebook(env: Env = process.env): ConfigFacebook {
  const v = propre(env.META_GRAPH_VERSION);
  return { pageId: propre(env.META_PAGE_ID), jeton: propre(env.META_PAGE_TOKEN), version: v && VERSION_RE.test(v) ? v : VERSION_GRAPH_DEFAUT };
}

export type NatureErreur = "permanente" | "passagere" | "inconnue";

export class ErreurFacebook extends Error {
  readonly nature: NatureErreur;
  readonly code?: number;
  readonly statut?: number;
  constructor(message: string, o: { nature: NatureErreur; code?: number; statut?: number }) {
    super(message);
    this.name = "ErreurFacebook";
    this.nature = o.nature;
    this.code = o.code;
    this.statut = o.statut;
  }
}

/** Retire tout ce qui ressemble à un jeton d'un texte venu de Meta. */
export function scrub(texte: string): string {
  return texte
    .replace(/(access_token|input_token)=[^&\s"]+/gi, "$1=***")
    .replace(/Bearer\s+[A-Za-z0-9._-]+/gi, "Bearer ***")
    .replace(/\bEA[A-Za-z0-9]{20,}\b/g, "***")
    .slice(0, 300);
}

interface CorpsErreur {
  error?: { message?: string; code?: number; error_subcode?: number; is_transient?: boolean; error_user_msg?: string };
}

const LIMITES = new Set([4, 17, 32, 613]);

/** Erreur de Meta → message clair en français et nature (permanente, passagère, issue inconnue). */
export function traduireErreur(statut: number, corps: CorpsErreur | null): ErreurFacebook {
  const e = corps?.error ?? {};
  const code = e.code;
  const detail = scrub(e.error_user_msg || e.message || "");
  const suite = detail ? ` (Facebook : ${detail})` : "";
  const f = (message: string, nature: NatureErreur) => new ErreurFacebook(message, { nature, code, statut });
  if (code === 190) return f("Jeton de page expiré ou invalide : créez un nouveau jeton de page permanent, mettez-le dans shared/.env (META_PAGE_TOKEN), puis rechargez le site.", "permanente");
  if (code === 10 || (typeof code === "number" && code >= 200 && code < 300)) return f(`Permission manquante chez Facebook (pages_manage_posts, pages_read_engagement, pages_show_list) : revoyez les autorisations de l’application « Tav ».${suite}`, "permanente");
  if (typeof code === "number" && (LIMITES.has(code) || (code >= 80001 && code <= 80014))) return f("Limite de requêtes de Facebook atteinte : nouvel essai automatique plus tard.", "passagere");
  if (code === 368) return f(`Facebook a bloqué la publication (règles de la plateforme).${suite}`, "permanente");
  if (code === 506) return f("Facebook refuse une publication identique à une publication récente.", "permanente");
  if (code === 324 || code === 1366046) return f(`Facebook n’a pas accepté l’image.${suite}`, "permanente");
  if (code === 1 || code === 2 || e.is_transient) return f(`Erreur temporaire de Facebook : nouvel essai automatique.${suite}`, "passagere");
  if (statut >= 500) return f(`Facebook répond par une erreur ${statut} : l’issue est vérifiée avant tout nouvel essai.`, "inconnue");
  if (code === 100) return f(`Paramètre refusé par Facebook.${suite}`, "permanente");
  return f(`Facebook a refusé la demande${statut ? ` (HTTP ${statut})` : ""}.${suite}`, "permanente");
}

export interface DepsGraph {
  fetch: FetchLike;
  sleep: (ms: number) => Promise<void>;
  /** Délais entre les essais d'une même requête passagère (défaut : 2 s puis 6 s). */
  delais?: number[];
  delaiMs?: number;
}

export class Graph {
  constructor(
    private readonly config: ConfigFacebook & { jeton: string },
    private readonly deps: DepsGraph,
  ) {}

  private url(chemin: string, requete?: URLSearchParams): string {
    return `https://graph.facebook.com/${this.config.version}/${chemin.replace(/^\//, "")}${requete ? `?${requete.toString()}` : ""}`;
  }

  private async appel(methode: "GET" | "POST", chemin: string, o: { requete?: Record<string, string>; corps?: FormData | URLSearchParams }): Promise<Record<string, unknown>> {
    let res: Response;
    try {
      const signal = AbortSignal.timeout(this.deps.delaiMs ?? 60_000);
      res = await this.deps.fetch(this.url(chemin, o.requete ? new URLSearchParams(o.requete) : undefined), {
        method: methode,
        headers: { Authorization: `Bearer ${this.config.jeton}` },
        ...(o.corps ? { body: o.corps } : {}),
        signal,
      });
    } catch {
      throw new ErreurFacebook("Facebook ne répond pas (réseau ou délai dépassé) : l’issue est vérifiée avant tout nouvel essai.", { nature: "inconnue" });
    }
    let json: (Record<string, unknown> & CorpsErreur) | null = null;
    try {
      json = (await res.json()) as Record<string, unknown> & CorpsErreur;
    } catch {
      json = null;
    }
    if (!res.ok || !json || json.error) throw traduireErreur(res.status, json);
    return json;
  }

  /** `rejouable` : la requête peut être relancée même si son issue est inconnue (lecture, photo non publiée). */
  async requete(methode: "GET" | "POST", chemin: string, o: { requete?: Record<string, string>; corps?: () => FormData | URLSearchParams }, rejouable: boolean): Promise<Record<string, unknown>> {
    const delais = this.deps.delais ?? [2000, 6000];
    for (let essai = 0; ; essai++) {
      try {
        return await this.appel(methode, chemin, { requete: o.requete, corps: o.corps?.() });
      } catch (err) {
        const e = err as ErreurFacebook;
        const encore = e instanceof ErreurFacebook && (e.nature === "passagere" || (rejouable && e.nature === "inconnue"));
        if (!encore || essai >= delais.length) throw err;
        await this.deps.sleep(delais[essai]);
      }
    }
  }
}

const idDe = (r: Record<string, unknown>, cle = "id"): string => {
  const v = r[cle];
  if (typeof v !== "string" && typeof v !== "number") throw new ErreurFacebook("Réponse de Facebook sans identifiant.", { nature: "inconnue" });
  return String(v);
};

export interface EtatEnvoi {
  photoId?: string;
  postId?: string;
  lien?: string;
  aVerifier?: boolean;
}

export interface EntreeEnvoi {
  genre: "publication" | "story";
  png: Buffer;
  legende: string;
  /** Texte unique de la légende (utm_content=<id>) : vérification sans doublon. */
  marqueur: string;
}

export interface DepsEnvoi extends DepsGraph {
  config: ConfigFacebook;
  /** Enregistre l'état intermédiaire dans le magasin (sous verrou). */
  enregistrer: (etat: EtatEnvoi) => Promise<void>;
}

function graphe(deps: DepsEnvoi): { g: Graph; page: string } {
  const { pageId, jeton } = deps.config;
  if (!pageId) throw new ErreurFacebook("META_PAGE_ID manquant dans shared/.env.", { nature: "permanente" });
  if (!jeton) throw new ErreurFacebook("META_PAGE_TOKEN manquant dans shared/.env.", { nature: "permanente" });
  return { g: new Graph({ ...deps.config, jeton }, deps), page: pageId };
}

const lienPost = (postId: string) => `https://www.facebook.com/${postId}`;

function formulairePhoto(png: Buffer, champs: Record<string, string>): FormData {
  const f = new FormData();
  for (const [k, v] of Object.entries(champs)) f.append(k, v);
  f.append("source", new Blob([new Uint8Array(png)], { type: "image/png" }), "visuel.png");
  return f;
}

/** Publication du fil : une photo avec sa légende. */
export async function publierPublication(e: EntreeEnvoi, initial: EtatEnvoi, deps: DepsEnvoi): Promise<EtatEnvoi> {
  let st: EtatEnvoi = { ...initial };
  if (st.postId) return st;
  const { g, page } = graphe(deps);
  if (st.aVerifier) {
    const r = await g.requete("GET", `${page}/posts`, { requete: { fields: "id,message,permalink_url", limit: "25" } }, true);
    const liste = Array.isArray(r.data) ? (r.data as Array<{ id?: string; message?: string; permalink_url?: string }>) : [];
    const trouve = liste.find((p) => typeof p.message === "string" && p.message.includes(e.marqueur));
    st = { ...st, aVerifier: false, ...(trouve?.id ? { postId: trouve.id, lien: trouve.permalink_url ?? lienPost(trouve.id) } : {}) };
    await deps.enregistrer(st);
    if (st.postId) return st;
  }
  try {
    const r = await g.requete("POST", `${page}/photos`, { corps: () => formulairePhoto(e.png, { message: e.legende, published: "true" }) }, false);
    const postId = typeof r.post_id === "string" ? r.post_id : `${page}_${idDe(r)}`;
    st = { ...st, photoId: idDe(r), postId, lien: lienPost(postId) };
  } catch (err) {
    if (err instanceof ErreurFacebook && err.nature === "inconnue") await deps.enregistrer({ ...st, aVerifier: true });
    throw err;
  }
  await deps.enregistrer(st);
  return st;
}

/** Story : photo non publiée, puis photo_stories avec son identifiant. */
export async function publierStory(e: EntreeEnvoi, initial: EtatEnvoi, deps: DepsEnvoi): Promise<EtatEnvoi> {
  let st: EtatEnvoi = { ...initial };
  if (st.postId) return st;
  const { g, page } = graphe(deps);
  if (st.aVerifier && st.photoId) {
    const r = await g.requete("GET", `${page}/stories`, { requete: { fields: "post_id,media_id,url,status", limit: "25" } }, true);
    const liste = Array.isArray(r.data) ? (r.data as Array<{ post_id?: string; media_id?: string; url?: string }>) : [];
    const trouve = liste.find((s) => String(s.media_id ?? "") === st.photoId);
    st = { ...st, aVerifier: false, ...(trouve?.post_id ? { postId: trouve.post_id, lien: trouve.url ?? lienPost(trouve.post_id) } : {}) };
    await deps.enregistrer(st);
    if (st.postId) return st;
  }
  if (!st.photoId) {
    // Photo non publiée : rejouable sans risque (au pire une photo non publiée de plus, invisible).
    const r = await g.requete("POST", `${page}/photos`, { corps: () => formulairePhoto(e.png, { published: "false" }) }, true);
    st = { ...st, photoId: idDe(r) };
    await deps.enregistrer(st);
  }
  try {
    const r = await g.requete("POST", `${page}/photo_stories`, { corps: () => new URLSearchParams({ photo_id: st.photoId as string }) }, false);
    if (r.success === false) throw new ErreurFacebook("Facebook n’a pas publié la story.", { nature: "permanente" });
    const postId = typeof r.post_id === "string" ? r.post_id : idDe(r);
    st = { ...st, postId, lien: lienPost(postId) };
  } catch (err) {
    if (err instanceof ErreurFacebook && err.nature === "inconnue") await deps.enregistrer({ ...st, aVerifier: true });
    throw err;
  }
  await deps.enregistrer(st);
  return st;
}

/** Requêtes qui partiraient (mode essai), sans jeton ni image. */
export function requetesEssai(genre: "publication" | "story", legende: string, config: ConfigFacebook): Array<{ methode: "GET" | "POST"; chemin: string; champs: Record<string, string> }> {
  const page = config.pageId ? "{META_PAGE_ID}" : "{META_PAGE_ID manquant}";
  const v = config.version;
  if (genre === "publication") return [{ methode: "POST", chemin: `/${v}/${page}/photos`, champs: { source: "<PNG 1080 × 1350>", message: legende, published: "true" } }];
  return [
    { methode: "POST", chemin: `/${v}/${page}/photos`, champs: { source: "<PNG 1080 × 1920>", published: "false" } },
    { methode: "POST", chemin: `/${v}/${page}/photo_stories`, champs: { photo_id: "<identifiant de la photo>" } },
  ];
}

/* ------------------------------------------------------------------
   État de la connexion (page de gestion)
   ------------------------------------------------------------------ */

export interface EtatConnexion {
  configuree: boolean;
  manquantes: string[];
  version: string;
  pageNom?: string;
  /** L'identifiant de /me correspond à META_PAGE_ID. */
  pageConcorde?: boolean;
  jetonValide?: boolean;
  /** « jamais » ou date ISO. */
  expire?: string;
  type?: string;
  permissionsManquantes?: string[];
  erreur?: string;
  verifieLe?: string;
}

export const PERMISSIONS_REQUISES = ["pages_manage_posts", "pages_read_engagement", "pages_show_list"];

let cacheConnexion: { cle: string; le: number; etat: EtatConnexion } | null = null;

/** Lit /me et /debug_token (mis en cache 5 minutes). Jamais de jeton dans le résultat. */
export async function etatConnexion(env: Env = process.env, deps: Partial<DepsGraph> = {}, maintenant = Date.now()): Promise<EtatConnexion> {
  const config = configFacebook(env);
  const manquantes = [...(config.pageId ? [] : ["META_PAGE_ID"]), ...(config.jeton ? [] : ["META_PAGE_TOKEN"])];
  const base: EtatConnexion = { configuree: manquantes.length === 0, manquantes, version: config.version };
  if (!config.jeton || !config.pageId) return base;
  const cle = `${config.pageId}|${config.version}|${config.jeton.slice(-6)}`;
  if (cacheConnexion && cacheConnexion.cle === cle && maintenant - cacheConnexion.le < 5 * 60_000) return cacheConnexion.etat;
  const g = new Graph({ ...config, jeton: config.jeton }, { fetch: deps.fetch ?? ((u, i) => fetch(u, i)), sleep: deps.sleep ?? ((ms) => new Promise((r) => setTimeout(r, ms))), delais: [], delaiMs: 15_000 });
  const etat: EtatConnexion = { ...base, verifieLe: new Date(maintenant).toISOString() };
  try {
    const me = await g.requete("GET", "me", { requete: { fields: "id,name" } }, true);
    etat.pageNom = typeof me.name === "string" ? me.name : undefined;
    etat.pageConcorde = String(me.id ?? "") === config.pageId;
    const dbg = await g.requete("GET", "debug_token", { requete: { input_token: config.jeton } }, true);
    const d = (dbg.data ?? {}) as { is_valid?: boolean; expires_at?: number; type?: string; scopes?: string[] };
    etat.jetonValide = d.is_valid === true;
    etat.expire = !d.expires_at ? "jamais" : new Date(d.expires_at * 1000).toISOString();
    etat.type = d.type;
    etat.permissionsManquantes = PERMISSIONS_REQUISES.filter((p) => !(d.scopes ?? []).includes(p));
  } catch (err) {
    etat.erreur = err instanceof ErreurFacebook ? err.message : "Vérification impossible.";
    if (err instanceof ErreurFacebook && err.code === 190) etat.jetonValide = false;
  }
  cacheConnexion = { cle, le: maintenant, etat };
  return etat;
}
