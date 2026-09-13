/* Réduction d'une photo dans le navigateur avant l'envoi (1600 px au plus, JPEG) : téléversement rapide sur le
   chantier, et les métadonnées du téléphone (dont la position GPS) ne partent pas. Le serveur recompresse ensuite. */

export async function compressImage(file: File, max = 1600, quality = 0.82): Promise<Blob> {
  let bitmap: ImageBitmap | null = null;
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    return file;
  }
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const w = Math.max(1, Math.round(bitmap.width * scale));
  const h = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, w, h);
  bitmap.close();
  return new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b ?? file), "image/jpeg", quality));
}

export async function uploadPhoto(file: File, opts: { quoteId?: string | null; logo?: boolean } = {}): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const blob = await compressImage(file, opts.logo ? 800 : 1600, opts.logo ? 0.92 : 0.82);
  const fd = new FormData();
  fd.set("file", blob, "photo.jpg");
  if (opts.quoteId) fd.set("quoteId", opts.quoteId);
  if (opts.logo) fd.set("logo", "1");
  try {
    const res = await fetch("/gestion/soumissions/photo", { method: "POST", body: fd });
    const json = (await res.json().catch(() => null)) as { ok?: boolean; id?: string; error?: string } | null;
    if (json?.ok && json.id) return { ok: true, id: json.id };
    return { ok: false, error: json?.error ?? `Erreur ${res.status}` };
  } catch {
    return { ok: false, error: "Connexion impossible." };
  }
}
