"use client";

/* Première page vue de la session : arrivée gardée dans sessionStorage (aucun témoin, aucun envoi).
   Elle ne part qu'avec un formulaire envoyé par le visiteur — voir src/lib/attribution/. */
import { useEffect } from "react";
import { captureFirstVisit } from "@/lib/attribution/client";

export function UTMProvider() {
  useEffect(() => {
    captureFirstVisit();
  }, []);

  return null;
}
