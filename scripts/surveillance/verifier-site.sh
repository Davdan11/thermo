#!/usr/bin/env bash
# ==================================================================
# Surveillance du site (VPS) : un passage de verifier-site.mjs.
#
# Crontab (toutes les 5 minutes) :
#   */5 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/surveillance/verifier-site.sh >> /var/log/thermo-surveillance.log 2>&1
#
# Lit shared/.env (Twilio, SMTP/Resend, NOTIFICATION_EMAIL, ALERT_SMS_TO,
# ALERT_EMAIL_TO, LEAD_JOURNAL_DIR) ; écrit shared/data/surveillance-etat.json
# et shared/data/surveillance.jsonl. Arguments transmis au script
# (ex. --essai, --tester-envoi, --detail).
# ==================================================================
set -uo pipefail
ROOT=/var/www/thermopompesavendre.ca
export PATH=/root/.nvm/versions/node/v22.17.0/bin:/usr/local/bin:/usr/bin:/bin:${PATH:-}

# Un seul passage à la fois.
exec 9>/tmp/thermo-surveillance.lock
flock -n 9 || { echo "[$(date '+%Y-%m-%d %H:%M:%S')] Surveillance : passage précédent encore en cours, fin."; exit 0; }

# Racine de la version qui contient ce script (current/… en temps normal).
cd "$(dirname "$(readlink -f "$0")")/../.." || exit 1

if [ -f "$ROOT/shared/.env" ]; then
  set -a; . "$ROOT/shared/.env"; set +a
fi

exec timeout 240 node scripts/surveillance/verifier-site.mjs "$@"
