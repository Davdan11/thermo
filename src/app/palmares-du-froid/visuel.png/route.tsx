/* /palmares-du-froid/visuel.png — visuel portrait (1080 × 1350) à reprendre sur Facebook, Instagram ou dans un article. */
import { PALMARES_EDITION } from "@/lib/blogue/palmares";
import { getPalmares } from "@/lib/blogue/palmares-site";
import { palmaresImage } from "@/lib/blogue/palmares-visual";

export const runtime = "nodejs";
export const revalidate = 604800;

export async function GET() {
  const img = await palmaresImage(getPalmares(), "portrait", PALMARES_EDITION);
  const buf = new Uint8Array(await img.arrayBuffer());
  return new Response(buf, {
    headers: {
      "Content-Type": "image/png",
      "Content-Length": String(buf.length),
      "Content-Disposition": 'inline; filename="palmares-du-froid-2026.png"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
