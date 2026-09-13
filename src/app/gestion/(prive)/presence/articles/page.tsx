/* Studio de présence, onglet « Articles » : les articles du blogue par statut (à approuver, brouillons, publiés), le journal. */
import type { Metadata } from "next";
import Link from "next/link";
import "@/components/gestion/presence/articles.css";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { fmtLongDate } from "@/lib/blogue/dates";
import { publishProblems } from "@/lib/blogue/service";
import { readBlogue } from "@/lib/blogue/store";
import { TEMPLATE_LABELS } from "@/lib/blogue/templates";
import { ARTICLE_STATUS_LABELS, articlePath, CATEGORY_LABELS, type BlogArticle } from "@/lib/blogue/types";
import { fmtWhen } from "@/lib/presence/time";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { SectionHeader } from "@/components/gestion/kit/Card";
import { cx } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { ArticlesToolbar } from "@/components/gestion/presence/ArticlesToolbar";
import { PresenceTabs } from "@/components/gestion/presence/PresenceTabs";

export const metadata: Metadata = { title: "Articles du blogue" };

const TONE = { brouillon: "muted", a_approuver: "warn", publie: "ok" } as const;

function Row({ a, all }: { a: BlogArticle; all: BlogArticle[] }) {
  const problems = a.status === "publie" ? [] : publishProblems(a, all);
  return (
    <li>
      <Link href={`/gestion/presence/articles/${a.id}`} className="ar-row">
        <span className="ar-row__bar" aria-hidden />
        <span className="ar-row__main">
          <span className="ar-row__top">
            <Chip tone={TONE[a.status]} dot>
              {ARTICLE_STATUS_LABELS[a.status]}
            </Chip>
            <span>{CATEGORY_LABELS[a.category]}</span>
            <span>· {TEMPLATE_LABELS[a.template]}</span>
            {a.status === "publie" && a.publishedAt ? <span>· en ligne depuis le {fmtLongDate(a.publishedAt)}</span> : <span>· modifié {fmtWhen(a.updatedAt)}</span>}
            {a.status !== "publie" ? problems.length ? <Chip tone="cream">{problems.length === 1 ? "1 point à régler" : `${problems.length} points à régler`}</Chip> : <Chip tone="ok">Prêt à publier</Chip> : null}
          </span>
          <span className="ar-row__title">{a.title}</span>
          <span className="ar-row__desc">{a.description}</span>
        </span>
      </Link>
    </li>
  );
}

export default async function ArticlesPage() {
  await requireAdmin();
  const data = await readBlogue();
  const all = data.articles;
  const byUpdate = (x: BlogArticle, y: BlogArticle) => y.updatedAt.localeCompare(x.updatedAt);
  const toApprove = all.filter((a) => a.status === "a_approuver").sort(byUpdate);
  const drafts = all.filter((a) => a.status === "brouillon").sort(byUpdate);
  const published = all.filter((a) => a.status === "publie").sort((x, y) => (y.publishedAt ?? "").localeCompare(x.publishedAt ?? ""));

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Présence</p>
          <h1 className="k-h1">
            Articles <em>du blogue</em>
          </h1>
          <p className="k-lead">Préparés à partir des données du site, avec leurs sources. Vous relisez, vous corrigez au besoin, vous publiez : l’article part en ligne sans rebuild, et sa publication Facebook et Instagram arrive dans le studio, à approuver.</p>
        </div>
        <ArticlesToolbar />
      </Reveal>

      <PresenceTabs current="/gestion/presence/articles" />

      <div className="ar-kpis">
        <div className={cx("ar-kpi", toApprove.length > 0 && "is-hot")}>
          <span>À approuver</span>
          <b>{toApprove.length}</b>
        </div>
        <div className="ar-kpi">
          <span>Brouillons</span>
          <b>{drafts.length}</b>
        </div>
        <div className="ar-kpi">
          <span>Publiés</span>
          <b>{published.length}</b>
        </div>
      </div>

      <SectionHeader n="01" title="À approuver" lead={toApprove.length ? "Relisez chaque article : chiffres, ton, liens. « Approuver et publier » le met en ligne." : undefined} />
      {toApprove.length ? (
        <ul className="ar-list">
          {toApprove.map((a) => (
            <Row key={a.id} a={a} all={all} />
          ))}
        </ul>
      ) : (
        <EmptyState title="Rien à approuver" body="« Préparer les brouillons » écrit les articles des gabarits (palmarès du froid, LogisVert, fiches certifiées, types de thermopompes, hiver) à partir des données du jour." />
      )}

      <SectionHeader n="02" title="Brouillons" lead={drafts.length ? "À compléter : la question de la semaine s’écrit avec vos mots, sans rien qui permette de reconnaître la personne." : undefined} />
      {drafts.length ? (
        <ul className="ar-list">
          {drafts.map((a) => (
            <Row key={a.id} a={a} all={all} />
          ))}
        </ul>
      ) : (
        <EmptyState compact title="Aucun brouillon" body="Une question reçue cette semaine ? Créez « Question de la semaine »." />
      )}

      <SectionHeader n="03" title="Publiés" />
      {published.length ? (
        <ul className="ar-list">
          {published.map((a) => (
            <Row key={a.id} a={a} all={all} />
          ))}
        </ul>
      ) : (
        <EmptyState compact title="Aucun article en ligne" body={`Le blogue public (${articlePath("").replace(/\/$/, "")}) affiche seulement les articles publiés.`} />
      )}

      <SectionHeader n="04" title="Journal" />
      {data.log.length ? (
        <ol className="pr-log">
          {data.log.slice(0, 12).map((l, i) => (
            <li key={`${l.at}-${i}`} className={`is-${l.level}`}>
              <span>
                <time dateTime={l.at}>{fmtWhen(l.at)}</time>
                {l.articleId ? (
                  <Link href={`/gestion/presence/articles/${l.articleId}`} className="k-link">
                    {l.message}
                  </Link>
                ) : (
                  l.message
                )}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <EmptyState compact title="Journal vide" body="Chaque préparation, modification et publication y laisse une trace." />
      )}
    </>
  );
}
