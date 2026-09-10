# Données par ville — sources et vérification

Fichier produit par script (scratchpad `fetch_census.py`, `fetch_normals.py`, `parse_normals.py`, `build.py`) le 2026-09-10. Chaque valeur de `cities-data.json` provient d'une des deux sources ci-dessous ; aucun chiffre n'est estimé. Champ absent = `null`.

## Sources

- **Climat** : Normales climatiques canadiennes, Environnement et Changement climatique Canada (ECCC), <https://climat.meteo.gc.ca/climate_normals/>. Normales **1991-2020** quand une station représentative en publie ; sinon normales **1981-2010** (période indiquée dans `normalsPeriod`). Données lues dans le CSV « Télécharger les données » de la page de chaque station (`bulk_data_e.html`), copies brutes conservées dans le scratchpad (`eccc/bulk1991/`, `eccc/bulk1981/`).
- **Recensement** : Profil du recensement, Recensement de la population de 2021, Statistique Canada (subdivision de recensement = la ville, code SDR à 7 chiffres dans `sources`). Page HTML du profil (`page.cfm?Lang=F&DGUIDlist=2021A0005<SDR>`), copies brutes dans `census/profile_*.html`.

## Définition des champs

| Champ | Définition exacte | Ligne source |
|---|---|---|
| `hdd18` | Degrés-jours de chauffage sous 18 °C, total annuel | ECCC « Degree Days Below 18 °C », colonne *Year* |
| `janMeanC` | Température quotidienne moyenne, janvier | ECCC « Daily Average (°C) », colonne *Jan* |
| `janMinC` | Température quotidienne minimale moyenne, janvier | ECCC « Daily Minimum (°C) », colonne *Jan* |
| `annualMeanC` | Température quotidienne moyenne, année | ECCC « Daily Average (°C) », colonne *Year* |
| `extremeMinC`, `extremeMinYear` | Minimum extrême enregistré à la station (toute la période de relevés, « Long-Term » pour 1991-2020 ; ligne « Extreme Minimum » du fichier 1981-2010, qui couvre aussi l'ensemble des relevés) et année | ECCC « Extreme Minimum (°C) » + « Date » |
| `daysBelowMinus20` | Jours par an avec minimum **< −20 °C** (définition ECCC ; le seuil publié est strict, pas ≤) | ECCC « Days with Minimum Temperature < -20 °C », colonne *Year* |
| `population2021` | Population, 2021 | Profil du recensement, « Population, 2021 » |
| `dwellings2021` | Logements privés occupés par des résidents habituels | Profil, « Logements privés occupés par des résidents habituels » |
| `builtBefore1981Pct` | (« 1960 ou avant » + « 1961 à 1980 ») ÷ « Total - Logements privés occupés selon la période de construction » × 100, arrondi à 0,1 (données-échantillon 25 %) | Profil, thème Logement, « Période de construction » |

Les distances « ≈ x km » sont calculées entre les coordonnées de la station (inventaire des stations ECCC) et le centre approximatif de la ville ; elles servent uniquement à justifier le choix de station et ne sont pas publiées.

## Tableau récapitulatif

| Ville | Station ECCC (ID) | Période | Distance | DJC 18 | Janv. moy. | Janv. min. | Min. extrême | Année | Moy. annuelle | Jours < −20 | Population 2021 | Logements 2021 | Bâti avant 1981 (%) | Champs manquants | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Montréal | MONTREAL TRUDEAU (AIRPORT) (7025250) | 1991-2020 | ≈ 14,4 km | 4281,2 | -9,2 | -13,5 | -37,8 | 1957 | 7 | 12 | 1762949 | 816338 | 66,4 | — | Aéroport Montréal-Trudeau, dans la ville. |
| Laval | MONTREAL TRUDEAU (AIRPORT) (7025250) | 1991-2020 | ≈ 12,5 km | 4281,2 | -9,2 | -13,5 | -37,8 | 1957 | 7 | 12 | 438366 | 169785 | 46,9 | — | Aucune station à Laval dans les normales ECCC ; station la plus proche : Montréal-Trudeau (≈ 12 km). |
| Longueuil | MONTREAL/ST-HUBERT A (7027320) | 1981-2010 | ≈ 7,1 km | 4539,3 | -10,4 | -15,1 | -37,2 | 1934 | 6,2 | 19,4 | 254483 | 113086 | 55,3 | — | Aéroport de Saint-Hubert, dans Longueuil. Pas de normales 1991-2020 pour cette station. |
| Brossard | MONTREAL/ST-HUBERT A (7027320) | 1981-2010 | ≈ 8,7 km | 4539,3 | -10,4 | -15,1 | -37,2 | 1934 | 6,2 | 19,4 | 91525 | 35885 | 39,5 | — | Aucune station à Brossard ; station la plus proche : Montréal/St-Hubert A (≈ 9 km, pas de normales 1991-2020). |
| Saint-Hubert | MONTREAL/ST-HUBERT A (7027320) | 1981-2010 | ≈ 3,4 km | 4539,3 | -10,4 | -15,1 | -37,2 | 1934 | 6,2 | 19,4 | 254483 | 113086 | 55,3 | — | Aéroport de Saint-Hubert, dans l'arrondissement. Pas de normales 1991-2020 pour cette station. Saint-Hubert est un arrondissement de Longueuil : chiffres de la ville de Longueuil (SDR 2458227). |
| Boucherville | MONTREAL/ST-HUBERT A (7027320) | 1981-2010 | ≈ 9 km | 4539,3 | -10,4 | -15,1 | -37,2 | 1934 | 6,2 | 19,4 | 41743 | 17291 | 49 | — | Aucune station à Boucherville ; station la plus proche : Montréal/St-Hubert A (≈ 9 km, pas de normales 1991-2020). |
| Québec | QUEBEC JEAN LESAGE (AIRPORT) (7016294) | 1991-2020 | ≈ 13 km | 4977,2 | -11,9 | -16,7 | -36,7 | 2015 | 4,7 | 26,5 | 549459 | 265711 | 51 | — | Aéroport Jean-Lesage, dans la ville. |
| Lévis | LAUZON (7024254) | 1991-2020 | ≈ 6,5 km | 5017,5 | -12,1 | -16,6 | -39 | 1994 | 4,6 | 25,1 | 149683 | 65751 | 40,2 | — | Station Lauzon (secteur de Lévis). |
| Gatineau | ANGERS (7030170) | 1991-2020 | ≈ 11 km | 4826,7 | -11,2 | -16,5 | -39,4 | 1976 | 5,3 | 29,1 | 291041 | 126476 | 39,8 | — | Station Angers (secteur de Gatineau). |
| Sherbrooke | SHERBROOKE (7028123) | 1991-2020 | ≈ 16,2 km | 4877,2 | -10,8 | -16,5 | -41,2 | 2004 | 5,1 | 30,4 | 172950 | 80476 | 46,6 | — | Station Sherbrooke (aéroport, alt. 241 m selon l'inventaire ECCC) ; la station Lennoxville (7024280, 1991-2020) donne 4573 DJC et janvier -9,5 °C, nettement plus doux : l'aéroport est un site froid. |
| Magog | MAGOG (7024440) | 1981-2010 | ≈ 2,3 km | 4709,2 | -10,1 | -14,6 | -38 | 1993 | 5,6 | 18,7 | 28312 | 13439 | 44,5 | — | Station Magog, dans la ville. Pas de normales 1991-2020. |
| Trois-Rivières | TROIS-RIVIERES (7018562) | 1991-2020 | ≈ 2,3 km | 4498 | -9,9 | -14,1 | -32,3 | 2009 | 6,2 | 14,9 | 139163 | 66822 | 53,5 | — | Station Trois-Rivières (ECCC, 1993-). Codes C/D : moins de 25 ans de données. |
| Shawinigan | TROIS-RIVIERES (7018562) | 1991-2020 | ≈ 29,7 km | 4498 | -9,9 | -14,1 | -32,3 | 2009 | 6,2 | 14,9 | 49620 | 25060 | 72,2 | — | Aucune station à Shawinigan ; station 1991-2020 la plus proche : Trois-Rivières (≈ 30 km). Valeur probablement un peu douce pour Shawinigan. |
| Saguenay (Chicoutimi) | BAGOTVILLE (7060400) | 1991-2020 | ≈ 12,3 km | 5532 | -15,1 | -20,4 | -43,3 | 1943 | 3,1 | 43,1 | 144723 | 67522 | 60,4 | — | Station Bagotville (arrondissement La Baie, ville de Saguenay), ≈ 12 km de Chicoutimi. Chicoutimi est un arrondissement de Saguenay : chiffres de la ville de Saguenay (SDR 2494068). |
| Jonquière | BAGOTVILLE (7060400) | 1991-2020 | ≈ 20,5 km | 5532 | -15,1 | -20,4 | -43,3 | 1943 | 3,1 | 43,1 | 144723 | 67522 | 60,4 | — | Station Bagotville (ville de Saguenay), ≈ 20 km de Jonquière. Jonquière est un arrondissement de Saguenay : chiffres de la ville de Saguenay (SDR 2494068). |
| Alma | LAC STE CROIX (7063690) | 1981-2010 | ≈ 16,2 km | 5716,7 | -16,2 | -21,4 | -40 | 1977 | 2,7 | 48 | 30331 | 13815 | 59,6 | — | Aucune station à Alma ; station la plus proche : Lac Ste Croix (Métabetchouan–Lac-à-la-Croix, ≈ 16 km, 1981-2010). |
| Roberval | ROBERVAL (7066685) | 1991-2020 | ≈ 2,9 km | 5619,2 | -15,7 | -20,8 | -40 | 2014 | 2,9 | 44,5 | 9840 | 4520 | 62,5 | — | Aéroport de Roberval, dans la ville. |
| Saint-Félicien | ST PRIME (7067658) | 1981-2010 | ≈ 4 km | 5755,9 | -17 | -23,1 | -44,5 | 1994 | 2,5 | 54,9 | 10089 | 4686 | 56 | — | Aucune station à Saint-Félicien ; station la plus proche : St Prime (≈ 4 km, 1981-2010). |
| Rimouski | RIMOUSKI (7056480) | 1981-2010 | ≈ 0,7 km | 5074,4 | -11,4 | -15,4 | -33 | 1984 | 4,4 | 13,9 | 48935 | 23470 | 54,1 | — | Station Rimouski, dans la ville. Les normales 1991-2020 de cette station n'ont pas de total annuel de degrés-jours (août manquant) : normales 1981-2010 utilisées. |
| Rivière-du-Loup | RIVIERE-DU-LOUP/ST-ANTONIN (7056616) | 1991-2020 | ≈ 2,7 km | 5236,2 | -11,4 | -15,5 | -31,3 | 2009 | 3,8 | 17 | 20118 | 9482 | 54,1 | — | Station Rivière-du-Loup/St-Antonin (≈ 3 km du centre). |
| Matane | MONT-JOLI (7055120) | 1991-2020 | ≈ 57,7 km | 5215,6 | -11,3 | -15,4 | -34,7 | 2014 | 3,9 | 16,2 | 13987 | 6996 | 70,6 | — | Aucune station à Matane ni à moins de 30 km ; station 1991-2020 la plus proche : Mont-Joli (aéroport, ≈ 58 km à l'ouest, également sur la rive sud de l'estuaire). À utiliser avec prudence. |
| Gaspé | GASPE (7052601) | 1991-2020 | ≈ 5,6 km | 5388,8 | -11,1 | -16,7 | -35,5 | 1984 | 3,4 | 27,3 | 15063 | 6780 | 62,2 | — | Aéroport de Gaspé (composite Gaspé). |
| Rouyn-Noranda | ROUYN (7086716) | 1991-2020 | ≈ 1,3 km | 5656,7 | -15,1 | -20,1 | -40,1 | 2014 | 2,7 | 43,7 | 42313 | 19282 | 61,3 | — | Station Rouyn, dans la ville. |
| Val-d'Or | VAL-D'OR (7098600) | 1991-2020 | ≈ 4,5 km | 5958,9 | -16,3 | -22,2 | -43,9 | 1962 | 1,9 | 56,6 | 32752 | 15033 | 54 | — | Station Val-d'Or (aéroport). |
| Amos | AMOS (7090120) | 1981-2010 | ≈ 0,7 km | 6103,5 | -17,2 | -22,8 | -52,8 | 1914 | 1,5 | 53,1 | 12675 | 5760 | 61,4 | — | Station Amos, dans la ville. Pas de normales 1991-2020. Codes D : seulement 15 à 19 ans de données. |
| La Sarre | ROUYN (7086716) | 1991-2020 | ≈ 62,4 km | 5656,7 | -15,1 | -20,1 | -40,1 | 2014 | 2,7 | 43,7 | 7358 | 3493 | 71,2 | — | Aucune station à La Sarre ni à moins de 50 km ; station 1991-2020 la plus proche : Rouyn (≈ 62 km au sud). À utiliser avec prudence. |
| Sept-Îles | SEPT-ILES (7047910) | 1991-2020 | ≈ 7,8 km | 6121,6 | -14,5 | -20,1 | -43,3 | 1950 | 1,2 | 44,8 | 24569 | 11272 | 74,6 | — | Aéroport de Sept-Îles. |
| Baie-Comeau | BAIE-COMEAU (7040440) | 1991-2020 | ≈ 10,6 km | 5821,7 | -13,4 | -18,8 | -47,2 | 1950 | 2,1 | 37,8 | 20687 | 9554 | 78,6 | — | Aéroport de Baie-Comeau. |
| Drummondville | DRUMMONDVILLE (7022160) | 1991-2020 | ≈ 0 km | 4412,4 | -9,7 | -14,2 | -41,7 | 1918 | 6,7 | 18,6 | 79258 | 36727 | 44,7 | — | Station Drummondville, dans la ville. |
| Victoriaville | ARTHABASKA (7020305) | 1981-2010 | ≈ 3,4 km | 4806,3 | -10,8 | -15,7 | -39 | 2004 | 5,3 | 25,1 | 47760 | 21864 | 48,2 | — | Station Arthabaska (secteur de Victoriaville). Les normales 1991-2020 de cette station n'ont pas de total annuel de degrés-jours (juillet-août manquants) : normales 1981-2010 utilisées. |
| Granby | GRANBY (7022800) | 1991-2020 | ≈ 2,4 km | 4384,3 | -9,1 | -13,4 | -37 | 1981 | 6,6 | 13,7 | 69025 | 31850 | 46,1 | — | Station Granby, dans la ville. |
| Saint-Hyacinthe | ST HYACINTHE 2 (7027361) | 1981-2010 | ≈ 7,1 km | 4478,8 | -10,4 | -15,2 | -41 | 1994 | 6,4 | 20,9 | 57239 | 26870 | 55,7 | — | Station St Hyacinthe 2, dans la ville. Pas de normales 1991-2020. |
| Saint-Jean-sur-Richelieu | L'ACADIE (702LED4) | 1991-2020 | ≈ 7,4 km | 4304,4 | -9 | -13,6 | -32,5 | 2009 | 6,8 | 15,4 | 97873 | 42913 | 46 | — | Station L'Acadie (secteur de Saint-Jean-sur-Richelieu). |
| Sorel-Tracy | SOREL (7028200) | 1981-2010 | ≈ 1,4 km | 4502,2 | -10,7 | -15,5 | -41 | 1981 | 6,3 | 19,2 | 35165 | 17069 | 66,7 | — | Station Sorel, dans la ville. Pas de normales 1991-2020. |
| Châteauguay | MONTREAL TRUDEAU (AIRPORT) (7025250) | 1991-2020 | ≈ 10 km | 4281,2 | -9,2 | -13,5 | -37,8 | 1957 | 7 | 12 | 50815 | 19917 | 55 | — | Aucune station à Châteauguay ; station la plus proche : Montréal-Trudeau (≈ 10 km, de l'autre côté du fleuve). |
| Salaberry-de-Valleyfield | VALLEYFIELD (7028680) | 1981-2010 | ≈ 4,1 km | 4359,2 | -9,6 | -13,8 | -38,3 | 1957 | 6,8 | 13,8 | 42787 | 20073 | 61,5 | — | Station Valleyfield, dans la ville. Pas de normales 1991-2020. |
| Vaudreuil-Dorion | MONTREAL TRUDEAU (AIRPORT) (7025250) | 1991-2020 | ≈ 23,2 km | 4281,2 | -9,2 | -13,5 | -37,8 | 1957 | 7 | 12 | 43268 | 16713 | 26 | — | Aucune station à Vaudreuil-Dorion ; station 1991-2020 la plus proche : Montréal-Trudeau (≈ 23 km). La station Oka (1981-2010, ≈ 12 km) donne 4626 DJC et janvier -10,9 °C. |
| Repentigny | L'ASSOMPTION (7014160) | 1991-2020 | ≈ 7,9 km | 4591,7 | -10,9 | -16 | -43,3 | 1957 | 6 | 24,3 | 86100 | 34174 | 37,7 | — | Station L'Assomption (≈ 8 km). |
| Terrebonne | L'ASSOMPTION (7014160) | 1991-2020 | ≈ 21 km | 4591,7 | -10,9 | -16 | -43,3 | 1957 | 6 | 24,3 | 119944 | 45247 | 26,3 | — | Aucune station complète à Terrebonne ; station 1991-2020 la plus proche : L'Assomption (≈ 21 km). La station Mascouche (1981-2010, ≈ 7 km) ne publie pas de degrés-jours. |
| Mascouche | L'ASSOMPTION (7014160) | 1991-2020 | ≈ 14,8 km | 4591,7 | -10,9 | -16 | -43,3 | 1957 | 6 | 24,3 | 51183 | 19981 | 28,3 | — | La station Mascouche (7014629, 1981-2010) ne publie ni degrés-jours ni jours < -20 °C (15 ans de données) ; station 1991-2020 la plus proche : L'Assomption (≈ 15 km). |
| Joliette | JOLIETTE VILLE (7013362) | 1981-2010 | ≈ 0,8 km | 4615,8 | -11,6 | -16,3 | -36,7 | 1981 | 6 | 21,2 | 21384 | 10568 | 55,6 | — | Station Joliette Ville, dans la ville. Pas de normales 1991-2020. |
| Blainville | STE THERESE OUEST (7017755) | 1981-2010 | ≈ 2,2 km | 4601,3 | -10,9 | -15,9 | -41,1 | 1971 | 5,9 | 22,7 | 59819 | 22424 | 18,8 | — | Aucune station à Blainville ; station la plus proche : Ste Thérèse Ouest (≈ 2 km, 1981-2010). |
| Boisbriand | STE THERESE OUEST (7017755) | 1981-2010 | ≈ 4,6 km | 4601,3 | -10,9 | -15,9 | -41,1 | 1971 | 5,9 | 22,7 | 28308 | 11425 | 35,6 | — | Aucune station à Boisbriand ; station la plus proche : Ste Thérèse Ouest (≈ 5 km, 1981-2010). |
| Saint-Eustache | STE THERESE OUEST (7017755) | 1981-2010 | ≈ 9 km | 4601,3 | -10,9 | -15,9 | -41,1 | 1971 | 5,9 | 22,7 | 45276 | 18958 | 48,3 | — | Aucune station à Saint-Eustache ; station la plus proche sur la rive nord : Ste Thérèse Ouest (≈ 9 km, 1981-2010). Ste Geneviève (Montréal, ≈ 9 km) donne 4361 DJC. |
| Mirabel | MONTREAL/MIRABEL INT'L A (7035290) | 1981-2010 | ≈ 4,5 km | 4784,8 | -11,5 | -16,5 | -37 | 1981 | 5,3 | 25,3 | 61108 | 24795 | 16,3 | — | Aéroport de Mirabel, dans la ville. Pas de normales 1991-2020. |
| Saint-Jérôme | ST JEROME (7037400) | 1981-2010 | ≈ 4,5 km | 4761,9 | -11,4 | -16,4 | -41,7 | 1957 | 5,5 | 23,8 | 80213 | 37371 | 37,3 | — | Station St Jérôme, dans la ville. Pas de normales 1991-2020. |
| Mont-Laurier | MONT LAURIER (7035160) | 1981-2010 | ≈ 4,4 km | 5239,2 | -13,3 | -19 | -45 | 1982 | 4,1 | 38,5 | 14180 | 6698 | 56,1 | — | Station Mont Laurier, dans la ville. Pas de normales 1991-2020. |
| Saint-Augustin-de-Desmaures | QUEBEC JEAN LESAGE (AIRPORT) (7016294) | 1991-2020 | ≈ 8,5 km | 4977,2 | -11,9 | -16,7 | -36,7 | 2015 | 4,7 | 26,5 | 19907 | 8143 | 27,1 | — | Aucune station à Saint-Augustin-de-Desmaures ; station la plus proche : aéroport Jean-Lesage (≈ 9 km). |
| Baie-Saint-Paul | BAIE ST PAUL (7040446) | 1981-2010 | ≈ 2,2 km | 5184,4 | -12,4 | -17,9 | -36 | 1981 | 4 | 29,4 | 7371 | 3427 | 55,3 | — | Station Baie St Paul, dans la ville. Pas de normales 1991-2020. Codes D : 15 à 19 ans de données. |
| Saint-Georges | ST GEORGES (7027283) | 1991-2020 | ≈ 4,1 km | 4936,6 | -11,4 | -16,7 | -41,7 | 1967 | 4,9 | 30,5 | 32935 | 15415 | 39,7 | — | Station St Georges, dans la ville. |
| Thetford Mines | THETFORD MINES (7028441) | 1991-2020 | ≈ 3,9 km | 5080,5 | -11,5 | -16,1 | -36 | 1981 | 4,3 | 24,7 | 26072 | 12216 | 77 | — | Station Thetford Mines, dans la ville. |
| Montmagny | MONTMAGNY (7055210) | 1981-2010 | ≈ 2,5 km | 5043,9 | -11,8 | -16,6 | -37 | 1981 | 4,5 | 22,9 | 10999 | 5464 | 68 | — | Station Montmagny, dans la ville. Pas de normales 1991-2020. Codes D : 15 à 19 ans de données. |
| Chibougamau | CHAPAIS (7091299) | 1991-2020 | ≈ 45,1 km | 6477,3 | -18,5 | -24,1 | -43,3 | 1965 | 0,4 | 65,3 | 7233 | 3190 | 69,3 | — | Aucune normale pour Chibougamau ni pour l'aéroport Chibougamau-Chapais ; station 1991-2020 la plus proche : Chapais (≈ 45 km à l'ouest, même plateau). À utiliser avec prudence. |

## Villes complètes / partielles

- **Complètes (53/53)** : Montréal, Laval, Longueuil, Brossard, Saint-Hubert, Boucherville, Québec, Lévis, Gatineau, Sherbrooke, Magog, Trois-Rivières, Shawinigan, Saguenay (Chicoutimi), Jonquière, Alma, Roberval, Saint-Félicien, Rimouski, Rivière-du-Loup, Matane, Gaspé, Rouyn-Noranda, Val-d'Or, Amos, La Sarre, Sept-Îles, Baie-Comeau, Drummondville, Victoriaville, Granby, Saint-Hyacinthe, Saint-Jean-sur-Richelieu, Sorel-Tracy, Châteauguay, Salaberry-de-Valleyfield, Vaudreuil-Dorion, Repentigny, Terrebonne, Mascouche, Joliette, Blainville, Boisbriand, Saint-Eustache, Mirabel, Saint-Jérôme, Mont-Laurier, Saint-Augustin-de-Desmaures, Baie-Saint-Paul, Saint-Georges, Thetford Mines, Montmagny, Chibougamau.
- **Partielles** : aucune.

## Villes dont la station retenue est à plus de 10 km du centre approximatif

- Montréal : MONTREAL TRUDEAU (AIRPORT) (7025250), ≈ 14,4 km — Aéroport Montréal-Trudeau, dans la ville.
- Laval : MONTREAL TRUDEAU (AIRPORT) (7025250), ≈ 12,5 km — Aucune station à Laval dans les normales ECCC ; station la plus proche : Montréal-Trudeau (≈ 12 km).
- Québec : QUEBEC JEAN LESAGE (AIRPORT) (7016294), ≈ 13 km — Aéroport Jean-Lesage, dans la ville.
- Gatineau : ANGERS (7030170), ≈ 11 km — Station Angers (secteur de Gatineau).
- Sherbrooke : SHERBROOKE (7028123), ≈ 16,2 km — Station Sherbrooke (aéroport, alt. 241 m selon l'inventaire ECCC) ; la station Lennoxville (7024280, 1991-2020) donne 4573 DJC et janvier -9,5 °C, nettement plus doux : l'aéroport est un site froid.
- Shawinigan : TROIS-RIVIERES (7018562), ≈ 29,7 km — Aucune station à Shawinigan ; station 1991-2020 la plus proche : Trois-Rivières (≈ 30 km). Valeur probablement un peu douce pour Shawinigan.
- Saguenay (Chicoutimi) : BAGOTVILLE (7060400), ≈ 12,3 km — Station Bagotville (arrondissement La Baie, ville de Saguenay), ≈ 12 km de Chicoutimi. Chicoutimi est un arrondissement de Saguenay : chiffres de la ville de Saguenay (SDR 2494068).
- Jonquière : BAGOTVILLE (7060400), ≈ 20,5 km — Station Bagotville (ville de Saguenay), ≈ 20 km de Jonquière. Jonquière est un arrondissement de Saguenay : chiffres de la ville de Saguenay (SDR 2494068).
- Alma : LAC STE CROIX (7063690), ≈ 16,2 km — Aucune station à Alma ; station la plus proche : Lac Ste Croix (Métabetchouan–Lac-à-la-Croix, ≈ 16 km, 1981-2010).
- Matane : MONT-JOLI (7055120), ≈ 57,7 km — Aucune station à Matane ni à moins de 30 km ; station 1991-2020 la plus proche : Mont-Joli (aéroport, ≈ 58 km à l'ouest, également sur la rive sud de l'estuaire). À utiliser avec prudence.
- La Sarre : ROUYN (7086716), ≈ 62,4 km — Aucune station à La Sarre ni à moins de 50 km ; station 1991-2020 la plus proche : Rouyn (≈ 62 km au sud). À utiliser avec prudence.
- Baie-Comeau : BAIE-COMEAU (7040440), ≈ 10,6 km — Aéroport de Baie-Comeau.
- Vaudreuil-Dorion : MONTREAL TRUDEAU (AIRPORT) (7025250), ≈ 23,2 km — Aucune station à Vaudreuil-Dorion ; station 1991-2020 la plus proche : Montréal-Trudeau (≈ 23 km). La station Oka (1981-2010, ≈ 12 km) donne 4626 DJC et janvier -10,9 °C.
- Terrebonne : L'ASSOMPTION (7014160), ≈ 21 km — Aucune station complète à Terrebonne ; station 1991-2020 la plus proche : L'Assomption (≈ 21 km). La station Mascouche (1981-2010, ≈ 7 km) ne publie pas de degrés-jours.
- Mascouche : L'ASSOMPTION (7014160), ≈ 14,8 km — La station Mascouche (7014629, 1981-2010) ne publie ni degrés-jours ni jours < -20 °C (15 ans de données) ; station 1991-2020 la plus proche : L'Assomption (≈ 15 km).
- Chibougamau : CHAPAIS (7091299), ≈ 45,1 km — Aucune normale pour Chibougamau ni pour l'aéroport Chibougamau-Chapais ; station 1991-2020 la plus proche : Chapais (≈ 45 km à l'ouest, même plateau). À utiliser avec prudence.

## Vérifications de cohérence et valeurs à surveiller

- Montréal-Trudeau 1991-2020 : 4281,2 DJC (attendu 4 000-4 500) ✔.
- Rouyn-Noranda : 5656,7 DJC, janvier -15,1 °C — nettement plus froid que Montréal ✔.
- Val-d'Or : 5958,9 DJC, janvier -16,3 °C — nettement plus froid que Montréal ✔.
- Amos : 6103,5 DJC, janvier -17,2 °C — nettement plus froid que Montréal ✔.
- La Sarre : 5656,7 DJC, janvier -15,1 °C — nettement plus froid que Montréal ✔.
- Sept-Îles : 6121,6 DJC, janvier -14,5 °C — nettement plus froid que Montréal ✔.
- Baie-Comeau : 5821,7 DJC, janvier -13,4 °C — nettement plus froid que Montréal ✔.
- Chibougamau : 6477,3 DJC, janvier -18,5 °C — nettement plus froid que Montréal ✔.
- Alma (Lac Ste Croix, 1981-2010) : janvier -16,2 °C contre -9,2 °C à Montréal ✔.
- **Sherbrooke** : la station retenue est l'aéroport (4877 DJC, janvier −10,8 °C), site connu pour être froid ; Lennoxville, dans la ville, donne 4573 DJC et −9,5 °C avec les mêmes normales 1991-2020. Écart réel entre deux stations de la même ville, à signaler, non corrigé.
- **Matane** (Mont-Joli, 58 km), **La Sarre** (Rouyn, 62 km), **Chibougamau** (Chapais, 45 km), **Shawinigan** (Trois-Rivières, 30 km) : station éloignée, la page devrait nommer la station plutôt que présenter la valeur comme celle de la ville.
- **Mélange de périodes** : 22 villes reposent sur les normales 1981-2010 (période légèrement plus froide que 1991-2020). Une comparaison « X % plus froid que Montréal » entre une ville 1981-2010 et Montréal 1991-2020 surestime légèrement l'écart ; le champ `normalsPeriod` permet de l'indiquer.
- **Codes de qualité ECCC** : Amos, Baie-Saint-Paul, Montmagny (1981-2010) et plusieurs éléments de Trois-Rivières, Sherbrooke, Lauzon, Angers, St Georges, L'Acadie (1991-2020) portent le code D (15-19 ans de données) : valeurs officielles mais moins robustes.
- **Minimums extrêmes anciens** : Amos −52,8 °C (1914), Drummondville −41,7 °C (1918), Lennoxville/L'Assomption −43,3/−44,4 °C : records historiques de longues séries, tels que publiés par ECCC.
- **Rimouski** et **Victoriaville (Arthabaska)** : normales 1991-2020 disponibles mais sans total annuel de degrés-jours (mois manquants) ; les normales 1981-2010 de la même station ont été utilisées pour toute la fiche afin de ne pas mélanger deux périodes dans une même ville.
- **Recensement** : Saint-Hubert → ville de Longueuil ; Saguenay (Chicoutimi) et Jonquière → ville de Saguenay (mêmes chiffres pour les deux pages, à mentionner sur la page). `dwellings2021` (données intégrales) et le total « période de construction » (données-échantillon 25 %) diffèrent de quelques unités : normal.
