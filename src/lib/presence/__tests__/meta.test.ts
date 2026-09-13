/* Client Graph avec fetch simulé : carrousel Facebook et Instagram, attente de FINISHED, story, erreurs lisibles,
   idempotence (reprise sans doublon). Aucun appel réseau réel. */
import { describe, expect, it, vi } from "vitest";
import { dryRunRequests, MetaError, publishFacebook, publishInstagram, translateError, type NetworkDeps, type PublishInput } from "../meta";
import type { FacebookState, InstagramState } from "../types";

const TOKEN = "EAAjetonfictifpourlestests1234567890";
const env = { pageId: "111", pageToken: TOKEN, igUserId: "222", graphVersion: "v24.0" };

interface Call {
  method: string;
  path: string;
  params: Record<string, string>;
}

type Handler = (c: Call) => { status?: number; json: unknown } | "reseau";

function fakeGraph(handler: Handler) {
  const calls: Call[] = [];
  const fetchImpl = vi.fn(async (url: string, init: RequestInit) => {
    const u = new URL(url);
    const params = Object.fromEntries((init.method === "GET" ? u.searchParams : new URLSearchParams(String(init.body))).entries());
    const call = { method: String(init.method), path: u.pathname.replace(/^\/v24\.0\//, ""), params };
    calls.push(call);
    const r = handler(call);
    if (r === "reseau") throw new TypeError("fetch failed");
    return new Response(JSON.stringify(r.json), { status: r.status ?? 200, headers: { "Content-Type": "application/json" } });
  });
  return { calls, fetchImpl };
}

function deps(fetchImpl: NetworkDeps["fetch"], saved: Array<{ network: string; state: unknown }> = []): NetworkDeps {
  return {
    fetch: fetchImpl,
    sleep: async () => undefined,
    env,
    save: async (network, state) => {
      saved.push({ network, state: structuredClone(state) });
    },
    retryDelays: [1, 1],
    pollIntervalMs: 1,
    pollMaxMs: 10,
    now: () => new Date("2026-09-14T15:30:00Z"),
  };
}

const input: PublishInput = {
  postId: "p-20260914-modele",
  marker: "utm_content=p-20260914-modele",
  facebookCaption: "Texte Facebook https://exemple.ca/produit/x?utm_content=p-20260914-modele",
  instagramCaption: "Texte Instagram. Lien dans la bio.",
  images: ["https://exemple.ca/v/0.png", "https://exemple.ca/v/1.png", "https://exemple.ca/v/2.png"],
  storyImage: "https://exemple.ca/v/story.png",
};

describe("Facebook", () => {
  it("carrousel : photos non publiées puis publication avec attached_media", async () => {
    let n = 0;
    const { calls, fetchImpl } = fakeGraph((c) => (c.path === "111/photos" ? { json: { id: `ph${++n}` } } : c.path === "111/feed" ? { json: { id: "111_999" } } : { status: 404, json: {} }));
    const saved: Array<{ network: string; state: unknown }> = [];
    const st = await publishFacebook(input, {}, deps(fetchImpl, saved));
    expect(st.postId).toBe("111_999");
    expect(calls.map((c) => c.path)).toEqual(["111/photos", "111/photos", "111/photos", "111/feed"]);
    expect(calls.slice(0, 3).every((c) => c.params.published === "false")).toBe(true);
    const feed = calls[3].params;
    expect(feed.message).toBe(input.facebookCaption);
    expect(JSON.parse(feed["attached_media[0]"])).toEqual({ media_fbid: "ph1" });
    expect(JSON.parse(feed["attached_media[2]"])).toEqual({ media_fbid: "ph3" });
    expect(calls.every((c) => c.params.access_token === TOKEN)).toBe(true);
    expect((saved.at(-1)?.state as FacebookState).postId).toBe("111_999");
  });

  it("une seule image : photo publiée directement", async () => {
    const { calls, fetchImpl } = fakeGraph(() => ({ json: { id: "ph1", post_id: "111_555" } }));
    const st = await publishFacebook({ ...input, images: [input.images[0]] }, {}, deps(fetchImpl));
    expect(st.postId).toBe("111_555");
    expect(calls).toHaveLength(1);
    expect(calls[0].params).toMatchObject({ published: "true", message: input.facebookCaption, url: input.images[0] });
  });

  it("reprise : les photos déjà envoyées ne sont pas renvoyées ; déjà publiée : aucun appel", async () => {
    const { calls, fetchImpl } = fakeGraph((c) => (c.path === "111/photos" ? { json: { id: "ph3" } } : { json: { id: "111_999" } }));
    await publishFacebook(input, { photoIds: ["ph1", "ph2"] }, deps(fetchImpl));
    expect(calls.map((c) => c.path)).toEqual(["111/photos", "111/feed"]);
    const again = fakeGraph(() => ({ json: {} }));
    await publishFacebook(input, { postId: "111_999" }, deps(again.fetchImpl));
    expect(again.calls).toHaveLength(0);
  });

  it("réseau coupé pendant la publication : pas de nouvel envoi à l’aveugle, vérification par le marqueur", async () => {
    const first = fakeGraph((c) => (c.path === "111/feed" ? "reseau" : { json: { id: "ph" } }));
    const saved: Array<{ network: string; state: unknown }> = [];
    const err = await publishFacebook(input, {}, deps(first.fetchImpl, saved)).catch((e) => e);
    expect(err).toBeInstanceOf(MetaError);
    expect((err as MetaError).kind).toBe("inconnu");
    expect(first.calls.filter((c) => c.path === "111/feed")).toHaveLength(1);
    const pending = saved.at(-1)!.state as FacebookState;
    expect(pending.pendingVerify).toBe(true);

    const second = fakeGraph((c) => (c.path === "111/posts" ? { json: { data: [{ id: "111_777", message: `x ${input.marker} y` }] } } : { status: 500, json: {} }));
    const st = await publishFacebook(input, pending, deps(second.fetchImpl));
    expect(st.postId).toBe("111_777");
    expect(second.calls.map((c) => c.path)).toEqual(["111/posts"]);
  });
});

describe("Instagram", () => {
  it("carrousel : éléments, conteneur CAROUSEL avec légende, attente FINISHED, media_publish ; puis la story", async () => {
    let child = 0;
    let polls = 0;
    const { calls, fetchImpl } = fakeGraph((c) => {
      if (c.path === "222/media" && c.params.is_carousel_item) return { json: { id: `ch${++child}` } };
      if (c.path === "222/media" && c.params.media_type === "CAROUSEL") return { json: { id: "car1" } };
      if (c.path === "222/media" && c.params.media_type === "STORIES") return { json: { id: "sto1" } };
      if (c.path === "car1") return { json: { status_code: ++polls < 3 ? "IN_PROGRESS" : "FINISHED" } };
      if (c.path === "sto1") return { json: { status_code: "FINISHED" } };
      if (c.path === "222/media_publish") return { json: { id: c.params.creation_id === "car1" ? "m1" : "m2" } };
      return { status: 404, json: {} };
    });
    const st = await publishInstagram(input, {}, deps(fetchImpl));
    expect(st).toMatchObject({ childIds: ["ch1", "ch2", "ch3"], containerId: "car1", mediaId: "m1", storyContainerId: "sto1", storyMediaId: "m2" });
    const carousel = calls.find((c) => c.params.media_type === "CAROUSEL")!;
    expect(carousel.params.children).toBe("ch1,ch2,ch3");
    expect(carousel.params.caption).toBe(input.instagramCaption);
    expect(calls.filter((c) => c.path === "car1")).toHaveLength(3);
    const publishes = calls.filter((c) => c.path === "222/media_publish");
    expect(publishes.map((c) => c.params.creation_id)).toEqual(["car1", "sto1"]);
    // Jamais de publication avant FINISHED : le premier media_publish suit le dernier état du carrousel.
    const lastCarPoll = calls.map((c) => c.path).lastIndexOf("car1");
    expect(calls.findIndex((c) => c.path === "222/media_publish")).toBe(lastCarPoll + 1);
  });

  it("conteneur en erreur : échec permanent, rien de publié", async () => {
    const { calls, fetchImpl } = fakeGraph((c) => (c.path.startsWith("222/media") ? { json: { id: "c" } } : { json: { status_code: "ERROR", status: "Image refusée" } }));
    const err = await publishInstagram({ ...input, storyImage: null }, {}, deps(fetchImpl)).catch((e) => e);
    expect((err as MetaError).kind).toBe("permanent");
    expect(calls.some((c) => c.path === "222/media_publish")).toBe(false);
  });

  it("attente trop longue : erreur temporaire, conteneur gardé pour le prochain essai", async () => {
    const { fetchImpl } = fakeGraph((c) => (c.path.startsWith("222/media") ? { json: { id: "c1" } } : { json: { status_code: "IN_PROGRESS" } }));
    const saved: Array<{ network: string; state: unknown }> = [];
    const err = await publishInstagram({ ...input, images: [input.images[0]], storyImage: null }, {}, deps(fetchImpl, saved)).catch((e) => e);
    expect((err as MetaError).kind).toBe("transient");
    expect((saved.at(-1)!.state as InstagramState).containerId).toBe("c1");
  });

  it("reprise : conteneur existant attendu puis publié, sans rien recréer ; déjà publié : aucun appel", async () => {
    const { calls, fetchImpl } = fakeGraph((c) => (c.path === "car9" ? { json: { status_code: "FINISHED" } } : c.path === "222/media_publish" ? { json: { id: "m9" } } : { status: 400, json: { error: { code: 100 } } }));
    const st = await publishInstagram({ ...input, storyImage: null }, { childIds: ["a", "b", "c"], containerId: "car9" }, deps(fetchImpl));
    expect(st.mediaId).toBe("m9");
    expect(calls.map((c) => c.path)).toEqual(["car9", "222/media_publish"]);
    const again = fakeGraph(() => ({ json: {} }));
    await publishInstagram({ ...input, storyImage: null }, { mediaId: "m9" }, deps(again.fetchImpl));
    expect(again.calls).toHaveLength(0);
  });

  it("réponse perdue à media_publish : le conteneur « PUBLISHED » est retrouvé par sa légende, jamais republié", async () => {
    const first = fakeGraph((c) => (c.path === "222/media_publish" ? "reseau" : c.path === "c1" ? { json: { status_code: "FINISHED" } } : { json: { id: "c1" } }));
    const saved: Array<{ network: string; state: unknown }> = [];
    await publishInstagram({ ...input, images: [input.images[0]], storyImage: null }, {}, deps(first.fetchImpl, saved)).catch(() => undefined);
    const pending = saved.at(-1)!.state as InstagramState;
    expect(pending.pendingVerify).toBe(true);
    expect(first.calls.filter((c) => c.path === "222/media_publish")).toHaveLength(1);

    const second = fakeGraph((c) => (c.path === "222/media" && c.method === "GET" ? { json: { data: [{ id: "m5", caption: input.instagramCaption }] } } : { status: 500, json: {} }));
    const st = await publishInstagram({ ...input, images: [input.images[0]], storyImage: null }, pending, deps(second.fetchImpl));
    expect(st.mediaId).toBe("m5");
    expect(second.calls.some((c) => c.path === "222/media_publish")).toBe(false);
  });
});

describe("erreurs lisibles en français", () => {
  it("jeton expiré : message clair, sans jamais recopier le jeton", () => {
    const e = translateError(400, { error: { code: 190, message: `Error validating access token: ${TOKEN} access_token=${TOKEN}` } });
    expect(e.kind).toBe("permanent");
    expect(e.message).toMatch(/Jeton Meta expiré ou invalide/);
    expect(e.message).toContain("META_PAGE_TOKEN");
    expect(e.message).not.toContain(TOKEN);
    const p = translateError(403, { error: { code: 200, message: `Permissions error ${TOKEN}` } });
    expect(p.message).toMatch(/Permission manquante/);
    expect(p.message).not.toContain(TOKEN);
  });

  it("limite de requêtes : essai repris automatiquement puis réussi", async () => {
    let n = 0;
    const { calls, fetchImpl } = fakeGraph(() => (++n === 1 ? { status: 400, json: { error: { code: 4, message: "Application request limit reached" } } } : { json: { id: "ph1", post_id: "111_1" } }));
    const st = await publishFacebook({ ...input, images: [input.images[0]] }, {}, deps(fetchImpl));
    expect(st.postId).toBe("111_1");
    expect(calls).toHaveLength(2);
    expect(translateError(400, { error: { code: 4 } }).kind).toBe("transient");
  });

  it("autres cas : 5xx = issue inconnue ; téléchargement d’image impossible = temporaire", () => {
    expect(translateError(502, null).kind).toBe("inconnu");
    expect(translateError(400, { error: { code: 9004, error_subcode: 2207052 } }).message).toMatch(/télécharger l’image/);
  });
});

describe("mode essai", () => {
  it("liste les requêtes qui partiraient, sans jeton", () => {
    const reqs = dryRunRequests(input, env, { facebook: true, instagram: true });
    expect(reqs.some((r) => r.path.endsWith("/feed"))).toBe(true);
    expect(reqs.some((r) => r.params.media_type === "CAROUSEL")).toBe(true);
    expect(reqs.some((r) => r.params.media_type === "STORIES")).toBe(true);
    expect(JSON.stringify(reqs)).not.toContain(TOKEN);
    expect(JSON.stringify(reqs)).not.toContain("111");
  });
});
