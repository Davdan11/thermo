const https = require('https');

https.get('https://html.duckduckgo.com/html/?q=amana+hvac+logo+transparent', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // try to find image urls
    const urls = data.match(/https?:\/\/[^"']*\.(png|jpg|jpeg)/gi);
    console.log(urls ? urls.slice(0, 5) : 'None');
  });
});
