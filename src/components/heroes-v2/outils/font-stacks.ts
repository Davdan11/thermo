/* Piles de polices de la famille « outils », sans appel à next/font : importer ces chaînes
   n'ajoute ni @font-face ni préchargement à la page. La mono elle-même (outilsMono) est dans ./fonts,
   à importer seulement par le composant qui pose sa variable. */
export const MONO = "var(--font-outils-mono), ui-monospace, SFMono-Regular, Menlo, monospace";
export const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
export const SERIF = "var(--font-serif), 'Times New Roman', serif";
