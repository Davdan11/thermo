import fs from 'fs/promises';
import path from 'path';

async function deduplicateCatalog() {
  const catalogPath = path.resolve(process.cwd(), 'src/lib/thermomatch-engine/data/catalog-2026.json');
  
  console.log(`Lecture du catalogue : ${catalogPath}`);
  const rawData = await fs.readFile(catalogPath, 'utf8');
  const catalog = JSON.parse(rawData);

  console.log(`Produits avant déduplication : ${catalog.products.length}`);

  const uniqueProductsMap = new Map();

  for (const product of catalog.products) {
    // Clé unique : Marque + Modèle Extérieur (Normalisés)
    const key = `${product.brand.toLowerCase()}|${product.outdoorModel.toLowerCase()}`;

    if (uniqueProductsMap.has(key)) {
      // Le produit existe déjà, on fusionne les pairings
      const existingProduct = uniqueProductsMap.get(key);
      
      // On ajoute les pairings du produit actuel s'ils n'y sont pas déjà
      for (const newPairing of product.pairings) {
        const pairingExists = existingProduct.pairings.some(
          p => p.indoorModel.toLowerCase() === newPairing.indoorModel.toLowerCase()
        );
        
        if (!pairingExists) {
          existingProduct.pairings.push(newPairing);
        }
      }
      
      // On met à jour les min/max globaux de la machine en fonction des nouveaux pairings
      // (Optionnel pour une première passe, mais idéalement les min/max du "outdoorModel" 
      // devraient refléter l'étendue de tous ses pairings).
      if (product.heatingCapacity5FBtuH?.max > existingProduct.heatingCapacity5FBtuH?.max) {
        existingProduct.heatingCapacity5FBtuH.max = product.heatingCapacity5FBtuH.max;
      }
      if (product.heatingCapacity5FBtuH?.min < existingProduct.heatingCapacity5FBtuH?.min) {
        existingProduct.heatingCapacity5FBtuH.min = product.heatingCapacity5FBtuH.min;
      }
      if (product.seer2?.max > existingProduct.seer2?.max) {
        existingProduct.seer2.max = product.seer2.max;
      }
      if (product.hspf2?.max > existingProduct.hspf2?.max) {
        existingProduct.hspf2.max = product.hspf2.max;
      }
      
    } else {
      // Nouveau produit
      uniqueProductsMap.set(key, { ...product });
    }
  }

  const deduplicatedProducts = Array.from(uniqueProductsMap.values());
  
  console.log(`Produits après déduplication : ${deduplicatedProducts.length}`);

  const newCatalog = {
    ...catalog,
    manifest: {
      ...catalog.manifest,
      productCount: deduplicatedProducts.length,
      deduplicatedAt: new Date().toISOString()
    },
    products: deduplicatedProducts
  };

  await fs.writeFile(catalogPath, JSON.stringify(newCatalog, null, 2), 'utf8');
  console.log('Catalogue dédupliqué avec succès !');
}

deduplicateCatalog().catch(console.error);
