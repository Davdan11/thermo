/* ==================================================================
   Trois machines réelles pour l'aperçu des variantes (aucune donnée
   inventée) :
   - Moovair MSH Series MSHMA24R2AN1 : −30 °C, source officielle ;
   - Sharp Single Zone AE-X24ZU1 : −27 °C, fiche du fabricant reproduite
     par un distributeur (« secondaire ») ;
   - Zephyr Ultra ZE-624HPA : aucune température publiée, mais certifiée
     ENERGY STAR climat froid.

   Capacités, HSPF2, SEER2 : src/lib/data/generated_catalog.json.
   Températures et nature de la source : src/lib/data/min-heating-temps.json.
   Le maintien de puissance est le rapport réel capacité à −15 °C ÷
   capacité nominale, comme le calcule la carte (toCard).
   ================================================================== */

import type { FroidProps } from "@/app/trouver-ma-thermopompe/_components/froid-variantes";

export interface MachineApercu {
  key: string;
  badge: string;
  brand: string;
  series: string;
  outdoor: string;
  indoor: string;
  froid: Omit<FroidProps, "play" | "className">;
}

export const MACHINES: MachineApercu[] = [
  {
    key: "moovair",
    badge: "Meilleur choix",
    brand: "Moovair",
    series: "MSH Series",
    outdoor: "MSHMA24R2AN1",
    indoor: "MSHMA24R2AN1",
    froid: { minTemp: -30, minTempSource: "officiel", coldClimate: true, h5: 19600, h5Certified: true, retention: 19600 / 24000 },
  },
  {
    key: "sharp",
    badge: "Alternative",
    brand: "Sharp",
    series: "Single Zone series",
    outdoor: "AE-X24ZU1",
    indoor: "AY-X24ZU1",
    froid: { minTemp: -27, minTempSource: "secondaire", coldClimate: true, h5: 19000, h5Certified: true, retention: 19000 / 22000 },
  },
  {
    key: "zephyr",
    badge: "Alternative",
    brand: "Zephyr",
    series: "Ultra",
    outdoor: "ZE-624HPA",
    indoor: "AH-624B",
    froid: { minTemp: null, minTempSource: null, coldClimate: true, h5: 20800, h5Certified: true, retention: 20800 / 24000 },
  },
];

/** Quatrième cas, plus rare : rien de publié et pas de certification climat froid (la carte l'écrit tel quel). */
export const SANS_RIEN: Omit<FroidProps, "play" | "className"> = {
  minTemp: null,
  minTempSource: null,
  coldClimate: false,
  h5: null,
  h5Certified: true,
  retention: null,
};
