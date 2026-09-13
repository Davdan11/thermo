# Municipalités du Québec — sources, méthode et vérifications

`municipalites-data.json` est produit par script, jamais à la main. Chaque valeur affichée vient d'une des sources ci-dessous ou d'un calcul décrit ici. Une valeur absente vaut `null` et n'est pas affichée ; elle n'est jamais estimée. Les 53 villes historiques (`cities.ts`, `cities-data.json`, `cities-data.md`) gardent leurs données vérifiées ; ce jeu ajoute les autres municipalités.

## Reconstruire

Les sources (plus de 700 Mo) ne sont jamais versionnées. Dans un dossier `<sources>` :

| Fichier | Source | Licence |
|---|---|---|
| `MUN.csv`, `MRC_CM_Arg.csv` | Répertoire des municipalités du Québec, MAMH — <https://www.donneesquebec.ca/recherche/dataset/repertoire-des-municipalites-du-quebec> | CC-BY 4.0 |
| `toponymes_officiels.csv` | Toponymes officiels, Commission de toponymie du Québec — <https://www.donneesquebec.ca/recherche/dataset/toponymes-officiels> | CC-BY 4.0 |
| `recensement-2021-sdr-qc.bin` | zip du Profil du recensement 2021, subdivisions de recensement du Québec, Statistique Canada, 98-401-X2021020 | Licence du gouvernement ouvert – Canada |
| `normales/1991_2020_Canadian_Climate_Normals_QC_station_inventory.csv`, `normales/1991-2020_Canadian_Climate_Normals_QC_Data.csv` | Normales climatiques canadiennes 1991-2020, ECCC | Licence du gouvernement ouvert – Canada |
| `normales-1981-2010/climate_normals_QC_<ID>_1981-2010.csv` | Normales 1981-2010, ECCC, <https://dd.weather.gc.ca/today/climate/observations/normals/csv/1981-2010/QC/> (99 fichiers) | Licence du gouvernement ouvert – Canada |

```
node scripts/villes/build-municipalites.mjs --sources <sources>   # ou MUNICIPALITES_SOURCES=<sources>
npx tsx scripts/villes/check-unicite.ts                          # décide des pages (unicité)
npx vitest run src/lib/seo/__tests__/municipalites.test.ts
```

Le CSV du recensement (650 Mo, windows-1252) est lu en flux directement dans le zip (`openZipEntryStream`), sans être décompressé ni chargé en mémoire. La construction prend quelques secondes.

## Définitions

| Champ | Définition | Source |
|---|---|---|
| `code` | Code géographique à 5 chiffres (`mcode`) ; le code SDR du recensement est `24` + ce code (vérifié : 1 282 SDR, codes identiques) | MAMH |
| `name` | Nom officiel de la Commission de toponymie (ex. « Belœil », « Cascapédia–Saint-Jules ») ; `mamhName` garde la graphie du répertoire quand elle diffère | Toponymie |
| `lat`, `lon` | Coordonnées du toponyme de la municipalité : même `Code_geographique` et `Type_entite` correspondant à la désignation (Ville, Municipalité, Municipalité de paroisse, de village, de canton, de cantons unis) ; 1 096 sur 1 098 trouvés | Toponymie |
| `designation`, `region`, `group` | Désignation, région administrative, MRC (ou division de recensement hors MRC) | MAMH |
| `census.population2021` | « Population, 2021 » (ID 1) | StatCan |
| `census.dwellings2021` | « Logements privés occupés par des résidents habituels » (ID 5) | StatCan |
| `census.builtTo1980Pct` | (« 1960 ou avant » + « 1961 à 1980 ») ÷ « Total - Logements privés occupés selon la période de construction » × 100, arrondi à 0,1 (IDs 1441, 1442, 1440 ; données-échantillon 25 %) — même définition que `builtBefore1981Pct` de `cities-data.md` | StatCan |
| `census.periods` | Les huit tranches de la période de construction (IDs 1441 à 1448) | StatCan |
| `census.singleDetachedPct` | « Maison individuelle non attenante » ÷ total selon le type de construction (IDs 42 ÷ 41, données intégrales) | StatCan |
| `census.ownerPct` | « Propriétaire » ÷ total des ménages selon le mode d'occupation (IDs 1415 ÷ 1414, données-échantillon 25 %) | StatCan |
| `census.url` | Profil : `https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?Lang=F&DGUIDlist=2021A0005<SDR>&GENDERlist=1&STATISTIClist=1&HEADERlist=0` | StatCan |
| `stations[*]` | `hdd18`, `janMeanC`, `janMinC`, `annualMeanC`, `extremeMinC`/`extremeMinYear`, `daysBelowMinus20` : mêmes lignes ECCC que `cities-data.md` (1991-2020 : minimum extrême de la ligne « Long-Term » ; 1981-2010 : « Extreme Minimum » et sa ligne « Date ») | ECCC |
| `station.km` | Distance orthodromique (haversine, rayon 6 371 km) entre le toponyme de la municipalité et la station, arrondie à 0,1 km | calcul |

Valeurs supprimées : les symboles `x`, `F`, `..` et `...` du profil donnent `null` ; une part dont le numérateur ou le dénominateur manque vaut `null`. Le symbole `E` (à utiliser avec prudence) garde la valeur publiée.

Station composite 1991-2020 : ECCC publie les normales par composite (`LOCATION_NAME`) ; le membre représentatif (ID, coordonnées) est celui des villes vérifiées, sinon celui dont le nom est celui du composite, sinon le premier de l'inventaire. Une station convient si elle publie le total annuel des degrés-jours sous 18 °C et la moyenne de janvier : 62 composites sur 70 conviennent (rejetées faute de total annuel : ARTHABASKA, BONNARD, CAUSAPSCAL, LAC EON, LONGUE-POINTE-DE-MINGAN, NICOLET, RIMOUSKI, STE LUCIE).

## Règle « pas de donnée, pas de page »

Une municipalité a sa propre page si :

1. sa désignation est ordinaire (Ville, Municipalité, Paroisse, Village, Canton, Cantons unis) ;
2. le recensement de 2021 publie sa population et ses logements occupés (> 0) ;
3. une station convient à 50 km ou moins : la station 1991-2020 la plus proche d'abord ; sinon, en repli, la station 1981-2010 la plus proche ;
4. sa page passe la vérification d'unicité (plus bas).

Sinon, elle est nommée avec ses chiffres publiés sur la page de sa MRC (`/thermopompe/mrc/<slug>`), et son adresse renvoie une 404.

Résultat (construction du 2026-09-12) : 1 281 entités au répertoire ; 1 098 municipalités ordinaires ; 183 exclues par désignation ; 1 020 admissibles ; 66 sans station à 50 km ; 10 sans profil 2021 ; 2 sans coordonnées ; 971 pages de gabarit « municipalité », plus les 53 villes historiques ; 1 page retirée pour ressemblance ; 92 pages MRC.

- **Sans profil du recensement 2021** : Amos, Courcelles–Saint-Évariste, Hébertville, La Morandière-Rochebaucourt, La Pocatière, Lac-des-Aigles, Notre-Dame-de-la-Salette, Plessisville (constituées après le recensement de 2021, entre 2022 et 2026 : le profil 2021 ne décrit pas leur territoire actuel) ; Notre-Dame-des-Anges (0 logement occupé) ; Saint-Louis-de-Gonzague-du-Cap-Tourmente (population 0).
- **Sans coordonnées officielles** : Ristigouche-Sud-Est, Très-Saint-Sacrement.
- **Sans station à 50 km** (66) : surtout la Basse-Côte-Nord, la Minganie, la Matapédia, le Témiscamingue et l'Abitibi-Ouest (liste dans le JSON, `reason: "station"`).
- **Exclues par désignation** (183, liste complète dans `excluded`) : 105 territoires non organisés, 30 réserves indiennes, 14 villages nordiques, 9 villages cris, 1 village naskapi, 23 terres de catégorie I, IA et IA-N, et le Gouvernement régional d'Eeyou Istchee Baie-James.

## Repli 1981-2010

76 municipalités admissibles reposent sur des normales 1981-2010, faute de station 1991-2020 complète à 50 km ou moins. 23 stations sont concernées pour les nouvelles pages ; la page le dit (« aucune station 1991-2020 complète à 50 km ou moins »). Principales : LAC HUMQUI (14 municipalités de la Matapédia), LAC BERRY (7, Abitibi), MONT BRUN (5), ST CHARLES DE MANDEVILLE (5), STE ANNE DU LAC (5), RIMOUSKI (4 plus la ville), ST COME (4), NOMININGUE, RIVIERE AU TONNERRE, SHEENBORO (3 chacune). Le reste concerne les villes historiques qui utilisaient déjà ces normales.

## Villes historiques

Chaque municipalité qui correspond à une des 53 villes (par le code SDR de sa source, ou par le nom pour Amos, fusionnée en 2025) garde son slug et sa station vérifiée (`station.source = "cities-data"`). Le recensement est identique à `cities-data.json` pour toutes celles qui ont un profil 2021 (test). Saint-Hubert et Jonquière sont des arrondissements : leur page renvoie à la MRC de leur ville.

La règle ci-dessus aurait choisi une autre station (`ruleStation`) pour 20 villes. Trois raisons, vérifiées par test :

- la ville utilise des normales 1981-2010 alors que la règle préfère une station 1991-2020 à 50 km ou moins : Alma, Blainville, Boisbriand, Boucherville, Brossard, Joliette, Longueuil, Magog, Mirabel, Rimouski, Saint-Eustache, Saint-Félicien, Saint-Hyacinthe, Salaberry-de-Valleyfield, Sorel-Tracy ;
- la règle trouve une station complète plus proche : Lévis (STE-FOY, 4,5 km, contre LAUZON), Québec (STE-FOY, 7,3 km, contre l'aéroport), Sherbrooke (LENNOXVILLE, 6,9 km, contre l'aéroport ; écart déjà signalé dans `cities-data.md`) ;
- la station vérifiée est au-delà de 50 km : Matane (Mont-Joli, 57 km) et La Sarre (Rouyn, 63 km) ; ces deux villes n'auraient pas de page selon la règle, leurs pages historiques restent.

Six villes vérifiées utilisent une station 1981-2010 absente des 99 fichiers disponibles (Baie-Saint-Paul, Mont-Laurier, Montmagny, Saint-Jérôme, Victoriaville, et Amos pour sa station) : dans ce jeu, la règle leur donne une autre station (tableaux des voisines et des MRC) ; leur page garde la sienne.

## Température de conception

Le héros des pages (FrostCityHero) exige une température de conception. Pour les nouvelles pages, c'est la valeur de la table régionale du site (`src/lib/data/geography/postal-zones.ts`) pour le code postal de l'hôtel de ville (MAMH), comme pour les villes historiques. La page dit que c'est une valeur de table et, quand le code postal n'a pas de zone propre, que c'est la valeur générale du Québec (−25 °C), pas une mesure locale. Le palier de froid (classement et chauffage d'appoint) se décide sur les normales de la station, pas sur cette table : très froid si les nuits de janvier sont à −20 °C ou moins ou si 40 jours et plus passent sous −20 °C ; froid à partir de −15 °C ou 20 jours ; modéré sinon.

## Slugs

Slug ASCII du nom officiel (accents retirés, œ → oe, apostrophes et tirets → un tiret). Les villes historiques gardent le leur. Homonymes : suffixe de la MRC (`saint-augustin-maria-chapdelaine`), sinon de la désignation s'ils sont dans la même MRC (`bedford-ville`, `bedford-canton`), sinon le code. `mrc` est réservé.

## Unicité

Gabarit unique (`src/lib/seo/municipal-content.ts`) : le texte ne change que parce que les données changent. `scripts/villes/check-unicite.ts` construit le texte visible de chaque page admissible et le compare à celui de ses 5 voisines les plus proches ayant une page, en séquences de 5 mots (Jaccard) :

- **texte propre** : séquences du gabarit commun retirées (présentes sur 25 % ou plus des pages : 580 séquences) ; seuil 0,5 ;
- **texte complet** : tout le texte visible ; seuil 0,7 (les outils de détection de quasi-doublons signalent vers 0,9).

Au-delà d'un seuil, la moins peuplée de la paire perd sa page. Résultat : 1 page retirée (Saint-Célestin, municipalité, trop proche de Saint-Célestin, village : 0,534 et 0,728). Distribution des 971 pages (ressemblance maximale avec l'une des 5 voisines) : texte propre médiane 0,322, 95e centile 0,383, maximum 0,465 ; texte complet médiane 0,589, 95e centile 0,630, maximum 0,680.

## Rendu

- `/thermopompe/[slug]` : `dynamicParams = true`, `revalidate = 604800`. Pré-rendu : 53 villes historiques et 81 municipalités de 8 000 habitants et plus (`PRERENDER_MIN_POP`) ; les 890 autres sont rendues à la première visite puis servies du cache. Un slug sans page renvoie une 404.
- `/thermopompe/mrc/[slug]` : les 92 pages pré-rendues, `dynamicParams = false`.
- Le JSON est lu sur disque côté serveur (`municipalites.ts`) ; les composants clients ne reçoivent que les textes de leur section. En développement, il est relu quand le fichier change.
