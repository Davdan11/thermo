/* ==================================================================
   Conformité C2 — document légal tiré de la trousse (politique de
   confidentialité, règles du programme de recommandation) : sections,
   paragraphes, listes et tableaux rendus MOT POUR MOT (texte lu dans
   les données, jamais dans le code), courriels et adresses web
   cliquables. Même présentation animée que les autres pages légales
   (héros « Document », sommaire collant, articles).
   ================================================================== */

import type { ReactNode } from "react";
import { DocArticle, DocSources, DocumentBody, type DocVariant } from "@/components/sections-v2/outils/document/DocumentBody";
import { DocumentHero } from "@/components/heroes-v2/outils/DocumentHero";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { getBreadcrumbSchema } from "@/lib/seo";
import type { DocBlock, FilledDoc } from "@/lib/consentements/textes";

const LINK_RE = /(https?:\/\/[^\s]+?)(?=[.,;:)]?(?:\s|$))|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

/** Texte tel quel ; adresses web et courriels rendus cliquables. */
export function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK_RE)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    const href = m[1] ? m[1] : `mailto:${m[2]}`;
    out.push(
      <a key={`${i}-${m[0]}`} href={href}>
        {m[0]}
      </a>,
    );
    last = i + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

const cell = { padding: "10px 14px", borderBottom: "1px solid rgba(17,20,24,0.12)", textAlign: "left" as const, verticalAlign: "top" as const };

export function DocBlocks({ blocks }: { blocks: DocBlock[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.kind === "p" ? (
          <p key={i}>
            <Rich text={b.text} />
          </p>
        ) : b.kind === "list" ? (
          <ul key={i}>
            {b.items.map((it, j) => (
              <li key={j}>
                <Rich text={it} />
              </li>
            ))}
          </ul>
        ) : (
          <div key={i} style={{ overflowX: "auto", margin: "8px 0 18px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95em" }}>
              <thead>
                <tr>
                  <th style={{ ...cell, fontWeight: 700, borderBottom: "1px solid rgba(17,20,24,0.4)" }}>{b.head[0]}</th>
                  <th style={{ ...cell, fontWeight: 700, borderBottom: "1px solid rgba(17,20,24,0.4)" }}>{b.head[1]}</th>
                </tr>
              </thead>
              <tbody>
                {b.rows.map(([k, v], j) => (
                  <tr key={j}>
                    <th scope="row" style={{ ...cell, fontWeight: 600, width: "38%" }}>
                      <Rich text={k} />
                    </th>
                    <td style={cell}>
                      <Rich text={v} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
      )}
    </>
  );
}

const anchor = (s: { number: string | null; id: string }) => `s-${(s.number ?? s.id).replace(/[^A-Za-z0-9]+/g, "-")}`;

export function DocumentTrousse(props: {
  doc: FilledDoc;
  variant: DocVariant;
  eyebrow: string;
  titleLines: string[];
  intro: string;
  crumb: { name: string; url: string };
  note?: string;
}) {
  const { doc, variant } = props;
  const items = doc.sections.map((s) => ({ id: anchor(s), label: s.title }));
  return (
    <main className="bg-white text-[#071d2b]">
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, props.crumb])} />
      <DocumentHero
        variant={variant}
        eyebrow={props.eyebrow}
        titleLines={props.titleLines}
        intro={props.intro}
        breadcrumbs={[{ label: props.crumb.name, href: props.crumb.url }]}
        toc={{ heading: "Sommaire", ...(props.note ? { note: props.note } : {}), items }}
      />
      <DocSources />
      <DocumentBody variant={variant} toc={{ heading: "Sommaire", items }}>
        {doc.sections.map((s, i) => (
          <DocArticle key={s.id} id={items[i].id} n={i + 1} title={`${s.number ? `${s.number} ` : ""}${s.title}`}>
            <DocBlocks blocks={s.blocks} />
          </DocArticle>
        ))}
      </DocumentBody>
    </main>
  );
}
