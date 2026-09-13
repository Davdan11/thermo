"use client";

/* ==================================================================
   Bouton « Une question ? » — seul morceau de l'assistant chargé avec
   la page (ce composant + quelques centaines d'octets de CSS).
   Le panneau, motion et le client réseau arrivent par un import()
   simple au premier survol, focus ou clic : pas de next/dynamic, qui
   ajoutait le morceau du panneau aux scripts de la page.

   Placement : en bas à droite, au-dessus de la barre mobile
   (--mobile-bar-offset) et, si le bandeau de consentement le chevauche,
   juste au-dessus de lui (le bouton remonte en douceur, puis redescend
   quand le bandeau disparaît).
   ================================================================== */

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ComponentType, type RefObject } from "react";
import { isAssistantHiddenOn } from "./routes";
import "./assistant-launcher.css";

type PanelComponent = ComponentType<{ onClose: () => void }>;

let panelPromise: Promise<PanelComponent> | null = null;
function loadPanel(): Promise<PanelComponent> {
  panelPromise ??= import("./AssistantPanel").then((m) => m.default);
  panelPromise.catch(() => {
    panelPromise = null; // réseau coupé : on réessaiera au prochain clic
  });
  return panelPromise;
}

const BANNER_SELECTOR = 'section[aria-label="Témoins et mesure d\'audience"]';
const GAP = 12;

/** Hauteur à gagner pour passer au-dessus du bandeau de consentement, s'il est visible et chevauche le bouton. */
function useConsentBannerLift(buttonRef: RefObject<HTMLElement | null>): number {
  const [lift, setLift] = useState(0);
  useEffect(() => {
    let observed: Element | null = null;
    const ro = new ResizeObserver(() => measure());
    function measure() {
      const banner = document.querySelector(BANNER_SELECTOR);
      if (banner !== observed) {
        if (observed) ro.unobserve(observed);
        observed = banner;
        if (banner) ro.observe(banner);
      }
      const br = banner?.getBoundingClientRect();
      const lr = buttonRef.current?.getBoundingClientRect();
      const overlaps = !!br && br.height > 0 && (!lr || (br.left < lr.right && br.right > lr.left));
      setLift(overlaps && br ? Math.ceil(br.height) + GAP : 0);
    }
    measure();
    // Le bandeau est un enfant direct de <body> : ajout et retrait visibles sans observer tout le document.
    const mo = new MutationObserver(measure);
    mo.observe(document.body, { childList: true });
    window.addEventListener("resize", measure);
    return () => {
      mo.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [buttonRef]);
  return lift;
}

export function AssistantLauncher() {
  const pathname = usePathname();
  const hidden = isAssistantHiddenOn(pathname);
  const [open, setOpen] = useState(false);
  const [Panel, setPanel] = useState<PanelComponent | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lift = useConsentBannerLift(buttonRef);

  const prefetch = useCallback(() => {
    loadPanel().catch(() => {});
  }, []);

  const openPanel = useCallback(async () => {
    setOpen(true);
    if (Panel) return;
    try {
      const Loaded = await loadPanel();
      setPanel(() => Loaded);
    } catch {
      setOpen(false);
    }
  }, [Panel]);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus({ preventScroll: true }));
  }, []);

  if (hidden) return null;

  const loading = open && !Panel;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="tav-launcher"
        data-open={open ? "" : undefined}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open && Panel ? "tav-assistant" : undefined}
        aria-busy={loading || undefined}
        onClick={() => void openPanel()}
        onPointerEnter={prefetch}
        onFocus={prefetch}
        style={lift ? { transform: `translateY(-${lift}px)` } : undefined}
      >
        <span className="tav-launcher-dot" aria-hidden="true" />
        <span className="tav-launcher-label">Une question ?</span>
      </button>
      {loading ? <div className="tav-launcher-loading" aria-hidden="true" /> : null}
      {open && Panel ? <Panel onClose={close} /> : null}
    </>
  );
}
