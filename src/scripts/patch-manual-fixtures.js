const fs = require("fs");
const path = require("path");

function addFields(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      addFields(fullPath);
    } else if (file.name.endsWith(".ts")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      
      let changed = false;
      
      if (content.includes("normalizedModelNumber") && !content.includes("isActive2026")) {
        content = content.replace(/("?normalizedModelNumber"?:\s*".*?",)/g, (match) => {
          changed = true;
          return match + "\n      \"isActive2026\": true,\n      \"thermomatchEligible\": true,";
        });
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log("Updated", fullPath);
      }
    }
  }
}

addFields(path.join(__dirname, "../lib/data/fixtures"));
