"use server";

/* ==================================================================
   Server Actions des articles du blogue. Chacune : requireAdmin()
   (propriétaire seulement, rôles du chantier V) → validation →
   service → refresh(). Une action est joignable par un POST direct :
   la session est vérifiée ici, jamais seulement dans la page.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { articleLinkTargets } from "@/lib/blogue/links-site";
import { renderArticleMarkdown } from "@/lib/blogue/render";
import * as svc from "@/lib/blogue/service";
import { readBlogue } from "@/lib/blogue/store";
import { ARTICLE_CATEGORIES, ARTICLE_ID_RE, articlePath } from "@/lib/blogue/types";

export type ArticleResult = { ok: true; message: string; id?: string } | { ok: false; error: string } | undefined;

const articleId = z.string().regex(ARTICLE_ID_RE);
const INVALID = { ok: false as const, error: "Demande invalide." };

function done(r: svc.Result): ArticleResult {
  refresh();
  return r.ok ? { ok: true, message: r.message, ...(r.id ? { id: r.id } : {}) } : { ok: false, error: r.error };
}

const inputSchema = z.object({
  title: z.string().max(400),
  slug: z.string().max(120),
  description: z.string().max(800),
  body: z.string().max(80_000),
  category: z.enum(ARTICLE_CATEGORIES),
  author: z.string().max(200),
  cover: z.object({ path: z.string().max(300), alt: z.string().max(400) }).nullable(),
  references: z.array(z.object({ label: z.string().max(600), url: z.string().max(600).optional() })).max(40),
  figures: z.array(z.object({ label: z.string().max(400), value: z.string().max(120), url: z.string().max(600).optional() })).max(60),
});

export async function prepareDraftsAction(): Promise<ArticleResult> {
  const s = await requireAdmin();
  return done(await svc.prepareDrafts(s.email));
}

export async function createArticleAction(template: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const t = z.enum(["question", "libre"]).safeParse(template);
  return t.success ? done(await svc.createArticle(t.data, s.email)) : INVALID;
}

export async function saveArticleAction(id: unknown, input: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  const p = inputSchema.safeParse(input);
  return i.success && p.success ? done(await svc.saveArticle(i.data, p.data, s.email)) : INVALID;
}

export async function submitArticleAction(id: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  return i.success ? done(await svc.submitArticle(i.data, s.email)) : INVALID;
}

export async function returnToDraftAction(id: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  return i.success ? done(await svc.returnToDraft(i.data, s.email)) : INVALID;
}

/** Approuver et publier : seul le propriétaire (requireAdmin). */
export async function publishArticleAction(id: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  return i.success ? done(await svc.publishArticle(i.data, s.email)) : INVALID;
}

export async function unpublishArticleAction(id: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  return i.success ? done(await svc.unpublishArticle(i.data, s.email)) : INVALID;
}

export async function refreshArticleAction(id: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  return i.success ? done(await svc.refreshFromTemplate(i.data, s.email)) : INVALID;
}

export async function restorePreviousAction(id: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  return i.success ? done(await svc.restorePreviousBody(i.data, s.email)) : INVALID;
}

export async function improveStyleAction(id: unknown): Promise<ArticleResult> {
  const s = await requireAdmin();
  const i = articleId.safeParse(id);
  return i.success ? done(await svc.improveStyle(i.data, s.email)) : INVALID;
}

/** Aperçu du corps (même rendu que la page publique, liens automatiques compris). Rien n'est enregistré. */
export async function previewArticleAction(id: unknown, body: unknown): Promise<{ html: string; links: number } | null> {
  await requireAdmin();
  const i = articleId.safeParse(id);
  const b = z.string().max(80_000).safeParse(body);
  if (!i.success || !b.success) return null;
  const a = (await readBlogue()).articles.find((x) => x.id === i.data);
  if (!a) return null;
  const r = await renderArticleMarkdown(b.data, articleLinkTargets(a.mentions), { exclude: [articlePath(a.slug)] });
  return { html: r.html, links: r.linked.length };
}
