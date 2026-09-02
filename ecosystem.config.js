module.exports = {
  apps: [
    {
      name: "thermo-app",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
