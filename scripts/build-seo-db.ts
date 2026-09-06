import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const csvPath = path.join(process.cwd(), "src/lib/data/fixtures/seo/seo-strategy.csv");
const outPath = path.join(process.cwd(), "src/lib/data/fixtures/seo/seo-db.json");

function build() {
  if (!fs.existsSync(csvPath)) {
    console.log("No seo-strategy.csv found. Skipping.");
    return;
  }

  const fileContent = fs.readFileSync(csvPath, "utf8");
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  // Transform keys to be cleaner
  const transformed = records.map((r: any) => ({
    rank: parseInt(r["Priority Rank"]) || 999,
    phase: r["Phase"],
    cluster: r["Cluster"],
    primaryKeyword: r["Primary Keyword"],
    secondaryKeywords: r["Secondary Keywords"].split(";").map((s: string) => s.trim()).filter(Boolean),
    pageType: r["Page Type"],
    intent: r["Intent"],
    funnel: r["Funnel"],
    urlSlug: r["URL Slug"],
    seoTitle: r["SEO Title"],
    h1: r["H1"],
    contentSpec: r["Content Specification"],
    primaryCta: r["Primary CTA"],
    schemaType: r["Schema"],
    internalLinkHub: r["Internal Link Hub"],
  }));

  fs.writeFileSync(outPath, JSON.stringify(transformed, null, 2));
  console.log(`Generated seo-db.json with ${transformed.length} pages.`);
}

build();
