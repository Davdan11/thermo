/* ==================================================================
   Republication : un article publié crée sa publication Facebook et
   Instagram dans la file du studio de présence (série « blogue »).
   Mêmes règles que les autres séries : « à approuver », sauf si la
   série est passée en publication automatique après une première
   approbation (gabarit validé). Rien ne part vers Meta ici : c'est le
   passage planifié du studio qui publie, avec ses garde-fous.
   Les chiffres des légendes et des visuels viennent de la source de
   l'article (même contrôle unknownNumbers).
   ================================================================== */

import { newPost } from "@/lib/presence/planner";
import { addLog } from "@/lib/presence/store";
import { photoOf, type Generated } from "@/lib/presence/templates";
import { addDays, montrealDate, zonedToUtc } from "@/lib/presence/time";
import type { PresenceData, Post, Slide } from "@/lib/presence/types";
import { displayUrl } from "@/lib/presence/utm";
import { allowedForArticle } from "./text";
import { articlePath, CATEGORY_LABELS, type BlogArticle } from "./types";

export const articleRotationKey = (a: Pick<BlogArticle, "id">) => `article:${a.id}`;

export function buildArticleGenerated(a: BlogArticle, now: string): Generated {
  const path = articlePath(a.slug);
  const allowed = allowedForArticle(a);
  const labels: Record<string, string> = { ...a.source.labels };
  a.figures.forEach((f, i) => {
    labels[`chiffreAjoute${i}`] = `${f.label} (ajouté par le propriétaire)`;
  });
  const text = [`Nouveau sur le blogue : « ${a.title} »`, a.description.trim(), "Les chiffres, leurs sources et la méthode sont dans l’article."].filter(Boolean).join("\n\n");
  const slides: Slide[] = [
    { kind: "cover", eyebrow: "Le blogue", kicker: CATEGORY_LABELS[a.category], title: a.title, subtitle: a.author, photo: photoOf(a.cover?.path) },
    { kind: "text", eyebrow: "En bref", title: "", body: a.description.trim() },
    { kind: "cta", eyebrow: "À lire sur le blogue", title: a.title, body: "Les chiffres, leurs sources et la méthode.", url: displayUrl(path) },
  ];
  return {
    subject: a.title,
    text,
    hashtags: ["#thermopompe", "#Québec", ...(a.category === "logisvert" ? ["#LogisVert"] : [])],
    link: { path, label: a.title, cta: "À lire sur le blogue :" },
    source: {
      subject: a.title,
      page: path,
      pageLabel: a.title,
      values: allowed.values,
      labels,
      texts: allowed.texts,
      datasets: [...a.references.map((r) => ({ label: r.label, ...(r.url ? { url: r.url } : {}) })), { label: `Article du blogue : ${a.title}`, url: path }],
      ...(a.source.derived?.length ? { derived: a.source.derived } : {}),
      generatedAt: now,
    },
    slides,
    story: slides[0],
    footnote: "Sources et méthode dans l’article du blogue.",
    rotationKeys: [articleRotationKey(a)],
  };
}

export type QueueOutcome = { kind: "creee"; post: Post } | { kind: "existante"; post: Post } | { kind: "ignoree"; reason: string };

/**
 * Ajoute (dans `data`, déjà sous verrou) la publication de l'article : aujourd'hui à l'heure de la série si elle n'est
 * pas passée, sinon demain. Jamais de doublon : une publication non rejetée de l'article est réutilisée.
 */
export function queueArticlePost(data: PresenceData, a: BlogArticle, now: Date): QueueOutcome {
  const key = articleRotationKey(a);
  const existing = data.posts.find((p) => p.series === "blogue" && p.rotationKeys.includes(key) && p.status !== "rejetee");
  if (existing) return { kind: "existante", post: existing };
  const settings = data.settings.series.blogue;
  if (!settings.enabled) return { kind: "ignoree", reason: "Série « Nouvel article du blogue » désactivée dans les réglages du studio." };
  const today = montrealDate(now);
  const date = zonedToUtc(today, settings.time).getTime() > now.getTime() + 10 * 60_000 ? today : addDays(today, 1);
  const post = newPost("blogue", date, buildArticleGenerated(a, now.toISOString()), data, now, 0);
  data.posts.push(post);
  addLog(data, { level: "info", postId: post.id, message: `Préparée à la publication de l’article « ${a.title} » (${post.status === "planifiee" ? "planifiée automatiquement, gabarit validé" : "à approuver"}).` });
  return { kind: "creee", post };
}
