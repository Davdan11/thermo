const http = require('http');

const start = Date.now();
http.get('http://localhost:3000/thermopompes', (res) => {
  res.on('data', () => {}); // consume
  res.on('end', () => {
    console.log(Page loaded in ms);
  });
}).on('error', (err) => console.log('Error:', err.message));
