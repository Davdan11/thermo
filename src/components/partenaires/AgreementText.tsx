/* ==================================================================
   Conformité C3 — texte d'une version de l'entente, rendu depuis la
   version résolue (agreement.ts, resolveVersion) : parties,
   préambule, articles (numérotation de l'avocat ou automatique),
   annexes (tableaux, listes), blocs de signature.
   AUCUN texte juridique ici : tout vient des données. Les champs
   encore entre crochets sont surlignés (à remplir à l'envoi ou à la
   signature). Composant serveur : aucune interaction.
   ================================================================== */
import type { ResolvedAgreement } from "@/lib/gestion/partenaires/agreement";
import "./agreement-text.css";

const FIELD_RE = /(\[[^[\]\n]{1,80}\])/g;

function Txt({ text }: { text: string }) {
  const parts = text.split(FIELD_RE);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <mark key={i} className="ag-field" title="Champ rempli à l’envoi ou à la signature">
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  );
}

const paras = (s: string) => s.split(/\n{2,}/).filter((x) => x.trim());

export const articleAnchor = (n: string) => `article-${n.replace(/\./g, "-")}`;

export function AgreementText({ r, variant = "public" }: { r: ResolvedAgreement; variant?: "public" | "admin" }) {
  const master = r.parties.length > 0 || Boolean(r.signature);
  return (
    <div className={`ag ag--${variant}`}>
      {r.parties.length ? (
        <section className="ag-sec" id="parties">
          {r.headings?.parties ? <h2 className="ag-h">{r.headings.parties}</h2> : null}
          {r.parties.map((p, i) => (
            <p key={i} className={`ag-party${p.party ? ` is-${p.party}` : " is-neutral"}`}>
              <Txt text={p.text} />
            </p>
          ))}
        </section>
      ) : null}

      {r.preamble.trim() ? (
        <section className={master ? "ag-sec" : "ag-sec ag-sec--plain"} id="preambule">
          {master && r.headings?.preamble ? <h2 className="ag-h">{r.headings.preamble}</h2> : null}
          {paras(r.preamble).map((p, i) => (
            <p key={i} className="ag-pre">
              <Txt text={p} />
            </p>
          ))}
        </section>
      ) : null}

      {r.articles.map((a) => (
        <section key={a.index} id={articleAnchor(a.number)} className="ag-art">
          <p className="ag-art__n">Article {a.number}</p>
          <h2>{a.title}</h2>
          {a.paragraphs.map((p, j) => (
            <p key={j} className={`ag-para${p.ref ? "" : " ag-para--plain"}`}>
              {p.ref ? <b>{p.ref}</b> : null}
              <span>
                <Txt text={p.text} />
              </span>
            </p>
          ))}
        </section>
      ))}

      {r.annexes.map((an) => (
        <section key={an.letter} id={`annexe-${an.letter}`} className="ag-art ag-annex">
          <p className="ag-art__n">
            Annexe {an.letter}
            {an.form ? <span className="ag-tag">gabarit rempli pour chaque projet</span> : null}
          </p>
          <h2>{an.title}</h2>
          {an.table.length ? (
            <div className="ag-tablewrap">
              <table className="ag-table">
                <thead>
                  <tr>
                    {an.table[0].map((c, i) => (
                      <th key={i} scope="col">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {an.table.slice(1).map((row, i) => (
                    <tr key={i}>
                      {row.map((c, k) =>
                        k === 0 ? (
                          <th key={k} scope="row">
                            <Txt text={c} />
                          </th>
                        ) : (
                          <td key={k} data-col={an.table[0][k] ?? ""}>
                            <Txt text={c} />
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {an.checklist.length ? (
            <ol className="ag-checks">
              {an.checklist.map((c, i) => (
                <li key={i}>
                  <Txt text={c} />
                </li>
              ))}
            </ol>
          ) : null}
          {an.paragraphs.map((p, i) => (
            <p key={i} className="ag-para ag-para--plain">
              <span>
                <Txt text={p} />
              </span>
            </p>
          ))}
          {an.sections.map((s, i) => (
            <div key={i} className="ag-sub">
              <h3>{s.title}</h3>
              {s.paragraphs.map((p, k) => (
                <p key={k} className="ag-para ag-para--plain">
                  <span>
                    <Txt text={p} />
                  </span>
                </p>
              ))}
            </div>
          ))}
        </section>
      ))}

      {r.signature ? (
        <section className="ag-sec ag-sign" id="signatures">
          {r.headings?.signatures ? <h2 className="ag-h">{r.headings.signatures}</h2> : null}
          <div className="ag-sign__grid">
            <div className="ag-sign__box">
              <small>{r.signature.platformLabel}</small>
              <b>{r.signature.platform.name || <mark className="ag-field">[NOM]</mark>}</b>
              <span>{r.signature.platform.title || <mark className="ag-field">[TITRE]</mark>}</span>
            </div>
            <div className="ag-sign__box">
              <small>{r.signature.partnerLabel}</small>
              {r.signature.partner ? (
                <>
                  <b>{r.signature.partner.name}</b>
                  <span>{r.signature.partner.title}</span>
                </>
              ) : (
                <span className="ag-muted">Nom et titre du signataire, inscrits à la signature électronique</span>
              )}
            </div>
          </div>
          {r.signature.notes.map((n, i) => (
            <p key={i} className="ag-note">
              <Txt text={n} />
            </p>
          ))}
        </section>
      ) : null}
    </div>
  );
}

/** Sommaire : parties, articles (numéros de l'avocat), annexes. */
export function AgreementToc({ r, className }: { r: ResolvedAgreement; className?: string }) {
  return (
    <nav className={className} aria-label="Sommaire de l’entente">
      {r.parties.length ? (
        <a href="#parties">
          <b>§</b> {r.headings?.parties || "Parties"}
        </a>
      ) : null}
      {r.articles.map((a) => (
        <a key={a.index} href={`#${articleAnchor(a.number)}`}>
          <b>{a.number}</b> {a.title}
        </a>
      ))}
      {r.annexes.map((an) => (
        <a key={an.letter} href={`#annexe-${an.letter}`}>
          <b>{an.letter}</b> {an.title}
        </a>
      ))}
    </nav>
  );
}
