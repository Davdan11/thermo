const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    // Navigate to a daikin product (we can just find any product URL from the site by going to /thermopompes first)
    await page.goto('http://localhost:3000/thermopompes');
    await page.waitForSelector('a[href^="/produit/"]');
    const firstProductUrl = await page.$eval('a[href^="/produit/"]', el => el.href);
    console.log("Navigating to: " + firstProductUrl);
    
    await page.goto(firstProductUrl);
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
