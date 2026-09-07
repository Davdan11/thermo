import { calculateEstimate } from "./src/lib/pricing/engine.js";

const input = {
    projectType: "wall-single-new",
    postalCode: "H2X 1Y4",
    propertyType: "maison",
    areaSqFt: "1000-1500",
    installationType: "new",
    zones: undefined,
    height: "ground",
    accessComplexity: "standard",
    electricalWork: false,
    ductwork: false,
    removal: false,
    currentSystem: "electrique"
};

const priceData = { observations: [], recentObservations: [], totalCount: 0, recentCount: 0 };
const result = calculateEstimate(input, priceData.observations);
console.log(JSON.stringify(result, null, 2));
