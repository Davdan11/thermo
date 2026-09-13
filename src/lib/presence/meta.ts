/* ==================================================================
   Client de l'API Graph de Meta (fetch direct, aucune dépendance).

   Facebook (page) :
   - une image : POST /{page}/photos (url, message, published=true) ;
   - plusieurs : POST /{page}/photos (url, published=false) pour chaque
     image, puis POST /{page}/feed (message, attached_media[i]).
   Instagram (compte professionnel) :
   - carrousel : POST /{ig}/media (image_url, is_carousel_item=true) par
     image, POST /{ig}/media (media_type=CAROUSEL, children, caption),
     attente de status_code=FINISHED, puis POST /{ig}/media_publish ;
   - une image : conteneur simple (image_url, caption), même suite ;
   - story : POST /{ig}/media (image_url, media_type=STORIES), attente,
     media_publish.

   Idempotence : chaque identifiant distant est enregistré dès qu'il est
   connu (save). Une étape qui publie n'est jamais relancée à l'aveugle
   quand son issue est inconnue (réseau coupé, erreur 5xx) : on vérifie
   d'abord sur Meta (message qui contient utm_content=<id> sur Facebook,
   légende identique ou conteneur « PUBLISHED » sur Instagram).
   Les jetons ne sont jamais écrits dans un message d'erreur ni un journal.
   ================================================================== */

import type { DryRequest, FacebookState, InstagramState, Network } from "./types";
import type { MetaEnv } from "./config";

export type FetchLike = (url: string, init: RequestInit) => Promise<Response>;

export type MetaErrorKind = "permanent" | "transient" | "inconnu";

export class MetaError extends Error {
  readonly kind: MetaErrorKind;
  readonly code?: number;
  readonly subcode?: number;
  readonly status?: number;
  constructor(message: string, opts: { kind: MetaErrorKind; code?: number; subcode?: number; status?: number }) {
    super(message);
    this.name = "MetaError";
    this.kind = opts.kind;
    this.code = opts.code;
    this.subcode = opts.subcode;
    this.status = opts.status;
  }
}

const RATE_LIMIT_CODES = new Set([4, 17, 32, 613]);

/** Retire tout ce qui ressemble à un jeton d'un texte venu de Meta. */
export function scrub(text: string): string {
  return text
    .replace(/access_token=[^&\s"]+/gi, "access_token=***")
    .replace(/\bEA[A-Za-z0-9]{20,}\b/g, "***")
    .slice(0, 300);
}

interface GraphErrorBody {
  error?: { message?: string; type?: string; code?: number; error_subcode?: number; is_transient?: boolean; error_user_msg?: string };
}

/** Erreur Meta → message clair en français et nature (permanente, temporaire, issue inconnue). */
export function translateError(status: number, body: GraphErrorBody | null): MetaError {
  const e = body?.error ?? {};
  const code = e.code;
  const sub = e.error_subcode;
  const detail = scrub(e.error_user_msg || e.message || "");
  const tail = detail ? ` (Meta : ${detail})` : "";
  const make = (msg: string, kind: MetaErrorKind) => new MetaError(msg, { kind, code, subcode: sub, status });

  if (code === 190) return make("Jeton Meta expiré ou invalide : générez un nouveau jeton de page longue durée et collez-le dans shared/.env (META_PAGE_TOKEN), puis relancez le site.", "permanent");
  if (code === 10 || (typeof code === "number" && code >= 200 && code < 300))
    return make(`Permission manquante chez Meta (pages_manage_posts, pages_read_engagement, instagram_basic, instagram_content_publish) : revoyez les autorisations de l’application.${tail}`, "permanent");
  if (typeof code === "number" && (RATE_LIMIT_CODES.has(code) || (code >= 80001 && code <= 80014))) return make("Limite de requêtes de Meta atteinte : nouvel essai automatique plus tard.", "transient");
  if (code === 9004 || sub === 2207052) return make("Instagram n’a pas pu télécharger l’image : vérifiez que le site est en ligne et que les adresses des visuels répondent.", "transient");
  if (code === 9007 || sub === 2207027) return make("Instagram prépare encore le média : nouvel essai dans quelques minutes.", "transient");
  if (code === 368) return make(`Meta a bloqué la publication (règles de la plateforme).${tail}`, "permanent");
  if (code === 506) return make("Facebook refuse une publication identique à une publication récente.", "permanent");
  if (code === 1 || code === 2 || e.is_transient) return make(`Erreur temporaire de Meta : nouvel essai automatique.${tail}`, "transient");
  if (status >= 500) return make(`Meta répond par une erreur ${status} : l’issue est vérifiée avant tout nouvel essai.`, "inconnu");
  if (code === 100) return make(`Paramètre refusé par Meta.${tail}`, "permanent");
  return make(`Meta a refusé la demande${status ? ` (HTTP ${status})` : ""}.${tail}`, "permanent");
}

export interface GraphDeps {
  fetch: FetchLike;
  sleep: (ms: number) => Promise<void>;
  /** Délais entre les essais d'une même requête (défaut : 2 s puis 6 s). */
  retryDelays?: number[];
  /** Attente du statut FINISHED d'un conteneur Instagram. */
  pollIntervalMs?: number;
  pollMaxMs?: number;
  timeoutMs?: number;
  now?: () => Date;
}

export class GraphClient {
  constructor(
    private readonly version: string,
    private readonly token: string,
    private readonly deps: GraphDeps,
  ) {}

  private url(path: string): string {
    return `https://graph.facebook.com/${this.version}/${path.replace(/^\//, "")}`;
  }

  private async call(method: "GET" | "POST", path: string, params: Record<string, string>): Promise<Record<string, unknown>> {
    const body = new URLSearchParams({ ...params, access_token: this.token });
    let res: Response;
    try {
      const signal = typeof AbortSignal !== "undefined" && "timeout" in AbortSignal ? AbortSignal.timeout(this.deps.timeoutMs ?? 30_000) : undefined;
      res =
        method === "GET"
          ? await this.deps.fetch(`${this.url(path)}?${body.toString()}`, { method, signal })
          : await this.deps.fetch(this.url(path), { method, body, headers: { "Content-Type": "application/x-www-form-urlencoded" }, signal });
    } catch {
      throw new MetaError("Meta ne répond pas (réseau ou délai dépassé) : l’issue est vérifiée avant tout nouvel essai.", { kind: "inconnu" });
    }
    let json: (Record<string, unknown> & GraphErrorBody) | null = null;
    try {
      json = (await res.json()) as Record<string, unknown> & GraphErrorBody;
    } catch {
      json = null;
    }
    if (!res.ok || !json || json.error) throw translateError(res.status, json);
    return json;
  }

  /** `safe` : la requête peut être rejouée même si son issue est inconnue (lecture, élément non publié). */
  async request(method: "GET" | "POST", path: string, params: Record<string, string>, safe: boolean): Promise<Record<string, unknown>> {
    const delays = this.deps.retryDelays ?? [2000, 6000];
    for (let attempt = 0; ; attempt++) {
      try {
        return await this.call(method, path, params);
      } catch (err) {
        const e = err as MetaError;
        const retryable = e instanceof MetaError && (e.kind === "transient" || (safe && e.kind === "inconnu"));
        if (!retryable || attempt >= delays.length) throw err;
        await this.deps.sleep(delays[attempt]);
      }
    }
  }

  get(path: string, params: Record<string, string> = {}) {
    return this.request("GET", path, params, true);
  }
  post(path: string, params: Record<string, string>, safe: boolean) {
    return this.request("POST", path, params, safe);
  }
}

const idOf = (r: Record<string, unknown>, key = "id"): string => {
  const v = r[key];
  if (typeof v !== "string" && typeof v !== "number") throw new MetaError("Réponse de Meta sans identifiant.", { kind: "inconnu" });
  return String(v);
};

export interface PublishInput {
  postId: string;
  /** Texte unique présent dans la légende Facebook (utm_content=<id>) : vérification sans doublon. */
  marker: string;
  facebookCaption: string;
  instagramCaption: string;
  /** Adresses publiques absolues des diapositives (1080 × 1350). */
  images: string[];
  /** Adresse publique de la story (1080 × 1920), si elle doit partir. */
  storyImage: string | null;
}

export interface NetworkDeps extends GraphDeps {
  env: MetaEnv;
  /** Enregistre l'état intermédiaire (identifiants distants) dans le magasin. */
  save: (network: Network, state: FacebookState | InstagramState) => Promise<void>;
}

function client(deps: NetworkDeps): GraphClient {
  if (!deps.env.pageToken) throw new MetaError("META_PAGE_TOKEN manquant.", { kind: "permanent" });
  return new GraphClient(deps.env.graphVersion, deps.env.pageToken, deps);
}

const nowIso = (deps: GraphDeps) => (deps.now ? deps.now() : new Date()).toISOString();

async function findFacebookPost(g: GraphClient, pageId: string, marker: string): Promise<string | null> {
  const r = await g.get(`${pageId}/posts`, { fields: "id,message", limit: "25" });
  const list = Array.isArray(r.data) ? (r.data as Array<{ id?: string; message?: string }>) : [];
  return list.find((p) => typeof p.message === "string" && p.message.includes(marker))?.id ?? null;
}

export async function publishFacebook(input: PublishInput, initial: FacebookState, deps: NetworkDeps): Promise<FacebookState> {
  let st: FacebookState = { ...initial };
  if (st.postId) return st;
  const pageId = deps.env.pageId;
  if (!pageId) throw new MetaError("META_PAGE_ID manquant.", { kind: "permanent" });
  const g = client(deps);

  if (st.pendingVerify) {
    const found = await findFacebookPost(g, pageId, input.marker);
    st = { ...st, pendingVerify: false, ...(found ? { postId: found, at: nowIso(deps) } : {}) };
    await deps.save("facebook", st);
    if (found) return st;
  }

  const publish = async (path: string, params: Record<string, string>, key: string) => {
    try {
      const r = await g.post(path, params, false);
      return idOf(r, key in r ? key : "id");
    } catch (err) {
      if (err instanceof MetaError && err.kind === "inconnu") await deps.save("facebook", { ...st, pendingVerify: true });
      throw err;
    }
  };

  if (input.images.length === 1) {
    const id = await publish(`${pageId}/photos`, { url: input.images[0], message: input.facebookCaption, published: "true" }, "post_id");
    st = { ...st, postId: id, at: nowIso(deps) };
  } else {
    const ids = [...(st.photoIds ?? [])].slice(0, input.images.length);
    for (let i = ids.length; i < input.images.length; i++) {
      const r = await g.post(`${pageId}/photos`, { url: input.images[i], published: "false" }, true);
      ids.push(idOf(r));
      st = { ...st, photoIds: [...ids] };
      await deps.save("facebook", st);
    }
    const params: Record<string, string> = { message: input.facebookCaption };
    ids.forEach((id, i) => {
      params[`attached_media[${i}]`] = JSON.stringify({ media_fbid: id });
    });
    const id = await publish(`${pageId}/feed`, params, "id");
    st = { ...st, postId: id, at: nowIso(deps) };
  }
  await deps.save("facebook", st);
  return st;
}

/** Attend FINISHED. Renvoie "published" si le conteneur a déjà été publié (réponse perdue lors d'un passage précédent). */
async function waitFinished(g: GraphClient, containerId: string, deps: GraphDeps): Promise<"finished" | "published"> {
  const interval = deps.pollIntervalMs ?? 3000;
  const max = deps.pollMaxMs ?? 60_000;
  for (let waited = 0; ; waited += interval) {
    const r = await g.get(containerId, { fields: "status_code,status" });
    const code = String(r.status_code ?? "");
    if (code === "FINISHED") return "finished";
    if (code === "PUBLISHED") return "published";
    if (code === "ERROR") throw new MetaError(`Instagram a refusé le visuel${r.status ? ` (${scrub(String(r.status))})` : ""}.`, { kind: "permanent" });
    if (code === "EXPIRED") throw new MetaError("Le conteneur Instagram a expiré (24 h) : il sera recréé au prochain essai.", { kind: "transient", code: -1 });
    if (waited >= max) throw new MetaError("Instagram prépare encore la publication : nouvel essai automatique plus tard.", { kind: "transient" });
    await deps.sleep(interval);
  }
}

async function findInstagramMedia(g: GraphClient, igUserId: string, caption: string): Promise<string | null> {
  const r = await g.get(`${igUserId}/media`, { fields: "id,caption", limit: "25" });
  const list = Array.isArray(r.data) ? (r.data as Array<{ id?: string; caption?: string }>) : [];
  const want = caption.trim();
  return list.find((m) => typeof m.caption === "string" && m.caption.trim() === want)?.id ?? null;
}

export async function publishInstagram(input: PublishInput, initial: InstagramState, deps: NetworkDeps): Promise<InstagramState> {
  let st: InstagramState = { ...initial };
  const ig = deps.env.igUserId;
  if (!ig) throw new MetaError("META_IG_USER_ID manquant.", { kind: "permanent" });
  const g = client(deps);
  const save = () => deps.save("instagram", st);

  /* ---- Carrousel (ou image seule) ---- */
  if (!st.mediaId) {
    if (st.pendingVerify) {
      const found = await findInstagramMedia(g, ig, input.instagramCaption);
      st = { ...st, pendingVerify: false, ...(found ? { mediaId: found, at: nowIso(deps) } : {}) };
      await save();
    }
  }
  if (!st.mediaId) {
    if (!st.containerId) {
      if (input.images.length === 1) {
        st = { ...st, containerId: idOf(await g.post(`${ig}/media`, { image_url: input.images[0], caption: input.instagramCaption }, true)) };
      } else {
        const children = [...(st.childIds ?? [])].slice(0, input.images.length);
        for (let i = children.length; i < input.images.length; i++) {
          children.push(idOf(await g.post(`${ig}/media`, { image_url: input.images[i], is_carousel_item: "true" }, true)));
          st = { ...st, childIds: [...children] };
          await save();
        }
        st = { ...st, containerId: idOf(await g.post(`${ig}/media`, { media_type: "CAROUSEL", children: children.join(","), caption: input.instagramCaption }, true)) };
      }
      await save();
    }
    let state: "finished" | "published";
    try {
      state = await waitFinished(g, st.containerId as string, deps);
    } catch (err) {
      if (err instanceof MetaError && err.code === -1) {
        // Conteneur expiré : on repart de zéro au prochain essai (rien n'a été publié).
        st = { ...st, containerId: undefined, childIds: undefined };
        await save();
      }
      throw err;
    }
    if (state === "published") {
      const found = await findInstagramMedia(g, ig, input.instagramCaption);
      if (!found) throw new MetaError("Instagram indique que le carrousel est déjà publié, mais la publication est introuvable : vérifiez le compte.", { kind: "permanent" });
      st = { ...st, mediaId: found, at: nowIso(deps) };
    } else {
      try {
        st = { ...st, mediaId: idOf(await g.post(`${ig}/media_publish`, { creation_id: st.containerId as string }, false)), at: nowIso(deps) };
      } catch (err) {
        if (err instanceof MetaError && err.kind === "inconnu") {
          st = { ...st, pendingVerify: true };
          await save();
        }
        throw err;
      }
    }
    await save();
  }

  /* ---- Story ---- */
  if (input.storyImage && !st.storyMediaId) {
    if (!st.storyContainerId) {
      st = { ...st, storyContainerId: idOf(await g.post(`${ig}/media`, { image_url: input.storyImage, media_type: "STORIES" }, true)) };
      await save();
    }
    let state: "finished" | "published";
    try {
      state = await waitFinished(g, st.storyContainerId as string, deps);
    } catch (err) {
      if (err instanceof MetaError && err.code === -1) {
        st = { ...st, storyContainerId: undefined };
        await save();
      }
      throw err;
    }
    if (state === "published") {
      // La réponse d'un passage précédent a été perdue : la story est déjà en ligne.
      st = { ...st, storyMediaId: `publiee:${st.storyContainerId}`, storyPendingVerify: false };
    } else {
      try {
        st = { ...st, storyMediaId: idOf(await g.post(`${ig}/media_publish`, { creation_id: st.storyContainerId as string }, false)), storyPendingVerify: false };
      } catch (err) {
        if (err instanceof MetaError && err.kind === "inconnu") {
          st = { ...st, storyPendingVerify: true };
          await save();
        }
        throw err;
      }
    }
    await save();
  }
  return st;
}

/** Mode essai : les requêtes qui partiraient, sans jeton. */
export function dryRunRequests(input: PublishInput, env: MetaEnv, networks: Record<Network, boolean>): DryRequest[] {
  const out: DryRequest[] = [];
  const page = env.pageId ? "{META_PAGE_ID}" : "{META_PAGE_ID manquant}";
  const ig = env.igUserId ? "{META_IG_USER_ID}" : "{META_IG_USER_ID manquant}";
  const v = env.graphVersion;
  if (networks.facebook || !networks.instagram) {
    if (input.images.length === 1) {
      out.push({ network: "facebook", method: "POST", path: `/${v}/${page}/photos`, params: { url: input.images[0], message: input.facebookCaption, published: "true" } });
    } else {
      input.images.forEach((url) => out.push({ network: "facebook", method: "POST", path: `/${v}/${page}/photos`, params: { url, published: "false" } }));
      const params: Record<string, string> = { message: input.facebookCaption };
      input.images.forEach((_, i) => {
        params[`attached_media[${i}]`] = `{"media_fbid":"<photo ${i + 1}>"}`;
      });
      out.push({ network: "facebook", method: "POST", path: `/${v}/${page}/feed`, params });
    }
  }
  if (networks.instagram || !networks.facebook) {
    if (input.images.length === 1) {
      out.push({ network: "instagram", method: "POST", path: `/${v}/${ig}/media`, params: { image_url: input.images[0], caption: input.instagramCaption } });
    } else {
      input.images.forEach((url) => out.push({ network: "instagram", method: "POST", path: `/${v}/${ig}/media`, params: { image_url: url, is_carousel_item: "true" } }));
      out.push({ network: "instagram", method: "POST", path: `/${v}/${ig}/media`, params: { media_type: "CAROUSEL", children: input.images.map((_, i) => `<élément ${i + 1}>`).join(","), caption: input.instagramCaption } });
    }
    out.push({ network: "instagram", method: "GET", path: `/${v}/<conteneur>`, params: { fields: "status_code" } });
    out.push({ network: "instagram", method: "POST", path: `/${v}/${ig}/media_publish`, params: { creation_id: "<conteneur>" } });
    if (input.storyImage) {
      out.push({ network: "instagram", method: "POST", path: `/${v}/${ig}/media`, params: { image_url: input.storyImage, media_type: "STORIES" } });
      out.push({ network: "instagram", method: "POST", path: `/${v}/${ig}/media_publish`, params: { creation_id: "<conteneur story>" } });
    }
  }
  return out;
}
