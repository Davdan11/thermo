import { runAhriEnrichment } from "./scripts/pipeline-enrichissement/1-fetch-ahri-specs";
runAhriEnrichment().then(() => process.exit(0));
