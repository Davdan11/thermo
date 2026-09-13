#!/usr/bin/env bash
# ==================================================================
# Passage planifié du studio de présence (Facebook + Instagram), VPS.
#
# Crontab (toutes les 15 minutes ; l'heure du VPS n'a pas d'importance,
# les heures de publication sont calculées à l'heure de Montréal) :
#   */15 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/presence-cron.sh >> /var/log/thermo-presence.log 2>&1
#
# Lit PRESENCE_CRON_SECRET dans shared/.env et appelle la route
# POST /api/presence/tick du site (pm2, port 3003, 127.0.0.1).
# Rien ne part vers Meta tant que l'interrupteur « Publication
# automatique » est éteint dans /gestion/presence/reglages (mode essai).
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
PORT="${PRESENCE_PORT:-3003}"
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

# Un seul passage à la fois.
exec 9>/tmp/thermo-presence.lock
flock -n 9 || { log "Présence : un passage est déjà en cours, fin."; exit 0; }

set -a; . "$ROOT/shared/.env"; set +a
if [ -z "${PRESENCE_CRON_SECRET:-}" ]; then
  log "Présence : PRESENCE_CRON_SECRET absent de shared/.env, passage annulé."
  exit 1
fi

OUT=$(curl -sS --max-time 280 -X POST -H "Authorization: Bearer ${PRESENCE_CRON_SECRET}" "http://127.0.0.1:${PORT}/api/presence/tick" -w ' HTTP %{http_code}')
CODE=$?
log "Présence : ${OUT}"
exit $CODE
