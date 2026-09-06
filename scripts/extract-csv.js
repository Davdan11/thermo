const fs = require('fs');
const readline = require('readline');

const transcriptPath = '/Users/daviddanjou/.gemini/antigravity-ide/brain/64e2c9af-6a00-4900-9b07-ff93cee5c0c1/.system_generated/logs/transcript_full.jsonl';
const outPath = 'src/lib/data/fixtures/seo/seo-strategy.csv';

async function extract() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'USER_INPUT' && obj.content && obj.content.includes('Priority Rank,Recommended Month')) {
        let content = obj.content;
        // The user input has some XML tags around it. We'll extract just the CSV part.
        const csvMatch = content.match(/Priority Rank,Recommended Month[\s\S]+/);
        if (csvMatch) {
          let csv = csvMatch[0];
          // Stop at </USER_REQUEST> if it exists
          csv = csv.split('</USER_REQUEST>')[0].trim();
          fs.writeFileSync(outPath, csv);
          console.log(`Extracted CSV to ${outPath}`);
          return;
        }
      }
    } catch (e) {}
  }
}
extract();
