#!/bin/bash
# ==================================================================
# cron-logisvert.sh
# 
# Daily cron job to update LogisVert data from Hydro-Québec.
# Downloads the official CSV, enriches with ENERGY STAR, and
# commits + pushes if data changed.
#
# Crontab: 0 6 * * * /path/to/thermo/scripts/cron-logisvert.sh
# ==================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_DIR/scripts/logisvert-update.log"

echo "$(date '+%Y-%m-%d %H:%M:%S') — Starting LogisVert update..." | tee -a "$LOG_FILE"

cd "$PROJECT_DIR"

# Save hash of current data
OLD_HASH=$(md5 -q src/lib/subsidies/logisvert-official-amounts.json 2>/dev/null || echo "none")

# Run the scraper
node scripts/scrape-logisvert.mjs 2>&1 | tee -a "$LOG_FILE"

# Check if data changed
NEW_HASH=$(md5 -q src/lib/subsidies/logisvert-official-amounts.json 2>/dev/null || echo "none")

if [ "$OLD_HASH" = "$NEW_HASH" ]; then
  echo "$(date '+%Y-%m-%d %H:%M:%S') — No changes detected. Skipping commit." | tee -a "$LOG_FILE"
  exit 0
fi

echo "$(date '+%Y-%m-%d %H:%M:%S') — Data changed! Committing..." | tee -a "$LOG_FILE"

# Commit and push
git add src/lib/subsidies/logisvert-official-amounts.json src/lib/subsidies/logisvert-model-index.json
git commit -m "chore: update LogisVert data from Hydro-Québec ($(date '+%Y-%m-%d'))"
git push origin main

echo "$(date '+%Y-%m-%d %H:%M:%S') — Update complete and pushed to GitHub." | tee -a "$LOG_FILE"
