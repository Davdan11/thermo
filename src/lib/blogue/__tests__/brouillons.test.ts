/* Aucun chiffre inventé : chaque nombre des brouillons préparés (titre, chapeau, corps, texte de la photo) existe dans leur
   source, avec des faits d'essai et avec les VRAIES données du site. Idem pour la publication Facebook et Instagram créée
   à partir de chaque brouillon. LogisVert : toujours versé au client. */
import { describe, expect, it } from "vitest";
import { composeCaption } from "@/lib/presence/captions";
import { fmtTemp } from "@/lib/presence/format";
import { slidesText, unknownNumbers } from "@/lib/presence/numbers";
import { normalizePresence } from "@/lib/presence/store";
import { buildArticleGenerated } from "../presence-bridge";
import { buildDraft, DATA_TEMPLATES, type ArticleDraft } from "../templates";
import { articleUnknownNumbers, TODO_RE } from "../text";
import type { BlogFacts } from "../facts";
import { fixtureArticle, fixtureFacts } from "./fixtures";

const asArticle = (d: ArticleDraft) => fixtureArticle({ ...d, figures: [], status: "a_approuver" });

function checkAll(f: BlogFacts) {
  for (const t of [...DATA_TEMPLATES, "question" as const]) {
    const d = buildDraft(t, f);
    const a = asArticle(d);
    expect(articleUnknownNumbers(a).map((x) => x.raw), `${t} : ${d.title}`).toEqual([]);
    expect(d.references.length, t).toBeGreaterThan(0);
    expect(d.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    if (t !== "question") {
      expect(TODO_RE.test(`${d.title}\n${d.description}\n${d.body}`), t).toBe(false);
      expect(d.description.length, t).toBeLessThanOrEqual(200);
      // Publication du studio créée à partir de l'article : légendes et visuels sans nombre hors source.
      const g = buildArticleGenerated({ ...a, status: "publie", publishedAt: "2026-09-14T15:00:00.000Z" }, "2026-09-14T15:00:00.000Z");
      const post = { id: "p-20260914-blogue", series: "blogue" as const, text: g.text, hashtags: g.hashtags, link: g.link };
      const all = [composeCaption(post, "facebook", "https://exemple.ca"), composeCaption(post, "instagram", "https://exemple.ca"), slidesText([...g.slides, g.story]), g.footnote].join("\n");
      expect(unknownNumbers(all, g.source).map((x) => x.raw), `${t} (studio)`).toEqual([]);
    }
  }
}

describe("brouillons : faits d’essai", () => {
  it("chaque nombre existe dans la source (5 gabarits + question)", () => {
    checkAll(fixtureFacts());
  });

  it("LogisVert : versée au client par Hydro-Québec, jamais à l’entreprise", () => {
    const d = buildDraft("logisvert-murale", fixtureFacts());
    expect(d.body).toMatch(/versée au client par Hydro-Québec, jamais à l’entreprise/);
    expect(d.body).not.toMatch(/versée? à (l’|l')entreprise/i);
    const types = buildDraft("types", fixtureFacts());
    for (const line of types.body.split("\n").filter((l) => /LogisVert :/.test(l))) expect(line).toMatch(/versée au client par Hydro-Québec/);
  });

  it("palmarès : une température de conception sans modèle publié est dite sans exagérer", () => {
    const d = buildDraft("palmares", fixtureFacts());
    expect(d.body).toMatch(/aucun modèle du catalogue n’a de froid minimal publié aussi bas/);
    expect(d.body).toMatch(/ne veut pas dire que la machine s’arrête plus tôt/);
    expect(d.mentions.map((m) => m.text)).toContain("Val-Givre");
    expect(d.mentions.every((m) => m.href.startsWith("/thermopompe/"))).toBe(true);
  });

  it("le nombre écrit est bien celui des données (pas seulement « un nombre de la source »)", () => {
    const f = fixtureFacts();
    const d = buildDraft("moins-25", f);
    const le25 = f.models.filter((m) => m.minTempC !== null && m.minTempC <= -25).length;
    expect(d.source.values.jusquaMoins25).toBe(le25);
    expect(d.body).toContain(`${le25} publient ${fmtTemp(-25)} ou plus bas`);
  });

  it("un chiffre ajouté à la main sans le déclarer bloque ; déclaré, il passe", () => {
    const a = fixtureArticle({ body: `${fixtureArticle().body}\n\nDégagez 30 cm autour de l’unité.` });
    expect(articleUnknownNumbers(a).map((x) => x.value)).toEqual([30]);
    expect(articleUnknownNumbers({ ...a, figures: [{ id: "c1", label: "Dégagement conseillé par le fabricant", value: "30 cm", url: "https://exemple.ca" }] })).toEqual([]);
  });

  it("les adresses des liens et les numéros de liste ne comptent pas comme des chiffres", () => {
    const a = fixtureArticle({ body: "1. Voir [la fiche](/produit/essai-12000-xr) et [le guide](/guides/abc-2026).\n2. Encore." });
    expect(articleUnknownNumbers(a)).toEqual([]);
  });

  it("aucune question de la semaine n’est publiable telle quelle", () => {
    const d = buildDraft("question", fixtureFacts());
    expect(TODO_RE.test(d.title)).toBe(true);
    expect(normalizePresence({}).settings.series.blogue.enabled).toBe(true);
  });
});

describe("brouillons : données réelles du site", () => {
  it("chaque nombre des 5 brouillons et de leurs publications existe dans la source", { timeout: 240_000 }, async () => {
    const { getBlogFacts } = await import("../facts-site");
    const f = getBlogFacts(new Date("2026-09-13T14:00:00Z"));
    expect(f.models.length).toBeGreaterThan(500);
    expect(f.palmares.totals.municipalities).toBeGreaterThan(900);
    checkAll(f);
    const lv = buildDraft("logisvert-murale", f);
    expect(lv.body).toMatch(/versée au client par Hydro-Québec, jamais à l’entreprise/);
    expect(buildDraft("palmares", f).title).toBe("Palmarès du froid 2026");
  });
});
