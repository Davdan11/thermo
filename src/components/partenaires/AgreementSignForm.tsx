"use client";

/* Bloc de signature de l'entente : nom, titre, deux déclarations, signature tracée ou nom tapé.
   Formulaire POST ordinaire vers /entente/[jeton]/signer (le nom tapé fonctionne même sans JavaScript). */

import { useEffect, useState } from "react";
import { FileSignature, Keyboard, PenLine } from "lucide-react";
import { SignaturePad } from "./SignaturePad";

export function AgreementSignForm({ action, textSha256, company, error }: { action: string; textSha256: string; company: string; error: string | null }) {
  const [method, setMethod] = useState<"trace" | "nom">("trace");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [sending, setSending] = useState(false);
  const ready = name.trim().includes(" ") && authorized && accepted && (method === "nom" || Boolean(image));

  return (
    <form action={action} method="post" className="pp-form" onSubmit={() => setSending(true)}>
      {error ? (
        <p className="pp-alert" role="alert">
          {error}
        </p>
      ) : null}
      <input type="hidden" name="textSha256" value={textSha256} />
      <div className="pp-row pp-row--2">
        <div className="pp-field">
          <label className="pp-label" htmlFor="signerName">
            Prénom et nom
          </label>
          <input id="signerName" name="signerName" className="pp-input" autoComplete="name" required minLength={3} maxLength={120} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="pp-field">
          <label className="pp-label" htmlFor="signerTitle">
            Titre dans l’entreprise <small>(ex. président)</small>
          </label>
          <input id="signerTitle" name="signerTitle" className="pp-input" autoComplete="organization-title" required minLength={2} maxLength={80} />
        </div>
      </div>

      <label className="pp-check">
        <input type="checkbox" name="authorized" value="1" required checked={authorized} onChange={(e) => setAuthorized(e.target.checked)} />
        <span>Je confirme être autorisé à signer pour l’entreprise {company}.</span>
      </label>
      <label className="pp-check">
        <input type="checkbox" name="accepted" value="1" required checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />
        <span>J’ai lu et j’accepte l’entente de partenariat ci-dessus.</span>
      </label>

      <div className="pp-field">
        <span className="pp-label">Signature</span>
        <div className="pp-seg" role="radiogroup" aria-label="Façon de signer">
          <label>
            <input type="radio" name="method" value="trace" checked={method === "trace"} onChange={() => setMethod("trace")} />
            <PenLine size={15} aria-hidden /> Tracer
          </label>
          <label>
            <input type="radio" name="method" value="nom" checked={method === "nom"} onChange={() => setMethod("nom")} />
            <Keyboard size={15} aria-hidden /> Taper mon nom
          </label>
        </div>
      </div>
      {method === "trace" ? <SignaturePad name="image" onChange={setImage} /> : <div className="pp-typed" aria-live="polite">{name.trim()}</div>}

      <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block" disabled={sending} aria-disabled={!ready || undefined}>
        <FileSignature size={19} aria-hidden /> {sending ? "Signature en cours…" : "Signer l’entente"}
      </button>
      <p className="pp-hint">
        En signant, vous consentez à signer électroniquement. Sont conservés comme preuve : la date et l’heure, la version exacte du texte et son empreinte numérique (SHA-256), votre adresse IP, votre navigateur et l’image de la signature. Une copie du document signé vous est envoyée par courriel.
      </p>
    </form>
  );
}

/** Signal d'ouverture : un seul POST, une fois la page affichée dans un vrai navigateur (pas les robots des messageries). */
export function OpenBeacon({ url }: { url: string }) {
  useEffect(() => {
    const id = window.setTimeout(() => {
      void fetch(url, { method: "POST", keepalive: true }).catch(() => undefined);
    }, 1200);
    return () => window.clearTimeout(id);
  }, [url]);
  return null;
}

/** Barre de lecture en haut de l'écran (aucune animation propre : suit le défilement). */
export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pp-progress" aria-hidden>
      <i style={{ ["--p" as string]: p }} />
    </div>
  );
}
