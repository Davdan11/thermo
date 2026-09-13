#!/usr/bin/env bash
# ==================================================================
# Chantier R — tâches planifiées du réseau (VPS).
#
# Crontab (root) :
#   20 3 * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/reseau-cron.sh rbq >> /var/log/thermo-reseau.log 2>&1
#   */30 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/reseau-cron.sh stock >> /var/log/thermo-reseau.log 2>&1
#
# rbq   : une fois par nuit, vérification des licences au fichier ouvert
#         de la RBQ (Données Québec). Ne fait rien tant que
#         RBQ_VERIFICATION_ACTIVE=1 n'est pas dans shared/.env.
# stock : sorties du stock pour les jobs terminés (idempotent).
#
# Appelle POST /api/reseau/tick sur le port local du site (pm2), avec
# le secret RESEAU_CRON_SECRET lu dans shared/.env : le secret
# n'apparaît ni dans la crontab ni dans la liste des processus.
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
PORT="${RESEAU_PORT:-3003}"
TACHES="${1:-rbq,stock}"
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

case "$TACHES" in
  rbq|stock|rbq,stock|stock,rbq) ;;
  *) log "Réseau : tâche inconnue « $TACHES » (rbq, stock ou rbq,stock)."; exit 2 ;;
esac

# Un seul passage à la fois par tâche sur cette machine.
exec 9>"/tmp/thermo-reseau-${TACHES//,/-}.lock"
flock -n 9 || { log "Réseau ($TACHES) : un passage est déjà en cours, fin."; exit 0; }

SECRET="$(grep -E '^RESEAU_CRON_SECRET=' "$ROOT/shared/.env" 2>/dev/null | tail -1 | cut -d= -f2- | tr -d '"'"'"'\r')"
if [ -z "$SECRET" ]; then
  log "Réseau : RESEAU_CRON_SECRET absent de shared/.env, rien n'est lancé."
  exit 1
fi

# En-tête passé par un fichier temporaire (droits 600) : jamais sur la ligne de commande.
HDR="$(mktemp)"
chmod 600 "$HDR"
printf 'Authorization: Bearer %s\n' "$SECRET" > "$HDR"
OUT="$(curl -sS -m 900 -X POST -H @"$HDR" "http://127.0.0.1:${PORT}/api/reseau/tick?taches=${TACHES}" -w '\nHTTP %{http_code}')"
CODE=$?
rm -f "$HDR"
log "Réseau ($TACHES) : ${OUT//$'\n'/ }"
exit $CODE
