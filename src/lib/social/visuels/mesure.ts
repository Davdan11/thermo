/* ==================================================================
   Mesure du texte avec les chasses réelles de la police (tables cmap
   et hmtx du TTF) : les titres des visuels sont coupés en lignes et
   dimensionnés AVANT le rendu, pour qu'aucun texte ne déborde ni ne
   soit coupé. Le crénage est ignoré : une marge de 3 % le couvre.
   ================================================================== */

export class Metriques {
  private readonly avances = new Map<number, number>();
  private readonly unites: number;
  private readonly defaut: number;

  constructor(ttf: Buffer | Uint8Array) {
    const b = Buffer.from(ttf.buffer, ttf.byteOffset, ttf.byteLength);
    const tables = new Map<string, number>();
    const n = b.readUInt16BE(4);
    for (let i = 0; i < n; i++) tables.set(b.toString("latin1", 12 + 16 * i, 16 + 16 * i), b.readUInt32BE(20 + 16 * i));
    const head = tables.get("head")!, hhea = tables.get("hhea")!, hmtx = tables.get("hmtx")!, cmap = tables.get("cmap")!;
    this.unites = b.readUInt16BE(head + 18);
    const nbMetriques = b.readUInt16BE(hhea + 34);
    const avance = (g: number) => b.readUInt16BE(hmtx + 4 * Math.min(g, nbMetriques - 1));

    const nbSousTables = b.readUInt16BE(cmap + 2);
    let format4: number | null = null;
    let format12: number | null = null;
    for (let i = 0; i < nbSousTables; i++) {
      const off = cmap + b.readUInt32BE(cmap + 8 + 8 * i);
      const fmt = b.readUInt16BE(off);
      if (fmt === 12) format12 = off;
      if (fmt === 4) format4 = off;
    }
    if (format12 !== null) {
      const groupes = b.readUInt32BE(format12 + 12);
      for (let i = 0; i < groupes; i++) {
        const o = format12 + 16 + 12 * i;
        const debut = b.readUInt32BE(o), fin = b.readUInt32BE(o + 4), glyphe = b.readUInt32BE(o + 8);
        for (let c = debut; c <= fin && c < 0x30000; c++) this.avances.set(c, avance(glyphe + c - debut));
      }
    } else if (format4 !== null) {
      const segs = b.readUInt16BE(format4 + 6) / 2;
      const fins = format4 + 14, debuts = fins + 2 * segs + 2, deltas = debuts + 2 * segs, decalages = deltas + 2 * segs;
      for (let s = 0; s < segs; s++) {
        const fin = b.readUInt16BE(fins + 2 * s), debut = b.readUInt16BE(debuts + 2 * s);
        const delta = b.readInt16BE(deltas + 2 * s), decalage = b.readUInt16BE(decalages + 2 * s);
        for (let c = debut; c <= fin && c !== 0xffff; c++) {
          let g: number;
          if (decalage === 0) g = (c + delta) & 0xffff;
          else {
            g = b.readUInt16BE(decalages + 2 * s + decalage + 2 * (c - debut));
            if (g !== 0) g = (g + delta) & 0xffff;
          }
          if (g !== 0) this.avances.set(c, avance(g));
        }
      }
    }
    this.defaut = this.avances.get(0x6e) ?? this.unites * 0.55; // « n »
  }

  /** Largeur en pixels d'un texte à `taille` px, avec un espacement des lettres en em (ex. −0,03). */
  largeur(texte: string, taille: number, espacementEm = 0): number {
    let u = 0;
    let n = 0;
    for (const ch of texte) {
      u += this.avances.get(ch.codePointAt(0)!) ?? this.defaut;
      n++;
    }
    return (u / this.unites) * taille * 1.03 + n * espacementEm * taille;
  }
}

export interface Mot {
  texte: string;
  /** Mot surligné au marqueur orange. */
  marque?: boolean;
}

/** Découpe en mots, en gardant le surlignage ; « −30 °C » reste d'un bloc (espace insécable). */
export function mots(segments: Array<{ texte: string; marque?: boolean }>): Mot[] {
  return segments.flatMap((s) =>
    s.texte
      .split(/ +/)
      .filter(Boolean)
      .map((t) => ({ texte: t, ...(s.marque ? { marque: true } : {}) })),
  );
}

/** Mesure d'un mot à une taille donnée (police du texte courant ou du mot marqué). */
export interface Mesureur {
  mot(w: Mot, taille: number): number;
  espace(taille: number): number;
}

/** Mesureur d'une seule police ; `marque` : autre police et marge (em de chaque côté) pour les mots marqués. */
export function mesureur(m: Metriques, espacementEm = 0, marque?: { m: Metriques; espacementEm?: number; margeEm: number }): Mesureur {
  return {
    mot: (w, t) => (w.marque && marque ? marque.m.largeur(w.texte, t, marque.espacementEm ?? 0) + 2 * marque.margeEm * t : m.largeur(w.texte, t, espacementEm)),
    espace: (t) => m.largeur(" ", t, espacementEm),
  };
}

/** Coupe des mots en lignes qui tiennent dans `largeurMax` (un mot trop long reste seul sur sa ligne). */
export function couper(liste: Mot[], me: Mesureur, taille: number, largeurMax: number): Mot[][] {
  const espace = me.espace(taille);
  const lignes: Mot[][] = [];
  let courante: Mot[] = [];
  let l = 0;
  for (const w of liste) {
    const lw = me.mot(w, taille);
    if (courante.length && l + espace + lw > largeurMax) {
      lignes.push(courante);
      courante = [];
      l = 0;
    }
    l += (courante.length ? espace : 0) + lw;
    courante.push(w);
  }
  if (courante.length) lignes.push(courante);
  return lignes;
}

export interface Ajustement {
  taille: number;
  lignes: Mot[][];
}

/** Plus grande taille (pas de 2 px) où le texte tient en `lignesMax` lignes sans mot plus large que la zone. */
export function ajuster(liste: Mot[], me: Mesureur, o: { min: number; max: number; largeur: number; lignesMax: number }): Ajustement {
  for (let t = o.max; t >= o.min; t -= 2) {
    const lignes = couper(liste, me, t, o.largeur);
    const tropLarge = lignes.some((ligne) => ligne.length === 1 && me.mot(ligne[0], t) > o.largeur);
    if (lignes.length <= o.lignesMax && !tropLarge) return { taille: t, lignes };
  }
  return { taille: o.min, lignes: couper(liste, me, o.min, o.largeur) };
}
