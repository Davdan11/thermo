const fs = require('fs');
const registry = JSON.parse(fs.readFileSync('./src/lib/data/fixtures/registry.json', 'utf8'));

const premiumBrandNames = ["daikin", "mitsubishi electric", "fujitsu", "panasonic", "trane", "lennox", "bosch", "samsung", "lg"];

// find brand IDs
const brandIds = registry.brands.filter(b => premiumBrandNames.includes(b.name.toLowerCase())).map(b => b.id);

// find models
const premiumModels = registry.models.filter(m => brandIds.includes(m.brandId));

console.log("Total Premium Models:", premiumModels.length);

const coldPremiumModels = premiumModels.filter(m => {
  const configs = registry.configurations.filter(c => c.modelId === m.id);
  return m.categories.includes("cold-climate") || configs.some(c => c.minHeatingTempC && c.minHeatingTempC <= -20);
});

console.log("Cold Premium Models:", coldPremiumModels.length);

const capacityPremiumModels = coldPremiumModels.filter(m => {
   // check capacity
   const cap = m.nominalCapacityBtu || 12000;
   const min = m.heatingCapacity5FMinBtu || cap * 0.4;
   const max = m.heatingCapacity5FMaxBtu || cap * 1.05;
   return min <= 15000 && max >= 15000; // Target is 15000
});

console.log("Capacity Compatible:", capacityPremiumModels.length);
console.log("Their brands:", capacityPremiumModels.map(m => {
  const brand = registry.brands.find(b => b.id === m.brandId);
  return brand.name;
}));
