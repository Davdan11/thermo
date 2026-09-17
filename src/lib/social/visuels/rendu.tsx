/* ==================================================================
   Rendu PNG des visuels Facebook (serveur), avec ImageResponse de
   next/og (Satori + resvg).

   Polices : public/fonts/social (Inter 400/600/800, Instrument Serif
   italique ; voir LICENCE.txt), lues une fois par processus, avec
   Liberation Sans en secours pour un glyphe absent.

   Photos : fichiers réels du fabricant seulement. Satori ne lit pas le
   WebP : conversion en PNG par sharp (installé avec Next). Le fond
   blanc ou transparent de la photo est posé sur le crème du panneau
   (produit par multiplication, invisible sur le produit lui-même) et
   les marges vides sont rognées : la machine semble détourée, sans
   qu'aucun pixel du produit ne soit inventé ni retouché.
   ================================================================== */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { Faits, Genre } from "../types";
import { Affiche, C, imagesDe, TAILLES, type PhotoPrete, type Ressources } from "./affiches";
import { maquette } from "./maquettes";
import { Metriques } from "./mesure";

type Police = { name: string; data: ArrayBuffer; weight: 400 | 600 | 800; style: "normal" | "italic" };

const ab = (b: Buffer): ArrayBuffer => b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;

let policesPromise: Promise<{ polices: Police[]; metriques: Ressources["metriques"] }> | null = null;

function chargerPolices() {
  if (!policesPromise) {
    const dir = path.join(process.cwd(), "public", "fonts");
    const lire = (f: string) => readFile(path.join(dir, f));
    policesPromise = Promise.all([
      lire("social/Inter-Regular.ttf"),
      lire("social/Inter-SemiBold.ttf"),
      lire("social/Inter-ExtraBold.ttf"),
      lire("social/InstrumentSerif-Italic.ttf"),
      lire("LiberationSans-Regular.ttf"),
    ]).then(([regulier, semi, extra, serif, liberation]) => ({
      polices: [
        { name: "Inter", data: ab(regulier), weight: 400, style: "normal" },
        { name: "Inter", data: ab(semi), weight: 600, style: "normal" },
        { name: "Inter", data: ab(extra), weight: 800, style: "normal" },
        { name: "Instrument", data: ab(serif), weight: 400, style: "italic" },
        { name: "Liberation", data: ab(liberation), weight: 400, style: "normal" },
      ],
      metriques: { regulier: new Metriques(regulier), semi: new Metriques(semi), extra: new Metriques(extra), serif: new Metriques(serif) },
    }));
  }
  return policesPromise;
}

const cache = new Map<string, Promise<PhotoPrete | null>>();

/** Photo ou logo du dossier public → PNG prêt pour Satori ; null si absent ou illisible (le visuel sort alors sans). */
export function preparerImage(cheminPublic: string, genre: "photo" | "logo"): Promise<PhotoPrete | null> {
  if (!cheminPublic.startsWith("/images/") || cheminPublic.includes("..")) return Promise.resolve(null);
  const cle = `${genre}:${cheminPublic}`;
  let p = cache.get(cle);
  if (!p) {
    p = (async () => {
      try {
        const sharp = (await import("sharp")).default;
        const fichier = path.join(process.cwd(), "public", ...cheminPublic.split("/").filter(Boolean));
        const brut = await readFile(fichier);
        let img = sharp(brut).rotate();
        if (genre === "photo") {
          // Fond blanc (ou transparence aplatie sur blanc), rognage des marges vides, puis passage sur le crème.
          const aplatie = await img.flatten({ background: "#ffffff" }).png().toBuffer();
          const rognee = await sharp(aplatie).trim({ background: "#ffffff", threshold: 12 }).toBuffer();
          const meta = await sharp(rognee).metadata();
          const w = meta.width ?? 1, h = meta.height ?? 1;
          const creme = await sharp({ create: { width: w, height: h, channels: 3, background: C.creme } }).png().toBuffer();
          img = sharp(rognee).composite([{ input: creme, blend: "multiply" }]).resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true });
        } else {
          img = img.trim({ threshold: 10 }).resize({ width: 900, height: 300, fit: "inside", withoutEnlargement: true });
          // Logo conçu pour un fond sombre (lettres blanches) : illisible sur le crème, on écrit plutôt le nom de la marque.
          const { data, info } = await img.clone().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
          let opaques = 0;
          let clairs = 0;
          for (let i = 0; i < data.length; i += info.channels) {
            if (data[i + 3] < 128) continue;
            opaques++;
            if (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2] > 225) clairs++;
          }
          if (opaques === 0 || clairs / opaques > 0.25) return null;
        }
        const { data, info } = await img.png().toBuffer({ resolveWithObject: true });
        return { uri: `data:image/png;base64,${data.toString("base64")}`, largeur: info.width, hauteur: info.height };
      } catch (err) {
        console.warn(`[social] image illisible (${cheminPublic}) :`, err instanceof Error ? err.message : err);
        return null;
      }
    })();
    cache.set(cle, p);
    if (cache.size > 80) cache.delete(cache.keys().next().value as string);
  }
  return p;
}

/** PNG du visuel d'une publication (1080 × 1350) ou d'une story (1080 × 1920), dans la mise en page n° `variante`. */
export async function rendreVisuel(faits: Faits, genre: Genre, variante = 0): Promise<Buffer> {
  const { polices, metriques } = await chargerPolices();
  const m = maquette(faits, variante);
  const { photos, logos } = imagesDe(m);
  const images: Ressources["images"] = {};
  for (const p of photos) {
    const img = await preparerImage(p, "photo");
    if (img) images[p] = img;
  }
  for (const l of logos) {
    const img = await preparerImage(l, "logo");
    if (img) images[l] = img;
  }
  const res = new ImageResponse(<Affiche maquette={m} genre={genre} ressources={{ images, metriques }} />, { ...TAILLES[genre], fonts: polices });
  return Buffer.from(await res.arrayBuffer());
}
