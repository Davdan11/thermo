/* ==================================================================
   /blogue/[slug] : ouverture de l'article (page blanche, rubrique dans
   sa teinte, titre à empattements, auteur et deux dates, couverture
   qui s'ouvre depuis le centre) et bloc « Sources et méthode ».
   Composants serveur ; le corps réutilise la mise en page des guides.
   ================================================================== */

import Image from "next/image";
import Link from "next/link";
import { typo } from "@/components/content-hero/typo";
import { fmtLongDate } from "@/lib/blogue/dates";
import { lastModified } from "@/lib/blogue/feed";
import { CATEGORY_LABELS, type ArticleCategory, type BlogArticle } from "@/lib/blogue/types";

/** Teinte de chaque rubrique du blogue (lisible sur blanc). */
export const BLOG_ACCENT: Record<ArticleCategory, string> = {
  donnees: "#1F5F8B",
  logisvert: "#1F6B4A",
  choisir: "#8A5A12",
  entretien: "#5B6320",
  question: "#7A3E5C",
};

export function ArticleOpeningBlog({ a, minutes }: { a: BlogArticle; minutes: number }) {
  const published = a.publishedAt as string;
  const updated = lastModified(a);
  return (
    <header className="bl-open" style={{ ["--bl-cat" as string]: BLOG_ACCENT[a.category] }}>
      <nav className="bl-crumbs" aria-label="Fil d’Ariane">
        <Link href="/">Accueil</Link>
        <span aria-hidden="true">/</span>
        <Link href="/blogue">Blogue</Link>
      </nav>
      <p className="bl-open__kicker">
        <i aria-hidden="true" />
        {CATEGORY_LABELS[a.category]}
        <i aria-hidden="true" />
      </p>
      <h1 className="bl-open__title">{typo(a.title)}</h1>
      <p className="bl-open__desc">{typo(a.description)}</p>
      <p className="bl-open__by">
        <span>
          Par <strong>{typo(a.author)}</strong>
        </span>
        <span>
          Publié le <time dateTime={published}>{fmtLongDate(published)}</time>
        </span>
        {updated !== published ? (
          <span>
            Mis à jour le <time dateTime={updated}>{fmtLongDate(updated)}</time>
          </span>
        ) : null}
        <span>{minutes} min de lecture</span>
      </p>
      {a.cover ? (
        <div className="bl-open__cover">
          <Image src={a.cover.path} alt={a.cover.alt} fill priority sizes="(min-width: 1240px) 1240px, 100vw" />
        </div>
      ) : (
        <div className="bl-open__rule" aria-hidden="true" />
      )}
    </header>
  );
}

const show = (v: unknown) => (typeof v === "boolean" ? (v ? "Oui" : "Non") : v === null || v === undefined ? "—" : String(v).replace(/(\d)\.(\d)/g, "$1,$2"));

export function ArticleSourcesBlock({ a }: { a: BlogArticle }) {
  const values = Object.entries(a.source.values);
  return (
    <section className="bl-sources" aria-labelledby="bl-sources">
      <div className="bl-sources__box">
        <h2 id="bl-sources">Sources et méthode</h2>
        <p className="bl-sources__lead">{typo("Chaque chiffre de cet article vient d'une de ces sources. Les valeurs calculées sont expliquées plus bas.")}</p>
        <ol>
          {a.references.map((r, i) => (
            <li key={i}>
              <span>
                {r.url ? (
                  <a href={r.url} {...(/^https?:\/\//.test(r.url) ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {typo(r.label)}
                  </a>
                ) : (
                  typo(r.label)
                )}
              </span>
            </li>
          ))}
          {a.figures.map((f) => (
            <li key={f.id}>
              <span>
                {typo(f.label)} : {f.value}
                {f.url ? (
                  <>
                    {" "}
                    (
                    <a href={f.url} {...(/^https?:\/\//.test(f.url) ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      source
                    </a>
                    )
                  </>
                ) : null}
              </span>
            </li>
          ))}
        </ol>
        {values.length ? (
          <details>
            <summary>Les valeurs exactes utilisées ({values.length})</summary>
            <dl>
              {values.map(([k, v]) => (
                <div key={k}>
                  <dt>{typo(a.source.labels[k] ?? k)}</dt>
                  <dd>{show(v)}</dd>
                </div>
              ))}
            </dl>
            {a.source.derived?.length ? (
              <ul>
                {a.source.derived.map((d) => (
                  <li key={d.key}>
                    <b>{typo(a.source.labels[d.key] ?? d.key)}</b> : {typo(d.formula)}
                  </li>
                ))}
              </ul>
            ) : null}
          </details>
        ) : null}
        <p className="bl-sources__note">
          {typo(
            `Article relu par le propriétaire avant publication.${a.dataDate ? ` Chiffres tirés des données du site du ${fmtLongDate(`${a.dataDate}T12:00:00Z`)}.` : ""} Une erreur ? Écrivez-nous à info@thermopompesavendre.ca : nous corrigeons et nous datons la mise à jour.`,
          )}
        </p>
      </div>
    </section>
  );
}
