import puppeteer from 'puppeteer';

async function test() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const query = "Ameristar heat pump outdoor unit";
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
  
  console.log(`Navigating to ${url}...`);
  await page.goto(url, { waitUntil: 'networkidle2' });
  
  const images = await page.evaluate(() => {
    const nodes = document.querySelectorAll('a.iusc');
    return Array.from(nodes).slice(0, 3).map(n => {
      try {
        const m = JSON.parse(n.getAttribute('m') || '{}');
        return m.murl;
      } catch (e) {
        return null;
      }
    }).filter(Boolean);
  });
  
  console.log("Found images:", images);
  
  await browser.close();
}

test().catch(console.error);
