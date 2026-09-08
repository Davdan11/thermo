import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "src/content/guides");

export type GuideCategory = "choisir" | "comparer" | "prix" | "subventions" | "installation" | "entretien";

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideMetadata {
  slug: string;
  title: string;
  description: string;
  author: string;
  /** Date de première publication (ISO). */
  publishedAt: string;
  /** Date de dernière révision (ISO). Sert à Article.dateModified. */
  updatedAt?: string;
  coverImage: string;
  /** Calculé à partir du nombre de mots (200 mots/min), jamais déclaré à la main. */
  readTime: string;
  wordCount: number;
  category: GuideCategory;
  /** Mots-clés cibles (usage éditorial et mots-clés meta). */
  keywords?: string[];
  /** Questions fréquentes (rendues + schéma FAQPage). */
  faq?: GuideFaq[];
  /** Slugs de guides liés. */
  related?: string[];
}

export interface Guide extends GuideMetadata {
  contentHtml: string;
}

function countWords(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_>`|-]/g, " ")
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function readTimeFor(words: number): string {
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min de lecture`;
}

function toMetadata(slug: string, raw: matter.GrayMatterFile<string>): GuideMetadata {
  const data = raw.data as Partial<GuideMetadata>;
  const wordCount = countWords(raw.content);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    author: data.author ?? "L'équipe ThermoMatch",
    publishedAt: data.publishedAt ?? "2026-01-01",
    updatedAt: data.updatedAt,
    coverImage: data.coverImage ?? "/images/guides/guide-hero-bg.jpg",
    readTime: readTimeFor(wordCount),
    wordCount,
    category: (data.category as GuideCategory) ?? "choisir",
    keywords: data.keywords,
    faq: data.faq,
    related: data.related,
  };
}

export function getAllGuides(): GuideMetadata[] {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const raw = matter(fs.readFileSync(path.join(contentDirectory, fileName), "utf8"));
      return toMetadata(slug, raw);
    })
    .sort((a, b) => ((b.updatedAt ?? b.publishedAt) > (a.updatedAt ?? a.publishedAt) ? 1 : -1));
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const raw = matter(fs.readFileSync(fullPath, "utf8"));
    const processed = await remark().use(html).process(raw.content);
    return { ...toMetadata(slug, raw), contentHtml: processed.toString() };
  } catch (error) {
    console.error(`Error loading guide ${slug}:`, error);
    return null;
  }
}
