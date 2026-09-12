import type { GuideCategory } from "@/lib/markdown";

/* Rubriques des guides : mêmes identifiants que le champ `category` du Markdown.
   Partagé entre la liste (/guides) et le héros d'article (/guides/[slug]). */
export const GUIDE_CATEGORIES: { id: GuideCategory; label: string }[] = [
  { id: "choisir", label: "Bien choisir" },
  { id: "comparer", label: "Comparer" },
  { id: "prix", label: "Prix" },
  { id: "subventions", label: "Subventions" },
  { id: "installation", label: "Installation" },
  { id: "entretien", label: "Entretien" },
];

export function guideCategoryLabel(id: string): string {
  return GUIDE_CATEGORIES.find((c) => c.id === id)?.label ?? "Guide";
}
