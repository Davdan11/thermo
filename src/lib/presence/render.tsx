/* ==================================================================
   Rendu PNG d'une diapositive (serveur) avec ImageResponse (next/og).
   Polices chargées comme /api/og : fichiers lus sur disque une fois
   par processus (Geist, livrée avec next/og, puis Liberation Sans du
   dossier public/fonts pour les glyphes manquants).
   Photos du fabricant : Satori ne lit pas le WebP ; elles sont
   converties en PNG avec sharp (déjà installé avec Next pour
   l'optimisation des images). Sans sharp, le visuel sort sans photo.
   ================================================================== */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SIZES, SlideFrame } from "./visuals";
import type { Post, Slide, VisualFormat } from "./types";
import type { VisualSlot } from "./signing";

type FontDef = { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" };

let fontsPromise: Promise<{ fonts: FontDef[]; family: string }> | null = null;

const ab = (b: Buffer): ArrayBuffer => b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;

function loadFonts() {
  if (!fontsPromise) {
    const pub = path.join(process.cwd(), "public", "fonts");
    const geist = path.join(process.cwd(), "node_modules", "next", "dist", "compiled", "@vercel", "og", "Geist-Regular.ttf");
    fontsPromise = Promise.all([readFile(geist).catch(() => null), readFile(path.join(pub, "LiberationSans-Regular.ttf")), readFile(path.join(pub, "LiberationSans-Bold.ttf"))]).then(([g, regular, bold]) => {
      const fonts: FontDef[] = [];
      if (g) fonts.push({ name: "Geist", data: ab(g), weight: 400, style: "normal" });
      fonts.push({ name: "Liberation", data: ab(regular), weight: 400, style: "normal" });
      fonts.push({ name: "Liberation", data: ab(bold), weight: 700, style: "normal" });
      return { fonts, family: g ? "Geist, Liberation" : "Liberation" };
    });
  }
  return fontsPromise;
}

const photoCache = new Map<string, Promise<string | null>>();

/** Photo publique (/images/…) → data URI PNG, ou null si absente ou illisible. */
export function photoDataUri(publicPath: string): Promise<string | null> {
  if (!publicPath.startsWith("/images/") || publicPath.includes("..")) return Promise.resolve(null);
  let p = photoCache.get(publicPath);
  if (!p) {
    p = (async () => {
      try {
        const file = path.join(process.cwd(), "public", ...publicPath.split("/").filter(Boolean));
        const buf = await readFile(file);
        const ext = path.extname(file).toLowerCase();
        if (ext === ".png") return `data:image/png;base64,${buf.toString("base64")}`;
        if (ext === ".jpg" || ext === ".jpeg") return `data:image/jpeg;base64,${buf.toString("base64")}`;
        const sharp = (await import("sharp")).default;
        const png = await sharp(buf).resize({ width: 1000, height: 1000, fit: "inside", withoutEnlargement: true }).flatten({ background: "#ffffff" }).png().toBuffer();
        return `data:image/png;base64,${png.toString("base64")}`;
      } catch (err) {
        console.warn(`[presence] photo illisible (${publicPath}) :`, err instanceof Error ? err.message : err);
        return null;
      }
    })();
    photoCache.set(publicPath, p);
    if (photoCache.size > 60) photoCache.delete(photoCache.keys().next().value as string);
  }
  return p;
}

function photoPaths(slide: Slide): string[] {
  if (slide.kind === "cover" && slide.photo) return [slide.photo.path];
  if (slide.kind === "compare") return [slide.a.photo?.path, slide.b.photo?.path].filter((x): x is string => !!x);
  return [];
}

export function slideFor(post: Pick<Post, "slides" | "story">, slot: VisualSlot): { slide: Slide; format: VisualFormat; index: number; total: number } | null {
  if (slot === "story") return post.story ? { slide: post.story, format: "story", index: 0, total: 1 } : null;
  const slide = post.slides[slot];
  return slide ? { slide, format: "carrousel", index: slot, total: post.slides.length } : null;
}

/** PNG d'une diapositive ou de la story. */
export async function renderSlidePng(post: Pick<Post, "slides" | "story" | "footnote">, slot: VisualSlot): Promise<Buffer> {
  const found = slideFor(post, slot);
  if (!found) throw new Error("Diapositive introuvable.");
  const { fonts, family } = await loadFonts();
  const photos: Record<string, string> = {};
  for (const p of photoPaths(found.slide)) {
    const uri = await photoDataUri(p);
    if (uri) photos[p] = uri;
  }
  const res = new ImageResponse(<SlideFrame slide={found.slide} format={found.format} index={found.index} total={found.total} footnote={post.footnote} photos={photos} fontFamily={family} />, {
    ...SIZES[found.format],
    fonts,
  });
  return Buffer.from(await res.arrayBuffer());
}
