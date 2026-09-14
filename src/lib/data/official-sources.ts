/* ==================================================================
   Sources officielles des fabricants — liste fermée.

   Sert aux tests des tables alimentées par des relevés de documents :
   min-heating-temps.json (températures) et commercial-names.json (noms
   commerciaux). Un domaine n'entre ici qu'après vérification de son
   propriétaire ; un hébergeur partagé (S3, Shopify, CDN…) seulement par
   dossier ou fichier précis, jamais en entier.
   ================================================================== */

/** Sources web acceptées : documents et pages officiels des fabricants (ou de leur distributeur officiel), jamais un revendeur. */
export const OFFICIAL_HOSTS = [
  "moovair.com",
  "na.panasonic.ca",
  "d36aiwq7h8e0h3.cloudfront.net", // documents Carrier (inRiver)
  "dde2yk4t993pn.cloudfront.net", // documents Midea
  "daikincomfort.com",
  "tech.lennoxintl.com",
  "carrier.com",
  "keeprite.com",
  "confortohvac.com",
  "senville.com",
  "shareddocs.com", // serveur de documents de Carrier (fiches de soumission, product data)
  "cdn.master.ca", // Groupe Master, distributeur officiel (Elios, Moovair, Zephyr)
  "gree.ca", // Gree Canada, division canadienne de Gree
  "tosotca.ca", // TOSOT Supplies Inc., distributeur principal autorisé de Tosot au Canada
  "bryant.com", // Bryant, marque de Carrier
  "heil-hvac.com", // Heil, marque ICP (Carrier)
  "tempstar.com", // Tempstar, marque ICP (Carrier)
  "comfortmaker.com", // Comfortmaker, marque ICP (Carrier)
  "mitsubishitechinfo.ca", // Mitsubishi Electric Sales Canada (MESCA), distributeur officiel au Canada
  "bosch-homecomfort.com", // Bosch Home Comfort
  "samsunghvac.com", // Samsung HVAC America
  "generalww.com", // Fujitsu General America (marque GENERAL)
  "s3.amazonaws.com/enter.mehvac.com/", // compartiment S3 de Mitsubishi Electric HVAC (mehvac.com), et lui seul
  "cooperandhunter.us", // Cooper & Hunter, filiale nord-américaine
  "aciq.com", // ACiQ
  "mrcool.com", // MRCOOL (support.mrcool.com)
  "directairhvac.com", // Direct Air (Powrmatic du Canada)
  "hvacmainline.com", // Mainline HVAC
  "innovair.com", // Innovair
  "comfortstarusa.com", // ComfortStar
  "starairkontrol.com", // Star Air Kontrol
  "breeze33.com", // Breeze33
  "cdn.shopify.com/s/files/1/0775/3603/5052/", // boutique Shopify de ZERO HVAC (liée depuis zerohvacr.com), et elle seule
  "emiductless.com", // EMI (ECR International)
  "novairplus.com", // Novair Plus
  "wabban.com", // Wabban (Emco)
  "heatcontroller.com", // Heat Controller, fabricant de Comfort-Aire et Century
  "goodmanmfg.com", // Goodman (Daikin)
  "amana-hac.com", // Amana Heating & Air Conditioning (Goodman / Daikin)
  "greecomfort.com", // Gree Comfort, site américain de Gree
  "tosot.com", // Tosot Supplies Inc. (même société que tosotca.ca)
  "master.ca", // Groupe Master (pages produit et fiches de www.master.ca)
  "nahvac.com", // Midea North American HVAC
  "stelpro.com", // Stelpro
  "rheem.com", // Rheem Manufacturing (Rheem, Ruud)
  "myrheem.com", // dépôt de documents de Rheem (files.myrheem.com)
  "lennox.com", // Lennox International
  "lg.com", // LG Electronics (media.us.lg.com, médiathèque de LG USA)
  "geappliancesairandwater.com", // GE Appliances, division Air & Water
  "hisense-canada.com", // Hisense Canada
  "fujitsugeneral.com", // Fujitsu General America (GENERAL États-Unis et Canada)
  "tranetechnologies.com", // Trane Technologies (elibrary.tranetechnologies.com)
  "ouellet.com", // Ouellet Canada, propriétaire de Convectair
  "convectair.ca", // Convectair
  "napoleon.com", // Napoleon
  "dettson.com", // Dettson
  "maxiair.ca", // Maxi-Air
  "samsung-files.s3.us-east-1.amazonaws.com", // compartiment S3 de Samsung HVAC America (lié depuis samsunghvac.com)
  "s3.amazonaws.com/samsung-files/", // même compartiment Samsung, autre forme d'adresse
  "images.salsify.com/image/upload/s--vRgGO7NQ--/sgscvw3lyrbddnwvydow.pdf", // fiche GE Appliances liée depuis geappliancesairandwater.com (ce fichier seul)
  "images.salsify.com/image/upload/s--tgur6-EC--/h3hrzzagfpq56kcd9hkb.pdf", // fiche GE Appliances liée depuis geappliancesairandwater.com (ce fichier seul)
  "images.salsify.com/image/upload/s--BVWSPdWN--/a7mf9icabbwevmhea6r1.pdf", // fiche GE Appliances liée depuis geappliancesairandwater.com (ce fichier seul)
  "images.salsify.com/image/upload/s--hCS4P9U7--/n1enfg18lnjavfx9nemv.pdf", // fiche GE Appliances liée depuis geappliancesairandwater.com (ce fichier seul)
  "cdn.shopify.com/s/files/1/0253/4775/2018/", // boutique Shopify de Gree Canada (gree.ca), et elle seule
];

/** Une entrée avec « / » vise un dossier précis d'un hébergeur partagé, jamais tout l'hébergeur. */
export function isOfficialSource(url: URL): boolean {
  return OFFICIAL_HOSTS.some((h) => (h.includes("/") ? (url.hostname + url.pathname).startsWith(h) : url.hostname === h || url.hostname.endsWith("." + h)));
}
