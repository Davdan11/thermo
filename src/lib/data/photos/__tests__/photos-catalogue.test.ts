/**
 * Garde-fou des photos du catalogue.
 *
 * Une photo fausse sur une fiche ruine la confiance plus sûrement qu'une fiche sans photo.
 * Ces tests refusent qu'une fiche publiée affiche une photo dont le type d'appareil, la marque
 * du logo ou la famille de modèle ne correspond pas, d'après la table de
 * `src/lib/data/photos/manifeste-photos.ts` et `familles-photos.json`.
 *
 * On juge la photo EFFECTIVE, celle que la page affiche vraiment : la photo du modèle, sinon
 * celle de sa série (voir src/lib/data/queries/product-detail.ts). Une série fourre-tout qui
 * retombe sur ses modèles est donc contrôlée comme le reste.
 *
 * Si un test tombe après une reconstruction du catalogue : regarder la photo (planche-contact
 * `node scripts/contact-sheet.mjs`), corriger la règle de rattachement ou retirer la photo, puis
 * `npx tsx scripts/audit-photos-catalogue.ts --corriger --manifeste`.
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  MANIFESTE_PHOTOS,
  PHOTOS_REVUES,
  TYPES_PAR_MONTRE,
  reglesPhoto,
  verifierAffectation,
} from "../manifeste-photos";

type Modele = {
  modelNumber: string;
  systemType: string;
  status: string;
  seriesId: string;
  imageUrl?: string | null;
};
type Serie = { id: string; name: string; systemType?: string; imageUrl?: string | null };
type JeuMarque = { models: Modele[]; series: Serie[] };

const RACINE = process.cwd();
const catalogue = JSON.parse(
  fs.readFileSync(path.join(RACINE, "src/lib/data/fixtures/brands/all-auto-datasets.json"), "utf8"),
) as Record<string, JeuMarque>;

/** Une fiche publiée et la photo qu'elle affiche réellement. */
type Fiche = { marque: string; modele: Modele; photo: string; parLaSerie: boolean };
const fiches: Fiche[] = [];
let fichesPubliees = 0;
for (const [marque, jeu] of Object.entries(catalogue)) {
  const series = new Map(jeu.series.map((s) => [s.id, s]));
  for (const modele of jeu.models) {
    if (modele.status !== "published") continue;
    fichesPubliees++;
    const photo = modele.imageUrl ?? series.get(modele.seriesId)?.imageUrl ?? null;
    if (photo) fiches.push({ marque, modele, photo, parLaSerie: !modele.imageUrl });
  }
}

const decrire = (f: Fiche) =>
  `${f.marque}/${f.modele.modelNumber} (${f.modele.systemType}${f.parLaSerie ? ", via la série" : ""}) ← ${f.photo}`;

describe("photos du catalogue", () => {
  it("le catalogue illustre encore un nombre utile de fiches", () => {
    // Filet à l'envers : si une correction vidait le catalogue de ses photos, on veut le savoir.
    expect(fichesPubliees).toBeGreaterThan(9000);
    expect(fiches.length).toBeGreaterThan(2000);
  });

  it("chaque photo affichée existe dans public/", () => {
    const manquantes = [...new Set(fiches.map((f) => f.photo))].filter(
      (p) => !fs.existsSync(path.join(RACINE, "public", p)),
    );
    expect(manquantes).toEqual([]);
  });

  it("chaque photo affichée est inscrite au manifeste", () => {
    const inconnues = [...new Set(fiches.map((f) => f.photo))].filter((p) => !reglesPhoto(p));
    expect(inconnues).toEqual([]);
  });

  it("aucune fiche ne montre un appareil d'un autre type (tête murale sur une centrale, etc.)", () => {
    const fautives = fiches
      .filter((f) => !reglesPhoto(f.photo)?.typesPermis.includes(f.modele.systemType as never))
      .map(decrire);
    expect(fautives).toEqual([]);
  });

  it("aucune fiche ne montre le logo d'une autre marque", () => {
    const fautives = fiches
      .filter((f) => {
        const permises = reglesPhoto(f.photo)?.marquesPermises;
        return permises != null && !permises.includes(f.marque);
      })
      .map(decrire);
    expect(fautives).toEqual([]);
  });

  it("aucune fiche ne montre une famille de modèle voisine (37MHRAQ contre 37MURAQ…)", () => {
    const fautives = fiches
      .filter((f) =>
        verifierAffectation({
          photo: f.photo,
          marque: f.marque,
          numeroModele: f.modele.modelNumber,
          typeSysteme: f.modele.systemType,
        })?.startsWith("famille"),
      )
      .map(decrire);
    expect(fautives).toEqual([]);
  });

  it("les photos de série n'illustrent que des fiches en règle", () => {
    const fautives = fiches
      .filter(
        (f) =>
          f.parLaSerie &&
          verifierAffectation({
            photo: f.photo,
            marque: f.marque,
            numeroModele: f.modele.modelNumber,
            typeSysteme: f.modele.systemType,
          }) !== null,
      )
      .map(decrire);
    expect(fautives).toEqual([]);
  });

  it("la photo d'une série représente toutes les fiches de cette série", () => {
    // Une carte de série s'affiche sur la page de la marque même quand chacun de ses modèles a
    // sa propre photo. Les séries fourre-tout de la liste LogisVert (« 45M » chez Carrier
    // regroupe six familles) ne doivent pas se présenter avec la photo d'une seule d'entre elles.
    const fautives: string[] = [];
    for (const [marque, jeu] of Object.entries(catalogue)) {
      for (const s of jeu.series) {
        if (!s.imageUrl) continue;
        const membres = jeu.models.filter((m) => m.seriesId === s.id && m.status === "published");
        if (membres.length === 0) continue;
        const type = s.systemType ?? membres[0].systemType;
        const horsFamille = membres.filter(
          (m) =>
            verifierAffectation({
              photo: s.imageUrl!,
              marque,
              numeroModele: m.modelNumber,
              typeSysteme: type,
            }) !== null,
        );
        if (horsFamille.length > 0) {
          fautives.push(`${marque}/${s.id} (${s.name}) ← ${s.imageUrl} : ${horsFamille[0].modelNumber}`);
        }
      }
    }
    expect(fautives).toEqual([]);
  });

  it("les cas signalés par le propriétaire restent corrigés", () => {
    // 37MURAQ est une centrale gainable : ni tête murale, ni photo d'une autre famille,
    // ni photo au logo Payne. Si une reconstruction les ramène, ce test tombe.
    const interdites = [
      "/images/products/carrier-comfort-37mhraq-series.webp",
      "/images/products/official/payne-38mura-officiel.webp",
    ];
    const fautives = fiches.filter((f) => /^37MURAQ/.test(f.modele.modelNumber) && interdites.includes(f.photo));
    expect(fautives.map(decrire)).toEqual([]);
  });
});

describe("cohérence du manifeste", () => {
  it("le fichier généré reflète bien la revue visuelle", () => {
    // familles-photos.json est régénéré par le script ; si quelqu'un modifie PHOTOS_REVUES sans
    // relancer `npx tsx scripts/audit-photos-catalogue.ts --manifeste`, ce test le dit.
    const ecarts: string[] = [];
    for (const [photo, entree] of Object.entries(MANIFESTE_PHOTOS)) {
      const regles = reglesPhoto(photo)!;
      if (entree.montre !== regles.montre) ecarts.push(`${photo} : montre ${entree.montre} ≠ ${regles.montre}`);
      if (entree.logos.join(",") !== regles.logos.join(",")) ecarts.push(`${photo} : logos`);
      if (entree.typesPermis.join(",") !== regles.typesPermis.join(",")) ecarts.push(`${photo} : typesPermis`);
      const attendues = regles.marquesPermises?.join(",") ?? null;
      if ((entree.marquesPermises?.join(",") ?? null) !== attendues) ecarts.push(`${photo} : marquesPermises`);
    }
    expect(ecarts).toEqual([]);
  });

  it("les chemins revus à la main pointent sur un vrai fichier", () => {
    // Une entrée de PHOTOS_REVUES dont le chemin est mal orthographié ne protégerait plus rien.
    // La photo peut n'illustrer aucune fiche (elle a pu être retirée) ; elle doit exister.
    const introuvables = Object.keys(PHOTOS_REVUES).filter((p) => !fs.existsSync(path.join(RACINE, "public", p)));
    expect(introuvables).toEqual([]);
  });

  it("une tête murale n'est jamais permise sur une centrale gainable", () => {
    for (const montre of ["murale", "murale-exterieure"] as const) {
      expect(TYPES_PAR_MONTRE[montre]).not.toContain("central-ducted");
    }
    expect(TYPES_PAR_MONTRE.gainable).toEqual(["central-ducted"]);
  });
});
