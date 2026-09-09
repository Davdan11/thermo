"use client";

/* ==================================================================
   Bandeau de consentement à la mesure d'audience (Loi 25).
   Affiché seulement si la mesure est configurée (NEXT_PUBLIC_GA_ID) et
   qu'aucun choix n'a encore été fait. Le lien « Témoins » du pied de
   page rouvre le bandeau (événement tpv-consent-open) pour changer d'avis.
   ================================================================== */

import Link from "next/link";
import { useEffect, useState } from "react";
import { GA_ID, applyConsent, readConsent } from "./Analytics";

export const CONSENT_OPEN_EVENT = "tpv-consent-open";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    if (readConsent() === null) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (choice: "granted" | "denied") => {
    applyConsent(choice);
    setVisible(false);
  };

  return (
    <section
      role="region"
      aria-label="Témoins et mesure d'audience"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 60,
        maxWidth: 720,
        margin: "0 auto",
        backgroundColor: "#0C1821",
        color: "#fff",
        borderRadius: 8,
        boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
        padding: "16px 20px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 12,
      }}
    >
      <p style={{ margin: 0, flex: "1 1 320px", fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.85)" }}>
        Nous mesurons la fréquentation du site de façon anonyme pour l&apos;améliorer. Aucun témoin de mesure n&apos;est déposé sans votre
        accord, et rien n&apos;est vendu à des tiers.{" "}
        <Link href="/confidentialite" style={{ color: "#fff", textDecoration: "underline" }}>
          Politique de confidentialité
        </Link>
      </p>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          type="button"
          onClick={() => choose("denied")}
          style={{ padding: "10px 16px", borderRadius: 4, border: "1px solid rgba(255,255,255,0.35)", background: "transparent", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", minHeight: 44 }}
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          style={{ padding: "10px 18px", borderRadius: 4, border: "none", background: "#e54b17", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", minHeight: 44 }}
        >
          Accepter
        </button>
      </div>
    </section>
  );
}

/** Lien « Témoins » du pied de page : rouvre le bandeau. N'apparaît que si la mesure est configurée. */
export function ConsentLink({ style }: { style?: React.CSSProperties }) {
  if (!GA_ID) return null;
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit", ...style }}>
      Témoins
    </button>
  );
}
