/* ==================================================================
   Blogue : types partagés (client et serveur, sans dépendance serveur).

   Un article vit dans les données (blogue.json, dossier des données de
   gestion), jamais dans le code. Statuts : brouillon → à approuver →
   publié. Seul un article « publié » est servi sur le site public.
   Chaque nombre d'un article doit exister dans sa source : valeurs
   tirées des données du site (gabarits) ou chiffres ajoutés à la main
   par le propriétaire, chacun avec sa source.
   ================================================================== */

import type { SourceValue } from "@/lib/presence/types";

export const ARTICLE_STATUSES = ["brouillon", "a_approuver", "publie"] as const;
export type ArticleStatus = (typeof ARTICLE_STATUSES)[number];

export const ARTICLE_STATUS_LABELS: Record<ArticleStatus, string> = {
  brouillon: "Brouillon",
  a_approuver: "À approuver",
  publie: "Publié",
};

export const ARTICLE_CATEGORIES = ["donnees", "logisvert", "choisir", "entretien", "question"] as const;
export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  donnees: "Données",
  logisvert: "LogisVert",
  choisir: "Bien choisir",
  entretien: "Entretien",
  question: "Question de la semaine",
};

/** Gabarits de préparation : chacun lit les données du site (voir templates.ts). */
export const TEMPLATE_IDS = ["palmares", "logisvert-murale", "moins-25", "types", "hiver", "question", "libre"] as const;
export type TemplateId = (typeof TEMPLATE_IDS)[number];

export const DEFAULT_AUTHOR = "L’équipe de Thermopompes À Vendre";

/** Chiffres permis : mêmes règles que les publications du studio (voir src/lib/presence/numbers.ts). */
export interface ArticleSource {
  values: Record<string, SourceValue>;
  labels: Record<string, string>;
  /** Noms repris tels quels (municipalités, stations, modèles) : retirés avant le contrôle des nombres. */
  texts: string[];
  /** Valeurs calculées, avec leur formule en clair. */
  derived?: Array<{ key: string; formula: string }>;
}

/** Source affichée en lien au bas de l'article. */
export interface ArticleReference {
  label: string;
  url?: string;
}

/** Chiffre ajouté à la main par le propriétaire, avec sa source (sinon l'article ne peut pas être publié). */
export interface ArticleFigure {
  id: string;
  label: string;
  value: string;
  url?: string;
}

/** Nom cité dans l'article et la page du site vers laquelle il pointe (fiche, ville). */
export interface ArticleMention {
  text: string;
  href: string;
}

export interface ArticleCover {
  /** Chemin public : /images/… (photos du site) ou /blogue/images/… (téléversées). */
  path: string;
  alt: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  /** Chapeau : sous le titre, dans la liste, en description de page et dans le flux RSS. */
  description: string;
  /** Corps en Markdown (titres ##, listes, tableaux, liens, images). */
  body: string;
  category: ArticleCategory;
  author: string;
  cover: ArticleCover | null;
  status: ArticleStatus;
  template: TemplateId;
  references: ArticleReference[];
  source: ArticleSource;
  figures: ArticleFigure[];
  mentions: ArticleMention[];
  createdAt: string;
  updatedAt: string;
  /** Envoyé à l'approbation (préparé par le moteur ou par le propriétaire). */
  submittedAt?: string;
  /** Première publication. */
  publishedAt?: string;
  /** Dernière modification du contenu après la première publication (dateModified). */
  modifiedAt?: string;
  approvedBy?: string;
  /** Publications Facebook et Instagram créées dans le studio à la publication. */
  presencePostIds: string[];
  /** Dernier passage de l'assistant de style (s'il est configuré). */
  assistant?: { at: string; model: string; accepted: boolean; note: string };
  /** Corps avant la dernière réécriture (assistant ou mise à jour des chiffres), pour revenir en arrière. */
  previousBody?: string;
  /** Préparé à partir des données de cette date (gabarits). */
  dataDate?: string;
}

export interface BlogueLogEntry {
  at: string;
  articleId?: string;
  level: "info" | "ok" | "erreur";
  message: string;
}

export interface BlogueData {
  version: 1;
  articles: BlogArticle[];
  log: BlogueLogEntry[];
}

export const ARTICLE_ID_RE = /^a-[a-z0-9]{6,20}$/;
export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const SLUG_MAX = 90;
/** Adresses prises par des routes de /blogue : jamais un article. */
export const RESERVED_SLUGS = new Set(["images", "rss", "rss-xml", "flux"]);

/** Adresse publique d'un article. */
export const articlePath = (slug: string) => `/blogue/${slug}`;
export const PALMARES_PATH = "/palmares-du-froid";
