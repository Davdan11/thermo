/**
 * Manifeste des photos du catalogue — à quelles fiches une photo a le droit d'être attachée.
 *
 * Pourquoi ce fichier existe
 * --------------------------
 * Une fiche qui montre la photo d'un autre appareil ruine la confiance : une centrale gainable
 * illustrée par une tête murale, une fiche Bryant qui affiche une photo au logo Payne, une photo
 * de la famille 37MHRAQ posée sur un modèle 37MURAQ. Les scripts de rattachement travaillent par
 * préfixe et par héritage (série, jumelage OEM) : il suffit d'une série fourre-tout pour qu'une
 * photo saute vers une famille voisine. Ce manifeste est la table de vérité qui dit, pour chaque
 * photo, ce qu'elle montre vraiment et à qui elle appartient. Le test
 * `src/lib/data/photos/__tests__/photos-catalogue.test.ts` refuse toute fiche publiée qui s'en écarte.
 *
 * Trois règles, toutes vérifiables
 * --------------------------------
 * 1. TYPE       — ce que la photo montre doit correspondre au type de la fiche (voir TYPES_PAR_MONTRE).
 * 2. MARQUE     — la fiche ne doit pas afficher le logo d'une autre marque. Les rebadges (Payne,
 *                 Bryant, Carrier, Keeprite, Tempstar… viennent des mêmes usines) ne changent rien :
 *                 le logo imprimé sur le boîtier est celui d'une marque précise.
 * 3. FAMILLE    — le numéro de modèle de la fiche doit commencer par une des familles permises.
 *                 Les familles sont dans `familles-photos.json`, un instantané régénéré par
 *                 `npx tsx scripts/audit-photos-catalogue.ts --manifeste` APRÈS revue. Elles
 *                 figent l'état vérifié : une reconstruction du catalogue qui étend une photo à
 *                 une famille inconnue fait tomber le test, et un humain tranche.
 *
 * Comment la revue a été faite
 * ----------------------------
 * Chaque photo utilisée par une fiche publiée a été regardée (planches-contact de
 * `scripts/contact-sheet.mjs`, puis agrandissements sur les cas douteux). Le résultat est ci-dessous :
 *   - `montre` : par défaut « exterieure » (l'écrasante majorité des photos sont des unités
 *     extérieures nues) ; les exceptions sont listées dans PHOTOS_REVUES.
 *   - `logos`  : par défaut la marque déduite du nom de fichier, confirmée à l'œil sur toutes les
 *     photos partagées entre plusieurs marques. Une photo sans aucun logo lisible porte `[]` et
 *     peut alors servir à toutes les marques qui vendent ce boîtier.
 *
 * En cas de doute : on retire la photo. Le site affiche « Photo officielle à venir », ce qui est honnête.
 */

import famillesJson from "./familles-photos.json";

/** Type de système d'une fiche, tel que le catalogue le stocke. */
export type TypeSysteme = "wall-single" | "multi-zone" | "central-ducted";

/** Ce que la photo montre réellement. */
export type Montre =
  /** Unité extérieure seule (condenseur). Le même boîtier sert en murale, en multizone et en centrale. */
  | "exterieure"
  /** Unité extérieure accompagnée d'un caisson ou d'un serpentin gainable : un système sur conduits. */
  | "gainable"
  /** Tête murale intérieure seule. */
  | "murale"
  /** Tête murale intérieure avec son unité extérieure : une monozone murale. */
  | "murale-exterieure"
  /** Plusieurs appareils d'une même gamme, dont au moins une tête intérieure sans conduits. */
  | "gamme";

/**
 * Types de fiche permis selon ce que la photo montre.
 * Une centrale gainable ne doit jamais montrer de tête murale ; une multizone ne doit pas se
 * présenter avec une seule murale, qui laisserait croire à un appareil une-zone.
 */
export const TYPES_PAR_MONTRE: Record<Montre, readonly TypeSysteme[]> = {
  exterieure: ["wall-single", "multi-zone", "central-ducted"],
  gainable: ["central-ducted"],
  murale: ["wall-single"],
  "murale-exterieure": ["wall-single"],
  gamme: ["wall-single", "multi-zone"],
};

/**
 * Marques qui sont la même marque commerciale sous deux identifiants dans la liste LogisVert.
 * Rien à voir avec les rebadges : ici c'est le même nom sur le boîtier.
 */
export const MARQUES_JUMELLES: readonly (readonly string[])[] = [
  ["bryant", "bryant-heating-and-cooling-systems"],
  ["payne", "payne-heating-and-cooling"],
  ["ge", "ge-appliances"],
];

/**
 * Photos dont la revue visuelle s'écarte des valeurs par défaut.
 * `montre` absent ⇒ « exterieure ». `logos` absent ⇒ la marque du nom de fichier.
 */
export const PHOTOS_REVUES: Record<string, { montre?: Montre; logos?: readonly string[] }> = {
  // --- Carrier : photos « série » des gammes sans conduits. Une tête murale blanche posée
  // au-dessus du condenseur au logo Carrier. Rien à faire sur une centrale ni sur une multizone.
  "/images/products/carrier-comfort-37mhraq-series.webp": { montre: "murale-exterieure" },
  "/images/products/carrier-infinity-37mahaq-series.webp": { montre: "murale-exterieure" },
  "/images/products/carrier-infinity-37mgha-series.webp": { montre: "murale-exterieure" },
  "/images/products/carrier-infinity-37mpraq-series.webp": { montre: "murale-exterieure" },
  "/images/products/carrier-performance-37maraq-series.webp": { montre: "murale-exterieure" },

  // --- Daikin
  "/images/products/daikin-atmosphera-9k.webp": { montre: "murale-exterieure" },
  "/images/products/daikin-atmosphera-12k.webp": { montre: "murale-exterieure" },
  "/images/products/daikin-aurora-9k.webp": { montre: "murale-exterieure" },
  "/images/products/daikin-aurora-12k.webp": { montre: "murale-exterieure" },
  "/images/products/daikin-aurora-15k.webp": { montre: "murale-exterieure" },
  "/images/products/daikin-aurora-18k.webp": { montre: "murale-exterieure" },
  "/images/products/daikin-aurora-24k.webp": { montre: "murale-exterieure" },
  "/images/products/official/daikin-atmosphera-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/daikin-aurora-officiel.webp": { montre: "murale-exterieure" },

  // --- Fujitsu
  "/images/products/fujitsu-rls3-9k.webp": { montre: "murale-exterieure" },
  "/images/products/fujitsu-rls3-12k.webp": { montre: "murale-exterieure" },
  "/images/products/fujitsu-xlth-9k.webp": { montre: "murale-exterieure" },
  "/images/products/fujitsu-xlth-12k.webp": { montre: "murale-exterieure" },
  "/images/products/fujitsu-xlth-15k.webp": { montre: "murale-exterieure" },
  "/images/products/official/fujitsu-airstage-orion-xlth-kzah1-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/fujitsu-rls3y-officiel.webp": { montre: "murale-exterieure" },

  // --- Gree (les photos « système » montrent la tête murale devant le condenseur)
  "/images/products/gree-sapphire-9k.webp": { montre: "murale-exterieure" },
  "/images/products/gree-sapphire-12k.webp": { montre: "murale-exterieure" },
  "/images/products/gree-sapphire-18k.webp": { montre: "murale-exterieure" },
  "/images/products/gree-sapphire-24k.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-clivia-r32-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-crossover-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-crossover-r32-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-extreme-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-extreme-r32-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-lomo-20-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-lomo-23-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-sapphire-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-vita-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-vita-r32-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/gree-x-match-r32-officiel.webp": { montre: "murale-exterieure" },
  // Condenseur + caisson gainable : la gamme FLEXX sur conduits.
  "/images/products/gree-flexx-36k.webp": { montre: "gainable" },
  "/images/products/official/gree-flexx-eco-officiel.webp": { montre: "gainable" },

  // --- LG
  "/images/products/lg-art-cool-9k.webp": { montre: "murale-exterieure" },
  "/images/products/lg-art-cool-12k.webp": { montre: "murale-exterieure" },
  "/images/products/lg-art-cool-18k.webp": { montre: "murale-exterieure" },
  "/images/products/lg-standard-9k.webp": { montre: "murale-exterieure" },
  "/images/products/lg-standard-12k.webp": { montre: "murale-exterieure" },
  "/images/products/lg-standard-18k.webp": { montre: "murale-exterieure" },
  "/images/products/official/lg-art-cool-mirror-officiel.webp": { montre: "murale-exterieure" },

  // --- Mainline
  "/images/products/mainline-nexus-9k.webp": { montre: "murale-exterieure" },
  "/images/products/mainline-nexus-12k.webp": { montre: "murale-exterieure" },
  "/images/products/mainline-nexus-18k.webp": { montre: "murale-exterieure" },
  "/images/products/mainline-nexus-24k.webp": { montre: "murale-exterieure" },
  "/images/products/mainline-nexus-ultra-9k.webp": { montre: "murale-exterieure" },
  "/images/products/mainline-nexus-ultra-12k.webp": { montre: "murale-exterieure" },
  "/images/products/mainline-nexus-ultra-18k.webp": { montre: "murale-exterieure" },
  "/images/products/mainline-nexus-ultra-24k.webp": { montre: "murale-exterieure" },
  "/images/products/official/mainline-nexus-officiel.webp": { montre: "murale-exterieure" },

  // --- Mitsubishi Electric (le nom de fichier dit « mitsubishi », la marque du catalogue est
  // « mitsubishi-electric » ; la déduction automatique est corrigée par marqueDuFichier()).
  "/images/products/mitsubishi-fh-9k.webp": { montre: "murale-exterieure" },
  "/images/products/mitsubishi-fh-12k.webp": { montre: "murale-exterieure" },
  "/images/products/mitsubishi-fh-18k.webp": { montre: "murale-exterieure" },
  "/images/products/mitsubishi-fs-6k.webp": { montre: "murale-exterieure" },
  "/images/products/mitsubishi-fs-9k.webp": { montre: "murale-exterieure" },
  "/images/products/mitsubishi-fs-12k.webp": { montre: "murale-exterieure" },
  "/images/products/mitsubishi-fs-15k.webp": { montre: "murale-exterieure" },
  "/images/products/mitsubishi-fs-18k.webp": { montre: "murale-exterieure" },

  // --- Moovair
  "/images/products/moovair-meridian-9k.webp": { montre: "murale-exterieure" },
  "/images/products/moovair-meridian-12k.webp": { montre: "murale-exterieure" },
  "/images/products/moovair-meridian-18k.webp": { montre: "murale-exterieure" },
  "/images/products/moovair-meridian-24k.webp": { montre: "murale-exterieure" },
  "/images/products/moovair-mistral-9k.webp": { montre: "murale-exterieure" },
  "/images/products/moovair-mistral-12k.webp": { montre: "murale-exterieure" },
  "/images/products/moovair-morelis-12k.webp": { montre: "murale-exterieure" },
  "/images/products/moovair-morelis-18k.webp": { montre: "murale-exterieure" },

  // --- Napoleon, Panasonic, Sharp
  "/images/products/official/napoleon-ndhas22-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/napoleon-ndhas26-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/panasonic-climapure-xz-9k.webp": { montre: "murale-exterieure" },
  "/images/products/panasonic-climapure-xz-12k.webp": { montre: "murale-exterieure" },
  "/images/products/panasonic-climapure-xz-15k.webp": { montre: "murale-exterieure" },
  "/images/products/panasonic-climapure-xz-18k.webp": { montre: "murale-exterieure" },
  "/images/products/panasonic-climapure-xz-24k.webp": { montre: "murale-exterieure" },
  "/images/products/official/sharp-serie-cpu-airest-systeme-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/sharp-serie-tu-systeme-officiel.webp": { montre: "murale-exterieure" },
  "/images/products/official/sharp-serie-zhu-zu-systeme-officiel.webp": { montre: "murale-exterieure" },

  // --- Têtes murales seules. Le nom du fichier Elios dit « exterieure », la photo dit le contraire.
  "/images/products/official/elios-e19-exterieure-officielle.webp": { montre: "murale" },
  "/images/products/official/tcl-freshin-3-0-interieure-officiel.webp": { montre: "murale" },
  "/images/products/official/tcl-ultimate-25-interieure-officiel.webp": { montre: "murale" },

  // --- Pages de brochure « Central Ducted Systems » au logo Midea : réservées aux centrales,
  // et au seul catalogue Midea (les rebadges Tempstar, Keeprite, Heil… ont leur propre logo).
  "/images/products/midea-evox-36k.webp": { montre: "gainable" },
  "/images/products/official/midea-evox-g3-officiel.webp": { montre: "gainable" },

  // --- Photos de gamme : plusieurs unités extérieures et une tête murale côte à côte.
  "/images/products/official/coleman-hmh7-officiel.webp": { montre: "gamme" },
  "/images/products/official/york-hmh7-officiel.webp": { montre: "gamme" },

  // --- Marques visibles qui ne se déduisent pas du nom de fichier.
  // Les condenseurs Keeprite « DLC… » portent le logo Keeprite, souvent doublé du logo Midea
  // (les deux sont lisibles sur le boîtier) ; la photo est donc permise sur ces deux marques.
  "/images/products/official/keeprite-dlclra-officiel.webp": { logos: ["keeprite", "midea"] },
  "/images/products/official/keeprite-dlclrb-officiel.webp": { logos: ["keeprite", "midea"] },
  "/images/products/official/keeprite-dlclra-36k.webp": { logos: ["keeprite", "midea"] },
  "/images/products/official/keeprite-dlclrb-48k.webp": { logos: ["keeprite", "midea"] },
  "/images/products/official/keeprite-dlcmra-officiel.webp": { logos: ["keeprite", "midea"] },
  "/images/products/official/keeprite-dlcmra-48k.webp": { logos: ["keeprite", "midea"] },
  "/images/products/official/keeprite-dlcpra-officiel.webp": { logos: ["keeprite", "midea"] },
  "/images/products/official/keeprite-dlcsra-officiel.webp": { logos: ["keeprite", "midea"] },
  // Boîtier nu, aucun logo lisible : utilisable par toutes les marques qui vendent ce condenseur.
  "/images/products/official/keeprite-dlcura-officiel.webp": { logos: [] },
};

/**
 * Une ligne du fichier généré `familles-photos.json` : la table explicite
 * « photo → familles permises, types permis, marques permises ».
 * `marque` et `familles` sont produits par le script ; `montre`, `logos`, `typesPermis` et
 * `marquesPermises` sont la mise à plat des règles ci-dessus, pour que les scripts de
 * rattachement (en .mjs) puissent les lire sans réimplémenter quoi que ce soit.
 * `marquesPermises: null` ⇒ aucun logo lisible ⇒ toutes les marques sont permises.
 */
export type EntreeManifeste = {
  marque: string;
  montre: Montre;
  logos: string[];
  typesPermis: string[];
  marquesPermises: string[] | null;
  familles: string[];
};
export const MANIFESTE_PHOTOS = famillesJson as unknown as Record<string, EntreeManifeste>;
const FAMILLES = MANIFESTE_PHOTOS;

/** Marque dont le logo est imprimé sur la photo, déduite du chemin du fichier. */
export function marqueDuFichier(chemin: string): string | null {
  return FAMILLES[chemin]?.marque ?? null;
}

/**
 * Règles applicables à une photo, valeurs par défaut comprises.
 * `marqueSiAbsente` sert au script qui régénère le manifeste : une photo qui vient d'arriver
 * n'y figure pas encore, et sans cela elle recevrait une liste de types permis vide — donc
 * refusée partout, et il faudrait régénérer deux fois pour qu'elle devienne posable.
 */
export function reglesPhoto(chemin: string, marqueSiAbsente?: string) {
  const genere = FAMILLES[chemin] ?? (marqueSiAbsente ? { marque: marqueSiAbsente, familles: [] } : null);
  if (!genere) return null;
  const revue = PHOTOS_REVUES[chemin] ?? {};
  const montre: Montre = revue.montre ?? "exterieure";
  const logos = revue.logos ?? [genere.marque];
  const marquesPermises = new Set<string>();
  for (const logo of logos) {
    marquesPermises.add(logo);
    for (const groupe of MARQUES_JUMELLES) if (groupe.includes(logo)) groupe.forEach((m) => marquesPermises.add(m));
  }
  return {
    montre,
    logos,
    typesPermis: TYPES_PAR_MONTRE[montre],
    /** Vide ⇒ aucun logo lisible ⇒ toutes les marques sont permises. */
    marquesPermises: logos.length === 0 ? null : [...marquesPermises].sort(),
    familles: genere.familles,
  };
}

/** Numéro de modèle réduit à ses lettres et chiffres, en majuscules. */
export const normaliserModele = (numero: string) => numero.toUpperCase().replace(/[^A-Z0-9]/g, "");

/**
 * Vérifie une affectation. Retourne null si tout va bien, sinon la raison en clair.
 */
export function verifierAffectation(args: {
  photo: string;
  marque: string;
  numeroModele: string;
  typeSysteme: string;
}): string | null {
  const regles = reglesPhoto(args.photo);
  if (!regles) return `photo absente du manifeste (${args.photo})`;
  if (!regles.typesPermis.includes(args.typeSysteme as TypeSysteme)) {
    return `type : la photo montre « ${regles.montre} », la fiche est « ${args.typeSysteme} »`;
  }
  if (regles.marquesPermises && !regles.marquesPermises.includes(args.marque)) {
    return `marque : la photo porte le logo ${regles.logos.join(" / ")}, la fiche est ${args.marque}`;
  }
  const cle = normaliserModele(args.numeroModele);
  if (regles.familles.length > 0 && !regles.familles.some((f) => cle.startsWith(f))) {
    return `famille : ${args.numeroModele} ne commence par aucune des familles permises (${regles.familles.join(", ")})`;
  }
  return null;
}
