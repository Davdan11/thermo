#!/usr/bin/env bash
# ==================================================================
# Chantier T — robot de la téléphonie (VPS) : un passage toutes les
# 5 minutes (textos de réponse qui attendaient 8 h, campagnes lancées
# par un clic, transcriptions, conservation de l'audio).
#
# Crontab (root) :
#   */5 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/telephonie-cron.sh >> /var/log/thermo-telephonie.log 2>&1
#
# Appelle POST /api/telephonie/tick sur le port local du site (pm2),
# avec TELEPHONIE_CRON_SECRET (à défaut AUTOMATISATIONS_CRON_SECRET)
# lu dans shared/.env : le secret n'apparaît ni dans la crontab ni dans
# la liste des processus. Chaque envoi est réservé avant de partir : un
# appel en double ne renvoie jamais un texto déjà parti.
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
PORT="${TELEPHONIE_PORT:-3003}"
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

# Un seul passage à la fois sur cette machine.
exec 9>/tmp/thermo-telephonie.lock
flock -n 9 || { log "Téléphonie : un passage est déjà en cours, fin."; exit 0; }

read_secret() { grep -E "^$1=" "$ROOT/shared/.env" 2>/dev/null | tail -1 | cut -d= -f2- | tr -d '"'"'"'\r'; }
SECRET="$(read_secret TELEPHONIE_CRON_SECRET)"
[ -n "$SECRET" ] || SECRET="$(read_secret AUTOMATISATIONS_CRON_SECRET)"
if [ -z "$SECRET" ]; then
  log "Téléphonie : TELEPHONIE_CRON_SECRET (ou AUTOMATISATIONS_CRON_SECRET) absent de shared/.env, rien n'est lancé."
  exit 1
fi

# En-tête passé par un fichier temporaire (droits 600) : jamais sur la ligne de commande.
HDR="$(mktemp)"
chmod 600 "$HDR"
printf 'Authorization: Bearer %s\n' "$SECRET" > "$HDR"
OUT="$(curl -sS -m 280 -X POST -H @"$HDR" "http://127.0.0.1:${PORT}/api/telephonie/tick" -w '\nHTTP %{http_code}')"
CODE=$?
rm -f "$HDR"
log "Téléphonie : ${OUT//$'\n'/ }"
exit $CODE
