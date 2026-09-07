const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 2500 });
  await page.goto('http://localhost:3000/produit/1hvac-aciq-09z-hp115-3f7b8abb', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '/Users/daviddanjou/.gemini/antigravity-ide/brain/64e2c9af-6a00-4900-9b07-ff93cee5c0c1/screenshot.png', fullPage: true });
  await browser.close();
})();
