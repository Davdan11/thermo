/* Atelier d'un article du blogue : éditeur, aperçu, contrôles, décisions ; d'où viennent les chiffres ; publication du studio liée. */
import { readdirSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import "@/components/gestion/presence/articles.css";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { styleAssistantStatus } from "@/lib/blogue/assistant";
import { articleLinkTargets } from "@/lib/blogue/links-site";
import { renderArticleMarkdown } from "@/lib/blogue/render";
import { readBlogue } from "@/lib/blogue/store";
import { DATA_TEMPLATES, TEMPLATE_LABELS } from "@/lib/blogue/templates";
import { ARTICLE_ID_RE, ARTICLE_STATUS_LABELS, articlePath } from "@/lib/blogue/types";
import { readPresence } from "@/lib/presence/store";
import { fmtWhen } from "@/lib/presence/time";
import { STATUS_LABELS, type SourceValue } from "@/lib/presence/types";
import { siteUrl } from "@/lib/presence/utm";
import { STATUS_TONE } from "@/lib/presence/view";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { ArticleWorkbench } from "@/components/gestion/presence/ArticleWorkbench";

export const metadata: Metadata = { title: "Article" };

const show = (v: SourceValue) => (typeof v === "boolean" ? (v ? "Oui" : "Non") : v === null ? "—" : String(v));

/** Photos du site proposées pour la couverture et le corps (guides et photos générées pour les guides). */
function sitePhotos(): Array<{ path: string; label: string }> {
  const out: Array<{ path: string; label: string }> = [];
  for (const dir of ["images/guides", "images/guides/generes"]) {
    try {
      for (const f of readdirSync(path.join(process.cwd(), "public", dir))) {
        if (/\.(jpe?g|png|webp)$/i.test(f)) out.push({ path: `/${dir}/${f}`, label: f.replace(/\.[a-z]+$/i, "").replace(/[-_]+/g, " ") });
      }
    } catch {
      /* dossier absent */
    }
  }
  return out.slice(0, 40);
}

export default async function ArticleEditPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!ARTICLE_ID_RE.test(id)) notFound();
  const a = (await readBlogue()).articles.find((x) => x.id === id);
  if (!a) notFound();
  const { html } = await renderArticleMarkdown(a.body, articleLinkTargets(a.mentions), { exclude: [articlePath(a.slug)] });
  const assistant = styleAssistantStatus();
  const posts = (await readPresence()).posts.filter((p) => a.presencePostIds.includes(p.id));

  return (
    <>
      <Reveal className="k-pagehead">
        <div style={{ minWidth: 0 }}>
          <Link href="/gestion/presence/articles" className="pr-back">
            <ArrowLeft size={15} aria-hidden /> Articles
          </Link>
          <p className="k-eyebrow">
            {TEMPLATE_LABELS[a.template]}
            {a.dataDate ? ` · données du ${a.dataDate}` : ""}
          </p>
          <h1 className="k-h1 pr-title">{a.title}</h1>
          <p className="k-lead pr-when">
            <Chip tone={a.status === "publie" ? "ok" : a.status === "a_approuver" ? "warn" : "muted"} dot>
              {ARTICLE_STATUS_LABELS[a.status]}
            </Chip>
            <span>Modifié {fmtWhen(a.updatedAt)}</span>
            {a.publishedAt ? <span>· publié {fmtWhen(a.publishedAt)}</span> : null}
            {a.assistant ? <Chip tone={a.assistant.accepted ? "blue" : "cream"}>{a.assistant.accepted ? "Style revu par l’assistant" : "Proposition de l’assistant refusée"}</Chip> : null}
          </p>
        </div>
      </Reveal>

      <ArticleWorkbench
        key={a.updatedAt}
        article={{
          id: a.id,
          slug: a.slug,
          title: a.title,
          description: a.description,
          body: a.body,
          category: a.category,
          author: a.author,
          cover: a.cover,
          references: a.references,
          figures: a.figures,
          status: a.status,
          published: !!a.publishedAt,
          source: a.source,
          mentions: a.mentions,
          fromTemplate: (DATA_TEMPLATES as readonly string[]).includes(a.template),
          hasPrevious: typeof a.previousBody === "string",
        }}
        initialHtml={html}
        photos={sitePhotos()}
        assistant={{ enabled: assistant.enabled, ...(assistant.reason ? { reason: assistant.reason } : {}) }}
        publicUrl={`${siteUrl()}${articlePath(a.slug)}`}
      />

      <Card title="D’où viennent les chiffres" sub={a.dataDate ? `Valeurs lues dans les données du site le ${a.dataDate}. Chaque nombre du texte doit s’y trouver.` : "Article écrit à la main : déclarez chaque chiffre dans « Chiffres ajoutés »."}>
        {Object.keys(a.source.values).length ? (
          <dl className="pr-src">
            {Object.entries(a.source.values).map(([k, v]) => (
              <div key={k}>
                <dt>{a.source.labels[k] ?? k}</dt>
                <dd>{show(v)}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="g-hint">Aucune donnée du site reprise.</p>
        )}
        {a.source.derived?.length ? (
          <ul className="pr-datasets">
            {a.source.derived.map((d) => (
              <li key={d.key}>
                <b>{a.source.labels[d.key] ?? d.key}</b> : {d.formula}
              </li>
            ))}
          </ul>
        ) : null}
      </Card>

      <Card title="Republication" sub="À la publication, l’article crée sa publication Facebook et Instagram dans le studio, à approuver selon les règles du studio.">
        {posts.length ? (
          <ul className="pr-datasets">
            {posts.map((p) => (
              <li key={p.id}>
                <Link className="k-link" href={`/gestion/presence/${p.id}`}>
                  {fmtWhen(p.scheduledAt)} <ExternalLink size={12} aria-hidden />
                </Link>{" "}
                <Chip tone={STATUS_TONE[p.status]} dot>
                  {STATUS_LABELS[p.status]}
                </Chip>
              </li>
            ))}
          </ul>
        ) : (
          <p className="g-hint">Aucune publication liée pour l’instant.</p>
        )}
      </Card>
    </>
  );
}
