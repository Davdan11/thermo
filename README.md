# Thermopompes À Vendre.ca

Site québécois de comparaison et de sélection de thermopompes. Toutes les données de performance (capacité certifiée à -8 °C et -15 °C, COP, SEER2, HSPF2) et les montants de subvention viennent de la liste officielle des appareils admissibles à LogisVert publiée par Hydro-Québec, enrichie par ENERGY STAR. Rien n'est saisi à la main.

## Démarrer

```bash
npm install
cp .env.example .env.local   # remplir les clés nécessaires (voir le fichier)
npm run dev                  # http://localhost:3000
```

Le site fonctionne sans aucune clé : les envois de courriels et de SMS sont alors simulés dans la console, et ThermoScan affiche « service indisponible ».

## Commandes

| Commande | Rôle |
|---|---|
| `npm run dev` | serveur de développement |
| `npm run build` / `npm start` | build de production (les erreurs TypeScript bloquent le build) |
| `npm run lint` | ESLint |
| `npx vitest run` | tests (moteur ThermoMatch, données, comparateur, sécurité) |
| `npx tsc --noEmit` | vérification des types (`NODE_OPTIONS=--max-old-space-size=8192` si nécessaire) |
| `npm run scrape:logisvert` | resynchronise la liste LogisVert (voir `scripts/cron-logisvert.sh`) |

## Architecture

```
src/app/                    pages et routes API (App Router)
src/lib/data/               registre du catalogue (all-auto-datasets.json + fixtures manuelles), requêtes, types
src/lib/subsidies/          liste LogisVert officielle (34 Mo), index par modèle, calculateur
src/lib/thermomatch/        moteur de recommandation ThermoMatch v2 (dimensionnement, score, sélection, tests)
src/lib/seo/                SEO programmatique : modèles canoniques, rebadges, villes, classements, sitemaps
src/lib/security/           limite de débit, vérification des signatures Twilio, échappement HTML
src/lib/validation/         schémas Zod des formulaires
src/content/guides/         guides (Markdown + frontmatter : FAQ, dates, mots-clés)
scripts/                    pipeline de données, images, logos, cron LogisVert
public/images/              photos officielles (products/official, products/brochures) et logos (marques/SOURCES.json)
design-system/              système de design généré (UI/UX Pro Max) et son adaptation à la charte
```

### Flux de données

1. `scripts/scrape-logisvert.mjs` télécharge la liste Hydro-Québec, l'enrichit avec ENERGY STAR et écrit `src/lib/subsidies/logisvert-official-amounts.json`, l'index et les métadonnées.
2. `npm run build:catalogue` (`scripts/build-catalogue.mjs`) reconstruit le catalogue `src/lib/data/fixtures/brands/all-auto-datasets.json` : une fiche par unité extérieure (numéro de modèle = clé unique), jumelages certifiés comptés et résumés, série prise dans la liste officielle ou dans `src/lib/data/fixtures/series-dictionary.json`, sinon « Série non identifiée ». Le générateur est déterministe, valide sa sortie (identifiants et noms uniques, capacités plausibles, volume) et écrit un rapport `catalogue-build-report.json`. Le registre (`src/lib/data/registry.ts`) fusionne ensuite les fixtures manuelles : une fiche curée remplace la fiche auto de la même unité extérieure.
3. `scripts/cron-logisvert.sh` (cron quotidien) valide la nouvelle liste, reconstruit le catalogue et pousse le tout sur la branche `logisvert-update` pour revue ; rien n'est publié automatiquement sur `main`.
4. `src/lib/data/__tests__/catalogue-integrity.test.ts` bloque toute régression : doublons, astérisques, capacités absurdes, séries fantômes.

### ThermoMatch

Questionnaire de 13 questions → `/api/thermomatch/recommend` → `src/lib/thermomatch`. Charge de chauffage uniforme pour le Québec (15 BTU/h par pi² ajusté par type de propriété, étages, année, isolation, fenestration, sous-sol), candidats bâtis sur les capacités certifiées à -15 °C, machines rebadgées fusionnées, score transparent sur 100, trois machines réellement différentes. Le code postal sert à situer le client, jamais à choisir la machine. Tests : `src/lib/thermomatch/__tests__`.

### Images

Aucune image n'est ajoutée sans source officielle vérifiée. Voir `scripts/map-official-images.mjs` (règles explicites par numéro de modèle), `scripts/extract-brochure-images.mjs` et `public/images/marques/SOURCES.json`. `scripts/contact-sheet.mjs` produit des planches-contact pour la revue visuelle.

## Déploiement

`ecosystem.config.js` (pm2) lance `npm start` sur le port 3000. Définir les variables de `.env.example` dans l'environnement pm2, en particulier `NEXT_PUBLIC_SITE_URL` et `TWILIO_AUTH_TOKEN` (sans lui, les webhooks téléphoniques sont refusés en production). Après la mise en ligne : soumettre les sitemaps listés dans `/robots.txt` à la Search Console.

## Conventions

- Français québécois dans l'interface et les messages de commit.
- Une donnée inconnue est `null`, jamais `0` ni une valeur inventée ; une valeur estimée est affichée comme telle.
- Aucun prix de vente n'est affiché sans observation réelle.
