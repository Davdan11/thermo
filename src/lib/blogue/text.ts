/* ==================================================================
   Contrôle des nombres d'un article : même règle que le studio
   (unknownNumbers de src/lib/presence/numbers.ts). Le Markdown est
   d'abord ramené à son texte lisible : adresses des liens et des
   images, marques de liste numérotée et lignes de tableau retirées.
   Sans dépendance serveur : l'éditeur l'utilise en direct.
   ================================================================== */

import { unknownNumbers, type FoundNumber } from "@/lib/presence/numbers";
import type { SourceValue } from "@/lib/presence/types";
import type { BlogArticle } from "./types";

/** Texte lisible d'un Markdown, pour le contrôle des nombres (pas pour l'affichage). */
export function markdownCheckText(md: string): string {
  return md
    .replace(/\r\n/g, "\n")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, " $1 ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, " $1 ")
    .replace(/<[^>]+>/g, " ")
    .replace(/^[ \t]{0,3}#{1,6}[ \t]+/gm, "")
    .replace(/^[ \t]*(?:[-*+]|\d{1,3}[.)])[ \t]+/gm, "")
    .replace(/^[ \t]*>[ \t]?/gm, "")
    .replace(/^[ \t]*\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)*\|?[ \t]*$/gm, " ")
    .replace(/[*_`~|]/g, " ");
}

type Checkable = Pick<BlogArticle, "title" | "description" | "body" | "source" | "figures" | "mentions"> & { cover?: BlogArticle["cover"] };

/** Valeurs et noms permis : source des données, chiffres ajoutés à la main, noms cités. */
export function allowedForArticle(a: Pick<BlogArticle, "source" | "figures" | "mentions">): { values: Record<string, SourceValue>; texts: string[] } {
  const values: Record<string, SourceValue> = { ...a.source.values };
  a.figures.forEach((f, i) => {
    values[`chiffreAjoute${i}`] = f.value;
  });
  return { values, texts: [...a.source.texts, ...a.mentions.map((m) => m.text)] };
}

/** Tout le texte publié d'un article (titre, chapeau, texte de remplacement de la photo, corps). */
export function articleCheckText(a: Checkable): string {
  return [a.title, a.description, a.cover?.alt ?? "", markdownCheckText(a.body)].join("\n");
}

/** Nombres de l'article absents de sa source (vide = tout est sourcé). */
export function articleUnknownNumbers(a: Checkable): FoundNumber[] {
  return unknownNumbers(articleCheckText(a), allowedForArticle(a));
}

/** Marque laissée dans un gabarit à remplir : l'article ne peut pas être publié tant qu'il en reste. */
export const TODO_RE = /\[À écrire[^\]]*\]/;

/** Nombre de mots (même règle que les guides). */
export function wordCount(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\]\([^)]*\)/g, "] ")
    .replace(/[#*_>`|-]/g, " ")
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export const readMinutes = (words: number) => Math.max(1, Math.round(words / 200));

/** Slug lisible à partir d'un titre : « Préparer sa thermopompe pour l'hiver » → « preparer-sa-thermopompe-pour-l-hiver ». */
export function slugify(title: string, max = 80): string {
  const s = title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return cut.slice(0, cut.lastIndexOf("-") > 20 ? cut.lastIndexOf("-") : max).replace(/-+$/, "");
}
