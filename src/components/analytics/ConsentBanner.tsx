"use client";

/* ==================================================================
   Bandeau de consentement à la mesure d'audience (Loi 25).
   Affiché seulement si la mesure est configurée (NEXT_PUBLIC_GA_ID) et
   qu'aucun choix n'a encore été fait. Le lien « Témoins » du pied de
   page rouvre le bandeau (événement tpv-consent-open) pour changer d'avis.

   Affichage dès le premier rendu : le bandeau est rendu au serveur,
   masqué, et un petit script en ligne (exécuté pendant la lecture du
   HTML, avant le premier affichage) le montre si aucun choix n'est
   mémorisé. Même règle qu'avant, mais sans attendre le JavaScript de la
   page (le bandeau apparaissait ~5 s plus tard sur mobile et devenait
   le « plus grand élément » mesuré par Google). Après l'hydratation,
   React reprend la main exactement comme avant.
   ================================================================== */

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_KEY, GA_ID, applyConsent, readConsent } from "./Analytics";

export const CONSENT_OPEN_EVENT = "tpv-consent-open";

/** Montre le bandeau (élément qui précède le script : déjà lu par le navigateur quand le script s'exécute)
 *  si aucun choix valide n'est mémorisé ; stockage indisponible = pas de choix, comme readConsent(). */
const SHOW_IF_NO_CHOICE = `(function(s){var v=null;try{v=localStorage.getItem(${JSON.stringify(CONSENT_KEY)})}catch(e){}if(s&&v!=="granted"&&v!=="denied")s.style.display="flex"})(document.currentScript&&document.currentScript.previousElementSibling)`;

export function ConsentBanner() {
  // null : rendu serveur et hydratation (le script en ligne a décidé) ; ensuite, l'état React.
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    if (!GA_ID) return;
    // Une image après l'hydratation : le script en ligne a déjà montré (ou non) le bandeau, React reprend ensuite.
    const frame = requestAnimationFrame(() => setVisible(readConsent() === null));
    const open = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener(CONSENT_OPEN_EVENT, open);
    };
  }, []);

  if (!GA_ID || visible === false) return null;

  const choose = (choice: "granted" | "denied") => {
    applyConsent(choice);
    setVisible(false);
  };

  return (
    <>
      <section
        role="region"
        aria-label="Témoins et mesure d'audience"
        suppressHydrationWarning
        style={{
          position: "fixed",
          left: 16,
          right: 16,
          bottom: "calc(16px + var(--mobile-bar-offset, 0px))",
          zIndex: 60,
          maxWidth: 720,
          margin: "0 auto",
          backgroundColor: "#0C1821",
          color: "#fff",
          borderRadius: 8,
          boxShadow: "0 12px 40px rgba(0,0,0,0.28)",
          padding: "16px 20px",
          // Masqué au serveur ; le script en ligne l'affiche avant le premier rendu, puis React (visible === true).
          display: visible ? "flex" : "none",
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
      {/* Après la section, qu'il cible. Script texte côté client (ni exécuté ni signalé par React) : seul le HTML du serveur l'exécute. */}
      <script
        type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: SHOW_IF_NO_CHOICE }}
      />
    </>
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
