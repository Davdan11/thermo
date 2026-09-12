/* ==================================================================
   Typographie française (Québec) pour les textes affichés dans les héros
   de contenu : guillemets français, apostrophe typographique et espace
   insécable avant : ; ? !  Le texte source (Markdown, données) reste
   intact : on ne transforme que l'affichage.
   ================================================================== */

const NBSP = " ";

export function typo(s: string): string {
  return (
    s
      // "Climat Froid" → « Climat Froid »
      .replace(/"([^"]+)"/g, `«${NBSP}$1${NBSP}»`)
      // 'sans conduits' (guillemets simples employés comme guillemets) → « sans conduits »
      .replace(/(^|[\s(])'([^']+)'(?=[\s.,;:!?)]|$)/g, `$1«${NBSP}$2${NBSP}»`)
      // Apostrophe droite → apostrophe typographique
      .replace(/'/g, "’")
      // Espace ordinaire avant : ; ? ! → espace insécable
      .replace(/[ \t]+([:;?!])/g, `${NBSP}$1`)
      // Pas d'espace du tout avant ; ? ! (« choisir? ») → espace insécable
      .replace(/([\p{L}\p{N})»])([;?!])(?=\s|$)/gu, `$1${NBSP}$2`)
  );
}

/** Coupe un texte à une limite de caractères, sur une fin de mot. */
export function excerpt(s: string, max = 150): string {
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.(]+$/, "")}…`;
}

/** Minuscules sans accents, pour la recherche. */
export function fold(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}
