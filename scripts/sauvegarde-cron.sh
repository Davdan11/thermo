#!/usr/bin/env bash
# ==================================================================
# Chantier S — sauvegarde hors serveur de shared/data (VPS), une fois par nuit.
#
# Crontab (root) — après la copie locale de 3 h 30 :
#   45 3 * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/sauvegarde-cron.sh >> /var/log/thermo-sauvegarde.log 2>&1
#
# Lit shared/.env (BACKUP_* et LEAD_JOURNAL_DIR pour trouver shared/data ;
# SMTP/Twilio, ADMIN_EMAILS et ALERT_SMS_TO pour l'alerte) et lance
# scripts/sauvegarde.ts depuis la version servie. Sans variables BACKUP_* :
# inactif, rien n'est envoyé. En cas d'échec, le propriétaire est alerté
# (courriel + texto), y compris si le passage est tué ou dépasse 1 heure.
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

# Un seul passage à la fois.
exec 9>/tmp/thermo-sauvegarde.lock
flock -n 9 || { log "Sauvegarde : un passage est déjà en cours, fin."; exit 0; }

cd "$ROOT/current" || { log "Sauvegarde : $ROOT/current introuvable."; exit 1; }
set -a; . "$ROOT/shared/.env"; set +a
# Envois réels (alerte) : les canaux simulent tout hors production.
export NODE_ENV=production

log "Sauvegarde : début"
nice -n 10 timeout 3600 npx --no-install tsx scripts/sauvegarde.ts
CODE=$?
if [ "$CODE" -ne 0 ] && [ "$CODE" -ne 1 ]; then
  # Tué, délai dépassé ou plantage avant le rapport : alerte seule.
  npx --no-install tsx scripts/sauvegarde.ts --alerte "Le passage de sauvegarde s'est arrêté (code $CODE) sans terminer." || true
fi
log "Sauvegarde : fin (code $CODE)"
exit $CODE
