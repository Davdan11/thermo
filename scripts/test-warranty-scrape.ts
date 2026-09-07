import * as cheerio from 'cheerio'; // assuming cheerio is installed because scrape-product-images uses it

async function scrapeWarranty(brandName: string) {
  const query = `${brandName} heat pump warranty years parts compressor`;
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    
    const html = await res.text();
    const $ = cheerio.load(html);
    const text = $('.result__snippet').text().toLowerCase();
    
    let parts = 10;
    let comp = 10;
    
    if (text.includes("12 ans") || text.includes("12-year") || text.includes("12 year")) {
      parts = 12; comp = 12;
    } else if (text.includes("5 ans") || text.includes("5 year")) {
      parts = 5;
    }
    
    console.log(`Brand: ${brandName} -> Parts: ${parts}, Compressor: ${comp}`);
    return { parts, comp };
  } catch (e: any) {
    console.error(`Error scraping ${brandName}`, e.message);
    return { parts: 10, comp: 10 };
  }
}

async function main() {
  await scrapeWarranty("Quebec Vair");
  await scrapeWarranty("Moovair");
  await scrapeWarranty("Daikin");
  await scrapeWarranty("Senville");
}

main();
