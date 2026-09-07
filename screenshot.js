const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/thermopompes', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'screenshot.png' });
  
  // Extract text
  const text = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('h2, h3')).map(el => el.innerText).join('\n');
  });
  console.log("Headings found:");
  console.log(text);

  await browser.close();
})();
