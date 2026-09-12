/* Teinte de chaque rubrique de guide : mêmes valeurs que CATEGORY_ACCENT du héros
   « Ouverture d'article » (heroes-v2/contenu/ArticleOpening.tsx). Copie en module
   ordinaire : un composant serveur ne peut pas lire une constante d'un module client. */
export const ARTICLE_ACCENT: Record<string, string> = {
  choisir: "#1F4E8C",
  comparer: "#8A5A12",
  prix: "#1F6B4A",
  subventions: "#0E6470",
  installation: "#A23A2A",
  entretien: "#5B6320",
};

export const articleAccent = (category: string) => ARTICLE_ACCENT[category] ?? "#111417";
