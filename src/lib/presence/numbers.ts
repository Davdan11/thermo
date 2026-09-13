/* ==================================================================
   Contrôle des nombres : chaque nombre d'une légende (ou d'un visuel)
   doit exister dans la source de la publication. Sert au test
   « aucun chiffre inventé » et à l'avertissement de l'éditeur quand le
   propriétaire modifie une légende. Sans dépendance : client et serveur.
   ================================================================== */

import type { PostSource, Slide, SourceValue } from "./types";

export interface FoundNumber {
  raw: string;
  value: number;
  index: number;
}

/*
 * Un nombre isolé (pas collé à une lettre : « HSPF2 », « 4A6V0X24A1 » et « R-32 » ne comptent pas comme −32),
 * avec espaces de milliers (normale, insécable ou fine), décimale à la virgule ou au point, signe moins facultatif.
 * Le signe n'est lu que s'il n'est pas lui-même collé à une lettre ou à un chiffre (« 1991-2020 » : deux années).
 */
const NUM_RE = /(?<![\p{L}\p{N}_.,/])([-−]?)(\d{1,3}(?:[   ]\d{3})+|\d+)(?:[.,](\d+))?(?![\p{L}\p{N}_])/gu;

export function extractNumbers(text: string): FoundNumber[] {
  const out: FoundNumber[] = [];
  for (const m of text.matchAll(NUM_RE)) {
    let sign = m[1];
    // « Val-d'Or -26 » : un tiret précédé d'une lettre est un trait d'union, pas un signe.
    if (sign && m.index > 0 && /[\p{L}\p{N}]/u.test(text[m.index - 1] ?? "")) sign = "";
    const intPart = m[2].replace(/[   ]/g, "");
    const value = Number(`${sign ? "-" : ""}${intPart}${m[3] ? `.${m[3]}` : ""}`);
    if (Number.isFinite(value)) out.push({ raw: m[0].trim(), value, index: m.index });
  }
  return out;
}

const URL_RE = /\b(?:https?:\/\/|www\.)\S+|\b[\w-]+(?:\.[\w-]+)*\.(?:ca|com|org|net)(?:\/\S*)?/giu;
const HASHTAG_RE = /#[\p{L}\p{N}_]+/gu;

const key = (n: number) => (Math.round(n * 100) / 100).toFixed(2);

/** Retire les liens, les mots-clics et les noms repris tels quels avant le contrôle. */
export function stripKnown(text: string, texts: string[]): string {
  let out = text.replace(URL_RE, " ").replace(HASHTAG_RE, " ");
  for (const t of [...texts].filter(Boolean).sort((a, b) => b.length - a.length)) out = out.split(t).join(" ");
  return out;
}

function valueNumbers(v: SourceValue): number[] {
  if (typeof v === "number") return Number.isFinite(v) ? [v] : [];
  if (typeof v === "string") return extractNumbers(v).map((n) => n.value);
  return [];
}

/** Nombres permis par la source : valeurs numériques, nombres écrits dans les valeurs textuelles et dans les noms repris. */
export function allowedNumbers(source: Pick<PostSource, "values" | "texts">): Set<string> {
  const set = new Set<string>();
  for (const v of Object.values(source.values)) for (const n of valueNumbers(v)) set.add(key(n));
  for (const t of source.texts) for (const n of extractNumbers(t)) set.add(key(n.value));
  return set;
}

/** Nombres d'un texte qui n'existent pas dans la source (vide = tout est sourcé). */
export function unknownNumbers(text: string, source: Pick<PostSource, "values" | "texts">): FoundNumber[] {
  const allowed = allowedNumbers(source);
  return extractNumbers(stripKnown(text, source.texts)).filter((n) => !allowed.has(key(n.value)));
}

/** Tout le texte imprimé sur des visuels. */
export function slidesText(slides: Array<Slide | null | undefined>): string {
  const parts: string[] = [];
  for (const s of slides) {
    if (!s) continue;
    switch (s.kind) {
      case "cover":
        parts.push(s.eyebrow, s.kicker ?? "", s.title, s.subtitle ?? "", ...(s.facts ?? []));
        break;
      case "big":
        parts.push(s.eyebrow, `${s.value} ${s.unit}`, ...s.lines, s.bar ? `${s.bar.pct} ${s.bar.label}` : "");
        break;
      case "rows":
        parts.push(s.eyebrow, s.title, ...s.rows.flatMap((r) => [r.label, r.value, r.note ?? ""]));
        break;
      case "compare":
        parts.push(s.eyebrow, s.a.kicker, s.a.title, s.b.kicker, s.b.title, ...s.rows.flatMap((r) => [r.label, r.a, r.b]));
        break;
      case "temp":
        parts.push(s.eyebrow, s.place, `${s.value}`, s.label, ...s.marks.flatMap((m) => [`${m.t}`, m.label]));
        break;
      case "text":
        parts.push(s.eyebrow, s.title, s.body);
        break;
      case "cta":
        parts.push(s.eyebrow, s.title, s.body, s.url);
        break;
    }
  }
  return parts.filter(Boolean).join("\n");
}
