#!/bin/bash
# ==================================================================
# cron-logisvert.sh — mise à jour quotidienne des données LogisVert
#
# 1. télécharge la liste officielle d'Hydro-Québec et l'enrichit (ENERGY STAR)
# 2. VALIDE le résultat : JSON lisible, nombre d'entrées plausible, métadonnées cohérentes
# 3. commit sur la branche `logisvert-update` et pousse cette branche
#    → jamais de poussée directe sur main : on relit et on fusionne (PR).
#
# Crontab : 0 6 * * * /chemin/vers/thermo/scripts/cron-logisvert.sh
# ==================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_DIR/scripts/logisvert-update.log"
AMOUNTS="src/lib/subsidies/logisvert-official-amounts.json"
INDEX="src/lib/subsidies/logisvert-model-index.json"
META="src/lib/subsidies/logisvert-metadata.json"
BRANCH="logisvert-update"
MIN_RATIO="0.90"   # la nouvelle liste doit contenir au moins 90 % des entrées de l'ancienne

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') — $*" | tee -a "$LOG_FILE"; }

cd "$PROJECT_DIR"
log "Début de la mise à jour LogisVert"

OLD_HASH=$(md5 -q "$AMOUNTS" 2>/dev/null || echo "none")
OLD_COUNT=$(node -e "console.log(Object.keys(JSON.parse(require('fs').readFileSync('$AMOUNTS','utf8'))).length)" 2>/dev/null || echo 0)

# Sauvegarde pour restauration en cas d'échec de validation
cp "$AMOUNTS" "$AMOUNTS.bak"; cp "$INDEX" "$INDEX.bak"; cp "$META" "$META.bak"
restore() { mv "$AMOUNTS.bak" "$AMOUNTS"; mv "$INDEX.bak" "$INDEX"; mv "$META.bak" "$META"; }

if ! node scripts/scrape-logisvert.mjs 2>&1 | tee -a "$LOG_FILE"; then
  log "ÉCHEC du script de mise à jour : anciennes données restaurées"; restore; exit 1
fi

# ── Validation ──────────────────────────────────────────────────────
NEW_COUNT=$(node -e "
  const fs=require('fs');
  const a=JSON.parse(fs.readFileSync('$AMOUNTS','utf8'));
  const m=JSON.parse(fs.readFileSync('$META','utf8'));
  const n=Object.keys(a).length;
  if (m.count!==n) throw new Error('métadonnées incohérentes: '+m.count+' vs '+n);
  const bad=Object.values(a).filter(e=>!e.m||!(e.a>0)).length;
  if (bad>n*0.01) throw new Error('trop d\'entrées invalides: '+bad);
  console.log(n);
" 2>&1) || { log "VALIDATION ÉCHOUÉE : $NEW_COUNT — anciennes données restaurées"; restore; exit 1; }

if [ "$OLD_COUNT" -gt 0 ] && [ "$(node -e "console.log($NEW_COUNT >= $OLD_COUNT * $MIN_RATIO ? 'ok' : 'ko')")" != "ok" ]; then
  log "VALIDATION ÉCHOUÉE : $NEW_COUNT entrées contre $OLD_COUNT avant (chute > 10 %) — anciennes données restaurées"; restore; exit 1
fi
rm -f "$AMOUNTS.bak" "$INDEX.bak" "$META.bak"

NEW_HASH=$(md5 -q "$AMOUNTS" 2>/dev/null || echo "none")
if [ "$OLD_HASH" = "$NEW_HASH" ]; then
  log "Aucun changement ($NEW_COUNT entrées)."; exit 0
fi

# ── Commit sur une branche de revue ────────────────────────────────
log "Changement détecté : $OLD_COUNT → $NEW_COUNT entrées. Commit sur $BRANCH"
CURRENT=$(git rev-parse --abbrev-ref HEAD)
git stash push -q --include-untracked -- "$AMOUNTS" "$INDEX" "$META" >/dev/null 2>&1 || true
git fetch -q origin
git checkout -q -B "$BRANCH" origin/main 2>/dev/null || git checkout -q -B "$BRANCH"
git stash pop -q || true
git add "$AMOUNTS" "$INDEX" "$META"
git commit -q -m "chore(logisvert): liste Hydro-Québec du $(date '+%Y-%m-%d') ($NEW_COUNT entrées)"
git push -q -u origin "$BRANCH" --force-with-lease
git checkout -q "$CURRENT"
log "Poussé sur origin/$BRANCH. Ouvrir une PR vers main pour publier."
