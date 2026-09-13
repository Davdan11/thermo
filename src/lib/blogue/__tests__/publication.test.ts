/* Publication : un article non publié n'est jamais servi (pages, RSS, plan du site) ; ISR après publication, modification et
   retrait (revalidatePath) ; création de la publication Facebook et Instagram dans le studio à l'approbation, selon les
   règles du studio ; aucun envoi réel (aucun appel réseau). */
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/cache", () => ({ revalidatePath: vi.fn(), refresh: vi.fn() }));

import { revalidatePath } from "next/cache";
import { composeCaption } from "@/lib/presence/captions";
import { slidesText, unknownNumbers } from "@/lib/presence/numbers";
import { mutatePresence, readPresence } from "@/lib/presence/store";
import { blogSitemapRows, buildRss } from "../feed";
import { getPublishedArticle, listPublishedArticles } from "../public";
import { articlePaths } from "../revalidate";
import { prepareDrafts, publishArticle, saveArticle, unpublishArticle } from "../service";
import { mutateBlogue, readBlogue } from "../store";
import { fixtureArticle, fixtureFacts } from "./fixtures";

const saved = process.env;
let dir: string;
const NOW = new Date("2026-09-14T13:00:00Z");
const quiet = { now: NOW, announce: async () => undefined };

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-blogue-"));
  process.env = { ...saved, GESTION_DATA_DIR: dir, NEXT_PUBLIC_SITE_URL: "https://exemple.ca" };
  delete process.env.BLOGUE_FILE;
  delete process.env.PRESENCE_FILE;
  vi.mocked(revalidatePath).mockClear();
});
afterEach(async () => {
  process.env = saved;
  vi.restoreAllMocks();
  await rm(dir, { recursive: true, force: true });
});

async function seed(...list: ReturnType<typeof fixtureArticle>[]) {
  await mutateBlogue((d) => {
    d.articles.push(...list);
    return { result: null, changed: true };
  });
}

describe("un article non publié n’est jamais servi publiquement", () => {
  it("brouillon et « à approuver » : 404, absents de la liste, du flux RSS et du plan du site", async () => {
    const draft = fixtureArticle({ status: "brouillon" });
    const pending = fixtureArticle({ status: "a_approuver" });
    const live = fixtureArticle({ status: "publie", publishedAt: "2026-09-10T12:00:00.000Z" });
    // Statut « publié » sans date de publication : jamais servi non plus.
    const odd = fixtureArticle({ status: "publie" });
    await seed(draft, pending, live, odd);
    expect(await getPublishedArticle(draft.slug)).toBeNull();
    expect(await getPublishedArticle(pending.slug)).toBeNull();
    expect(await getPublishedArticle(odd.slug)).toBeNull();
    expect((await getPublishedArticle(live.slug))?.id).toBe(live.id);
    expect((await listPublishedArticles()).map((a) => a.id)).toEqual([live.id]);
    const articles = (await readBlogue()).articles;
    const rss = buildRss(articles, { siteUrl: "https://exemple.ca", siteName: "Essai" });
    expect(rss).toContain(live.slug);
    for (const a of [draft, pending, odd]) expect(rss).not.toContain(a.slug);
    const urls = blogSitemapRows(articles, "https://exemple.ca").map((r) => r.url);
    expect(urls).toContain(`https://exemple.ca/blogue/${live.slug}`);
    for (const a of [draft, pending, odd]) expect(urls.join(" ")).not.toContain(a.slug);
  });

  it("les brouillons préparés arrivent « à approuver » et ne sont pas publics", async () => {
    const r = await prepareDrafts("proprio@exemple.ca", { ...quiet, facts: fixtureFacts() });
    expect(r.ok).toBe(true);
    const all = (await readBlogue()).articles;
    expect(all.filter((a) => a.status === "a_approuver")).toHaveLength(5);
    expect(all.filter((a) => a.template === "question" && a.status === "brouillon")).toHaveLength(1);
    expect(await listPublishedArticles()).toEqual([]);
    // Deuxième passage : rien n'est écrasé ni doublé.
    await prepareDrafts("proprio@exemple.ca", { ...quiet, facts: fixtureFacts() });
    expect((await readBlogue()).articles).toHaveLength(6);
  });

  it("un article publié puis retiré redevient introuvable", async () => {
    const a = fixtureArticle({ status: "a_approuver" });
    await seed(a);
    expect((await publishArticle(a.id, "proprio@exemple.ca", quiet)).ok).toBe(true);
    expect(await getPublishedArticle(a.slug)).not.toBeNull();
    expect((await unpublishArticle(a.id, "proprio@exemple.ca", quiet)).ok).toBe(true);
    expect(await getPublishedArticle(a.slug)).toBeNull();
  });

  it("un article aux chiffres sans source ne peut pas être publié", async () => {
    const a = fixtureArticle({ status: "a_approuver", body: `${fixtureArticle().body} Il faut 42 minutes.` });
    await seed(a);
    const r = await publishArticle(a.id, "proprio@exemple.ca", quiet);
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toMatch(/Chiffres sans source : 42/);
    expect(await getPublishedArticle(a.slug)).toBeNull();
  });
});

describe("ISR : revalidation à la demande, sans rebuild", () => {
  it("publier revalide la liste, l’article, le flux RSS, le plan du site du blogue et son index", async () => {
    const a = fixtureArticle({ status: "a_approuver" });
    await seed(a);
    await publishArticle(a.id, "proprio@exemple.ca", quiet);
    const called = vi.mocked(revalidatePath).mock.calls.map((c) => c[0]);
    expect(called).toEqual(articlePaths(a.slug));
    expect(called).toEqual(["/blogue", `/blogue/${a.slug}`, "/blogue/rss.xml", "/sitemap/blogue.xml", "/sitemap-index.xml"]);
  });

  it("modifier un article en ligne le revalide et date la mise à jour ; un brouillon, non", async () => {
    const live = fixtureArticle({ status: "publie", publishedAt: "2026-09-10T12:00:00.000Z" });
    const draft = fixtureArticle({ status: "brouillon" });
    await seed(live, draft);
    const input = (x: typeof live) => ({ title: x.title, slug: x.slug, description: x.description, body: `${x.body} Une phrase de plus.`, category: x.category, author: x.author, cover: null, references: x.references, figures: [] });
    await saveArticle(draft.id, input(draft), "proprio@exemple.ca", quiet);
    expect(revalidatePath).not.toHaveBeenCalled();
    await saveArticle(live.id, input(live), "proprio@exemple.ca", quiet);
    expect(vi.mocked(revalidatePath).mock.calls.map((c) => c[0])).toContain(`/blogue/${live.slug}`);
    const after = (await readBlogue()).articles.find((x) => x.id === live.id)!;
    expect(after.modifiedAt).toBe(NOW.toISOString());
    expect(after.publishedAt).toBe("2026-09-10T12:00:00.000Z");
  });

  it("l’adresse d’un article publié ne change plus", async () => {
    const live = fixtureArticle({ status: "publie", publishedAt: "2026-09-10T12:00:00.000Z" });
    await seed(live);
    const r = await saveArticle(live.id, { title: live.title, slug: "autre-adresse", description: live.description, body: live.body, category: live.category, author: live.author, cover: null, references: live.references, figures: [] }, "proprio@exemple.ca", quiet);
    expect(r.ok).toBe(false);
  });

  it("les pages publiques sont en ISR (revalidate) et acceptent les nouveaux articles sans rebuild (dynamicParams)", async () => {
    const root = process.cwd();
    const page = await readFile(path.join(root, "src/app/blogue/[slug]/page.tsx"), "utf8");
    expect(page).toMatch(/export const revalidate = \d+;/);
    expect(page).toMatch(/export const dynamicParams = true;/);
    expect(page).toMatch(/getPublishedArticle\(slug\)/);
    expect(page).toMatch(/notFound\(\)/);
    for (const f of ["src/app/blogue/page.tsx", "src/app/blogue/rss.xml/route.ts"]) expect(await readFile(path.join(root, f), "utf8")).toMatch(/export const revalidate = \d+;/);
  });
});

describe("republication : publications du studio créées à l’approbation", () => {
  it("publier crée une publication « blogue » à approuver, liée à l’article, sans aucun appel réseau", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const a = fixtureArticle({ status: "a_approuver", title: "Palmarès du froid 2026", source: { values: { annee: 2026 }, labels: { annee: "Année" }, texts: [] } });
    await seed(a);
    const r = await publishArticle(a.id, "proprio@exemple.ca", quiet);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.message).toMatch(/à approuver/);
    const posts = (await readPresence()).posts;
    expect(posts).toHaveLength(1);
    const p = posts[0];
    expect(p.series).toBe("blogue");
    expect(p.status).toBe("a_approuver");
    expect(p.link.path).toBe(`/blogue/${a.slug}`);
    expect(p.rotationKeys).toEqual([`article:${a.id}`]);
    expect(p.scheduledAt > NOW.toISOString()).toBe(true);
    const all = [composeCaption(p, "facebook"), composeCaption(p, "instagram"), slidesText([...p.slides, p.story]), p.footnote].join("\n");
    expect(unknownNumbers(all, p.source)).toEqual([]);
    expect((await readBlogue()).articles[0].presencePostIds).toEqual([p.id]);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("gabarit « blogue » déjà validé et publication automatique activée : la publication est planifiée d’office", async () => {
    await mutatePresence((d) => {
      d.approvals.blogue = { at: "2026-09-01T12:00:00.000Z", by: "proprio@exemple.ca", postId: "p-20260901-blogue" };
      d.settings.series.blogue.auto = true;
      return { result: null, changed: true };
    });
    const a = fixtureArticle({ status: "a_approuver" });
    await seed(a);
    await publishArticle(a.id, "proprio@exemple.ca", quiet);
    const p = (await readPresence()).posts[0];
    expect(p.status).toBe("planifiee");
    expect(p.approvedBy).toMatch(/automatique/);
  });

  it("série « blogue » éteinte : rien n’est créé, l’article est publié quand même", async () => {
    await mutatePresence((d) => {
      d.settings.series.blogue.enabled = false;
      return { result: null, changed: true };
    });
    const a = fixtureArticle({ status: "a_approuver" });
    await seed(a);
    const r = await publishArticle(a.id, "proprio@exemple.ca", quiet);
    expect(r.ok).toBe(true);
    expect((await readPresence()).posts).toHaveLength(0);
    expect(await getPublishedArticle(a.slug)).not.toBeNull();
  });

  it("retirer l’article rejette sa publication en attente ; le republier en crée une nouvelle, jamais deux actives", async () => {
    const a = fixtureArticle({ status: "a_approuver" });
    await seed(a);
    await publishArticle(a.id, "proprio@exemple.ca", quiet);
    await unpublishArticle(a.id, "proprio@exemple.ca", quiet);
    let posts = (await readPresence()).posts;
    expect(posts[0].status).toBe("rejetee");
    await mutateBlogue((d) => {
      d.articles[0].status = "a_approuver";
      return { result: null, changed: true };
    });
    await publishArticle(a.id, "proprio@exemple.ca", quiet);
    posts = (await readPresence()).posts;
    expect(posts.filter((p) => p.status !== "rejetee")).toHaveLength(1);
    const after = (await readBlogue()).articles[0];
    expect(after.modifiedAt).toBe(NOW.toISOString());
  });
});
