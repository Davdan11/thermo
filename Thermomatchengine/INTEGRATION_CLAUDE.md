# Directive d’intégration pour Claude

Intègre le dossier `thermomatch-engine` au projet Next.js existant sans refaire le design et sans créer un nouveau questionnaire.

Règles obligatoires :

1. Le fichier Excel est la source maîtresse. Ne copie jamais les modèles à la main dans des composants React.
2. Exécute la commande `catalog:import` pour produire `data/catalog-2026.json`.
3. Utilise `validateMatchInput()`, `loadThermoCatalog()` et `runThermoMatch()` dans une route serveur Node.js.
4. Charge `config/match-policy-2026.json` uniquement côté serveur. C’est cette politique qui décide quelles marques et quels modèles l’entreprise vend.
5. Branche le questionnaire existant sur cette route et affiche seulement `response.results`.
6. Ne crée jamais une page catalogue avec toutes les lignes Excel.
7. Ne remplace pas le moteur par un appel à Claude, OpenAI ou une autre IA.
8. Ne modifie pas les poids, filtres ou règles de diversification sans autorisation.
9. Garde `selectionYear: 2026` obligatoire.
10. Garde `maxPerBrand: 1` dans la politique afin d’éviter trois variantes presque identiques dans le top 3.
11. Si `results` est vide, affiche qu’aucun produit ne respecte tous les critères. Ne force aucun résultat.
12. Affiche le numéro extérieur, l’appariement intérieur choisi, la capacité, les raisons et les avertissements exactement renvoyés par le moteur.
13. Ne présente jamais l’estimation comme un dimensionnement final; conserver l’avertissement CSA F280.

Critère d’acceptation : pour une même requête et le même catalogue, la réponse doit toujours être identique. Tous les tests du paquet doivent réussir avant l’intégration.
