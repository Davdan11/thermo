const { loadThermoCatalog, runThermoMatch, validateMatchInput } = require("./src/lib/thermomatch-engine/src/index.ts");
// wait, we can't require TS easily. Let's use fetch against localhost:8080.
