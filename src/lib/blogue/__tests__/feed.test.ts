/* Données structurées (BlogPosting, BreadcrumbList), flux RSS et plan du site du blogue. */
import { describe, expect, it } from "vitest";
import { blogBreadcrumbSchema, blogPostingSchema, blogSitemapLastmod, blogSitemapRows, buildRss, lastModified } from "../feed";
import { DEFAULT_AUTHOR } from "../types";
import { fixtureArticle } from "./fixtures";

const OPTS = { siteUrl: "https://exemple.ca", siteName: "Thermopompes À Vendre.ca", logo: "https://exemple.ca/logo.webp" };

describe("données structurées", () => {
  const a = fixtureArticle({
    status: "publie",
    slug: "palmares-du-froid-2026",
    title: "Palmarès du froid 2026",
    publishedAt: "2026-09-14T13:00:00.000Z",
    modifiedAt: "2026-10-02T10:00:00.000Z",
    category: "donnees",
    references: [
      { label: "Normales climatiques", url: "https://climat.meteo.gc.ca/" },
      { label: "Table du site", url: "/thermopompe" },
      { label: "Question reçue, anonymisée" },
    ],
  });

  it("BlogPosting : titre, auteur par défaut (organisation), dates de publication et de mise à jour, sources", () => {
    const s = blogPostingSchema(a, { ...OPTS, image: "https://exemple.ca/c.jpg", wordCount: 640 });
    expect(s["@type"]).toBe("BlogPosting");
    expect(s.headline).toBe("Palmarès du froid 2026");
    expect(s.url).toBe("https://exemple.ca/blogue/palmares-du-froid-2026");
    expect(s.mainEntityOfPage).toEqual({ "@type": "WebPage", "@id": "https://exemple.ca/blogue/palmares-du-froid-2026" });
    expect(s.author).toEqual({ "@type": "Organization", name: DEFAULT_AUTHOR, url: "https://exemple.ca" });
    expect(s.datePublished).toBe("2026-09-14T13:00:00.000Z");
    expect(s.dateModified).toBe("2026-10-02T10:00:00.000Z");
    expect(s.inLanguage).toBe("fr-CA");
    expect(s.image).toEqual(["https://exemple.ca/c.jpg"]);
    expect(s.wordCount).toBe(640);
    expect(s.citation).toEqual([
      { "@type": "CreativeWork", name: "Normales climatiques", url: "https://climat.meteo.gc.ca/" },
      { "@type": "CreativeWork", name: "Table du site", url: "https://exemple.ca/thermopompe" },
    ]);
    expect(s.publisher.logo.url).toBe("https://exemple.ca/logo.webp");
  });

  it("auteur réglable : une personne nommée devient une Person ; sans mise à jour, dateModified = publication", () => {
    const b = fixtureArticle({ status: "publie", publishedAt: "2026-09-14T13:00:00.000Z", author: "Marie Tremblay" });
    const s = blogPostingSchema(b, OPTS);
    expect(s.author).toEqual({ "@type": "Person", name: "Marie Tremblay" });
    expect(s.dateModified).toBe("2026-09-14T13:00:00.000Z");
    expect(s).not.toHaveProperty("image");
  });

  it("BreadcrumbList : Accueil › Blogue › article, adresses absolues", () => {
    const s = blogBreadcrumbSchema(a, "https://exemple.ca/");
    expect(s["@type"]).toBe("BreadcrumbList");
    expect(s.itemListElement.map((i) => [i.position, i.name, i.item])).toEqual([
      [1, "Accueil", "https://exemple.ca/"],
      [2, "Blogue", "https://exemple.ca/blogue"],
      [3, "Palmarès du froid 2026", "https://exemple.ca/blogue/palmares-du-froid-2026"],
    ]);
  });
});

describe("flux RSS", () => {
  it("RSS 2.0 valide : articles publiés seulement, du plus récent au plus ancien, texte échappé, dates RFC 822", () => {
    const old = fixtureArticle({ status: "publie", publishedAt: "2026-09-01T12:00:00.000Z", title: "Chauffer & climatiser <vraiment>" });
    const recent = fixtureArticle({ status: "publie", publishedAt: "2026-09-14T13:00:00.000Z" });
    const draft = fixtureArticle({ status: "a_approuver" });
    const xml = buildRss([old, draft, recent], { siteUrl: "https://exemple.ca", siteName: "Essai" });
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(xml).toContain('<rss version="2.0"');
    expect(xml).toContain('<atom:link href="https://exemple.ca/blogue/rss.xml" rel="self" type="application/rss+xml" />');
    expect(xml).toContain("Chauffer &amp; climatiser &lt;vraiment&gt;");
    expect(xml).not.toContain(draft.slug);
    expect(xml.indexOf(recent.slug)).toBeLessThan(xml.indexOf(old.slug));
    expect(xml).toContain(`<pubDate>${new Date("2026-09-14T13:00:00.000Z").toUTCString()}</pubDate>`);
    expect(xml).toContain("<language>fr-CA</language>");
    expect((xml.match(/<item>/g) ?? []).length).toBe(2);
  });

  it("flux vide : canal valide, aucun article", () => {
    const xml = buildRss([fixtureArticle()], { siteUrl: "https://exemple.ca", siteName: "Essai", now: new Date("2026-09-13T00:00:00Z") });
    expect(xml).not.toContain("<item>");
    expect(xml).toContain("</channel>");
  });
});

describe("plan du site du blogue", () => {
  it("/blogue, le palmarès et chaque article publié, avec la vraie date de modification", () => {
    const a = fixtureArticle({ status: "publie", publishedAt: "2026-09-14T13:00:00.000Z", modifiedAt: "2026-10-02T10:00:00.000Z" });
    const b = fixtureArticle({ status: "publie", publishedAt: "2026-09-10T13:00:00.000Z" });
    const rows = blogSitemapRows([a, b, fixtureArticle({ status: "brouillon" })], "https://exemple.ca", "2026-09-01");
    expect(rows.map((r) => r.url)).toEqual(["https://exemple.ca/blogue", "https://exemple.ca/palmares-du-froid", `https://exemple.ca/blogue/${a.slug}`, `https://exemple.ca/blogue/${b.slug}`]);
    expect(rows[0].lastModified).toBe("2026-10-02");
    expect(rows[1].lastModified).toBe("2026-09-01");
    expect(rows[2].lastModified).toBe("2026-10-02");
    expect(rows[3].lastModified).toBe("2026-09-10");
    expect(lastModified(b)).toBe("2026-09-10T13:00:00.000Z");
  });

  it("lastmod de l’index : l’article le plus récent, sinon la date des données ; jamais un brouillon", () => {
    expect(blogSitemapLastmod([fixtureArticle({ status: "brouillon", updatedAt: "2027-01-01T00:00:00.000Z" })], "2026-09-01")).toBe("2026-09-01");
    expect(blogSitemapLastmod([fixtureArticle({ status: "publie", publishedAt: "2026-09-14T13:00:00.000Z" })], "2026-09-01")).toBe("2026-09-14");
  });

  it("le sitemap « blogue » est déclaré dans l’index (et donc dans robots.txt)", { timeout: 240_000 }, async () => {
    const { sitemapIds } = await import("@/lib/seo/sitemaps");
    expect(sitemapIds()).toContain("blogue");
  });
});
