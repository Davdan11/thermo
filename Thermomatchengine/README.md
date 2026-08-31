# ThermoMatch Engine 2026

Ce paquet contient uniquement la technologie de recommandation. Il n’impose aucune interface.

## Ce qu’il fait

1. Il importe directement le classeur `thermopompes_quebec_canada_2011_2026.xlsx`.
2. Il garde strictement les lignes dont `last_market_date` est en 2026.
3. Il regroupe les nombreuses combinaisons intérieur/extérieur sous un appareil extérieur unique.
4. Il filtre par distribution, climat froid, marques permises et capacité à 5 °F.
5. Il calcule un score transparent sur 100 et retourne seulement les meilleurs matchs.
6. Par défaut, le top 3 contient au maximum un résultat par marque.
7. S’il n’existe aucun résultat admissible, il retourne une liste vide au lieu d’inventer un appareil.

## Installation

```bash
npm install
```

## Importer ou mettre à jour l’Excel

```bash
npm run catalog:import -- --input "input/thermopompes_quebec_canada_2011_2026.xlsx" --year 2026 --output "data/catalog-2026.json"
```

Le JSON généré est la source rapide utilisée par le site en production. L’Excel reste la source maîtresse. Chaque mise à jour du classeur doit relancer cette commande.

## Tester un match

```bash
npm run match:demo
```

Le fichier `examples/request-2026.json` contient un questionnaire complet. `config/match-policy-2026.json` contient la liste de marques et, au besoin, les clés exactes que votre entreprise vend réellement. Cette politique reste côté serveur : un client ne peut donc pas demander au moteur de contourner votre catalogue commercial. La réponse contient le top 3, les scores détaillés, l’appariement intérieur choisi, les raisons, les avertissements et le décompte de chaque filtre.

## Intégration Next.js

Copier `src/`, `data/catalog-2026.json`, `config/match-policy-2026.json` et le fichier `examples/nextjs-route.ts` dans le vrai projet. Le formulaire existant envoie son questionnaire à cette route. L’interface doit afficher `results`; elle ne doit jamais afficher les 1 681 produits du catalogue comme des cartes de site.

## Définition importante de « 2026 »

Le classeur ne contient pas l’inventaire réel de votre distributeur. Le filtre strict disponible est `last_market_date` en 2026. La présence dans ENERGY STAR indique une configuration actuelle dans la source, pas une preuve qu’elle est en stock chez Thermopompes à vendre.

Pour un résultat commercial parfaitement exact, ajoutez ensuite dans l’Excel un champ d’inventaire interne comme `vendu_par_nous_2026 = Oui`. Le moteur pourra alors en faire un filtre obligatoire sans changer son système de score.

## Sécurité technique

- Le fichier Excel est lu seulement durant l’import, pas à chaque visite client.
- L’API valide les entrées avant le calcul.
- Le score ne contient aucun appel à une IA et demeure reproductible.
- La capacité finale doit être confirmée par un calcul de perte de chaleur CSA F280.
