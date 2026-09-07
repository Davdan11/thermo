const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:3000/produit/daikin-aurora-multi');
    await page.waitForSelector('#garantie-title');
    
    const text = await page.evaluate(() => document.body.innerText);
    
    if (text.includes("Standard estimé")) {
      console.log("WARNING: Fallback is still showing!");
    } else {
      console.log("SUCCESS: Fallback is gone.");
    }
    
    const warrantySection = await page.$eval('section#garantie', el => el.innerText);
    console.log("Warranty text:\n" + warrantySection);
    
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();
