# Fiches produits : températures et noms commerciaux

Deux données font vendre une thermopompe au Québec : **« Chauffe jusqu'à −XX °C »** et le **nom commercial**
que les gens cherchent (« Bryant Evolution », « Gree Livo »), plutôt qu'un numéro de modèle. Les deux ne
viennent que des documents des fabricants. Un chiffre ou un nom faux détruit la confiance : **une inconnue
est acceptable, une invention jamais.**

## Règles de source (décision du propriétaire)

1. **Document officiel du fabricant d'abord** : site de la marque, sa division canadienne ou américaine,
   son distributeur officiel prouvé → `sourceType: "officiel"`. Le domaine doit être dans la liste fermée
   `src/lib/data/official-sources.ts` ; un nouveau domaine n'y entre qu'après vérification de son
   propriétaire (qui l'exploite, et le site de la marque y renvoie-t-il ?).
2. Sinon **source secondaire** : un distributeur ou un détaillant qui reproduit la fiche du fabricant pour
   **ce numéro exact** → `sourceType: "secondaire"` et une `note` qui dit qui c'est. L'affichage le dit
   (« reproduite par un distributeur »).
3. **Jamais** : forum, blogue, avis, IA, moyenne, valeur ou nom d'un modèle voisin, déduction.
   `confidence: "modele"` si le document nomme le numéro ; `"serie"` s'il vise la série dont le numéro fait
   partie dans ce document (la note dit où le numéro figure).
4. **Documents en désaccord** : pour une température, la valeur la plus prudente (la moins froide), écart
   expliqué dans la note ; pour un nom, aucune entrée. Rien de fiable : pas d'entrée.
5. **Hébergeurs partagés** (s3.amazonaws.com, cdn.shopify.com, CloudFront, Salsify…) : « officiel »
   seulement si le site de la marque renvoie vers **ce dossier ou ce fichier précis** ; sinon « secondaire ».
6. **Même numéro sous plusieurs marques** (Carrier / Bryant / Payne / Midea, Keeprite / Tempstar, Rheem /
   Ruud) : un nom commercial vient du document **de la marque de la fiche**.
7. **Citation** (`quote`) : texte exact du document, 160 caractères et 15 mots au plus, jamais coupée ni
   combinée. Pour une température, elle contient le chiffre retenu (en °C, ou en °F qui s'y convertit :
   arrondi à l'entier, un ,5 vers la valeur la moins froide ; chauffage seulement, jamais un « lockout »
   réglable). Pour un nom, elle contient le nom.
8. Un **nom commercial** est le nom de gamme vendu aux particuliers (Performance, Evolution, Arctic…). Un
   préfixe de numéro (« 38MAR », « D5F »), une description (« 17 SEER Heat Pump », « S Series », « Cold
   Climate ») ou une catégorie (« Multi-Zone ») n'en sont pas.
9. Les PDF lus pour la recherche sont des **copies temporaires hors du dépôt** (dossier de travail de la
   session) ; on ne les ajoute jamais au site et on ne supprime rien.

## Formats des relevés

- Température : `{ outdoorModel, brand, series, minHeatingTempC, sourceFile, page?, quote, confidence,
  sourceType, note? }` (`outdoorModel` et `brand` exactement comme dans la liste à chercher).
- Nom : `{ brand, outdoorModel, commercialName (sans la marque), sourceFile, page?, quote, confidence,
  sourceType, note? }`. Un relevé de température peut porter `commercialName` et `commercialNameQuote`.

## Marche à suivre

```
npx tsx --tsconfig ./tsconfig.json scripts/fiches/a-documenter.ts <dossier>      # listes à chercher
# … recherche (règles ci-dessus) : relevés JSON dans le dossier de travail …
node scripts/fiches/fusion-temperatures.cjs --dry-run releves-temperatures.json   # puis sans --dry-run
node scripts/fiches/fusion-noms.cjs --dry-run releves-*.json                      # puis sans --dry-run
npx tsc --noEmit -p . && npx vitest run                                           # tout doit passer
npx tsx --tsconfig ./tsconfig.json scripts/fiches/a-documenter.ts --marquer <dossier>
```

Le test `src/lib/thermomatch/min-temp-brochures.test.ts` (températures) et
`src/lib/data/__tests__/commercial-names.test.ts` (noms) refusent toute entrée hors de ces règles.
`scripts/fiches/deja-cherches.json` retient les numéros cherchés sans succès : ils ne sont recherchés
qu'après 120 jours.
