// Configuration PM2 pour le VPS Hostinger (voir DEPLOIEMENT.md).
// Le site tourne à côté de bellechasseenergie.ca (port 3002) : ici port 3003, derrière nginx.
// Le dossier de travail est le lien « current », qui pointe vers la version déployée :
// un `pm2 reload thermo` après bascule du lien suffit à servir la nouvelle version.
const ROOT = "/var/www/thermopompesavendre.ca";

module.exports = {
  apps: [
    {
      name: "thermo",
      cwd: `${ROOT}/current`,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3003 -H 127.0.0.1",
      env: { NODE_ENV: "production", PORT: "3003" },
      max_memory_restart: "2500M",
      autorestart: true,
      time: true,
    },
  ],
};
