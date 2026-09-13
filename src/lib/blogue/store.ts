/* ==================================================================
   Magasin du blogue : blogue.json, dans le dossier des données de
   gestion (shared/data/ sur le VPS, data/ en développement), à côté de
   presence.json. Même mécanique : relecture sous verrou, écriture
   atomique, droits 600. Chemin imposable avec BLOGUE_FILE.
   Images téléversées : blogue-images/ dans le même dossier
   (BLOGUE_IMAGES_DIR), servies par /blogue/images/<fichier>.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { ARTICLE_CATEGORIES, ARTICLE_ID_RE, ARTICLE_STATUSES, DEFAULT_AUTHOR, SLUG_RE, TEMPLATE_IDS, type BlogArticle, type BlogueData, type BlogueLogEntry } from "./types";

export const blogueFile = () => process.env.BLOGUE_FILE || path.join(gestionDataDir(), "blogue.json");
export const blogueImagesDir = () => process.env.BLOGUE_IMAGES_DIR || path.join(gestionDataDir(), "blogue-images");

const LOG_MAX = 300;

const empty = (): BlogueData => ({ version: 1, articles: [], log: [] });

const str = (v: unknown, fallback = ""): string => (typeof v === "string" ? v : fallback);
const arr = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

function normalizeArticle(raw: unknown): BlogArticle | null {
  const x = raw as Partial<BlogArticle> | null;
  if (!x || typeof x.id !== "string" || !ARTICLE_ID_RE.test(x.id)) return null;
  if (typeof x.slug !== "string" || !SLUG_RE.test(x.slug)) return null;
  const status = (ARTICLE_STATUSES as readonly string[]).includes(String(x.status)) ? (x.status as BlogArticle["status"]) : "brouillon";
  const src = (x.source ?? {}) as Partial<BlogArticle["source"]>;
  return {
    id: x.id,
    slug: x.slug,
    title: str(x.title),
    description: str(x.description),
    body: str(x.body),
    category: (ARTICLE_CATEGORIES as readonly string[]).includes(String(x.category)) ? (x.category as BlogArticle["category"]) : "choisir",
    author: str(x.author).trim() || DEFAULT_AUTHOR,
    cover: x.cover && typeof x.cover.path === "string" ? { path: x.cover.path, alt: str(x.cover.alt) } : null,
    status,
    template: (TEMPLATE_IDS as readonly string[]).includes(String(x.template)) ? (x.template as BlogArticle["template"]) : "libre",
    references: arr<BlogArticle["references"][number]>(x.references).filter((r) => r && typeof r.label === "string"),
    source: {
      values: src.values && typeof src.values === "object" ? src.values : {},
      labels: src.labels && typeof src.labels === "object" ? src.labels : {},
      texts: arr<string>(src.texts).filter((t) => typeof t === "string"),
      ...(Array.isArray(src.derived) ? { derived: src.derived } : {}),
    },
    figures: arr<BlogArticle["figures"][number]>(x.figures).filter((f) => f && typeof f.label === "string" && typeof f.value === "string"),
    mentions: arr<BlogArticle["mentions"][number]>(x.mentions).filter((m) => m && typeof m.text === "string" && typeof m.href === "string" && m.href.startsWith("/")),
    createdAt: str(x.createdAt, new Date(0).toISOString()),
    updatedAt: str(x.updatedAt, str(x.createdAt, new Date(0).toISOString())),
    ...(x.submittedAt ? { submittedAt: String(x.submittedAt) } : {}),
    ...(x.publishedAt ? { publishedAt: String(x.publishedAt) } : {}),
    ...(x.modifiedAt ? { modifiedAt: String(x.modifiedAt) } : {}),
    ...(x.approvedBy ? { approvedBy: String(x.approvedBy) } : {}),
    presencePostIds: arr<string>(x.presencePostIds).filter((s) => typeof s === "string"),
    ...(x.assistant ? { assistant: x.assistant } : {}),
    ...(typeof x.previousBody === "string" ? { previousBody: x.previousBody } : {}),
    ...(x.dataDate ? { dataDate: String(x.dataDate) } : {}),
  };
}

export function normalizeBlogue(d: Partial<BlogueData> | null | undefined): BlogueData {
  const seen = new Set<string>();
  const articles: BlogArticle[] = [];
  for (const raw of arr<unknown>(d?.articles)) {
    const a = normalizeArticle(raw);
    if (!a || seen.has(a.id)) continue;
    seen.add(a.id);
    articles.push(a);
  }
  return { version: 1, articles, log: arr<BlogueLogEntry>(d?.log).slice(0, LOG_MAX) };
}

export async function readBlogue(): Promise<BlogueData> {
  return normalizeBlogue(await readJson<Partial<BlogueData>>(blogueFile(), empty));
}

export function mutateBlogue<T>(fn: (data: BlogueData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<BlogueData, T>(blogueFile(), empty, (d) => normalizeBlogue(d), fn);
}

export function addBlogueLog(data: BlogueData, entry: Omit<BlogueLogEntry, "at"> & { at?: string }): void {
  data.log.unshift({ at: entry.at ?? new Date().toISOString(), level: entry.level, message: entry.message, ...(entry.articleId ? { articleId: entry.articleId } : {}) });
  if (data.log.length > LOG_MAX) data.log.length = LOG_MAX;
}
