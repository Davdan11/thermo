// Configuration PM2 pour le VPS Hostinger (voir DEPLOIEMENT.md).
// Le site tourne à côté de bellechasseenergie.ca (port 3002) : ici port 3003, derrière nginx.
module.exports = {
  apps: [
    {
      name: "thermo",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3003 -H 127.0.0.1",
      env: { NODE_ENV: "production", PORT: "3003" },
      max_memory_restart: "900M",
      autorestart: true,
      time: true,
    },
  ],
};
