require('ts-node/register/transpile-only');
const tsConfigPaths = require('tsconfig-paths');
const tsConfig = require('./tsconfig.json');
tsConfigPaths.register({
  baseUrl: tsConfig.compilerOptions.baseUrl || './',
  paths: tsConfig.compilerOptions.paths
});

const { getCatalogueModels } = require('./src/lib/data/queries/catalogue');

const amanaModels = getCatalogueModels({ brand: 'amana' });
console.log('Amana models found:', amanaModels.length);

const allModels = getCatalogueModels({});
console.log('Total models:', allModels.length);
