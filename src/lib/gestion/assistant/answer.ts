/* ==================================================================
   Chantier A — vérifications de la réponse avant l'affichage.

   - Liens : seuls les chemins internes de /gestion restent des liens ;
     une fiche client inconnue (identifiant inventé) perd son lien.
   - Montants : chaque montant en dollars de la réponse doit se
     retrouver dans les résultats des outils (ou être la somme ou
     l'écart de deux d'entre eux). Sinon, la réponse est signalée
     « à vérifier » dans le panneau.
   ================================================================== */

/** Lien Markdown ; l'adresse peut contenir un niveau de parenthèses (« javascript:alert(1) » est reconnu en entier). */
const LINK_RE = /\[([^\]\n]{1,160})\]\(((?:[^()\s]|\([^()\s]{0,40}\)){1,240})\)/g;
const SAFE_PATH = /^\/gestion(?:\/[A-Za-z0-9_.-]+)*\/?(?:\?[A-Za-z0-9=&_.-]*)?(?:#[A-Za-z0-9_-]+)?$/;
const CLIENT_PATH = /^\/gestion\/clients\/(c_[0-9a-f]{12})(?:[/?#]|$)/;

export function cleanLinks(text: string, clientExists: (id: string) => boolean): string {
  return text.replace(LINK_RE, (all, label: string, href: string) => {
    if (!SAFE_PATH.test(href)) return label;
    const m = CLIENT_PATH.exec(href);
    if (m && !clientExists(m[1])) return label;
    return all;
  });
}

const AMOUNT_RE = /(\d{1,3}(?:[   ]\d{3})+|\d+)(?:,(\d{1,2}))?[   ]?\$/g;

/** Montants en dollars d'un texte, en cents. */
export function amountsIn(text: string): number[] {
  const out: number[] = [];
  for (const m of text.matchAll(AMOUNT_RE)) {
    const whole = Number(m[1].replace(/[   ]/g, ""));
    const dec = m[2] ? Number(m[2].padEnd(2, "0")) : 0;
    if (Number.isFinite(whole)) out.push(whole * 100 + dec);
  }
  return out;
}

/** Montants de la réponse introuvables dans les sources (tolérance d'un dollar, arrondis). */
export function unverifiedAmounts(answer: string, sources: string[]): number[] {
  const known = [...new Set(sources.flatMap(amountsIn))].slice(0, 600);
  const near = (a: number, b: number) => Math.abs(a - b) <= 100;
  return amountsIn(answer).filter((a) => {
    if (a === 0 || known.some((k) => near(a, k))) return false;
    for (let i = 0; i < known.length; i++) for (let j = i + 1; j < known.length; j++) if (near(a, known[i] + known[j]) || near(a, Math.abs(known[i] - known[j]))) return false;
    return true;
  });
}
