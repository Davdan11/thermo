/**
 * DEV FIXTURES — Structural placeholders only
 *
 * All data in this file is temporary and clearly marked.
 * Will be replaced by real data from the database / CMS.
 * No value here is intended to be realistic.
 */

/* ----------------------------------------------------------
   Brands
   ---------------------------------------------------------- */

export const BRANDS = [
  "Daikin",
  "Gree",
  "Fujitsu",
  "Mitsubishi Electric",
  "Moovair",
  "LG",
  "Bosch",
  "Panasonic",
] as const;

/* ----------------------------------------------------------
   Featured models
   ---------------------------------------------------------- */

export interface DevFeaturedModel {
  id: string;
  brand: string;
  model: string;
  type: string;
  btu: string;
  price: string;
}

export const DEV_FEATURED_MODELS: DevFeaturedModel[] = [
  {
    id: "dev-1",
    brand: "Marque A",
    model: "Modèle à confirmer",
    type: "Murale",
    btu: "— BTU",
    price: "Prix à confirmer",
  },
  {
    id: "dev-2",
    brand: "Marque B",
    model: "Modèle à confirmer",
    type: "Multizone",
    btu: "— BTU",
    price: "Prix à confirmer",
  },
  {
    id: "dev-3",
    brand: "Marque C",
    model: "Modèle à confirmer",
    type: "Centrale",
    btu: "— BTU",
    price: "Prix à confirmer",
  },
];

/* ----------------------------------------------------------
   Comparison categories
   ---------------------------------------------------------- */

export const COMPARISON_CATEGORIES = [
  "Prix",
  "BTU",
  "Chauffage par grand froid",
  "Niveau sonore",
  "Garantie",
  "Efficacité",
] as const;

/* ----------------------------------------------------------
   Guide articles (structural placeholders)
   ---------------------------------------------------------- */

export const DEV_GUIDE_ARTICLES = [
  {
    slug: "comment-choisir-une-thermopompe",
    title: "Comment choisir une thermopompe",
    description:
      "Guide pratique pour sélectionner le modèle adapté à votre maison et à votre budget.",
  },
  {
    slug: "combien-de-btu",
    title: "Combien de BTU ai-je besoin?",
    description:
      "Calculez la puissance de chauffage nécessaire selon votre superficie et votre climat.",
  },
  {
    slug: "comprendre-les-subventions",
    title: "Comprendre les subventions",
    description:
      "Tour d'horizon des programmes disponibles au Québec pour l'achat d'une thermopompe.",
  },
] as const;
