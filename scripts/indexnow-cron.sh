#!/usr/bin/env bash
# ==================================================================
# IndexNow (VPS) : chaque matin, après le robot de nuit de 5 h 30
# (synchronisation, LogisVert, blogue, déploiement), signale à Bing,
# Yandex, Naver et Seznam les adresses du plan du site ajoutées,
# modifiées ou retirées depuis le dernier envoi.
#
# Crontab (root), même horloge que le robot de 5 h 30 :
#   45 6 * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/indexnow-cron.sh >> /var/log/thermo-indexnow.log 2>&1
#
# Aussi lancé par deploy-vps.sh 90 secondes après chaque déploiement.
# Lit shared/.env (INDEXNOW_KEY ; LEAD_JOURNAL_DIR pour trouver
# shared/data, où l'état gestion-indexnow.json est gardé) et lance
# scripts/indexnow.ts depuis la version servie. Premier passage : tout le
# plan du site par lots de 10 000 ; ensuite : seulement ce qui a changé.
# Le journal ne contient jamais la clé.
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

# Un seul passage à la fois (cron et déploiement).
exec 9>/tmp/thermo-indexnow.lock
flock -n 9 || { log "IndexNow : un passage est déjà en cours, fin."; exit 0; }

cd "$ROOT/current" || { log "IndexNow : $ROOT/current introuvable."; exit 1; }
set -a; . "$ROOT/shared/.env"; set +a
# Envois réels : hors production, le script simule tout.
export NODE_ENV=production

log "IndexNow : début"
NODE_OPTIONS=--max-old-space-size=4096 timeout 900 npx --no-install tsx scripts/indexnow.ts
CODE=$?
log "IndexNow : fin (code $CODE)"
exit $CODE
