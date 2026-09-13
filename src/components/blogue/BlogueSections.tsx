/* ==================================================================
   /blogue — « Le carnet » : héros, liste des articles, encadré du
   palmarès. Composants serveur ; animations en CSS (blogue.css) et
   une seule île cliente (BlReveal) pour l'apparition au défilement.
   ================================================================== */

import Image from "next/image";
import Link from "next/link";
import { typo } from "@/components/content-hero/typo";
import { fmtTemp } from "@/lib/presence/format";
import { fmtDayOfMonth, fmtLongDate, fmtShortMonth } from "@/lib/blogue/dates";
import { lastModified } from "@/lib/blogue/feed";
import { readMinutes, wordCount } from "@/lib/blogue/text";
import { articlePath, CATEGORY_LABELS, PALMARES_PATH, type BlogArticle } from "@/lib/blogue/types";
import type { PalmaresRow } from "@/lib/blogue/palmares";

export function BlogueHero({ count }: { count: number }) {
  return (
    <section className="bl-hero" aria-labelledby="bl-titre">
      <div className="bl-margin" aria-hidden="true" />
      <div className="bl-wrap">
        <nav className="bl-crumbs" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link> <span aria-hidden="true">/</span> <span aria-current="page">Blogue</span>
        </nav>
        <p className="bl-eyebrow">Le blogue{count > 0 ? ` · ${count} ${count > 1 ? "articles" : "article"}` : ""}</p>
        <h1 id="bl-titre" className="bl-hero__title">
          <span className="bl-line">
            <span>Ce que disent</span>
          </span>
          <span className="bl-line">
            <span>les données,</span>
          </span>
          <span className="bl-line">
            <span>
              <em>une question à la fois.</em>
            </span>
          </span>
        </h1>
        <div className="bl-hero__grid">
          <p className="bl-hero__lead">
            {typo(
              "Des articles appuyés sur les données du site ou sur une vraie question de client : le froid de chaque municipalité, ce que disent les fiches certifiées, les montants LogisVert officiels. Écrits simplement, pour vous aider à choisir.",
            )}
          </p>
          <ol className="bl-rules" aria-label="Nos règles">
            <li>
              <b>01</b>
              <strong>Chaque chiffre a sa source</strong>
              <span>{typo("Tiré des données du site ou d'un document public, et cité en lien au bas de l'article.")}</span>
            </li>
            <li>
              <b>02</b>
              <strong>Un auteur, deux dates</strong>
              <span>{typo("La date de publication et celle de la dernière mise à jour, sur chaque article.")}</span>
            </li>
            <li>
              <b>03</b>
              <strong>Relu avant publication</strong>
              <span>{typo("Rien ne part en ligne sans la relecture du propriétaire.")}</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Entry({ a, lead }: { a: BlogArticle; lead: boolean }) {
  const minutes = readMinutes(wordCount(a.body));
  const updated = lastModified(a);
  const published = a.publishedAt as string;
  return (
    <li className={`bl-entry${lead ? " bl-entry--lead" : ""}`} data-reveal>
      <span className="bl-entry__tick" aria-hidden="true" />
      <time className="bl-entry__date" dateTime={published}>
        <b>{fmtDayOfMonth(published)}</b>
        <span>{fmtShortMonth(published)}</span>
      </time>
      <div>
        <p className="bl-entry__cat">
          {CATEGORY_LABELS[a.category]} · {minutes} min de lecture
        </p>
        <h3>
          <Link href={articlePath(a.slug)}>{typo(a.title)}</Link>
        </h3>
        <p className="bl-entry__desc">{typo(a.description)}</p>
        <p className="bl-entry__by">
          Par {typo(a.author)}
          {updated && updated !== published ? ` · mis à jour le ${fmtLongDate(updated)}` : ""}
        </p>
      </div>
      {a.cover ? (
        <Link href={articlePath(a.slug)} className="bl-entry__img" tabIndex={-1} aria-hidden="true">
          <Image src={a.cover.path} alt="" fill sizes="(min-width: 1024px) 300px, 100vw" />
        </Link>
      ) : null}
    </li>
  );
}

export function BlogueListing({ articles }: { articles: BlogArticle[] }) {
  return (
    <section className="bl-listing" aria-labelledby="bl-liste">
      <div className="bl-margin" aria-hidden="true" style={{ animation: "none" }} />
      <div className="bl-wrap">
        <div className="bl-listing__head">
          <h2 id="bl-liste">Les articles</h2>
          <a className="bl-rss" href="/blogue/rss.xml">
            Flux RSS
          </a>
        </div>
        {articles.length ? (
          <ol className="bl-list">
            {articles.map((a, i) => (
              <Entry key={a.id} a={a} lead={i === 0} />
            ))}
          </ol>
        ) : (
          <div className="bl-empty">
            <p>{typo("Les premiers articles sont en relecture.")}</p>
            <span>{typo("En attendant, le Palmarès du froid classe les municipalités du Québec selon leurs nuits de janvier, avec sa méthode et ses sources.")}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export function BloguePalmares({ year, total, top }: { year: number; total: number; top: PalmaresRow[] }) {
  return (
    <div className="bl-wrap" style={{ paddingBottom: 96 }}>
      <aside className="bl-palmares" aria-labelledby="bl-palmares" data-reveal>
        <div>
          <p className="bl-palmares__kicker">Données · {year}</p>
          <h2 id="bl-palmares">{typo(`Palmarès du froid ${year}`)}</h2>
          <p>
            {typo(
              `${total.toLocaleString("fr-CA")} municipalités classées selon leurs nuits de janvier, avec leur température de conception et les modèles du catalogue qui chauffent encore à ce froid, selon leur fabricant. Tableau à trier, carte, méthode et sources.`,
            )}
          </p>
          <Link href={PALMARES_PATH} className="bl-palmares__cta">
            Voir le palmarès <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ol aria-label="Les nuits de janvier les plus froides">
          {top.map((r) => (
            <li key={r.code}>
              <span>
                {r.name}
                <small>
                  {r.region} · station {r.stationName}
                </small>
              </span>
              <b>{fmtTemp(r.janMinC)}</b>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
