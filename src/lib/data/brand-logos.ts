/* ==================================================================
   Logos de marques — manifeste explicite.
   Un logo n'est affiché que s'il existe vraiment dans public/images/marques
   (sources : public/images/marques/SOURCES.json). Les variantes « bleu nuit »
   dont la recolorisation a détruit le dessin (Bryant, Carrier, GE, Goodman,
   Payne, TCL, Ruud, Coleman, York, Direct Air, Elios) utilisent le logo officiel en couleur.
   Régénérer : voir scripts/finalize-brand-logos.mjs.
   ================================================================== */

export const BRAND_LOGOS: Record<string, string> = {
  "amana": "/images/marques/logo-amana-bleu-nuit.png",
  "american-standard": "/images/marques/logo-american-standard-bleu-nuit.png",
  "bosch": "/images/marques/logo-bosch-bleu-nuit.png",
  "bryant": "/images/marques/logo-bryant.png",
  "carrier": "/images/marques/logo-carrier.png",
  "coleman": "/images/marques/logo-coleman.png",
  "conforto": "/images/marques/logo-conforto-bleu-nuit.png",
  "convectair": "/images/marques/logo-convectair-bleu-nuit.png",
  "daikin": "/images/marques/logo-daikin-bleu-nuit-cropped.png",
  "danby": "/images/marques/logo-danby-bleu-nuit.png",
  "dettson": "/images/marques/logo-dettson-bleu-nuit.png",
  "direct-air": "/images/marques/logo-direct-air.png",
  "elios": "/images/marques/logo-elios.png",
  "fujitsu": "/images/marques/logo-fujitsu-bleu-nuit-cropped.png",
  "ge": "/images/marques/logo-ge.png",
  "ge-appliances": "/images/marques/logo-ge-appliances-bleu-nuit.png",
  "goodman": "/images/marques/logo-goodman.png",
  "gree": "/images/marques/logo-gree-bleu-nuit-cropped.png",
  "haier": "/images/marques/logo-haier-bleu-nuit.png",
  "hisense": "/images/marques/logo-hisense-bleu-nuit.png",
  "keeprite": "/images/marques/logo-keeprite-bleu-nuit.png",
  "lennox": "/images/marques/logo-lennox-bleu-nuit.png",
  "lg": "/images/marques/logo-lg-bleu-nuit-cropped.png",
  "maxi-air": "/images/marques/logo-maxi-air-bleu-nuit.png",
  "midea": "/images/marques/logo-midea-bleu-nuit-cropped.png",
  "mitsubishi-electric": "/images/marques/logo-mitsubishi-electric-bleu-nuit-cropped.png",
  "moovair": "/images/marques/logo-moovair-bleu-nuit.png",
  "napoleon": "/images/marques/logo-napoleon-bleu-nuit.png",
  "ouellet": "/images/marques/logo-ouellet-bleu-nuit.png",
  "panasonic": "/images/marques/logo-panasonic-bleu-nuit.png",
  "payne": "/images/marques/logo-payne.png",
  "quebec-vair": "/images/marques/logo-quebec-vair-bleu-nuit.png",
  "rheem": "/images/marques/logo-rheem-bleu-nuit.png",
  "ruud": "/images/marques/logo-ruud.png",
  "samsung": "/images/marques/logo-samsung-bleu-nuit-cropped.png",
  "senville": "/images/marques/logo-senville-bleu-nuit.png",
  "sharp": "/images/marques/logo-sharp-bleu-nuit.png",
  "stelpro": "/images/marques/logo-stelpro-bleu-nuit.png",
  "tcl": "/images/marques/logo-tcl.png",
  "tempstar": "/images/marques/logo-tempstar-bleu-nuit.png",
  "tosot": "/images/marques/logo-tosot-bleu-nuit.png",
  "trane": "/images/marques/logo-trane.png",
  "york": "/images/marques/logo-york.png",
  "zephyr": "/images/marques/logo-zephyr-bleu-nuit.png",
};

/** Chemin public du logo d'une marque, ou null si aucun logo vérifié n'existe. */
export function brandLogoPath(slug: string): string | null {
  return BRAND_LOGOS[slug] ?? null;
}
