"use client";

/* Chantier T — bouton du lien d'alerte : lance l'appel masqué (jeton revérifié par l'action) et suit son statut en direct. */
import { AnimatePresence } from "motion/react";
import { PhoneCall } from "lucide-react";
import { CallDock, useMaskedCall } from "@/components/gestion/telephonie/CallButton";
import { launchFromLinkAction, linkCallStatusAction } from "./actions";

export function AppelLauncher({ token, label }: { token: string; label: string }) {
  const state = useMaskedCall({ start: () => launchFromLinkAction(token), poll: (id) => linkCallStatusAction(token, id) });
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <button type="button" className={`k-btn k-btn--primary k-btn--lg${state.busy ? " tp-busy" : ""}`} style={{ width: "100%", minHeight: 56, fontSize: 16 }} onClick={() => state.call({ kind: "lead", id: "lien" })} disabled={state.busy || state.live}>
        <PhoneCall size={19} aria-hidden /> {state.live ? "Appel en cours…" : state.view?.final ? "Rappeler" : `Appeler ${label.split(",")[0]} maintenant`}
      </button>
      <AnimatePresence>{state.open ? <CallDock key="dock" inline view={state.view} error={state.error} onClose={state.close} /> : null}</AnimatePresence>
      <p className="g-hint" style={{ margin: 0, textAlign: "center" }}>
        Le client voit le numéro du site, jamais votre cellulaire.
      </p>
    </div>
  );
}
