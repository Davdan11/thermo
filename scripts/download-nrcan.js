const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

(async () => {
  console.log("Launching Puppeteer to fetch official NRCan Heat Pump CSV...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set up download path
  const downloadPath = path.resolve(__dirname, '../src/lib/data/fixtures');
  const client = await page.target().createCDPSession();
  await client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: downloadPath,
  });

  console.log("Navigating to NRCan searchable product list...");
  await page.goto('https://oee.nrcan.gc.ca/pml-lmp/index.cfm?language_langue=en&action=app.search-recherche&appliance=ASHP1_GH', { waitUntil: 'networkidle2' });

  console.log("Waiting for CSV download link...");
  
  // Find the download button
  const downloadHref = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    const csvLink = links.find(l => l.textContent.includes('CSV') || l.href.includes('app.download-csv'));
    return csvLink ? csvLink.href : null;
  });

  if (downloadHref) {
    console.log("Found download URL:", downloadHref);
    // Since NRCan now redirects to PowerApps, we might need to follow the redirect or just click it
    await page.goto(downloadHref, { waitUntil: 'networkidle0' }).catch(() => {});
    
    // Wait for file to download
    console.log("Waiting 10 seconds for download to complete...");
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Find the downloaded file
    const files = fs.readdirSync(downloadPath);
    const csvFile = files.find(f => f.endsWith('.csv') && f.includes('ASHP'));
    if (csvFile) {
      fs.renameSync(path.join(downloadPath, csvFile), path.join(downloadPath, 'nrcan-database.csv'));
      console.log("Successfully downloaded and renamed to nrcan-database.csv");
    } else {
      console.log("Could not find downloaded CSV file in", downloadPath);
    }
  } else {
    console.log("Could not find the CSV download link on the page.");
    
    // If it's the PowerApps page...
    console.log("Page title:", await page.title());
    console.log("Let's try to get the Energy Star dataset instead via API...");
  }

  await browser.close();
})();
