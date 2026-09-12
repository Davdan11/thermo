/* ==================================================================
   Héros v2 « marques et classements » : outils communs (client et serveur).
   Chaque page a sa propre palette dans son module ; ici seulement les
   types sérialisables, la typographie française et quelques constantes.
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
export const MONO = 'ui-monospace, "SFMono-Regular", "Cascadia Mono", Consolas, "Liberation Mono", monospace';
export const PHONE = { href: "tel:4389003224", label: "438-900-3224" } as const;
export const REASSURANCE = "Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.";
/** Interlettrage du nom géant (em), partagé par le calcul serveur et le rendu. */
export const MONO_TRACK = -0.04;

/**
 * « Réduire les animations » demandé par le navigateur. Lu au rendu, côté client seulement : ne sert
 * qu’aux props `transition` (jamais écrites dans le HTML), donc aucun désaccord d’hydratation.
 */
export const calmNow = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/** Transition instantanée : tout est en place d’emblée quand l’utilisateur réduit les animations. */
export const CALM = { duration: 0, delay: 0 } as const;

export const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });

/** Typographie française à l’affichage : apostrophe courbe, espace insécable avant « : ; ? ! ». */
export function typo(s: string): string {
  return s
    .replace(/'/g, "’")
    .replace(/ ([:;?!])/g, " $1")
    .replace(/([^\s ])([?!;])(?=\s|$)/g, "$1 $2");
}

export type Crumb = { label: string; href?: string };
export type Stat = { label: string; value: string };
export type LogoFile = { src: string; ratio: number };

/** Cadre de la galerie (/marques) : logo officiel vérifié et vrais chiffres de la marque. */
export type Placard = { slug: string; name: string; logo: LogoFile; models: number; cold: number };

/** Héros d’une marque (/marques/[slug]). */
export type MonogrammeData = {
  name: string;
  slug: string;
  logo: (LogoFile & { mono: boolean }) | null;
  stats: { models: number; series: number; cold: number };
  types: { label: string; href: string }[];
  cold: boolean;
  capacity: { min: number; max: number } | null;
  photo: { src: string; alt: string; title: string; subtitle: string | null; cold: boolean; href: string } | null;
  /** Nom géant réglé sur les chasses réelles d’Inter Tight 800 : lignes, corps (cqw), interlettrage (em), part de la largeur occupée. */
  fit: { lines: string[]; size: number; track: number; span: number };
};

export type PodiumEntry = { rank: number; brand: string; name: string; value: string; href: string; image: string | null; logo: string | null };
export type ProgrammeRow = { label: string; href: string; leader: string; value: string };
export type AtelierVariant = "murale" | "centrale" | "multizone" | "froid" | "efficacite" | "catalogue" | "installation" | "remplacement";
