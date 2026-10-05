/**
 * Lecture du manifeste des photos pour les scripts de rattachement.
 *
 * La table de vérité est src/lib/data/photos/familles-photos.json, mise à plat par
 * `npx tsx scripts/audit-photos-catalogue.ts --manifeste` à partir de
 * src/lib/data/photos/manifeste-photos.ts (ce que montre chaque photo, quel logo elle porte).
 *
 * Aucun script ne doit poser une photo sans passer par `photoPermise` : c'est ce qui empêche
 * une tête murale d'atterrir sur une centrale gainable, un logo Payne sur une fiche Bryant,
 * ou la photo d'une famille voisine (37MHRAQ) sur un modèle 37MURAQ.
 */
import fs from "node:fs";
import path from "node:path";

const CHEMIN = path.join(process.cwd(), "src/lib/data/photos/familles-photos.json");
const MANIFESTE = fs.existsSync(CHEMIN) ? JSON.parse(fs.readFileSync(CHEMIN, "utf8")) : {};

const normaliser = (s) => String(s).toUpperCase().replace(/[^A-Z0-9]/g, "");

/**
 * Une photo inconnue du manifeste est refusée : elle n'a pas encore été regardée.
 *
 * La bonne façon d'en ajouter une, de bout en bout :
 *   1. node scripts/fetch-photos-officielles.mjs --marques <marque>
 *      (télécharge la photo chez le fabricant et écrit sa provenance dans SOURCES.json)
 *   2. node scripts/contact-sheet.mjs …   → REGARDER chaque photo avant de l'accepter
 *   3. corriger src/lib/data/photos/manifeste-photos.ts si la photo n'est pas une simple
 *      unité extérieure (tête murale, gamme, page de brochure…)
 *   4. npx tsx scripts/audit-photos-catalogue.ts --manifeste
 *      (le manifeste prend aussi les photos en réserve, celles qui ont une provenance mais
 *      ne sont pas encore rattachées — elles deviennent donc posables)
 *   5. node scripts/fetch-photos-officielles.mjs --regles && node scripts/map-official-images.mjs
 *   6. npx tsx scripts/audit-photos-catalogue.ts --corriger --manifeste
 *
 * PHOTOS_NOUVELLES=1 force l'admission d'une photo sans provenance enregistrée. À éviter :
 * c'est exactement ce qui avait laissé revenir une tête murale sur une centrale gainable.
 */
const TOLERER_NOUVELLES = process.env.PHOTOS_NOUVELLES === "1";

/** Retourne null si la photo a le droit d'illustrer cette fiche, sinon la raison en clair. */
export function refusPhoto(photo, marque, numeroModele, typeSysteme) {
  const e = MANIFESTE[photo];
  if (!e) return TOLERER_NOUVELLES ? null : "photo absente du manifeste (PHOTOS_NOUVELLES=1 pour l'admettre)";
  if (typeSysteme && !e.typesPermis.includes(typeSysteme)) return `type ${typeSysteme} ≠ photo « ${e.montre} »`;
  if (e.marquesPermises && !e.marquesPermises.includes(marque)) return `logo ${e.logos.join(" / ")} sur une fiche ${marque}`;
  const cle = normaliser(numeroModele);
  if (e.familles.length > 0 && !e.familles.some((f) => cle.startsWith(f))) {
    return `famille : ${numeroModele} hors de ${e.familles.join(" / ")}`;
  }
  return null;
}

export const photoPermise = (photo, marque, numeroModele, typeSysteme) =>
  refusPhoto(photo, marque, numeroModele, typeSysteme) === null;
