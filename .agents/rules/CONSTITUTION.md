# CONSTITUTION — ThermopompesÀVendre.ca

> Ce document est la référence permanente du projet.
> Toute modification de code doit respecter ces règles.

---

## 1. Vision du produit

ThermopompesÀVendre.ca est une **plateforme québécoise premium** de type lead generation / marketplace.

Elle permet à un propriétaire de :

- Découvrir des thermopompes
- Comparer des marques et modèles
- Comprendre BTU, performances, subventions
- Consulter des prix indicatifs
- Trouver les machines adaptées à sa propriété
- Obtenir une estimation / demander une soumission
- Être jumelé avec un entrepreneur qualifié

Le site doit inspirer : **confiance, clarté, expertise, transparence, qualité, modernité, simplicité**.

Le client doit avoir l'impression d'utiliser une véritable plateforme technologique spécialisée, pas un petit site HVAC local.

Références de qualité d'exécution (pas d'identité visuelle) : Apple, Airbnb, Stripe, Linear, Notion, Tesla, Shopify, Ratehub, modern fintech / insuretech / marketplaces.

---

## 2. Positionnement

Message central : **"Trouvez la bonne thermopompe. Au bon prix."**

Objectif : devenir **"La référence pour magasiner une thermopompe au Québec."**

La plateforme doit paraître indépendante, experte et très bien structurée.

Elle ne doit **PAS** donner l'impression : d'un fabricant, d'une seule marque, d'un entrepreneur qui pousse ses produits, d'un site de coupon, de dropshipping, ou d'un site généré par IA.

---

## 3. Règles visuelles absolues

### INTERDIT

- Emojis (jamais comme remplacement d'icône)
- Illustrations génériques IA, bonhommes 3D, icônes cartoon, clipart
- Icônes décoratives inutiles, SVG décoratifs auto-générés
- Flocons partout, flammes partout, maison + flocon comme identité principale
- Gradients flashy, glassmorphism excessif, néons, ombres énormes
- Boutons multicolores, dizaines de petites cartes arrondies
- Design "dashboard SaaS template", Bootstrap générique, Tailwind générique
- Aspect ChatGPT-generated, murs de texte
- Effets visuels uniquement parce qu'ils sont possibles
- Faux logos finaux

Si un asset visuel n'existe pas encore → emplacement propre et neutre prévu pour le recevoir plus tard.

---

## 4. Esthétique

Le design doit être : premium, chaleureux, québécois dans le ton, technologique sans être froid, résidentiel haut de gamme, très propre, éditorial, spacieux, accessible.

### Préférer

- Beaucoup d'espace blanc
- Grandes sections
- Typographie excellente
- Alignements rigoureux, grille cohérente
- Contraste élevé
- Micro-interactions très discrètes, animations sobres
- Photographie résidentielle premium, photos authentiques de thermopompes
- Interfaces de comparaison très claires

### Identité québécoise via

- La langue, les prix en CAD, les informations locales
- Les villes, programmes québécois, vocabulaire, entrepreneurs locaux
- **PAS** par une fleur de lys collée partout

---

## 5. Couleurs

Pas de cliché HVAC bleu cyan + turquoise.

### Base suggérée

| Rôle | Valeur |
|---|---|
| Fond principal | `#FAFAF8` ou similaire |
| Texte principal | Presque noir / charcoal très foncé |
| Surface sombre premium | Navy extrêmement foncé ou graphite |
| Couleur de marque | À déterminer dans le design system |
| Accent | Une seule vraie couleur distinctive |

Règles : WCAG respecté, maximum 1 principale + 1 accent + neutres. Pas d'arc-en-ciel.

---

## 6. Typographie

Excellente police web moderne et professionnelle.

### Éviter

- Fonts futuristes, gaming, trop arrondies, fantaisistes

### Règles

- Headings forts et très lisibles
- Body extrêmement confortable
- 1 famille principale, éventuellement 1 complémentaire éditoriale

---

## 7. UX

Le site doit être utilisable par quelqu'un qui ne connaît rien aux thermopompes.

- Toujours traduire les spécifications en bénéfices compréhensibles
- Toutes les pages importantes → chemin évident vers : Trouver ma thermopompe / Comparer / Obtenir mon prix / Demander une soumission
- Ne pas spammer le même CTA tous les 200 pixels

---

## 8. Confiance et éthique

### NE JAMAIS INVENTER

- Nombre de clients, avis, étoiles, témoignages
- Partenaires, entrepreneurs, licences RBQ, certifications
- Années d'expérience, prix, subventions, garanties, données produit

Si une donnée réelle n'est pas disponible → placeholder clairement identifié comme tel.

Exemple : `"Prix à confirmer"` et **PAS** `"2 495 $"` inventé.

---

## 9. Nature de la plateforme

"Nous comparons. Nos partenaires installent."

Rôles : comparateur, conseiller, générateur de soumissions, intermédiaire, marketplace.

Ne jamais créer une fausse impression que les installateurs sont des employés directs.

---

## 10. Développement

Avant chaque modification :

1. Inspecter le code existant
2. Comprendre l'architecture
3. Réutiliser ce qui est bon
4. Éviter les duplications
5. Préserver les fonctionnalités existantes

### Règles

- Composants réutilisables
- TypeScript strict lorsque possible
- Fichiers de taille raisonnable
- Séparation : UI / data / business logic / API / validation
- Pas de dépendances inutiles

---

## 11. Responsive

Chaque composant conçu dès le départ pour : desktop, laptop, tablet, mobile.

Ne jamais simplement "réduire" la version desktop. UX mobile pensée spécifiquement.

---

## 12. Performance

### Éviter

- Images énormes, JavaScript inutile, animations lourdes
- Layout shifts, dizaines de fonts, packages inutiles

Prioriser Core Web Vitals.

---

## 13. Accessibilité

- HTML sémantique
- Navigation clavier, focus visible
- Labels de formulaires
- ARIA uniquement lorsque nécessaire
- Contrastes suffisants
- Respect de `prefers-reduced-motion`

---

## 14. Méthode de travail obligatoire

Pour chaque tâche :

- A. Inspecter le projet
- B. Annoncer ce qui va être modifié
- C. Implémenter uniquement le scope demandé
- D. Lancer l'application
- E. Ouvrir la page dans le navigateur
- F. Tester visuellement
- G. Tester desktop
- H. Tester mobile
- I. Inspecter la console
- J. Corriger erreurs et incohérences
- K. Passe finale de polish
- L. Résumer ce qui a été fait

**Ne pas construire hors scope. Ne pas enchaîner automatiquement. Arrêter une fois le volet terminé.**
