/* ==================================================================
   Opérations du blogue (serveur). Les Server Actions de
   /gestion/presence/articles vérifient la session (requireAdmin),
   puis appellent ces fonctions. Chaque écriture passe par mutateBlogue
   (verrou). Le catalogue n'est chargé que pour préparer un brouillon.

   Parcours : brouillon → à approuver → publié.
   - Les brouillons préparés par le moteur arrivent « à approuver ».
   - « Approuver et publier » vérifie que l'article est publiable
     (chaque nombre dans sa source, sources présentes, aucune marque
     « [À écrire] », Loi 25 pour la question de la semaine), le publie,
     revalide les pages (ISR, sans rebuild), prépare sa publication
     Facebook et Instagram dans le studio et avertit les moteurs de
     recherche (point d'extension IndexNow).
   ================================================================== */

import { randomBytes } from "node:crypto";
import { privacyMessage, privacyProblems } from "@/lib/presence/loi25";
import { mutatePresence } from "@/lib/presence/store";
import { addLog as addPresenceLog } from "@/lib/presence/store";
import { siteUrl } from "@/lib/presence/utm";
import { proposeStyle, type StyleClient } from "./assistant";
import { announceUrls } from "./diffusion";
import type { BlogFacts } from "./facts";
import { validImagePath } from "./images";
import { queueArticlePost, type QueueOutcome } from "./presence-bridge";
import { revalidateArticle, type Revalidator } from "./revalidate";
import { addBlogueLog, mutateBlogue } from "./store";
import { buildDraft, DATA_TEMPLATES, TEMPLATE_LABELS, type ArticleDraft } from "./templates";
import { articleUnknownNumbers, TODO_RE, wordCount } from "./text";
import { ARTICLE_CATEGORIES, articlePath, DEFAULT_AUTHOR, RESERVED_SLUGS, SLUG_MAX, SLUG_RE, type ArticleCategory, type ArticleCover, type ArticleReference, type BlogArticle, type BlogueData, type TemplateId } from "./types";

export type Result = { ok: true; message: string; id?: string } | { ok: false; error: string };
const ok = (message: string, id?: string): Result => ({ ok: true, message, ...(id ? { id } : {}) });
const fail = (error: string): Result => ({ ok: false, error });

export interface ServiceDeps {
  now?: Date;
  /** Faits imposés (tests) ; sinon lus dans les données du site. */
  facts?: BlogFacts;
  revalidate?: Revalidator;
  announce?: (urls: string[]) => Promise<unknown>;
}

async function factsOf(deps: ServiceDeps): Promise<BlogFacts> {
  if (deps.facts) return deps.facts;
  const { getBlogFacts } = await import("./facts-site");
  return getBlogFacts(deps.now);
}

const find = (d: BlogueData, id: string) => d.articles.find((a) => a.id === id);
const newId = () => `a-${Date.now().toString(36)}${randomBytes(3).toString("hex")}`;

function uniqueSlug(d: BlogueData, slug: string, exceptId?: string): string {
  const taken = (s: string) => d.articles.some((a) => a.slug === s && a.id !== exceptId);
  if (!taken(slug)) return slug;
  for (let i = 2; i < 500; i++) {
    const s = `${slug}-${i}`;
    if (!taken(s)) return s;
  }
  throw new Error("Trop d’articles avec ce titre.");
}

function fromDraft(d: BlogueData, draft: ArticleDraft, status: BlogArticle["status"], now: Date, dataDate: string): BlogArticle {
  const iso = now.toISOString();
  return {
    id: newId(),
    slug: uniqueSlug(d, draft.slug),
    title: draft.title,
    description: draft.description,
    body: draft.body,
    category: draft.category,
    author: DEFAULT_AUTHOR,
    cover: draft.cover,
    status,
    template: draft.template,
    references: draft.references,
    source: draft.source,
    figures: [],
    mentions: draft.mentions,
    createdAt: iso,
    updatedAt: iso,
    ...(status === "a_approuver" ? { submittedAt: iso } : {}),
    presencePostIds: [],
    dataDate,
  };
}

/* ---------------- Préparer les brouillons ---------------- */

/** Brouillons des gabarits de données (à approuver) et une question de la semaine à remplir. N'écrase jamais un article. */
export async function prepareDrafts(by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  const f = await factsOf(deps);
  return mutateBlogue((d) => {
    const created: string[] = [];
    for (const t of DATA_TEMPLATES) {
      if (d.articles.some((a) => a.template === t)) continue;
      const a = fromDraft(d, buildDraft(t, f), "a_approuver", now, f.date);
      d.articles.push(a);
      created.push(a.title);
    }
    if (!d.articles.some((a) => a.template === "question" && a.status !== "publie")) {
      const q = fromDraft(d, buildDraft("question", f), "brouillon", now, f.date);
      d.articles.push(q);
      created.push("Question de la semaine (à écrire)");
    }
    if (!created.length) return { result: ok("Rien de nouveau : chaque gabarit a déjà son article. « Mettre à jour les chiffres » rafraîchit un article existant."), changed: false };
    addBlogueLog(d, { level: "info", message: `${created.length} brouillons préparés par ${by} : ${created.join(" ; ")}.` });
    return { result: ok(`${created.length} brouillons préparés, prêts pour la relecture. Rien n’est publié.`), changed: true };
  });
}

/** Nouvel article vide (libre) ou nouvelle question de la semaine, en brouillon. */
export async function createArticle(template: Extract<TemplateId, "question" | "libre">, by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  const date = now.toISOString().slice(0, 10);
  const draft = buildDraft(template, { date } as BlogFacts);
  return mutateBlogue((d) => {
    const a = fromDraft(d, draft, "brouillon", now, date);
    d.articles.push(a);
    addBlogueLog(d, { level: "info", articleId: a.id, message: `« ${TEMPLATE_LABELS[template]} » créé par ${by}.` });
    return { result: ok("Brouillon créé.", a.id), changed: true };
  });
}

/* ---------------- Contrôles ---------------- */

const BODY_MIN_WORDS = 120;

/** Raisons qui empêchent la publication (vide = publiable). */
export function publishProblems(a: BlogArticle, all: BlogArticle[]): string[] {
  const out: string[] = [];
  if (a.title.trim().length < 8) out.push("Le titre est trop court.");
  if (a.description.trim().length < 40) out.push("Le chapeau est trop court (40 caractères au moins).");
  if (wordCount(a.body) < BODY_MIN_WORDS) out.push(`Le texte est trop court (${BODY_MIN_WORDS} mots au moins).`);
  if (TODO_RE.test(`${a.title}\n${a.description}\n${a.body}`)) out.push("Il reste des passages « [À écrire] ».");
  if (!a.references.length) out.push("Ajoutez au moins une source.");
  if (!a.author.trim()) out.push("L’auteur manque.");
  if (!SLUG_RE.test(a.slug)) out.push("Adresse (slug) invalide.");
  if (all.some((x) => x.id !== a.id && x.slug === a.slug)) out.push("Un autre article a déjà cette adresse.");
  if (a.cover && !validImagePath(a.cover.path)) out.push("Photo de couverture invalide.");
  if (a.cover && !a.cover.alt.trim()) out.push("Décrivez la photo de couverture (texte de remplacement).");
  const unknown = articleUnknownNumbers(a);
  if (unknown.length) out.push(`Chiffres sans source : ${[...new Set(unknown.map((n) => n.raw))].join(", ")}. Retirez-les ou ajoutez-les dans « Chiffres ajoutés » avec leur source.`);
  if (a.category === "question") {
    const msg = privacyMessage(privacyProblems(`${a.title}\n${a.description}\n${a.body}`));
    if (msg) out.push(msg);
  }
  return out;
}

/* ---------------- Enregistrer ---------------- */

export interface ArticleInput {
  title: string;
  slug: string;
  description: string;
  body: string;
  category: string;
  author: string;
  cover: ArticleCover | null;
  references: ArticleReference[];
  figures: Array<{ label: string; value: string; url?: string }>;
}

const URL_OK = (u: string) => /^https?:\/\/[^\s]+$/.test(u) || /^\/[^\s]*$/.test(u);
const clean = (s: string) => s.replace(/\r\n/g, "\n").trim();

function validateInput(input: ArticleInput): string | null {
  if (!clean(input.title) || clean(input.title).length > 160) return "Titre vide ou trop long (160 caractères au plus).";
  if (clean(input.description).length > 320) return "Chapeau trop long (320 caractères au plus).";
  if (input.body.length > 60_000) return "Texte trop long.";
  if (!SLUG_RE.test(input.slug) || input.slug.length > SLUG_MAX) return "Adresse invalide : lettres minuscules, chiffres et traits d’union seulement.";
  if (RESERVED_SLUGS.has(input.slug)) return "Cette adresse est réservée par le site : choisissez-en une autre.";
  if (!(ARTICLE_CATEGORIES as readonly string[]).includes(input.category)) return "Rubrique invalide.";
  if (clean(input.author).length > 80) return "Nom d’auteur trop long.";
  if (input.cover && (!validImagePath(input.cover.path) || input.cover.alt.length > 200)) return "Photo de couverture invalide.";
  if (input.references.length > 20 || input.references.some((r) => !clean(r.label) || r.label.length > 300 || (r.url && !URL_OK(r.url)))) return "Sources invalides : un libellé, et une adresse web ou une page du site.";
  if (input.figures.length > 30 || input.figures.some((f) => !clean(f.label) || f.label.length > 200 || !/\d/.test(f.value) || f.value.length > 60 || (f.url && !URL_OK(f.url)))) return "Chiffres ajoutés invalides : un libellé, une valeur chiffrée et, idéalement, l’adresse de la source.";
  return null;
}

export async function saveArticle(id: string, input: ArticleInput, by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  const err = validateInput(input);
  if (err) return fail(err);
  if (input.category === "question") {
    const msg = privacyMessage(privacyProblems(`${input.title}\n${input.description}\n${input.body}`));
    if (msg) return fail(msg);
  }
  const r = await mutateBlogue<{ res: Result; slug?: string; live: boolean }>((d) => {
    const a = find(d, id);
    if (!a) return { result: { res: fail("Article introuvable."), live: false }, changed: false };
    if (a.publishedAt && input.slug !== a.slug) return { result: { res: fail("L’adresse d’un article déjà publié ne change plus (les liens partagés doivent rester valides)."), live: false }, changed: false };
    if (d.articles.some((x) => x.id !== id && x.slug === input.slug)) return { result: { res: fail("Un autre article a déjà cette adresse."), live: false }, changed: false };
    const next: BlogArticle = {
      ...a,
      title: clean(input.title),
      slug: input.slug,
      description: clean(input.description),
      body: input.body.replace(/\r\n/g, "\n").trim(),
      category: input.category as ArticleCategory,
      author: clean(input.author) || DEFAULT_AUTHOR,
      cover: input.cover ? { path: input.cover.path, alt: clean(input.cover.alt) } : null,
      references: input.references.map((x) => ({ label: clean(x.label), ...(x.url?.trim() ? { url: x.url.trim() } : {}) })),
      figures: input.figures.map((f, i) => ({ id: `c${i + 1}`, label: clean(f.label), value: clean(f.value), ...(f.url?.trim() ? { url: f.url.trim() } : {}) })),
      updatedAt: now.toISOString(),
    };
    if (a.status === "publie") {
      const problems = publishProblems(next, d.articles);
      if (problems.length) return { result: { res: fail(`Article en ligne : la modification doit rester publiable. ${problems.join(" ")}`), live: false }, changed: false };
      next.modifiedAt = now.toISOString();
    }
    Object.assign(a, next);
    addBlogueLog(d, { level: "info", articleId: id, message: `Modifié par ${by}${a.status === "publie" ? " (en ligne, mis à jour)" : ""}.` });
    return { result: { res: ok(a.status === "publie" ? "Enregistré et mis à jour en ligne." : "Enregistré."), slug: a.slug, live: a.status === "publie" }, changed: true };
  });
  if (r.res.ok && r.live && r.slug) await afterPublicChange(r.slug, deps);
  return r.res;
}

/* ---------------- Statuts ---------------- */

export async function submitArticle(id: string, by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  return mutateBlogue((d) => {
    const a = find(d, id);
    if (!a || a.status !== "brouillon") return { result: fail("Seul un brouillon peut être envoyé à l’approbation."), changed: false };
    if (TODO_RE.test(`${a.title}\n${a.description}\n${a.body}`)) return { result: fail("Il reste des passages « [À écrire] » : complétez-les d’abord."), changed: false };
    a.status = "a_approuver";
    a.submittedAt = now.toISOString();
    a.updatedAt = now.toISOString();
    addBlogueLog(d, { level: "info", articleId: id, message: `Envoyé à l’approbation par ${by}.` });
    return { result: ok("Envoyé à l’approbation."), changed: true };
  });
}

export async function returnToDraft(id: string, by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  return mutateBlogue((d) => {
    const a = find(d, id);
    if (!a || a.status !== "a_approuver") return { result: fail("Seul un article à approuver peut revenir en brouillon."), changed: false };
    a.status = "brouillon";
    a.updatedAt = now.toISOString();
    addBlogueLog(d, { level: "info", articleId: id, message: `Remis en brouillon par ${by}.` });
    return { result: ok("Remis en brouillon."), changed: true };
  });
}

/* ---------------- Publier ---------------- */

async function afterPublicChange(slug: string, deps: ServiceDeps): Promise<void> {
  revalidateArticle(slug, deps.revalidate);
  const base = siteUrl();
  try {
    await (deps.announce ?? ((urls: string[]) => announceUrls(urls)))([`${base}${articlePath(slug)}`, `${base}/blogue`]);
  } catch (err) {
    console.warn("[blogue] annonce impossible :", err instanceof Error ? err.message : err);
  }
}

export async function publishArticle(id: string, by: string, deps: ServiceDeps = {}): Promise<Result & { presence?: QueueOutcome["kind"] }> {
  const now = deps.now ?? new Date();
  const snap = await mutateBlogue<BlogArticle | string>((d) => {
    const a = find(d, id);
    if (!a) return { result: "Article introuvable.", changed: false };
    if (a.status === "publie") return { result: "Déjà publié.", changed: false };
    const problems = publishProblems(a, d.articles);
    if (problems.length) return { result: `Pas encore publiable. ${problems.join(" ")}`, changed: false };
    const iso = now.toISOString();
    if (a.publishedAt) a.modifiedAt = iso;
    else a.publishedAt = iso;
    a.status = "publie";
    a.approvedBy = by;
    a.updatedAt = iso;
    addBlogueLog(d, { level: "ok", articleId: id, message: `Approuvé et publié par ${by}.` });
    return { result: structuredClone(a), changed: true };
  });
  if (typeof snap === "string") return fail(snap);

  // Republication : publication Facebook et Instagram dans la file du studio (à approuver selon les règles du studio).
  let outcome: QueueOutcome | null = null;
  try {
    outcome = await mutatePresence((pd) => {
      const o = queueArticlePost(pd, snap, now);
      return { result: o, changed: o.kind === "creee" };
    });
    if (outcome.kind !== "ignoree") {
      const postId = outcome.post.id;
      await mutateBlogue((d) => {
        const a = find(d, id);
        if (!a || a.presencePostIds.includes(postId)) return { result: null, changed: false };
        a.presencePostIds.push(postId);
        return { result: null, changed: true };
      });
    }
  } catch (err) {
    console.error("[blogue] publication du studio non préparée :", err instanceof Error ? err.message : err);
  }

  await afterPublicChange(snap.slug, deps);

  const presenceMsg = !outcome
    ? " La publication Facebook et Instagram n’a pas pu être préparée : créez-la depuis le studio."
    : outcome.kind === "creee"
      ? outcome.post.status === "planifiee"
        ? " Publication Facebook et Instagram planifiée dans le studio (gabarit déjà validé)."
        : " Publication Facebook et Instagram préparée dans le studio, à approuver."
      : outcome.kind === "existante"
        ? " Sa publication Facebook et Instagram existe déjà dans le studio."
        : ` ${outcome.reason}`;
  return { ok: true, message: `Publié : l’article est en ligne.${presenceMsg}`, ...(outcome ? { presence: outcome.kind } : {}) };
}

export async function unpublishArticle(id: string, by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  const r = await mutateBlogue<{ slug: string; postIds: string[] } | string>((d) => {
    const a = find(d, id);
    if (!a || a.status !== "publie") return { result: "Cet article n’est pas en ligne.", changed: false };
    a.status = "brouillon";
    a.updatedAt = now.toISOString();
    addBlogueLog(d, { level: "info", articleId: id, message: `Retiré du blogue par ${by}.` });
    return { result: { slug: a.slug, postIds: [...a.presencePostIds] }, changed: true };
  });
  if (typeof r === "string") return fail(r);
  // Une publication du studio qui n'est pas encore partie ne doit pas pointer vers une page retirée.
  let withdrawn = 0;
  if (r.postIds.length) {
    withdrawn = await mutatePresence((pd) => {
      let n = 0;
      for (const p of pd.posts) {
        if (!r.postIds.includes(p.id) || p.status === "publiee" || p.status === "rejetee") continue;
        if (p.publish.facebook?.postId || p.publish.instagram?.mediaId || p.publish.facebook?.photoIds?.length || p.publish.instagram?.containerId) continue;
        p.status = "rejetee";
        p.rejectedAt = now.toISOString();
        p.rejectedBy = by;
        p.rejectReason = "Article retiré du blogue.";
        p.updatedAt = now.toISOString();
        addPresenceLog(pd, { level: "info", postId: p.id, message: `Rejetée : article retiré du blogue par ${by}.` });
        n++;
      }
      return { result: n, changed: n > 0 };
    });
  }
  await afterPublicChange(r.slug, deps);
  return ok(`Retiré du blogue : la page n’est plus servie.${withdrawn ? " Sa publication en attente dans le studio a été rejetée." : ""}`);
}

/* ---------------- Chiffres, assistant, retour arrière ---------------- */

/** Réécrit un article de gabarit avec les données du jour (articles de saison : mis à jour, pas réécrits). */
export async function refreshFromTemplate(id: string, by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  const f = await factsOf(deps);
  const r = await mutateBlogue<{ res: Result; slug?: string; live: boolean }>((d) => {
    const a = find(d, id);
    if (!a) return { result: { res: fail("Article introuvable."), live: false }, changed: false };
    if (!(DATA_TEMPLATES as readonly string[]).includes(a.template)) return { result: { res: fail("Cet article n’est pas tiré d’un gabarit de données."), live: false }, changed: false };
    const draft = buildDraft(a.template, f);
    const next: BlogArticle = { ...a, title: draft.title, description: draft.description, body: draft.body, references: draft.references, source: draft.source, mentions: draft.mentions, previousBody: a.body, dataDate: f.date, updatedAt: now.toISOString() };
    if (a.status === "publie") {
      const problems = publishProblems(next, d.articles);
      if (problems.length) return { result: { res: fail(problems.join(" ")), live: false }, changed: false };
      next.modifiedAt = now.toISOString();
    }
    Object.assign(a, next);
    addBlogueLog(d, { level: "info", articleId: id, message: `Chiffres mis à jour (données du ${f.date}) par ${by}.` });
    return { result: { res: ok(a.status === "publie" ? "Chiffres mis à jour, en ligne." : "Chiffres mis à jour. L’ancienne version reste récupérable."), slug: a.slug, live: a.status === "publie" }, changed: true };
  });
  if (r.res.ok && r.live && r.slug) await afterPublicChange(r.slug, deps);
  return r.res;
}

export async function restorePreviousBody(id: string, by: string, deps: ServiceDeps = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  return mutateBlogue((d) => {
    const a = find(d, id);
    if (!a || typeof a.previousBody !== "string") return { result: fail("Aucune version précédente."), changed: false };
    if (a.status === "publie") return { result: fail("Retirez d’abord l’article du blogue, ou modifiez le texte directement."), changed: false };
    const cur = a.body;
    a.body = a.previousBody;
    a.previousBody = cur;
    a.updatedAt = now.toISOString();
    addBlogueLog(d, { level: "info", articleId: id, message: `Version précédente rétablie par ${by}.` });
    return { result: ok("Version précédente rétablie."), changed: true };
  });
}

/** Propose un style plus fluide (Claude, si configuré) ; refusé si un chiffre ou un lien est ajouté. */
export async function improveStyle(id: string, by: string, deps: ServiceDeps & { client?: StyleClient; env?: Record<string, string | undefined> } = {}): Promise<Result> {
  const now = deps.now ?? new Date();
  const { readBlogue } = await import("./store");
  const a = (await readBlogue()).articles.find((x) => x.id === id);
  if (!a) return fail("Article introuvable.");
  if (a.status === "publie") return fail("Article en ligne : retirez-le d’abord pour le retravailler.");
  if (TODO_RE.test(a.body)) return fail("Complétez d’abord les passages « [À écrire] ».");
  const out = await proposeStyle(a, { client: deps.client, env: deps.env });
  return mutateBlogue((d) => {
    const cur = find(d, id);
    if (!cur) return { result: fail("Article introuvable."), changed: false };
    if (!out.ok) {
      cur.assistant = { at: now.toISOString(), model: out.model, accepted: false, note: out.reason };
      addBlogueLog(d, { level: "erreur", articleId: id, message: `Assistant : ${out.reason}` });
      return { result: fail(out.reason), changed: true };
    }
    if (cur.updatedAt !== a.updatedAt) return { result: fail("L’article a changé pendant la relecture : relancez l’assistant."), changed: false };
    cur.previousBody = cur.body;
    cur.body = out.body;
    cur.assistant = { at: now.toISOString(), model: out.model, accepted: true, note: "Style amélioré ; chiffres et liens vérifiés." };
    cur.updatedAt = now.toISOString();
    addBlogueLog(d, { level: "ok", articleId: id, message: `Style amélioré par l’assistant (${out.model}), demandé par ${by}. Chiffres et liens vérifiés.` });
    return { result: ok("Nouvelle version : aucun chiffre ni lien ajouté. Relisez-la ; « Revenir à la version précédente » reste possible."), changed: true };
  });
}
