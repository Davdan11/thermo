/* Liens internes automatiques ; assistant de style (aucun chiffre ni lien ajouté, jamais appelé en test) ; annonce IndexNow
   (point d'extension, aucun envoi hors production). */
import { describe, expect, it, vi } from "vitest";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { checkStyleProposal, proposeStyle, styleAssistantStatus } from "../assistant";
import { announceUrls } from "../diffusion";
import { autoLinkTree, type LinkTarget, type MdNode } from "../links";
import { fixtureArticle } from "./fixtures";

const TARGETS: LinkTarget[] = [
  { text: "Val-Givre", href: "/thermopompe/val-givre", kind: "ville" },
  { text: "Laval", href: "/thermopompe/laval", kind: "ville" },
  { text: "Nordik", href: "/marques/nordik", kind: "marque" },
  { text: "L'Anse-Grise", href: "/thermopompe/l-anse-grise", kind: "ville" },
];

async function render(md: string, exclude: string[] = []) {
  const linked: LinkTarget[] = [];
  const out = await remark()
    .use(remarkGfm)
    .use(() => (tree) => {
      linked.push(...autoLinkTree(tree as unknown as MdNode, TARGETS, { exclude }));
    })
    .use(html)
    .process(md);
  return { html: String(out), linked };
}

describe("liens internes automatiques", () => {
  it("première mention seulement, jamais dans un titre ni dans un lien existant, mot entier", async () => {
    const r = await render("## Val-Givre\n\nÀ Val-Givre, il fait froid. Val-Givre encore. Lavaltrie n’est pas Laval. [Nordik](/marques/nordik) puis Nordik. À L’Anse-Grise aussi.");
    expect(r.html).toContain("<h2>Val-Givre</h2>");
    expect((r.html.match(/href="\/thermopompe\/val-givre"/g) ?? []).length).toBe(1);
    expect((r.html.match(/href="\/thermopompe\/laval"/g) ?? []).length).toBe(1);
    expect(r.html).toContain("Lavaltrie");
    expect((r.html.match(/href="\/marques\/nordik"/g) ?? []).length).toBe(1);
    expect(r.html).toContain('href="/thermopompe/l-anse-grise"');
    expect(r.linked.map((t) => t.text)).toEqual(["Val-Givre", "Laval", "L'Anse-Grise"]);
  });

  it("jamais de lien vers la page elle-même", async () => {
    const r = await render("Val-Givre en hiver.", ["/thermopompe/val-givre"]);
    expect(r.html).not.toContain("<a ");
  });
});

describe("assistant de style", () => {
  const article = fixtureArticle({
    body: "À Val-Givre, les nuits de janvier descendent à −23,4 °C. Voir [la page](/thermopompe/val-givre).",
    source: { values: { nuits: -23.4 }, labels: { nuits: "Nuits" }, texts: [] },
  });

  it("refuse un chiffre ajouté, un lien ajouté ; accepte une reformulation", () => {
    expect(checkStyleProposal(article, "À Val-Givre, les nuits de janvier descendent à −23,4 °C, soit 5 °C de moins. Voir [la page](/thermopompe/val-givre).").ok).toBe(false);
    expect(checkStyleProposal(article, "Les nuits de janvier descendent à −23,4 °C à Val-Givre. [La page](/thermopompe/val-givre) et [autre](/ailleurs).").ok).toBe(false);
    expect(checkStyleProposal(article, "Les nuits de janvier descendent à −23,4 °C à Val-Givre. Voir [la page](/thermopompe/val-givre).")).toEqual({ ok: true });
  });

  it("désactivé pendant les tests ; un client fourni est vérifié, jamais le réseau", async () => {
    expect(styleAssistantStatus({ NODE_ENV: "test", ANTHROPIC_API_KEY: "cle-fictive" }).enabled).toBe(false);
    expect((await proposeStyle(article, { env: { NODE_ENV: "test" } })).ok).toBe(false);
    const client = { rewrite: vi.fn(async () => "Les nuits de janvier descendent à −23,4 °C à Val-Givre. Voir [la page](/thermopompe/val-givre).") };
    const ok = await proposeStyle(article, { client, env: { NODE_ENV: "test" } });
    expect(ok.ok).toBe(true);
    const bad = await proposeStyle(article, { client: { rewrite: async () => "Il fait −40 °C à Val-Givre. Voir [la page](/thermopompe/val-givre)." }, env: { NODE_ENV: "test" } });
    expect(bad.ok).toBe(false);
    if (!bad.ok) expect(bad.reason).toMatch(/−40/);
  });
});

describe("annonce aux moteurs (point d’extension IndexNow)", () => {
  it("aucun envoi hors production ; en production, chaque annonceur branché reçoit les adresses", async () => {
    const announce = vi.fn(async () => undefined);
    const r1 = await announceUrls(["https://exemple.ca/blogue/a"], { env: { NODE_ENV: "test" }, announcers: [{ name: "IndexNow", announce }] });
    expect(r1.sent).toEqual([]);
    expect(announce).not.toHaveBeenCalled();
    const r2 = await announceUrls(["https://exemple.ca/blogue/a", "/relatif"], { env: { NODE_ENV: "production" }, announcers: [{ name: "IndexNow", announce }] });
    expect(r2.sent).toEqual(["IndexNow"]);
    expect(announce).toHaveBeenCalledWith(["https://exemple.ca/blogue/a"]);
    const r3 = await announceUrls(["https://exemple.ca/blogue/a"], { env: { NODE_ENV: "production" }, announcers: [{ name: "Panne", announce: async () => Promise.reject(new Error("hors service")) }] });
    expect(r3.errors).toEqual([{ name: "Panne", error: "hors service" }]);
    expect((await announceUrls(["https://exemple.ca/x"], { env: { NODE_ENV: "production" }, announcers: [] })).skipped).toMatch(/IndexNow/);
  });
});
