# Assets — Guide de production

Ce document liste tous les assets visuels nécessaires pour ThermopompesÀVendre.ca,
les dimensions recommandées, les formats attendus, et les composants qui les consomment.

---

## Structure des répertoires

```
public/images/
├── logo/           → Logo du site
├── brands/         → Logos des fabricants
├── products/       → Photos de thermopompes
├── homes/          → Photos résidentielles (hero, ambiance)
├── installations/  → Photos d'installations réelles
├── editorial/      → Images pour guides et articles
└── installers/     → Photos des entrepreneurs partenaires
```

---

## 1. Logo du site

| Fichier | Dimensions | Format | Notes |
|---|---|---|---|
| `logo/logo.svg` | Vectoriel | SVG | Logo principal, fond clair |
| `logo/logo-dark.svg` | Vectoriel | SVG | Logo pour fond sombre (footer) |
| `logo/logo-icon.svg` | Vectoriel | SVG | Icône seule (favicon, mobile) |
| `logo/favicon.ico` | 32×32 | ICO | Favicon navigateur |
| `logo/apple-touch-icon.png` | 180×180 | PNG | Icône iOS |
| `logo/og-image.jpg` | 1200×630 | JPEG | Image OpenGraph par défaut |

**État actuel :** Wordmark texte "Thermopompes / À VENDRE" utilisé en attendant.  
**Composant :** Inline dans `Header.tsx` — remplacer le `<span>` par `<Image>`.

---

## 2. Logos fabricants

| Fichier | Dimensions | Format | Composant |
|---|---|---|---|
| `brands/daikin.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |
| `brands/gree.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |
| `brands/fujitsu.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |
| `brands/mitsubishi-electric.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |
| `brands/moovair.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |
| `brands/lg.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |
| `brands/bosch.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |
| `brands/panasonic.svg` | max 160×60 | SVG préféré | `<BrandLogo>` |

**Fallback :** Nom de marque en texte (comportement par défaut de `<BrandLogo>`).  
**Important :** Les logos des fabricants doivent provenir de sources officielles
avec permission d'utilisation. Ne jamais recréer ou tracer un logo.

---

## 3. Photos produits

| Usage | Dimensions recommandées | Ratio | Format | Composant |
|---|---|---|---|---|
| Carte produit | 800×600 | 4:3 | WebP | `<ProductImage>` |
| Détail produit (principal) | 1200×900 | 4:3 | WebP | `<ProductImage>` |
| Détail produit (galerie) | 800×800 | 1:1 | WebP | `<ProductImage aspectRatio="1/1">` |
| Comparaison | 600×450 | 4:3 | WebP | `<ProductImage>` |

**Nommage :** `products/{marque}-{modele}.webp`  
**Exemple :** `products/daikin-ftxs25.webp`  
**Fond :** Blanc ou transparent de préférence.

---

## 4. Photos résidentielles (hero, ambiance)

| Usage | Dimensions recommandées | Ratio | Format | Composant |
|---|---|---|---|---|
| Hero desktop | 1600×2000 | ~4:5 | WebP | `<HeroImage>` |
| Hero mobile | 1200×800 | 3:2 | WebP | `<HeroImage>` |
| Ambiance section | 1400×800 | ~16:9 | WebP | `<EditorialImage>` |

**Direction photographique :**
- Maison québécoise moderne (pas de McMansion américaine)
- Intérieur résidentiel haut de gamme mais réaliste
- Thermopompe murale visible et élégante
- Lumière naturelle, tons chauds
- Pas de banque d'images cliché
- Pas de technicien posant avec un pouce levé

**Nommage :** `homes/{sujet}-{contexte}.webp`  
**Exemple :** `homes/hero-salon-moderne.webp`

---

## 5. Photos d'installations

| Usage | Dimensions recommandées | Ratio | Format | Composant |
|---|---|---|---|---|
| Galerie installations | 1200×900 | 4:3 | WebP | `<ProductImage>` |
| Détail installation | 1600×1200 | 4:3 | WebP | `<ProductImage>` |

**Direction photographique :**
- Installations propres et terminées
- Conduits et supports bien organisés
- Contexte résidentiel visible
- Pas de chantier en désordre

**Nommage :** `installations/{type}-{lieu}.webp`  
**Exemple :** `installations/murale-salon-laval.webp`

---

## 6. Images éditoriales

| Usage | Dimensions recommandées | Ratio | Format | Composant |
|---|---|---|---|---|
| Couverture article | 1200×675 | 16:9 | WebP | `<EditorialImage>` |
| Image dans article | 1200×800 | 3:2 | WebP | `<EditorialImage aspectRatio="3/2">` |
| Vignette guide | 800×450 | 16:9 | WebP | `<EditorialImage>` |

**Nommage :** `editorial/{slug-article}.webp`  
**Exemple :** `editorial/comment-choisir-thermopompe.webp`

---

## 7. Photos entrepreneurs

| Usage | Dimensions recommandées | Ratio | Format | Composant |
|---|---|---|---|---|
| Avatar profil | 400×400 | 1:1 | WebP | `<InstallerImage>` |
| Photo équipe | 800×800 | 1:1 | WebP | `<InstallerImage size="lg">` |

**Direction photographique :**
- Portrait professionnel, éclairage studio ou naturel
- Tenue de travail propre
- Fond neutre ou contexte de travail

**Fallback :** Initiales sur fond `brand-light` (comportement par défaut de `<InstallerImage>`).

**Nommage :** `installers/{prenom}-{nom}.webp`  
**Exemple :** `installers/jean-tremblay.webp`

---

## Formats et optimisation

| Format | Usage |
|---|---|
| **SVG** | Logos, icônes (vectoriel, scalable) |
| **WebP** | Photos, images éditoriales (meilleure compression) |
| **PNG** | Produits sur fond transparent (si nécessaire) |
| **JPEG** | OpenGraph, fallback si WebP indisponible |

**Optimisation :**
- Next.js `<Image>` génère automatiquement les tailles responsives
- Qualité recommandée : 80-85% pour WebP
- Toujours fournir l'image à la plus grande taille nécessaire
- Le composant `next/image` s'occupe du reste

---

## Composants disponibles

| Composant | Import | Fallback |
|---|---|---|
| `<BrandLogo>` | `@/components/media` | Nom de marque en texte |
| `<ProductImage>` | `@/components/media` | Rectangle `#EFEDE9` + "Photo à venir" |
| `<EditorialImage>` | `@/components/media` | Rectangle arrondi `#EFEDE9` + "Image à venir" |
| `<HeroImage>` | `@/components/media` | Rectangle `#EFEDE9` + "Photo à venir" |
| `<InstallerImage>` | `@/components/media` | Cercle avec initiales |

Tous les composants gèrent automatiquement :
- `src` absent → affiche le fallback
- Erreur de chargement → affiche le fallback
- Lazy loading (sauf `HeroImage` qui est prioritaire par défaut)
- Alt text obligatoire
- Responsive `sizes` hint
