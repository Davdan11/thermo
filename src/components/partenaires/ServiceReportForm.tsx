"use client";

/* Formulaire « Un problème ? » : description, moment préféré, jusqu'à 4 photos (réduites dans le téléphone avant
   l'envoi). Sans JavaScript, le formulaire part tel quel (photos d'origine, 12 Mo au plus chacune). */

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Send, X } from "lucide-react";
import { compressImage } from "@/components/gestion/soumissions/compress";

export function ServiceReportForm({ action }: { action: string }) {
  const router = useRouter();
  const [files, setFiles] = useState<Array<{ file: File; url: string }>>([]);
  const [sending, setSending] = useState(false);

  const add = (list: FileList | null) => {
    if (!list) return;
    const next = [...files, ...Array.from(list).map((file) => ({ file, url: URL.createObjectURL(file) }))].slice(0, 4);
    setFiles(next);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.delete("photos");
    for (const f of files) fd.append("photos", await compressImage(f.file, 1600, 0.82), "photo.jpg");
    const page = action.replace(/\/envoyer$/, "");
    try {
      const res = await fetch(action, { method: "POST", body: fd });
      const u = new URL(res.url || page, window.location.href);
      form.reset();
      setFiles([]);
      router.replace(`${u.pathname}${u.search}`);
      router.refresh();
    } catch {
      router.replace(`${page}?e=erreur`);
    } finally {
      setSending(false);
    }
  };

  return (
    <form action={action} method="post" encType="multipart/form-data" className="pp-form" onSubmit={submit}>
      <div className="pp-field">
        <label className="pp-label" htmlFor="description">
          Le problème
        </label>
        <textarea id="description" name="description" className="pp-textarea" required minLength={5} maxLength={3000} placeholder="Ex. : l’unité intérieure du salon goutte depuis hier soir." />
      </div>
      <div className="pp-field">
        <label className="pp-label" htmlFor="contactPreference">
          Quand vous joindre ? <small>(facultatif)</small>
        </label>
        <input id="contactPreference" name="contactPreference" className="pp-input" maxLength={200} placeholder="Ex. : en semaine après 16 h" />
      </div>
      <div className="pp-field">
        <span className="pp-label">Photos <small>(jusqu’à 4)</small></span>
        {files.length ? (
          <div className="ft-thumbs" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {files.map((f, i) => (
              <figure key={f.url} style={{ position: "relative", width: 84, height: 84, margin: 0, borderRadius: 14, overflow: "hidden", background: "var(--cream-2)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.url} alt={`Photo ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <button
                  type="button"
                  aria-label="Retirer cette photo"
                  onClick={() => setFiles((xs) => xs.filter((_, j) => j !== i))}
                  style={{ position: "absolute", top: 5, right: 5, width: 26, height: 26, borderRadius: 99, border: 0, background: "rgba(12,24,33,.75)", color: "#fff", display: "grid", placeItems: "center", cursor: "pointer" }}
                >
                  <X size={13} />
                </button>
              </figure>
            ))}
          </div>
        ) : null}
        {files.length < 4 ? (
          <label className="pp-btn pp-btn--ghost" style={{ position: "relative", justifySelf: "start" }}>
            <Camera size={17} aria-hidden /> Ajouter une photo
            <input type="file" name="photos" accept="image/*" multiple onChange={(e) => add(e.target.files)} style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }} />
          </label>
        ) : null}
      </div>
      <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block" disabled={sending}>
        <Send size={18} aria-hidden /> {sending ? "Envoi…" : "Envoyer"}
      </button>
      <p className="pp-hint">Vos photos servent seulement à régler ce problème. Elles sont conservées dans votre dossier, jamais publiées.</p>
    </form>
  );
}
