# Prix observés — équipement seulement, CAD

Relevé effectué le 2026-09-10 (scripts curl + API boutiques + WebFetch). Règles appliquées : prix **affiché** en dollars canadiens par un détaillant/distributeur canadien, pour un numéro de modèle exact du catalogue (`src/lib/data/fixtures/brands/all-auto-datasets.json`) ; aucun prix estimé, converti (USD) ou « installation incluse » ; aucune petite annonce.

Format d’une ligne : `{ slug, modelNumber, priceCad, priceType (unite-exterieure | ensemble | unite-interieure), bundle, retailer, url, observedAt, note }`. Un modèle peut avoir plusieurs lignes (plusieurs détaillants ou plusieurs ensembles utilisant la même unité extérieure).

## Synthèse

| Marque | Modèles au catalogue | Modèles avec ≥ 1 prix | Lignes | Détaillants |
|---|---:|---:|---:|---|
| Tosot | 230 | 0 | 0 | — |
| Gree | 263 | 0 | 0 | — |
| Senville | 54 | 14 | 58 | Senville.ca (boutique officielle) ; Best Buy Canada (bestbuy.ca, marketplace – vendu par Senville) ; Home Outlet Direct (homeoutletdirect.ca) |
| Moovair | 101 | 0 | 0 | — |
| Elios | 93 | 6 | 6 | HVACR Parts Depot (hvacrpartsdepot.com) ; Climatisation Solutionair (climatisationsolutionair.com) |
| Direct Air | 84 | 0 | 0 | — |
| Haier | 63 | 2 | 2 | All9.ca (liquidateur/grossiste canadien) |
| GE Appliances | 67 | 0 | 0 | — |
| TCL | 50 | 0 | 0 | — |
| Hisense | 89 | 0 | 0 | — |
| Midea | 327 | 43 | 43 | HVACR Parts Depot (hvacrpartsdepot.com) |
| Samsung | 96 | 20 | 20 | BPH Sales (bphsales.ca) ; HVACR Parts Depot (hvacrpartsdepot.com) |
| LG | 118 | 81 | 82 | HVACR Parts Depot (hvacrpartsdepot.com) ; All9.ca (liquidateur/grossiste canadien) |

## Détaillants utilisés

- **Senville.ca** — boutique officielle Senville (BigCommerce, prix en CAD). Les fiches indiquent le numéro d’unité extérieure (guide énergétique / spécifications) ; prix de la variante avec kit d’installation 16 pi.
- **Home Outlet Direct (homeoutletdirect.ca)** — Toronto, Shopify CAD ; ensembles Senville avec les mêmes SKU que senville.ca.
- **Best Buy Canada (bestbuy.ca)** — fiches marketplace vendues par Senville (données via l’API publique bestbuy.ca).
- **BPH Sales (bphsales.ca)** — Silton, SK, Shopify CAD ; Samsung HVAC (la fiche liste la paire intérieure/extérieure pour chaque taille ; prix par variante).
- **HVACR Parts Depot (hvacrpartsdepot.com)** — Richmond Hill, ON, WooCommerce ; prix affichés « CAD $ … (USD $ …) » ; unités extérieures LG, Samsung, Elios et KeepRite/ICP (fabricant Midea).
- **Climatisation Solutionair (climatisationsolutionair.com)** — Montréal ; une seule fiche Elios avec prix affiché « équipement seulement ».
- **All9.ca** — liquidateur/grossiste canadien (prix CAD affichés, quantités limitées) ; source secondaire, signalée dans la note de chaque ligne.

## Par marque : ce qui n’a pas été trouvé et pourquoi

- **Tosot** (0/230) : Aucun prix retenu. tosotdirect.com est la boutique américaine (prix en USD) ; tosotca.ca (Tosot Canada, Richmond BC) n’affiche que la gamme VRF sans prix et renvoie à un portail de commande professionnel ; les boutiques québécoises qui listent Tosot (AirGreen, Thermolux, Climatisation JBL, MPH en ligne, Réfrigération Jolicoeur) n’affichent pas de prix (soumission) ; 1clickenergy.com (Toronto) affiche des ensembles Pular (TW09/12/18/24HXP2A1DO) mais « installation incluse » ; cozycastle.ca (TU36-24WADU 6 499 $) inclut l’installation standard ; airtekshop.com (Ontario) liste des unités Tosot/Gree mais le prix n’est visible qu’après connexion.
- **Gree** (0/263) : Aucun prix retenu. airtekshop.com (Richmond Hill, ON) publie un catalogue Gree complet (GWH…, GWHD…, GUD…) mais la fiche affiche « login to see the price » ; hvacmarket.ca (Toronto) affiche des prix pour GWH09/12/18/24/30/36… et GUD36W/GUD60W mais chaque fiche est un prix « Installation Toronto » (installé) ; Thermolux, AirGreen, MPH en ligne, Climatisation Confort : sur soumission ; master.ca et wolseleyexpress.com : prix visibles seulement après connexion ; Costco.ca, Home Depot Canada, Rona, Canadian Tire : aucune thermopompe murale Gree en ligne (ou site inaccessible aux robots).
- **Senville** (14/54) : Voir plus bas les fiches non reliées (suffixe OG/OQ/OZ ou OL/OX/OY non indiqué sur la fiche).
- **Moovair** (0/101) : Aucun prix retenu. Marque distribuée par Le Groupe Master (prix après connexion). Les sites qui affichent un prix le font « installation comprise » ou « à partir de » (refrigerationroxtone.ca, cozycastle.ca DMA24HOS21230S1 – modèle absent du catalogue et installation incluse, Boutique Le Cargo – bon d’achat installation incluse) ; coastalenergy.ca, mphenligne.com : fiches sans prix ; qualiterefrigeration.com : pages inaccessibles (404).
- **Elios** (6/93) : Peu de prix. Marque distribuée par Le Groupe Master (prix après connexion). Retenus : hvacrpartsdepot.com (unités extérieures DE09/DE12/DE18HOS…) et climatisationsolutionair.com (ESHMA12C2AN1, équipement seulement). Les autres fiches Solutionair (ESHMA09/18/24/33, ESHBA…, ESHMA24/30/36/48/60R2AN1) et Thermolux sont sans prix (soumission) ; le DE18HOS25230E3A est marqué « discontinued » (0 $) chez HVACR Parts Depot.
- **Direct Air** (0/84) : Aucun prix retenu. Fiches sans prix chez climatisationsolutionair.com (DIRM-…HXPRO28, DIRM-…MAGICPRO20), ifcclimatisation.com, AirGreen, Thermolux ; premiumhvacsupply.ca (qui semble afficher des prix pour les condenseurs HXPRO) bloque l’accès automatisé (HTTP 403).
- **Haier** (2/63) : Deux unités seulement, chez un liquidateur (all9.ca). Master (master.ca) et Wolseley Express affichent les prix après connexion ; lkmetal.com (Windsor) et nucomfort.com listent la gamme sans prix ; Amazon.ca (fiche 1U12LC2VHA – modèle hors catalogue) inaccessible aux robots ; les autres résultats sont américains (24hr.supply, appliances US).
- **GE Appliances** (0/67) : Aucun prix retenu. geappliances.ca ne liste pas les biblocs ; all9.ca ne vend que des unités intérieures/ventilo-convecteurs GE (UUY36ZGDAB, AW12EH2VHD…) hors catalogue ; aucun détaillant canadien en ligne trouvé avec un prix pour les ASH1…, 1G…, AUH… .
- **TCL** (0/50) : Aucun prix retenu. TCL Canada (ca-en.tcl.com) ne vend que des climatiseurs de fenêtre/portatifs ; airconditionercanada.com liste des ensembles TCL (H09/12/18/24SUH…, H09/12/18/24SBH…) avec un « Market price » cohérent (1 495 $ à 2 640 $) mais un « Our price » incohérent (200 $ à 400 $ pour un ensemble complet, 0,01 $ pour le 24 000 BTU) – données jugées non fiables et écartées ; Home Depot Canada (qui référence TCL) est inaccessible aux robots.
- **Hisense** (0/89) : Aucun prix retenu. hisense-canada.com renvoie aux distributeurs (ITC Technologies, Refrigerative Supply, Noble) dont les prix exigent une connexion (shop-noble.ca « PriceBeforeLogin », rsl.ca) ; Techno-Pompes, Dubord, AirGreen (Haxxair) : sur soumission ; Home Depot Canada inaccessible.
- **Midea** (43/327) : Prix retenus uniquement pour les modèles DLC… (unités extérieures fabriquées par Midea et vendues sous marque KeepRite/ICP) chez hvacrpartsdepot.com. Les modèles MO1…, MOX…, 37M…/38M…, D5C…, M5C… n’ont pas été trouvés avec prix : Home Depot Canada (Midea) inaccessible, Best Buy ne vend que des PTAC Midea, cozycastle.ca (MO1HE-H18B-2A 4 850 $, MO1BE-H24B-2A 5 250 $…) inclut l’installation standard, ventilationdgl.com affiche 0 $, Thermolux/AirGreen sur soumission.
- **Samsung** (20/96) : Retenus : bphsales.ca (ensembles Max Heat 3.0, WindFree 3.0, Max Heat 2.0 et condenseurs FJM/Max Heat FJM) et hvacrpartsdepot.com (AJ036BXJ4CH). Les AC…/AM… (commerciaux) n’ont pas été trouvés avec prix ; all9.ca vend des palettes Samsung sans numéro de modèle.
- **LG** (81/118) : Retenus : hvacrpartsdepot.com (catalogue LG R32 KUS…/KUM… et R-410A LAU/LMU/LSU/LUU) et all9.ca (LUU428HV). Non trouvés : ARU…/ZRU… (VRF Multi V) et quelques LUU…7HV/8HV ; lg.com/ca_en n’affiche pas de prix ; hvacnearme.ca affiche des prix installés.

## Fiches avec prix mais non reliées à un numéro du catalogue

La fiche affiche un prix mais ne précise pas le numéro d’unité extérieure exact (ou indique un numéro absent du catalogue). Elles ne sont pas incluses dans les JSON.

| Détaillant | Fiche | Prix | Candidats au catalogue | Raison |
|---|---|---:|---|---|
| Senville.ca (boutique officielle) | [AURA 9 000 BTU (SKU SENA-09HF-16)](https://senville.ca/9000-btu-mini-split-air-conditioner-sena-09hf/) | 1 599,99 $ | SENA-09HF-OG, SENA/09HF/OQ, SENA/09HF/OZ | La fiche ne précise pas le suffixe de l’unité extérieure (OG/OQ/OZ). |
| Senville.ca (boutique officielle) | [AURA 24 000 BTU (SKU SENA-24HF-16)](https://senville.ca/24000-btu-mini-split-air-conditioner-sena-24hf/) | 2 399,99 $ | SENA-24HF-OG, SENA/24HF/OQ, SENA/24HF/OZ | La fiche indique « SENA-24HF-G », qui ne correspond à aucun numéro du catalogue. |
| Senville.ca (boutique officielle) | [AURA 6 000 BTU (SKU SENA-06HF-16)](https://senville.ca/6000-btu-mini-split-air-conditioner-heat-pump-sena-06hf/) | 1 499,99 $ | SENA-06HF-OG | Suffixe de l’unité extérieure non indiqué sur la fiche (un seul candidat au catalogue). |
| Senville.ca (boutique officielle) | [LETO 36 000 BTU (SKU SENL-36CD-16)](https://senville.ca/36000-btu-mini-split-air-conditioner-senl-36cd/) | 2 299,99 $ | SENL-36CD-OL, SENL/36CD/OY | Suffixe non indiqué. |
| Senville.ca (boutique officielle) | [LETO 24 000 BTU (SKU SENL-24CD-16)](https://senville.ca/24000-btu-mini-split-air-conditioner-senl-24cd/) | 1 699,99 $ | SENL-24CD-OL | La fiche indique SENL-24CD-OY, absent du catalogue (le catalogue n’a que SENL-24CD-OL). |
| Senville.ca (boutique officielle) | [LETO 9 000 BTU 220 V](https://senville.ca/9000-btu-mini-split-air-conditioner-heat-pump-220v-leto-series/) | 1 099,99 $ | SENL-09CD220-OL, SENL/09CD220/OY | Suffixe non indiqué. |
| Senville.ca (boutique officielle) | [LETO 12 000 BTU 220 V](https://senville.ca/12000-btu-mini-split-air-conditioner-heat-pump-220v-leto-series/) | 1 199,99 $ | SENL-12CD220-OL | Suffixe non indiqué (un seul candidat au catalogue). |
| Senville.ca (boutique officielle) | [LETO 9 000 BTU 115 V (SKU SENL-09CD-16NB)](https://senville.ca/9000-btu-mini-split-air-conditioner-senl-09cd/) | 999,99 $ | SENL-09CD-OL, SENL/09CD/OX, SENL/09CD/OY | La fiche indique « SENL-09CD-L » seulement. |
| Best Buy Canada (bestbuy.ca, marketplace – vendu par Senville) | [Senville AURA 9 000 BTU (modèle SENA-09HF)](https://www.bestbuy.ca/en-ca/product/senville-aura-3-in-1-mini-split-air-conditioner-9000-btu-450-sq-ft-coverage-heat-remote-white/13505202) | 1 599,99 $ | SENA-09HF-OG, SENA/09HF/OQ, SENA/09HF/OZ | Suffixe de l’unité extérieure non indiqué. |
| Best Buy Canada (bestbuy.ca, marketplace – vendu par Senville) | [Senville AURA 24 000 BTU (modèle SENA-24HF-16)](https://www.bestbuy.ca/en-ca/product/senville-aura-mini-split-air-conditioner-24k-btu-1400-sq-ft-coverage-heat-remote-white/13505205) | 2 399,99 $ | SENA-24HF-OG, SENA/24HF/OQ, SENA/24HF/OZ | Suffixe non indiqué. |
| Best Buy Canada (bestbuy.ca, marketplace – vendu par Senville) | [Senville LETO 24 000 BTU (modèle SENL-24CD-16)](https://www.bestbuy.ca/en-ca/product/senville-leto-mini-split-air-conditioner-24k-btu-1250-sq-ft-coverage-heat-remote-white/13505201) | 1 599,99 $ | SENL-24CD-OL | La fiche senville.ca du même SKU indique SENL-24CD-OY, absent du catalogue. |

## Sources examinées et écartées

- Sites américains / prix en USD : tosotdirect.com (cartes-cadeaux en USD), hvacdirect.com, 24hr.supply, gotductless.com, minisplitwarehouse.com ; sites de fabricants sans prix : geappliances.com, haierappliances.com, greecomfort.com, mideaductless.com, samsunghvac.com.
- Prix visibles seulement après connexion (comptes professionnels) : airtekshop.com, master.ca (Le Groupe Master), wolseleyexpress.com, shop-noble.ca, rsl.ca, bartlegibson.com.
- Prix « installation incluse » ou « à partir de » d’installateurs : hvacmarket.ca, 1clickenergy.com / 1clickheat.com, cozycastle.ca, hvacnearme.ca, refrigerationroxtone.ca, boutiquelecargo.com (bon d’achat, installation régulière incluse).
- Fiches sans prix (soumission) : airgreen.ca (Shopify, tous les prix à 0 $), thermolux.ca, ifcclimatisation.com, coastalenergy.ca, ventilationdgl.com, filtreplus.com, nor-can.com, techno-pompes.com, mphenligne.com, climatisationjbl.com, lkmetal.com, nucomfort.com, tosotca.ca, hisense-canada.com, lg.com/ca_en, greehvac.ca / gree.ca, moovair.com, directairhvac.com.
- Données incohérentes : airconditionercanada.com (ensembles TCL avec « Our price » de 0,01 $ à 400 $ face à un « Market price » de 1 495 $ à 2 640 $).
- Inaccessibles aux robots (403 / délai) ou sans produit des marques visées : homedepot.ca, rona.ca, amazon.ca, canadiantire.ca (MRCOOL seulement), costco.ca (MRCOOL, Danby), walmart.ca, premiumhvacsupply.ca, thermopompeenligne.com (DNS), climatisationenligne.com (certificat invalide).
- Petites annonces (Kijiji, Marketplace) : non consultées, conformément à la consigne.

## Limites

- Les prix Senville/Home Outlet Direct/Best Buy sont des **ensembles** (unité extérieure + intérieure + kit) ; l’unité extérieure seule n’est vendue que pour les centrales SENDC (senville.ca).
- Les prix BPH Sales pour Samsung sont ceux de la variante « taille » de la fiche, qui liste la paire intérieure/extérieure ; la fiche ne détaille pas le contenu de la boîte.
- HVACR Parts Depot et All9 vendent des **unités extérieures seules** (unité intérieure à ajouter) ; All9 est un liquidateur.
- Les modèles KeepRite/ICP « DLC… » figurent au catalogue sous la marque Midea (fabricant) ; le numéro de modèle est identique.
- Aucun prix trouvé pour Tosot, Gree, Moovair, Direct Air, GE Appliances, TCL et Hisense selon les règles ci-dessus.
