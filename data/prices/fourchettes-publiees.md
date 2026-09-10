# Fourchettes de prix publiées – thermopompes installées au Québec

Synthèse construite à partir de `fourchettes-publiees.json` (211 relevés, 58 pages-sources, consultées le 2026-09-10). Chaque relevé est copié d'une page publiée (URL, date, citation). Aucun chiffre n'a été estimé ou interpolé.

## Méthode

- **Relevé** : un objet par fourchette publiée, avec `scope` (installé / equipement / installation seule / non précisé), `systemType`, `capacityBtu` (ou `zones` pour les multizones), `brandTier` tel que qualifié par la source, `priceMin`/`priceMax`, `includes`, `quote`, `publishedAt` (date `datePublished`/`dateModified` lue dans la page; `null` si la page n'en affiche aucune).
- **Statistiques** : calculées uniquement sur les relevés `useInStats = true`, `scope = installé`, avec bornes basse et haute. Sont exclus : bornes uniques (« à partir de »), doublons de gabarit, pages dont les montants sont visiblement des chiffres ronds multipliés par 1,03, données antérieures à 2023, fourchettes non discriminantes (tous types confondus).
- **Médiane des minimums / des maximums** : médiane des bornes basses (resp. hautes) des relevés de la case. `n` = nombre de relevés, `sources` = nombre de pages distinctes.
- Les gammes suivent la qualification de la source (« économique / milieu de gamme / haut de gamme » ou marque). `toutes` = fourchette sans distinction de gamme.
- Les prix sont **avant subvention LogisVert** et, sauf mention dans `includes`, **avant taxes** (la plupart des pages ne précisent pas les taxes).

## Grille type × calibre × gamme (prix installé, avant subvention)

### Murale simple zone

| Calibre | Gamme | n | Sources | Médiane des min. | Médiane des max. | Étendue observée (min…max) |
|---|---|---|---|---|---|---|
| 9 000 BTU | economique | 1 | 1 | 2 900 $ | 3 500 $ | 2 900 $ … 3 500 $ |
| 9 000 BTU | intermediaire | 1 | 1 | 3 600 $ | 4 400 $ | 3 600 $ … 4 400 $ |
| 9 000 BTU | premium | 2 | 2 | 4 400 $ | 5 850 $ | 4 200 $ … 5 900 $ |
| 9 000 BTU | toutes | 1 | 1 | 3 000 $ | 4 000 $ | 3 000 $ … 4 000 $ |
| 12 000 BTU | economique | 12 | 8 | 2 500 $ | 3 500 $ | 1 700 $ … 4 500 $ |
| 12 000 BTU | intermediaire | 6 | 5 | 3 000 $ | 4 100 $ | 2 500 $ … 5 300 $ |
| 12 000 BTU | premium | 11 | 8 | 4 500 $ | 6 200 $ | 3 000 $ … 7 500 $ |
| 12 000 BTU | toutes | 8 | 7 | 3 250 $ | 5 100 $ | 3 000 $ … 6 500 $ |
| 15 000 BTU | premium | 1 | 1 | 4 800 $ | 6 800 $ | 4 800 $ … 6 800 $ |
| 18 000 BTU | economique | 2 | 2 | 3 350 $ | 4 050 $ | 2 600 $ … 4 900 $ |
| 18 000 BTU | intermediaire | 5 | 4 | 3 600 $ | 5 000 $ | 2 900 $ … 6 900 $ |
| 18 000 BTU | premium | 5 | 4 | 5 800 $ | 8 200 $ | 4 800 $ … 9 200 $ |
| 18 000 BTU | toutes | 2 | 2 | 5 561 $ | 6 811 $ | 4 000 $ … 7 123 $ |
| 24 000 BTU | economique | 1 | 1 | 3 000 $ | 3 800 $ | 3 000 $ … 3 800 $ |
| 24 000 BTU | intermediaire | 1 | 1 | 3 300 $ | 4 500 $ | 3 300 $ … 4 500 $ |
| 24 000 BTU | premium | 2 | 2 | 6 500 $ | 9 500 $ | 6 200 $ … 9 800 $ |
| 24 000 BTU | toutes | 1 | 1 | 4 500 $ | 7 000 $ | 4 500 $ … 7 000 $ |
| calibre non précisé | toutes | 10 | 10 | 2 950 $ | 7 500 $ | 2 000 $ … 15 000 $ |

Agrégat par calibre, toutes gammes confondues (murale simple zone) :

| Calibre | n | Sources | Médiane des min. | Médiane des max. |
|---|---|---|---|---|
| 9 000 BTU | 5 | 3 | 3 600 $ | 4 400 $ |
| 12 000 BTU | 37 | 18 | 3 000 $ | 4 500 $ |
| 15 000 BTU | 1 | 1 | 4 800 $ | 6 800 $ |
| 18 000 BTU | 14 | 9 | 4 650 $ | 6 600 $ |
| 24 000 BTU | 5 | 5 | 4 500 $ | 7 000 $ |
| calibre non précisé | 10 | 10 | 2 950 $ | 7 500 $ |

### Multizone

| Calibre | Gamme | n | Sources | Médiane des min. | Médiane des max. | Étendue observée (min…max) |
|---|---|---|---|---|---|---|
| 2-3 zones | intermediaire | 1 | 1 | 11 436 $ | 13 970 $ | 11 436 $ … 13 970 $ |
| 2 zones | premium | 4 | 3 | 7 650 $ | 11 000 $ | 7 200 $ … 12 500 $ |
| 2-4 zones | toutes | 3 | 3 | 5 000 $ | 12 000 $ | 4 500 $ … 15 000 $ |
| 2-5 zones | toutes | 2 | 2 | 7 000 $ | 17 000 $ | 7 000 $ … 18 000 $ |
| 2 zones | toutes | 1 | 1 | 4 500 $ | 8 500 $ | 4 500 $ … 8 500 $ |
| 3 zones | premium | 2 | 2 | 11 150 $ | 14 650 $ | 10 500 $ … 15 500 $ |
| 3-4 zones | premium | 1 | 1 | 12 500 $ | 18 500 $ | 12 500 $ … 18 500 $ |
| 3-4 zones | toutes | 2 | 2 | 9 900 $ | 16 250 $ | 9 800 $ … 18 000 $ |
| 3 zones | toutes | 1 | 1 | 7 500 $ | 10 500 $ | 7 500 $ … 10 500 $ |
| 4 zones | premium | 1 | 1 | 13 500 $ | 17 200 $ | 13 500 $ … 17 200 $ |
| 4-5 zones | premium | 1 | 1 | 15 200 $ | 19 200 $ | 15 200 $ … 19 200 $ |
| 4 zones | toutes | 1 | 1 | 8 500 $ | 12 000 $ | 8 500 $ … 12 000 $ |
| 5 zones | toutes | 1 | 1 | 9 500 $ | 15 000 $ | 9 500 $ … 15 000 $ |
| zones non précisées | toutes | 1 | 1 | 5 000 $ | 14 000 $ | 5 000 $ … 14 000 $ |

Agrégat par calibre, toutes gammes confondues (multizone) :

| Calibre | n | Sources | Médiane des min. | Médiane des max. |
|---|---|---|---|---|
| 2-4 zones | 3 | 3 | 5 000 $ | 12 000 $ |
| 2 zones | 5 | 4 | 7 500 $ | 10 500 $ |
| 2-5 zones | 2 | 2 | 7 000 $ | 17 000 $ |
| 2-3 zones | 1 | 1 | 11 436 $ | 13 970 $ |
| 3-4 zones | 3 | 3 | 10 000 $ | 18 000 $ |
| 3 zones | 3 | 3 | 10 500 $ | 13 800 $ |
| 4 zones | 2 | 2 | 11 000 $ | 14 600 $ |
| 4-5 zones | 1 | 1 | 15 200 $ | 19 200 $ |
| 5 zones | 1 | 1 | 9 500 $ | 15 000 $ |
| zones non précisées | 1 | 1 | 5 000 $ | 14 000 $ |

### Centrale gainable

| Calibre | Gamme | n | Sources | Médiane des min. | Médiane des max. | Étendue observée (min…max) |
|---|---|---|---|---|---|---|
| 24 000 BTU (2 t) | intermediaire | 1 | 1 | 8 500 $ | 8 500 $ | 8 500 $ … 8 500 $ |
| 24 000 BTU (2 t) | premium | 1 | 1 | 9 500 $ | 12 800 $ | 9 500 $ … 12 800 $ |
| 24 000 BTU (2 t) | toutes | 4 | 4 | 8 250 $ | 11 500 $ | 6 000 $ … 12 800 $ |
| 30 000 BTU (2.5 t) | toutes | 1 | 1 | 9 500 $ | 13 000 $ | 9 500 $ … 13 000 $ |
| 36 000 BTU (3 t) | intermediaire | 1 | 1 | 9 800 $ | 13 200 $ | 9 800 $ … 13 200 $ |
| 36 000 BTU (3 t) | premium | 3 | 2 | 11 500 $ | 14 800 $ | 11 200 $ … 15 200 $ |
| 36 000 BTU (3 t) | toutes | 6 | 6 | 10 000 $ | 15 000 $ | 8 000 $ … 15 500 $ |
| 48 000 BTU (4 t) | toutes | 3 | 3 | 13 000 $ | 18 000 $ | 10 000 $ … 19 000 $ |
| 60 000 BTU (5 t) | premium | 1 | 1 | 16 800 $ | 19 800 $ | 16 800 $ … 19 800 $ |
| 60 000 BTU (5 t) | toutes | 2 | 2 | 15 000 $ | 21 000 $ | 13 000 $ … 25 000 $ |
| calibre non précisé | economique | 1 | 1 | 6 500 $ | 9 000 $ | 6 500 $ … 9 000 $ |
| calibre non précisé | premium | 1 | 1 | 14 500 $ | 24 000 $ | 14 500 $ … 24 000 $ |
| calibre non précisé | toutes | 13 | 11 | 8 000 $ | 15 000 $ | 5 500 $ … 20 000 $ |

Agrégat par calibre, toutes gammes confondues (centrale gainable) :

| Calibre | n | Sources | Médiane des min. | Médiane des max. |
|---|---|---|---|---|
| 24 000 BTU (2 t) | 6 | 6 | 8 500 $ | 11 500 $ |
| 30 000 BTU (2.5 t) | 1 | 1 | 9 500 $ | 13 000 $ |
| 36 000 BTU (3 t) | 10 | 7 | 11 000 $ | 14 900 $ |
| 48 000 BTU (4 t) | 3 | 3 | 13 000 $ | 18 000 $ |
| 60 000 BTU (5 t) | 3 | 3 | 16 800 $ | 19 800 $ |
| calibre non précisé | 15 | 12 | 8 000 $ | 15 000 $ |

## Couverture des cases principales (≥ 3 sources distinctes ?)

| Case | Sources distinctes | Statut |
|---|---|---|
| murale simple zone – 9 000 BTU | 3 (éco 1, inter 1, premium 2, toutes 1) | couverte |
| murale simple zone – 12 000 BTU | 18 (éco 8, inter 5, premium 8, toutes 7) | couverte |
| murale simple zone – 18 000 BTU | 9 (éco 2, inter 4, premium 4, toutes 2) | couverte |
| murale simple zone – 24 000 BTU | 5 (éco 1, inter 1, premium 2, toutes 1) | couverte |
| multizone – 2 zones | 4 (éco 0, inter 0, premium 3, toutes 1) | couverte |
| multizone – 3 zones | 3 (éco 0, inter 0, premium 2, toutes 1) | couverte |
| multizone – 4 zones | 2 (éco 0, inter 0, premium 1, toutes 1) | partielle |
| multizone – 3-4 zones | 3 (éco 0, inter 0, premium 1, toutes 2) | couverte |
| multizone – 2-4 zones | 3 (éco 0, inter 0, premium 0, toutes 3) | couverte |
| multizone – 2-5 zones | 2 (éco 0, inter 0, premium 0, toutes 2) | partielle |
| centrale gainable – 24 000 BTU (2 t) | 6 (éco 0, inter 1, premium 1, toutes 4) | couverte |
| centrale gainable – 36 000 BTU (3 t) | 7 (éco 0, inter 1, premium 2, toutes 6) | couverte |
| centrale gainable – 48 000 BTU (4 t) | 3 (éco 0, inter 0, premium 0, toutes 3) | couverte |
| centrale gainable – 60 000 BTU (5 t) | 3 (éco 0, inter 0, premium 1, toutes 2) | couverte |

## Écarts notables

- **Murale 12 000 BTU, effet de gamme** : économique 2 500 $ – 3 500 $ (n=12) contre premium 4 500 $ – 6 200 $ (n=11). L'écart entre gammes (≈ 2 000 $ sur la borne basse) est du même ordre que l'étendue d'une gamme; la marque explique donc autant que le calibre. Sources concordantes : BranchéQC (Senville, Tosot, Moovair, Fujitsu, Mitsubishi), Québec Thermopompes, Solutionair, Vivre à Québec, AirGreen.
- **Murale 18 000 BTU** : premium 5 800 $ – 8 200 $ (n=5) contre intermédiaire 3 600 $ – 5 000 $ (n=5). Le saut 12k → 18k coûte 700 à 1 700 $ selon la gamme (BranchéQC Mitsubishi/Fujitsu/Moovair, Québec Thermopompes).
- **Effet régional annoncé par un même éditeur** : BranchéQC donne 3 000-6 000 $ (guide provincial, 102 projets) et 3 500-5 200 $ (Longueuil) pour une murale 12 000 BTU, mais 4 500-7 500 $ pour le Saguenay–Lac-Saint-Jean (modèles Hyper-Heat, sans échantillon). Les pages Longueuil, Gatineau et Vaudreuil-Dorion reprennent exactement les mêmes chiffres : il s'agit d'un gabarit, pas d'observations locales.
- **Multizone 2 têtes** : premium (Mitsubishi MXZ-2C20, Fujitsu AOU18/24RLXFZH, Saguenay) 7 650 $ – 11 000 $ (n=4) contre « toutes gammes » Québec Thermopompes 4 500 $ – 8 500 $ (n=1) et « prix d'entrée » Groupe Mon Confort 5 000-6 000 $. La borne basse des multizones varie du simple au double selon que la source vise l'entrée de gamme ou les marques japonaises.
- **Centrale 2 tonnes** : Soumission Rénovation (07-2026) publie 6 000-8 500 $, BranchéQC Longueuil 9 800-12 800 $, Renovations Québec 8 000-11 000 $, Mitsubishi Zuba 9 500-12 800 $ : la borne basse va de 6 000 à 9 800 $ (+60 %). Médiane de la case : 8 250 $ – 11 500 $ (n=4).
- **Centrale 3 tonnes** : borne haute cohérente (14 800-15 500 $ chez BranchéQC, Novalto, Renovations Québec, Vivre à Québec) mais Soumission Rénovation reste à 8 000-10 500 $. Médiane toutes gammes : 10 000 $ – 15 000 $ (n=6).
- **Centrale « calibre non précisé » : le périmètre fait tout**. Les installateurs de la région de Québec (AIRA+ 7 000-11 000 $, Groupe Mon Confort 6 000-8 000 $, Québec Thermopompes « système seul » 5 500-8 000 $, Duplessis 5 500 $+) décrivent l'ajout d'une thermopompe sur une fournaise et des conduits existants; les guides à 8 000-20 000 $ (Zone Réno, RénoAssistance, CombienÇaCoûte) englobent souvent fournaise, conduits ou électricité. Québec Thermopompes sépare explicitement : système seul 5 500-8 000 $, + fournaise électrique 10 000-18 000 $.
- **Protégez-Vous (3 000 à plus de 15 000 $ pour une murale)** : la seule source de référence datée qui chiffre; sa fourchette englobe simple zone et multi-têtes, elle sert de borne d'enveloppe, pas de calibrage.
- **Écohabitation** ne publie que l'équipement (murale 2 000-4 000 $, centrale 4 000-10 000 $, « de meilleure qualité ») plus 1 000-2 000 $ d'installation; page datée 2023.
- **Titres « 2026 » sur contenus anciens** : Comparer3prix « prix climatiseur 2026 » (données du 29 mai 2019), Soumissions Rive-Sud (tableau « Prix de 2015 »), Comparer3prix Ville de Québec/Lévis (2016). Toujours lire `publishedAt` et la note.

## Sources jugées peu fiables (exclues des statistiques, conservées dans le JSON avec `useInStats = false`)

| Source | Raison |
|---|---|
| Comparer 3 Prix Thermopompes (prix murale Québec; murales Montréal; prix climatiseur; pages Québec et Lévis) | Montants = chiffres ronds × 1,03 (1 545, 2 781, 2 884, 3 605, 6 695…) sans périmètre; prix d'appel « à partir de » sans borne haute; données 2016-2019 sous des titres « 2026 »; site de génération de leads. |
| Soumissions Thermopompes (guides murale et centrale) | La page centrale indique elle-même « Prix moyen (ajusté +3 %) »; mêmes montants × 1,03 que Comparer3prix; périmètre installé/équipement non indiqué; même bannière « Jusqu'à 6 280 $ » (même réseau). |
| Subvention Thermopompe (.quebec) | Montants × 1,03 (3 090, 4 635, 6 695, 10 300); aucune méthodologie ni auteur. |
| CombienÇaCoûte (tableaux par marque) | Tableaux par modèle × 1,03 (6 180, 11 330, 12 360…), même réseau; seules les fourchettes rédigées en texte (8 500-17 000 $, 6 500-9 000 $, 3 000-10 000 $) sont conservées. |
| Prix-Thermopompe.ca (Gatineau) | Page non datée, sans auteur, incohérente (murale « 4 757 $+ » et « 2 200-4 500 $ » sur la même page); chiffres non ronds typiques d'un générateur. |
| BranchéQC – pages Gatineau, Vaudreuil-Dorion (et Longueuil) | Chiffres identiques mot pour mot sur trois villes : gabarit régional. Une seule occurrence (Longueuil) est comptée. |
| BranchéQC – Sherbrooke (page service) | Fourchette 3 000-20 000 $ tous types confondus. |
| Climatisation Confort Plus (Estrie) | Fourchettes non discriminantes : murale simple ou multizone 2 500-15 000 $; centrale 8 000-40 000 $+. |
| Air Péloquin, Climatisation Duplessis (centrale), Groupe Mon Confort (central complet), Novair | Bornes uniques (« et plus » / « sous 3 000 $ »), utilisables comme repère de prix d'appel seulement. |
| Confort MH | Prix promo 2 995 $ sans capacité ni confirmation que l'installation est incluse. |
| Soumissions Rive-Sud (deux pages) | Prix de 2015 et 2020. |
| MonBricoleur | Média généraliste, 2022-2023, périmètre ambigu (« prévoir entre 2 500 et 5 000 dollars »). |
| RBC – Mes finances d'abord | Guide pancanadien, type de système non précisé. |
| Protégez-Vous – sondage (5 750 $ en moyenne) | Moyenne tous types sur des achats étalés sur 10 ans; repère utile, pas une fourchette. |
| Québec Rénovation – installation seule 2 000-7 000 $ par zone | Chiffre attribué au fabricant américain Bryant, hors Québec. |

## Sources consultées qui ne publient aucune fourchette

- Hydro-Québec (guide d'achat « sept points à considérer », guide du participant Thermopompes efficaces, pages LogisVert) : montants de subvention seulement; seul chiffre de coût trouvé : 15 à 20 $/pi² pour les systèmes DRV (marché affaires).
- CAA-Québec (« Quel système de chauffage choisir », 2015; « Climatiseurs : lequel choisir », 2026-02-06) : aucun prix.
- Ressources naturelles Canada (« Le chauffage et le refroidissement à l'aide d'une thermopompe », 2025-12-24) : aucun montant.
- APCHQ, CMMTQ : aucune page de prix trouvée (mentionnés seulement comme exigences de licence).
- Distributeurs Master, TTI Climatisation (grossiste, ne vend pas au public), Ultratek (« À partir de $ /mois » sans montant) : aucun prix publié.
- Installateurs sans prix affiché : DuraClim (toutes régions), Ma Clim (Québec), Novalto (page multizone), FixAC (Lévis), Climatisation Trois-Rivières, Climatisation Mackina (Alma), Celsius Réfrigération (subventions seulement), Groupe Quenneville, AirGreen (pages produits sans prix), Ventilation BR (page 404), thermopompemontreal.com (injoignable).
- Écohabitation – guide LogisVert 2024 : subventions seulement.

## Cases vides ou faibles (à combler avant calibrage)

- Murale 9 000 BTU : une seule source par gamme (Québec Thermopompes) hors premium (BranchéQC Fujitsu + QT).
- Murale 15 000 BTU : une seule source (Fujitsu). Murale 24 000 BTU économique et intermédiaire : une source chacune (Senville, Moovair).
- Multizone : aucune fourchette qualifiée « économique » ou « intermédiaire » (hors le prix catalogue Convectair 27 000 BTU); les cases 4 et 5 têtes reposent sur 1-2 sources.
- Centrale : presque aucune fourchette par gamme hors marques premium (Mitsubishi Zuba, Daikin) et LG; 2,5 tonnes : une source; 4 et 5 tonnes : trois sources « toutes gammes » seulement.
- Régions : aucun installateur d'Outaouais, de Mauricie, du Saguenay ou de l'Abitibi ne publie de prix; ces régions ne sont couvertes que par BranchéQC (gabarit) et Prix-Thermopompe.ca (peu fiable). Installateurs avec prix publiés : Montréal (Novalto, Solutionair, AirGreen, Confort MH, Novair), Rive-Sud (Air Péloquin), Québec/Lévis (CJP, AIRA+, FiltrePlus, Thermopompe Québec), Estrie (Duplessis, Confort Plus), région non précisée (Groupe Mon Confort).
- Taxes : presque aucune source ne précise si les montants sont avant ou après taxes (exceptions : CJP « + taxes », Québec Thermopompes cas Laval « taxes incl. », Confort Plus « taxes en sus »).

## Sources principales retenues (par ordre de crédibilité)

- Protégez-Vous, « Comment choisir une thermopompe » (2025-04-30) – seule référence indépendante datée avec chiffres.
- Écohabitation, guide 2724 (maj 2023-04-16) – équipement seul + installation.
- RénoAssistance (maj 2026-05-06) – centrale 8 500-20 000 $.
- BranchéQC – guide provincial (2026-06-25, 102 projets), guides par marque Mitsubishi (>180 dossiers), Fujitsu, Moovair, Senville, Tosot, murale 12 000 BTU (mai-juillet 2026) – la seule plateforme qui annonce une méthode et des volumes.
- Novalto (installateur, 2026-08-10), Québec Thermopompes (2026-01/06), Soumission Rénovation (2026-03/07), Renovations Québec (2026-07-15), Zone Réno (2026-04-20), CombienÇaCoûte (texte seulement), Comparatif Thermopompes (équipement seul).
- Installateurs datés : Climatisation Solutionair (2026-04), Groupe Mon Confort (2026-08-31), Climatisation CJP (2026-05-05), Climatisation Duplessis (2025-11), AirGreen (2025-10), Novair (2026-08-25); non datés : AIRA+, FiltrePlus, Vivre à Québec.

Pages brutes archivées dans le scratchpad de la session (`raw/*.html` et `.txt`), fichiers `urls1-3.txt`, `fetchlog*.txt`, script `build.py`.