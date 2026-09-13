#!/usr/bin/env bash
# ==================================================================
# Moteur d'automatisations (VPS) : un passage toutes les 15 minutes.
#
# Crontab (root) :
#   */15 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/automatisations-cron.sh >> /var/log/thermo-automatisations.log 2>&1
#
# Appelle POST /api/automatisations/tick sur le port local du site (pm2),
# avec le secret AUTOMATISATIONS_CRON_SECRET lu dans shared/.env : le
# secret n'apparaît ni dans la crontab ni dans la liste des processus.
# Le passage est idempotent (clé unique par envoi) : un appel en double
# ne renvoie jamais un message déjà parti.
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
PORT="${AUTOMATISATIONS_PORT:-3003}"
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

# Un seul passage à la fois sur cette machine.
exec 9>/tmp/thermo-automatisations.lock
flock -n 9 || { log "Automatisations : un passage est déjà en cours, fin."; exit 0; }

SECRET="$(grep -E '^AUTOMATISATIONS_CRON_SECRET=' "$ROOT/shared/.env" 2>/dev/null | tail -1 | cut -d= -f2- | tr -d '"'"'"'\r')"
if [ -z "$SECRET" ]; then
  log "Automatisations : AUTOMATISATIONS_CRON_SECRET absent de shared/.env, rien n'est lancé."
  exit 1
fi

# En-tête passé par un fichier temporaire (droits 600) : jamais sur la ligne de commande.
HDR="$(mktemp)"
chmod 600 "$HDR"
printf 'Authorization: Bearer %s\n' "$SECRET" > "$HDR"
OUT="$(curl -sS -m 240 -X POST -H @"$HDR" "http://127.0.0.1:${PORT}/api/automatisations/tick" -w '\nHTTP %{http_code}')"
CODE=$?
rm -f "$HDR"
log "Automatisations : ${OUT//$'\n'/ }"
exit $CODE
