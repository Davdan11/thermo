#!/usr/bin/env bash
# ==================================================================
# Robot quotidien des rappels ThermoMatch et des demandes d'avis (VPS).
#
# Crontab (horloge du VPS en UTC) :
#   30 13,14 * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/relances-cron.sh >> /var/log/thermo-relances.log 2>&1
# Les deux heures couvrent 9 h 30 à Montréal, à l'heure d'été comme à
# l'heure normale : le script ne fait rien s'il n'est pas 9 h à Montréal.
# (FORCE=1 pour le lancer à la main à une autre heure.)
#
# Lit shared/.env (LEAD_JOURNAL_DIR : la file est dans
# shared/data/relances.json, conservée d'un déploiement à l'autre) et
# lance scripts/send-relances.ts depuis la version servie (current).
# Un message ne part jamais deux fois ; plafond : RELANCES_MAX (40).
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

if [ "${FORCE:-0}" != "1" ] && [ "$(TZ=America/Toronto date +%H)" != "09" ]; then
  exit 0
fi

# Un seul passage à la fois.
exec 9>/tmp/thermo-relances.lock
flock -n 9 || { log "Rappels : un passage est déjà en cours, fin."; exit 0; }

cd "$ROOT/current" || { log "Rappels : $ROOT/current introuvable."; exit 1; }
# Secrets du site (SMTP, BUSINESS_MAILING_ADDRESS, GOOGLE_REVIEW_URL, LEAD_JOURNAL_DIR…).
set -a; . "$ROOT/shared/.env"; set +a

log "Rappels : début"
NODE_OPTIONS=--max-old-space-size=4096 timeout 900 npx --no-install tsx scripts/send-relances.ts --max "${RELANCES_MAX:-40}"
CODE=$?
log "Rappels : fin (code $CODE)"
exit $CODE
