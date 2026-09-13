"use client";

/* ==================================================================
   Texte des réponses : sous-ensemble minimal de Markdown, rendu en
   éléments React (jamais de HTML injecté). Paragraphes, listes « - »,
   **gras** et [liens](/chemin). Seuls les liens internes et le
   téléphone du site deviennent cliquables.
   ================================================================== */

import Link from "next/link";
import type { ReactNode } from "react";

const INLINE_RE = /\*\*([^*\n]+)\*\*|\[([^\]\n]+)\]\(([^()\s]+)\)/g;
const LIST_RE = /^\s*[-•*]\s+/;

export function safeHref(href: string): string | null {
  if (href === "tel:4389003224") return href;
  if (href.startsWith("/") && !href.startsWith("//")) return href;
  return null;
}

/** Pendant le flux : masque un lien ou un gras pas encore refermé, pour éviter les crochets bruts. */
export function hideIncompleteMarkup(text: string): string {
  return text.replace(/\[[^\]\n]*(\]\([^)\s]*)?$/, "").replace(/\*\*([^*\n]*)$/, "$1");
}

function inline(text: string, key: string, onLink?: (href: string) => void): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(INLINE_RE)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1] !== undefined) {
      out.push(<strong key={`${key}-${i++}`}>{m[1]}</strong>);
    } else {
      const href = safeHref(m[3]);
      if (!href) out.push(m[2]);
      else if (href.startsWith("tel:")) out.push(<a key={`${key}-${i++}`} href={href}>{m[2]}</a>);
      else out.push(<Link key={`${key}-${i++}`} href={href} onClick={() => onLink?.(href)}>{m[2]}</Link>);
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Group = { kind: "p" | "ul"; lines: string[] };

function groups(text: string): Group[] {
  const out: Group[] = [];
  for (const block of text.split(/\n{2,}/)) {
    let current: Group | null = null;
    for (const line of block.split("\n")) {
      if (!line.trim()) continue;
      const kind = LIST_RE.test(line) ? "ul" : "p";
      if (!current || current.kind !== kind) {
        current = { kind, lines: [] };
        out.push(current);
      }
      current.lines.push(kind === "ul" ? line.replace(LIST_RE, "") : line);
    }
  }
  return out;
}

export function RichText({ text, streaming = false, tail, onLink }: { text: string; streaming?: boolean; tail?: ReactNode; onLink?: (href: string) => void }) {
  const gs = groups(streaming ? hideIncompleteMarkup(text) : text);
  if (!gs.length) return tail ? <p>{tail}</p> : null;
  return (
    <>
      {gs.map((g, gi) => {
        const isLast = gi === gs.length - 1;
        if (g.kind === "ul") {
          return (
            <ul key={gi}>
              {g.lines.map((l, li) => (
                <li key={li}>
                  {inline(l, `${gi}-${li}`, onLink)}
                  {isLast && li === g.lines.length - 1 ? tail : null}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={gi}>
            {g.lines.map((l, li) => (
              <span key={li}>
                {li > 0 ? <br /> : null}
                {inline(l, `${gi}-${li}`, onLink)}
              </span>
            ))}
            {isLast ? tail : null}
          </p>
        );
      })}
    </>
  );
}
