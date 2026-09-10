#!/usr/bin/env bash
# À lancer sur le VPS dans /var/www/thermopompesavendre.ca après une mise à jour des fichiers.
# npm ci sans le navigateur Puppeteer (scripts hors ligne seulement), build avec plus de mémoire,
# puis rechargement pm2 : l'ancienne version sert les visiteurs jusqu'à ce que la nouvelle soit prête.
set -euo pipefail
cd "$(dirname "$0")"
export PATH=/root/.nvm/versions/node/v22.17.0/bin:$PATH
export PUPPETEER_SKIP_DOWNLOAD=1
mkdir -p data/leads
npm ci --no-audit --no-fund
NODE_OPTIONS=--max-old-space-size=4096 npm run build
pm2 startOrReload ecosystem.config.js --update-env
pm2 save >/dev/null
echo "Déployé."
